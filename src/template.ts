// Build-time only (used by vite.config.ts): fills {{placeholders}} in the HTML pages from the data
// and the fee model, so no number in the static markup is typed by hand.
import { compare, DEFAULT_INPUT, spread } from './calc';
import { rates, routes } from './brokers';
import { data } from './data';
import { cz, date, kc, nb, NBSP, pct } from './cz';
import { site } from './site';

const fund = (ticker: string) => data.funds.find(item => item.ticker === ticker)!;
const twin = (isin: string) => data.twins.find(item => item.isin === isin)!;
const esc = (text: string) => text.replace(/[&<>"]/g, char => `&${{ '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot' }[char]};`);

export const logo = (size = 34) => `<svg class="logo__mark" width="${size}" height="${Math.round(size * 0.63)}" viewBox="0 0 70 44" aria-hidden="true" focusable="false"><circle cx="24" cy="22" r="19" fill="none" stroke="#3A5A80" stroke-width="4"/><circle cx="46" cy="22" r="19" fill="none" stroke="#0E6B47" stroke-width="4"/></svg>`;

export function leadForm(where: string, button: string): string {
  const id = `email-${where}`;
  return `<form class="lead" data-where="${where}" novalidate>
  <label class="lead__label" for="${id}">Váš e-mail</label>
  <div class="lead__row">
    <input class="lead__input" id="${id}" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="jmeno@example.cz" aria-describedby="${id}-msg ${id}-note">
    <button class="btn btn--signal lead__submit" type="submit">${button}</button>
  </div>
  <p class="lead__msg" id="${id}-msg" aria-live="assertive"></p>
  <p class="lead__micro" id="${id}-note">Zdarma. PDF hned ke stažení. Žádný telefon.</p>
  <label class="check"><input type="checkbox" name="marketing"><span>Chci občas dostat tipy a novinky e-mailem (odhlásíte se jedním klikem)</span></label>
  <p class="lead__privacy">E-mail použijeme k zaslání srovnání. <a href="#ochrana-udaju">Ochrana údajů</a></p>
  <div class="hp" aria-hidden="true"><label>Firma <input type="text" name="company" tabindex="-1" autocomplete="off"></label></div>
</form>`;
}

function feeOf(id: string): number {
  const rule = routes.find(route => route.id === id)!.commission;
  return rule.kind === 'flat' ? rule.fee : rule.tiers[0].fee;
}

function values(): Record<string, string> {
  const results = compare(routes, DEFAULT_INPUT, rates);
  const fx = routes.map(route => route.fxPct).filter((value): value is number => value !== null);
  const cspx = twin('IE00B5BMR087');
  const vuaa = twin('IE00BFMXXD54');
  const nyse = data.funds.filter(item => item.nyse).length;
  return {
    date: date(data.compiled),
    'ter:VOO': pct(fund('VOO').ter.v),
    'ter:CSPX': pct(cspx.ter),
    'ter:VUAA': pct(vuaa.ter),
    'src:VOO': esc(fund('VOO').ter.src),
    'src:CSPX': esc(cspx.src),
    'fx:min': cz(Math.min(...fx), 2).replace(/0+$/, ''),
    'fx:max': pct(Math.max(...fx)),
    'fee:fio-voo': `${cz(feeOf('fio-voo'), 2)}${NBSP}$`,
    'fx:max-kc': cz(DEFAULT_INPUT.monthly * Math.max(...fx) / 100),
    'fx:min-kc': cz(DEFAULT_INPUT.monthly * Math.min(...fx) / 100, 2),
    headline: kc(spread(results).diff),
    monthly: kc(DEFAULT_INPUT.monthly),
    years: String(DEFAULT_INPUT.years),
    ret: pct(DEFAULT_INPUT.ret),
    nyse: String(nyse),
    'rate:EUR': cz(data.rates.EUR.v, 3),
    'rate:USD': cz(data.rates.USD.v, 3),
    'rate:date': date(data.rates.EUR.asOf ?? data.compiled),
    'src:rates': esc(data.rates.EUR.src),
    'history': pct(data.history.v),
    'src:history': esc(data.history.src),
    'forecast': esc(data.forecast.v.replace('-', '–').replace('.', ',').replace('.', ',')),
    'src:forecast': esc(data.forecast.src),
    'src:tax': esc(data.tax40m.src),
    operator: esc(site.operator),
    controller: esc(site.controller),
    email: esc(site.email),
    retention: String(site.retentionMonths),
    logo: logo(),
    'form:hero': leadForm('hero', 'Pošlete mi srovnání (PDF)'),
    'form:calc': leadForm('calc', 'Pošlete mi výpočet + celé srovnání'),
    'form:guide': leadForm('guide', 'Pošlete mi srovnání (PDF)'),
  };
}

// Non-breaking spaces only in text between tags, never inside attributes or SVG
function typography(html: string): string {
  return html.replace(/>([^<]+)</g, (_, text: string) => `>${nb(text)}<`);
}

export function renderPage(html: string): string {
  const map = values();
  const filled = html.replace(/\{\{([\w:-]+)\}\}/g, (match, key: string) => {
    if (!(key in map)) throw new Error(`Unknown placeholder ${match}`);
    return map[key];
  });
  return typography(filled);
}
