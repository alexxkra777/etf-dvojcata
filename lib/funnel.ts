import type { StoredEvent } from './validation.js';

export const steps = ['landed', 'engaged', 'interacted_tool', 'cta_click', 'form_view', 'form_focus', 'form_submit', 'lead_ok'] as const;
export type Step = typeof steps[number];
export interface StatsOptions { from: Date; to: Date; includeBots: boolean }
export interface SessionSummary {
  sid: string;
  variant: string;
  utm_content: string;
  device: string;
  flags: Record<Step, boolean>;
  page_at: string | null;
  lead_at: string | null;
}
export interface Daily { date: string; landed: number; leads: number }
const toolTypes = new Set(['calc_change', 'compare_filter', 'twin_open']);
const engagedTypes = new Set(['engaged_5s', ...toolTypes, 'cta_click']);

function funnel(sessions: SessionSummary[]) {
  const counts = steps.map(step => sessions.filter(session => session.flags[step]).length);
  return steps.map((step, index) => ({
    step, sessions: counts[index],
    step_conversion: (index ? counts[index - 1] : counts[0]) ? counts[index] / (index ? counts[index - 1] : counts[0]) : null,
    overall_conversion: counts[0] ? counts[index] / counts[0] : null,
  }));
}
function split(sessions: SessionSummary[], key: 'variant' | 'utm_content' | 'device') {
  const groups = new Map<string, SessionSummary[]>();
  for (const session of sessions) {
    const group = groups.get(session[key]) ?? [];
    group.push(session);
    groups.set(session[key], group);
  }
  return Object.fromEntries([...groups].sort(([a], [b]) => a.localeCompare(b)).map(([name, group]) => [name, funnel(group)]));
}
export function summarizeStats(sessions: SessionSummary[], daily: Daily[], options: StatsOptions) {
  const times = sessions.flatMap(session => {
    if (!session.page_at || !session.lead_at) return [];
    const duration = Date.parse(session.lead_at) - Date.parse(session.page_at);
    return duration >= 0 ? [duration] : [];
  }).sort((a, b) => a - b);
  const middle = Math.floor(times.length / 2);
  const median = times.length ? times.length % 2 ? times[middle] : (times[middle - 1] + times[middle]) / 2 : null;
  return {
    from: options.from.toISOString(), to: options.to.toISOString(), include_bots: options.includeBots,
    funnel: funnel(sessions), by_variant: split(sessions, 'variant'),
    by_utm_content: split(sessions, 'utm_content'), by_device: split(sessions, 'device'),
    daily, median_time_to_lead_ms: median,
  };
}
export function computeStats(events: StoredEvent[], options: StatsOptions) {
  const filtered = events.filter(event => {
    const at = Date.parse(event.received_at);
    return at >= options.from.getTime() && at < options.to.getTime() && (options.includeBots || !event.is_bot);
  }).sort((a, b) => Date.parse(a.received_at) - Date.parse(b.received_at));
  const sessions = new Map<string, SessionSummary>();
  const days = new Map<string, { landed: Set<string>; leads: Set<string> }>();
  for (const event of filtered) {
    let session = sessions.get(event.sid);
    if (!session) {
      session = {
        sid: event.sid, variant: event.variant, utm_content: event.utm.content ?? '', device: event.device,
        flags: Object.fromEntries(steps.map(step => [step, false])) as Record<Step, boolean>,
        page_at: null, lead_at: null,
      };
      sessions.set(event.sid, session);
    }
    if (event.type === 'page_view') {
      session.flags.landed = true;
      session.page_at ??= event.received_at;
    }
    if (engagedTypes.has(event.type)) session.flags.engaged = true;
    if (toolTypes.has(event.type)) session.flags.interacted_tool = true;
    if (['cta_click', 'form_view', 'form_focus', 'form_submit', 'lead_ok'].includes(event.type)) {
      session.flags[event.type as Step] = true;
    }
    if (event.type === 'lead_ok') session.lead_at ??= event.received_at;
    const date = new Date(event.received_at).toISOString().slice(0, 10);
    const day = days.get(date) ?? { landed: new Set<string>(), leads: new Set<string>() };
    if (event.type === 'page_view') day.landed.add(event.sid);
    if (event.type === 'lead_ok') day.leads.add(event.sid);
    days.set(date, day);
  }
  const daily = [...days].sort(([a], [b]) => a.localeCompare(b)).map(([date, day]) => ({ date, landed: day.landed.size, leads: day.leads.size }));
  return summarizeStats([...sessions.values()], daily, options);
}
