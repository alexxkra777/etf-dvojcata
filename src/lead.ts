// Lead forms (hero, under the calculator, guide), the success panel and the sticky mobile CTA.
import { site } from './site';
import { flush, onceVisible, readUtm, sid, track } from './track';
import { calcContext } from './calcui';
import { routes } from './brokers';
import { data } from './data';
import { nb, pct } from './cz';

interface Variant { id: string; hero: string; form: string }

export const leadListeners: (() => void)[] = [];
let done = false;
let guideUrl = '/pruvodce-etf.pdf';

const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const route = (id: string) => routes.find(item => item.id === id)!;
const fx = (id: string) => pct(route(id).fxPct ?? 0);
const fee = (id: string) => { const rule = route(id).commission; return rule.kind === 'flat' ? rule.fee : rule.tiers[0].fee; };
const cspx = data.twins.find(twin => twin.isin === 'IE00B5BMR087')!;

const ANSWERS: [string, string][] = [
  ['none', 'Ne, teprve vybírám'], ['xtb', 'XTB'], ['t212', 'Trading 212'], ['degiro', 'DEGIRO'], ['other', 'Jiný'],
];
const isinTip = `Dvojče hledejte podle ISIN, třeba ${cspx.isin} pro ${cspx.alias}. Tak omylem nekoupíte jiný fond.`;
const taxTip = 'Strana 6 v PDF: daně při prodeji, časový test 3 roky a limit 100 000 Kč.';
function nextSteps(answer: string): string[] {
  switch (answer) {
    case 'xtb': return [`XTB nebere poplatek za nákup (do obratu 100 000 € měsíčně), ale za převod korun na eura si vezme ${fx('xtb')}.`, isinTip, taxTip];
    case 't212': return [`Trading 212 si za převod měny bere ${fx('t212')}, nákup je bez poplatku.`, isinTip, taxTip];
    case 'degiro': return [`DEGIRO účtuje ${fee('degiro')} € za nákup ETF z výběru Core Selection, mimo něj o 2 € víc. Ověřte si, kam vaše ETF patří.`, `Převod měny přes AutoFX stojí ${fx('degiro')}.`, isinTip];
    case 'other': return ['V ceníku svého brokera najděte dva řádky: poplatek za nákup na Xetře a poplatek za převod měny.', 'Porovnejte je s přehledem na straně 5 v PDF.', isinTip];
    default: return ['Otevřete PDF na straně 5: poplatky brokerů v korunách vedle sebe.', 'U malých měsíčních částek rozhoduje pevný poplatek za nákup a převod měny víc než TER fondu.', taxTip];
  }
}

const MESSAGES: Record<string, string> = {
  invalid: 'Tenhle e-mail nevypadá správně.',
  no_domain: 'Doména e-mailu neexistuje. Není tam překlep?',
  empty: 'Napište prosím e-mail.',
  session_limit: 'Moc pokusů najednou. Zkuste to prosím za chvíli.',
  network: 'Nepodařilo se odeslat. Zkontrolujte připojení a zkuste to znovu.',
};

function showError(form: HTMLFormElement, code: string): void {
  const input = form.elements.namedItem('email') as HTMLInputElement;
  const message = form.querySelector('.lead__msg')!;
  message.textContent = MESSAGES[code] ?? MESSAGES.network;
  input.setAttribute('aria-invalid', String(code === 'invalid' || code === 'no_domain' || code === 'empty'));
}

function successPanel(): HTMLElement {
  const panel = document.createElement('div');
  panel.className = 'done';
  panel.innerHTML = `<p class="done__title" tabindex="-1">Hotovo. Tady je vaše srovnání.</p>
  <a class="btn btn--eu done__pdf" href="${guideUrl}" download>Stáhnout PDF</a>
  <fieldset class="quiz"><legend>Máte už brokera?</legend>
    <div class="quiz__opts">${ANSWERS.map(([value, label]) => `<button class="chip" type="button" value="${value}">${label}</button>`).join('')}</div>
  </fieldset>
  <ol class="next" hidden></ol>`;
  panel.querySelector('.done__pdf')!.addEventListener('click', () => track('pdf_download'));
  panel.querySelector('.quiz')!.addEventListener('click', event => {
    const button = (event.target as Element).closest<HTMLButtonElement>('button');
    if (!button) return;
    for (const item of panel.querySelectorAll('.quiz button')) item.setAttribute('aria-pressed', String(item === button));
    track('broker_answer', { props: { answer: button.value } });
    const list = panel.querySelector<HTMLOListElement>('.next')!;
    list.innerHTML = nextSteps(button.value).map(step => `<li>${nb(step)}</li>`).join('');
    list.hidden = false;
  });
  return panel;
}

function finish(form: HTMLFormElement): void {
  done = true;
  const panel = successPanel();
  form.replaceWith(panel);
  panel.querySelector<HTMLElement>('.done__title')!.focus();
  // the other forms shrink to a download link
  for (const other of document.querySelectorAll<HTMLFormElement>('form.lead')) {
    const small = document.createElement('p');
    small.className = 'done-small';
    small.innerHTML = `Srovnání už máte. <a href="${guideUrl}" download>Stáhnout PDF znovu</a>`;
    small.querySelector('a')!.addEventListener('click', () => track('pdf_download'));
    other.replaceWith(small);
  }
  document.getElementById('sticky')!.hidden = true;
  for (const listener of leadListeners) listener();
}

async function submit(form: HTMLFormElement, variant: Variant): Promise<void> {
  const input = form.elements.namedItem('email') as HTMLInputElement;
  const button = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
  if (button.disabled) return;
  if (!input.value.trim()) { showError(form, 'empty'); input.focus(); return; }
  // the browser accepts "jan@seznam", the server wouldn't; catch the obvious typos here
  if (!input.checkValidity() || !/^[^\s@]+@[^\s@]+\.[^\s@.]{2,}$/.test(input.value.trim())) { showError(form, 'invalid'); input.focus(); return; }
  const where = form.dataset.where!;
  track('form_submit', { props: { where } });
  flush();
  const label = button.textContent;
  button.disabled = true;
  button.textContent = 'Odesílám…';
  form.querySelector('.lead__msg')!.textContent = '';
  try {
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: input.value.trim(),
        marketing_consent: (form.elements.namedItem('marketing') as HTMLInputElement).checked,
        notice_version: site.noticeVersion,
        sid, variant: variant.id, utm: readUtm(),
        context: { where, ...calcContext(), hero: variant.hero, form: variant.form },
        company: (form.elements.namedItem('company') as HTMLInputElement).value,
      }),
    });
    const body = await response.json().catch(() => ({})) as { ok?: boolean; guide_url?: string; code?: string };
    if (response.ok && body.ok) {
      // lead_ok is written by the server together with the lead, so it isn't sent from here
      if (body.guide_url?.startsWith('/')) guideUrl = body.guide_url;
      finish(form);
      return;
    }
    const code = body.code ?? `http_${response.status}`;
    track('lead_error', { props: { code } });
    showError(form, code);
  } catch {
    track('lead_error', { props: { code: 'network' } });
    showError(form, 'network');
  } finally {
    button.disabled = false;
    button.textContent = label;
  }
}

function nearestForm(): HTMLFormElement | null {
  const forms = [...document.querySelectorAll<HTMLFormElement>('form.lead')].filter(form => form.offsetParent !== null);
  forms.sort((a, b) => Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top));
  return forms[0] ?? null;
}

function sticky(): void {
  const bar = document.getElementById('sticky')!;
  const hero = document.querySelector('.hero__ask')!;
  const mobile = matchMedia('(max-width: 719px)');
  let heroVisible = true;
  const inView = new Set<Element>();
  const update = () => { bar.hidden = done || !mobile.matches || heroVisible || inView.size > 0; };
  new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; update(); }).observe(hero);
  const formObserver = new IntersectionObserver(entries => {
    for (const entry of entries) entry.isIntersecting ? inView.add(entry.target) : inView.delete(entry.target);
    update();
  });
  for (const slot of document.querySelectorAll('[data-form-slot]')) formObserver.observe(slot);
  mobile.addEventListener('change', update);
  bar.querySelector('button')!.addEventListener('click', () => {
    const form = nearestForm();
    if (!form) return;
    form.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' });
    (form.elements.namedItem('email') as HTMLInputElement).focus({ preventScroll: true });
  });
}

export function initLeads(variant: Variant): void {
  const forms = [...document.querySelectorAll<HTMLFormElement>('form.lead')];
  for (const form of forms) {
    form.addEventListener('submit', event => { event.preventDefault(); void submit(form, variant); });
    form.addEventListener('input', () => {
      const input = form.elements.namedItem('email') as HTMLInputElement;
      if (input.getAttribute('aria-invalid') === 'true') { input.removeAttribute('aria-invalid'); form.querySelector('.lead__msg')!.textContent = ''; }
    });
  }
  onceVisible(forms.filter(form => form.offsetParent !== null), form => track('form_view', { props: { where: (form as HTMLFormElement).dataset.where } }));
  let focused = false;
  document.addEventListener('focusin', event => {
    const form = (event.target as Element).closest?.<HTMLFormElement>('form.lead');
    if (form && !focused) { focused = true; track('form_focus', { props: { where: form.dataset.where } }); }
  });
  document.addEventListener('click', event => {
    const cta = (event.target as Element).closest?.<HTMLElement>('[data-cta]');
    if (cta) track('cta_click', { props: { where: cta.dataset.cta } });
  });
  sticky();
}
