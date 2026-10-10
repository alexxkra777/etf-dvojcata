import { neon } from '@neondatabase/serverless';
import { HttpError, type LeadInput, type StoredEvent } from './validation.js';

export interface StoredLead extends LeadInput {
  created_at: string;
  last_seen_at: string;
  marketing_consent_at: string | null;
  sids: string[];
  consent_history: { at: string; version: string; marketing: boolean; sid: string }[];
}
export const memory = { events: [] as StoredEvent[], leads: new Map<string, StoredLead>() };
export function database() {
  return process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;
}
function eventCounts(events: StoredEvent[]) {
  const counts = new Map<string, number>();
  for (const event of events) counts.set(event.sid, (counts.get(event.sid) ?? 0) + 1);
  return counts;
}
function checkMemoryLimit(events: StoredEvent[]) {
  for (const [sid, count] of eventCounts(events)) {
    if (memory.events.filter(event => event.sid === sid).length + count > 300) throw new HttpError(429, 'session_limit');
  }
}
function eventQueries(sql: NonNullable<ReturnType<typeof database>>, events: StoredEvent[]) {
  return [
    ...[...eventCounts(events)].sort(([a], [b]) => a.localeCompare(b)).map(([sid, count]) => sql.query(`
      INSERT INTO event_sessions (sid, event_count) VALUES ($1::uuid, $2)
      ON CONFLICT (sid) DO UPDATE
      SET event_count = event_sessions.event_count + EXCLUDED.event_count
    `, [sid, count])),
    sql.query(`
      INSERT INTO events (sid, variant, type, section, value, props, utm, ref, path, ts, received_at, device, is_bot)
      SELECT sid, variant, type, section, value, props, utm, ref, path, ts, received_at, device, is_bot
      FROM jsonb_to_recordset($1::jsonb) AS e (
        sid uuid, variant text, type text, section text, value double precision,
        props jsonb, utm jsonb, ref text, path text, ts bigint,
        received_at timestamptz, device text, is_bot boolean
      )
    `, [JSON.stringify(events)]),
  ];
}
function databaseError(error: unknown): never {
  if ((error as { code?: string; table?: string }).code === '23514' &&
    (error as { table?: string }).table === 'event_sessions') throw new HttpError(429, 'session_limit');
  throw error;
}
export async function saveEvents(events: StoredEvent[]): Promise<void> {
  const sql = database();
  if (!sql) {
    checkMemoryLimit(events);
    memory.events.push(...events);
    console.log('Events stored in memory', { count: events.length });
    return;
  }
  try {
    await sql.transaction(eventQueries(sql, events));
  } catch (error) { databaseError(error); }
}

export async function saveLead(lead: LeadInput, now = new Date(), event?: StoredEvent): Promise<StoredLead> {
  const at = now.toISOString();
  const proof = { at, version: lead.notice_version, marketing: lead.marketing_consent, sid: lead.sid };
  const sql = database();
  if (!sql) {
    if (event) checkMemoryLimit([event]);
    const old = memory.leads.get(lead.email);
    // an unticked box on a later visit doesn't revoke an earlier opt-in, unsubscribing does
    const marketing = lead.marketing_consent || Boolean(old?.marketing_consent);
    const saved: StoredLead = {
      ...lead, marketing_consent: marketing,
      marketing_consent_at: lead.marketing_consent ? at : old?.marketing_consent_at ?? null,
      created_at: old?.created_at ?? at, last_seen_at: at,
      sids: [...new Set([...(old?.sids ?? []), lead.sid])],
      consent_history: [...(old?.consent_history ?? []), proof],
    };
    memory.leads.set(lead.email, saved);
    if (event) memory.events.push(event);
    console.log('Lead stored in memory');
    return saved;
  }
  const query = sql.query(`
    INSERT INTO leads (
      email, created_at, last_seen_at, notice_version, marketing_consent, marketing_consent_at,
      consent_history, sids, variant, utm, context
    ) VALUES ($1, $2, $2, $3, $9, CASE WHEN $9 THEN $2::timestamptz END, $4::jsonb, ARRAY[$5::uuid], $6, $7::jsonb, $8::jsonb)
    ON CONFLICT (email) DO UPDATE SET
      last_seen_at = EXCLUDED.last_seen_at,
      notice_version = EXCLUDED.notice_version,
      marketing_consent = leads.marketing_consent OR EXCLUDED.marketing_consent,
      marketing_consent_at = COALESCE(EXCLUDED.marketing_consent_at, leads.marketing_consent_at),
      consent_history = leads.consent_history || EXCLUDED.consent_history,
      sids = ARRAY(SELECT DISTINCT unnest(leads.sids || EXCLUDED.sids)),
      variant = EXCLUDED.variant, utm = EXCLUDED.utm, context = EXCLUDED.context
    RETURNING *
  `, [lead.email, at, lead.notice_version, JSON.stringify([proof]), lead.sid,
    lead.variant, JSON.stringify(lead.utm), JSON.stringify(lead.context), lead.marketing_consent]);
  try {
    const [rows] = await sql.transaction([query, ...(event ? eventQueries(sql, [event]) : [])]);
    return { ...rows[0], sid: lead.sid } as StoredLead;
  } catch (error) { return databaseError(error); }
}
