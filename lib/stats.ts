import { createHash, timingSafeEqual } from 'node:crypto';
import type { VercelRequest } from '@vercel/node';
import { HttpError } from './validation.js';
import { database, memory } from './store.js';
import { computeStats, summarizeStats, type Daily, type SessionSummary, type StatsOptions } from './funnel.js';

export function authorized(req: VercelRequest): boolean {
  const secret = process.env.STATS_TOKEN;
  const header = req.headers.authorization;
  const token = header?.startsWith('Bearer ') ? header.slice(7) : req.query.token;
  if (!secret || typeof token !== 'string') return false;
  const hash = (value: string) => createHash('sha256').update(value).digest();
  return timingSafeEqual(hash(token), hash(secret));
}
function date(value: unknown, end: boolean): Date | undefined {
  if (value === undefined) return undefined;
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2}))?$/.test(value)) throw new HttpError(400, 'invalid_date');
  const result = new Date(value);
  if (!Number.isFinite(result.getTime()) || new Date(value.slice(0, 10)).toISOString().slice(0, 10) !== value.slice(0, 10)) throw new HttpError(400, 'invalid_date');
  // A date-only end includes that entire UTC day.
  if (end && value.length === 10) result.setUTCDate(result.getUTCDate() + 1);
  return result;
}
export function statsOptions(query: VercelRequest['query'], now = new Date()): StatsOptions {
  const to = date(query.to, true) ?? now;
  const from = date(query.from, false) ?? new Date(to.getTime() - 30 * 86400000);
  if (from >= to) throw new HttpError(400, 'invalid_date_range');
  if (query.exclude_bots !== undefined && !['true', 'false'].includes(String(query.exclude_bots))) throw new HttpError(400, 'invalid_bot_filter');
  if (query.include_bots !== undefined && !['true', 'false'].includes(String(query.include_bots))) throw new HttpError(400, 'invalid_bot_filter');
  return { from, to, includeBots: query.include_bots === 'true' || query.exclude_bots === 'false' };
}
export const statsSql = `
  WITH filtered AS (
    SELECT * FROM events
    WHERE received_at >= $1::timestamptz AND received_at < $2::timestamptz
      AND ($3::boolean OR NOT is_bot)
  ), session_rollup AS (
    SELECT sid,
      (array_agg(variant ORDER BY received_at, id))[1] AS variant,
      (array_agg(COALESCE(utm->>'content', '') ORDER BY received_at, id))[1] AS utm_content,
      (array_agg(device ORDER BY received_at, id))[1] AS device,
      jsonb_build_object(
        'landed', bool_or(type = 'page_view'),
        'engaged', bool_or(type IN ('engaged_5s', 'calc_change', 'compare_filter', 'twin_open', 'cta_click')),
        'interacted_tool', bool_or(type IN ('calc_change', 'compare_filter', 'twin_open')),
        'cta_click', bool_or(type = 'cta_click'),
        'form_view', bool_or(type = 'form_view'),
        'form_focus', bool_or(type = 'form_focus'),
        'form_submit', bool_or(type = 'form_submit'),
        'lead_ok', bool_or(type = 'lead_ok')
      ) AS flags,
      min(received_at) FILTER (WHERE type = 'page_view') AS page_at,
      min(received_at) FILTER (WHERE type = 'lead_ok') AS lead_at
    FROM filtered GROUP BY sid
  ), daily_rollup AS (
    SELECT (received_at AT TIME ZONE 'UTC')::date::text AS date,
      count(DISTINCT sid) FILTER (WHERE type = 'page_view')::integer AS landed,
      count(DISTINCT sid) FILTER (WHERE type = 'lead_ok')::integer AS leads
    FROM filtered GROUP BY (received_at AT TIME ZONE 'UTC')::date
  )
  SELECT
    COALESCE((SELECT jsonb_agg(to_jsonb(s)) FROM session_rollup s), '[]'::jsonb) AS sessions,
    COALESCE((SELECT jsonb_agg(to_jsonb(d) ORDER BY date) FROM daily_rollup d), '[]'::jsonb) AS daily
`;
export async function getStats(options: StatsOptions) {
  const sql = database();
  if (!sql) return computeStats(memory.events, options);
  const [row] = await sql.query(statsSql, [options.from.toISOString(), options.to.toISOString(), options.includeBots]);
  return summarizeStats(row.sessions as SessionSummary[], row.daily as Daily[], options);
}
