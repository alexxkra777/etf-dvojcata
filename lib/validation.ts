export const eventTypes = [
  'page_view', 'section_view', 'scroll_depth', 'engaged_5s', 'engaged_15s',
  'calc_change', 'compare_filter', 'twin_open', 'cta_click', 'form_view',
  'form_focus', 'form_submit', 'lead_ok', 'lead_error', 'pdf_download', 'share_click',
] as const;
export type EventType = typeof eventTypes[number];
export type Utm = Partial<Record<'source' | 'medium' | 'campaign' | 'content' | 'term', string>>;
export type Device = 'mobile' | 'tablet' | 'desktop';
export interface EventInput {
  sid: string;
  variant: string;
  type: EventType;
  section: string | null;
  value: number | null;
  props: Record<string, unknown>;
  utm: Utm;
  ref: string | null;
  path: string;
  ts: number;
}
export interface StoredEvent extends EventInput {
  received_at: string;
  device: Device;
  is_bot: boolean;
}
export interface LeadInput {
  email: string;
  consent: true;
  consent_text_version: string;
  sid: string;
  variant: string;
  utm: Utm;
  context: Record<string, unknown>;
}
export class HttpError extends Error {
  constructor(public status: number, public code: string, public field?: string) {
    super(code);
  }
}
const invalid = () => { throw new HttpError(400, 'invalid_payload'); };
export function object(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return invalid();
  return value as Record<string, unknown>;
}
function string(value: unknown, max: number, empty = false): string {
  if (typeof value !== 'string' || value.length > max || (!empty && !value.length)) return invalid();
  return value;
}
export function sid(value: unknown): string {
  const result = string(value, 36);
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(result)) return invalid();
  return result.toLowerCase();
}
function smallObject(value: unknown, max: number): Record<string, unknown> {
  const result = value === undefined ? {} : object(value);
  try {
    if (Buffer.byteLength(JSON.stringify(result)) > max) return invalid();
  } catch { return invalid(); }
  return result;
}
function utm(value: unknown): Utm {
  if (value === undefined) return {};
  const input = object(value);
  const result: Utm = {};
  for (const key of ['source', 'medium', 'campaign', 'content', 'term'] as const) {
    if (input[key] !== undefined) result[key] = string(input[key], 64, true);
  }
  return result;
}
export function parseEvents(value: unknown): EventInput[] {
  const items = Array.isArray(value) ? value : [value];
  if (items.length < 1 || items.length > 20) return invalid();
  return items.map(item => {
    const input = object(item);
    if (!eventTypes.includes(input.type as EventType)) return invalid();
    if (input.value !== undefined && input.value !== null &&
      (typeof input.value !== 'number' || !Number.isFinite(input.value))) return invalid();
    if (typeof input.ts !== 'number' || !Number.isSafeInteger(input.ts) || input.ts < 0 || input.ts > 8640000000000000) return invalid();
    const path = input.path === undefined ? '/' : string(input.path, 256);
    if (!path.startsWith('/') || path.startsWith('//') || /[?#\s\\]/.test(path)) return invalid();
    let ref: string | null = null;
    if (input.ref !== undefined && input.ref !== null && input.ref !== '') {
      ref = string(input.ref, 253);
      if (!/^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(ref)) return invalid();
      ref = ref.toLowerCase();
    }
    return {
      sid: sid(input.sid), variant: string(input.variant, 16), type: input.type as EventType,
      section: input.section == null ? null : string(input.section, 32, true),
      value: input.value == null ? null : input.value as number,
      props: smallObject(input.props, 1024), utm: utm(input.utm), ref, path, ts: input.ts,
    };
  });
}
export function parseLead(value: unknown): LeadInput {
  const input = object(value);
  const email = typeof input.email === 'string' ? input.email.trim().toLowerCase() : '';
  if (email.length > 254 || !/^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/.test(email) ||
    email.split('@')[0].length > 64 || email.startsWith('.') || email.includes('..') || email.split('@')[0].endsWith('.')) {
    throw new HttpError(422, 'invalid', 'email');
  }
  if (input.consent !== true) throw new HttpError(400, 'consent_required', 'consent');
  return {
    email, consent: true, consent_text_version: string(input.consent_text_version, 128),
    sid: sid(input.sid), variant: string(input.variant, 16), utm: utm(input.utm),
    context: smallObject(input.context, 2048),
  };
}
export function enrich(event: EventInput, ua: string, now = new Date()): StoredEvent {
  return {
    ...event, received_at: now.toISOString(),
    device: /ipad|tablet|playbook|silk|android(?!.*mobile)/i.test(ua) ? 'tablet' :
      /mobi|iphone|ipod|android/i.test(ua) ? 'mobile' : 'desktop',
    is_bot: /bot|crawl|spider|slurp|headless|facebookexternalhit|preview|curl|wget/i.test(ua),
  };
}
