// First-party funnel tracking for /api/event. No cookies, no storage: the session id lives in memory
// and dies with the tab, so no consent is needed for this part.
import type { EventType, Utm } from '../lib/validation';

interface Event {
  sid: string; variant: string; type: EventType; section: string | null; value: number | null;
  props: Record<string, unknown>; utm: Utm; ref: string | null; path: string; ts: number;
}
interface Options { section?: string; value?: number; props?: Record<string, unknown> }

const ENDPOINT = '/api/event';
const MAX_EVENTS = 20; // per request, server limit
const MAX_BYTES = 3800; // server takes 4 096 bytes per request
const SESSION_CAP = 250; // server stops at 300 per session
const byteSize = (text: string) => new TextEncoder().encode(text).length;

function uuid(): string {
  if (crypto.randomUUID) return crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = [...bytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export const sid = uuid();
let variant = 'unknown';
let sent = 0;
const queue: Event[] = [];

export function readUtm(search = location.search): Utm {
  const params = new URLSearchParams(search);
  const utm: Utm = {};
  for (const key of ['source', 'medium', 'campaign', 'content', 'term'] as const) {
    const value = params.get(`utm_${key}`);
    if (value) utm[key] = value.slice(0, 64);
  }
  return utm;
}
const utm = readUtm();

function referrerHost(): string | null {
  try {
    const host = document.referrer ? new URL(document.referrer).hostname : '';
    return host && host !== location.hostname && host.length <= 253 ? host : null;
  } catch { return null; }
}
const ref = referrerHost();
const path = location.pathname.slice(0, 256) || '/';

export function track(type: EventType, options: Options = {}): void {
  if (sent + queue.length >= SESSION_CAP) return;
  queue.push({
    sid, variant, type, section: options.section ?? null, value: options.value ?? null,
    props: options.props ?? {}, utm, ref, path, ts: Date.now(),
  });
  if (import.meta.env.DEV) console.debug('[track]', type, options);
}

function post(body: string): void {
  const blob = new Blob([body], { type: 'application/json' });
  if (navigator.sendBeacon?.(ENDPOINT, blob)) return;
  fetch(ENDPOINT, { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'application/json' } })
    .catch(() => { /* analytics must never break the page */ });
}

export function flush(): void {
  while (queue.length) {
    const batch: Event[] = [];
    let body = '[]';
    while (queue.length && batch.length < MAX_EVENTS) {
      const next = JSON.stringify([...batch, queue[0]]);
      if (byteSize(next) > MAX_BYTES) break;
      batch.push(queue.shift()!);
      body = next;
    }
    if (!batch.length) { queue.shift(); continue; } // one oversized event: drop it rather than loop
    sent += batch.length;
    post(body);
  }
}

export function startTracking(id: string): void {
  variant = id;
  track('page_view');
  setInterval(flush, 2000);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  addEventListener('pagehide', flush);
  engagement();
  scrollDepth();
}

// engaged_5s / engaged_15s count only time with the tab visible
function engagement(): void {
  let visible = 0;
  const marks = [5, 15];
  const timer = setInterval(() => {
    if (document.visibilityState !== 'visible') return;
    visible++;
    if (visible === marks[0]) {
      track(marks.shift() === 5 ? 'engaged_5s' : 'engaged_15s');
      if (!marks.length) clearInterval(timer);
    }
  }, 1000);
}

function scrollDepth(): void {
  const marks = [25, 50, 75, 100];
  let ticking = false;
  const check = () => {
    ticking = false;
    const doc = document.documentElement;
    const seen = ((scrollY + innerHeight) / doc.scrollHeight) * 100;
    while (marks.length && seen >= marks[0] - 0.5) track('scroll_depth', { value: marks.shift() });
    if (!marks.length) removeEventListener('scroll', onScroll);
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } };
  addEventListener('scroll', onScroll, { passive: true });
}

// Fires once per element when half of it (or half the screen, for tall sections) has been on screen.
export function onceVisible(elements: Element[], callback: (element: Element) => void): void {
  const thresholds = Array.from({ length: 21 }, (_, index) => index / 20);
  const seen = new Set<Element>(); // one batch can hold several entries for the same element
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const needed = Math.min(entry.boundingClientRect.height, entry.rootBounds?.height ?? innerHeight) * 0.5;
      if (entry.isIntersecting && entry.intersectionRect.height >= needed - 1 && !seen.has(entry.target)) {
        seen.add(entry.target);
        observer.unobserve(entry.target);
        callback(entry.target);
      }
    }
  }, { threshold: thresholds });
  for (const element of elements) observer.observe(element);
}
