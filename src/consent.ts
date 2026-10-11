// Optional ad pixels. This file is only loaded when VITE_META_PIXEL_ID or VITE_GA4_ID is set at build time.
// No env vars -> no pixels -> nothing to consent to, so there's no cookie bar at all (our own tracking is cookieless).
// With them: a small bar, "Přijmout" and "Odmítnout" with equal weight, and the scripts load only after "Přijmout".
import { leadListeners } from './lead';

const META = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
const GA4 = import.meta.env.VITE_GA4_ID as string | undefined;
const KEY = 'consent-marketing-v1';

type Fn = ((...args: unknown[]) => void) & { queue?: unknown[]; callMethod?: (...args: unknown[]) => void; loaded?: boolean; version?: string; push?: unknown };
declare global { interface Window { fbq?: Fn; _fbq?: Fn; dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } }

function script(src: string): void {
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = src;
  document.head.append(tag);
}

function loadPixels(): void {
  if (META && !window.fbq) {
    const fbq: Fn = (...args) => { fbq.callMethod ? fbq.callMethod(...args) : fbq.queue!.push(args); };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.push = fbq;
    window.fbq = window._fbq = fbq;
    script('https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', META);
    fbq('track', 'PageView');
  }
  if (GA4 && !window.gtag) {
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = function gtag() { window.dataLayer!.push(arguments); }; // gtag wants the arguments object
    script(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4)}`);
    window.gtag('js', new Date());
    window.gtag('config', GA4, { anonymize_ip: true });
  }
  leadListeners.push(() => {
    window.fbq?.('track', 'Lead');
    window.gtag?.('event', 'generate_lead');
  });
}

function remember(value: 'yes' | 'no'): void {
  try { localStorage.setItem(KEY, value); } catch { /* private mode: they'll just see the bar again */ }
}

export function initConsent(): void {
  let saved: string | null = null;
  try { saved = localStorage.getItem(KEY); } catch { /* ignore */ }
  if (saved === 'yes') { loadPixels(); return; }
  if (saved === 'no') return;

  const names = [META && 'Meta Pixel', GA4 && 'Google Analytics'].filter(Boolean).join(' a ');
  const bar = document.createElement('div');
  bar.className = 'consent';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Souhlas s měřením reklamy');
  bar.innerHTML = `<p>Smíme použít ${names}? Pomáhá nám to zjistit, která reklama funguje. Bez souhlasu se nenačtou. <button class="linkish" type="button" data-more>Nastavení</button></p>
  <p class="consent__more" hidden>${names} ukládá cookies a posílá údaje o návštěvě společnostem Meta a Google, i mimo EU. Souhlas můžete kdykoli odvolat smazáním dat webu v prohlížeči. Naše vlastní měření běží bez cookies vždy.</p>
  <div class="consent__btns"><button class="btn btn--line" type="button" data-choice="yes">Přijmout</button><button class="btn btn--line" type="button" data-choice="no">Odmítnout</button></div>`;
  bar.addEventListener('click', event => {
    const target = event.target as HTMLElement;
    if (target.matches('[data-more]')) { bar.querySelector<HTMLElement>('.consent__more')!.hidden = false; return; }
    const choice = target.closest<HTMLElement>('[data-choice]')?.dataset.choice as 'yes' | 'no' | undefined;
    if (!choice) return;
    remember(choice);
    if (choice === 'yes') loadPixels();
    bar.remove();
  });
  document.body.append(bar);
}
