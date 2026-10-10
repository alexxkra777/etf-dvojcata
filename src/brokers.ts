// Broker fees for the calculator. These are not in research/etf-data.json, they come from the official
// price lists collected in research/market-cro.md, section 2 (all read on 11 Oct 2026).
// Only brokers whose fees for this case are fully known are here. Check monthly, price lists change.
import type { Route } from './calc';
import { data } from './data';

const twin = (isin: string) => data.twins.find(item => item.isin === isin)!;
const fund = (ticker: string) => data.funds.find(item => item.ticker === ticker)!;

// iShares Core S&P 500 (CSPX / SXR8 on Xetra) stands in for "a UCITS S&P 500 ETF"
const cspx = twin('IE00B5BMR087');
const voo = fund('VOO');

export interface BrokerRoute extends Route {
  note?: string; // what's assumed or left out, in Czech
  src: string;
  asOf: string; // date we read the price list
  validFrom?: string; // when the price list says it's valid from
}

export const routes: BrokerRoute[] = [
  {
    id: 't212', name: 'Trading 212', fund: cspx.ticker, ter: cspx.ter, currency: 'EUR', sameFund: true,
    commission: { kind: 'flat', fee: 0 }, fxPct: 0.15,
    // research quotes "never more than 0.15 %, even at weekends" from Trading 212's own site
    src: 'https://www.trading212.com/', asOf: '2026-10-11',
  },
  {
    id: 'degiro', name: 'DEGIRO', fund: cspx.ticker, ter: cspx.ter, currency: 'EUR', sameFund: true,
    commission: { kind: 'flat', fee: 1 }, fxPct: 0.25, connectivity: { pct: 0.25, capPerYear: 2.5 },
    note: 'Počítáno s ETF z výběru Core Selection. Mimo něj je nákup o 2 € dražší.',
    src: 'https://www.degiro.cz/poplatky', asOf: '2026-10-11',
  },
  {
    id: 'xtb', name: 'XTB', fund: cspx.ticker, ter: cspx.ter, currency: 'EUR', sameFund: true,
    commission: { kind: 'flat', fee: 0 }, fxPct: 0.5,
    src: 'https://akcie.xtb.com/investujte-do-akcii-bez-poplatku', asOf: '2026-10-11',
  },
  {
    id: 'fio', name: 'Fio e-Broker', fund: cspx.ticker, ter: cspx.ter, currency: 'EUR', sameFund: true,
    commission: { kind: 'tiers', tiers: [{ upTo: 1400, fee: 3.95 }, { upTo: 3000, fee: 4.95 }], pct: 0.15, min: 6.95 },
    fxPct: null,
    note: 'Kurzový rozdíl banky není v ceníku, nezahrnuto. Skutečný náklad je vyšší.',
    src: 'https://www.fio.cz/docs/cz/C_zaklad_260701.pdf', asOf: '2026-10-11', validFrom: '2026-07-01',
  },
  {
    // Fio lets retail clients buy US ETFs (execution-only, ČNB Q&A RS2018-12), so this is the US original
    id: 'fio-voo', name: 'Fio + americké VOO', fund: voo.ticker, ter: voo.ter.v, currency: 'USD', sameFund: false,
    // $7.95 up to 100 shares; even 50 000 Kč a month buys far fewer VOO shares than that
    commission: { kind: 'flat', fee: 7.95 }, fxPct: null,
    note: 'Kurzový rozdíl banky není v ceníku, nezahrnuto. Jde o jiný fond (VOO), daň z jeho dividend tu nepočítáme.',
    src: 'https://www.fio.cz/docs/cz/C_zaklad_260701.pdf', asOf: '2026-10-11', validFrom: '2026-07-01',
  },
];

// Brokers left out of the calculator, and why. Shown under the chart.
export const leftOut = 'IBKR, Lynx, Saxo, Revolut a Portu v grafu nejsou: jejich ceník pro tenhle případ jsme nedokázali ověřit celý (kurz měny, minimální poplatky nebo úschova).';

export const rates = { EUR: data.rates.EUR.v, USD: data.rates.USD.v };
