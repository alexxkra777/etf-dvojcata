# Agent: ETF data

Claude Code sub-agent log, exported from `agent-ad49f16eba715c969.jsonl`.
Tool outputs longer than 1,500 characters are shortened.
Russian prose and localized tool output are translated into English; executed tool code is retained.

## Brief

You are a data researcher for a landing page that compares ETFs traded on NYSE (NYSE Arca counts) for a Czech retail investor. All figures must be REAL with source URL and date. Today is 2026-10-11.

Important context to verify and document: EU retail investors usually cannot buy US-domiciled ETFs at EU brokers because the PRIIPs regulation requires a KID (key information document), which US issuers don't publish (since 2018). Check how this applies in the Czech Republic and at brokers used by Czechs (XTB, Trading 212, Interactive Brokers, Degiro, Fio e-Broker, Revolut, Saxo, Portu/Fondee are robo-advisors). Find exceptions (professional client status, options exercise, MiFID). The page will therefore show the popular NYSE ETFs the Czech investor hears about AND their UCITS equivalents ("European twins") that they can actually buy.

Collect:
1. 10–14 of the most popular NYSE / NYSE Arca listed ETFs relevant to a beginner: e.g. SPY, VOO, IVV, VTI, QQQ (Nasdaq-listed — check listing exchange and handle honestly, maybe exclude or note), VT, VXUS, SCHD, VYM, BND, AGG, GLD, VNQ, VEA, VWO, IWM. For each: ticker, full name, issuer, primary listing exchange (verify!), inception date, expense ratio, AUM (with "as of" date), number of holdings, dividend yield (TTM or SEC yield, say which), distribution frequency, 1y / 3y / 5y / 10y annualized total return (NAV, with as-of date) where available, index tracked. Source: the issuer's official fund page (ssga.com, vanguard.com/investor.vanguard.com, ishares.com, schwabassetmanagement.com, invesco.com) preferred; stockanalysis.com / etf.com / morningstar as secondary. Record source URL + accessed date per fact.
2. For each, the closest UCITS equivalent(s) available to Czech investors: ticker(s) on LSE / Xetra / Euronext, ISIN, TER, fund size, accumulating/distributing, domicile (Ireland), replication, currency; source = justetf.com and/or issuer pages, with dates.
3. Tax notes for a Czech tax resident (verify with Czech sources, e.g. financnisprava.cz, penize.cz, kurzy.cz, roklen, Investiční web): US dividend withholding 15% with W-8BEN vs 30% without; Irish-domiciled fund withholding on US dividends (15% inside the fund) ; Czech "časový test" (3-year holding exemption) and the CZK 100,000 annual gross sales exemption, and the 2025+ cap (40 million CZK) if applicable; US estate tax risk for US-situs assets above USD 60k for non-residents.
4. Historical data needed for a fee calculator: a defensible long-run return assumption for a global/S&P 500 index (cite source, e.g. S&P SPIVA / Dimson-Marsh-Staunton / Vanguard capital market assumptions), and current EUR/CZK and USD/CZK rate from cnb.cz with date.

Rules: Use WebSearch/WebFetch heavily. Never invent numbers; if a page doesn't load, try another source and say which. Keep the "as of" dates the source shows. No signups, no forms, no git, don't touch other files.

Output: [redacted: local path] (structured: etfs[], ucits_twins[], tax_notes[], assumptions[], each fact with source_url, accessed, as_of) and [redacted: local path] (human-readable tables + caveats, and a section "facts I could not verify"). Create the folder. Final message: 15-line summary + the path.

→ `ToolSearch`

<details><summary>result</summary>

```

```
</details>

→ `WebFetch` https://stockanalysis.com/etf/voo/

→ `WebFetch` https://stockanalysis.com/etf/spy/

<details><summary>result</summary>

```
| Field | Value |
|---|---|
| Full name | State Street SPDR S&P 500 ETF (SPY) |
| Issuer | State Street ("issued by State Street") |
| Exchange | NYSE Arca (listed as "NYSEARCA: SPY") |
| Inception date | Jan 22, 1993 |
| Expense ratio | 0.09% |
| Assets/AUM | $821.03B (the page gives no specific as-of date for this figure; "Last checked" is Oct 10, 2026) |
| Holdings count | 505 |
| Dividend yield (TTM) | 0.97% (Dividend (ttm) $7.58) |
| Payout frequency | Quarterly |
| Index tracked | S&P 500 |
| Price date shown | Oct 9, 2026, 4:00 PM ("At close"), price 778.57 |
```
</details>

<details><summary>result</summary>

```
**VOO (Vanguard S&P 500 ETF): Extracted Data**

| Field | Value |
|---|---|
| Full name | Vanguard S&P 500 ETF |
| Ticker / exchange | VOO / NYSE Arca (listed as "NYSEARCA: VOO") |
| Issuer | Vanguard (ETF Provider: "Vanguard") |
| Inception date | Sep 7, 2010 |
| Expense ratio | 0.03% |
| Assets (AUM) | $1.06T (the page gives no as-of date for this figure) |
| Holdings count | 516 |
| Index tracked | S&P 500 |
| Dividend (TTM) | $7.43 |
| Dividend yield | 1.04% (listed as "Dividend Yield" beside the "Dividend (ttm)" figure, so it appears to be trailing-twelve-month) |
| Payout frequency | Quarterly |
| Ex-dividend date | Sep 28, 2026 (amount $1.8226, pay date Sep 30, 2026) |
| Price date shown | Oct 9, 2026, 4:00 PM ("At close"); $715.59, +4.31 (0.61%) |

**Other notes:**
- After-hours: 715.38 (-0.21, -0.03%) as of Oct 9, 2026, 6:39 PM EDT.
- The page's "Last checked" date is Oct 10, 2026.
```
</details>

→ `WebFetch` https://stockanalysis.com/etf/ivv/

→ `WebFetch` https://stockanalysis.com/etf/vti/

→ `WebFetch` https://stockanalysis.com/etf/qqq/

<details><summary>result</summary>

```
- **Full name:** iShares Core S&P 500 ETF (IVV)
- **Issuer:** BlackRock
- **Exchange:** NYSEARCA
- **Inception date:** May 15, 2000
- **Expense ratio:** 0.03%
- **Assets:** $895.99B
- **Holdings count:** 508
- **Dividend (TTM):** $8.40
- **Dividend yield:** 1.07%
- **Payout frequency:** Quarterly
- **Index tracked:** S&P 500
- **Price date shown:** Oct 9, 2026 (at close, 4:00 PM)
- **Last checked:** Oct 10, 2026
```
</details>

→ `WebFetch` https://stockanalysis.com/etf/vt/

<details><summary>result</summary>

```
| Field | Value |
|---|---|
| Full name | Vanguard Morningstar Total Stock Market ETF |
| Issuer | Vanguard |
| Exchange | NYSEARCA (NYSE Arca) |
| Inception date | May 24, 2001 |
| Expense ratio | 0.03% |
| Assets | $703.05B |
| Holdings count | 3514 |
| Dividend (ttm) | $3.95 |
| Dividend yield | 1.03% |
| Payout frequency | Quarterly |
| Index tracked | Morningstar US Total Market TR USD |
| Price date shown | Oct 9, 2026, 4:00 PM (at close) |
| Last checked | Oct 10, 2026 |
```
</details>

→ `WebFetch` https://stockanalysis.com/etf/vxus/

<details><summary>result</summary>

```
- **Full name:** Invesco QQQ Trust Series I
- **Ticker/Exchange:** NASDAQ:QQQ
- **Issuer:** Invesco
- **Inception date:** Mar 10, 1999
- **Expense ratio:** 0.18%
- **Assets:** $507.76B
- **Holdings count:** 103
- **Dividend (TTM):** $3.09
- **Dividend yield:** 0.41%
- **Payout frequency:** Quarterly
- **Index tracked:** NASDAQ 100 Index
- **Price date shown:** Oct 9, 2026, 4:00 PM EDT (at close, $751.27)
- **Last checked:** Oct 10, 2026
```
</details>

→ `WebFetch` https://stockanalysis.com/etf/schd/

<details><summary>result</summary>

```
| Field | Value |
|---|---|
| Full name | Vanguard Total World Stock ETF (VT) |
| Issuer | Vanguard |
| Exchange | NYSEARCA (NYSE Arca) |
| Inception date | Jun 24, 2008 |
| Expense ratio | 0.06% |
| Assets | $82.69B |
| Holdings count | 10180 |
| Dividend (ttm) | $2.41 |
| Dividend yield | 1.51% |
| Payout frequency | Quarterly |
| Index tracked | FTSE Global All Cap Net Tax (US RIC) Index |
| Price date shown | Oct 9, 2026, 4:00 PM EDT |
| Last checked | Oct 10, 2026 |
```
</details>

<details><summary>result</summary>

```
- **Full name:** Vanguard Total International Stock ETF
- **Ticker:** VXUS
- **Issuer:** Vanguard
- **Exchange:** NASDAQ: VXUS
- **Inception date:** Jan 26, 2011
- **Expense ratio:** 0.05%
- **Assets:** $163.66B
- **Holdings count:** 8860
- **Dividend (ttm):** $1.98
- **Dividend yield:** 2.34%
- **Payout frequency:** Quarterly
- **Index tracked:** FTSE Global All Cap x US
- **Price date shown:** Oct 9, 2026 (at close, 4:00 PM EDT)
- **Last checked:** Oct 10, 2026
```
</details>

<details><summary>result</summary>

```
- **Full name:** Schwab US Dividend Equity ETF
- **Issuer:** Charles Schwab
- **Exchange:** NYSEARCA (NYSE Arca)
- **Inception date:** Oct 20, 2011
- **Expense ratio:** 0.06%
- **Assets:** $108.90B
- **Holdings count:** 102
- **Dividend (ttm):** $1.05
- **Dividend yield:** 3.19%
- **Payout frequency:** Quarterly
- **Index tracked:** Dow Jones U.S. Dividend 100
- **Price date shown:** Oct 9, 2026 (at close, 4:00 PM)
- **Last checked:** Oct 10, 2026
```
</details>

→ `WebFetch` https://stockanalysis.com/etf/vym/

→ `WebFetch` https://stockanalysis.com/etf/bnd/

→ `WebFetch` https://stockanalysis.com/etf/agg/

→ `WebFetch` https://stockanalysis.com/etf/gld/

<details><summary>result</summary>

```
- **Full name:** Vanguard Total Bond Market ETF
- **Ticker/Exchange:** NASDAQ: BND
- **Issuer:** Vanguard
- **Inception date:** Apr 3, 2007
- **Expense ratio:** 0.03%
- **Assets:** $162.07B
- **Holdings count:** 15,000
- **Dividend (TTM):** $2.94
- **Dividend yield:** 4.19%
- **Payout frequency:** Monthly
- **Index tracked:** Bloomberg US Aggregate - Float Adjusted
- **Price date shown:** Oct 9, 2026 (at close, 4:00 PM EDT)
- **Last checked:** Oct 10, 2026
```
</details>

→ `WebFetch` https://stockanalysis.com/etf/vnq/

→ `WebFetch` https://stockanalysis.com/etf/vea/

<details><summary>result</summary>

```
- **Full name:** iShares Core U.S. Aggregate Bond ETF
- **Ticker/Exchange:** NYSEARCA: AGG
- **Issuer:** BlackRock
- **Inception date:** Sep 22, 2003
- **Expense ratio:** 0.03%
- **Assets:** $136.61B
- **Holdings:** 13410
- **Dividend (ttm):** $3.97
- **Dividend yield:** 4.19%
- **Payout frequency:** Monthly
- **Index tracked:** Bloomberg US Aggregate
- **Price date shown:** Oct 9, 2026, 4:00 PM EDT (market closed)
- **Last checked:** Oct 10, 2026
```
</details>

<details><summary>result</summary>

```
**SPDR Gold Shares (GLD)**

- **Full name:** SPDR Gold Shares
- **Issuer:** State Street
- **Exchange:** NYSEARCA (listed as NYSE Arca)
- **Inception date:** Nov 18, 2004
- **Expense ratio:** 0.40%
- **Assets:** $138.91B
- **Holdings count:** 2 (the holdings table lists Gold at 100.00% and Cash at 0.00%)
- **Dividend (ttm):** n/a
- **Dividend yield:** n/a
- **Payout frequency:** n/a
- **Index tracked:** LBMA Gold Price
- **Price date shown:** Oct 9, 2026, 4:00 PM (at close, $384.58)
- **Last checked:** Oct 10, 2026
```
</details>

→ `WebFetch` https://stockanalysis.com/etf/vwo/

<details><summary>result</summary>

```
- **Full name:** Vanguard Real Estate ETF
- **Issuer:** Vanguard
- **Exchange:** NYSEARCA
- **Inception date:** Sep 23, 2004
- **Expense ratio:** 0.13%
- **Assets:** $35.67B
- **Holdings count:** 151
- **Dividend (ttm):** $3.41
- **Dividend yield:** 3.76%
- **Payout frequency:** Quarterly
- **Index tracked:** MSCI US IMI/Real Estate 25-50
- **Price date shown:** Oct 9, 2026, 4:00 PM EDT (Market closed)
- **Last checked:** Oct 10, 2026
```
</details>

<details><summary>result</summary>

```
- **Full name:** Vanguard High Dividend Yield Index ETF (VYM)
- **Issuer:** Vanguard
- **Exchange:** NYSEARCA
- **Inception date:** Nov 10, 2006
- **Expense ratio:** 0.04%
- **Assets:** $80.04B
- **Holdings count:** 613
- **Dividend (ttm):** $3.68
- **Dividend yield:** 2.32%
- **Payout frequency:** Quarterly
- **Index tracked:** FTSE Custom High Dividend Yield
- **Price date shown:** Oct 9, 2026, 4:00 PM EDT (Market closed; price $158.75)
- **Last checked:** Oct 10, 2026
```
</details>

→ `WebFetch` https://stockanalysis.com/etf/iwm/

<details><summary>result</summary>

```
- **Full name:** Vanguard FTSE Developed Markets ETF (VEA)
- **Issuer:** Vanguard
- **Exchange:** NYSEARCA: (shown as "NYSEARCA: VEA")
- **Inception date:** Jul 20, 2007
- **Expense ratio:** 0.03%
- **Assets:** $230.16B
- **Holdings count:** 3922
- **Dividend (ttm):** $1.70
- **Dividend yield:** 2.42%
- **Payout frequency:** Quarterly
- **Index tracked:** FTSE Developed ex US All Cap Net Tax (US RIC) Index
- **Price date shown:** Oct 9, 2026, 4:00 PM EDT (market closed)
- **Last checked:** Oct 10, 2026
```
</details>

<details><summary>result</summary>

```
| Field | Value |
|---|---|
| Full name | Vanguard FTSE Emerging Markets ETF |
| Issuer | Vanguard |
| Exchange | NYSEARCA |
| Inception date | Mar 4, 2005 |
| Expense ratio | 0.06% |
| Assets | $126.88B |
| Holdings count | 5061 |
| Dividend (ttm) | $1.22 |
| Dividend yield | 2.04% |
| Payout frequency | Quarterly |
| Index tracked | FTSE Custom Emerging Markets All Cap China A Inclusion Net Tax (US RIC) Index |
| Price date shown | Oct 9, 2026, 4:00 PM EDT (market closed; price 59.76) |
| Last checked | Oct 10, 2026 |
```
</details>

<details><summary>result</summary>

```
- **Full name:** iShares Russell 2000 ETF (IWM)
- **Issuer:** BlackRock
- **Exchange:** NYSEARCA
- **Inception date:** May 22, 2000
- **Expense ratio:** 0.19%
- **Assets:** $78.16B
- **Holdings count:** 1990
- **Dividend (TTM):** $2.73
- **Dividend yield:** 0.98%
- **Payout frequency:** Quarterly
- **Index tracked:** Russell 2000
- **Price date shown:** Oct 9, 2026, 4:00 PM (at close)
- **Last checked:** Oct 10, 2026
```
</details>

→ `WebFetch` https://investor.vanguard.com/investment-products/etfs/profile/voo

→ `Bash` — Probe Vanguard JSON API endpoints for VOO
```sh
cd [tmp] && for u in "https://investor.vanguard.com/investment-products/etfs/profile/api/VOO/performance" "https://investor.vanguard.com/investment-products/etfs/profile/api/VOO/profile" "https://investor.vanguard.com/vmf/api/VOO/performance"; do echo "== $u"; curl -s -m 20 -A "Mozilla/5.0" "$u" | head -c 800; echo; done
```

<details><summary>result</summary>

```
The content you provided is only the page title, "VOO-Vanguard S&P 500 ETF | Vanguard," so I can't extract any of the requested fields. Based on that content alone, these are all missing:

- Expense ratio and as-of date
- Total net assets (fund and ETF share class) and as-of date
- Number of holdings and as-of date
- SEC yield and as-of date
- Distribution yield
- Average annual total returns (NAV and market) for 1, 3, 5, and 10 years and since inception, with as-of date
- Benchmark name
- Listing exchange

If you paste the full text of the Vanguard VOO page, I'll extract these fields and note the as-of date for each.
```
</details>

<details><summary>result</summary>

```
== https://investor.vanguard.com/investment-products/etfs/profile/api/VOO/performance

== https://investor.vanguard.com/investment-products/etfs/profile/api/VOO/profile

== https://investor.vanguard.com/vmf/api/VOO/performance
{"YTD":{"asOfDate":"2026-10-09T00:00:00-04:00","regular":"15.12","marketPrice":"15.10"},"recentInvestmentRtn":{"asOfDate":"2026-09-30T00:00:00-04:00","shortName":"S&P 500 ETF              ","benchmarkShortName":"S&P 500 Index                                     ","fundReturn":{"asOfDate":"2026-09-30T00:00:00-04:00","id":"0968","name":"S&P 500 ETF              ","calendarYTDPct":"12.72","prevMonthPct":"-0.35","threeMonthPct":"2.30","oneYrPct":"15.70","threeYrPct":"22.85","fiveYrPct":"13.75","tenYrPct":"15.29","isLastMonthEndPerformanceDataAvailable":false},"marketPriceFundReturn":{"asOfDate":"2026-09-30T00:00:00-04:00","id":"0968","name":"S&P 500 ETF              ","calendarYTDPct":"12.74","prevMonthPct":"-0.31","threeMonthPct":"2.31","oneYrPct":"15.78","threeYrPct":"22.88","fiveYrPct":"13.
```
</details>

→ `Bash` — Fetch Vanguard VOO API endpoints
```sh
cd [tmp] && mkdir -p vg && for ep in performance profile characteristic portfolio-holding/stock price distribution; do echo "== $ep"; curl -s -m 20 -A "Mozilla/5.0" "https://investor.vanguard.com/vmf/api/VOO/$ep" | head -c 2500; echo; done
```

<details><summary>result</summary>

```
== performance
{"YTD":{"asOfDate":"2026-10-09T00:00:00-04:00","regular":"15.12","marketPrice":"15.10"},"recentInvestmentRtn":{"asOfDate":"2026-09-30T00:00:00-04:00","shortName":"S&P 500 ETF              ","benchmarkShortName":"S&P 500 Index                                     ","fundReturn":{"asOfDate":"2026-09-30T00:00:00-04:00","id":"0968","name":"S&P 500 ETF              ","calendarYTDPct":"12.72","prevMonthPct":"-0.35","threeMonthPct":"2.30","oneYrPct":"15.70","threeYrPct":"22.85","fiveYrPct":"13.75","tenYrPct":"15.29","isLastMonthEndPerformanceDataAvailable":false},"marketPriceFundReturn":{"asOfDate":"2026-09-30T00:00:00-04:00","id":"0968","name":"S&P 500 ETF              ","calendarYTDPct":"12.74","prevMonthPct":"-0.31","threeMonthPct":"2.31","oneYrPct":"15.78","threeYrPct":"22.88","fiveYrPct":"13.76","tenYrPct":"15.30","isLastMonthEndPerformanceDataAvailable":false},"benchmarkReturn":{"asOfDate":"2026-09-30T00:00:00-04:00","id":"15","name":"S&P 500 Index                                     ","calendarYTDPct":"12.75","prevMonthPct":"-0.35","threeMonthPct":"2.30","oneYrPct":"15.74","threeYrPct":"22.89","fiveYrPct":"13.79","tenYrPct":"15.33","sinceInceptionPct":"14.98","isLastMonthEndPerformanceDataAvailable":true}},"monthEndAvgAnnualRtn":{"sinceInceptionAsOfDate":"2010-09-07T00:00:00-04:00","asOfDate":"2026-09-30T00:00:00-04:00","shortName":"S&P 500 ETF              ","benchmarkShortName":"S&P 500 Index                                     ","fundReturn":{"asOfDate":"2026
… [12265 more characters]
```
</details>

→ `Bash` — Pull Vanguard API data for all Vanguard ETFs
```sh
cd [tmp] && cat > vg.py <<'EOF'
import json, subprocess, sys
T=["VOO","VTI","VT","VXUS","VYM","BND","VNQ","VEA","VWO"]
def get(t,ep):
    r=subprocess.run(["curl","-s","-m","25","-A","Mozilla/5.0",f"https://investor.vanguard.com/vmf/api/{t}/{ep}"],capture_output=True,text=True).stdout
    open(f"vg/{t}_{ep.replace('/','_')}.json","w").write(r)
    try: return json.loads(r)
    except Exception: return {}
out={}
for t in T:
    p=get(t,"profile").get("fundProfile",{})
    c=get(t,"characteristic")
    pr=get(t,"price")
    pf=get(t,"performance")
    d=get(t,"distribution")
    ch=c.get("equityCharacteristic") or {}
    fi=c.get("fixedIncomeCharacteristic") or {}
    f=(ch.get("fund") or fi.get("fund") or {})
    me=pf.get("monthEndAvgAnnualRtn",{})
    qe=pf.get("quarterEndAvgAnnualRtn",{})
    out[t]=dict(longName=p.get("longName"),inception=p.get("inceptionDate"),er=p.get("expenseRatio"),erDate=p.get("expenseRatioAsOfDate"),
      cusip=p.get("cusip"),
      fundKeys={k:v for k,v in f.items() if any(s in k for s in ["NetAssets","numberOf","Date"]) and "Date" not in k or k in("totalNetAssetsDate","share
… [509 more characters]
```

<details><summary>result</summary>

```
{
 "VOO": {
  "longName": "Vanguard S&P 500 ETF",
  "inception": "2010-09-07T00:00:00-04:00",
  "er": "0.0300",
  "erDate": "2026-04-28T00:00:00-04:00",
  "cusip": "922908363",
  "fundKeys": {
   "numberOfBonds": "504",
   "numberOfMoneyMarkets": "505",
   "numberOfStocks": "505",
   "shareClassTotalNetAssets": "$1.0 trillion",
   "shareClassTotalNetAssetsDate": "2026-08-31T00:00:00-04:00",
   "numberOfSecurities": "1009",
   "totalNetAssets": "$1.8 trillion",
   "totalNetAssetsDate": "2026-08-31T00:00:00-04:00",
   "asOfDate": "2026-08-31T00:00:00-04:00"
  },
  "secYield": {
   "asOfDate": "2026-09-30T00:00:00-04:00",
   "yieldPct": "1.00",
   "hasDisclaimer": false,
   "yieldNote": [
    {
     "footnoteCode": "B",
     "footnoteText": "BASED ON HOLDINGS' YIELD TO MATURITY/DIVIDEND FOR LAST 30 DAYS OF PRIOR MONTH"
    }
   ]
  },
  "monthEnd": {
   "asOf": "2026-09-30T00:00:00-04:00",
   "nav": {
    "asOfDate": "2026-09-30T00:00:00-04:00",
    "id": "0968",
    "name": "S&P 500 ETF              ",
    "calendarYTDPct": "12.72",
    "prevMonthPct": "-0.35",
    "threeMonthPct": "2.30",
    "oneYrPct": "15.70",
    "threeYrPct": "22.85",
    "fiveYrPct": "13.75",
    "tenYrPct": "15.29",
    "sinceInceptionPct": "14.94",
    "isLastMonthEndPerformanceDataAvailable": false
   },
   "mkt": {
    "asOfDate": "2026-09-30T00:00:00-04:00",
    "id": "0968",
    "name": "S&P 500 ETF              ",
    "calendarYTDPct": "12.74",
    "prevMonthPct": "-0.31",
    "threeMonthPct": "2.
… [16011 more characters]
```
</details>

→ `Bash` — Retry VXUS and inspect VTI benchmark
```sh
cd [tmp] && sed -i '' 's/^T=.*/T=["VXUS"]/' vg.py && sed -i '' 's/vg_summary.json/vg_summary_vxus.json/' vg.py && python3 vg.py | head -c 3000; echo; grep -o '"benchmark[^}]*' vg/VTI_profile.json | head -5; grep -o -i 'morningstar[^"]*' vg/VTI_profile.json | sort -u | head; python3 -c "
import json;d=json.load(open('vg/VT_price.json'));print(json.dumps(d['currentPrice'].get('yield'))[:500])"
```

<details><summary>result</summary>

```
{
 "VXUS": {
  "longName": null,
  "inception": null,
  "er": null,
  "erDate": null,
  "cusip": null,
  "fundKeys": {},
  "secYield": null,
  "monthEnd": {
   "asOf": null,
   "nav": null,
   "mkt": null,
   "bench": null
  },
  "qtrEnd": {
   "asOf": null,
   "nav": null
  },
  "distFreq": null
 }
}

Morningstar Total Stock Market ETF
{"hasDisclaimer": false}
```
</details>

→ `Bash` — Inspect VXUS failure and VTI profile fields
```sh
cd [tmp] && head -c 400 vg/VXUS_profile.json; echo; curl -s -m 20 -A "Mozilla/5.0" -o /dev/null -w "%{http_code}\n" https://investor.vanguard.com/vmf/api/VXUS/profile; python3 -c "
import json;d=json.load(open('vg/VTI_profile.json'))['fundProfile']
for k,v in d.items():
  if not isinstance(v,(dict,list)): print(k,':',v)
print(json.dumps(d.get('fundCategory'))[:300])
"
```

<details><summary>result</summary>

```
{"response":"error calling https://irr-investment-retail-rest-external.ecs.us-east-1.retp.c1.vanguard.com/VXUS/profile - <html>\n<head>\n\t<!-- <meta http-equiv=\"refresh\" content=\"0; url=https://investor.vanguard.com/error\" /> -->\n\t<!--WebServer Error Page-->\n\t\t<script src=\"https://static.vgcontent.info/web/common/rest/1.1.0/rest.js\"> </script>\n\t\t<script src=\"/static/global/utilitie
200
fundId : 0970
ticker : VTI
instrumentId : 519348
shortName : Total Stock Market ETF
longName : Vanguard Morningstar Total Stock Market ETF
cusip : 922908769
IOVTicker : VTI.IV
inceptionDate : 2001-05-24T00:00:00-04:00
newspaperAbbreviation : VangdVipersTot
style : Stock Funds
type : Domestic Stock - General
category : Large Blend
customizedStyle : Stock - Large-Cap Blend
equityInvestmentStyleId : 2
equityInvestmentStyleName : Large-cap blend
secDesignation :
maximumYearlyInvestment :
expenseRatio : 0.0300
expenseRatioAsOfDate : 2026-04-28T00:00:00-04:00
isInternalFund : True
isExternalFund : False
isMutualFund : False
isETF : True
isVLIP : False
isVVAP : False
is529 : False
hasAssociatedInvestorFund : True
hasMoreThan1ShareClass : True
isPESite : False
signalFundFlag : False
fundManagementStyle : Index
{"customizedHighCategoryName": "Stock - Large-Cap Blend", "high": {"type": "HIGH", "id": 1, "name": "Stock Funds"}, "mid": {"type": "MID", "id": 11, "name": "Domestic Stock - General"}, "low": {"type": "LOW", "id": 1102, "name": "Large Blend"}}
```
</details>

→ `Bash` — Retry VXUS Vanguard API
```sh
cd [tmp] && sleep 3; python3 vg.py | python3 -c "import json,sys;d=json.load(sys.stdin)['VXUS'];print(d['longName'],d['inception'],d['er'],d['erDate'],d['fundKeys'],d['secYield'],d['monthEnd']['nav'],d['monthEnd']['bench'],d['distFreq'])"
```

→ `WebSearch` Vanguard Total Stock Market ETF VTI switch to Morningstar US Total Market index

<details><summary>result</summary>

```
None None None None {} None None None None
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Vanguard Total Stock Market ETF VTI switch to Morningstar US Total Market index"

Links: [{"title":"workplace.vanguard.com","url":"https://workplace.vanguard.com/iippdf/pdfs/FS970R.pdf"},{"title":"Vanguard Morningstar Total Stock Market ETF","url":"https://roic.ai/company/VTI"},{"title":"vanguard total stock market index fund etf shares share price","url":"https://capital.com/en-int/markets/shares/vanguard-total-stock-market-index-fund-etf-shares-share-price"},{"title":"Vanguard Morningstar U.S. Total Market Shares Index ETF","url":"https://www.vanguardsouthamerica.com/en/product/etf/equity/0970/vanguard-morningstar-total-stock-market-etf"},{"title":"Vanguard Morningstar U.S. Total Market Shares Index ETF","url":"https://www.vanguardsouthamerica.com/en/product/etf/equity/0970/total-stock-market-etf"},{"title":"Vanguard Morningstar U.S. Total Market Shares Index ETF","url":"https://www.vanguardsouthamerica.com/es/producto/etf/renta-variable/0970/vanguard-morningstar-total-stock-market-etf"},{"title":"Etf-VTI-Vanguard Morningstar Total Stock Market ETF","url":"https://www.etoro.com/sv/markets/vti/stats"},{"title":"www.etftrends.com","url":"https://www.etftrends.com/lots-of-stocks-and-a-low-fee-with-this-etf/amp/"},{"title":"This Vanguard Fund Is a One-Stop Shop for All US Stocks","url":"https://www.morningstar.com/funds/this-vanguard-fund-is-one-stop-shop-all-us-stocks"}]

The search turned up consistent information that the switch is happening or
… [1673 more characters]
```
</details>

→ `Bash` — Probe alternative Vanguard API paths for VXUS
```sh
cd [tmp] && for u in vxus/profile 3369/profile VXUS/performance VXUS/characteristic; do echo "== $u"; curl -s -m 20 -A "Mozilla/5.0" "https://investor.vanguard.com/vmf/api/$u" | head -c 300; echo; done
```

<details><summary>result</summary>

```
== vxus/profile
{"fundProfile":{"fundId":"3369","ticker":"VXUS","instrumentId":6491675,"shortName":"Total Intl Stock ETF","longName":"Vanguard Total International Stock ETF","cusip":"921909768","IOVTicker":"VXUS.IV","inceptionDate":"2011-01-26T00:00:00-05:00","newspaperAbbreviation":"VangdTotIntlETF     ","style":"
== 3369/profile
{"fundProfile":{"fundId":"3369","ticker":"VXUS","instrumentId":6491675,"shortName":"Total Intl Stock ETF","longName":"Vanguard Total International Stock ETF","cusip":"921909768","IOVTicker":"VXUS.IV","inceptionDate":"2011-01-26T00:00:00-05:00","newspaperAbbreviation":"VangdTotIntlETF     ","style":"
== VXUS/performance
{"response":"error calling https://irr-investment-retail-rest-external.ecs.us-east-1.retp.c1.vanguard.com/VXUS/performance - <html>\n<head>\n\t<!-- <meta http-equiv=\"refresh\" content=\"0; url=https://investor.vanguard.com/error\" /> -->\n\t<!--WebServer Error Page-->\n\t\t<script src=\"https://sta
== VXUS/characteristic
{"response":"error calling https://irr-investment-retail-rest-external.ecs.us-east-1.retp.c1.vanguard.com/VXUS/characteristic - <html>\n<head>\n\t<!-- <meta http-equiv=\"refresh\" content=\"0; url=https://investor.vanguard.com/error\" /> -->\n\t<!--WebServer Error Page-->\n\t\t<script src=\"https://
```
</details>

→ `Bash` — Fetch VXUS via fund ID
```sh
cd [tmp] && sed -i '' 's/^T=.*/T=["3369"]/' vg.py && python3 vg.py | python3 -c "import json,sys;d=json.load(sys.stdin)['3369'];print(d['longName'],d['inception'],d['er'],d['erDate'],d['fundKeys'],d['secYield'],d['monthEnd']['nav'],d['monthEnd']['bench'],d['distFreq'])"
```

<details><summary>result</summary>

```
Vanguard Total International Stock ETF 2011-01-26T00:00:00-05:00 0.0500 2026-02-27T00:00:00-05:00 {'numberOfBonds': '8793', 'numberOfMoneyMarkets': '8794', 'numberOfStocks': '8790', 'shareClassTotalNetAssets': '$164.9 billion', 'shareClassTotalNetAssetsDate': '2026-08-31T00:00:00-04:00', 'numberOfSecurities': '17583', 'totalNetAssets': '$665.7 billion', 'totalNetAssetsDate': '2026-08-31T00:00:00-04:00', 'asOfDate': '2026-08-31T00:00:00-04:00'} {'hasDisclaimer': False} {'asOfDate': '2026-09-30T00:00:00-04:00', 'id': '3369', 'name': 'Total Intl Stock ETF     ', 'calendarYTDPct': '13.38', 'prevMonthPct': '-2.57', 'threeMonthPct': '-0.52', 'oneYrPct': '18.49', 'threeYrPct': '20.15', 'fiveYrPct': '9.35', 'tenYrPct': '9.20', 'sinceInceptionPct': '6.53', 'isLastMonthEndPerformanceDataAvailable': False} Spl Total International Stock Index                Quarterly
```
</details>

→ `Bash` — Fetch iShares IVV page and extract key fields
```sh
cd [tmp] && mkdir -p ish && curl -s -m 30 -L -A "Mozilla/5.0 (Macintosh)" "https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf" -o ish/ivv.html; wc -c ish/ivv.html; python3 - <<'EOF'
import re,html
s=open('ish/ivv.html',encoding='utf-8',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S)
t=html.unescape(re.sub(r'<[^>]+>',' ',t)); t=re.sub(r'\s+',' ',t)
for kw in ['Net Assets of Fund','Net Assets of Share Class','Expense Ratio','Number of Holdings','30 Day SEC Yield','12m Trailing Yield','Distribution Frequency','Inception Date','Exchange','Benchmark Index','Average Annual','1y 3y 5y 10y']:
    for m in re.finditer(re.escape(kw),t):
        print(kw,'=>',t[m.start():m.start()+220]); break
EOF
```

<details><summary>result</summary>

```
 2981608 ish/ivv.html
Net Assets of Fund => Net Assets of Fund $896,439,871,787 as of Oct 09, 2026 Closing Price $781.97 as of Oct 09, 2026 Daily Volume 3,080,452.00 as of Oct 09, 2026 Exchange NYSE Arca Benchmark Index S&P 500 Index Shares Outstanding 1,146,500,0
Expense Ratio => Expense Ratio: Fees as stated in the prospectus 0.03% Morningstar Rating 4 stars Morningstar Medalist Rating NAV as of Oct 09, 2026 $ $ 781.89 52 WK: 634.80 - 782.52 1 Day NAV Change as of Oct 09, 2026 Increase $ $ 4.71
Number of Holdings => Number of Holdings 504 as of Oct 08, 2026 30 Day SEC Yield 0.94% as of Aug 31, 2026 12m Trailing Yield 1.06% as of Aug 31, 2026 Standard Deviation (3y) 12.94% as of Aug 31, 2026 P/B Ratio 5.70 as of Oct 08, 2026 Equity B
30 Day SEC Yield => 30 Day SEC Yield as of Aug 31, 2026 0.94% 12m Trailing Yield as of Aug 31, 2026 1.06% Expense Ratio: Fees as stated in the prospectus 0.03% Morningstar Rating 4 stars Morningstar Medalist Rating NAV as of Oct 09, 2026 $
12m Trailing Yield => 12m Trailing Yield as of Aug 31, 2026 1.06% Expense Ratio: Fees as stated in the prospectus 0.03% Morningstar Rating 4 stars Morningstar Medalist Rating NAV as of Oct 09, 2026 $ $ 781.89 52 WK: 634.80 - 782.52 1 Day NAV
Distribution Frequency => Distribution Frequency Quarterly CUSIP 464287200 30 Day Avg. Volume 8,301,147.00 as of Oct 09, 2026 Portfolio Characteristics Number of Holdings 504 as of Oct 08, 2026 30 Day SEC Yield 0.94% as of Aug 31, 2026 12m Traili
Exchange => Exchange NY
… [924 more characters]
```
</details>

→ `Bash` — Fetch iShares AGG and IWM pages
```sh
cd [tmp] && cat > ish.py <<'EOF'
import re,html,subprocess,sys
for name,url in [(a.split('=')[0],a.split('=',1)[1]) for a in sys.argv[1:]]:
    subprocess.run(["curl","-s","-m","40","-L","-A","Mozilla/5.0 (Macintosh)",url,"-o",f"ish/{name}.html"])
    s=open(f'ish/{name}.html',encoding='utf-8',errors='ignore').read()
    t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S)
    t=html.unescape(re.sub(r'<[^>]+>',' ',t)); t=re.sub(r'\s+',' ',t)
    print('#####',name,url)
    for kw in ['Net Assets of Fund','Fees as stated','Number of Holdings','30 Day SEC Yield','12m Trailing Yield','Distribution Frequency','Fund Inception','Exchange','Benchmark Index','1y 3y 5y 10y','Average Annual']:
        m=re.search(re.escape(kw),t)
        if m: print(kw,'=>',t[m.start():m.start()+230])
EOF
python3 ish.py "agg=https://www.ishares.com/us/products/239458/ishares-core-total-us-bond-market-etf" "iwm=https://www.ishares.com/us/products/239710/ishares-russell-2000-etf"
```

<details><summary>result</summary>

```
##### agg https://www.ishares.com/us/products/239458/ishares-core-total-us-bond-market-etf
Net Assets of Fund => Net Assets of Fund $137,104,891,172 as of Oct 09, 2026 Closing Price $94.59 as of Oct 09, 2026 Daily Volume 10,045,527.00 as of Oct 09, 2026 Exchange NYSE Arca Benchmark Index Bloomberg US Aggregate Bond Index Shares Outstanding 1
Fees as stated => Fees as stated in the prospectus 0.03% Morningstar Rating 3 stars Morningstar Medalist Rating NAV as of Oct 09, 2026 $ $ 94.57 52 WK: 94.09 - 101.37 1 Day NAV Change as of Oct 09, 2026 Decrease $ $ -0.03 ( -0.03 %) NAV Total Retur
Number of Holdings => Number of Holdings 13,400 as of Oct 08, 2026 30 Day SEC Yield 5.10% as of Oct 08, 2026 12m Trailing Yield 4.19% as of Oct 08, 2026 Standard Deviation (3y) 5.56% as of Aug 31, 2026 Weighted Avg Coupon 3.81 as of Oct 08, 2026 Effect
30 Day SEC Yield => 30 Day SEC Yield as of Oct 08, 2026 5.10% 12m Trailing Yield as of Oct 08, 2026 4.19% Expense Ratio: Fees as stated in the prospectus 0.03% Morningstar Rating 3 stars Morningstar Medalist Rating NAV as of Oct 09, 2026 $ $ 94.57 52
12m Trailing Yield => 12m Trailing Yield as of Oct 08, 2026 4.19% Expense Ratio: Fees as stated in the prospectus 0.03% Morningstar Rating 3 stars Morningstar Medalist Rating NAV as of Oct 09, 2026 $ $ 94.57 52 WK: 94.09 - 101.37 1 Day NAV Change as of
Distribution Frequency => Distribution Frequency Monthly CUSIP 464287226 30 Day Avg. Volume 12,644,430.00 as of Oct 09, 2026 iShares ETFs with Prelimi
… [4176 more characters]
```
</details>

→ `Bash` — Fetch SSGA SPY page and extract fields
```sh
cd [tmp] && mkdir -p ss && curl -s -m 40 -L -A "Mozilla/5.0 (Macintosh)" "https://www.ssga.com/us/en/intermediary/etfs/spdr-sp-500-etf-trust-spy" -o ss/spy.html; wc -c ss/spy.html; python3 - <<'EOF'
import re,html
s=open('ss/spy.html',encoding='utf-8',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S)
t=html.unescape(re.sub(r'<[^>]+>',' ',t)); t=re.sub(r'\s+',' ',t)
open('ss/spy.txt','w').write(t)
for kw in ['Gross Expense Ratio','Assets Under Management','Number of Holdings','30 Day SEC Yield','Distribution Frequency','Inception Date','Primary Exchange','Exchange','Benchmark','1 Year','Annualized']:
    for m in list(re.finditer(re.escape(kw),t))[:2]:
        print(kw,'=>',t[m.start():m.start()+250])
EOF
```

<details><summary>result</summary>

```
  237322 ss/spy.html
Gross Expense Ratio => Gross Expense Ratio</strong></p><p>The fund's total annual operating expense ratio. It is gross of any fee waivers or expense reimbursements. It can be found in the fund's most recent prospectus.</p>","originalValue":"0.0945"},"nav":{"label":"NAV","v
Gross Expense Ratio => Gross Expense Ratio ﻿Gross Expense Ratio The fund's total annual operating expense ratio. It is gross of any fee waivers or expense reimbursements. It can be found in the fund's most recent prospectus. 0.0945% Overall Morningstar Rating as of Sep 30
Assets Under Management => Assets Under Management","value":"$817,200.17 M","asOfDate":"as of Oct 08 2026","asOfDateSimple":"Oct 08 2026","originalValue":"817200168620.38"},"listing-date":{"label":"Listing Date","value":"Jan 22 1993","originalValue":"22-Jan-1993"},"nav-date":{
Assets Under Management => Assets Under Management $817,200.17 M as of Oct 08 2026 Gross Expense Ratio ﻿Gross Expense Ratio The fund's total annual operating expense ratio. It is gross of any fee waivers or expense reimbursements. It can be found in the fund's most recent pros
Number of Holdings => Number of Holdings 504 Price/Book Ratio ﻿Price/Book Ratio The weighted harmonic average of closing market price divided by the most recent reported book value for each security in the fund's portfolio as calculated for the last twelve months. 5.39 Pr
Number of Holdings => Number of Holdings 503 Price/Cash Flow 18.50 Price/Earnings 24.98 Price/Earnings
… [3103 more characters]
```
</details>

→ `Bash` — Extract SPY yield dates and fetch GLD page
```sh
cd [tmp] && grep -o 'Yields as of[^%]*%' ss/spy.txt | head -2; grep -o 'Fund Characteristics as of .\{0,40\}' ss/spy.txt|head -2; grep -o 'Distribution Yield.\{0,120\}' ss/spy.txt | head -1
curl -s -m 40 -L -A "Mozilla/5.0 (Macintosh)" "https://www.ssga.com/us/en/intermediary/etfs/spdr-gold-shares-gld" -o ss/gld.html; wc -c ss/gld.html; python3 - <<'EOF'
import re,html
s=open('ss/gld.html',encoding='utf-8',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S)
t=html.unescape(re.sub(r'<[^>]+>',' ',t)); t=re.sub(r'\s+',' ',t)
open('ss/gld.txt','w').write(t)
for kw in ['Expense Ratio','Assets Under Management','Net Asset','Inception Date','Exchange','Benchmark','1 Year','Tonnes','Ounces']:
    for m in list(re.finditer(re.escape(kw),t))[:2]:
        print(kw,'=>',t[m.start():m.start()+250])
EOF
```

<details><summary>result</summary>

```
Yields as of Oct 08 2026 30 Day SEC Yield ﻿30 Day SEC Yield (Also known as Standardized Yield) An annualized yield that is calculated by dividing the net investment income earned by the fund over the most recent 30-day period by the maximum offering price on the last day of the period. 0.95%
Fund Characteristics as of Oct 08 2026 Est. 3-5 Year EPS Growth ﻿Es
Distribution Yield Fund Distribution Yield The sum of the distributions within the past 365 days divided by Net Asset Value per share, exp
  182822 ss/gld.html
Expense Ratio => Expense Ratio</strong></p><p>The fund's total annual operating expense ratio. It is gross of any fee waivers or expense reimbursements. It can be found in the fund's most recent prospectus.</p>","originalValue":"0.4"},"nav":{"label":"NAV","value":"$3
Expense Ratio => Expense Ratio ﻿Gross Expense Ratio The fund's total annual operating expense ratio. It is gross of any fee waivers or expense reimbursements. It can be found in the fund's most recent prospectus. 0.40% Quick Links Monthly Gold Monitor pdf Fed tighten
Assets Under Management => Assets Under Management","value":"$141,682.53 M","asOfDate":"as of Oct 09 2026","asOfDateSimple":"Oct 09 2026","originalValue":"141682530606.86"},"listing-date":{"label":"Listing Date","value":"Nov 18 2004","originalValue":"18-Nov-2004"},"nav-date":{
Assets Under Management => Assets Under Management $141,682.53 M as of Oct 09 2026 Gross Expense Ratio ﻿Gross Expense Ratio The fund's total annual operating expense
… [2754 more characters]
```
</details>

→ `Bash` — Fetch Schwab SCHD page
```sh
cd [tmp] && mkdir -p sw && curl -s -m 40 -L -A "Mozilla/5.0 (Macintosh)" "https://www.schwabassetmanagement.com/products/schd" -o sw/schd.html; wc -c sw/schd.html; python3 - <<'EOF'
import re,html
s=open('sw/schd.html',encoding='utf-8',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S)
t=html.unescape(re.sub(r'<[^>]+>',' ',t)); t=re.sub(r'\s+',' ',t)
open('sw/schd.txt','w').write(t)
for kw in ['Expense Ratio','Net Assets','Number of Holdings','SEC Yield','Distribution','Inception','Exchange','Index','1 Year','Since Inception']:
    for m in list(re.finditer(re.escape(kw),t))[:2]:
        print(kw,'=>',t[m.start():m.start()+250])
EOF
```

<details><summary>result</summary>

```
     400 sw/schd.html
```
</details>

→ `Bash` — Inspect Schwab response and retry with browser headers
```sh
cd [tmp] && cat sw/schd.html; echo; curl -s -m 40 -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36" -H "Accept: text/html" -H "Accept-Language: en-US" "https://www.schwabassetmanagement.com/products/schd" -o sw/schd2.html -w "%{http_code}\n"; wc -c sw/schd2.html
```

<details><summary>result</summary>

```
<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>

You don't have permission to access "http&#58;&#47;&#47;www&#46;schwabassetmanagement&#46;com&#47;products&#47;schd" on this server.<P>
Reference&#32;&#35;18&#46;3f0dd717&#46;1791673904&#46;18dc979c
<P>https&#58;&#47;&#47;errors&#46;edgesuite&#46;net&#47;18&#46;3f0dd717&#46;1791673904&#46;18dc979c</P>
</BODY>
</HTML>

403
     400 sw/schd2.html
```
</details>

→ `WebFetch` https://www.schwabassetmanagement.com/products/schd

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

→ `WebSearch` Schwab U.S. Dividend Equity ETF SCHD fact sheet average annual total returns NAV 2026

<details><summary>result</summary>

```
Web search results for query: "Schwab U.S. Dividend Equity ETF SCHD fact sheet average annual total returns NAV 2026"

Links: [{"title":"Schwab U.S. Dividend Equity ETF","url":"https://www.schwabassetmanagement.com/products/schd?page=1"},{"title":"Schwab U.S. Dividend Equity ETF","url":"https://www.schwabassetmanagement.com/products/schd?page=0"},{"title":"Schwab U.S. Dividend Equity ETF","url":"https://www.schwabassetmanagement.com/products/SCHD"},{"title":"Schwab U.S. Dividend Equity ETF","url":"https://www.schwabassetmanagement.com/products/schd"},{"title":"NON-VANGUARD FUNDS","url":"https://investor.vanguard.com/investment-products/etfs/profile/schd"},{"title":"SCHD returns by year","url":"https://chartrow.com/quote/schd/returns"},{"title":"www.stockrover.com","url":"https://www.stockrover.com/report/SCHD.pdf"},{"title":"AAII ETF Evaluator","url":"https://www.aaii.com/etf/ticker/SCHD"},{"title":"Markets SCHD","url":"https://www.nasdaq.com/articles/where-will-schd-be-2035"}]

The most recent Schwab fact sheet in the results is dated July 31, 2026. It shows SCHD's NAV returns as of that date, with the 1-year figure at about 30.9% and the 10-year at about 12.7%. The average annual figures are listed separately, with NAV at 24.08% for 1 year, 13.52% for 3 years, 8.51% for 5 years, 12.37% for 10 years, and 13.09% since inception. Those average figures appear to be from an earlier period, since the same page's average annual table is not dated the way the cumulative table is.


… [723 more characters]
```
</details>

→ `ToolSearch`

<details><summary>result</summary>

```

```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.schwabassetmanagement.com/products/schd');
```
### Page
- Page URL: https://www.schwabassetmanagement.com/products/schd
- Page Title: SCHD | Schwab U.S. Dividend Equity ETF | Schwab Asset Management
- Console: 0 errors, 1 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-12-03-470Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-12-00-448Z.log#L1-L2
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
{}
### Ran Playwright code
```js
await page.evaluate('() => { const t = document.body.innerText.replace(/\\s+/g,\' \'); const out={}; for (const kw of [\'Expense Ratio\',\'Total Net Assets\',\'Fund Net Assets\',\'Number of Holdings\',\'SEC Yield\',\'Distribution Frequency\',\'Inception\',\'Exchange\',\'Index\',\'Average Annual\',\'1 Year\',\'Since Inception\',\'Total Return\']) { const i=t.indexOf(kw); if(i>=0) out[kw]=t.slice(i,i+350);} return out; }');
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=XTB&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-12-04-880Z.log#L1-L9
```
</details>

→ `Bash` — Check whether Vanguard API covers SCHD
```sh
cd [tmp] && for ep in profile performance; do curl -s -m 20 -A "Mozilla/5.0" "https://investor.vanguard.com/vmf/api/SCHD/$ep" | head -c 600; echo; done
```

<details><summary>result</summary>

```
{"fundProfile":{"fundId":"X943","ticker":"SCHD","instrumentId":7594094,"shortName":"Schwab U.S. Dividend Equity ETF","longName":"Schwab U.S. Dividend Equity ETF","cusip":"808524797","inceptionDate":"2011-10-20T00:00:00-04:00","style":"Stock","type":"Domestic Stock","category":"Large Value","customizedStyle":"Stock - Domestic Stock","equityInvestmentStyleId":"1          ","expenseRatio":"0.0600","expenseRatioAsOfDate":"2025-12-22T00:00:00-05:00","isInternalFund":false,"isExternalFund":true,"isMutualFund":false,"isETF":true,"isVLIP":false,"isVVAP":false,"is529":false,"hasAssociatedInvestorFund":
{"YTD":{},"recentInvestmentRtn":{"asOfDate":"2026-09-30T00:00:00-04:00","shortName":"Schwab U.S. Dividend Equity ETF         ","benchmarkShortName":"S&P 500 (TR) (1970)                               ","fundReturn":{"asOfDate":"2026-09-30T00:00:00-04:00","id":"X943","name":"Schwab U.S. Dividend Equity ETF         ","calendarYTDPct":"21.46","prevMonthPct":"-5.99","threeMonthPct":"3.41","oneYrPct":"23.36","threeYrPct":"15.44","fiveYrPct":"9.48","tenYrPct":"12.44","isLastMonthEndPerformanceDataAvailable":false},"marketPriceFundReturn":{"asOfDate":"2026-09-30T00:00:00-04:00","id":"X943","name":"Sch
```
</details>

→ `Bash` — Fetch SCHD data from Vanguard API
```sh
cd [tmp] && curl -s -m 20 -A "Mozilla/5.0" "https://investor.vanguard.com/vmf/api/SCHD/performance" > vg/SCHD_performance.json; python3 -c "
import json;d=json.load(open('vg/SCHD_performance.json'));me=d.get('monthEndAvgAnnualRtn',{});print(me.get('asOfDate'),me.get('fundReturn'));print(me.get('benchmarkReturn',{}).get('name'))"; for ep in characteristic price distribution; do curl -s -m 20 -A "Mozilla/5.0" "https://investor.vanguard.com/vmf/api/SCHD/$ep" | head -c 700; echo; done
```

<details><summary>result</summary>

```
2026-09-30T00:00:00-04:00 {'asOfDate': '2026-09-30T00:00:00-04:00', 'id': 'X943', 'name': 'Schwab U.S. Dividend Equity ETF         ', 'calendarYTDPct': '21.46', 'prevMonthPct': '-5.99', 'threeMonthPct': '3.41', 'oneYrPct': '23.36', 'threeYrPct': '15.44', 'fiveYrPct': '9.48', 'tenYrPct': '12.44', 'sinceInceptionPct': '13.11', 'isLastMonthEndPerformanceDataAvailable': False}
S&P 500 (TR) (1970)
{"moneyMarketCharacteristic":{},"fundCharacteristic":{},"fixedIncomeCharacteristic":{},"equityCharacteristic":{"asOfDate":"2026-08-29T00:00:00-04:00","shortName":"Schwab U.S. Dividend Equity ETF         ","fund":{"earningsGrowthRate":"-1.5","earningsGrowthRateDate":"2026-08-29T00:00:00-04:00","medianMarketCap":"$117.9 billion","medianMarketCapDate":"2026-08-29T00:00:00-04:00","numberOfStocks":"99","numberOfStocksDate":"2026-08-29T00:00:00-04:00","foreignHolding":"0.3","foreignHoldingDate":"2026-08-29T00:00:00-04:00","priceBookRatio":"3.7x","priceBookRatioDate":"2026-08-29T00:00:00-04:00","priceEarningsRatio":"19.3x","priceEarningsRatioDate":"2026-08-29T00:00:00-04:00","returnOnEquity":"31.0"
{"currentPrice":{"yield":{"hasDisclaimer":false},"dailyPrice":{"regular":{"asOfDate":"2026-10-09T00:00:00-04:00","price":"33.04","priceChangeAmount":"-0.11","priceChangePct":"-0.33","currOrPrmlFlag":" "},"market":{"asOfDate":"2026-10-09T00:00:00-04:00","currOrPrmlFlag":" "}},"highLow":{}},"historicalPrice":{"isMultiYears":false,"nav":[{"item":[{}]}],"marketPrice":[{"ite
… [80 more characters]
```
</details>

→ `Bash` — Look for exchange fields in Vanguard profiles
```sh
cd [tmp] && for t in VOO VTI VT 3369 VYM BND VNQ VEA VWO; do echo -n "$t: "; grep -o -i '"[a-z]*exchange[a-z]*":"[^"]*"' vg/${t}_profile.json | tr '\n' ' '; echo; done
```

<details><summary>result</summary>

```
VOO:
VTI:
VT:
3369:
VYM:
BND:
VNQ:
VEA:
VWO:
```
</details>

→ `WebSearch` Vanguard BND VXUS listed Nasdaq exchange listing transfer

<details><summary>result</summary>

```
Web search results for query: "Vanguard BND VXUS listed Nasdaq exchange listing transfer"

Links: [{"title":"VANGUARD BOND INDEX FUNDS - Form 497 - FY2018","url":"https://www.sec.gov/Archives/edgar/data/0000794105/000093247118006371/ps984072018.htm"},{"title":"VANGUARD BOND INDEX FUNDS - Form 497 - FY2018","url":"https://www.sec.gov/Archives/edgar/data/0000794105/000093247118006555/ps984072018.htm"},{"title":"Vanguard Natural Resources, LLC - Form 8-K - FY2013","url":"https://www.sec.gov/Archives/edgar/data/0001384072/000138407213000026/ex991vnrnasdaqannouncement.htm"},{"title":"Vanguard To Transfer Exchange Listing Of Total Bond Market ETF To Nasdaq","url":"https://etfgi.com/node/19183"},{"title":"www.etftrends.com","url":"https://www.etftrends.com/?p=236241"},{"title":"vanguard to transfer exchange listing of total bond market etf to nasdaq bnd","url":"https://mutualfundobserver.com/discuss/discussion/41841/vanguard-to-transfer-exchange-listing-of-total-bond-market-etf-to-nasdaq-bnd"},{"title":"vanguard to transfer 36bn total bond market etf to nasdaq 10388","url":"https://www.etfstrategy.com/vanguard-to-transfer-36bn-total-bond-market-etf-to-nasdaq-10388/"},{"title":"News release","url":"https://corpaemdisp.essp.c1.vanguard.com/content/corporatesite/us/en/corp/who-we-are/pressroom/Press-Release-Vanguard-To-Transfer-BND-To-Nasdaq-Exchange-062018.html"},{"title":"Vanguard to Ring the NASDAQ Stock Market Closing Bell","url":"https://www.nbcnews.com/news/amp/wbna41310741"},{"t
… [1073 more characters]
```
</details>

→ `WebSearch` PRIIPs KID americké ETF nelze koupit retail klient Česko broker

→ `WebSearch` Interactive Brokers US ETF PRIIPs KID EU retail clients restriction professional client options exercise

<details><summary>result</summary>

```
Web search results for query: "Interactive Brokers US ETF PRIIPs KID EU retail clients restriction professional client options exercise"

Links: [{"title":"PRIIPs Regulation","url":"https://ibkb.interactivebrokers.com/es/node/2993"},{"title":"Informazioni in regime di MiFIR richieste ai titolari di conto non aventi obblighi di segnalazione","url":"https://ibkb.interactivebrokers.com/it/tag/regulatory-agencies?page=4"},{"title":"PRIIPs Regulation","url":"https://ibkb.interactivebrokers.com/de/node/2993"},{"title":"Aperçu sur le PRIIP","url":"https://ibkb.interactivebrokers.com/fr/tag/rejection-messages"},{"title":"Erforderliche MiFIR-Informationen von Kontoinhabern, die keiner Berichtspflicht unterliegen","url":"https://ibkb.interactivebrokers.com/de/tag/regulatory-agencies?page=4"},{"title":"www.quantconnect.com","url":"https://www.quantconnect.com/forum/discussion/4153"},{"title":"INTRODUCTION","url":"https://ibkb.interactivebrokers.com/ru/tag/regulatory-agencies?page=3"},{"title":"uk retail investors","url":"https://www.quantconnect.com/forum/discussion/4153/uk-retail-investors/"},{"title":"ibkb.interactivebrokers.com","url":"https://ibkb.interactivebrokers.com/node/2993"},{"title":"PRIIPs Overview","url":"https://ibkb.interactivebrokers.com/de/node/3324"}]

The search turned up Interactive Brokers' own knowledge base on this, plus one user forum thread. Nothing in the results addresses options exercise for professional clients directly.

**The core rule:** IBKR's kno
… [1320 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "PRIIPs KID americké ETF nelze koupit retail klient Česko broker"

Links: [{"title":"application priips regulation what happens us packaged products subscribed regulation came force","url":"https://www.amf-france.org/en/amf-ombudsman/ombudsman-online-diary/latest/application-priips-regulation-what-happens-us-packaged-products-subscribed-regulation-came-force"},{"title":"PRIIPs Overview","url":"https://ibkb.interactivebrokers.com/de/node/3324"},{"title":"US-domiciled ETFs: why they are no longer available from many online brokers","url":"https://www.justetf.com/uk/news/etf/us-domiciled-etfs.html"},{"title":"US-domiciled ETFs: why they are no longer available from many online brokers","url":"https://www.justetf.com/nl/news/etf/us-domiciled-etfs.html"},{"title":"US-domiciled ETFs: why they are no longer available from many online brokers","url":"https://www.justetf.com/ch-en/news/etf/us-domiciled-etfs.html"},{"title":"US-domiciled ETFs: why they are no longer available from many online brokers","url":"https://www.justetf.com/en/news/etf/us-domiciled-etfs.html"},{"title":"Jak obejít znemožnění obchodování amerických ETFek – 1. část","url":"https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-1-cast"},{"title":"www.structuredretailproducts.com","url":"https://www.structuredretailproducts.com/news/details/24439"},{"title":"starting 1 january 2023 retail investors can no longer purchase investment fund units and etfs if","url":"ht
… [2788 more characters]
```
</details>

→ `WebFetch` https://ibkb.interactivebrokers.com/node/3324

<details><summary>result</summary>

```
REDIRECT DETECTED: The URL redirects to a location that was not fetched automatically.

    Original URL: https://ibkb.interactivebrokers.com/node/3324
    Redirect URL (from the server's Location header — server-supplied, not verified): https://www.ibkr.info/node/3324
    Status: 301 Moved Permanently

    To complete your request, I need to fetch content from the redirected URL. Please use WebFetch again with these parameters:
    - url: "https://www.ibkr.info/node/3324"
    - prompt: "Quote verbatim the key statements about: US ETFs not having KIDs, restriction for EEA/UK retail clients, alternatives (European equivalents, CFDs, professional classification), whether existing positions can be held/sold, and anything about options exercise/assignment. Also any date shown on the page."
```
</details>

→ `WebFetch` https://www.justetf.com/en/news/etf/us-domiciled-etfs.html

<details><summary>result</summary>

```
**Article date:** 28 March 2018, by Dominique Riedl.

**Why US-domiciled ETFs are unavailable (PRIIPs/KID)**
- The article blames PRIIPs, EU rules requiring a Key Information Document (KID): "PRIIPs require fund providers (including ETFs) to produce a Key Information Document (KID)".
- The rules took effect at the start of 2018: "PRIIPs came into force alongside the MiFID II rules at the beginning of 2018."
- US-domiciled ETFs did not comply. Existing holders can keep or sell, but "you won’t be able to buy more" until a compliant KID exists.

**Exceptions**
- Professional or sophisticated investors: "A potential exception exists if your platform allows so-called sophisticated investors to buy US-domiciled ETFs." The broker must judge eligibility, and some investors may need a portfolio over £500,000.
- Options: The article does not mention options.

**Tax**
- Disadvantage: "UK investors are automatically hit by a 30% withholding tax on dividends and interest paid by US-domiciled ETFs."
- Mitigation: Filing a W8-BEN form can reduce this to 15%, and the remaining amount can be offset against UK dividend tax.
- Wrappers: ISAs are generally barred from holding them. Some SIPPs are withholding-tax-free only if the broker has a US exemption.
- Capital gains: Many US ETFs are non-reporting funds, so gains are taxed at income tax rates. The article notes that "European-domiciled ETFS usually have reporting fund status."
- Advantage: The article concedes that some US ETFs have slightl
… [132 more characters]
```
</details>

→ `WebFetch` https://www.ibkr.info/node/3324

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

→ `WebSearch` Interactive Brokers PRIIPs KID "exercise" option US ETF retail EEA allowed obtain shares

<details><summary>result</summary>

```
Web search results for query: "Interactive Brokers PRIIPs KID "exercise" option US ETF retail EEA allowed obtain shares"

Links: [{"title":"PRIIPs Overview","url":"https://ibkb.interactivebrokers.com/de/node/3324"},{"title":"ibkb.interactivebrokers.com","url":"https://ibkb.interactivebrokers.com/node/2993"},{"title":"Erforderliche MiFIR-Informationen von Kontoinhabern, die keiner Berichtspflicht unterliegen","url":"https://ibkb.interactivebrokers.com/de/tag/regulatory-agencies?page=4"},{"title":"Search PRIIPs","url":"https://inter-il.com/wp-content/uploads/2024/08/Search-PRIIPs.pdf"},{"title":"Informazioni in regime di MiFIR richieste ai titolari di conto non aventi obblighi di segnalazione","url":"https://ibkb.interactivebrokers.com/it/tag/regulatory-agencies?page=4"},{"title":"PRIIPs Regulation","url":"https://ibkb.interactivebrokers.com/es/node/2993"},{"title":"Aperçu sur le PRIIP","url":"https://ibkb.interactivebrokers.com/fr/tag/rejection-messages"},{"title":"PRIIPs Regulation","url":"https://ibkb.interactivebrokers.com/de/node/2993"},{"title":"By Kestutis Balciunas · Last reviewed 23 June 2026 · 11-year EU ETF investor","url":"https://financialexpertclass.com/?p=746"}]

The search didn't turn up any IBKR source that confirms exercising options to acquire US ETF shares is permitted for EEA retail clients.

**What IBKR's official knowledge base says:** U.S. clients are not impacted by PRIIPs, so the issuers of U.S. listed ETFs do not as a rule create KIDs. IBKR lists thre
… [1125 more characters]
```
</details>

→ `WebFetch` https://ibkb.interactivebrokers.com/de/node/3324

<details><summary>result</summary>

```
REDIRECT DETECTED: The URL redirects to a location that was not fetched automatically.

    Original URL: https://ibkb.interactivebrokers.com/de/node/3324
    Redirect URL (from the server's Location header — server-supplied, not verified): https://www.ibkr.info/de/node/3324
    Status: 301 Moved Permanently

    To complete your request, I need to fetch content from the redirected URL. Please use WebFetch again with these parameters:
    - url: "https://www.ibkr.info/de/node/3324"
    - prompt: "Quote verbatim (in original language) the statements about US ETFs and KIDs, retail EEA clients, alternatives (European equivalents, CFDs, professional classification), default retail classification. Give any date on the page."
```
</details>

→ `Bash` — Fetch IBKR PRIIPs overview via curl
```sh
cd [tmp] && curl -s -m 30 -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/130 Safari/537.36" "https://www.ibkr.info/node/3324" -o ibkr3324.html -w "%{http_code}\n"; python3 -c "
import re,html
s=open('ibkr3324.html',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S);t=html.unescape(re.sub(r'<[^>]+>',' ',t));t=re.sub(r'\s+',' ',t)
i=t.find('PRIIP');print(t[i:i+3500])"
```

<details><summary>result</summary>

```
200
```
</details>

→ `Bash` — Inspect IBKR page content
```sh
cd [tmp] && wc -c ibkr3324.html; head -c 1500 ibkr3324.html
```

<details><summary>result</summary>

```
  176710 ibkr3324.html
<!DOCTYPE html>
<html dir="ltr" lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<title>Search | Interactive Brokers LLC</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
<meta name="description" content="Interactive Brokers Search">
<meta name="keywords" content="search">
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta http-equiv="expires" content="-1">
<meta name="robots" content="index, follow">
<meta http-equiv="pragma" content="no-cache">
<meta property="og:site_name" content="Interactive Brokers LLC" />
<!--Pid:53144-->
<link rel="canonical" href="https://www.interactivebrokers.com/en/search/index.php"/>
<meta name="apple-mobile-web-app-title" content="IBKR">
<link rel="icon" sizes="192x192" href="/images/web/favicons/home-screen-icon-192x192.png" />
<link rel="icon" sizes="128x128" href="/images/web/favicons/home-screen-icon-128x128.png" />
<link rel="apple-touch-icon" sizes="57x57" href="/images/web/favicons/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="72x72" href="/images/web/favicons/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/images/web/favicons/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="144x144" href="/images/web/favicons/apple-touch-icon-144x144.png" />
<!-- SCRIPTS HEAD  -->
<script type="text/javascript">
const FP_PAGE_ID = '53144';
</script>

<script type="text/javascript" src='/scrip
… [23 more characters]
```
</details>

→ `WebFetch` https://www.interactivebrokers.com/en/trading/priips-kid.php

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

→ `WebFetch` https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-1-cast

<details><summary>result</summary>

```
**Summary: FinHacker.cz, "Jak obejít znemožnění obchodování amerických ETFek – 1. část" (published 13 August 2020)**

**Which brokers block US ETFs:** The article does not name Czech brokers that block them. It attributes the block to the EU PRIIPs KID regulation, which took effect in early 2018. The author quotes a broker's rejection message: "This product is unavailable to clients classified as retail clients." It also says the restriction applies broadly to retail accounts: "Když chcete zobchodovat jakékoliv americké ETFko, zobrazí se vám následující hláška." The article covers only the first three of seven workarounds.

**Workarounds covered in Part 1:**
1. **US broker:** Opening an account with a US broker avoids the rule, but most won't accept non-US residents. The author suggests TradeStation and Tastyworks, and says Interactive Brokers assigns EU residents to its Irish subsidiary.
2. **Changing MiFID category:** Reclassifying from retail to professional at Interactive Brokers. The author describes this in detail.
3. **Index futures:** EU residents can trade S&P 500, Nasdaq 100 and Dow futures (ES, NQ, YM) and their micro versions (MES, MNQ, MYM).

**Options and CFDs:** The article says options-based methods will appear in the final part of the series, so they are not explained here. CFDs are not presented as a workaround. They appear only in the risk disclaimer.

**Professional client criteria under MiFID II (as applied by Interactive Brokers):** A client must meet tw
… [1059 more characters]
```
</details>

→ `WebFetch` https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014L0065

→ `WebFetch` https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R1286

<details><summary>result</summary>

```
The web page content you provided is empty (it contains only separator lines), so I can't find Annex II, section II.1, or quote its criteria.

If you paste the text of Annex II, or the relevant section of the document, I can quote the three criteria and the "at least two" requirement from it.
```
</details>

<details><summary>result</summary>

```
The web page content you provided is empty; it contains only divider lines. I can't quote Article 13(1), Article 5(1), Article 4, or the date of application in Article 34 without the source text.

If you paste the relevant text, I'll provide the requested quotes, keeping each one under 125 characters and marking exact language in quotation marks.
```
</details>

→ `Bash` — Download MiFID II and PRIIPs texts from EUR-Lex
```sh
cd [tmp] && mkdir -p eu && for c in 32014L0065 32014R1286; do curl -s -m 60 -L -A "Mozilla/5.0 (Macintosh)" "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:$c" -o eu/$c.html -w "$c %{http_code}\n"; done; python3 - <<'EOF'
import re,html
def txt(f):
    s=open(f,errors='ignore').read();t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S);t=html.unescape(re.sub(r'<[^>]+>',' ',t));return re.sub(r'\s+',' ',t)
a=txt('eu/32014L0065.html'); print(len(a))
i=a.find('1. Identification criteria'); print(a[i:i+1500])
b=txt('eu/32014R1286.html'); print(len(b))
for kw in ["‘retail investor’ means","Article 5 1.","Article 13 1.","It shall apply from"]:
    j=b.find(kw); print('---',kw, b[j:j+700] if j>=0 else 'NOTFOUND')
EOF
```

<details><summary>result</summary>

```
32014L0065 202
32014R1286 202
0

0
--- ‘retail investor’ means NOTFOUND
--- Article 5 1. NOTFOUND
--- Article 13 1. NOTFOUND
--- It shall apply from NOTFOUND
```
</details>

→ `WebSearch` MiFID II Annex II "at an average frequency of 10 per quarter over the previous four quarters" "EUR 500 000"

→ `WebSearch` PRIIPs regulation 1286/2014 applies from 1 January 2018 UCITS exemption ended 31 December 2022 KID

<details><summary>result</summary>

```
Web search results for query: "MiFID II Annex II "at an average frequency of 10 per quarter over the previous four quarters" "EUR 500 000""

Links: [{"title":"beeba454 b0d4 4c5f 8ec5 de421635bc21","url":"https://www.athexgroup.gr/documents/10180/7213868/AAPA_AnnexIIRCB2021_v1.pdf/beeba454-b0d4-4c5f-8ec5-de421635bc21"},{"title":"www.esma.europa.eu","url":"https://www.esma.europa.eu/publications-data/questions-answers/1851"},{"title":"www.esma.europa.eu","url":"https://www.esma.europa.eu/print/pdf/node/204229"},{"title":"EURONEXT ATHENS","url":"https://athens.euronext.com/en/about/regulatory/mifid-reports"},{"title":"EURONEXT ATHENS","url":"https://athens.euronext.com/en/about/regulatory/mifid-reports?page=21"},{"title":"ESMA publishes MiFID II/MiFIR Annual Review Report on RTS 2","url":"https://centralbank.ie/regulation/markets-update/article/markets-update-issue-11-2021/european-securities-and-markets-authority-(esma)/esma-publishes-mifid-ii-mifir-annual-review-report-on-rts-2"},{"title":"mifid reports","url":"https://www.athexgroup.gr/en/about/regulatory/mifid-reports?page=9"},{"title":"mifid reports","url":"https://www.athexgroup.gr/en/about/regulatory/mifid-reports"},{"title":"Art. 24 of MiFID II Art. 50(9) of the MiFID II Delegated Regulation","url":"https://service.betterregulation.com/document/300811"},{"title":"Einde inhoudsopgave","url":"https://www.inview.nl/document/id2a7c642ad5614aa6b4da4f98aecfb147"}]

The search didn't return the exact Annex II wording. None of t
… [1140 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "PRIIPs regulation 1286/2014 applies from 1 January 2018 UCITS exemption ended 31 December 2022 KID"

Links: [{"title":"PRIIPs : end of UCITS exemption on 31 December 2022","url":"https://elvingerhoss.lu/publications/priips-end-ucits-exemption-31-december-2022"},{"title":"priips   packaged retail and insurance based investment products","url":"https://financialmarketstoolkit.cliffordchance.com/en/topic-guides/priips---packaged-retail-and-insurance-based-investment-products.html"},{"title":"European Parliament","url":"https://my.slaughterandmay.com/insights/financial-regulation-weekly-bulletin/asset-management_49"},{"title":"eu priips transitional exemption extension agreed until 31 december 2022","url":"https://financialregulation.linklaters.com/post/102han4/eu-priips-transitional-exemption-extension-agreed-until-31-december-2022"},{"title":"oeil.europarl.europa.eu","url":"https://oeil.europarl.europa.eu/oeil/en/procedure-document-summary/pdf?id=1680837"},{"title":"This document is an excerpt from the EUR-Lex website","url":"https://eur-lex.europa.eu/eli/reg/2021/2259/oj"},{"title":"PRIIPs KID: update","url":"https://elvingerhoss.lu/publications/priips-kid-update"},{"title":"PRIIPs developments in the EU: an update","url":"https://www.simmons-simmons.com/en/publications/ckrnpvmg21igs0a88bzksyykq/priips-developments-in-the-eu-an-update"},{"title":"securities.cib.bnpparibas","url":"https://securities.cib.bnpparibas/?p=20027"}]

The search confirms
… [2080 more characters]
```
</details>

→ `WebFetch` https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mifid-ii/annex-ii-professional-clients-purpose-directive

<details><summary>result</summary>

```
The server returned HTTP 404 Not Found.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

→ `WebSearch` "carried out transactions, in significant size, on the relevant market at an average frequency of 10 per quarter"

<details><summary>result</summary>

```
Web search results for query: ""carried out transactions, in significant size, on the relevant market at an average frequency of 10 per quarter""

Links: [{"title":"www.esma.europa.eu","url":"https://www.esma.europa.eu/print/pdf/node/204228"},{"title":"M&A Quarterly Activity Report: Q2 2024","url":"https://www.kaufmanhall.com/search?page=44"},{"title":"Statistic of yearly trading volume of large market transactions","url":"https://data.gov.tw/en/datasets/11758"},{"title":"Article 2 Average frequency of trades","url":"https://handbook.fca.org.uk/techstandards/MIFID-MIFIR/2016/reg_del_2016_2020_oj/006.html"},{"title":"ccs co","url":"https://ccs-co.com/?p=4025"},{"title":"Article 3 Average daily number of transactions for shares and depositary receipts","url":"https://service.betterregulation.com/document/367567"},{"title":"service.betterregulation.com","url":"https://service.betterregulation.com/document/253195"},{"title":"betterregulation.com","url":"https://service.betterregulation.com/document/273849"},{"title":"Article 2Average frequency of trades","url":"https://www.legislation.gov.uk/eur/2016/2020/article/2/data.html"},{"title":"trade frequency","url":"https://docs.amberdata.io/data-dictionary/analytics/spot/trade-frequency"}]

The exact phrase didn't turn up in the results. The closest match is an ESMA Q&A on MiFID II client categorisation. It asks how a firm should judge whether a private investor's transactions are of "significant size" under Annex II, Section II.1 of
… [683 more characters]
```
</details>

→ `WebFetch` https://eur-lex.europa.eu/eli/dir/2014/65/oj/eng

<details><summary>result</summary>

```
The web page content you provided doesn't include Annex II or section II.1, so I can't quote the identification criteria. It only shows an EUR-Lex Official Journal index with issue dates (07/10/2026 to 11/10/2026), links to Series L and Series C for each date, and a link on verifying the Official Journal's authenticity.

To get the criteria, you could open the specific act on EUR-Lex and go to Annex II, or paste the annex text here.
```
</details>

→ `WebFetch` https://www.zakonyprolidi.cz/cs/2004-256

<details><summary>result</summary>

```
The provision is **§ 2b, odstavec 1, písmeno b)**, not § 2c. Under that paragraph, a person qualifies if they meet at least two of three criteria:

1. **Trading volume:** "provedla za každé z posledních 4 po sobě jdoucích čtvrtletí" trades in the relevant instrument "ve významném objemu a v průměrném počtu alespoň 10 obchodů za čtvrtletí."
2. **Portfolio value:** "objem jejího majetku tvořeného peněžními prostředky a investičními nástroji odpovídá částce alespoň 500000 EUR."
3. **Professional experience:** "vykonávala po dobu nejméně jednoho roku nebo vykonává" activity "v oblasti finančního trhu, která vyžaduje znalost obchodů nebo služeb."

[WebFetch note: this page's text is 715194 characters long and the answer above covers only characters 0 to 100000; the final 615194 were not read — to read on, call WebFetch again with the same url and offset: 100000.]
```
</details>

→ `WebSearch` Fio e-Broker americké ETF PRIIPs KID nelze nakoupit neprofesionální zákazník

→ `WebSearch` XTB americké ETF SPY VOO nelze koupit KID pouze CFD UCITS

→ `WebSearch` Trading 212 why can't I buy US ETFs VOO SPY EU KID help centre

<details><summary>result</summary>

```
Web search results for query: "Fio e-Broker americké ETF PRIIPs KID nelze nakoupit neprofesionální zákazník"

Links: [{"title":"PRIIPs Overview","url":"https://ibkb.interactivebrokers.com/de/node/3324"},{"title":"PRIIPs Overview","url":"https://ibkb.interactivebrokers.com/tag/rejection-messages"},{"title":"starting 1 january 2023 retail investors can no longer purchase investment fund units and etfs if","url":"https://seb.ee/en/starting-1-january-2023-retail-investors-can-no-longer-purchase-investment-fund-units-and-etfs-if"},{"title":"nova uprava poskytovani informaci pri tvorbe a prodeji investicnich produktu 96263","url":"https://www.epravo.cz/top/clanky/nova-uprava-poskytovani-informaci-pri-tvorbe-a-prodeji-investicnich-produktu-96263.html"},{"title":"1st january 2023 investment fund units and etfs purchase retail client restricted if priips kid not","url":"https://www.seb.lt/en/1st-january-2023-investment-fund-units-and-etfs-purchase-retail-client-restricted-if-priips-kid-not"},{"title":"etf insight european investors set to be impacted by kid requirements","url":"https://etfstream.com/articles/etf-insight-european-investors-set-to-be-impacted-by-kid-requirements"},{"title":"PRIIPS KID on IB","url":"https://elitetrader.com/et/threads/priips-kid-on-ib.322160/post-4688107"},{"title":"PRIIPS KID on IB","url":"https://elitetrader.com/et/threads/priips-kid-on-ib.322160/post-4692020"},{"title":"PRIIPS KID on IB","url":"https://elitetrader.com/et/threads/priips-kid-on-ib.322160
… [1389 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Trading 212 why can't I buy US ETFs VOO SPY EU KID help centre"

Links: [{"title":"investingintheweb.com","url":"https://investingintheweb.com/?p=55044"},{"title":"best voo etf alternatives in europe and uk","url":"https://investingintheweb.com/brokers/best-voo-etf-alternatives-in-europe-and-uk/"},{"title":"Any chance for the famous dividend ETFs trading in US. VYG, VOO, SCHD, DGRO, VYG?","url":"https://community.trading212.com/t/us-traded-etfs-vanguard-schwab/21777"},{"title":"community.trading212.com","url":"https://community.trading212.com/t/i-only-have-the-options-of-1-847-stocks-and-212-etfs-also-no-usa-etfs-the-website-mentions-you-have-over-3000-global-stocks-please-help/3019"},{"title":"us etf alternatives ehnueifs","url":"https://www.teamblind.com/post/us-etf-alternatives-ehnueifs"},{"title":"finorum.com","url":"https://finorum.com/?p=12423"},{"title":"us etfs in europe","url":"https://finorum.com/us-etfs-in-europe/"},{"title":"etf usa in europa 2026","url":"https://finorum.com/it/etf-usa-in-europa-2026/"},{"title":"priips kid regulation","url":"https://myetfjourney.com/blog/priips-kid-regulation"}]

The search didn't turn up a Trading 212 help centre article on this, so the answer below comes from third-party guides and a Trading 212 community thread.

The main reason is EU regulation. PRIIPs stands for Packaged Retail and Insurance-based Investment Products, an EU regulation in force since 2018. It requires a mandatory three-page disc
… [1360 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "XTB americké ETF SPY VOO nelze koupit KID pouze CFD UCITS"

Links: [{"title":"priips kid regulation","url":"https://myetfjourney.com/blog/priips-kid-regulation"},{"title":"Jak obejít znemožnění obchodování amerických ETFek – 2. část","url":"https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-2-cast/"},{"title":"##  [# VOO vs SPY: Comparing the Top S&amp;P 500 ETFs](/sections/etf-basics/voo-vs-spy-comparing-top-sp-500-etfs)","url":"https://www.etf.com/node/127518.md"},{"title":"investingintheweb.com","url":"https://investingintheweb.com/?p=55044"},{"title":"vanguard s p 500 ucits acc usd","url":"https://www.xtb.com/int/etfs-cfd/vanguard-s-p-500-ucits-acc-usd"},{"title":"freetrade.io","url":"https://community.freetrade.io/t/are-vusa-and-voo-essentially-the-same-whats-the-difference/3690"},{"title":"sdpr s p 500 trust","url":"https://www.xtb.com/int/etfs-cfd/sdpr-s-p-500-trust"},{"title":"ubu9 de","url":"https://www.xtb.com/int/etfs-cfd/ubu9-de"},{"title":"best voo etf alternatives in europe and uk","url":"https://investingintheweb.com/brokers/best-voo-etf-alternatives-in-europe-and-uk/"}]

Výsledky potvrzují, že US ETF jako VOO nebo SPY nejsou pro evropské retail investory běžně dostupné kvůli regulaci PRIIPs a chybějícímu KID, ale nejde o to, že by s tím broker měl něco společného.

- **Regulace:** Zdroje uvádějí, že VOO je pro evropské a britské investory nedostupný kvůli PRIIPs, a že fondy bez evropského KID se nesmějí p
… [1258 more characters]
```
</details>

→ `WebFetch` https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-2-cast/

→ `WebSearch` PRIIPs reform 2026 retail investment strategy KID US ETFs EU agreement trilogue

<details><summary>result</summary>

```
Web search results for query: "PRIIPs reform 2026 retail investment strategy KID US ETFs EU agreement trilogue"

Links: [{"title":"EU Retail Investment Strategy","url":"https://www.simmons-simmons.com/features/eu-retail-investment-strategy"},{"title":"retail investment strategy the bold plan to put retail investors first","url":"https://apexgroup.com/insights/retail-investment-strategy-the-bold-plan-to-put-retail-investors-first/"},{"title":"Retail Investment Strategy: Are you ready for trilogues?","url":"https://www.linklaters.com/knowledge/events/2024/october/10/retail-investment-strategy--are-you-ready-for-trilogues"},{"title":"www.parlament.gv.at","url":"https://www.parlament.gv.at/gegenstand/XXVIII/EU/74350"},{"title":"www.parlament.gv.at","url":"https://www.parlament.gv.at/gegenstand/XXVIII/EU/35981"},{"title":"priips   packaged retail and insurance based investment products","url":"https://financialmarketstoolkit.cliffordchance.com/en/topic-guides/priips---packaged-retail-and-insurance-based-investment-products.html"},{"title":"Asset Management and Investment Funds","url":"https://arthurcox.foleon.com/whats-another-year/arthur-cox/asset-management-and-investment-funds"},{"title":"Legal development","url":"https://www.ashurst.com/en/insights/eu-priips-regulation-a-further-package-of-amendments/"},{"title":"eu retail investment strategy reaches milestone ready for trilogues","url":"https://linklaters.com/knowledge/publications/alerts-newsletters-and-guides/2024/june/13/e
… [1726 more characters]
```
</details>

<details><summary>result</summary>

```
**Article date:** Published 19 August 2020 (19. 8. 2020), updated 14 January 2022.

**Brokers named in the article**

| Broker | What the article says about US ETFs | Key quote (Czech) |
|---|---|---|
| **Fio** | Allows Czech and Slovak residents to trade US-listed ETFs, with a large selection. The article also cites Fio's note that the Czech National Bank still allows classic US ETF trading. | "Umožňuje českým a slovenským občanům obchodovat ryze americká ETFka." |
| **Patria** | Allows US ETF trading, though its website lists only 11 European variants. A phone inquiry indicated that US ETFs can be found and traded by searching in the platform, for example by ISIN. | "přes ně lze americká ETFka obchodovat, pokud si je obchodník sám vyhledá v obchodní platformě" |
| **XTB** | Does not allow US ETF trading. It offers only European equivalents or US exposure via CFDs. | "Neumožňuje obchodování amerických ETFek. Jenom evropské ekvivalenty nebo přes CFD deriváty." |
| **Lynx** | US ETFs cannot be traded unless the client has Professional status. The article describes Lynx as a localized Interactive Brokers. | "není možné obchodovat americká ETFka (pouze v případě statusu Profesionál)" |
| **Interactive Brokers (IB)** | Not stated outright as allowing US ETFs, but the author mentions paying IB fees on US ETF trades (e.g., SPY). IB is also said to offer all European ETF equivalents. | "u IB 0,35 USD za 100 kusů SPY proti 18,67 USD za 100 kusů CSPX" |
| **Saxo** | No mention of US E
… [899 more characters]
```
</details>

→ `WebSearch` Fio banka e-Broker obchodování amerických ETF retail klient KID 2025

<details><summary>result</summary>

```
Web search results for query: "Fio banka e-Broker obchodování amerických ETF retail klient KID 2025"

Links: [{"title":"Fio e-Broker - Zkušenosti a aktuální recenze [2026] » Finex.cz","url":"https://finex.cz/recenze/fio-broker/"},{"title":"Fio e-Broker recenze 2026 — Hodnocení, poplatky, zkušenosti","url":"https://webtrader.cz/fio"},{"title":"FIO recenze 2026: Je to broker pro českého investora?","url":"https://rankia.cz/fio-broker-recenze-poplatky-aplikace-a-nazory/"},{"title":"Fio broker: Poplatky, založení účtu a převádění peněz - Wise","url":"https://wise.com/cz/blog/fio-broker"},{"title":"Chci ETF, Exchange Traded Funds, indexové akcie","url":"https://www.fio.cz/akcie-investice/etf"},{"title":"Akcie, deriváty, komodity, ETF, investície, e-Broker","url":"https://www.fio.sk/akcie-investicie"},{"title":"Fio e-broker Recenze a zkušenosti v roce 2026","url":"https://www.5nej.cz/fio-e-broker/"},{"title":"AMERICAN CENTURY ETF TRUST - Form 485BPOS - FY2025","url":"https://www.sec.gov/Archives/edgar/data/1710607/000171060725000314/ck0001710607-20251229.htm"},{"title":"FAQ - často kladené otázky","url":"https://www.fio.sk/spolocnost-fio/servis-pre-klientov/faq/investicne-sluzby/8-cenne-papiere"},{"title":"E-book - FIO broker - Investování pro holky","url":"https://investovaniproholky.cz/fio-broker/"}]

The search found no official Fio document on KID (key information document) requirements for US ETF trading in 2025, so the KID question is unresolved. The results are mostly review
… [1306 more characters]
```
</details>

→ `WebFetch` https://www.fio.cz/akcie-investice/etf

→ `WebFetch` https://finex.cz/recenze/fio-broker/

<details><summary>result</summary>

```
**US/americké ETF:**
- "U nás můžete obchodovat i s **americkými ETF**."
- "Možnost úvěru na top US indexy až do výše 90% z celkové investice"
- Příklad: ETF s tickerem "DIA" investuje do "30 titulů indexu Dow Jones Industrial Average 30".

**KID / PRIIPs:** Stránka tyto pojmy neuvádí.

**Trhy:**
- "přístup na vybrané trhy s cennými papíry, na nichž je možné s některými ETF (a dalšími typy ETP) obchodovat."

**Podmínky:**
- Fio banka "svým klientům ani dalším osobám nenabízí žádné ETF (ani jiné typy ETP)".
- "Výjimku z tohoto pravidla tvoří služba Osobní makléř" (poskytuje investiční poradenství k vybraným nástrojům).
- Varování: "Investování do investičních nástrojů je rizikové. Není zaručena návratnost původně investované částky."

Výrazy "execution-only" ani "pouze na pokyn z vlastní iniciativy" stránka neobsahuje.

**Datumy:**
- "Copyright © 2026 Fio banka"
- Odkaz na zprávu: "Denní report - pátek 09.10.2026"
```
</details>

<details><summary>result</summary>

```
**Americké ETF u Fio e-Brokera**

- **Nákup pro retailové klienty:** Článek uvádí, že e-Broker umožňuje „investovat přímo do amerických ETF či uzavřených podílových fondů“. Dodává, že jde „pravděpodobně o jediného brokera, který tuto možnost českým investorům nabízí“.
- **Srovnání s jinými brokery:** Ostatní brokeři podle článku nabízejí populární fondy jako „pouze jako CFD kontrakty“.
- **KID/PRIIPs:** Článek se o dokumentu KID ani PRIIPs nezmiňuje.

**Poplatky za americký trh**

- „7,95 usd do 100 akcií a 9,95 usd nad 100 akcií (příplatek 10 usd za obchodování na OTC trhu)“ u amerických akcií.
- Pro ETF platí „Stejné poplatky jako v případě akcií – dle burzy“.
- Tabulka uvádí „7,95 USD US trhy (za akcii)“ a poznamenává, že poplatky jsou účtovány za pokyn.

**Datum recenze**

- „Poslední aktualizace 1. 8. 2025“.
```
</details>

→ `WebSearch` DEGIRO help US ETFs not available KID PRIIPs retail

→ `WebSearch` Saxo Bank US-listed ETFs not available retail clients EU KID professional

→ `WebSearch` Revolut EEA US ETFs SPY VOO cannot buy KID regulation help

<details><summary>result</summary>

```
Web search results for query: "DEGIRO help US ETFs not available KID PRIIPs retail"

Links: [{"title":"forum.mustachianpost.com","url":"https://forum.mustachianpost.com/t/us-etfs-vt-for-instance-not-available-anymore-in-switzerland/1648?page=2"},{"title":"US-ETFs (VT for instance) not available anymore in Switzerland?","url":"https://forum.mustachianpost.com/t/us-etfs-vt-for-instance-not-available-anymore-in-switzerland/1648/30?u=razor"},{"title":"US-domiciled ETFs: why they are no longer available from many online brokers","url":"https://www.justetf.com/en/news/etf/us-domiciled-etfs.html"},{"title":"US-domiciled ETFs: why they are no longer available from many online brokers","url":"https://www.justetf.com/uk/news/etf/us-domiciled-etfs.html"},{"title":"US-domiciled ETFs: why they are no longer available from many online brokers","url":"https://www.justetf.com/fr-be/news/etf/us-domiciled-etfs.html"},{"title":"US-domiciled ETFs: why they are no longer available from many online brokers","url":"https://www.justetf.com/ch-en/news/etf/us-domiciled-etfs.html"},{"title":"US-domiciled ETFs: why they are no longer available from many online brokers","url":"https://www.justetf.com/nl/news/etf/us-domiciled-etfs.html"},{"title":"investingintheweb.com","url":"https://investingintheweb.com/?p=59253"},{"title":"Les meilleurs plans d’épargne ETF","url":"https://www.justetf.com/fr/news/etf/us-domiciled-etfs.html"},{"title":"Comparación de plan de inversión ETF","url":"https://www.justetf.com
… [2119 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Revolut EEA US ETFs SPY VOO cannot buy KID regulation help"

Links: [{"title":"PRIIPs Regulation","url":"https://ibkb.interactivebrokers.com/de/node/2993"},{"title":"PRIIPs Regulation","url":"https://ibkb.interactivebrokers.com/es/node/2993"},{"title":"US domiciled ETFs - without the KIIDs?","url":"https://community.freetrade.io/t/us-domiciled-etfs-without-the-kiids/1281"},{"title":"ibkb.interactivebrokers.com","url":"https://ibkb.interactivebrokers.com/node/2993"},{"title":"freetrade.io","url":"https://community.freetrade.io/t/are-vusa-and-voo-essentially-the-same-whats-the-difference/3690"},{"title":"PRIIPs Overview","url":"https://ibkb.interactivebrokers.com/de/node/3324"},{"title":"priips kid regulation","url":"https://myetfjourney.com/blog/priips-kid-regulation"},{"title":"us etf alternatives ehnueifs","url":"https://www.teamblind.com/post/us-etf-alternatives-ehnueifs"},{"title":"investingintheweb.com","url":"https://investingintheweb.com/?p=55044"}]

I found no Revolut-specific source. The results explain why EEA retail accounts are blocked from US-listed ETFs like SPY and VOO, and the general options available.

- **The cause:** The PRIIPs Regulation requires a Key Information Document for retail products sold in the EEA. A broker must block trading in a PRIIP if no KID is available. Because US issuers generally don't produce these documents, EEA and UK retail clients may not purchase the product.
- **Workarounds:** Many US ETF issuers of
… [831 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Saxo Bank US-listed ETFs not available retail clients EU KID professional"

Links: [{"title":"Partner Update","url":"https://home.saxo/content/commentaries/ppu/partner-product-update/etf-kid-solution-for-wl-partners-under-priips-23092022"},{"title":"mustachianpost.com","url":"https://forum.mustachianpost.com/t/saxo-bank-switzerland/11701?page=2"},{"title":"Saxo Bank issues notice regarding ETF KID solution for WL partners","url":"https://fxnewsgroup.com/forex-news/retail-forex/saxo-bank-issues-notice-regarding-etf-kid-solution-for-wl-partners/"},{"title":"Saxo vs Interactive Brokers 2026: which premium broker fits European ETF investors?","url":"https://financialexpertclass.com/?p=5344"},{"title":"Saxo Bank Switzerland","url":"https://forum.mustachianpost.com/t/saxo-bank-switzerland/11701?page=3"},{"title":"forum.mustachianpost.com","url":"https://forum.mustachianpost.com/t/saxo-bank-us-etfs-no-kid/11897"},{"title":"I am not able to place an order in this ETF","url":"https://community.moneybase.com/support/solutions/articles/204000068203-i-am-not-able-to-place-an-order-in-this-etf"},{"title":"Saxo Bank Switzerland","url":"https://forum.mustachianpost.com/t/saxo-bank-switzerland/11701?page=4"},{"title":"Millions of Europeans Locked Out Of ETFs. Surely, You Must be KIDing?","url":"https://www.bankeronwheels.com/kid-etf-registration-priips-ucits/"}]

The search turned up Saxo's own partner documentation, some broker-education pages, and forum posts
… [1631 more characters]
```
</details>

→ `WebSearch` Portu Fondee jaké ETF používají UCITS iShares portfolio složení

<details><summary>result</summary>

```
Web search results for query: "Portu Fondee jaké ETF používají UCITS iShares portfolio složení"

Links: [{"title":"eu priips ishares growth portfolio ucits etf eur acc ie00bllzq805 sk","url":"https://blackrock.com/sk/individualni-investori/literature/kiid/eu-priips-ishares-growth-portfolio-ucits-etf-eur-acc-ie00bllzq805-sk.pdf"},{"title":"eufg ishares europe foreign focus ucits etf fund fact sheet en no","url":"https://www.blackrock.com/gls-download/literature/fact-sheet/eufg-ishares-europe-foreign-focus-ucits-etf-fund-fact-sheet-en-no.pdf"},{"title":"eu priips ishares growth portfolio ucits etf eur acc ie00bllzq805 cs","url":"https://blackrock.com/cz/individualni-investori/literature/kiid/eu-priips-ishares-growth-portfolio-ucits-etf-eur-acc-ie00bllzq805-cs.pdf"},{"title":"ie00bllzq805 mtaa eur","url":"https://www.moneyfarm.com/it/trading/etf/ie00bllzq805-mtaa-eur/"},{"title":"iShares Growth Portfolio UCITS ETF EUR (Acc)","url":"https://www.finanzen.at/fonds/ishares-growth-portfolio-etf-ie00bllzq805"},{"title":"iShares Growth Portfolio UCITS ETF EUR (Acc) 54095497 / IE00BLLZQ805","url":"https://styles.finanzen.ch/etf/ishares-growth-portfolio-etf-ie00bllzq805"},{"title":"iShares Growth Portfolio UCITS ETF EUR (Acc) 54095497 / IE00BLLZQ805","url":"https://script.finanzen.ch/etf/ishares-growth-portfolio-etf-ie00bllzq805/NAV"},{"title":"Kurse | Charts | Stammdaten | Kennzahlen | Aktion |","url":"https://finanzen.ch/etf/ishares-growth-portfolio-etf-ie00bllzq805"},{"title":"iShares
… [1620 more characters]
```
</details>

→ `WebFetch` https://www.fondee.cz/cs/

→ `WebFetch` https://www.portu.cz/

<details><summary>result</summary>

```
The web page content you provided is empty, so I can't identify which ETFs or funds Portu invests in, the issuers, or its fee. Please paste the page text and I'll answer based on it.
```
</details>

<details><summary>result</summary>

```
The page doesn't name any specific ETFs or their issuers, and it doesn't say whether they are UCITS. It only refers generally to ETFs in its calculator disclaimer, which says the simulation is based on "cenách jednotlivých ETF nebo jejich podkladových indexů" (prices of individual ETFs or their underlying indices).

The page gives no official fee schedule. It links to a "Poplatky" (fees) page, which isn't included here. The only fee figure comes from a customer review by Anna Kafka, who writes: "Poplatky za správu portfolia činí 0,9 % z jeho hodnoty za rok." That is roughly 0.9% of portfolio value per year, but it is a customer's statement, not Fondee's published terms, so check the fees page or documents before relying on it.
```
</details>

→ `Bash` — Fetch justETF profile for CSPX and parse fields
```sh
cd [tmp] && mkdir -p je && curl -s -m 40 -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/130 Safari/537.36" -H "Accept-Language: en" "https://www.justetf.com/en/etf-profile.html?isin=IE00B5BMR087" -o je/IE00B5BMR087.html -w "%{http_code}\n"; wc -c je/IE00B5BMR087.html; python3 - <<'EOF'
import re,html
s=open('je/IE00B5BMR087.html',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S);t=html.unescape(re.sub(r'<[^>]+>',' ',t));t=re.sub(r'\s+',' ',t)
open('je/IE00B5BMR087.txt','w').write(t)
for kw in ['Fund size','Total expense ratio','Replication','Distribution policy','Fund domicile','Fund currency','Inception','Holdings','Listing','Stock exchange','Xetra','London']:
    m=t.find(kw); print('--',kw,'=>',t[m:m+250] if m>=0 else None)
EOF
```

<details><summary>result</summary>

```
200
  489930 je/IE00B5BMR087.html
-- Fund size => Fund size EUR 141,385 m Inception Date 19 May 2010 Holdings 503 Advertisement Overview Chart Basics Holdings Savings plan Order fees Performance Risk Stock exchange Overview Quote Price alerts Price alerts × Price alerts You can set up price alerts i
-- Total expense ratio => Total expense ratio 0.07% p.a. Replication Physical ( Full replication ) Legal structure ETF Investment approach Long-only Sustainability No Fund currency USD Currency risk Currency unhedged Volatility 1 year (in EUR) 12.42% Inception/ Listing Date 1
-- Replication => Replication Physical Fund size EUR 141,385 m Inception Date 19 May 2010 Holdings 503 Advertisement Overview Chart Basics Holdings Savings plan Order fees Performance Risk Stock exchange Overview Quote Price alerts Price alerts × Price alerts You can
-- Distribution policy => Distribution policy Accumulating Replication Physical Fund size EUR 141,385 m Inception Date 19 May 2010 Holdings 503 Advertisement Overview Chart Basics Holdings Savings plan Order fees Performance Risk Stock exchange Overview Quote Price alerts Pri
-- Fund domicile => Fund domicile Ireland Fund Provider iShares Legal structure Fund Structure Open-ended Investment Company (OEIC) UCITS compliance Yes Administrator BNY MELLON FUND SERVICES (IRELAND) Investment Advisor Custodian Bank State Street Custodial Services (I
-- Fund currency => Fund currency USD Currency risk Currency unhedged Volatility 1 year (in EUR) 12.42% I
… [1516 more characters]
```
</details>

→ `WebSearch` justetf UCITS ETF US total stock market alternative VTI ISIN "total market" USA UCITS

→ `WebSearch` justetf "World ex USA" UCITS ETF ISIN alternative VEA VXUS

→ `WebSearch` UCITS ETF "Dow Jones U.S. Dividend 100" index SCHD equivalent Europe ISIN

<details><summary>result</summary>

```
Web search results for query: "justetf UCITS ETF US total stock market alternative VTI ISIN "total market" USA UCITS"

Links: [{"title":"Vanguard Morningstar Total Stock Market ETF (VTI) Price","url":"https://eulerpool.com/etf/US9229087690"},{"title":"İpucu modu açıktır Kapat","url":"https://cbonds.com.tr/etf/39/"},{"title":"Hint mode is switched on Switch off","url":"https://cbonds.com/etf/39/"},{"title":"Le mode conseil est activé Arrêter","url":"https://cbonds.fr/etf/39/"},{"title":"Jesteś w trybie podpowiedzi Wyłącz","url":"https://cbonds.pl/etf/39/"},{"title":"top ucits alternatives to vti","url":"https://paasa.com/blog/top-ucits-alternatives-to-vti"},{"title":"vti europe uk alternatives","url":"https://investingintheweb.com/blog/vti-europe-uk-alternatives/"},{"title":"Está en modo consejo Apagar","url":"https://cbonds.es/etf/39/"},{"title":"您使用提示模式 关闭","url":"https://cbonds.hk/etf/39/"}]

The search didn't turn up any justETF page, so I can't confirm a justETF listing or its ISIN. The results do cover VTI and the UCITS alternatives:

- **VTI is not a UCITS fund.** Cbonds lists VTI's ISIN as US9229087690 and marks it as non-UCITS. Eulerpool states that the fund does not comply with the EU UCITS investor protection directives.
- **No direct UCITS match was found.** Investing in the Web says no ETFs are available in the UK or EU that replicate the exact underlying index of VTI (the CRSP US Total Market Index). That article is commercial and its claims are not independently
… [887 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "justetf "World ex USA" UCITS ETF ISIN alternative VEA VXUS"

Links: [{"title":"Vanguard Total International Stock ETF","url":"https://www.wealthfront.com/explore/127/vxus"},{"title":"All you need to get started with ETF selection and analysis. Create your account now →","url":"https://www.trackinsight.com/en/fund/XMIL:VXUS"},{"title":"VXUS vs VEU vs IXUS - Best total international ETF for one-ticket ex-US exposure","url":"https://sdp.otoy.com/best-ex-us-etf/vxus-vs-veu-vs-ixus-best-total-international-etf-for-one-ticket-ex-us-exposure"},{"title":"VXUS Vs. VEU: Vanguard ETFs Use Different FTSE Indices But Get Same Results","url":"https://seekingalpha.com/article/4542668-vxus-vs-veu-vanguard-etfs-different-ftse-indices-same-results"},{"title":"VXUS vs VEU vs IXUS - Best total international ETF for one-ticket ex-US exposure | Mezzi","url":"https://sdp.otoy.com/best-ex-us-etf/vxus-vs-veu-vs-ixus-best-total-international-etf-for-one-ticket-ex-us-exposure-mezzi"},{"title":"Compare VEA vs. VXUS ETF performance","url":"https://www.trackinsight.com/en/compare-etfs/VEA,VXUS"},{"title":"Vanguard Launches Its 2nd All World Ex-US ETF","url":"https://benzinga.com/z/824147"},{"title":"VXUS vs VEA","url":"https://www.etfcentral.com/compare-etfs/VXUS-vs-VEA"},{"title":"VXUS vs VEU","url":"https://www.etfcentral.com/compare-etfs/VXUS-vs-VEU"},{"title":"Compare/VEU vs VXUS","url":"https://etfbeacon.com/compare/VEU-vs-VXUS"}]

The search didn't turn up a justETF pa
… [1289 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "UCITS ETF "Dow Jones U.S. Dividend 100" index SCHD equivalent Europe ISIN"

Links: [{"title":"schd europe uk alternatives","url":"https://investingintheweb.com/blog/schd-europe-uk-alternatives"},{"title":"www.trackinsight.com","url":"https://www.trackinsight.com/en/fund/SCHD"},{"title":"investingintheweb.com","url":"https://investingintheweb.com/?p=55950"},{"title":"Hoppa till huvudinnehållet","url":"https://www.nordnet.se/etf/lista/schwab-us-dividend-equity-schd-xnas"},{"title":"Hinweis-Modus ist eingeschaltet Ausschalten","url":"https://cbonds.de/etf/355/"},{"title":"Hint mode is switched on Switch off","url":"https://cbonds.com/etf/355/"},{"title":"Hint mode is enabled; turn off","url":"https://cbonds.com.ua/etf/355/"},{"title":"您使用提示模式 关闭","url":"https://cbonds.hk/etf/355/"},{"title":"İpucu modu açıktır Kapat","url":"https://cbonds.com.tr/etf/355/"}]

I found no UCITS ETF that tracks the Dow Jones U.S. Dividend 100 Index itself, so the closest Europe-available options are dividend-strategy funds. One guide says as far as we know, there is no UCITS ETF in Europe or the UK that tracks the exact index behind SCHD. That same guide suggests buying a UCITS ETF that tracks a similar dividend strategy.

The search surfaced these candidates, with ISINs, as listed by one site drawing on justETF data:
- **Vanguard FTSE All-World High Dividend Yield UCITS ETF (VHYL): IE00B8GKDB10**, 0.29% TER, distributing. One guide calls it the most popular
… [1493 more characters]
```
</details>

→ `WebFetch` https://investingintheweb.com/blog/vti-europe-uk-alternatives/

→ `WebSearch` VXUS UCITS alternative Europe "ex USA" ETF ISIN investingintheweb OR justetf "ACWI ex USA" OR "All-World ex US"

<details><summary>result</summary>

```
**Update date:** October 3, 2026

| UCITS ETF | ISIN | Ticker (EUR / GBP) | TER | Index |
|---|---|---|---|---|
| iShares Core S&P 500 UCITS ETF | IE00B5BMR087 | SXR8 / CSP1 | 0.07% | S&P 500 |
| Vanguard S&P 500 UCITS ETF | IE00B3XXRP09 | VUSA / VUSA | 0.07% | S&P 500 |
| SPDR Russell 2000 US Small Cap UCITS ETF | IE00BJ38QD84 | ZPRR / R2SC | 0.30% | Russell 2000 |
| iShares Core MSCI World UCITS ETF | IE00B4L5Y983 | IWDA / SWDA | 0.20% | MSCI World |
| Vanguard FTSE All-World UCITS ETF | IE00BK5BQT80 | VWCE / VWRP | 0.14% | FTSE All-World |

The article also mentions the Vanguard U.S. Equity Index Fund, a UK UCITS fund tracking the S&P Total Market Index with a 0.10% ongoing charge. The article does not list its ISIN or ticker.
```
</details>

<details><summary>result</summary>

```
Web search results for query: "VXUS UCITS alternative Europe "ex USA" ETF ISIN investingintheweb OR justetf "ACWI ex USA" OR "All-World ex US""

Links: [{"title":"VXUS UCITS alternative","url":"https://forum.thepoorswiss.com/threads/vxus-ucits-alternative.675/post-4824"},{"title":"All you need to get started with ETF selection and analysis. Create your account now →","url":"https://www.trackinsight.com/en/fund/XMIL:VXUS"},{"title":"Trackinsight is part of ETF One, the fully integrated ETF platform of Kepler Cheuvreux. Learn more →","url":"https://www.trackinsight.com/en/fund/XMIL%3AVXUS"},{"title":"You are in:   Home page  ›  ETFs  ›  All ETFs  › ETFs ›  Vanguard Ftse All-World Ex-U.S. Ucits Etf - Usd Acc","url":"https://www.borsaitaliana.it/borsa/etf/scheda/IE0009A5ADV9-ETFP.html?lang=en"},{"title":"VXUS UCITS alternative","url":"https://forum.thepoorswiss.com/threads/vxus-ucits-alternative.675/post-4814"},{"title":"VXUS UCITS alternative","url":"https://forum.thepoorswiss.com/threads/vxus-ucits-alternative.675/"},{"title":"www.trackinsight.com","url":"https://www.trackinsight.com/en/fund/VXUS"},{"title":"FTSE All-World Ex-U.S. UCITS ETF","url":"https://www.nl.vanguard/professional/product/etf/equity/E165/vanguard-ftse-all-world-ex-us-ucits-etf-usd-acc"},{"title":"FTSE All-World Ex-U.S. UCITS ETF","url":"https://www.nl.vanguard/professional/product/etf/equity/E165/ftse-all-world-ex-us-ucits-etf-usd-acc"}]

The best match for a UCITS VXUS alternative is the Vanguard FTSE All-
… [1578 more characters]
```
</details>

→ `Bash` — Fetch and parse justETF profiles (batch 1)
```sh
cd [tmp] && cat > je.py <<'EOF'
import re,html,subprocess,sys,json,os,time
res={}
for isin in sys.argv[1:]:
    f=f'je/{isin}.html'
    if not os.path.exists(f) or os.path.getsize(f)<50000:
        subprocess.run(["curl","-s","-m","40","-L","-A","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/130 Safari/537.36","-H","Accept-Language: en",f"https://www.justetf.com/en/etf-profile.html?isin={isin}","-o",f]); time.sleep(1)
    s=open(f,errors='ignore').read()
    title=re.search(r'<title>(.*?)</title>',s,re.S); title=html.unescape(title.group(1).strip()) if title else None
    t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S);t=html.unescape(re.sub(r'<[^>]+>',' ',t));t=re.sub(r'\s+',' ',t)
    open(f'je/{isin}.txt','w').write(t)
    def g(p):
        m=re.search(p,t); return m.group(1).strip() if m else None
    d=dict(title=title,
      ter=g(r'Total expense ratio ([\d.,]+% p\.a\.)'),
      fund_size=g(r'Fund size (EUR [\d,]+ m)'),
      fund_size_ctx=g(r'(Fund size EUR [\d,]+ m[^A-Z]{0,40})'),
      replication=g(r'Replication (\w+ \( [^)]*\))') or g(r'Replicatio
… [995 more characters]
```

<details><summary>result</summary>

```
##### IE00B5BMR087
  title : iShares Core S&P 500 UCITS ETF USD (Acc) | A0YEDG | IE00B5BMR087
  ter : 0.07% p.a.
  fund_size : EUR 141,385 m
  fund_size_ctx : Fund size EUR 141,385 m
  replication : Physical ( Full replication )
  dist : Accumulating
  dist_freq : -
  domicile : Ireland
  provider : iShares
  currency : USD
  inception : 19 May 2010
  holdings : 503
  index : None
  ucits : Yes
  listings_raw : None
##### IE00BFMXXD54
  title : Vanguard S&P 500 UCITS ETF (USD) Accumulating | A2PFN2 | IE00BFMXXD54
  ter : 0.07% p.a.
  fund_size : EUR 33,371 m
  fund_size_ctx : Fund size EUR 33,371 m
  replication : Physical ( Full replication )
  dist : Accumulating
  dist_freq : -
  domicile : Ireland
  provider : Vanguard
  currency : USD
  inception : 14 May 2019
  holdings : 503
  index : None
  ucits : Yes
  listings_raw : None
##### IE00B3XXRP09
  title : Vanguard S&P 500 UCITS ETF (USD) Distributing | A1JX53 | IE00B3XXRP09
  ter : 0.07% p.a.
  fund_size : EUR 48,236 m
  fund_size_ctx : Fund size EUR 48,236 m
  replication : Physical ( Full replication )
  dist : Distributing
  dist_freq : Quarterly
  domicile : Ireland
  provider : Vanguard
  currency : USD
  inception : 22 May 2012
  holdings : 503
  index : None
  ucits : Yes
  listings_raw : None
##### IE000XZSV718
  title : State Street SPDR S&P 500 UCITS ETF USD Unhedged (Acc) | A3EUC1 | IE000XZSV718
  ter : 0.03% p.a.
  fund_size : EUR 17,596 m
  fund_size_ctx : Fund size EUR 17,596 m
  replication : Physical ( Fu
… [1514 more characters]
```
</details>

→ `Bash` — Locate listings table, index name, and dates in justETF text
```sh
cd [tmp] && t=je/IE00BFMXXD54.txt; grep -o 'Exchange Listing.\{0,800\}' $t | head -2; echo; grep -o '.\{0,100\}Index .\{0,200\}' $t | head -5; echo; grep -o -i 'as of.\{0,60\}' $t | head -5; grep -o 'Fund size.\{0,120\}' $t | head -3
```

<details><summary>result</summary>

```
ugrep: error: error at position 84
xbf][\x80-\xbf]*){0,200}
                        \___exceeds complexity limits



As of 31/08/2026 ETF Savings plan offers Here you can find inform
as of 10/2026. The offers are sorted in the following way: 1. Rat
as of 10/2026. The offers are sorted in the following way: 1. Rat
Fund size EUR 33,371 m Inception Date 14 May 2019 Holdings 503 Advertisement Overview Chart Basics Holdings Savings plan Order fe
Fund size EUR 33,371 m Total expense ratio 0.07% p.a. Replication Physical ( Full replication ) Legal structure ETF Investment ap
```
</details>

→ `Bash` — Inspect justETF text for listings and index
```sh
cd [tmp] && python3 - <<'EOF'
t=open('je/IE00BFMXXD54.txt').read()
import re
for kw in ['Stock exchange Trade currency','Listing','Investment strategy','The S&P 500','tracks the','As of 31/08/2026','Description']:
    for m in list(re.finditer(re.escape(kw),t))[:3]:
        print('--',kw,'@',m.start(),':',t[m.start()-80:m.start()+400]);
EOF
```

<details><summary>result</summary>

```
-- Listing @ 4118 : SD Currency risk Currency unhedged Volatility 1 year (in EUR) 12.70% Inception/ Listing Date 14 May 2019 Distribution policy Accumulating Distribution frequency - Fund domicile Ireland Fund Provider Vanguard Legal structure Fund Structure Open-ended Investment Company (OEIC) UCITS compliance Yes Administrator Brown Brother Harriman Fund Administration Services (Ireland) Limited Investment Advisor Vanguard Global Advisers, LLC Custodian Bank Brown Brothers Harriman Trustee Ser
-- Listing @ 11225 : ximum drawdown since inception -33.70% Rolling 1 year volatility Stock exchange Listings Listing Trade Currency Ticker Bloomberg / iNAV Bloomberg Code Reuters RIC / iNAV Reuters Market Maker gettex EUR VUAA - - - - - Bolsa Mexicana de Valores MXN - VUAAN MM VUAAN.MX Bolsa Mexicana de Valores USD - Borsa Italiana EUR VUAA IVUAAEUR Frankfurt Stock Exchange EUR - IVUAAEUR London Stock Exchange USD VUAA VUAA LN IVUAAUSD VUAA.L London Stock Exchange GBP VUAG VUAG LN IVUAAGBP VAVUA
-- Listing @ 11234 : wdown since inception -33.70% Rolling 1 year volatility Stock exchange Listings Listing Trade Currency Ticker Bloomberg / iNAV Bloomberg Code Reuters RIC / iNAV Reuters Market Maker gettex EUR VUAA - - - - - Bolsa Mexicana de Valores MXN - VUAAN MM VUAAN.MX Bolsa Mexicana de Valores USD - Borsa Italiana EUR VUAA IVUAAEUR Frankfurt Stock Exchange EUR - IVUAAEUR London Stock Exchange USD VUAA VUAA LN IVUAAUSD VUAA.L London Stock Exchange GBP VUAG VUAG LN IVUAAGBP VAVUAG.L X
… [2028 more characters]
```
</details>

→ `Bash` — Run justETF parser on all candidate ISINs
```sh
cd [tmp] && python3 - <<'EOF'
s=open('je.py').read()
s=s.replace("""      index=g(r'Index (?:Description|Methodology)?\\s*The (.{0,160}?) (?:tracks|offers|provides|includes|is)'),""","""      index=g(r'seeks to track the (.{0,120}?) index\\.'),""")
s=s.replace("""    m=t.find('Listing Stock exchange');
    if m<0: m=t.find('Stock exchange Trade currency')
    d['listings_raw']=t[m:m+900] if m>=0 else None""","""    m=t.find('Reuters Market Maker')
    seg=t[m:m+3000] if m>=0 else ''
    d['listings']=sorted(set('%s %s %s'%x for x in re.findall(r'(London Stock Exchange|XETRA|Euronext Amsterdam|Euronext Paris|Borsa Italiana|SIX Swiss Exchange|gettex|Prague Stock Exchange) (EUR|USD|GBP|GBX|CHF|CZK) (\\S+)',seg)))""")
open('je.py','w').write(s)
EOF
grep -n "index=\|listings" je.py; python3 je.py IE00B5BMR087 IE00BFMXXD54 IE00B3XXRP09 IE000XZSV718 IE00BK5BQT80 IE00B3RBWM25 IE0009A5ADV9 IE00B3YLTY66 IE00BKM4GZ66 IE00BK5BR733 IE00B3VVMM84 IE00B6YX5D40 IE00B8GKDB10 IE00BK5BR626 IE00B3F81409 IE00B579F325 IE00B4ND3602 DE000A0S9GB0 IE00B1FZSF77 IE00BJ38QD84 IE0032077012 IE00BFZXGZ54 IE00B53SL541 IE0006WW1TQ4 IE00B
… [46 more characters]
```

<details><summary>result</summary>

```
25:      index=g(r'seeks to track the (.{0,120}?) index\.'),
30:    d['listings']=sorted(set('%s %s %s'%x for x in re.findall(r'(London Stock Exchange|XETRA|Euronext Amsterdam|Euronext Paris|Borsa Italiana|SIX Swiss Exchange|gettex|Prague Stock Exchange) (EUR|USD|GBP|GBX|CHF|CZK) (\S+)',seg)))
##### IE00B5BMR087
  title : iShares Core S&P 500 UCITS ETF USD (Acc) | A0YEDG | IE00B5BMR087
  ter : 0.07% p.a.
  fund_size : EUR 141,385 m
  replication : Physical ( Full replication )
  dist : Accumulating
  dist_freq : -
  domicile : Ireland
  provider : iShares
  currency : USD
  inception : 19 May 2010
  holdings : 503
  index : S&P 500®
  listings : ['Borsa Italiana EUR CSSPX', 'Euronext Amsterdam EUR CSPX', 'London Stock Exchange GBP -', 'London Stock Exchange GBX CSP1', 'London Stock Exchange USD CSPX', 'SIX Swiss Exchange USD CSSPX', 'XETRA EUR SXR8', 'gettex EUR SXR8']
##### IE00BFMXXD54
  title : Vanguard S&P 500 UCITS ETF (USD) Accumulating | A2PFN2 | IE00BFMXXD54
  ter : 0.07% p.a.
  fund_size : EUR 33,371 m
  replication : Physical ( Full replication )
  dist : Accumulating
  dist_freq : -
  domicile : Ireland
  provider : Vanguard
  currency : USD
  inception : 14 May 2019
  holdings : 503
  index : S&P 500®
  listings : ['Borsa Italiana EUR VUAA', 'London Stock Exchange GBP VUAG', 'London Stock Exchange USD VUAA', 'XETRA EUR VUAA', 'gettex EUR VUAA']
##### IE00B3XXRP09
  title : Vanguard S&P 500 UCITS ETF (USD) Distributing | A1JX53 | IE00B3XXRP09
  ter : 0.07% p.a.
  f
… [12699 more characters]
```
</details>

→ `WebSearch` "iShares Core US Aggregate Bond UCITS ETF" ISIN

→ `WebSearch` UCITS ETF US total market small mid large "MSCI USA IMI" OR "Russell 3000" OR "S&P Total Market" ISIN justetf

<details><summary>result</summary>

```
Web search results for query: ""iShares Core US Aggregate Bond UCITS ETF" ISIN"

Links: [{"title":"Pensions & Investments Logo","url":"https://etf.pionline.com/fund/AGG"},{"title":"www.tbank.ru","url":"https://www.tbank.ru/invest/etfs/AGG/"},{"title":"ishares core global aggregate bond ucits etf ishares","url":"https://www.rankia.co/etfs/ishares-core-global-aggregate-bond-ucits-etf-ishares"},{"title":"(agg - ISHARES CORE US AGGREGATE BOND ETF)","url":"https://digital.fidelity.com/prgw/digital/research/quote/dashboard/summary?symbol=agg"},{"title":"www.finanzfluss.de","url":"https://www.finanzfluss.de/informer/etf/ie00bdfjym28/"},{"title":"iShares Core U.S. Aggregate Bond ETF • AGG","url":"https://wealthyhood.com/en/etfs/agg.nyse%20arca"},{"title":"agbp ishares core global aggregate bond ucits etf fund fact sheet en dk","url":"https://www.blackrock.com/gls-download/literature/fact-sheet/agbp-ishares-core-global-aggregate-bond-ucits-etf-fund-fact-sheet-en-dk.pdf"},{"title":"(AGG - ISHARES CORE US AGGREGATE BOND ETF)","url":"https://digital.fidelity.com/prgw/digital/research/quote/dashboard/summary?symbol=AGG"},{"title":"Jesteś w trybie podpowiedzi Wyłącz","url":"https://cbonds.pl/etf/51/"},{"title":"agbp ishares core global aggregate bond ucits etf fund fact sheet en gb","url":"https://blackrock.com/uk/literature/fact-sheet/agbp-ishares-core-global-aggregate-bond-ucits-etf-fund-fact-sheet-en-gb.pdf"}]

The search didn't confirm the ISIN for the UCITS fund you asked about. It mo
… [790 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "UCITS ETF US total market small mid large "MSCI USA IMI" OR "Russell 3000" OR "S&P Total Market" ISIN justetf"

Links: [{"title":"Baffled by ETFs? Chat with Selma to see what fits you best. 🤔","url":"https://app.selma.com/funds/spdr-russell-3000-us-total-market-ucits-etf-ie"},{"title":"iShares MSCI USA UCITS ETFiShares MSCI USA UCITS ETFiShares MSCI USA UCITS ETF","url":"https://www.tradingview.com/symbols/BMV-CSUS/N"},{"title":"Verwirrt vor lauter ETFs? Chatte mit Selma und finde heraus welche zu dir passen. 🤔","url":"https://app.selma.com/de/funds/spdr-russell-3000-us-total-market-ucits-etf-ie"},{"title":"23f1fc4e 2c27 4378 a8ba a8de015f5df0","url":"https://etf.dws.com/download/asset/23f1fc4e-2c27-4378-a8ba-a8de015f5df0"},{"title":"Top MSCI USA ETFs","url":"https://www.justetf.com/fr/how-to/msci-usa-etfs.html"},{"title":"1dab8815 684c 49b6 83c3 8653bf0e5fc9","url":"https://etf.dws.com/download/asset/1dab8815-684c-49b6-83c3-8653bf0e5fc9"},{"title":"www.tipranks.com","url":"https://www.tipranks.com/etf/ismcf"},{"title":"Baffled by ETFs? Chat with Selma to see what fits you best. 🤔","url":"https://app.selma.com/funds/ishares-msci-usa-ucits-etf"},{"title":"iShares MSCI USA UCITS ETFiShares MSCI USA UCITS ETFiShares MSCI USA UCITS ETF","url":"https://www.tradingview.com/symbols/BIVA-CSUS%2FN"},{"title":"www.tipranks.com","url":"https://www.tipranks.com/etf/nl:csus"}]

The search found UCITS funds tracking the Russell 3000 and MSCI USA, but nothing
… [1519 more characters]
```
</details>

→ `Bash` — Fetch justETF for Russell 3000, US Aggregate, Nasdaq 100 UCITS
```sh
cd [tmp] && rm -f je/IE00B53SL541.html; python3 je.py IE00BKY7WX37 IE00BDFJYM28 IE00B53SL541 2>&1 | grep -v "fund_size_ctx\|ucits"
```

<details><summary>result</summary>

```
##### IE00BKY7WX37
  title : SPDR Russell 3000 US Total Market UCITS ETF | A112AU | IE00BKY7WX37
  ter : 0.25% p.a.
  fund_size : EUR 4 m
  replication : Physical ( Optimized sampling )
  dist : Accumulating
  dist_freq : -
  domicile : Ireland
  provider : State Street
  currency : USD
  inception : 30 June 2014
  holdings : None
  index : Russell 3000®
  listings : []
##### IE00BDFJYM28
  title : iShares US Aggregate Bond UCITS ETF EUR Hedged (Acc) | A2JE32 | IE00BDFJYM28
  ter : 0.30% p.a.
  fund_size : EUR 343 m
  replication : Physical ( Sampling )
  dist : Accumulating
  dist_freq : -
  domicile : Ireland
  provider : iShares
  currency : EUR
  inception : 10 April 2018
  holdings : 9,580
  index : Bloomberg US Aggregate Bond (EUR Hedged)
  listings : ['London Stock Exchange EUR IUAE', 'gettex EUR EUNE']
##### IE00B53SL541
  title : ETF Screener | justETF
  ter : None
  fund_size : None
  replication : Method
  dist : None
  dist_freq : None
  domicile : Replication
  provider : None
  currency : None
  inception : None
  holdings : None
  index : None
  listings : []
```
</details>

→ `Bash` — Find related share-class ISINs on justETF page
```sh
cd [tmp] && grep -o 'IE00[A-Z0-9]\{8\}' je/IE00BDFJYM28.html | sort | uniq -c | sort -rn | head; grep -o 'IE00[A-Z0-9]\{8\}' je/IE00B5BMR087.html | sort | uniq -c | sort -rn | head -3
```

<details><summary>result</summary>

```
  95 IE00BDFJYM28
   3 IE00093SKUY4
   1 IE00BK8MB266
  95 IE00B5BMR087
   3 IE00BFMXXD54
   3 IE00B6YX5C33
```
</details>

→ `WebSearch` "iShares US Aggregate Bond UCITS ETF" USD Dist ISIN IUAG

→ `WebSearch` iShares Nasdaq 100 UCITS ETF USD Acc ISIN CNDX SXRV

<details><summary>result</summary>

```
Web search results for query: ""iShares US Aggregate Bond UCITS ETF" USD Dist ISIN IUAG"

Links: [{"title":"iShares US Aggregate Bond UCITS ETF","url":"https://www.roic.ai/quote/IUAG.L"},{"title":"Cotations iShares US Aggregate Bond UCITS ETF (Dist) - USD","url":"https://ch.zonebourse.com/cours/etf/ISHARES-US-AGGREGATE-BOND-50425061/cotations/"},{"title":"Cotations iShares US Aggregate Bond UCITS ETF (Dist) - USD","url":"https://ch.zonebourse.com/cours/etf/ISHARES-US-AGGREGATE-BOND-28622066/cotations/"},{"title":"Hinweis-Modus ist eingeschaltet Ausschalten","url":"https://cbonds.de/etf/4041/"},{"title":"Le mode conseil est activé Arrêter","url":"https://cbonds.fr/etf/4041/"},{"title":"Hint mode is switched on Switch off","url":"https://cbonds.com/etf/4041/"},{"title":"iShares US Aggregate Bond UCITS ETF USD (Dist)IUAG","url":"https://wealthyhood.com/en/etfs/iuag.lse/"},{"title":"Cotations iShares US Aggregate Bond UCITS ETF (Acc) - USD","url":"https://zonebourse.com/cours/etf/ISHARES-US-AGGREGATE-BOND-34602497/cotations"},{"title":"Está en modo consejo Apagar","url":"https://cbonds.es/etf/4041/"}]

The ticker IUAG is listed under ISIN **IE00B44CGS96**, not "IUAG," which is the exchange ticker. "IUAG" is not an ISIN.

- **Fund:** iShares US Aggregate Bond UCITS ETF USD (Dist) (IUAG.L) is an exchange-traded fund that seeks to track the investment performance of the Bloomberg US Aggregate Bond Index before fees and expenses.
- **Holdings and domicile:** The fund is domiciled in
… [848 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "iShares Nasdaq 100 UCITS ETF USD Acc ISIN CNDX SXRV"

Links: [{"title":"csndx ishares nasdaq 100 ucits etf fund fact sheet es es","url":"https://www.blackrock.com/es/profesionales/literature/fact-sheet/csndx-ishares-nasdaq-100-ucits-etf-fund-fact-sheet-es-es.pdf"},{"title":"Baffled by ETFs? Chat with Selma to see what fits you best. 🤔","url":"https://app.selma.com/funds/ishares-nasdaq-100-ucits-etf"},{"title":"csndx ishares nasdaq 100 ucits etf fund fact sheet en ch.pdf","url":"https://www.ishares.com/ch/individual/en/literature/fact-sheet/csndx-ishares-nasdaq-100-ucits-etf-fund-fact-sheet-en-ch.pdf"},{"title":"csndx ishares nasdaq 100 ucits etf fund fact sheet en ch","url":"https://www.ishares.com/ch/professionelle-anleger/de/literature/fact-sheet/csndx-ishares-nasdaq-100-ucits-etf-fund-fact-sheet-en-ch.pdf"},{"title":"csndx ishares nasdaq 100 ucits etf fund fact sheet fr ch","url":"https://www.ishares.com/ch/professionelle-anleger/de/literature/fact-sheet/csndx-ishares-nasdaq-100-ucits-etf-fund-fact-sheet-fr-ch.pdf"},{"title":"iShares VII plc (CNDX) NASDAQ 100 UCITS ETF Acc","url":"https://www.hl.co.uk/shares/shares-search-results/i/ishares-nasdaq-100-ucits-etf-acc/company-information"},{"title":"iShares NASDAQ 100 UCITS ETF USD (Acc)SXRV","url":"https://wealthyhood.com/en/etfs/sxrv.xetra/"},{"title":"www.blackrock.com","url":"https://www.blackrock.com/uk/intermediaries/products/253741/"},{"title":"iShares NASDAQ 100 UCITS ETF USD (Acc)CNDX","
… [1111 more characters]
```
</details>

→ `Bash` — Fetch justETF for US Aggregate, Nasdaq 100 iShares, MSCI World
```sh
cd [tmp] && python3 je.py IE00B44CGS96 IE00B53SZB19 IE00B4L5Y983 2>&1 | grep -v "fund_size_ctx\|ucits"
```

<details><summary>result</summary>

```
##### IE00B44CGS96
  title : iShares US Aggregate Bond UCITS ETF (Dist) | A1JKDK | IE00B44CGS96
  ter : 0.25% p.a.
  fund_size : EUR 1,054 m
  replication : Physical ( Sampling )
  dist : Distributing
  dist_freq : Semi annually
  domicile : Ireland
  provider : iShares
  currency : USD
  inception : 13 September 2011
  holdings : 9,580
  index : Bloomberg US Aggregate Bond
  listings : ['London Stock Exchange GBP SUAG', 'London Stock Exchange USD IUAG', 'SIX Swiss Exchange USD IUAG', 'XETRA EUR EUNX', 'gettex EUR EUNX']
##### IE00B53SZB19
  title : iShares Nasdaq 100 UCITS ETF (Acc) | A0YEDL | IE00B53SZB19
  ter : 0.30% p.a.
  fund_size : EUR 26,969 m
  replication : Physical ( Full replication )
  dist : Accumulating
  dist_freq : -
  domicile : Ireland
  provider : iShares
  currency : USD
  inception : 26 January 2010
  holdings : 103
  index : Nasdaq 100®
  listings : ['Borsa Italiana EUR CSNDX', 'Euronext Amsterdam EUR CNDX', 'London Stock Exchange GBP -', 'London Stock Exchange GBX CNX1', 'London Stock Exchange USD CNDX', 'SIX Swiss Exchange USD CSNDX', 'XETRA EUR SXRV', 'gettex EUR SXRV']
##### IE00B4L5Y983
  title : iShares Core MSCI World UCITS ETF USD (Acc) | A0RPWH | IE00B4L5Y983
  ter : 0.20% p.a.
  fund_size : EUR 133,406 m
  replication : Physical ( Optimized sampling )
  dist : Accumulating
  dist_freq : -
  domicile : Ireland
  provider : iShares
  currency : USD
  inception : 25 September 2009
  holdings : 1,252
  index : MSCI World
  listings : ['Borsa Ital
… [216 more characters]
```
</details>

→ `WebSearch` časový test cenné papíry 3 roky limit 40 milionů Kč od 2025 osvobození 100 000 Kč příjmy z prodeje financnisprava

→ `WebSearch` zdanění dividend z USA W-8BEN 15 % srážková daň zápočet daňové přiznání Česko 2026

<details><summary>result</summary>

```
Web search results for query: "zdanění dividend z USA W-8BEN 15 % srážková daň zápočet daňové přiznání Česko 2026"

Links: [{"title":"w 8ben formular","url":"https://finex.cz/w-8ben-formular/"},{"title":"Sazby srazkovych dani na dividendove prijmy","url":"https://cdn.patria.cz/Sazby-srazkovych-dani-na-dividendove-prijmy.pdf"},{"title":"EY Form W8 BEN E Instructions CZECH","url":"https://www.citi.com/tts/sa/taxinitiatives/docs/tax-forms/EY-Form-W8-BEN-E-Instructions-CZECH.pdf"},{"title":"W8BEN informace CZ","url":"https://www.fio.cz/docs/cz/W8BEN_informace_CZ.pdf"},{"title":"EY Form W 8BEN E CZECH","url":"https://www.citi.com/tts/sa/taxinitiatives/docs/tax-forms/EY-Form-W-8BEN-E-CZECH.pdf"},{"title":"XTB nově klientům umožní snížení daně z amerických dividend o polovinu","url":"https://www.e15.cz/byznys/e15-a-byznys/xtb-nove-klientum-umozni-snizeni-dane-z-americkych-dividend-o-polovinu-1387322"},{"title":"zdaneni dividend jak postupovat pri vyplneni danoveho priznani","url":"https://finex.cz/zdaneni-dividend-jak-postupovat-pri-vyplneni-danoveho-priznani/"},{"title":"Zdanění dividend z USA: akcie zdaněné srážkovou daní","url":"https://www.dauc.cz/detail-otazky/54273/zdaneni-dividend-z-usa-akcie-zdanene-srazkovou-dani"},{"title":"XTB po novom klientom umožní zníženie dane z amerických dividend o polovicu","url":"https://sita.sk/xtb-po-novom-klientom-umozni-znizenie-dane-z-americkych-dividend-o-polovicu/"}]

Výsledky potvrzují základ věci, ale konkrétní postup zápočtu v českém da
… [1977 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "časový test cenné papíry 3 roky limit 40 milionů Kč od 2025 osvobození 100 000 Kč příjmy z prodeje financnisprava"

Links: [{"title":"Přeskočit na obsah","url":"https://arws.cz/novinky-v-arrows/jak-se-od-roku-2026-opet-meni-daneni-prijmu-z-prevodu-podilu-v-s-r-o-a-prodeje-akcii"},{"title":"zmena u investic","url":"https://www.crowe.com/cz/cs-cz/news/zmena-v-limitech-pro-osvobozeni-u-investic"},{"title":"vycházející slunce na poli","url":"https://www.ey.com/cs_cz/insights/tax/danove-a-pravni-zpravy-listopad-2024"},{"title":"ey danove a pravni zpravy listopad 2024","url":"https://www.ey.com/content/dam/ey-unified-site/ey-com/cs-cz/insights/tax/documents/ey-danove-a-pravni-zpravy-listopad-2024.pdf"},{"title":"casovy test osvobozen","url":"https://rulecalc.com/de/steuern/casovy-test-osvobozen"},{"title":"casovy test osvobozen","url":"https://rulecalc.com/cs/dan/casovy-test-osvobozen"},{"title":"Od ledna platí nový limit pro zdanění příjmů z obchodování s cennými papíry a podíly v obchodních korporacích","url":"https://www.e15.cz/finexpert/danove-priznani/od-ledna-plati-novy-limit-pro-zdaneni-prijmu-z-obchodovani-s-cennymi-papiry-a-podily-v-obchodnich-korporacich-1423019"},{"title":"novy limit pro zdaneni prijmu z obchodovani","url":"https://www.forvismazars.com/cz/cs/prehledy/forvis-mazars-v-mediich/archiv-2025/novy-limit-pro-zdaneni-prijmu-z-obchodovani"},{"title":"neosvobozeni prijmu fyzickych osob z prodeju cennych papiru a podilu v obchodnich ko
… [2221 more characters]
```
</details>

→ `WebFetch` https://arws.cz/novinky-v-arrows/jak-se-od-roku-2026-opet-meni-daneni-prijmu-z-prevodu-podilu-v-s-r-o-a-prodeje-akcii

→ `WebFetch` https://www.crowe.com/cz/cs-cz/news/zmena-v-limitech-pro-osvobozeni-u-investic

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

<details><summary>result</summary>

```
**Short answer:** The page does not give the statute number or effective date for the 2026 abolition of the 40 million CZK limit for shares and business interests. It only says the limit was abolished from 1 January 2026.

**Article date:** Published 7 April 2026, updated 14 August 2026.

**1. The 40 million CZK limit**
- It was introduced for 2025 by the consolidation package: "Od 1. ledna 2025 byl konsolidačním balíčkem zaveden strop" (the article's text continues the sentence).
- For shares and business interests it was abolished from 1 January 2026: "limit 40 milionů korun pro obchodní podíly a akcie bude k 1. 1. 2026 zrušen."
- The page does not give a Sb. number for either the 2025 introduction or the 2026 abolition.

**2. Listed securities and ETF units**
- The page says the abolition covers shares ("akcie") and business interests ("podíly"). Under the article, the time test is 3 years for shares and 5 years for business interests.
- It does not mention ETF units or otherwise address listed securities beyond shares. I can't confirm their treatment from this page.

**3. Crypto**
- The 40 million CZK limit still applies: "Na kryptoaktiva se vztahuje limit 40 milionů korun pro osvobození – ten pro ně zůstal zachován."
- The crypto time test came from the law the article cites: "Časový test pro kryptoaktiva byl zaveden zákonem č. 32/2025 Sb. s účinností od 15. 2. 2025."
- The article describes the crypto time test as three years.

**4. The 100,000 CZK value test**
- For se
… [714 more characters]
```
</details>

→ `Bash` — Download Czech Income Tax Act and search exemption provisions
```sh
cd [tmp] && mkdir -p cz && curl -s -m 60 -L -A "Mozilla/5.0 (Macintosh)" "https://www.zakonyprolidi.cz/cs/1992-586" -o cz/zdp.html -w "%{http_code}\n"; wc -c cz/zdp.html; python3 - <<'EOF'
import re,html
s=open('cz/zdp.html',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S);t=html.unescape(re.sub(r'<[^>]+>',' ',t));t=re.sub(r'\s+',' ',t)
open('cz/zdp.txt','w').write(t)
m=re.search(r'Znění (?:od|ke dni)[^.]{0,60}',t); print(m.group(0) if m else 'no version')
for kw in ['příjem z prodeje cenného papíru','40 000 000','100 000 Kč','nepřesáhne 100 000']:
    for mm in list(re.finditer(re.escape(kw),t))[:4]:
        print('---',kw,':',t[mm.start()-500:mm.start()+400])
EOF
```

<details><summary>result</summary>

```
200
 1319515 cz/zdp.html
no version
--- příjem z prodeje cenného papíru :  na družstvu, a to jen do výše příjmů z prodeje této akcie, tohoto kmenového listu nebo tohoto podílu; toto omezení se nepoužije u cenného papíru, který není podle právních předpisů upravujících účetnictví oceňován reálnou hodnotou pouze z toho důvodu, že poplatník daně z příjmů právnických osob je mikro účetní jednotkou podle právních předpisů upravujících účetnictví, nebo daňovým nerezidentem, který je povinen podle právního řádu státu, podle kterého je založen nebo zřízen, vést účetnictví, a příjem z prodeje cenného papíru není přičitatelný jeho stálé provozovně na území České republiky, x) paušální částky hrazené zaměstnavatelem zaměstnanci podle § 6 odst. 8, y) u poplatníků, kteří vedou účetnictví, jmenovitá hodnota pohledávky nebo pořizovací cena pohledávky nabyté postoupením, vkladem a při přeměně obchodní korporace, 131 ) a to za předpokladu, že lze k této pohledávce uplatňovat o
```
</details>

→ `Bash` — Search Income Tax Act text for time test and limits
```sh
cd [tmp] && python3 - <<'EOF'
import re
t=open('cz/zdp.txt').read()
for kw in ['doba mezi nabytím a převodem','3 roky','40 000 000 Kč','100 000 Kč','Účinnost','Aktuální znění','znění od']:
    hits=list(re.finditer(re.escape(kw),t))
    print('=====',kw,len(hits))
    for mm in hits[:3]:
        print('   ...',t[max(0,mm.start()-350):mm.start()+350])
EOF
```

<details><summary>result</summary>

```
===== doba mezi nabytím a převodem 0
===== 3 roky 6
   ... lifikovaným zaměstnavatelem kvalifikovanému zaměstnanci, b) který je poskytnutý na základě písemné smlouvy, který opravňuje kvalifikovaného zaměstnance nabýt kvalifikovaný obchodní podíl za sjednanou opční cenu, c) jehož poskytnutí bude oznámeno správci daně podle odstavce 8, d) podle kterého může být kvalifikovaný obchodní podíl nabyt nejdříve za 3 roky od data poskytnutí příslibu kvalifikovanému zaměstnanci nebo za dobu kratší, pokud k uplatnění nebo finančnímu vypořádání kvalifikované opce dochází v přímé souvislosti s převodem nebo přechodem nejméně 67 % podílu na základním kapitálu kvalifikovaného zaměstnavatele nebo přímo ovládající osoby kvalifikovaného zaměstnavatele mající na něm k
   ... splnění technických funkcí a povinností stanovených zvláštními právními předpisy pro užívání. § 27 Hmotným majetkem vyloučeným z odpisování je a) bezúplatně převedený majetek podle smlouvy o finančním leasingu, pokud výdaje (náklady) související s jeho pořízením nepřevýší 80 000 Kč, b) pěstitelský celek trvalých porostů s dobou plodnosti delší než 3 roky, jež nedosáhl plodonosného stáří, c) hydromeliorace do 2 let po jejím dokončení, d) umělecké dílo, které je hmotným majetkem a není součástí stavby a budovy, předměty muzejní a galerijní hodnoty, popřípadě jejich soubory v muzeích a památkových objektech, stálé výstavní soubory a knihovní fondy knihoven jednotné soustavy, popřípadě jiné fond
   ... bí nebo v období, za něž
… [2897 more characters]
```
</details>

→ `Bash` — Search Income Tax Act for § 4b/4c and thresholds
```sh
cd [tmp] && python3 - <<'EOF'
import re
t=open('cz/zdp.txt').read()
for pat in [r'§ 4b', r'§ 4c', r'§ 4d',r'100 ?000 ?Kč',r'40 ?000 ?000',r'3 let']:
    hits=list(re.finditer(pat,t))
    print('=====',pat,len(hits))
    for mm in hits[:4]:
        print('   ...',t[max(0,mm.start()-200):mm.start()+600].replace('\xa0',' '))
EOF
```

<details><summary>result</summary>

```
===== § 4b 19
   ... u dobu zakázán podmínkami poskytnutí dotace podle bodu 1 a jedná se o první převod po uplynutí této doby s tím, že tento převod slouží k tomu, aby tato nemovitá věc byla ve vlastnictví fyzické osoby. § 4b Bytová potřeba (1) Bytovou potřebou se pro účely daní z příjmů rozumí a) výstavba bytového domu, rodinného domu, jednotky, která nezahrnuje nebytový prostor jiný než garáž, sklep nebo komoru, a změna stavby, b) úplatné nabytí pozemku 1. za předpokladu, že na pozemku bude zahájena výstavba bytové potřeby podle písmene a) do 4 let od okamžiku nabytí pozemku, nebo 2. v souvislosti s pořízením bytové potřeby uvedené v písmenu c), c) úplatné nabytí 1. bytového domu, 2. rodinného domu, 3. rozestavěné stavby bytového domu nebo rodinného domu, 4. jednotky, která nezahrnuje nebytový prostor jiný n
   ... , že účastníky smlouvy o úvěru na financování bytové potřeby je více zletilých osob, uplatní odpočet buď jedna z nich, anebo každá z nich, a to rovným dílem. Jde-li o předmět bytové potřeby uvedený v § 4b odst. 1 písm. a) až c) a e), může být základ daně snížen pouze ve zdaňovacím období, po jehož celou dobu poplatník předmět bytové potřeby uvedený v § 4b odst. 1 písm. a) až c) vlastnil a předmět bytové potřeby uvedený v § 4b odst. 1 písm. a), c) a e) užíval k vlastnímu trvalému bydlení nebo trvalému bydlení druhého z manželů, potomků, rodičů nebo prarodičů obou manželů a v případě výstavby, změny stavby nebo koupě rozestavěné stavby užíval předmět bytové potřeby
… [9908 more characters]
```
</details>

→ `WebSearch` zrušení limitu 40 milionů osvobození cenné papíry od 1. 1. 2026 zákon č. Sb. novela daní z příjmů

<details><summary>result</summary>

```
Web search results for query: "zrušení limitu 40 milionů osvobození cenné papíry od 1. 1. 2026 zákon č. Sb. novela daní z příjmů"

Links: [{"title":"Doprovodný zákon k JMHZ: Klíčové změny v zákoně o daních z příjmů","url":"https://www.forvismazars.com/cz/cs/prehledy/newslettery/newslettery-z-danove-oblasti/forvis-mazars-tax-view-archiv/doprovodny-zakon-k-jmhz-klicove-zmeny"},{"title":"Informace pro účetní a podnikatele","url":"https://portal.pohoda.cz/rychle-zpravy/nove-zdaneni-prijmu-z-prodeje-cennych-papiru-od-2026/"},{"title":"Informace pro účetní a podnikatele","url":"https://portal.pohoda.cz/?p=36552"},{"title":"prehled zmen ve zdaneni fo dle zakona c 360 2025 sb","url":"https://www.dauc.cz/clanky/16039/prehled-zmen-ve-zdaneni-fo-dle-zakona-c-360-2025-sb"},{"title":"Přeskočit na obsah","url":"https://arws.cz/novinky-v-arrows/dppo-a-dpfo-chystane-novely-v-roce-2026"},{"title":"Nejnavštěvovanější odborný web","url":"https://www.tzb-info.cz/29342-prehled-vybranych-legislativnich-zmen-pro-podnikatele-od-1-1-2026"},{"title":"Ministerstvo financí logo, na hlavní stránku","url":"https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2025/zmeny-v-daneni-prodeje-podilu-ve-firmach-a-akcii-a-61234"},{"title":"zmena u investic","url":"https://www.crowe.com/cz/cs-cz/news/zmena-v-limitech-pro-osvobozeni-u-investic"},{"title":"Informace pro účetní a podnikatele","url":"https://portal.pohoda.cz/dane-ucetnictvi-mzdy/dan-z-prijmu/zmeny-v-osvobozeni-prijmu-z-prodeje-cennych-papiru-a-obchod
… [1641 more characters]
```
</details>

→ `Bash` — Check reporting duty and separate tax base provisions
```sh
cd [tmp] && python3 - <<'EOF'
import re
t=open('cz/zdp.txt').read()
for pat in [r'5000000 Kč',r'§ 38v Oznamování osvobozených příjmů',r'§ 16a']:
    for mm in list(re.finditer(pat,t))[:2]:
        print('==',pat,':',t[max(0,mm.start()-300):mm.start()+500])
EOF
```

<details><summary>result</summary>

```
== 5000000 Kč : ní podáno, bez ohledu na to, zda již uplynula lhůta pro stanovení daně. Díl 6 Zvláštní postupy pro prokázání příjmů § 38v Oznámení o osvobozených příjmech fyzických osob (1) Pokud poplatník daně z příjmů fyzických osob obdrží příjem, který je od daně z příjmů fyzických osob osvobozen a je vyšší než 5000000 Kč, je povinen oznámit správci daně tuto skutečnost do konce lhůty pro podání daňového přiznání za zdaňovací období, ve kterém příjem obdržel. (2) V oznámení podle odstavce 1 poplatník uvede a) výši příjmu, b) popis okolností nabytí příjmu, c) datum, kdy příjem vznikl. (3) Odstavec 1 se nevztahuje na příjem, o němž může údaje podle odstavce 2 správce daně zjistit z rejstříků či evidencí, do kterých má přístup a které zveřejní na úřední desce a způsobem umožňujícím dálkový přístup. (4) Zj
== 5000000 Kč : daně odpovídají nárůstu jeho jmění, spotřebě nebo jinému vydání, a nejsou mu známy skutečnosti, které by nárůst jmění, spotřebu nebo jiné vydání ozřejmovaly, a b) po předběžném posouzení dojde k závěru, že rozdíl mezi těmito příjmy a nárůstem jmění, spotřebou nebo jiným vydáním poplatníka přesahuje 5000000 Kč. (2) Správce daně ve výzvě k prokázání příjmů uvede své pochybnosti způsobem, který umožňuje poplatníkovi, aby se k nim vyjádřil a předložil důkazní prostředky tak, aby došlo k odstranění těchto pochybností. (3) Ve výzvě k prokázání příjmů správce daně a) určí rozhodné období pro posouzení vztahu příjmů poplatníka k nárůstu jeho jmění, spotřebě nebo jiné
… [1757 more characters]
```
</details>

→ `Bash` — Find § 16a tax rate text
```sh
cd [tmp] && python3 - <<'EOF'
import re
t=open('cz/zdp.txt').read()
for mm in list(re.finditer(r'§ 16a Sazba',t))[:1]:
    print(t[mm.start():mm.start()+500])
for mm in list(re.finditer(r'Sazba daně činí 15 %',t))[:3]:
    print('--',t[mm.start()-200:mm.start()+300])
EOF
```

<details><summary>result</summary>

```
§ 16a Sazba a výpočet daně pro samostatný základ daně (1) Sazba daně pro samostatný základ daně činí 15 %. (2) Daň se vypočte jako součin samostatného základu daně zaokrouhleného na celá sta Kč dolů a sazby daně pro tento základ daně. § 16ab Výpočet daně (1) Daň poplatníka se vypočte jako součet daně podle § 16 snížené o slevy na dani a daně podle § 16a. (2) Pokud je daňový bonus podle § 35c odst. 3 vyšší nebo roven dani podle § 16a, sníží se o tuto daň daňový bonus a daň poplatníka se rovná nul
```
</details>

→ `Bash` — Fetch Czech-US double tax treaty Article 10
```sh
cd [tmp] && curl -s -m 60 -L -A "Mozilla/5.0 (Macintosh)" "https://www.zakonyprolidi.cz/cs/1994-32" -o cz/smlouva_usa.html -w "%{http_code}\n"; python3 - <<'EOF'
import re,html
s=open('cz/smlouva_usa.html',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S);t=html.unescape(re.sub(r'<[^>]+>',' ',t));t=re.sub(r'\s+',' ',t)
i=t.find('Sdělení'); print(t[i:i+300])
i=t.find('Článek 10'); print(t[i:i+1200])
EOF
```

<details><summary>result</summary>

```
200
Sdělení č. 32/1994 Sb. Sdělení Ministerstva zahraničních věcí o sjednání Smlouvy mezi Českou republikou a Spojenými státy americkými o zamezení dvojího zdanění a zabránění daňovému úniku v oboru daní z příjmů a majetku Datum vyhlášení 15.02.1994 Uzavření smlouvy 16.09.1993 Ratifikace Smlouvy 23.12.1
Článek 10 DIVIDENDY 1. Dividendy vyplácené společností, která je rezidentem v jednom smluvním státě, osobě, která je rezidentem v druhém smluvním státě, mohou být zdaněny v tomto druhém státě. 2. Tyto dividendy však mohou být rovněž zdaněny ve smluvním státě, v němž je společnost, která je vyplácí, rezidentem, a to podle právních předpisů tohoto státu, avšak jestliže příjemce, který je skutečným vlastníkem dividend, je rezidentem druhého smluvního státu, daň takto stanovená nepřesáhne: a) 5 % hrubé částky dividend, jestliže skutečným vlastníkem je společnost, která vlastní nejméně 10 % podílů s hlasovacím právem na společnosti vyplácející dividendy; b) 15 % hrubé částky dividend ve všech ostatních případech. Tento odstavec se nedotkne zdanění zisků společnosti, ze kterých jsou dividendy vypláceny. 3. Pododstavec a) odstavce 2 se nepoužije v případě dividend, které vyplácí United State Regulated Investment Company nebo Real Estate Investment Trust. Pododstavec b) odstavce 2 se použije v případě dividend vyplácených společností Regulated Investment Company. V případě dividend vyplácených společností Real Estate Investment Trust se pododstavec b) odstavce 2 použije, jestliže skut
… [4 more characters]
```
</details>

→ `WebFetch` https://www.irs.gov/individuals/international-taxpayers/some-nonresidents-with-us-assets-must-file-estate-tax-returns

→ `WebFetch` https://www.irs.gov/businesses/small-businesses-self-employed/estate-gift-tax-treaties-international

→ `WebFetch` https://www.irs.gov/individuals/international-taxpayers/nra-withholding

<details><summary>result</summary>

```
The page lists these 15 countries:

1. Australia (estate and gift)
2. Austria (estate and gift)
3. Canada (estate only; the provisions are in Article XXIX B of the U.S.-Canada Income Tax Treaty)
4. Denmark (estate and gift)
5. Finland (estate only)
6. France (estate and gift)
7. Germany (estate and gift)
8. Greece (estate only)
9. Ireland (estate only)
10. Italy (estate only)
11. Japan (estate and gift)
12. Netherlands (estate only)
13. South Africa (estate only)
14. Switzerland (estate only)
15. United Kingdom (estate and gift)

Czech Republic is not on the list.

The page says "Page Last Reviewed or Updated: 08-Sep-2026."
```
</details>

<details><summary>result</summary>

```
**Filing threshold for nonresident non-citizens:** The executor must file Form 706-NA when "the fair market value at death of the decedent's U.S.-situated assets exceeds $60,000."

**U.S.-situs assets:** The page lists "Stock of corporations organized in or under U.S. law" as an example of assets subject to estate tax. Shares in U.S.-incorporated companies still count if the decedent held the certificates abroad or through a nominee.

**Treaties:** The page notes that "Estate tax treaties between the U.S. and other countries often provide more favorable tax treatment," and executors should check any applicable treaty.

**Last reviewed/updated:** "Page Last Reviewed or Updated: 27-Jun-2026"
```
</details>

<details><summary>result</summary>

```
The IRS page says that "Most types of U.S. source income received by a foreign person are subject to U.S. tax of 30%." It adds that "A reduced rate, including exemption, may apply" under an Internal Revenue Code section or a tax treaty. The page does not use the phrase "nonresident aliens" or "FDAP" in that statement. It says payments to all foreign persons, including nonresident alien individuals, may be subject to NRA withholding.

Form W-8BEN is mentioned under "Forms to be used," where the page lists "Form W-8BEN, Certificate of Foreign Status of Beneficial Owner for United States Tax Withholding." The page says the form a foreign person uses depends on the type of certification being made.

The page was last reviewed or updated on 14-Mar-2026.
```
</details>

→ `WebFetch` https://www.irs.gov/businesses/small-businesses-self-employed/frequently-asked-questions-on-estate-taxes-for-nonresidents-not-citizens-of-the-united-states

<details><summary>result</summary>

```
- **Unified credit for nonresident estates ($13,000):** Not stated on this page. It mentions a pro-rata unified credit under a treaty but gives no dollar amount.
- **Effective exemption ($60,000):** The page says the estate need not file or pay if U.S.-situated assets plus adjusted taxable gifts "do not exceed $60,000."
- **Tax rates and maximum rate:** Not stated on this page.
- **Whether U.S. mutual funds or RICs are U.S.-situs:** Not addressed. The page lists U.S. marketable securities as includible intangible property, but it does not mention mutual funds or RICs.
- **Page last reviewed date:** "Page Last Reviewed or Updated: 20-Sep-2026"
```
</details>

→ `WebFetch` https://www.irs.gov/instructions/i706na

<details><summary>result</summary>

```
**Unified credit:** The maximum is $13,000. The page says, "In general, the maximum unified credit is $13,000." Citizens of U.S. territories have a different maximum, and treaties can affect the credit.

**Table A top rate:** The page doesn't state the 40% rate over $1,000,000. It only directs filers to "Table A—Unified Rate Schedule" in the Instructions for Form 706 that match the decedent's date of death. I can't confirm the rate from this content.

**RIC shares:** Partly. For an NRNC decedent who died after 2004 and before 2012, the page says "a portion of stock in a RIC is treated as property located outside the United States." That portion is based on the RIC's qualifying assets relative to its total assets at the end of the quarter before death. The remainder is therefore treated as U.S.-situs. The page doesn't address mutual funds generally or deaths outside that period.

**Revision date:** The instructions are revised 09/2025. The page was last reviewed or updated on 30-Apr-2026.
```
</details>

→ `Bash` — Fetch Form 706 instructions Table A rate schedule
```sh
cd [tmp] && curl -s -m 60 -L -A "Mozilla/5.0" "https://www.irs.gov/instructions/i706" -o i706.html -w "%{http_code}\n"; python3 - <<'EOF'
import re,html
s=open('i706.html',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S);t=html.unescape(re.sub(r'<[^>]+>',' ',t));t=re.sub(r'\s+',' ',t)
i=t.find('Table A');
for m in list(re.finditer('Unified Rate Schedule',t))[:3]: print(t[m.start():m.start()+900]); print('----')
m=re.search(r'Page Last Reviewed or Updated: [^ ]+',t); print(m.group(0) if m else '')
m=re.search(r'Revised: [^ ]+ ?[^ ]*',t); print(m.group(0) if m else '')
EOF
```

<details><summary>result</summary>

```
200
Unified Rate Schedule Line 1 Line 3b. State Death Tax Deduction Note: Line 6 Lines 4 and 7 Taxable Gift Amount Table How to Complete the Line 7 Worksheet Caution: Table of Basic Exclusion Amounts Worksheet TG—Taxable Gifts Reconciliation Line 7 Worksheet—Submit a copy with Form 706 Note: Special treatment of split gifts. Lines 9a Through 9e. Applicable Credit Amount (Formerly Unified Credit Amount) Line 9a, basic exclusion amount. Line 9b, DSUE. Line 9c, restored exclusion amount. Lines 9d and 9e, applicable exclusion and credit amount. Line 10. Adjustment to Applicable Credit Note: Line 13 Line 14 Line 15 Line 16 Line 22. Tax Due Making a Payment EFTPS. Same-day wire. Paying by check. Paying by cash. Line 23. Overpayment Line 23a Line 23b Line 23c Line 23d Signature(s) Caution: Paid Preparer Use Only Part III—Elections by the Executor Line 1. Alternate Valuation Tip: Interest. Rent. Div
----
Unified Rate Schedule Column A Taxable amount over Column B Taxable amount not over Column C Tax on amount in column A Column D Rate of tax on excess over amount in column A $0 $10,000 $0 18% 10,000 20,000 1,800 20% 20,000 40,000 3,800 22% 40,000 60,000 8,200 24% 60,000 80,000 13,000 26% 80,000 100,000 18,200 28% 100,000 150,000 23,800 30% 150,000 250,000 38,800 32% 250,000 500,000 70,800 34% 500,000 750,000 155,800 37% 750,000 1,000,000 248,300 39% 1,000,000 – – – – 345,800 40% Line 1 If you elected alternate valuation on Part III, line 1, enter the amount you entered in the “Altern
… [1294 more characters]
```
</details>

→ `WebSearch` justetf withholding tax Irish domiciled ETF US dividends 15% treaty Ireland Luxembourg 30%

<details><summary>result</summary>

```
Web search results for query: "justetf withholding tax Irish domiciled ETF US dividends 15% treaty Ireland Luxembourg 30%"

Links: [{"title":"US-Domiciled ETFs Vs Ireland-Domiciled (UCITS) ETFs: Which Is Better For Singapore Investors?","url":"https://www.poems.com.sg/etf/articles/us-domiciled-etfs-vs-ireland-domiciled-ucits-etfs-which-is-better-for-singapore-investors/"},{"title":"Non-Diversifiable Risk","url":"https://www.poems.com.sg/glossary/investment/non-diversifiable-risk/"},{"title":"Easy (But Boring) Money: How To Reduce ETF Dividend Withholding Tax?","url":"https://www.bankeronwheels.com/how-to-reduce-etf-withholding-tax/"},{"title":"dividend withholding tax on irish ucits","url":"https://paasa.com/blog/dividend-withholding-tax-on-irish-ucits"},{"title":"us withholding tax irish funds","url":"https://incomeshares.com/it/insights/us-withholding-tax-irish-funds"},{"title":"us withholding tax irish funds","url":"https://incomeshares.com/es/insights/us-withholding-tax-irish-funds"},{"title":"us withholding tax irish funds","url":"https://incomeshares.com/de/insights/us-withholding-tax-irish-funds"},{"title":"us withholding tax irish funds","url":"https://incomeshares.com/fr/insights/us-withholding-tax-irish-funds"},{"title":"us withholding tax irish funds","url":"https://incomeshares.com/en/insights/us-withholding-tax-irish-funds"},{"title":"us withholding tax irish funds","url":"https://incomeshares.com/en-eu/insights/us-withholding-tax-irish-funds"}]

The search didn'
… [1376 more characters]
```
</details>

→ `Bash` — Download US-Ireland treaty PDF from IRS
```sh
cd [tmp] && mkdir -p irs && curl -s -m 60 -L -A "Mozilla/5.0" "https://www.irs.gov/pub/irs-trty/ireland.pdf" -o irs/ireland.pdf -w "%{http_code} %{content_type}\n"; ls -la irs/; python3 -I -c "
import subprocess;print(subprocess.run(['pdftotext','-v'],capture_output=True,text=True).stderr[:50])"
```

<details><summary>result</summary>

```
200 application/pdf
total 224
drwxr-xr-x   3 [user]  wheel      96 11 Oct  01:20 .
drwx------  35 [user]  wheel    1120 11 Oct  01:20 ..
-rw-r--r--   1 [user]  wheel  111454 11 Oct  01:20 ireland.pdf
pdftotext version 26.09.0
Copyright 2005-2026 The
```
</details>

→ `Bash` — Extract Article 10 from US-Ireland treaty
```sh
cd [tmp] && pdftotext -layout irs/ireland.pdf irs/ireland.txt && grep -n -A 22 "Article 10" irs/ireland.txt | head -45
```

<details><summary>result</summary>

```
17:Article 10 -------------------------------Dividends
18-Article 11 -------------------------------Interest
19-Article 12 -------------------------------Royalties
20-Article 13 -------------------------------Capital Gains
21-Article 14--------------------------------Independent Personal Services
22-Article 15 -------------------------------Dependent Personal Services
23-Article 16 -------------------------------Directors’ Fees
24-Article 17 -------------------------------Artistes and Sportsmen
25-Article 18 -------------------------------Pensions, Social Security, Annuities,
26-                                          Alimony and Child Support
27-Article 19 ------------------------------Government Service
28-Article 20 ------------------------------Students and Trainees
29-Article 21 ------------------------------Offshore Exploration and Exploitation Activities
30-Article 22 ------------------------------Other Income
31-Article 23 ------------------------------Limitation on Benefits
32-Article 24 ------------------------------Relief from Double Taxation
33-Article 25 ------------------------------Non-Discrimination
34-Article 26 ------------------------------Mutual Agreement Procedure
35-Article 27 ------------------------------Exchange of Information and Administrative Assistance
36-Article 28 ------------------------------Diplomatic Agents and Consular Officers
37-Article 29 ------------------------------Entry into Force
38-Article 30 ------------------------------Termina
… [1809 more characters]
```
</details>

→ `WebSearch` UBS Global Investment Returns Yearbook 2026 Dimson Marsh Staunton world equities real return since 1900 per year

→ `WebFetch` https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html

<details><summary>result</summary>

```
Web search results for query: "UBS Global Investment Returns Yearbook 2026 Dimson Marsh Staunton world equities real return since 1900 per year"

Links: [{"title":"Global Investment Returns Yearbook 2026","url":"https://www.ubs.com/global/en/investment-bank/insights-and-data/articles/global-investment-returns-yearbook-2026.html"},{"title":"equities have beaten bonds since 1900  ubs yearbook","url":"https://www.wealthbriefing.com/html/article.php/equities-have-beaten-bonds-since-1900--ubs-yearbook-"},{"title":"en 20260303 global investment returns yearbook 2026","url":"https://www.ubs.com/global/en/media/display-page-ndp/en-20260303-global-investment-returns-yearbook-2026.html"},{"title":"ubs global investment returns yearbook 2026 history risk and return in turbulent times","url":"https://www.london.edu/news/ubs-global-investment-returns-yearbook-2026-history-risk-and-return-in-turbulent-times"},{"title":"giry2026 summary public","url":"https://www.ubs.com/content/dam/assets/wm/static/cio/documents/giry2026-summary-public.pdf"},{"title":"Equities Top dash Performing Liquid Asset %E2%80%93 UBS Yearbook","url":"https://www.familywealthreport.com/article.php/Equities-Top_dash_Performing-Liquid-Asset-%E2%80%93-UBS-Yearbook?id=207071"},{"title":"Investire nel lungo periodo, le lezioni di UBS nel 2026","url":"https://www.we-wealth.com/news/investire-nel-lungo-periodo-le-lezioni-di-ubs-nel-2026"},{"title":"Equities Have Beaten Bonds Since 1900 %E2%80%93 UBS Yearbook","url":"https://
… [1760 more characters]
```
</details>

<details><summary>result</summary>

```
**S&P 500 (including dividends), nominal returns**

| Period | Geometric average | Arithmetic average |
|---|---|---|
| 1928–2025 (98 years) | ~10.0% | ~11.9% |
| 1976–2025 (50 years) | ~11.9% | ~13.2% |
| 2016–2025 (10 years) | ~14.7% | ~15.8% |

Geometric averages were derived from the page's "Value of $100 invested" column. Arithmetic averages are the simple mean of the annual returns. I did not compute the 2016–2025 arithmetic average, so the 15.8% figure is not verified.

**Real returns:** The page doesn't show inflation-adjusted figures, so I can't provide real returns.

**Latest year in the data:** 2025. **Page update date:** January 5, 2026.
```
</details>

→ `Bash` — Fetch Damodaran historical returns page and locate averages
```sh
cd [tmp] && curl -s -m 60 -L -A "Mozilla/5.0" "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html" -o damo.html -w "%{http_code}\n"; python3 - <<'EOF'
import re,html
s=open('damo.html',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S);t=html.unescape(re.sub(r'<[^>]+>',' | ',t));t=re.sub(r'\s+',' ',t)
for kw in ['Geometric','Arithmetic','Updated','updated','1928-2025','2025']:
    for m in list(re.finditer(kw,t))[:3]: print('--',kw,':',t[m.start()-100:m.start()+600])
EOF
```

<details><summary>result</summary>

```
200
-- Updated : | | | | $ | | 21,025.41 | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | Updated: January 5, 2026 | | | | | | | | | | | | | | | | |
-- 2025 : | | | $ | | 7,159.45 | | | | $ | | 50,440.38 | | | | $ | | 5,538.74 | | | | $ | | 12,649.47 | | | | 2025 | | 17.78% | | 16.53% | | 4.21% | | 7.80% | | 6.96% | | 1.58% | | 66.22% | | | | $ | | 1,157,598.95 | | | | $ | | 6,462,598.52 | | | | $ | | 2,578.30 | | | | $ | | 7,752.88 | | | | $ | | 53,952.41 | | | | $ | | 5,626.02 | | | | $ | | 21,025.41 | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | Updated: January 5, 2026 | | | | | | | | | | | | | | | | |
```
</details>

→ `Bash` — Compute S&P 500 geometric returns from Damodaran data
```sh
cd [tmp] && python3 - <<'EOF'
import re,html
s=open('damo.html',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S);t=html.unescape(re.sub(r'<[^>]+>',' | ',t));t=re.sub(r'\s+',' ',t)
i=t.find('1928 |'); print('HEADER:',t[max(0,i-1500):i][:1500])
rows={}
for m in re.finditer(r'\| (19[2-9]\d|20[0-2]\d) \| \| (-?[\d.]+)% \|',t):
    rows[int(m.group(1))]=float(m.group(2))/100
print(len(rows),min(rows),max(rows))
import math
def geo(a,b):
    p=1
    for y in range(a,b+1): p*=1+rows[y]
    return p**(1/(b-a+1))-1
for a in [1928,1976,1996,2006,2016]: print(a,'-2025 geo %.2f%%'%(geo(a,2025)*100), 'arith %.2f%%'%(sum(rows[y] for y in range(a,2026))/(2026-a)*100))
EOF
```

<details><summary>result</summary>

```
HEADER:  | | | | | | | | | | | | | Historical Returns on Stocks, Bonds and Bills: 1928-2024 | | | Data Used | : Multiple data services | | | Data | : Historical Returns for the US | | | Date | : January 2026 | | | Download as an excel file instead | : | https://www.stern.nyu.edu/~adamodar/pc/datasets/histretSP.xls | | | | | | | | | | | | | | | | | | | Update: | I have replaced the end-of-the-period T.Bill rates that I used to report in this table, with the average T.Bill rate during the year, since it better measures what you would have earned on that investment during the year. | | | | | | | | | | | | | | | | | | | | Annual Returns on Investments in | | Value of $100 invested at start of 1928 in | | | | Year | | S&P 500 (includes dividends) | | US Small cap (bottom decile) | | 3-month T.Bill | | US T. Bond (10-year) | | | | Baa Corporate Bond | | Real Estate | | Gold* | | S&P 500 (includes dividends)3 | | US Small cap (bottom decile) Cum Value | | 3-month T.Bill4 | | US T. Bond5 | | | | Baa Corporate Bond2 | | Real Estate2 | | Gold2 | | | |
98 1928 2025
1928 -2025 geo 10.02% arith 11.86%
1976 -2025 geo 11.93% arith 13.17%
1996 -2025 geo 10.26% arith 11.80%
2006 -2025 geo 10.90% arith 12.39%
2016 -2025 geo 14.68% arith 15.75%
```
</details>

→ `Bash` — Download UBS Yearbook 2026 summary and grep return figures
```sh
cd [tmp] && mkdir -p ubs && curl -s -m 90 -L -A "Mozilla/5.0" "https://www.ubs.com/content/dam/assets/wm/static/cio/documents/giry2026-summary-public.pdf" -o ubs/giry2026.pdf -w "%{http_code} %{content_type} %{size_download}\n" && pdftotext -layout ubs/giry2026.pdf ubs/giry2026.txt && wc -l ubs/giry2026.txt && grep -n -i "real return\|annualized\|annualised\|per year\|% per\|World equit\|world index" ubs/giry2026.txt | head -60
```

<details><summary>result</summary>

```
Exit code 1
403 text/html 475
Syntax Warning: May not be a PDF file (continuing anyway)
Syntax Error (2): Illegal character <48> in hex string
Syntax Error (3): Illegal character <54> in hex string
Syntax Error (4): Illegal character <4d> in hex string
Syntax Error (5): Illegal character <4c> in hex string
Syntax Error (8): Illegal character <48> in hex string
Syntax Error (15): Illegal character <54> in hex string
Syntax Error (16): Illegal character <49> in hex string
Syntax Error (17): Illegal character <54> in hex string
Syntax Error (18): Illegal character <4c> in hex string
Syntax Error (35): Illegal character <2f> in hex string
Syntax Error (36): Illegal character <54> in hex string
Syntax Error (37): Illegal character <49> in hex string
Syntax Error (38): Illegal character <54> in hex string
Syntax Error (39): Illegal character <4c> in hex string
Syntax Error: Couldn't find trailer dictionary
Syntax Error: Couldn't find trailer dictionary
Syntax Error: Couldn't read xref table
```
</details>

→ `WebFetch` https://www.ubs.com/global/en/media/display-page-ndp/en-20260303-global-investment-returns-yearbook-2026.html

→ `WebFetch` https://www.london.edu/news/ubs-global-investment-returns-yearbook-2026-history-risk-and-return-in-turbulent-times

<details><summary>result</summary>

```
The article doesn't include any of the return figures you asked for: world equities real annualized returns since 1900, US equities real return, bonds, bills, or the equity premium. It only describes these themes qualitatively, such as equities outperforming bonds, bills, and inflation over the long run.

**Article date:** 03 March 2026

The article links to the full UBS report, [giry2026-summary-public.pdf](https://www.ubs.com/content/dam/assets/wm/static/cio/documents/giry2026-summary-public.pdf), which may contain the figures you need. I haven't verified its contents.
```
</details>

<details><summary>result</summary>

```
**Release date:** 3 March 2026 (Zurich, 10:00 CET)

**Return figures:**

- **World equities, real and nominal annualized returns since 1900:** Not stated on the page. It gives only the regional figures below.
- **Developed vs. emerging markets:** "Since 1900, developed markets delivered higher annualized equity returns (8.5%) than emerging markets (6.9%)." The page doesn't specify whether these are real or nominal.
- **US equities:** The page gives no annualized return. It states: "An initial investment of USD 1 in equities in 1900 grew to USD 124,854 in nominal terms by end 2025."
- **Bonds:** The same USD 1 grew to "USD 284 for long bonds" by end 2025, and "USD 69 for Treasury bills."
- **Gold:** "the real USD gold price rising 5.2‑fold since 1900, equivalent to an annualized real return of 1.3%."
- **Equity risk premium:** Not mentioned on the page.
```
</details>

→ `WebSearch` Vanguard capital markets model 10-year annualized return forecast US equities global ex-US 2026 outlook

<details><summary>result</summary>

```
Web search results for query: "Vanguard capital markets model 10-year annualized return forecast US equities global ex-US 2026 outlook"

Links: [{"title":"Setting realistic expectations","url":"https://corporate.vanguard.com/content/corporatesite/us/en/corp/vemo/vemo-return-forecasts.html"},{"title":"Market perspectives","url":"https://advisors.vanguard.com/insights/article/series/vanguardmarketperspectives"},{"title":"Vanguard Releases 2026 Economic and Market Outlook","url":"https://vendordirectory.shrm.org/company/353722/news/3733900/vanguard-releases-2026-economic-and-market-outlook"},{"title":"Setting realistic expectations","url":"https://corporate.vanguard.com/content/corporatesite/us/en/corp/vemo/vemo-return-forecasts"},{"title":"corporate.vanguard.com","url":"https://corporate.vanguard.com/etc.clientlibs/corporatesite/clientlibs/clientlib-site/resources/dwcharts/fdHrL7.htm"},{"title":"Key insights","url":"https://www.statista.com/topics/10847/digital-content/"},{"title":"fdHrL 9","url":"https://externalcrewnet.vanguard.com/etc.clientlibs/corporatesite/clientlibs/clientlib-site/resources/dwcharts/fdHrL-9.htm"},{"title":"Key insights","url":"https://www-statista-com.libproxy.pcc.edu/topics/10847/the-vanguard-group/"},{"title":"VWCE Prediction 2026 — Forecast, Target Price & Scenarios","url":"https://freenance.io/etf/vwce-prediction-2026-forecast-target-price/"}]

Vanguard's most recent public figures I found put U.S. equities below ex-U.S. equities over the next decade
… [1118 more characters]
```
</details>

→ `WebFetch` https://corporate.vanguard.com/content/corporatesite/us/en/corp/vemo/vemo-return-forecasts.html

<details><summary>result</summary>

```
**Model run date:** June 30, 2026 (Vanguard Capital Markets Model)
**Page updated:** July 22, 2026
**Basis:** Nominal, U.S. dollar total returns, before inflation, taxes, and investment expenses

**10-year annualized return projections (as stated on the page):**

- **U.S. equities:** "our 10-year expected annualized return for U.S. equities declined from a range of 4.9%–6.9% to a range of 4.2%–6.2%." The 4.2%–6.2% range is the June 30 figure. The 4.9%–6.9% range is the prior March 31 figure.
- **Developed markets ex-U.S.:** "Expected returns for developed markets ex-U.S. fell from a range of 5.4%–7.4% to a range of 4.5%-6.5%." The 4.5%–6.5% range is the current figure.
- **Emerging markets:** "emerging markets expected returns fell from a range of 3.6%–5.6% to a range of 2%–4%." The 2%–4% range is the current figure.
- **U.S. value, U.S. growth, U.S. large-cap, U.S. small-cap:** No numeric 10-year figures are given in the text. The page says value "continue[s] to offer the most attractive expected return profile within U.S. equities" and that large- and small-cap saw "similar declines."
- **U.S. aggregate bonds:** No numeric figure. The page says expected returns "increased modestly."
- **Global and international bonds:** No numeric figure. The page says these were "little changed."

The page's numeric projections for the other asset classes appear only in an interactive chart that isn't included in this text.
```
</details>

→ `WebSearch` SPIVA U.S. Year-End 2025 scorecard percentage large-cap funds underperformed S&P 500 15 years 20 years

<details><summary>result</summary>

```
Web search results for query: "SPIVA U.S. Year-End 2025 scorecard percentage large-cap funds underperformed S&P 500 15 years 20 years"

Links: [{"title":"IN THIS LIST","url":"https://www.spglobal.com/spdji/en/spiva/article/spiva-us-year-end-2025/"},{"title":"IN THIS LIST","url":"https://spglobal.com/spdji/en/spiva/article/spiva-us"},{"title":"spiva institutional scorecard year end 2025","url":"https://www.spglobal.com/spdji/en/documents/spiva/spiva-institutional-scorecard-year-end-2025.pdf"},{"title":"IN THIS LIST","url":"https://www.spglobal.com/spdji/en/spiva/article/us-persistence-scorecard/"},{"title":"www.etftrends.com","url":"https://www.etftrends.com/?p=637470"},{"title":"NJxXm6FK VOO vs Active Management What 25 Years of Data Actually Shows","url":"https://www.tradingview.com/chart/VOO/NJxXm6FK-VOO-vs-Active-Management-What-25-Years-of-Data-Actually-Shows/"},{"title":"ETFdb Logo","url":"https://etfdb.com/fixed-income-content-hub/new-spiva-report-shows-active-etfs-underperform/"},{"title":"new spiva report shows active etfs struggle outperform","url":"https://www.etftrends.com/fixed-income-content-hub/new-spiva-report-shows-active-etfs-struggle-outperform/"},{"title":"IN THIS LIST","url":"https://spglobal.com/spdji/en/index-tv/article/the-market-measure-march-2025"},{"title":"IN THIS LIST","url":"https://www.spglobal.com/spdji/en/spiva/article/spiva-us-mid-year-2025"}]

The official S&P Global figure for 2025 is 79%, but the search didn't return an official 15-year or
… [1371 more characters]
```
</details>

→ `WebFetch` https://www.spglobal.com/spdji/en/spiva/article/spiva-us-year-end-2025/

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

→ `Bash` — Fetch latest CNB exchange rates
```sh
curl -s -m 30 "https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt" | head -3; echo ...; curl -s -m 30 "https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt" | grep -E "EUR|USD"; echo; curl -s -m 30 "https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/rok.txt?rok=2025" | head -1; curl -s -m 30 "https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/rok.txt?rok=2025" | tail -2 | cut -c1-80
```

<details><summary>result</summary>

```
09.10.2026 #195
země|měna|množství|kód|kurz
Austrálie|dolar|1|AUD|15,181
...
EMU|euro|1|EUR|24,365
USA|dolar|1|USD|21,745

Datum|1 AUD|1 BGN|1 BRL|1 CAD|1 CHF|1 CNY|1 DKK|1 EUR|1 GBP|1 HKD|100 HUF|1000 IDR|1 ILS|100 INR|100 ISK|100 JPY|100 KRW|1 MXN|1 MYR|1 NOK|1 NZD|100 PHP|1 PLN|1 RON|1 SEK|1 SGD|100 THB|100 TRY|1 USD|1 XDR|1 ZAR
30.12.2025|13,826|12,398|3,736|15,057|26,104|2,949|3,247|24,250|27,835|2,649|6,2
31.12.2025|13,790|12,396|3,767|15,069|26,041|2,952|3,246|24,245|27,789|2,650|6,2
```
</details>

→ `WebSearch` jednotný kurz 2025 pokyn GFŘ D- USD EUR financnisprava.cz

<details><summary>result</summary>

```
Web search results for query: "jednotný kurz 2025 pokyn GFŘ D- USD EUR financnisprava.cz"

Links: [{"title":"Jednotný kurz za rok 2025","url":"https://www.behounek.eu/l/jednotny-kurs/"},{"title":"Blog Money / Rychlé zprávy / Pokyn GFŘ-D-75 ke stanovení jednotných kurzů za zdaňovací období 2025","url":"https://money.cz/novinky-a-tipy/?p=18520"},{"title":"Blog Money / Rychlé zprávy / Pokyn GFŘ-D-75 ke stanovení jednotných kurzů za zdaňovací období 2025","url":"https://money.cz/novinky-a-tipy/rychle-zpravy/pokyn-gfr-d-75-ke-stanoveni-jednotnych-kurzu-za-zdanovaci-obdobi-2025/"},{"title":"Váš nákupní košík:  prázdný Přihlášení [redacted: email address]","url":"https://sagit.cz/info/fz26003"},{"title":"2026 01 14 Financni zpravodaj cislo 2 2026","url":"https://www.mfcr.cz/assets/attachments/2026-01-14_Financni-zpravodaj-cislo-2-2026.pdf"},{"title":"gfr d 75","url":"https://www.dauc.cz/predpisy/6389/gfr-d-75"},{"title":"Ministerstvo financí: Finanční zpravodaj číslo 2/2026","url":"https://www.dauc.cz/aktuality/1727/ministerstvo-financi-financni-zpravodaj-cislo-2-2026"},{"title":"Ministerstvo financí: Finanční zpravodaj číslo 3/2025","url":"https://www.dauc.cz/aktuality/1389/ministerstvo-financi-financni-zpravodaj-cislo-3-2025"},{"title":"Ministerstvo financí: Finanční zpravodaj číslo 4/2025","url":"https://www.dauc.cz/aktuality/1391/ministerstvo-financi-financni-zpravodaj-cislo-4-2025"},{"title":"Jednotný kurz - Jednotné účetní měnové kurzy MFČR","url":"https://www.kurzy.cz/kurzy-men/jednotn
… [1254 more characters]
```
</details>

→ `Bash` — Download Finanční zpravodaj 2/2026 and grep unified rates
```sh
cd [tmp] && curl -s -m 90 -L -A "Mozilla/5.0" "https://www.mfcr.cz/assets/attachments/2026-01-14_Financni-zpravodaj-cislo-2-2026.pdf" -o fz2026_2.pdf -w "%{http_code} %{content_type}\n" && pdftotext -layout fz2026_2.pdf fz.txt && grep -n -i "EMU\|USA  \|USA\b\|GFŘ-D-75\|euro\b" fz.txt | head -20
```

<details><summary>result</summary>

```
200 application/pdf
Syntax Warning: Invalid number of shared object groups
19:3.   Pokyn č. GFŘ-D-75 Stanovení jednotných kurzů za zdaňovací období 2025 podle
34:                                        Pokyn č. GFŘ-D-75
60: EMU                             euro                              1   EUR           24,66
88:USA                dolar                          1   USD             21,84
```
</details>

→ `Bash` — Fetch QQQ third-party data via Vanguard API
```sh
cd [tmp] && for t in QQQ; do curl -s -m 20 -A "Mozilla/5.0" "https://investor.vanguard.com/vmf/api/$t/performance" > vg/${t}_performance.json; curl -s -m 20 -A "Mozilla/5.0" "https://investor.vanguard.com/vmf/api/$t/profile" > vg/${t}_profile.json; python3 -c "
import json;d=json.load(open('vg/${t}_performance.json'));me=d.get('monthEndAvgAnnualRtn',{});print(me.get('asOfDate'),me.get('fundReturn'))
p=json.load(open('vg/${t}_profile.json'))['fundProfile'];print(p.get('longName'),p.get('expenseRatio'),p.get('expenseRatioAsOfDate'),p.get('inceptionDate'))"; done
```

<details><summary>result</summary>

```
2026-09-30T00:00:00-04:00 {'asOfDate': '2026-09-30T00:00:00-04:00', 'id': '6942', 'name': 'Invesco QQQ Trust                       ', 'calendarYTDPct': '20.83', 'prevMonthPct': '3.28', 'threeMonthPct': '0.53', 'oneYrPct': '23.75', 'threeYrPct': '28.04', 'fiveYrPct': '16.32', 'tenYrPct': '20.91', 'sinceInceptionPct': '10.88', 'isLastMonthEndPerformanceDataAvailable': False}
Invesco QQQ Trust 0.1800 2025-12-22T00:00:00-05:00 1999-03-10T00:00:00-05:00
```
</details>

→ `WebSearch` Fio americká ETF ČNB PRIIPs výklad sekundární trh execution only "Fio" "americká ETF"

<details><summary>result</summary>

```
Web search results for query: "Fio americká ETF ČNB PRIIPs výklad sekundární trh execution only "Fio" "americká ETF""

Links: [{"title":"I Strategie provadeni pokynu 150112","url":"https://fio.cz/docs/cz/I_Strategie_provadeni_pokynu_150112.pdf"},{"title":"I Strategie provadeni pokynu","url":"https://www.fio.cz/docs/cz/I_Strategie_provadeni_pokynu.pdf"},{"title":"PRIIPs Regulation","url":"https://ibkb.interactivebrokers.com/de/node/2993"},{"title":"PRIIPs Regulation","url":"https://ibkb.interactivebrokers.com/es/node/2993"},{"title":"Jak obejít znemožnění obchodování amerických ETFek – 2. část","url":"https://www.finhacker.cz/jak-obejit-znemozneni-obchodovani-americkych-etfek-2-cast/"},{"title":"PRIIPs Overview","url":"https://ibkb.interactivebrokers.com/de/node/3324"},{"title":"Otázky a odpovědi k nařízení o sdělení klíčových informací (PRIIPs)","url":"https://www.cnb.cz/cs/dohled-financni-trh/legislativni-zakladna/stanoviska-k-regulaci-financniho-trhu/RS2018-12"},{"title":"matheo.uliege.be","url":"https://matheo.uliege.be/handle/2268.2/16725"},{"title":"Metodické a výkladové materiály","url":"https://www.cnb.cz/cs/dohled-financni-trh/legislativni-zakladna/investicni-spolecnosti-a-investicni-fondy/metodicke-a-vykladove-materialy/index.html"}]

Hledání nenašlo konkrétní výklad ČNB, který by se týkal obchodování amerických ETF u Fia na sekundárním trhu v režimu execution only. Našel jsem jen obecnější materiály.

- **Praxe brokerů:** Jeden blog o obcházení PRIIPs uvádí, že Fio
… [1247 more characters]
```
</details>

→ `WebFetch` https://www.cnb.cz/cs/dohled-financni-trh/legislativni-zakladna/stanoviska-k-regulaci-financniho-trhu/RS2018-12

<details><summary>result</summary>

```
**Datum dokumentu:** 22. 10. 2018 (stanovisko ČNB, ID RS2018-12, platnost od 22. 10. 2018, bez určení konce platnosti)

**1. Kdy se KID poskytuje: prodej a execution-only**

- **Prodej PRIIP:** Podle Q&A musí osoba, která PRIIP prodává, KID poskytnout předem. Citace čl. 13 odst. 1: „KID poskytne v dostatečném předstihu před tím, než se jakákoliv smlouva“. Z toho vyplývá, že KID musí investor obdržet dříve, než se smlouva stane závaznou.
- **Execution-only (pokyn klienta):** Q&A uvádí, že zprostředkování nákupu na pokyn zákazníka nesplňuje kritérium prodeje. Citace: „Obstarávání nákupu investičních nástrojů na pokyn zákazníka“. Obchodník, který jen provádí takové pokyny nebo zprostředkovává přístup na zahraniční burzu, aniž by produkt nabízel či k němu poskytoval poradenství, podle Q&A „nelze jej považovat za subjekt povinnosti podle čl. 13 odst. 1“. Q&A zároveň připomíná povinnost jednat s odbornou péčí, která vyžaduje dostatek informací o rizicích.
- **Výjimka z načasování:** Podle čl. 13 odst. 3 lze KID v taxativně vymezených případech poskytnout až po provedení obchodu. Citace: „k poskytnutí příslušného KID došlo až následně“.
- **Sekundární trh:** Dokument tuto situaci neřeší.
- **Zveřejnění tvůrcem:** Čl. 5 odst. 1 podle Q&A vyžaduje, aby KID byl zpracován a zveřejněn předtím, než se produkt začne nabízet. Citace: „předtím, než se produkt s investiční složkou začne nabízet retailovým investorům“.

**2. Neevropské produkty bez KID:** Dokument se touto otázkou nezabývá.

*
… [517 more characters]
```
</details>

→ `Bash` — Extract verbatim ČNB Q&A passage on execution-only
```sh
cd [tmp] && curl -s -m 30 -L -A "Mozilla/5.0" "https://www.cnb.cz/cs/dohled-financni-trh/legislativni-zakladna/stanoviska-k-regulaci-financniho-trhu/RS2018-12" -o cnb_rs2018.html; python3 - <<'EOF'
import re,html
s=open('cnb_rs2018.html',errors='ignore').read()
t=re.sub(r'<script.*?</script>|<style.*?</style>','',s,flags=re.S);t=html.unescape(re.sub(r'<[^>]+>',' ',t));t=re.sub(r'\s+',' ',t)
i=t.find('Obstarávání nákupu'); print(t[i-1500:i+1500])
EOF
```

<details><summary>result</summary>

```
obstarává nákup investičních nástrojů na pokyn zákazníka (tzv. „execution-only“) na základě rámcové smlouvy, přičemž tyto nástroje sám aktivně nenabízí, resp. neprodává, ani k nim neposkytuje investiční poradenství? Podle čl. 5 odst. 1 nařízení PRIIPs má tvůrce produktu povinnost vypracovat KID a uveřejnit ho na internetových stránkách. Tvůrcem produktu se na základě čl. 4 odst. 4 rozumí osoba, která produkt vytvoří, anebo která ho jakýmkoliv způsobem pozmění nebo individualizuje. Není-li tedy obchodník s cennými papíry schopen nebo oprávněn měnit nebo individualizovat podmínky produktu, nepovažuje se za tvůrce produktu ve smyslu čl. 4 odst. 4 nařízení PRIIPs a nevztahuje se na něj povinnost vypracovat KID. Odpovědnost za vypracování KID v takovém případě zůstává tvůrci produktu. Podle čl. 13 nařízení PRIIPs má osoba, která k produktu poskytuje poradenství, nebo takový produkt sama prodává, povinnost poskytnout retailovým investorům KID. Osobou, která prodává PRIIP, se podle čl. 4 odst. 5 nařízení PRIIPs rozumí osoba, která investorovi produkt nabízí, nebo která s ním uzavírá smlouvu o produktu s investiční složkou. Na základě bodu 26 preambule nařízení PRIIPs lze dovozovat, že mezi osoby, které PRIIP prodávají, patří i „zprostředkovatelé“ produktů. Nicméně určujícím kritériem pro to, zda „zprostředkovatel“ má povinnost poskytnout KID je to, zda daný produkt „prodává“, tj. ve smyslu čl. 4 odst. 5 nařízení PRIIPs aktivně nabízí, resp. ohledně PRIIP uzavírá smlouvu s klientem.
… [1500 more characters]
```
</details>

→ `WebFetch` https://www.xtb.com/cz/etf

<details><summary>result</summary>

```
**Number of ETFs:** The page says XTB offers more than 2,300 ETFs: "Investujte do více než 2300 různých ETF." It also shows "2300+ fondů" and an "ETF skener" (ETF screener).

**Regions and exchanges:** The page says you can buy ETFs from around the world: "Nakupujte ETF z celého světa bez přeplácení." It also says you can invest in ETFs from any country regardless of your account currency: "Investujte do ETF z jakékoli země bez ohledu na měnu Vašeho účtu." The ETF menu names iShares, Vanguard, Lyxxor, and Amundi as providers. The page does not say which exchanges the ETFs trade on, or whether they are US-listed.

**UCITS:** The page does not mention UCITS.

**KID/PRIIPs:** The page does not mention a KID or PRIIPs document. It only says that users can check "klíčové údaje" (key data) on an information card for each fund, which is not the same as a KID.

**Other ETF-related details:**
- Fees: 0% on monthly turnover up to 100,000 EUR. Above that, a 0.2% fee applies (minimum 10 EUR), and a 0.5% currency conversion fee may apply.
- CFDs on ETFs: "U XTB máte kromě reálných ETF také přístup k CFD na ETF." (You also have access to CFDs on ETFs alongside real ETFs.)
- Risk warning: 77% of retail CFD accounts lose money, per the page's risk disclaimer.
```
</details>

→ `Bash` — Locate Playwright snapshot files I may have created
```sh
ls -la [redacted: private assistant config] 2>/dev/null | tail -5; find [redacted: local path] -maxdepth 4 -name "page-2026-10-10T23-12-03-470Z.yml" -path "*playwright-mcp*" 2>/dev/null | head
```

<details><summary>result</summary>

```
[redacted: local path]
```
</details>

→ `Bash` — List Playwright artifacts from my time window
```sh
ls -la [redacted: local path] | grep "2026-10-10T23-1[0-3]"
```

<details><summary>result</summary>

```
-rw-r--r--     1 [user]  staff     678 11 Oct  01:11 console-2026-10-10T23-11-12-560Z.log
-rw-r--r--     1 [user]  staff     678 11 Oct  01:11 console-2026-10-10T23-11-23-842Z.log
-rw-r--r--     1 [user]  staff     530 11 Oct  01:11 console-2026-10-10T23-11-34-749Z.log
-rw-r--r--     1 [user]  staff    7364 11 Oct  01:11 console-2026-10-10T23-11-43-997Z.log
-rw-r--r--     1 [user]  staff     356 11 Oct  01:12 console-2026-10-10T23-12-00-448Z.log
-rw-r--r--     1 [user]  staff    2008 11 Oct  01:12 console-2026-10-10T23-12-04-880Z.log
-rw-r--r--     1 [user]  staff    1780 11 Oct  01:12 console-2026-10-10T23-12-17-204Z.log
-rw-r--r--     1 [user]  staff    1780 11 Oct  01:12 console-2026-10-10T23-12-32-952Z.log
-rw-r--r--     1 [user]  staff    1780 11 Oct  01:12 console-2026-10-10T23-12-48-872Z.log
-rw-r--r--     1 [user]  staff    1780 11 Oct  01:13 console-2026-10-10T23-13-00-170Z.log
-rw-r--r--     1 [user]  staff    1780 11 Oct  01:13 console-2026-10-10T23-13-16-845Z.log
-rw-r--r--     1 [user]  staff    1780 11 Oct  01:13 console-2026-10-10T23-13-27-592Z.log
-rw-r--r--     1 [user]  staff    1202 11 Oct  01:11 page-2026-10-10T23-11-10-270Z.yml
-rw-r--r--     1 [user]  staff    3911 11 Oct  01:11 page-2026-10-10T23-11-13-408Z.yml
-rw-r--r--     1 [user]  staff   47277 11 Oct  01:11 page-2026-10-10T23-11-19-538Z.yml
-rw-r--r--     1 [user]  staff    3948 11 Oct  01:11 page-2026-10-10T23-11-24-166Z.yml
-rw-r--r--     1 [user]  staff   46817 11 Oct  01:11 page-2026-10-10T23-
… [1841 more characters]
```
</details>

→ `Bash` — Check whether snapshot files belong to my Schwab visit
```sh
cd [redacted: local path] && head -c 300 page-2026-10-10T23-12-03-470Z.yml; echo; cat console-2026-10-10T23-12-00-448Z.log | head -5
```

<details><summary>result</summary>

```
- generic [active] [ref=f27e1]:
  - link "Skip to content" [ref=f27e2] [cursor=pointer]:
    - /url: "#content"
  - generic [ref=f27e4]:
    - generic [ref=f27e7]:
      - link [ref=f27e11] [cursor=pointer]:
        - /url: /
        - generic [ref=f27e12]:
          - img "Home" [ref=f27e14]

[    2775ms] [LOG] OneTrust initial consent: ,C_ESS, @ https://tags.tiqcdn.com/utag/schwab/no-target/prod/utag.js:74
[    2974ms] [WARNING] Highcharts warning #15: www.highcharts.com/errors/15/ @ https://code.highcharts.com/highcharts.js:9
[    3194ms] [LOG] OneTrust Config Updated: ,C_ESS, @ https://tags.tiqcdn.com/utag/schwab/no-target/prod/utag.js:74
```
</details>

→ `Bash` — Search Schwab snapshot for fund data
```sh
cd [redacted: local path] && grep -n -i "expense\|net assets\|holdings\|SEC yield\|inception\|as of\|NAV\|1 Year\|Since\|Distribution" page-2026-10-10T23-12-03-470Z.yml | head -60
```

<details><summary>result</summary>

```
34:          - navigation [ref=f27e282]:
35:            - heading "Main navigation" [level=2] [ref=f27e283]
70:            - generic [ref=f27e33]: "Total Expense Ratio: 0.060%"
74:            - paragraph [ref=f27e38]: The fund’s goal is to track as closely as possible, before fees and expenses, the total return of the Dow Jones U.S. Dividend 100™ Index.
105:          - text: The ETF share split applied to shareholders of record as of the close of markets on October 9, 2024 and shares began trading at their post-split price on October 11, 2024. Forward share splits increase the number of shares outstanding and decrease the Net Asset Value (NAV) per share. The share splits did not change the total value of a shareholder’s investment.
107:        - navigation [ref=f27e70]:
121:                - link "Distributions" [ref=f27e81] [cursor=pointer]:
122:                  - /url: "#distributions"
138:                  - link "NAV History Download " [ref=f27e301] [cursor=pointer]:
139:                    - /url: /sites/g/files/eyrktu361/files/product_files/SCHD/SCHD_NAV_History.CSV
157:                  - generic [ref=f27e319]: As of 10/09/2026
161:                  - generic [ref=f27e323]: As of 10/09/2026
173:                      - strong [ref=f27e336]: Fund Inception
176:                    - rowheader "Total Net Assets As of 10/09/2026" [ref=f27e339]:
177:                      - strong [ref=f27e340]: Total Net Assets
178:                      - generic [ref=f27e341]: As of 10/09
… [4429 more characters]
```
</details>

→ `Bash` — Print Schwab snapshot key-facts table
```sh
cd [redacted: local path] && sed -n 150,245p page-2026-10-10T23-12-03-470Z.yml | grep -v "^\s*- /url" | sed 's/\[ref=[^]]*\]//g' | grep -v "^\s*$"
```

<details><summary>result</summary>

```
                - listitem :
                  - generic : 30-Day Median Bid/Ask Spread
                  - generic : 0.03%
                  - generic : 09/09/2026 - 10/09/2026
                - listitem :
                  - generic : Bid/Ask Midpoint
                  - generic : $33.14
                  - generic : As of 10/09/2026
                - listitem :
                  - generic : Premium/Discount
                  - generic : 0.03%
                  - generic : As of 10/09/2026
            - generic :
              - heading "Fund Profile" [level=3]
              - table :
                - rowgroup :
                  - row :
                    - columnheader
                    - columnheader
                    - columnheader
                - rowgroup :
                  - row :
                    - rowheader :
                      - strong : Fund Inception
                    - cell "10/20/2011"
                  - row :
                    - rowheader "Total Net Assets As of 10/09/2026" :
                      - strong : Total Net Assets
                      - generic : As of 10/09/2026
                    - cell "$110,315,371,812.80"
                  - row :
                    - rowheader :
                      - strong : Total Expense Ratio
                    - cell "0.060%"
                  - row :
                    - rowheader :
                      - strong : Index Name
                    - cell "Dow Jones U.S. Dividend 100 Index"
… [2400 more characters]
```
</details>

→ `Bash` — Check Schwab snapshot for performance section
```sh
cd [redacted: local path] && grep -n -i "perform\|annual\|10 Year\|5 Year" page-2026-10-10T23-12-03-470Z.yml | head -20
```

<details><summary>result</summary>

```
115:                - link "Performance" [ref=f27e77] [cursor=pointer]:
116:                  - /url: "#performance"
288:            - heading "Performance" [level=2] [ref=f27e90]
308:                - generic [ref=f27e122]: Fund Performance
311:                    - link "ETF Investment Performance Summary " [ref=f27e128]:
312:                      - /url: /resource/etf-investment-performance-summary
320:                - generic [ref=f27e144]: Performance and Reports
323:                    - link "Annual Reconstitution " [ref=f27e150]:
324:                      - /url: /resource/annual-reconstitution
331:                - generic [ref=f27e164]: Performance and Reports
334:                    - link "Monthly Performance and Fund Net Assets Report " [ref=f27e170]:
343:                - generic [ref=f27e186]: Performance and Reports
386:          - paragraph [ref=f27e233]: NAV (Net Asset Value) is a per share valuation of the securities in an ETF officially calculated once per day. NAV price performance is primarily used to evaluate the fund and its managers and may not reflect the actual return for the investor.
387:          - paragraph [ref=f27e235]: Dividend focused funds may underperform funds that do not limit their investment to dividend paying stocks. Stocks held by the fund may reduce or stop paying dividends, affecting the fund’s ability to generate income.
390:            - strong [ref=f27e240]: Past performance is no guarantee of future results.
395:
… [141 more characters]
```
</details>

→ `Bash` — Consolidate justETF results and check ETC legal structure
```sh
cd [tmp] && python3 -c "
import json,glob
d={}
for f in sorted(glob.glob('je_out_*.json')): d.update(json.load(open(f)))
for k in ['IE00B579F325','IE00B4ND3602','DE000A0S9GB0','IE00BKY7WX37']: print(k,d[k]['ucits'],d[k]['title'])
json.dump(d,open('je_all.json','w'),indent=1); print(len(d))
"; grep -o 'Legal structure.\{0,80\}' je/IE00B579F325.txt | head -2; grep -o -i 'as of [0-9/]*.\{0,30\}fund size\|fund size.\{0,60\}as of' je/IE00B5BMR087.txt | head
```

<details><summary>result</summary>

```
IE00B579F325 No Invesco Physical Gold ETC | A1AA5X | IE00B579F325
IE00B4ND3602 No iShares Physical Gold ETC | A1KWPQ | IE00B4ND3602
DE000A0S9GB0 No Xetra-Gold | A0S9GB | DE000A0S9GB0
IE00BKY7WX37 Yes SPDR Russell 3000 US Total Market UCITS ETF | A112AU | IE00BKY7WX37
30
Legal structure ETC Investment approach Long-only Sustainability No Fund currency USD Currency
Legal structure Fund Structure - UCITS compliance No Administrator Invesco UK Services Ltd Inve
```
</details>

→ `WebSearch` akumulační ETF zdanění Česko dividendy se nedaní až při prodeji časový test irské ETF 15 % srážka uvnitř fondu

<details><summary>result</summary>

```
Web search results for query: "akumulační ETF zdanění Česko dividendy se nedaní až při prodeji časový test irské ETF 15 % srážka uvnitř fondu"

Links: [{"title":"Aktualizováno: Zdanění ETF v roce 2026: Jak správně přiznat prodej a dividendy za rok 2025","url":"https://www.e15.cz/etf-prodej-dividendy-dane"},{"title":"etf zdaneni","url":"https://rulecalc.com/cs/dan/etf-zdaneni"},{"title":"Czech Republic ETF tax 2026: the 3-year time test and capital gains","url":"https://financialexpertclass.com/?p=3649"},{"title":"investuvannia cherez irlandski etf fondy dlia optymizatsii ta zmenshennia podatkovoho navantazhennia 1689074659","url":"https://dev.ua/blogs/posts/investuvannia-cherez-irlandski-etf-fondy-dlia-optymizatsii-ta-zmenshennia-podatkovoho-navantazhennia-1689074659"},{"title":"Newsletter Newsletters Events Events Podcasts Videos Africanews","url":"https://www.euronews.com/business/2025/02/21/amundi-moves-etf-from-luxembourg-to-ireland-due-to-favourable-tax-rule"},{"title":"amundi chooses irish expansion as next move in etf tussle with dws","url":"https://etfstream.com/news/amundi-chooses-irish-expansion-as-next-move-in-etf-tussle-with-dws"},{"title":"Press release","url":"https://ey.com/en_ie/newsroom/2025/04/hopes-for-irish-etf-tax-changes-as-fund-value-expected-to-reach-3-trillion-here-by-2029"},{"title":"amundi moves 7bn etf from luxembourg to ireland for tax efficiency","url":"https://en.paperjam.lu/article/amundi-moves-7bn-etf-from-luxembourg-to-ireland-for-tax-efficie
… [2046 more characters]
```
</details>

→ `WebFetch` https://www.e15.cz/etf-prodej-dividendy-dane

<details><summary>result</summary>

```
**Accumulating vs. distributing ETFs:** Accumulating funds reinvest automatically and pay no dividends. The article says they "fungují na principu dalšího automatického investování." If the sale meets the three-year test, the gain is tax-exempt. Distributing funds pay cash out, and the article states: "Obdržené peníze formou dividendy se zdaňují, a to i za předpokladu dalšího investování."

**Dividend tax rate (15%):** The article says Czech tax residents face an automatic "15procentní srážkové dani" on dividends from Czech companies, but this usually does not apply to ETFs. Separately, the income tax rate is 15% up to a tax base of 1,676,052 CZK for 2025, and 23% above that.

**Foreign withholding credit:** The article says that if tax on a dividend is withheld abroad, it is reported on the tax return, and treaty rules apply. Using Germany as an example, it notes that withholding is 26.375%, but "v daňovém přiznání se započte maximálně 15 procent." The article adds that the foreign tax paid must be proven.

**W-8BEN:** Not mentioned in the article.

**Time test:** The article defines it as: "mezi nabytím a prodejem konkrétního ETF uplynuly alespoň tři roky." It also says FIFO is used for sales.

**100k value test:** The article describes it as: "celkové roční příjmy (nikoli tedy pouze zisk) za rok 2025 nepřesáhly 100 tisíc korun." Total annual income is measured, not just the gain.

**40M cap / its abolition:** Not mentioned. The article instead cites a reporting obligation
… [241 more characters]
```
</details>

→ `Bash` — Create research output folder
```sh
ls -la [redacted: local path] 2>&1 | head; mkdir -p [redacted: local path] && ls -la [redacted: local path] cp [redacted: local path] [tmp]
```

<details><summary>result</summary>

```
total 280
drwxr-xr-x   15 [user]  staff     480 11 Oct  01:24 .
drwxr-xr-x    4 [user]  staff     128 11 Oct  01:07 ..
-rw-r--r--    1 [user]  staff      45 11 Oct  01:23 .env.example
drwxr-xr-x   13 [user]  staff     416 11 Oct  01:25 .git
-rw-r--r--    1 [user]  staff      49 11 Oct  01:23 .gitignore
drwxr-xr-x    4 [user]  staff     128 11 Oct  01:25 api
drwxr-xr-x    3 [user]  staff      96 11 Oct  01:23 db
drwxr-xr-x    7 [user]  staff     224 11 Oct  01:25 lib
drwxr-xr-x  151 [user]  staff    4832 11 Oct  01:24 node_modules
total 0
drwxr-xr-x   2 [user]  staff   64 11 Oct  01:23 .
drwxr-xr-x  15 [user]  staff  480 11 Oct  01:24 ..
```
</details>

→ `Write` [tmp]

<details><summary>result</summary>

```
File created successfully at: [tmp] (file state is current in your context — no need to Read it back)
```
</details>

→ `Bash` — Build JSON and sanity-check its contents
```sh
cd [tmp] && python3 build.py && python3 -c "
import json;d=json.load(open('[redacted: local path]'))
for e in d['etfs']: print(e['ticker'],e['in_nyse_list'],e['primary_listing_exchange']['value'],e['expense_ratio_pct']['value'],e['returns_nav_annualized_pct']['10y'])
for u in d['ucits_twins']: print(u['isin'],u['tickers_by_exchange'][:3],u['ter_pct'],u['fund_size'])
"
```

<details><summary>result</summary>

```
ok 16 27 13
SPY True NYSE Arca 0.0945 15.18
VOO True NYSE Arca 0.03 15.29
IVV True NYSE Arca 0.03 15.3
VTI True NYSE Arca 0.03 14.7
VT True NYSE Arca 0.06 12.32
VEA True NYSE Arca 0.03 9.76
VWO True NYSE Arca 0.06 7.66
SCHD True NYSE Arca 0.06 12.44
VYM True NYSE Arca 0.04 11.28
AGG True NYSE Arca 0.03 1.11
GLD True NYSE Arca 0.4 11.74
VNQ True NYSE Arca 0.13 4.39
IWM True NYSE Arca 0.19 9.75
QQQ False Nasdaq 0.18 20.91
VXUS False Nasdaq 0.05 9.2
BND False Nasdaq 0.03 1.13
IE00B5BMR087 ['Borsa Italiana EUR CSSPX', 'Euronext Amsterdam EUR CSPX', 'London Stock Exchange GBX CSP1'] 0.07% p.a. EUR 141,385 m
IE00BFMXXD54 ['Borsa Italiana EUR VUAA', 'London Stock Exchange GBP VUAG', 'London Stock Exchange USD VUAA'] 0.07% p.a. EUR 33,371 m
IE00B3XXRP09 ['Borsa Italiana EUR VUSA', 'Euronext Amsterdam EUR VUSA', 'Euronext Paris EUR VUSA'] 0.07% p.a. EUR 48,236 m
IE000XZSV718 ['Borsa Italiana EUR SP5A', 'Euronext Amsterdam EUR SPYL', 'London Stock Exchange GBP SPXL'] 0.03% p.a. EUR 17,596 m
IE00BJ0KDR00 ['Borsa Italiana EUR XD9U', 'London Stock Exchange GBX XDUS', 'London Stock Exchange USD XD9U'] 0.03% p.a. EUR 12,329 m
IE00BK5BQT80 ['Borsa Italiana EUR VWCE', 'Euronext Amsterdam EUR VWCE', 'London Stock Exchange GBP VWRP'] 0.14% p.a. EUR 55,102 m
IE00B3RBWM25 ['Borsa Italiana EUR VWRL', 'Euronext Amsterdam EUR VWRL', 'Euronext Paris EUR VWRL'] 0.14% p.a. EUR 24,335 m
IE00B3YLTY66 ['Borsa Italiana EUR IMIE', 'Euronext Paris EUR IMIE', 'London Stock Exchange USD IMID'] 0.17% p.a. EUR 8
… [2265 more characters]
```
</details>

→ `Write` [redacted: local path]

<details><summary>result</summary>

```
File created successfully at: [redacted: local path] (file state is current in your context — no need to Read it back)
```
</details>

→ `Edit` [redacted: local path]

<details><summary>result</summary>

```
The file [redacted: local path] has been updated successfully. (file state is current in your context — no need to Read it back)
```
</details>

→ `Bash` — Validate JSON and list output files
```sh
python3 -c "import json;json.load(open('[redacted: local path]'));print('json ok')"; ls -la [redacted: local path]
```

<details><summary>result</summary>

```
json ok
total 352
drwxr-xr-x   5 [user]  staff     160 11 Oct  01:29 .
drwxr-xr-x  20 [user]  staff     640 11 Oct  01:27 ..
-rw-r--r--   1 [user]  staff  109552 11 Oct  01:27 etf-data.json
-rw-r--r--   1 [user]  staff   23136 11 Oct  01:29 etf-data.md
-rw-r--r--   1 [user]  staff   44632 11 Oct  01:26 market-cro.md
```
</details>

**Agent:**

[redacted: name]

Collected the landing-page data: 13 NYSE Arca ETFs, 3 Nasdaq ETFs for reference, 27 UCITS twins, taxes, broker access and calculator assumptions. Every fact in the JSON has a source, access date and as-of date.

1. **NYSE Arca list:** SPY, VOO, IVV, VTI, VT, VEA, VWO, SCHD, VYM, AGG, GLD, VNQ, IWM. QQQ, VXUS and BND trade on Nasdaq: BND moved there in 2018. They are in a separate “people will ask about these” section, outside the main list.
2. **Sources:** TER, assets, holdings count, SEC yield and 1/3/5/10-year NAV returns as of 30.09.2026 come from issuers (SSGA, iShares, Schwab and Vanguard through its JSON API). Stockanalysis is only a secondary source.
3. **VTI renamed:** in 2026 Vanguard changed the index from CRSP to Morningstar; the fund is now Vanguard Morningstar Total Stock Market ETF.
4. **Main point for the page:** most brokers do not sell US ETFs to retail investors because they lack the KID required by PRIIPs. However, ČNB guidance RS2018-12 (2018) says a broker that only executes client orders does not have to supply a KID. **Fio e-Broker** therefore officially states that US ETFs can be traded there.
5. **Other brokers:** XTB, Trading 212, IBKR/Lynx, DEGIRO and Saxo do not offer US ETFs to retail clients. Alternatives are professional-client status (2 of 3 criteria, § 2b of Act 256/2004 Sb.) or CFDs. The options-exercise route is described only in blogs and is not officially verified.
6. **Twins:** UCITS funds tracking the same index exist for the S&P 500, Nasdaq-100, Russell 2000 and US Aggregate. VT, VWO and VXUS have close alternatives; for VXUS, this is a new Vanguard fund launched in August 2026, still small (€110 million). SCHD has no exact equivalent.
7. **Gold:** European equivalents of GLD are ETCs (metal-backed debt securities), not UCITS funds.
8. **Taxes, checked against the legislation effective 01.08–31.12.2026:** the 3-year holding test and 100,000 Kč annual gross-proceeds threshold apply. **The 40 million Kč cap for securities was abolished from 01.01.2026** (Act 360/2025 Sb.); it remains only for cryptoassets. Exempt income above 5 million Kč must be reported to the tax office.
9. **Dividends and estate tax:** under the Czech–US treaty, W-8BEN gives 15% withholding; Article 10(3) explicitly covers funds such as ETFs. Without W-8BEN it is 30%. US estate tax: a return is required for US assets above $60,000, with rates up to 40%. Czechia has no estate-tax treaty with the US.
10. **Calculator:** the S&P 500 returned 10.02% annually over 1928–2025 (I calculated this from Damodaran’s data). Vanguard’s 10-year US-equity forecast is 4.2–6.2%. ČNB rates for 09.10.2026: EUR 24.365 and USD 21.745 Kč. The 2025 uniform rates are 24.66 / 21.84 Kč. I proposed the default 7% assumption myself; it is not a sourced figure.
11. **Unverified, section 8 of the Markdown file:** SCHD returns (the Schwab site was blocked; I used third-party data on Vanguard’s site), Revolut, Portu and Fondee. XTB, DEGIRO, Saxo and Trading 212 sources are old or from forums. Real global returns from the UBS Yearbook and 15/20-year SPIVA figures were not obtained.
12. **Browser:** another session was using the Playwright browser at the same time. I opened Schwab once and captured the key SCHD facts; then the tab returned to that session. I did not close the browser because it was not mine.
13. **Cleanup:** no new background processes. Drafts are only in the scratchpad; I did not modify the adjacent `market-cro.md`.

Files in `[redacted: local path]`:
- etf-data.json
- etf-data.md

