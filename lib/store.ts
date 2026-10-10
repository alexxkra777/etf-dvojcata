import { neon } from '@neondatabase/serverless';
import { HttpError, type LeadInput, type StoredEvent } from './validation.js';

export interface StoredLead extends LeadInput {
  created_at: string;
  last_seen_at: string;
  consent_at: string;
  sids: string[];
  consent_history: { at: string; version: string; sid: string }[];
}
export const memory = { events: [] as StoredEvent[], leads: new Map<string, StoredLead>() };
export function database() {
  return process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;
}
export async function saveEvents(events: StoredEvent[]): Promise<void> {
  const counts = new Map<string, number>();
  for (const event of events) counts.set(event.sid, (counts.get(event.sid) ?? 0) + 1);
  const sql = database();
  if (!sql) {
    for (const [sid, count] of counts) {
      if (memory.events.filter(event => event.sid === sid).length + count > 300) throw new HttpError(429, 'session_limit');
    }
    memory.events.push(...events);
    console.log('Events stored in memory', { count: events.length });
    return;
  }
  try {
    await sql.transaction([
      ...[...counts].sort(([a], [b]) => a.localeCompare(b)).map(([sid, count]) => sql.query(`
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
    ]);
  } catch (error) {
    if ((error as { code?: string; table?: string }).code === '23514' &&
      (error as { table?: string }).table === 'event_sessions') throw new HttpError(429, 'session_limit');
    throw error;
  }
}
export async function saveLead(lead: LeadInput, now = new Date()): Promise<StoredLead> {
  const at = now.toISOString();
  const proof = { at, version: lead.consent_text_version, sid: lead.sid };
  const sql = database();
  if (!sql) {
    const old = memory.leads.get(lead.email);
    const saved: StoredLead = {
      ...lead, created_at: old?.created_at ?? at, last_seen_at: at, consent_at: at,
      sids: [...new Set([...(old?.sids ?? []), lead.sid])],
      consent_history: [...(old?.consent_history ?? []), proof],
    };
    memory.leads.set(lead.email, saved);
    console.log('Lead stored in memory');
    return saved;
  }
  const rows = await sql.query(`
    INSERT INTO leads (
      email, created_at, last_seen_at, consent_at, consent_text_version,
      consent_history, sids, variant, utm, context
    ) VALUES ($1, $2, $2, $2, $3, $4::jsonb, ARRAY[$5::uuid], $6, $7::jsonb, $8::jsonb)
    ON CONFLICT (email) DO UPDATE SET
      last_seen_at = EXCLUDED.last_seen_at,
      consent_at = EXCLUDED.consent_at,
      consent_text_version = EXCLUDED.consent_text_version,
      consent_history = leads.consent_history || EXCLUDED.consent_history,
      sids = ARRAY(SELECT DISTINCT unnest(leads.sids || EXCLUDED.sids)),
      variant = EXCLUDED.variant, utm = EXCLUDED.utm, context = EXCLUDED.context
    RETURNING *
  `, [lead.email, at, lead.consent_text_version, JSON.stringify([proof]), lead.sid,
    lead.variant, JSON.stringify(lead.utm), JSON.stringify(lead.context)]);
  return { ...rows[0], consent: true, sid: lead.sid } as StoredLead;
}
