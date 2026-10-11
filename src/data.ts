// Built by scripts/build-data.mjs from research/etf-data.json. Do not edit by hand.

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
  ter: number; size: number | null; acc: boolean; index: string | null; holdings: string | null; domicile: string | null;
  match: Match; note: string; src: string; asOf: string;
}
export interface Data {
  compiled: string;
  rates: { EUR: Sourced<number>; USD: Sourced<number> };
  history: Sourced<number>; forecast: Sourced<string>; tax40m: { src: string; asOf: string };
  funds: Fund[]; twins: Twin[];
}

export const data: Data = {
 "compiled": "2026-10-11",
 "rates": {
  "EUR": {
   "v": 24.365,
   "src": "https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt",
   "asOf": "2026-10-09"
  },
  "USD": {
   "v": 21.745,
   "src": "https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt",
   "asOf": "2026-10-09"
  }
 },
 "history": {
  "v": 10.02,
  "src": "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html",
  "asOf": "2026-01-05"
 },
 "forecast": {
  "v": "4.2-6.2",
  "src": "https://corporate.vanguard.com/content/corporatesite/us/en/corp/vemo/vemo-return-forecasts.html",
  "asOf": "2026-06-30"
 },
 "tax40m": {
  "src": "https://www.zakonyprolidi.cz/cs/1992-586",
  "asOf": "law version 2026-08-01 to 2026-12-31"
 },
 "funds": [
  {
   "ticker": "SPY",
   "name": "State Street SPDR S&P 500 ETF Trust",
   "group": "sp500",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "same",
   "ter": {
    "v": 0.0945,
    "src": "https://www.ssga.com/us/en/intermediary/etfs/spdr-sp-500-etf-trust-spy",
    "asOf": "2026-10-11"
   },
   "aum": {
    "v": 817200170000,
    "src": "https://www.ssga.com/us/en/intermediary/etfs/spdr-sp-500-etf-trust-spy",
    "asOf": "2026-10-08"
   },
   "aumShareClass": false,
   "holdings": {
    "v": 504,
    "src": "https://www.ssga.com/us/en/intermediary/etfs/spdr-sp-500-etf-trust-spy",
    "asOf": "2026-10-08"
   },
   "index": {
    "v": "S&P 500 Index",
    "src": "https://www.ssga.com/us/en/intermediary/etfs/spdr-sp-500-etf-trust-spy",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 15.18,
    "src": "https://www.ssga.com/us/en/intermediary/etfs/spdr-sp-500-etf-trust-spy",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE00B5BMR087",
    "IE00BFMXXD54",
    "IE00B3XXRP09",
    "IE000XZSV718"
   ]
  },
  {
   "ticker": "VOO",
   "name": "Vanguard S&P 500 ETF",
   "group": "sp500",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "same",
   "ter": {
    "v": 0.03,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/voo",
    "asOf": "2026-04-28"
   },
   "aum": {
    "v": 1000000000000,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/voo",
    "asOf": "2026-08-31"
   },
   "aumShareClass": true,
   "holdings": {
    "v": 505,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/voo",
    "asOf": "2026-08-31"
   },
   "index": {
    "v": "S&P 500",
    "src": "https://stockanalysis.com/etf/voo/",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 15.29,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/voo (API https://investor.vanguard.com/vmf/api/VOO/performance)",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE00B5BMR087",
    "IE00BFMXXD54",
    "IE00B3XXRP09",
    "IE000XZSV718"
   ]
  },
  {
   "ticker": "IVV",
   "name": "iShares Core S&P 500 ETF",
   "group": "sp500",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "same",
   "ter": {
    "v": 0.03,
    "src": "https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf",
    "asOf": "2026-10-11"
   },
   "aum": {
    "v": 896439871787,
    "src": "https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf",
    "asOf": "2026-10-09"
   },
   "aumShareClass": false,
   "holdings": {
    "v": 504,
    "src": "https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf",
    "asOf": "2026-10-08"
   },
   "index": {
    "v": "S&P 500 Index",
    "src": "https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 15.3,
    "src": "https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE00B5BMR087",
    "IE00BFMXXD54",
    "IE00B3XXRP09",
    "IE000XZSV718"
   ]
  },
  {
   "ticker": "VTI",
   "name": "Vanguard Morningstar Total Stock Market ETF",
   "group": "usa",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "similar",
   "ter": {
    "v": 0.03,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vti",
    "asOf": "2026-04-28"
   },
   "aum": {
    "v": 690100000000,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vti",
    "asOf": "2026-08-31"
   },
   "aumShareClass": true,
   "holdings": {
    "v": 3507,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vti",
    "asOf": "2026-08-31"
   },
   "index": {
    "v": "Morningstar US Total Market Index (formerly CRSP US Total Market Index)",
    "src": "https://stockanalysis.com/etf/vti/",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 14.7,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vti (API https://investor.vanguard.com/vmf/api/VTI/performance)",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE00BJ0KDR00"
   ]
  },
  {
   "ticker": "VT",
   "name": "Vanguard Total World Stock ETF",
   "group": "world",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "same",
   "ter": {
    "v": 0.06,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vt",
    "asOf": "2026-02-27"
   },
   "aum": {
    "v": 81900000000,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vt",
    "asOf": "2026-08-31"
   },
   "aumShareClass": true,
   "holdings": {
    "v": 10088,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vt",
    "asOf": "2026-08-31"
   },
   "index": {
    "v": "FTSE Global All Cap Index",
    "src": "https://stockanalysis.com/etf/vt/",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 12.32,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vt (API https://investor.vanguard.com/vmf/api/VT/performance)",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE000VAHT5T0",
    "IE00BK5BQT80",
    "IE00B3RBWM25",
    "IE00B3YLTY66",
    "IE00B4L5Y983"
   ]
  },
  {
   "ticker": "VEA",
   "name": "Vanguard FTSE Developed Markets ETF",
   "group": "world",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "similar",
   "ter": {
    "v": 0.03,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vea",
    "asOf": "2026-04-28"
   },
   "aum": {
    "v": 238100000000,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vea",
    "asOf": "2026-08-31"
   },
   "aumShareClass": true,
   "holdings": {
    "v": 3895,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vea",
    "asOf": "2026-08-31"
   },
   "index": {
    "v": "FTSE Developed All Cap ex US Index",
    "src": "https://stockanalysis.com/etf/vea/",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 9.76,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vea (API https://investor.vanguard.com/vmf/api/VEA/performance)",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE0006WW1TQ4"
   ]
  },
  {
   "ticker": "VWO",
   "name": "Vanguard FTSE Emerging Markets ETF",
   "group": "world",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "similar",
   "ter": {
    "v": 0.06,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vwo",
    "asOf": "2026-02-27"
   },
   "aum": {
    "v": 127300000000,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vwo",
    "asOf": "2026-08-31"
   },
   "aumShareClass": true,
   "holdings": {
    "v": 6348,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vwo",
    "asOf": "2026-08-31"
   },
   "index": {
    "v": "FTSE Emerging Markets All Cap China A Inclusion Index",
    "src": "https://stockanalysis.com/etf/vwo/",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 7.66,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vwo (API https://investor.vanguard.com/vmf/api/VWO/performance)",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE00BK5BR733",
    "IE00B3VVMM84",
    "IE00BKM4GZ66"
   ]
  },
  {
   "ticker": "SCHD",
   "name": "Schwab U.S. Dividend Equity ETF",
   "group": "div",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "none",
   "ter": {
    "v": 0.06,
    "src": "https://www.schwabassetmanagement.com/products/schd",
    "asOf": "2026-10-11"
   },
   "aum": {
    "v": 110315371813,
    "src": "https://www.schwabassetmanagement.com/products/schd",
    "asOf": "2026-10-09"
   },
   "aumShareClass": false,
   "holdings": {
    "v": 102,
    "src": "https://www.schwabassetmanagement.com/products/schd",
    "asOf": "2026-10-08"
   },
   "index": {
    "v": "Dow Jones U.S. Dividend 100 Index",
    "src": "https://www.schwabassetmanagement.com/products/schd",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 12.44,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/schd (API https://investor.vanguard.com/vmf/api/SCHD/performance)",
    "asOf": "2026-09-30",
    "secondary": true
   },
   "twins": [
    "IE00B6YX5D40",
    "IE00B8GKDB10",
    "IE00BK5BR626"
   ]
  },
  {
   "ticker": "VYM",
   "name": "Vanguard High Dividend Yield ETF",
   "group": "div",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "similar",
   "ter": {
    "v": 0.04,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vym",
    "asOf": "2026-02-27"
   },
   "aum": {
    "v": 83100000000,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vym",
    "asOf": "2026-08-31"
   },
   "aumShareClass": true,
   "holdings": {
    "v": 603,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vym",
    "asOf": "2026-08-31"
   },
   "index": {
    "v": "FTSE High Dividend Yield Index",
    "src": "https://stockanalysis.com/etf/vym/",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 11.28,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vym (API https://investor.vanguard.com/vmf/api/VYM/performance)",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE00B6YX5D40",
    "IE00B8GKDB10",
    "IE00BK5BR626"
   ]
  },
  {
   "ticker": "AGG",
   "name": "iShares Core U.S. Aggregate Bond ETF",
   "group": "bonds",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "same",
   "ter": {
    "v": 0.03,
    "src": "https://www.ishares.com/us/products/239458/ishares-core-total-us-bond-market-etf",
    "asOf": "2026-10-11"
   },
   "aum": {
    "v": 137104891172,
    "src": "https://www.ishares.com/us/products/239458/ishares-core-total-us-bond-market-etf",
    "asOf": "2026-10-09"
   },
   "aumShareClass": false,
   "holdings": {
    "v": 13400,
    "src": "https://www.ishares.com/us/products/239458/ishares-core-total-us-bond-market-etf",
    "asOf": "2026-10-08"
   },
   "index": {
    "v": "Bloomberg US Aggregate Bond Index",
    "src": "https://www.ishares.com/us/products/239458/ishares-core-total-us-bond-market-etf",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 1.11,
    "src": "https://www.ishares.com/us/products/239458/ishares-core-total-us-bond-market-etf",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE00B44CGS96",
    "IE00BDFJYM28"
   ]
  },
  {
   "ticker": "GLD",
   "name": "SPDR Gold Shares",
   "group": "other",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "etc",
   "ter": {
    "v": 0.4,
    "src": "https://www.ssga.com/us/en/intermediary/etfs/spdr-gold-shares-gld",
    "asOf": "2026-10-11"
   },
   "aum": {
    "v": 141682530000,
    "src": "https://www.ssga.com/us/en/intermediary/etfs/spdr-gold-shares-gld",
    "asOf": "2026-10-09"
   },
   "aumShareClass": false,
   "holdings": null,
   "index": {
    "v": "LBMA Gold Price PM (benchmark)",
    "src": "https://www.ssga.com/us/en/intermediary/etfs/spdr-gold-shares-gld",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 11.74,
    "src": "https://www.ssga.com/us/en/intermediary/etfs/spdr-gold-shares-gld",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE00B579F325",
    "IE00B4ND3602",
    "DE000A0S9GB0"
   ]
  },
  {
   "ticker": "VNQ",
   "name": "Vanguard Real Estate ETF",
   "group": "other",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "similar",
   "ter": {
    "v": 0.13,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vnq",
    "asOf": "2026-05-28"
   },
   "aum": {
    "v": 38100000000,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vnq",
    "asOf": "2026-08-31"
   },
   "aumShareClass": true,
   "holdings": {
    "v": 139,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vnq",
    "asOf": "2026-08-31"
   },
   "index": {
    "v": "MSCI US Investable Market Real Estate 25/50 Index",
    "src": "https://stockanalysis.com/etf/vnq/",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 4.39,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vnq (API https://investor.vanguard.com/vmf/api/VNQ/performance)",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE00B1FZSF77"
   ]
  },
  {
   "ticker": "IWM",
   "name": "iShares Russell 2000 ETF",
   "group": "usa",
   "nyse": true,
   "exchange": "NYSE Arca",
   "verdict": "same",
   "ter": {
    "v": 0.19,
    "src": "https://www.ishares.com/us/products/239710/ishares-russell-2000-etf",
    "asOf": "2026-10-11"
   },
   "aum": {
    "v": 78740032209,
    "src": "https://www.ishares.com/us/products/239710/ishares-russell-2000-etf",
    "asOf": "2026-10-09"
   },
   "aumShareClass": false,
   "holdings": {
    "v": 1984,
    "src": "https://www.ishares.com/us/products/239710/ishares-russell-2000-etf",
    "asOf": "2026-10-08"
   },
   "index": {
    "v": "Russell 2000 Index",
    "src": "https://www.ishares.com/us/products/239710/ishares-russell-2000-etf",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 9.75,
    "src": "https://www.ishares.com/us/products/239710/ishares-russell-2000-etf",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE00BJ38QD84"
   ]
  },
  {
   "ticker": "QQQ",
   "name": "Invesco QQQ Trust, Series 1",
   "group": "nasdaq",
   "nyse": false,
   "exchange": "Nasdaq",
   "verdict": "same",
   "ter": {
    "v": 0.18,
    "src": "https://stockanalysis.com/etf/qqq/",
    "asOf": "2026-10-11"
   },
   "aum": {
    "v": 507760000000,
    "src": "https://stockanalysis.com/etf/qqq/",
    "asOf": "2026-10-09"
   },
   "aumShareClass": false,
   "holdings": {
    "v": 103,
    "src": "https://stockanalysis.com/etf/qqq/",
    "asOf": "2026-10-09"
   },
   "index": {
    "v": "Nasdaq-100 Index",
    "src": "https://stockanalysis.com/etf/qqq/",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 20.91,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/qqq (API https://investor.vanguard.com/vmf/api/QQQ/performance)",
    "asOf": "2026-09-30",
    "secondary": true
   },
   "twins": [
    "IE0032077012",
    "IE00BFZXGZ54",
    "IE00B53SZB19"
   ]
  },
  {
   "ticker": "VXUS",
   "name": "Vanguard Total International Stock ETF",
   "group": "nasdaq",
   "nyse": false,
   "exchange": "Nasdaq",
   "verdict": "similar",
   "ter": {
    "v": 0.05,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vxus",
    "asOf": "2026-02-27"
   },
   "aum": {
    "v": 164900000000,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vxus",
    "asOf": "2026-08-31"
   },
   "aumShareClass": true,
   "holdings": {
    "v": 8790,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vxus",
    "asOf": "2026-08-31"
   },
   "index": {
    "v": "FTSE Global All Cap ex US Index",
    "src": "https://stockanalysis.com/etf/vxus/",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 9.2,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/vxus (API https://investor.vanguard.com/vmf/api/3369/performance)",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE0009A5ADV9"
   ]
  },
  {
   "ticker": "BND",
   "name": "Vanguard Total Bond Market ETF",
   "group": "nasdaq",
   "nyse": false,
   "exchange": "Nasdaq",
   "verdict": "similar",
   "ter": {
    "v": 0.03,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/bnd",
    "asOf": "2026-04-28"
   },
   "aum": {
    "v": 163300000000,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/bnd",
    "asOf": "2026-08-31"
   },
   "aumShareClass": true,
   "holdings": {
    "v": 11421,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/bnd",
    "asOf": "2026-08-31"
   },
   "index": {
    "v": "Bloomberg U.S. Aggregate Float Adjusted Index",
    "src": "https://stockanalysis.com/etf/bnd/",
    "asOf": "2026-10-11"
   },
   "ret10": {
    "v": 1.13,
    "src": "https://investor.vanguard.com/investment-products/etfs/profile/bnd (API https://investor.vanguard.com/vmf/api/BND/performance)",
    "asOf": "2026-09-30",
    "secondary": false
   },
   "twins": [
    "IE00B44CGS96",
    "IE00BDFJYM28"
   ]
  }
 ],
 "twins": [
  {
   "isin": "IE000VAHT5T0",
   "name": "Vanguard FTSE Global All-Cap UCITS ETF (USD) Accumulating",
   "ticker": "VGLA",
   "alias": "VALU",
   "listings": [
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "VGLA"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "VALU"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "VALL"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "VALL"
    },
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "VALL"
    },
    {
     "ex": "SIX Swiss Exchange",
     "cur": "USD",
     "t": "VALL"
    }
   ],
   "ter": 0.07,
   "size": null,
   "acc": true,
   "index": "FTSE Global All Cap Net Tax Index USD",
   "holdings": "6,429 (31 August 2026)",
   "domicile": "Ireland",
   "match": "same",
   "note": "Stejná rodina indexu FTSE Global All Cap včetně malých firem. Evropská verze od Vanguardu, uvedená v srpnu 2026. Výnos se může lišit kvůli daním a vzorkování.",
   "src": "https://www.vanguard.co.uk/professional/product/etf/equity/E161/ftse-global-all-cap-ucits-etf-usd-acc",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B5BMR087",
   "name": "iShares Core S&P 500 UCITS ETF USD (Acc)",
   "ticker": "SXR8",
   "alias": "CSPX",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "CSSPX"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "CSPX"
    },
    {
     "ex": "LSE",
     "cur": "GBX",
     "t": "CSP1"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "CSPX"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "SXR8"
    }
   ],
   "ter": 0.07,
   "size": 141385,
   "acc": true,
   "index": "S&P 500®",
   "holdings": "503",
   "domicile": "Ireland",
   "match": "same",
   "note": "Stejný index S&P 500. Největší evropský fond na tenhle index.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B5BMR087",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00BFMXXD54",
   "name": "Vanguard S&P 500 UCITS ETF (USD) Accumulating",
   "ticker": "VUAA",
   "alias": null,
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "VUAA"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "VUAG"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "VUAA"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "VUAA"
    }
   ],
   "ter": 0.07,
   "size": 33371,
   "acc": true,
   "index": "S&P 500®",
   "holdings": "503",
   "domicile": "Ireland",
   "match": "same",
   "note": "Stejný index, evropská verze přímo od Vanguardu.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00BFMXXD54",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B3XXRP09",
   "name": "Vanguard S&P 500 UCITS ETF (USD) Distributing",
   "ticker": "VUSA",
   "alias": "VUSD",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "VUSA"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "VUSA"
    },
    {
     "ex": "Euronext Paris",
     "cur": "EUR",
     "t": "VUSA"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "VUSA"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "VUSD"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "VUSA"
    }
   ],
   "ter": 0.07,
   "size": 48236,
   "acc": false,
   "index": "S&P 500®",
   "holdings": "503",
   "domicile": "Ireland",
   "match": "same",
   "note": "Stejný index, verze, která vyplácí dividendy.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B3XXRP09",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE000XZSV718",
   "name": "State Street SPDR S&P 500 UCITS ETF USD Unhedged (Acc)",
   "ticker": "SPYL",
   "alias": null,
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "SP5A"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "SPYL"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "SPXL"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "SPYL"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "SPYL"
    }
   ],
   "ter": 0.03,
   "size": 17596,
   "acc": true,
   "index": "S&P 500®",
   "holdings": "504",
   "domicile": "Ireland",
   "match": "same",
   "note": "Stejný index a nejnižší TER ze všech dvojčat S&P 500.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE000XZSV718",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00BJ0KDR00",
   "name": "Xtrackers MSCI USA UCITS ETF 1C",
   "ticker": "XD9U",
   "alias": null,
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "XD9U"
    },
    {
     "ex": "LSE",
     "cur": "GBX",
     "t": "XDUS"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "XD9U"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "XD9U"
    }
   ],
   "ter": 0.03,
   "size": 12329,
   "acc": true,
   "index": "MSCI USA",
   "holdings": "525",
   "domicile": "Ireland",
   "match": "similar",
   "note": "Podobný index: MSCI USA bere velké a střední firmy, asi 85 % trhu. Malé firmy chybí.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00BJ0KDR00",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00BK5BQT80",
   "name": "Vanguard FTSE All-World UCITS ETF (USD) Accumulating",
   "ticker": "VWCE",
   "alias": "VWRA",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "VWCE"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "VWCE"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "VWRP"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "VWRA"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "VWCE"
    }
   ],
   "ter": 0.14,
   "size": 55102,
   "acc": true,
   "index": "FTSE All-World",
   "holdings": "3,759",
   "domicile": "Ireland",
   "match": "similar",
   "note": "Podobný index: FTSE All-World bez malých firem, které VT drží.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00BK5BQT80",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B3RBWM25",
   "name": "Vanguard FTSE All-World UCITS ETF (USD) Distributing",
   "ticker": "VGWL",
   "alias": "VWRL",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "VWRL"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "VWRL"
    },
    {
     "ex": "Euronext Paris",
     "cur": "EUR",
     "t": "VWRL"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "VWRL"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "VWRD"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "VGWL"
    }
   ],
   "ter": 0.14,
   "size": 24335,
   "acc": false,
   "index": "FTSE All-World",
   "holdings": "3,759",
   "domicile": "Ireland",
   "match": "similar",
   "note": "Totéž co VWCE, jen vyplácí dividendy.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B3RBWM25",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B3YLTY66",
   "name": "State Street SPDR MSCI All Country World Investable Market UCITS ETF USD Unhedged (Acc)",
   "ticker": "SPYI",
   "alias": "IMID",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "IMIE"
    },
    {
     "ex": "Euronext Paris",
     "cur": "EUR",
     "t": "IMIE"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "IMID"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "SPYI"
    }
   ],
   "ter": 0.17,
   "size": 8257,
   "acc": true,
   "index": "MSCI All Country World Investable Market (ACWI IMI)",
   "holdings": "5,981",
   "domicile": "Ireland",
   "match": "similar",
   "note": "MSCI ACWI IMI má i malé firmy, takže je k VT blíž.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B3YLTY66",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE0009A5ADV9",
   "name": "Vanguard FTSE All-World Ex-U.S. UCITS ETF USD Acc",
   "ticker": "VXUS",
   "alias": "VXUA",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "VXUS"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "VXUS"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "VXUS"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "VXUA"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "VXUS"
    }
   ],
   "ter": 0.12,
   "size": 110,
   "acc": true,
   "index": "FTSE All-World ex US",
   "holdings": "2,340",
   "domicile": "Ireland",
   "match": "similar",
   "note": "Svět bez USA, bez malých firem. Fond je nový a zatím malý, hlídejte spread.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE0009A5ADV9",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE0006WW1TQ4",
   "name": "Xtrackers MSCI World ex USA UCITS ETF 1C",
   "ticker": "EXUS",
   "alias": null,
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "EXUS"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "XMWX"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "EXUS"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "EXUS"
    }
   ],
   "ter": 0.15,
   "size": 6989,
   "acc": true,
   "index": "MSCI World ex USA",
   "holdings": "755",
   "domicile": "Ireland",
   "match": "similar",
   "note": "Přibližně: MSCI World ex USA má jen velké a střední firmy, index VEA i ty malé.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE0006WW1TQ4",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00BK5BR733",
   "name": "Vanguard FTSE Emerging Markets UCITS ETF (USD) Accumulating",
   "ticker": "VFEA",
   "alias": null,
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "VFEA"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "VFEG"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "VFEA"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "VFEA"
    }
   ],
   "ter": 0.17,
   "size": 2192,
   "acc": true,
   "index": "FTSE Emerging",
   "holdings": "2,289",
   "domicile": "Ireland",
   "match": "similar",
   "note": "Stejná rodina indexů FTSE Emerging, ale bez malých firem.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00BK5BR733",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B3VVMM84",
   "name": "Vanguard FTSE Emerging Markets UCITS ETF (USD) Distributing",
   "ticker": "VFEM",
   "alias": "VDEM",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "VFEM"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "VFEM"
    },
    {
     "ex": "Euronext Paris",
     "cur": "EUR",
     "t": "VFEM"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "VFEM"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "VDEM"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "VFEM"
    }
   ],
   "ter": 0.17,
   "size": 3234,
   "acc": false,
   "index": "FTSE Emerging",
   "holdings": "2,289",
   "domicile": "Ireland",
   "match": "similar",
   "note": "Totéž co VFEA, jen vyplácí dividendy.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B3VVMM84",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00BKM4GZ66",
   "name": "iShares Core MSCI Emerging Markets IMI UCITS ETF (Acc)",
   "ticker": "IS3N",
   "alias": "EIMI",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "EIMI"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "EMIM"
    },
    {
     "ex": "LSE",
     "cur": "GBX",
     "t": "EMIM"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "EIMI"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "IS3N"
    }
   ],
   "ter": 0.18,
   "size": 40895,
   "acc": true,
   "index": "MSCI Emerging Markets Investable Market (IMI)",
   "holdings": "2,902",
   "domicile": "Ireland",
   "match": "similar",
   "note": "MSCI EM IMI včetně malých firem. Největší evropský fond na rozvíjející se trhy.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00BKM4GZ66",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B6YX5D40",
   "name": "State Street SPDR S&P U.S. Dividend Aristocrats UCITS ETF USD Unhedged (Dist)",
   "ticker": "SPYD",
   "alias": "UDVD",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "USDV"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "USDV"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "UDVD"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "SPYD"
    }
   ],
   "ter": 0.35,
   "size": 3261,
   "acc": false,
   "index": "S&P High Yield Dividend Aristocrats",
   "holdings": "155",
   "domicile": "Ireland",
   "match": "different",
   "note": "Jiný index: S&P High Yield Dividend Aristocrats. Na index SCHD evropský fond neexistuje.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B6YX5D40",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B8GKDB10",
   "name": "Vanguard FTSE All-World High Dividend Yield UCITS ETF Distributing",
   "ticker": "VGWD",
   "alias": "VHYL",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "VHYL"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "VHYL"
    },
    {
     "ex": "Euronext Paris",
     "cur": "EUR",
     "t": "VHYL"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "VHYL"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "VHYD"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "VGWD"
    }
   ],
   "ter": 0.29,
   "size": 9982,
   "acc": false,
   "index": "FTSE All-World High Dividend Yield",
   "holdings": "2,348",
   "domicile": "Ireland",
   "match": "different",
   "note": "Jiný rozsah: dividendové firmy z celého světa, ne jen z USA.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B8GKDB10",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00BK5BR626",
   "name": "Vanguard FTSE All-World High Dividend Yield UCITS ETF Acc",
   "ticker": "VGWE",
   "alias": "VHYA",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "VHYA"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "VGWE"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "VHYG"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "VHYA"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "VGWE"
    }
   ],
   "ter": 0.29,
   "size": 3093,
   "acc": true,
   "index": "FTSE All-World High Dividend Yield",
   "holdings": "2,348",
   "domicile": "Ireland",
   "match": "different",
   "note": "Totéž co VHYL, jen dividendy nevyplácí.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00BK5BR626",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B44CGS96",
   "name": "iShares US Aggregate Bond UCITS ETF (Dist)",
   "ticker": "EUNX",
   "alias": "IUAG",
   "listings": [
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "SUAG"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "IUAG"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "EUNX"
    }
   ],
   "ter": 0.25,
   "size": 1054,
   "acc": false,
   "index": "Bloomberg US Aggregate Bond",
   "holdings": "9,580",
   "domicile": "Ireland",
   "match": "same",
   "note": "Stejný index Bloomberg US Aggregate, v dolarech, vyplácí.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B44CGS96",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00BDFJYM28",
   "name": "iShares US Aggregate Bond UCITS ETF EUR Hedged (Acc)",
   "ticker": "IUAE",
   "alias": null,
   "listings": [
    {
     "ex": "LSE",
     "cur": "EUR",
     "t": "IUAE"
    }
   ],
   "ter": 0.3,
   "size": 343,
   "acc": true,
   "index": "Bloomberg US Aggregate Bond (EUR Hedged)",
   "holdings": "9,580",
   "domicile": "Ireland",
   "match": "same",
   "note": "Stejný index, zajištěný do eur. Riziko kurzu koruny tím nezmizí.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00BDFJYM28",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B579F325",
   "name": "Invesco Physical Gold ETC",
   "ticker": "8PSG",
   "alias": "SGLD",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "SGLD"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "SGLD"
    },
    {
     "ex": "LSE",
     "cur": "GBX",
     "t": "SGLP"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "SGLD"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "8PSG"
    }
   ],
   "ter": 0.12,
   "size": 25786,
   "acc": true,
   "index": null,
   "holdings": null,
   "domicile": "Ireland",
   "match": "etc",
   "note": "Fyzické zlato, ale jako ETC (dluhopis krytý zlatem), ne fond.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B579F325",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B4ND3602",
   "name": "iShares Physical Gold ETC",
   "ticker": "PPFB",
   "alias": "IGLN",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "SGLN"
    },
    {
     "ex": "LSE",
     "cur": "EUR",
     "t": "EGLN"
    },
    {
     "ex": "LSE",
     "cur": "GBX",
     "t": "SGLN"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "IGLN"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "PPFB"
    }
   ],
   "ter": 0.12,
   "size": 34064,
   "acc": true,
   "index": null,
   "holdings": null,
   "domicile": "Ireland",
   "match": "etc",
   "note": "Fyzické zlato jako ETC, ne fond.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B4ND3602",
   "asOf": "2026-10-11"
  },
  {
   "isin": "DE000A0S9GB0",
   "name": "Xetra-Gold",
   "ticker": "4GLD",
   "alias": null,
   "listings": [
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "4GLD"
    }
   ],
   "ter": 0,
   "size": 20886,
   "acc": true,
   "index": null,
   "holdings": null,
   "domicile": "Germany",
   "match": "etc",
   "note": "Německý dluhopis s nárokem na vydání zlata. Náklady na úschovu jsme neověřili.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=DE000A0S9GB0",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B1FZSF77",
   "name": "iShares US Property Yield UCITS ETF",
   "ticker": "IQQ7",
   "alias": "IDUP",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "IUSP"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "IUSP"
    },
    {
     "ex": "LSE",
     "cur": "GBX",
     "t": "IUSP"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "IDUP"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "IQQ7"
    }
   ],
   "ter": 0.4,
   "size": 507,
   "acc": false,
   "index": "FTSE EPRA/NAREIT United States Dividend+",
   "holdings": "85",
   "domicile": "Ireland",
   "match": "similar",
   "note": "Přibližně: jiný index amerických nemovitostí s menším počtem firem.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B1FZSF77",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00BJ38QD84",
   "name": "State Street SPDR Russell 2000 U.S. Small Cap UCITS ETF USD",
   "ticker": "ZPRR",
   "alias": "R2US",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "R2US"
    },
    {
     "ex": "Euronext Paris",
     "cur": "EUR",
     "t": "R2US"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "R2SC"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "R2US"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "ZPRR"
    }
   ],
   "ter": 0.3,
   "size": 4233,
   "acc": true,
   "index": "Russell 2000®",
   "holdings": "1,939",
   "domicile": "Ireland",
   "match": "same",
   "note": "Stejný index Russell 2000.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00BJ38QD84",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE0032077012",
   "name": "Invesco EQQQ Nasdaq-100 UCITS ETF",
   "ticker": "EQQQ",
   "alias": "EQQU",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "EQQQ"
    },
    {
     "ex": "Euronext Paris",
     "cur": "EUR",
     "t": "EQQQ"
    },
    {
     "ex": "LSE",
     "cur": "GBX",
     "t": "EQQQ"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "EQQU"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "EQQQ"
    }
   ],
   "ter": 0.3,
   "size": 13244,
   "acc": false,
   "index": "Nasdaq 100®",
   "holdings": "102",
   "domicile": "Ireland",
   "match": "same",
   "note": "Stejný index Nasdaq-100, vyplácí dividendy.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE0032077012",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00BFZXGZ54",
   "name": "Invesco EQQQ Nasdaq-100 UCITS ETF Acc",
   "ticker": "EQQB",
   "alias": null,
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "EQAC"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "EQQB"
    }
   ],
   "ter": 0.3,
   "size": 4484,
   "acc": true,
   "index": "Nasdaq 100®",
   "holdings": "102",
   "domicile": "Ireland",
   "match": "same",
   "note": "Stejný index Nasdaq-100, dividendy nevyplácí.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00BFZXGZ54",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B53SZB19",
   "name": "iShares Nasdaq 100 UCITS ETF (Acc)",
   "ticker": "SXRV",
   "alias": "CNDX",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "CSNDX"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "CNDX"
    },
    {
     "ex": "LSE",
     "cur": "GBX",
     "t": "CNX1"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "CNDX"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "SXRV"
    }
   ],
   "ter": 0.3,
   "size": 26969,
   "acc": true,
   "index": "Nasdaq 100®",
   "holdings": "103",
   "domicile": "Ireland",
   "match": "same",
   "note": "Stejný index Nasdaq-100 od iShares, dividendy nevyplácí.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B53SZB19",
   "asOf": "2026-10-11"
  },
  {
   "isin": "IE00B4L5Y983",
   "name": "iShares Core MSCI World UCITS ETF USD (Acc)",
   "ticker": "EUNL",
   "alias": "IWDA",
   "listings": [
    {
     "ex": "Borsa Italiana",
     "cur": "EUR",
     "t": "SWDA"
    },
    {
     "ex": "Euronext Amsterdam",
     "cur": "EUR",
     "t": "IWDA"
    },
    {
     "ex": "LSE",
     "cur": "GBP",
     "t": "SWDA"
    },
    {
     "ex": "LSE",
     "cur": "GBX",
     "t": "SWDA"
    },
    {
     "ex": "LSE",
     "cur": "USD",
     "t": "IWDA"
    },
    {
     "ex": "Xetra",
     "cur": "EUR",
     "t": "EUNL"
    }
   ],
   "ter": 0.2,
   "size": 133406,
   "acc": true,
   "index": "MSCI World",
   "holdings": "1,252",
   "domicile": "Ireland",
   "match": "different",
   "note": "Jen vyspělé trhy (MSCI World). Mezi Čechy oblíbený, ale dvojče VT to není.",
   "src": "https://www.justetf.com/en/etf-profile.html?isin=IE00B4L5Y983",
   "asOf": "2026-10-11"
  }
 ]
};
