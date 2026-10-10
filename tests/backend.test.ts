import type { VercelRequest, VercelResponse } from '@vercel/node';
import { resolveMx, resolve4 } from 'node:dns/promises';
import { Readable } from 'node:stream';
import { waitUntil } from '@vercel/functions';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import eventHandler from '../api/event.js';
import leadHandler from '../api/lead.js';
import statsHandler from '../api/stats.js';
import { checkDomain } from '../lib/dns.js';
import { computeStats } from '../lib/funnel.js';
import { readBody } from '../lib/http.js';
import { memory, saveEvents, saveLead } from '../lib/store.js';
import { enrich, parseEvents, parseLead, type EventType, type StoredEvent } from '../lib/validation.js';

vi.mock('../lib/dns.js', () => ({ checkDomain: vi.fn() }));
vi.mock('@vercel/functions', () => ({ waitUntil: vi.fn() }));
vi.mock('node:dns/promises', () => ({ resolveMx: vi.fn(), resolve4: vi.fn() }));
const actualDns = await vi.importActual<typeof import('../lib/dns.js')>('../lib/dns.js');

const SID = '12345678-1234-4234-8234-123456789abc';
const SID2 = '22345678-1234-4234-8234-123456789abc';
const SID3 = '32345678-1234-4234-8234-123456789abc';
const baseEvent = { sid: SID, variant: 'a', type: 'page_view', ts: 1000 };
const baseLead = {
  email: ' Investor@Example.cz ', consent: true, consent_text_version: '2026-10',
  sid: SID, variant: 'a', utm: {}, context: {}, company: '',
};

function request(body: unknown, method = 'POST', headers: Record<string, string> = {}, query: Record<string, string> = {}) {
  return { body, method, headers, query } as unknown as VercelRequest;
}

function streamRequest(chunks: Buffer[]) {
  const req = Object.assign(Readable.from(chunks), {
    method: 'POST', headers: { 'content-type': 'application/json' }, query: {},
  });
  const bodyGetter = vi.fn(() => { throw new Error('Body getter accessed'); });
  Object.defineProperty(req, 'body', { get: bodyGetter });
  return { req: req as unknown as VercelRequest, bodyGetter };
}

function response() {
  const result = { statusCode: 200, body: undefined as unknown, headers: {} as Record<string, unknown>, ended: false };
  const res = {
    status(code: number) { result.statusCode = code; return res; },
    json(body: unknown) { result.body = body; return res; },
    setHeader(name: string, value: unknown) { result.headers[name.toLowerCase()] = value; return res; },
    end() { result.ended = true; return res; },
  };
  return { res: res as unknown as VercelResponse, result };
}

function event(type: EventType, sid = SID, ts = 1000, extra: Partial<StoredEvent> = {}): StoredEvent {
  const receivedAt = new Date(Date.parse('2026-10-10T12:00:00Z') + ts - 1000);
  return { ...enrich(parseEvents({ ...baseEvent, type, sid, ts })[0], '', receivedAt), ...extra };
}

beforeEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
  vi.stubEnv('DATABASE_URL', '');
  vi.stubEnv('LEAD_WEBHOOK_URL', '');
  vi.stubEnv('STATS_TOKEN', 'test-secret');
  vi.clearAllMocks();
  vi.mocked(checkDomain).mockResolvedValue(true);
  memory.events.length = 0;
  memory.leads.clear();
  vi.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => { vi.useRealTimers(); });

describe('event validation', () => {
  it('accepts one event and supplies safe defaults', () => {
    expect(parseEvents(baseEvent)[0]).toMatchObject({ sid: SID, path: '/', value: null, props: {}, utm: {}, ref: null });
  });

  it.each([
    { sid: 'not-a-uuid' }, { sid: '12345678-1234-1234-8234-123456789abc' },
    { type: 'unknown' }, { variant: 'a'.repeat(17) }, { section: 'a'.repeat(33) },
    { value: Number.NaN }, { value: '1' }, { ts: -1 }, { ts: 0.5 },
    { props: [] }, { props: { text: 'a'.repeat(1024) } },
    { utm: { content: 'a'.repeat(65) } }, { ref: 'https://example.cz/private' },
    { path: '//example.cz' }, { path: '/?email=private' },
  ])('rejects invalid fields: %j', patch => {
    expect(() => parseEvents({ ...baseEvent, ...patch })).toThrow();
  });

  it('accepts 20 events and rejects empty or larger batches', () => {
    expect(parseEvents(Array.from({ length: 20 }, () => baseEvent))).toHaveLength(20);
    expect(() => parseEvents([])).toThrow();
    expect(() => parseEvents(Array.from({ length: 21 }, () => baseEvent))).toThrow();
  });

  it('classifies devices and flags bots without saving the user agent', () => {
    const input = parseEvents(baseEvent)[0];
    expect(enrich(input, 'Mozilla iPhone Mobile').device).toBe('mobile');
    expect(enrich(input, 'Mozilla Android Tablet').device).toBe('tablet');
    expect(enrich(input, 'Mozilla Desktop').device).toBe('desktop');
    const bot = enrich(input, 'Googlebot');
    expect(bot.is_bot).toBe(true);
    expect(bot).not.toHaveProperty('ua');
    expect(bot).not.toHaveProperty('ip');
  });
});

describe('event endpoint and body limits', () => {
  it.each(['application/json', 'text/plain;charset=UTF-8'])('accepts %s JSON', async contentType => {
    const { res, result } = response();
    await eventHandler(request(JSON.stringify(baseEvent), 'POST', { 'content-type': contentType }), res);
    expect(result.statusCode).toBe(204);
    expect(result.ended).toBe(true);
    expect(memory.events).toHaveLength(1);
  });

  it('rejects malformed JSON and invalid events', async () => {
    for (const body of ['{', { ...baseEvent, type: 'unsupported' }]) {
      const { res, result } = response();
      await eventHandler(request(body), res);
      expect(result.statusCode).toBe(400);
    }
    expect(memory.events).toHaveLength(0);
  });

  it('rejects bodies over 4096 bytes, including multibyte text', async () => {
    const { res, result } = response();
    await eventHandler(request(JSON.stringify({ ...baseEvent, padding: 'č'.repeat(2048) })), res);
    expect(result.statusCode).toBe(413);
    expect(memory.events).toHaveLength(0);
  });

  it('checks declared body length before parsing', async () => {
    await expect(readBody(request(baseEvent, 'POST', { 'content-length': '4097' }), 4096))
      .rejects.toMatchObject({ status: 413 });
  });

  it('counts raw JSON whitespace before a lazy body getter', async () => {
    const { req, bodyGetter } = streamRequest([Buffer.from(JSON.stringify(baseEvent) + ' '.repeat(4096))]);
    const { res, result } = response();
    await eventHandler(req, res);
    expect(result.statusCode).toBe(413);
    expect(bodyGetter).not.toHaveBeenCalled();
    expect(memory.events).toHaveLength(0);
  });

  it('returns 400 for malformed streamed application/json', async () => {
    const { req, bodyGetter } = streamRequest([Buffer.from('{"sid":')]);
    const { res, result } = response();
    await eventHandler(req, res);
    expect(result.statusCode).toBe(400);
    expect(bodyGetter).not.toHaveBeenCalled();
  });

  it('parses multibyte characters split across stream chunks', async () => {
    const bytes = Buffer.from(JSON.stringify({ ...baseEvent, props: { text: 'český investor' } }));
    const split = bytes.indexOf(Buffer.from('č')) + 1;
    const { req, bodyGetter } = streamRequest([bytes.subarray(0, split), bytes.subarray(split)]);
    const { res, result } = response();
    await eventHandler(req, res);
    expect(result.statusCode).toBe(204);
    expect(memory.events[0].props).toEqual({ text: 'český investor' });
    expect(bodyGetter).not.toHaveBeenCalled();
  });

  it('limits chunked multibyte JSON by bytes rather than characters', async () => {
    const bytes = Buffer.from(JSON.stringify({ ...baseEvent, padding: 'č'.repeat(2048) }));
    const { req, bodyGetter } = streamRequest([bytes.subarray(0, 2000), bytes.subarray(2000)]);
    const { res, result } = response();
    await eventHandler(req, res);
    expect(result.statusCode).toBe(413);
    expect(bodyGetter).not.toHaveBeenCalled();
    expect(memory.events).toHaveLength(0);
  });

  it('rejects a batch of 21 events', async () => {
    const { res, result } = response();
    await eventHandler(request(Array.from({ length: 21 }, () => baseEvent)), res);
    expect(result.statusCode).toBe(400);
  });

  it('accepts 300 events per session and rejects the next one', async () => {
    await saveEvents(Array.from({ length: 300 }, () => event('page_view')));
    const { res, result } = response();
    await eventHandler(request(baseEvent), res);
    expect(result.statusCode).toBe(429);
    expect(memory.events).toHaveLength(300);
    await saveEvents([event('page_view', SID2)]);
    expect(memory.events).toHaveLength(301);
  });

  it('rejects an over-limit batch atomically', async () => {
    await saveEvents(Array.from({ length: 299 }, () => event('page_view')));
    await expect(saveEvents([event('page_view', SID2), event('page_view'), event('page_view')]))
      .rejects.toMatchObject({ status: 429 });
    expect(memory.events).toHaveLength(299);
  });

  it('rejects other methods', async () => {
    const { res, result } = response();
    await eventHandler(request(undefined, 'GET'), res);
    expect(result.statusCode).toBe(405);
    expect(result.headers.allow).toBe('POST');
  });
});

describe('lead validation and storage', () => {
  it('normalizes email and requires literal consent', () => {
    expect(parseLead(baseLead).email).toBe('investor@example.cz');
    for (const consent of [false, 'true', 1, undefined]) {
      expect(() => parseLead({ ...baseLead, consent })).toThrow();
    }
  });

  it.each(['invalid', 'a@', 'a@example', '.a@example.cz', 'a..b@example.cz', 'a.@example.cz', 'a'.repeat(255) + '@example.cz'])
    ('rejects invalid email %s with a field error', email => {
      try { parseLead({ ...baseLead, email }); throw new Error('Expected validation error'); }
      catch (error) { expect(error).toMatchObject({ status: 422, field: 'email', code: 'invalid' }); }
    });

  it('limits calculator context and requires a consent version', () => {
    expect(() => parseLead({ ...baseLead, context: { text: 'a'.repeat(2048) } })).toThrow();
    expect(() => parseLead({ ...baseLead, consent_text_version: '' })).toThrow();
  });

  it('keeps first creation time, session history and consent proof on upsert', async () => {
    const first = await saveLead(parseLead(baseLead), new Date('2026-10-01T12:00:00Z'));
    const second = await saveLead(parseLead({ ...baseLead, sid: SID2, consent_text_version: '2026-11' }), new Date('2026-10-10T12:00:00Z'));
    expect(memory.leads.size).toBe(1);
    expect(second.created_at).toBe(first.created_at);
    expect(second.last_seen_at).toBe('2026-10-10T12:00:00.000Z');
    expect(second.sids).toEqual([SID, SID2]);
    expect(second.consent_history).toHaveLength(2);
    expect(second.consent_history[1]).toEqual({ at: second.consent_at, version: '2026-11', sid: SID2 });
  });
});

describe('lead endpoint', () => {
  it('pretends success for the honeypot without DNS or storage', async () => {
    const { res, result } = response();
    await leadHandler(request({ ...baseLead, company: 'Spam company' }), res);
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual({ ok: true, guide_url: '/pruvodce-etf.pdf' });
    expect(memory.leads.size).toBe(0);
    expect(memory.events).toHaveLength(0);
    expect(checkDomain).not.toHaveBeenCalled();
  });

  it('stores a valid lead and a server-side success event', async () => {
    const { res, result } = response();
    await leadHandler(request(baseLead), res);
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual({ ok: true, guide_url: '/pruvodce-etf.pdf' });
    expect(memory.leads.has('investor@example.cz')).toBe(true);
    expect(memory.events).toEqual([expect.objectContaining({ type: 'lead_ok', sid: SID })]);
    expect(checkDomain).toHaveBeenCalledWith('example.cz');
  });

  it('rejects nonexistent email domains with a field error', async () => {
    vi.mocked(checkDomain).mockResolvedValue(false);
    const { res, result } = response();
    await leadHandler(request(baseLead), res);
    expect(result.statusCode).toBe(422);
    expect(result.body).toEqual({ ok: false, field: 'email', code: 'no_domain' });
    expect(memory.leads.size).toBe(0);
  });

  it('returns an email field error before DNS for invalid email', async () => {
    const { res, result } = response();
    await leadHandler(request({ ...baseLead, email: 'invalid' }), res);
    expect(result.statusCode).toBe(422);
    expect(result.body).toEqual({ ok: false, field: 'email', code: 'invalid' });
    expect(checkDomain).not.toHaveBeenCalled();
  });

  it('requires consent', async () => {
    const { res, result } = response();
    await leadHandler(request({ ...baseLead, consent: 'true' }), res);
    expect(result.statusCode).toBe(400);
    expect(memory.leads.size).toBe(0);
  });

  it('does not store a lead when its success event exceeds the session limit', async () => {
    await saveEvents(Array.from({ length: 300 }, () => event('page_view')));
    const { res, result } = response();
    await leadHandler(request(baseLead), res);
    expect(result.statusCode).toBe(429);
    expect(memory.leads.size).toBe(0);
    expect(memory.events).toHaveLength(300);
    expect(memory.events.every(item => item.type === 'page_view')).toBe(true);
  });

  it('returns success while webhook delivery is still pending', async () => {
    vi.stubEnv('LEAD_WEBHOOK_URL', 'https://mail.example.cz/lead');
    let finishDelivery!: (value: Response) => void;
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockImplementation(() => new Promise(resolve => { finishDelivery = resolve; }));
    const timeout = vi.spyOn(AbortSignal, 'timeout');
    const { res, result } = response();
    await leadHandler(request(baseLead), res);
    expect(result.statusCode).toBe(200);
    expect(waitUntil).toHaveBeenCalledOnce();
    const completion = vi.mocked(waitUntil).mock.calls[0][0];
    expect(completion).toBeInstanceOf(Promise);
    expect(fetchMock).toHaveBeenCalledWith('https://mail.example.cz/lead', expect.objectContaining({
      method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: expect.any(AbortSignal),
    }));
    expect(timeout).toHaveBeenCalledWith(2000);
    const payload = JSON.parse(fetchMock.mock.calls[0][1]?.body as string);
    expect(payload).toMatchObject({ email: 'investor@example.cz', consent: true, consent_text_version: '2026-10' });
    finishDelivery(new Response(null, { status: 200 }));
    await completion;
  });

  it('keeps a successful lead response when webhook returns 500', async () => {
    vi.stubEnv('LEAD_WEBHOOK_URL', 'https://mail.example.cz/lead');
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 500 }));
    const errorLog = vi.spyOn(console, 'error').mockImplementation(() => {});
    const { res, result } = response();
    await leadHandler(request(baseLead), res);
    expect(result.statusCode).toBe(200);
    await vi.mocked(waitUntil).mock.calls[0][0];
    expect(errorLog).toHaveBeenCalled();
    expect(memory.leads.size).toBe(1);
  });
});

describe('email domain lookup', () => {
  const missing = () => Object.assign(new Error('Domain missing'), { code: 'ENOTFOUND' });

  it('accepts a domain with an MX record', async () => {
    vi.mocked(resolveMx).mockResolvedValue([{ exchange: 'mail.example.cz', priority: 10 }]);
    vi.mocked(resolve4).mockRejectedValue(missing());
    expect(await actualDns.checkDomain('example.cz')).toBe(true);
  });

  it('accepts an A record when MX is missing', async () => {
    vi.mocked(resolveMx).mockRejectedValue(missing());
    vi.mocked(resolve4).mockResolvedValue(['192.0.2.1']);
    expect(await actualDns.checkDomain('example.cz')).toBe(true);
  });

  it('rejects NXDOMAIN when neither record exists', async () => {
    vi.mocked(resolveMx).mockRejectedValue(missing());
    vi.mocked(resolve4).mockRejectedValue(missing());
    expect(await actualDns.checkDomain('example.cz')).toBe(false);
  });

  it('accepts after 1.5 seconds if DNS remains pending', async () => {
    vi.useFakeTimers();
    vi.mocked(resolveMx).mockImplementation(() => new Promise(() => {}));
    vi.mocked(resolve4).mockImplementation(() => new Promise(() => {}));
    const lookup = actualDns.checkDomain('example.cz');
    await vi.advanceTimersByTimeAsync(1500);
    expect(await lookup).toBe(true);
    expect(vi.getTimerCount()).toBe(0);
  });

  it('does not treat a null MX record as a mail domain', async () => {
    vi.mocked(resolveMx).mockResolvedValue([{ exchange: '.', priority: 0 }]);
    vi.mocked(resolve4).mockRejectedValue(missing());
    expect(await actualDns.checkDomain('example.cz')).toBe(false);
  });
});

describe('stats authorization', () => {
  it.each([
    [{}, {}], [{ authorization: 'Bearer wrong-secret' }, {}],
    [{ authorization: 'Basic test-secret' }, {}], [{}, { token: 'wrong' }],
  ])('rejects missing or incorrect tokens', async (headers, query) => {
    const { res, result } = response();
    await statsHandler(request(undefined, 'GET', headers, query), res);
    expect(result.statusCode).toBe(401);
  });

  it.each([
    [{ authorization: 'Bearer test-secret' }, {}], [{}, { token: 'test-secret' }],
  ])('accepts bearer or query token', async (headers, query) => {
    const { res, result } = response();
    await statsHandler(request(undefined, 'GET', headers, query), res);
    expect(result.statusCode).toBe(200);
    expect(result.body).toHaveProperty('funnel');
  });

  it('rejects all requests when the configured token is missing', async () => {
    vi.stubEnv('STATS_TOKEN', '');
    const { res, result } = response();
    await statsHandler(request(undefined, 'GET', {}, { token: '' }), res);
    expect(result.statusCode).toBe(401);
  });

  it.each([
    { from: '2026-02-30', to: '2026-03-10' },
    { from: '2026-10-11', to: '2026-10-10' },
    { from: 'yesterday', to: '2026-10-10' },
    { from: '2026-10-01', to: '2026-13-10' },
  ])('rejects invalid query dates: %j', async dates => {
    const { res, result } = response();
    await statsHandler(request(undefined, 'GET', { authorization: 'Bearer test-secret' }, dates), res);
    expect(result.statusCode).toBe(400);
  });

  it('includes the full UTC day for a date-only to value', async () => {
    memory.events.push(
      event('page_view', SID, 1000, { received_at: '2026-10-10T23:59:59.999Z' }),
      event('page_view', SID2, 1000, { received_at: '2026-10-11T00:00:00.000Z' }),
    );
    const { res, result } = response();
    await statsHandler(request(undefined, 'GET', { authorization: 'Bearer test-secret' }, { from: '2026-10-10', to: '2026-10-10' }), res);
    expect(result.statusCode).toBe(200);
    expect(result.body).toMatchObject({
      to: '2026-10-11T00:00:00.000Z',
      funnel: expect.arrayContaining([expect.objectContaining({ step: 'landed', sessions: 1 })]),
    });
  });
});

describe('in-memory funnel', () => {
  const range = { from: new Date('2026-10-01T00:00:00Z'), to: new Date('2026-10-11T00:00:00Z'), includeBots: false };

  it('counts unique sessions, conversions, daily totals and median duration', () => {
    const stats = computeStats([
      event('page_view'), event('page_view', SID, 1500), event('calc_change', SID, 2000),
      event('cta_click', SID, 2500), event('form_view', SID, 3000), event('form_focus', SID, 3500),
      event('form_submit', SID, 4000), event('lead_ok', SID, 6000), event('lead_ok', SID, 6500),
      event('page_view', SID2), event('engaged_5s', SID2, 2000), event('lead_ok', SID2, 10000),
      event('page_view', SID3),
    ], range);
    const steps = Object.fromEntries(stats.funnel.map(step => [step.step, step]));
    expect(steps.landed.sessions).toBe(3);
    expect(steps.engaged.sessions).toBe(2);
    expect(steps.interacted_tool.sessions).toBe(1);
    expect(steps.cta_click.sessions).toBe(1);
    expect(steps.form_view.sessions).toBe(1);
    expect(steps.form_focus.sessions).toBe(1);
    expect(steps.form_submit.sessions).toBe(1);
    expect(steps.lead_ok.sessions).toBe(2);
    expect(steps.engaged.step_conversion).toBeCloseTo(2 / 3);
    expect(steps.lead_ok.overall_conversion).toBeCloseTo(2 / 3);
    expect(stats.daily).toContainEqual({ date: '2026-10-10', landed: 3, leads: 2 });
    expect(stats.median_time_to_lead_ms).toBe(7000);
  });

  it('excludes bots by default and filters events outside the range', () => {
    const events = [
      event('page_view'), event('page_view', SID2, 1000, { is_bot: true }),
      event('page_view', SID3, 1000, { received_at: '2026-09-30T12:00:00Z' }),
    ];
    expect(computeStats(events, range).funnel[0].sessions).toBe(1);
    expect(computeStats(events, { ...range, includeBots: true }).funnel[0].sessions).toBe(2);
  });

  it('handles empty data without NaN conversion or duration', () => {
    const stats = computeStats([], range);
    expect(stats.funnel.every(step => step.sessions === 0 && step.step_conversion === null && step.overall_conversion === null)).toBe(true);
    expect(stats.median_time_to_lead_ms).toBeNull();
  });

  it('splits sessions by their first variant, ad version and device', () => {
    const stats = computeStats([
      event('page_view', SID, 1000, { variant: 'a', utm: { content: 'ad-a' }, device: 'mobile' }),
      event('lead_ok', SID, 3000, { variant: 'b', utm: { content: 'ad-b' }, device: 'desktop' }),
      event('page_view', SID2, 1000, { variant: 'b', utm: { content: 'ad-b' }, device: 'desktop' }),
    ], range);
    expect(stats.by_variant.a[0].sessions).toBe(1);
    expect(stats.by_variant.a.at(-1)?.sessions).toBe(1);
    expect(stats.by_variant.b.at(-1)?.sessions).toBe(0);
    expect(stats.by_utm_content['ad-a'].at(-1)?.sessions).toBe(1);
    expect(stats.by_device.mobile.at(-1)?.sessions).toBe(1);
    expect(stats.by_device.desktop.at(-1)?.sessions).toBe(0);
  });
});
