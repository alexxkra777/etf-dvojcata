// Private funnel dashboard for /api/stats. The token stays in sessionStorage, so closing the tab logs out.
import './styles/fonts.css';
import './styles/tokens.css';
import './styles/main.css';
import './styles/stats.css';
import { cz, date } from './cz';

interface Step { step: string; sessions: number; step_conversion: number | null; overall_conversion: number | null }
interface Stats {
  from: string; to: string; include_bots: boolean; funnel: Step[];
  by_variant: Record<string, Step[]>; by_utm_content: Record<string, Step[]>; by_device: Record<string, Step[]>;
  daily: { date: string; landed: number; leads: number }[]; median_time_to_lead_ms: number | null;
}

const KEY = 'stats-token';
const LABELS: Record<string, string> = {
  landed: 'Návštěva', engaged: 'Zaujetí (5 s nebo interakce)', interacted_tool: 'Tabulka nebo kalkulačka',
  cta_click: 'Klik na výzvu', form_view: 'Viděl formulář', form_focus: 'Klikl do formuláře',
  form_submit: 'Odeslal formulář', lead_ok: 'Lead',
};
const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const esc = (text: string) => text.replace(/[&<>"]/g, char => `&${{ '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot' }[char]};`);
const percent = (value: number | null) => (value === null ? '–' : `${cz(value * 100, 1)} %`);
const iso = (value: Date) => value.toISOString().slice(0, 10);

function token(): string | null {
  try { return sessionStorage.getItem(KEY); } catch { return null; }
}
function saveToken(value: string | null): void {
  try { value ? sessionStorage.setItem(KEY, value) : sessionStorage.removeItem(KEY); } catch { /* memory only then */ }
}
let memoryToken: string | null = null;

function funnel(steps: Step[]): void {
  const top = steps[0]?.sessions || 1;
  const list = $('funnel');
  list.innerHTML = steps.map(step => `<li class="fstep">
    <span class="fstep__name">${LABELS[step.step] ?? esc(step.step)}</span>
    <span class="fstep__num">${cz(step.sessions)}</span>
    <span class="fstep__conv" title="z předchozího kroku">${step.step === 'landed' ? '' : percent(step.step_conversion)}</span>
    <span class="bar__track"><span class="bar__fill" data-w="${(step.sessions / top) * 100}"></span></span>
  </li>`).join('');
  for (const fill of list.querySelectorAll<HTMLElement>('.bar__fill')) fill.style.width = `${fill.dataset.w}%`;
}

function split(id: string, groups: Record<string, Step[]>): void {
  const rows = Object.entries(groups).map(([name, steps]) => {
    const get = (key: string) => steps.find(step => step.step === key)?.sessions ?? 0;
    const landed = get('landed');
    const leads = get('lead_ok');
    return `<tr><th scope="row">${esc(name || '(žádné)')}</th><td>${cz(landed)}</td><td>${cz(get('form_submit'))}</td><td>${cz(leads)}</td><td>${landed ? percent(leads / landed) : '–'}</td></tr>`;
  });
  $(id).innerHTML = rows.length
    ? `<table class="split"><thead><tr><th scope="col"></th><th scope="col">Návštěvy</th><th scope="col">Odesláno</th><th scope="col">Leady</th><th scope="col">Konverze</th></tr></thead><tbody>${rows.join('')}</tbody></table>`
    : '<p class="fineprint">Zatím žádná data.</p>';
}

function daily(days: Stats['daily']): void {
  const max = Math.max(1, ...days.map(day => day.leads));
  const list = $('daily');
  list.innerHTML = days.length ? days.map(day => `<li><span>${date(day.date)}</span><span class="bar__track"><span class="bar__fill" data-w="${(day.leads / max) * 100}"></span></span><span class="tk">${cz(day.leads)} / ${cz(day.landed)}</span></li>`).join('')
    : '<li class="fineprint">Zatím žádná data.</li>';
  for (const fill of list.querySelectorAll<HTMLElement>('.bar__fill')) fill.style.width = `${fill.dataset.w}%`;
}

async function load(): Promise<void> {
  const secret = token() ?? memoryToken;
  if (!secret) return showLogin();
  const params = new URLSearchParams({ from: $<HTMLInputElement>('from').value, to: $<HTMLInputElement>('to').value });
  if ($<HTMLInputElement>('bots').checked) params.set('include_bots', 'true');
  const response = await fetch(`/api/stats?${params}`, { headers: { Authorization: `Bearer ${secret}` } }).catch(() => null);
  if (!response) return showLogin('Server neodpovídá.');
  if (response.status === 401) { saveToken(null); memoryToken = null; return showLogin('Špatný token.'); }
  if (!response.ok) return showLogin(`Chyba ${response.status}.`);
  const stats = await response.json() as Stats;
  $('login').hidden = true;
  $('board').hidden = false;
  const median = stats.median_time_to_lead_ms;
  $('meta').textContent = `${date(stats.from)} až ${date(stats.to)}${stats.include_bots ? ', včetně botů' : ''}. Medián času do leadu: ${median === null ? '–' : `${cz(median / 1000)} s`}.`;
  funnel(stats.funnel);
  split('by-variant', stats.by_variant);
  split('by-utm', stats.by_utm_content);
  split('by-device', stats.by_device);
  daily(stats.daily);
}

function showLogin(message = ''): void {
  $('board').hidden = true;
  $('login').hidden = false;
  $('login-msg').textContent = message;
}

const now = new Date();
$<HTMLInputElement>('to').value = iso(now);
$<HTMLInputElement>('from').value = iso(new Date(now.getTime() - 29 * 86400000));
$('login').addEventListener('submit', event => {
  event.preventDefault();
  memoryToken = $<HTMLInputElement>('token').value.trim();
  saveToken(memoryToken);
  void load();
});
$('range').addEventListener('submit', event => { event.preventDefault(); void load(); });
$('logout').addEventListener('click', () => { saveToken(null); memoryToken = null; showLogin(); });
if (token()) void load();
