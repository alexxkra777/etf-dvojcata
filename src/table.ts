// The twin table: US fund -> its UCITS twin(s). Cards on every screen size, details on tap.
import { data, type Fund, type Group, type Match, type Twin, type Verdict } from './data';
import { cz, date, nb, pct } from './cz';
import { track } from './track';

const twinsByIsin = new Map(data.twins.map(twin => [twin.isin, twin]));
const esc = (text: string) => text.replace(/[&<>"]/g, char => `&${{ '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot' }[char]};`);
const src = (url: string, label = 'zdroj') => `<a class="src" href="${esc(url)}" rel="noopener" target="_blank">${label}</a>`;
const asOf = (iso: string | null) => (iso ? `stav k ${date(iso)}` : '');

const CHIPS: [Group | 'all', string][] = [
  ['all', 'Vše'], ['sp500', 'S&P 500'], ['usa', 'Celé USA'], ['world', 'Svět'],
  ['div', 'Dividendy'], ['bonds', 'Dluhopisy'], ['other', 'Ostatní'],
];
const VERDICT: Record<Verdict, [string, string]> = {
  same: ['stejný index', 'same'], similar: ['podobný index', 'similar'],
  none: ['nemá dvojče', 'none'], etc: ['zlato jako ETC', 'etc'],
};
const COUNTRY: Record<string, string> = { Ireland: 'Irsko', Germany: 'Německo', Luxembourg: 'Lucembursko' };
const MATCH: Record<Match, string> = {
  same: 'stejný index', similar: 'podobný index', different: 'jiný index', etc: 'ETC, ne fond',
};

function usd(value: number): string {
  if (value >= 1e12) return `${cz(value / 1e12, 1)} bil. $`;
  return `${cz(value / 1e9, value >= 1e10 ? 0 : 1)} mld. $`;
}
const eur = (millions: number) => (millions >= 1000 ? `${cz(millions / 1000, 1)} mld. €` : `${cz(millions)} mil. €`);
const tickers = (twin: Twin) => `<span class="tk tk--eu">${esc(twin.ticker)}</span>${twin.alias ? `<span class="tk-alias">${esc(twin.alias)}</span>` : ''}`;

function twinLine(fund: Fund): string {
  const twins = fund.twins.map(isin => twinsByIsin.get(isin)!);
  const [first] = twins;
  if (fund.verdict === 'none') {
    return `<span class="tw__eu tw__eu--none">Evropské dvojče neexistuje. Nejblíž jsou ${twins.map(twin => esc(twin.ticker)).join(', ')} (jiný index).</span>`;
  }
  const more = twins.length > 1 ? `<span class="tw__more">+ ${twins.length - 1} ${twins.length - 1 === 1 ? 'další dvojče' : 'další dvojčata'}</span>` : '';
  return `<span class="tw__eu">${tickers(first)}<span class="tw__facts">TER ${pct(first.ter)} · ${first.acc ? 'akum.' : 'dist.'} · ${eur(first.size)}</span>${more}</span>`;
}

function fundDetail(fund: Fund): string {
  const rows = [
    ['Index', `${esc(fund.index.v)} ${src(fund.index.src)}`],
    fund.holdings ? ['Počet titulů', `${cz(fund.holdings.v)} <small>${asOf(fund.holdings.asOf)}</small> ${src(fund.holdings.src)}`] : null,
    ['TER', `${pct(fund.ter.v, 4)} ročně <small>${asOf(fund.ter.asOf)}</small> ${src(fund.ter.src)}`],
    [fund.aumShareClass ? 'Majetek (ETF třída)' : 'Majetek fondu', `${usd(fund.aum.v)} <small>${asOf(fund.aum.asOf)}</small> ${src(fund.aum.src)}`],
    ['Výnos za 10 let', `${pct(fund.ret10.v)} ročně v USD <small>${asOf(fund.ret10.asOf)}${fund.ret10.secondary ? ', nepřímý zdroj' : ''}</small> ${src(fund.ret10.src)}`],
  ].filter((row): row is string[] => row !== null);
  return `<dl class="facts">${rows.map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join('')}</dl>
  <p class="fineprint">Minulé výnosy nejsou zárukou budoucích. Výnos je v dolarech, v korunách vyjde jinak podle kurzu.</p>`;
}

function twinDetail(twin: Twin): string {
  const listings = twin.listings.map(item => `${esc(item.ex)} <b>${esc(item.t)}</b> <small>${item.cur}</small>`).join(' · ');
  return `<li class="twin-d">
    <p class="twin-d__head">${tickers(twin)} <span class="badge badge--${twin.match}">${MATCH[twin.match]}</span></p>
    <p class="twin-d__name">${esc(twin.name)}</p>
    <p class="twin-d__note">${nb(esc(twin.note))}</p>
    <dl class="facts facts--twin">
      <div><dt>TER</dt><dd>${pct(twin.ter)} ročně</dd></div>
      <div><dt>Velikost</dt><dd>${eur(twin.size)}</dd></div>
      <div><dt>Dividendy</dt><dd>${twin.acc ? 'reinvestuje (akum.)' : 'vyplácí (dist.)'}</dd></div>
      <div><dt>Sídlo · ISIN</dt><dd>${twin.domicile ? `${esc(COUNTRY[twin.domicile] ?? twin.domicile)} · ` : ''}${esc(twin.isin)}</dd></div>
    </dl>
    <p class="twin-d__ex">${listings}</p>
    <p class="twin-d__src"><small>${asOf(twin.asOf)}</small> ${src(twin.src, 'zdroj: justETF')}</p>
  </li>`;
}

function card(fund: Fund): string {
  const [label, kind] = VERDICT[fund.verdict];
  const id = `tw-${fund.ticker}`;
  return `<article class="tw" data-group="${fund.group}">
  <h3 class="tw__h"><button class="tw__btn" type="button" aria-expanded="false" aria-controls="${id}" data-ticker="${fund.ticker}">
    <span class="tw__us"><span class="tk tk--us">${fund.ticker}</span><span class="tw__name">${esc(fund.name)}</span></span>
    <span class="badge badge--${kind}">${label}</span>
    <span class="tw__arrow" aria-hidden="true">→</span>
    ${twinLine(fund)}
    <span class="tw__chev" aria-hidden="true"></span>
  </button></h3>
  <div class="tw__detail" id="${id}" hidden>
    <div class="tw__cols">
      <section><h4 class="tw__k tw__k--us">${fund.ticker} · ${esc(fund.exchange)}</h4>${fundDetail(fund)}</section>
      <section><h4 class="tw__k tw__k--eu">Evropská dvojčata</h4><ul class="twin-list">${fund.twins.map(isin => twinDetail(twinsByIsin.get(isin)!)).join('')}</ul></section>
    </div>
  </div>
</article>`;
}

export function renderTable(): void {
  const list = document.getElementById('twins');
  const chips = document.querySelector('.chips');
  const nasdaq = document.getElementById('nasdaq');
  if (!list || !chips || !nasdaq) return;
  const nyse = data.funds.filter(fund => fund.nyse);
  list.innerHTML = nyse.map(card).join('');
  chips.innerHTML = CHIPS.filter(([group]) => group === 'all' || nyse.some(fund => fund.group === group))
    .map(([group, label]) => `<button class="chip" type="button" data-group="${group}" aria-pressed="${group === 'all'}">${esc(label)}</button>`).join('');

  const others = data.funds.filter(fund => !fund.nyse);
  nasdaq.innerHTML = `<p><b>${others.map(fund => fund.ticker).join(', ')}</b> se obchodují na Nasdaqu, ne na NYSE, proto v tabulce nejsou. Jejich dvojčata:</p>
  <ul>${others.map(fund => {
    const twins = fund.twins.map(isin => twinsByIsin.get(isin)!);
    const ters = [...new Set(twins.map(twin => twin.ter))].sort((a, b) => a - b);
    const ter = ters.length > 1 ? `${cz(ters[0], 2).replace(/0$/, '')}–${pct(ters[ters.length - 1])}` : pct(ters[0]);
    return `<li><span class="tk tk--us">${fund.ticker}</span> → ${twins.map(twin => `<span class="tk tk--eu">${esc(twin.ticker)}</span>`).join(', ')} <small>(${VERDICT[fund.verdict][0]}, TER ${ter})</small></li>`;
  }).join('')}</ul>
  <p class="fineprint">Stav k ${date(data.compiled)}. Zdroje ke každému fondu jsou v PDF průvodci.</p>`;

  chips.addEventListener('click', event => {
    const chip = (event.target as Element).closest<HTMLButtonElement>('.chip');
    if (!chip) return;
    const group = chip.dataset.group!;
    for (const item of chips.querySelectorAll('.chip')) item.setAttribute('aria-pressed', String(item === chip));
    for (const item of list.querySelectorAll<HTMLElement>('.tw')) item.hidden = group !== 'all' && item.dataset.group !== group;
    track('compare_filter', { props: { filter: group } });
  });

  list.addEventListener('click', event => {
    const button = (event.target as Element).closest<HTMLButtonElement>('.tw__btn');
    if (!button) return;
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    document.getElementById(button.getAttribute('aria-controls')!)!.hidden = !open;
    if (open) track('twin_open', { props: { ticker: button.dataset.ticker } });
  });
}
