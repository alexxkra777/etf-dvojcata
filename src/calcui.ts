// Calculator UI: wires the inputs to the fee model and draws the bars (plain HTML, no chart library).
import { clampInput, compare, DEFAULT_INPUT, LIMITS, spread, type CalcInput, type RouteResult } from './calc';
import { leftOut, rates, routes, type BrokerRoute } from './brokers';
import { cz, date, kc, nb, NBSP, pct, round100 } from './cz';
import { track } from './track';

let current: CalcInput = { ...DEFAULT_INPUT };
let touched = false;
export const calcContext = () => ({ ...current, touched });

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T | null;
const esc = (text: string) => text.replace(/[&<>"]/g, char => `&${{ '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot' }[char]};`);
const money = (value: number, currency: 'EUR' | 'USD') => `${cz(value, value % 1 ? 2 : 0)}${NBSP}${currency === 'EUR' ? '€' : '$'}`;

export function headline(input: CalcInput = DEFAULT_INPUT): number {
  return spread(compare(routes, input, rates)).diff;
}

function terms(result: RouteResult): string {
  const route = result.route as BrokerRoute;
  const fee = result.orderFeeCzk / rates[route.currency];
  const parts = [`nákup ${money(Math.round(fee * 100) / 100, route.currency)}${fee ? ` (${kc(Math.round(result.orderFeeCzk))})` : ''}`];
  parts.push(route.fxPct === null ? 'převod měny nezahrnut' : `převod měny ${pct(route.fxPct)}`);
  if (route.connectivity) parts.push(`burza max. ${money(route.connectivity.capPerYear, route.currency)} ročně`);
  if (!route.sameFund) parts.push(`fond ${route.fund}, TER ${pct(route.ter)}`);
  parts.push(route.validFrom ? `ceník od ${date(route.validFrom)}` : `stav k ${date(route.asOf)}`);
  return parts.join(' · ');
}

function render(): void {
  const results = compare(routes, current, rates);
  const { cheapest, priciest, diff } = spread(results);
  const max = Math.max(...results.map(result => result.cost));
  const big = $('calc-big');
  const bars = $('calc-bars');
  const us = $('calc-us');
  if (!big || !bars || !us) return;
  big.innerHTML = `Stejné ETF, jiný broker: rozdíl <mark>${kc(diff)}</mark> za ${current.years}${NBSP}let.`;
  bars.innerHTML = results.map(result => {
    const route = result.route as BrokerRoute;
    const kind = !route.sameFund ? 'us' : result === cheapest ? 'best' : result === priciest ? 'worst' : 'eu';
    const note = route.note ? `<span class="bar__note">${nb(esc(route.note))}</span>` : '';
    return `<li class="bar bar--${kind}">
      <span class="bar__name">${esc(route.name)}</span>
      <span class="bar__value">${kc(round100(result.cost))}</span>
      <span class="bar__track"><span class="bar__fill" data-w="${max ? (result.cost / max) * 100 : 0}"></span></span>
      <span class="bar__terms">${terms(result)} · <a href="${esc(route.src)}" rel="noopener" target="_blank">zdroj</a></span>
      ${note}
    </li>`;
  }).join('');
  // widths go through CSSOM, which the CSP allows (inline style attributes it wouldn't)
  for (const fill of bars.querySelectorAll<HTMLElement>('.bar__fill')) fill.style.width = `${fill.dataset.w}%`;
  const original = results.find(result => !result.route.sameFund);
  us.textContent = nb(original
    ? `Americké VOO přes Fio: ${kc(round100(original.cost))}, a to bez kurzového rozdílu banky. U malých částek ho prodraží pevný poplatek ${kc(Math.round(original.orderFeeCzk))} za každý nákup. ${leftOut}`
    : leftOut);
}

function bind(rangeId: string, numberId: string, key: 'monthly' | 'years'): void {
  const range = $<HTMLInputElement>(rangeId);
  const number = $<HTMLInputElement>(numberId);
  if (!range || !number) return;
  const [min, max] = LIMITS[key];
  const digits = () => Number(number.value.replace(/\D/g, ''));
  const set = (raw: number, from: HTMLInputElement) => {
    current = clampInput({ ...current, [key]: raw });
    if (from !== range) range.value = String(current[key]);
    if (from !== number) number.value = cz(current[key]);
    changed();
  };
  range.addEventListener('input', () => set(Number(range.value), range));
  // while typing, only take values already in range; on blur snap the field back and format it
  number.addEventListener('input', () => { const value = digits(); if (value >= min && value <= max) set(value, number); });
  number.addEventListener('change', () => { set(digits(), number); number.value = cz(current[key]); });
}

let debounce: ReturnType<typeof setTimeout> | undefined;
let changes = 0;
function changed(): void {
  touched = true;
  render();
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    if (changes++ < 30) track('calc_change', { props: { monthly: current.monthly, years: current.years, ret: current.ret } });
  }, 800);
}

export function initCalculator(): void {
  bind('calc-monthly-range', 'calc-monthly', 'monthly');
  bind('calc-years-range', 'calc-years', 'years');
  const ret = $<HTMLSelectElement>('calc-ret');
  ret?.addEventListener('change', () => { current = clampInput({ ...current, ret: Number(ret.value) }); changed(); });
  render();
}
