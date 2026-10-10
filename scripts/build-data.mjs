// Builds src/data.ts from research/etf-data.json.
// Picks only what the page shows and keeps a source URL + as-of date next to every number.
// Run: node scripts/build-data.mjs (also runs before every build).
import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('..', import.meta.url);
const raw = JSON.parse(readFileSync(new URL('research/etf-data.json', root), 'utf8'));

// Which filter chip each US fund sits under. Nasdaq ones go to the small note under the table.
const groups = {
  SPY: 'sp500', VOO: 'sp500', IVV: 'sp500',
  VTI: 'usa', IWM: 'usa',
  VT: 'world', VEA: 'world', VWO: 'world',
  SCHD: 'div', VYM: 'div',
  AGG: 'bonds',
  GLD: 'other', VNQ: 'other',
  QQQ: 'nasdaq', VXUS: 'nasdaq', BND: 'nasdaq',
};

// Overall verdict per US fund: same index / similar index / no twin / gold ETC.
const verdicts = {
  SPY: 'same', VOO: 'same', IVV: 'same', IWM: 'same', AGG: 'same', QQQ: 'same',
  VTI: 'similar', VT: 'similar', VEA: 'similar', VWO: 'similar', VYM: 'similar', VNQ: 'similar',
  VXUS: 'similar', BND: 'similar',
  SCHD: 'none',
  GLD: 'etc',
};

// Czech one-liners about how close each twin is. Written from the match_quality / note fields.
const twinNotes = {
  IE00B5BMR087: ['same', 'Stejný index S&P 500. Největší evropský fond na tenhle index.'],
  IE00BFMXXD54: ['same', 'Stejný index, evropská verze přímo od Vanguardu.'],
  IE00B3XXRP09: ['same', 'Stejný index, verze, která vyplácí dividendy.'],
  IE000XZSV718: ['same', 'Stejný index a nejnižší TER ze všech dvojčat S&P 500.'],
  IE00BJ0KDR00: ['similar', 'Podobný index: MSCI USA bere velké a střední firmy, asi 85 % trhu. Malé firmy chybí.'],
  IE00BK5BQT80: ['similar', 'Podobný index: FTSE All-World bez malých firem, které VT drží.'],
  IE00B3RBWM25: ['similar', 'Totéž co VWCE, jen vyplácí dividendy.'],
  IE00B3YLTY66: ['similar', 'MSCI ACWI IMI má i malé firmy, takže je k VT blíž.'],
  IE0009A5ADV9: ['similar', 'Svět bez USA, bez malých firem. Fond je nový a zatím malý, hlídejte spread.'],
  IE0006WW1TQ4: ['similar', 'Přibližně: MSCI World ex USA má jen velké a střední firmy, index VEA i ty malé.'],
  IE00BK5BR733: ['similar', 'Stejná rodina indexů FTSE Emerging, ale bez malých firem.'],
  IE00B3VVMM84: ['similar', 'Totéž co VFEA, jen vyplácí dividendy.'],
  IE00BKM4GZ66: ['similar', 'MSCI EM IMI včetně malých firem. Největší evropský fond na rozvíjející se trhy.'],
  IE00B6YX5D40: ['different', 'Jiný index: S&P High Yield Dividend Aristocrats. Na index SCHD evropský fond neexistuje.'],
  IE00B8GKDB10: ['different', 'Jiný rozsah: dividendové firmy z celého světa, ne jen z USA.'],
  IE00BK5BR626: ['different', 'Totéž co VHYL, jen dividendy nevyplácí.'],
  IE00B44CGS96: ['same', 'Stejný index Bloomberg US Aggregate, v dolarech, vyplácí.'],
  IE00BDFJYM28: ['same', 'Stejný index, zajištěný do eur. Riziko kurzu koruny tím nezmizí.'],
  IE00B579F325: ['etc', 'Fyzické zlato, ale jako ETC (dluhopis krytý zlatem), ne fond.'],
  IE00B4ND3602: ['etc', 'Fyzické zlato jako ETC, ne fond.'],
  DE000A0S9GB0: ['etc', 'Německý dluhopis s nárokem na vydání zlata. Náklady na úschovu jsme neověřili.'],
  IE00B1FZSF77: ['similar', 'Přibližně: jiný index amerických nemovitostí s menším počtem firem.'],
  IE00BJ38QD84: ['same', 'Stejný index Russell 2000.'],
  IE0032077012: ['same', 'Stejný index Nasdaq-100, vyplácí dividendy.'],
  IE00BFZXGZ54: ['same', 'Stejný index Nasdaq-100, dividendy nevyplácí.'],
  IE00B53SZB19: ['same', 'Stejný index Nasdaq-100 od iShares, dividendy nevyplácí.'],
  IE00B4L5Y983: ['different', 'Jen vyspělé trhy (MSCI World). Mezi Čechy oblíbený, ale dvojče VT to není.'],
};

// The name people search for, when it isn't the Xetra ticker. Otherwise the LSE USD ticker is used.
const knownAs = {
  IE00B5BMR087: 'CSPX', IE00B3RBWM25: 'VWRL', IE00BKM4GZ66: 'EIMI', IE00B8GKDB10: 'VHYL',
  IE00B4L5Y983: 'IWDA', IE00B53SZB19: 'CNDX',
};

const fail = message => { throw new Error(`build-data: ${message}`); };
const pick = (entry, name) => entry?.[name] ?? fail(`missing ${name}`);
const sourced = (field, value = field.value) => ({
  v: value, src: field.source_url ?? fail('missing source_url'), asOf: field.as_of ?? field.accessed ?? null,
});
const isoDate = value => (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value) ? value.slice(0, 10) : null);

function money(text) {
  const match = /^USD\s+([\d,.]+)\s*(trillion|billion|million|T|B|M)?\b/i.exec(text);
  if (!match) fail(`cannot parse money "${text}"`);
  const unit = { t: 1e12, trillion: 1e12, b: 1e9, billion: 1e9, m: 1e6, million: 1e6 }[match[2]?.toLowerCase() ?? ''] ?? 1;
  return Math.round(Number(match[1].replace(/,/g, '')) * unit);
}
function percent(text) {
  const match = /^([\d.]+)%/.exec(text);
  if (!match) fail(`cannot parse percent "${text}"`);
  return Number(match[1]);
}
function eurMillions(text) {
  const match = /^EUR ([\d,]+) m$/.exec(text);
  if (!match) fail(`cannot parse fund size "${text}"`);
  return Number(match[1].replace(/,/g, ''));
}
function listings(entries) {
  return entries.map(entry => {
    const match = /^(.+) (EUR|USD|GBP|GBX|CHF) (\S+)$/.exec(entry);
    if (!match) fail(`cannot parse listing "${entry}"`);
    const exchange = match[1].replace('London Stock Exchange', 'LSE').replace('XETRA', 'Xetra');
    return { ex: exchange, cur: match[2], t: match[3] };
  });
}

const twins = raw.ucits_twins.map(twin => {
  const note = twinNotes[twin.isin] ?? fail(`no Czech note for ${twin.isin}`);
  const list = listings(twin.tickers_by_exchange);
  const xetra = list.find(item => item.ex === 'Xetra')?.t ?? null;
  const lseUsd = list.find(item => item.ex === 'LSE' && item.cur === 'USD')?.t ?? null;
  const asOf = isoDate(twin.as_of) ?? twin.accessed;
  return {
    isin: twin.isin,
    name: twin.name,
    ticker: xetra ?? list[0].t,
    alias: knownAs[twin.isin] ?? (lseUsd && lseUsd !== xetra ? lseUsd : null),
    listings: list,
    ter: percent(twin.ter_pct),
    size: eurMillions(twin.fund_size),
    acc: twin.distribution_policy === 'Accumulating',
    index: twin.index,
    holdings: twin.holdings,
    domicile: twin.domicile,
    match: note[0],
    note: note[1],
    src: twin.source_url,
    asOf,
  };
});

const funds = raw.etfs.map(etf => {
  const ticker = etf.ticker;
  const group = groups[ticker] ?? fail(`no group for ${ticker}`);
  const aumField = etf.aum ?? etf.aum_etf_share_class ?? fail(`no AUM for ${ticker}`);
  const holdings = typeof pick(etf, 'holdings_count').value === 'number' ? etf.holdings_count.value : null;
  const returns = pick(etf, 'returns_nav_annualized_pct');
  return {
    ticker,
    name: pick(etf, 'full_name').value,
    group,
    nyse: etf.in_nyse_list === true,
    exchange: pick(etf, 'primary_listing_exchange').value,
    verdict: verdicts[ticker] ?? fail(`no verdict for ${ticker}`),
    ter: sourced(pick(etf, 'expense_ratio_pct')),
    aum: sourced(aumField, money(aumField.value)),
    aumShareClass: Boolean(etf.aum_etf_share_class),
    holdings: holdings === null ? null : sourced(etf.holdings_count, holdings),
    index: sourced(pick(etf, 'index_tracked')),
    ret10: { v: returns['10y'] ?? fail(`no 10y return for ${ticker}`), src: returns.source_url, asOf: returns.as_of, secondary: Boolean(returns.note) },
    twins: raw.ucits_twins.filter(twin => twin.us_counterparts.includes(ticker)).map(twin => twin.isin),
  };
});

const fx = raw.assumptions.find(item => item.value?.EUR_CZK) ?? fail('no ČNB rates');
const history = raw.assumptions.find(item => item.value?.['S&P_500_geometric_1928_2025_pct']) ?? fail('no S&P history');
const forecast = raw.assumptions.find(item => item.value?.US_equities_10y_expected_pct) ?? fail('no forecast');
const tax40m = raw.tax_notes.find(item => /40 million/.test(item.value)) ?? fail('no 40m note');

const data = {
  compiled: raw.meta.compiled,
  rates: {
    EUR: { v: fx.value.EUR_CZK, src: fx.source_url, asOf: fx.as_of },
    USD: { v: fx.value.USD_CZK, src: fx.source_url, asOf: fx.as_of },
  },
  history: { v: history.value['S&P_500_geometric_1928_2025_pct'], src: history.source_url, asOf: '2026-01-05' },
  forecast: { v: forecast.value.US_equities_10y_expected_pct, src: forecast.source_url, asOf: '2026-06-30' },
  tax40m: { src: tax40m.source_url, asOf: tax40m.as_of },
  funds,
  twins,
};

const banner = '// Generated by scripts/build-data.mjs from research/etf-data.json. Do not edit by hand.\n';
const types = `
export interface Sourced<T> { v: T; src: string; asOf: string | null }
export type Group = 'sp500' | 'usa' | 'world' | 'div' | 'bonds' | 'other' | 'nasdaq';
export type Verdict = 'same' | 'similar' | 'none' | 'etc';
export type Match = 'same' | 'similar' | 'different' | 'etc';
export interface Fund {
  ticker: string; name: string; group: Group; nyse: boolean; exchange: string; verdict: Verdict;
  ter: Sourced<number>; aum: Sourced<number>; aumShareClass: boolean; holdings: Sourced<number> | null;
  index: Sourced<string>; ret10: Sourced<number> & { secondary: boolean }; twins: string[];
}
export interface Listing { ex: string; cur: string; t: string }
export interface Twin {
  isin: string; name: string; ticker: string; alias: string | null; listings: Listing[];
  ter: number; size: number; acc: boolean; index: string; holdings: string; domicile: string;
  match: Match; note: string; src: string; asOf: string;
}
export interface Data {
  compiled: string;
  rates: { EUR: Sourced<number>; USD: Sourced<number> };
  history: Sourced<number>; forecast: Sourced<string>; tax40m: { src: string; asOf: string };
  funds: Fund[]; twins: Twin[];
}
`;
writeFileSync(new URL('src/data.ts', root), `${banner}${types}
export const data: Data = ${JSON.stringify(data, null, 1)};
`);
console.log(`build-data: ${funds.length} funds, ${twins.length} twins`);
