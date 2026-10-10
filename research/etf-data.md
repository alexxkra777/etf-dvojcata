# NYSE ETFs and their European counterparts: data for the landing page

Compiled on 11.10.2026. A machine-readable version, with the source, access date and "as of" date for every fact, is in `etf-data.json` in this same folder.
Returns are annualized, based on NAV, in USD, as of 30.09.2026 unless stated otherwise. For an investor who holds crowns, the final result also depends on the USD/CZK exchange rate.

## 1. Main takeaway for the page

- A Czech retail investor **cannot buy** US ETFs (SPY, VOO, VTI…) at most brokers. The obstacle is the PRIIPs regulation (in force since 01.01.2018): a product cannot be sold to retail clients without a KID, and US issuers do not publish a KID. Holding and selling what was already bought is usually allowed.
- **Czech particularity:** in its clarification RS2018-12 (22.10.2018), the ČNB wrote that a broker that only executes a client's order (execution-only) and does not offer the product itself is not required to provide a KID. This is why **Fio e-Broker** states directly: "U nás můžete obchodovat i s americkými ETF". Foreign brokers (XTB, Trading 212, IBKR, DEGIRO, Saxo) follow the rules of their own regulators and do not sell US ETFs to retail clients.
- Other legal routes: professional client status (2 of 3 criteria, § 2b ZPKT), CFDs (this is not ownership of the fund). The route via exercising options is described only in blogs and is not officially confirmed.
- That is why the page shows the ETFs people have heard of, and next to them their **UCITS counterparts** (Ireland, with a KID) that a person can actually buy.

## 2. Popular ETFs on NYSE Arca (13 funds)

| Ticker | Name | Issuer | Launch | TER | Assets (date) | Holdings | Yield | Distributions | 1y | 3y | 5y | 10y | Index |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SPY | SPDR S&P 500 ETF Trust | State Street | 1993-01-22 | 0.0945% | $817.2 bn (08.10) | 504 | SEC 0.95% (08.10) | quarterly | 15.60 | 22.73 | 13.65 | 15.18 | S&P 500 |
| VOO | Vanguard S&P 500 ETF | Vanguard | 2010-09-07 | 0.03% | $1.0 trn, ETF share class (31.08) | 505 | SEC 1.00% (30.09) | quarterly | 15.70 | 22.85 | 13.75 | 15.29 | S&P 500 |
| IVV | iShares Core S&P 500 ETF | BlackRock | 2000-05-15 | 0.03% | $896.4 bn (09.10) | 504 | SEC 0.94% (31.08) | quarterly | 15.71 | 22.85 | 13.76 | 15.30 | S&P 500 |
| VTI | Vanguard Morningstar Total Stock Market ETF | Vanguard | 2001-05-24 | 0.03% | $690.1 bn, ETF share class (31.08) | 3,507 | SEC 1.03% (30.09) | quarterly | 15.33 | 22.32 | 12.56 | 14.70 | Morningstar US Total Market (formerly CRSP) |
| VT | Vanguard Total World Stock ETF | Vanguard | 2008-06-24 | 0.06% | $81.9 bn, ETF share class (31.08) | 10,088 | TTM 1.51%* | quarterly | 16.32 | 21.42 | 11.34 | 12.32 | FTSE Global All Cap |
| VEA | Vanguard FTSE Developed Markets ETF | Vanguard | 2007-07-20 | 0.03% | $238.1 bn, ETF share class (31.08) | 3,895 | TTM 2.42%* | quarterly | 20.77 | 20.95 | 10.32 | 9.76 | FTSE Developed All Cap ex US |
| VWO | Vanguard FTSE Emerging Markets ETF | Vanguard | 2005-03-04 | 0.06% | $127.3 bn, ETF share class (31.08) | 6,348 | TTM 2.04%* | quarterly | 12.54 | 17.91 | 6.62 | 7.66 | FTSE EM All Cap China A Incl. |
| SCHD | Schwab U.S. Dividend Equity ETF | Schwab | 2011-10-20 | 0.06% | $110.3 bn (09.10) | 102 | SEC 3.32% (08.10) | quarterly | 23.36** | 15.44** | 9.48** | 12.44** | Dow Jones U.S. Dividend 100 |
| VYM | Vanguard High Dividend Yield ETF | Vanguard | 2006-11-10 | 0.04% | $83.1 bn, ETF share class (31.08) | 603 | SEC 2.35% (30.09) | quarterly | 12.72 | 17.67 | 11.63 | 11.28 | FTSE High Dividend Yield |
| AGG | iShares Core U.S. Aggregate Bond ETF | BlackRock | 2003-09-22 | 0.03% | $137.1 bn (09.10) | 13,400 | SEC 5.10% (08.10) | monthly | −1.87 | 4.05 | −0.64 | 1.11 | Bloomberg US Aggregate |
| GLD | SPDR Gold Shares | State Street | 2004-11-18 | 0.40% | $141.7 bn (09.10) | physical gold | no distributions | — | 8.74 | 30.16 | 18.62 | 11.74 | LBMA Gold Price PM |
| VNQ | Vanguard Real Estate ETF | Vanguard | 2004-09-23 | 0.13% | $38.1 bn, ETF share class (31.08) | 139 | TTM 3.76%* | quarterly | 1.68 | 10.04 | 1.34 | 4.39 | MSCI US IMI Real Estate 25/50 |
| IWM | iShares Russell 2000 ETF | BlackRock | 2000-05-22 | 0.19% | $78.7 bn (09.10) | 1,984 | SEC 1.09% (31.08) | quarterly | 16.06 | 17.59 | 6.22 | 9.75 | Russell 2000 |

`*` TTM: from stockanalysis.com as of 09.10.2026 (a secondary source): for its international funds and for VNQ, Vanguard does not provide the SEC yield in its API. `**` SCHD returns are third-party data shown on investor.vanguard.com: the Schwab returns table did not load.
Sources: issuer pages (ssga.com, investor.vanguard.com via its JSON API, ishares.com, schwabassetmanagement.com). For Vanguard, assets are given **for the ETF share class only**; the whole fund including its mutual fund share classes is larger: VOO $1.8 trn, VTI $2.3 trn.
Exchange: SSGA, iShares and Schwab themselves state "NYSE Arca". For Vanguard funds, I took the exchange from stockanalysis ("NYSEARCA:"), because the Vanguard API has no exchange field.

### Not NYSE, but people will ask about them (on Nasdaq)

| Ticker | Why it is not in the list | TER | Assets | 1y / 3y / 5y / 10y |
|---|---|---|---|---|
| QQQ | Primary listing is Nasdaq | 0.18% | $507.8 bn (SA) | 23.75 / 28.04 / 16.32 / 20.91 (third-party data) |
| VXUS | Listed on Nasdaq since 2011 | 0.05% | $164.9 bn, ETF share class | 18.49 / 20.15 / 9.35 / 9.20 |
| BND | Vanguard moved it from NYSE Arca to Nasdaq in 2018 | 0.03% | $163.3 bn, ETF share class | −1.82 / 4.04 / −0.64 / 1.13 |

## 3. UCITS counterparts (Ireland unless stated otherwise), justETF as of 11.10.2026

| For | ISIN | Name | Tickers (exchange) | TER | Size | Dividends | Replication | How similar |
|---|---|---|---|---|---|---|---|---|
| SPY/VOO/IVV | IE00B5BMR087 | iShares Core S&P 500 UCITS ETF (Acc) | SXR8 (Xetra), CSPX (LSE USD, Amsterdam) | 0.07% | €141,385 m | accumulating | full | same index |
| SPY/VOO/IVV | IE00BFMXXD54 | Vanguard S&P 500 UCITS ETF Acc | VUAA (Xetra, LSE USD) | 0.07% | €33,371 m | accumulating | full | same index |
| SPY/VOO/IVV | IE00B3XXRP09 | Vanguard S&P 500 UCITS ETF Dist | VUSA (Xetra, Amsterdam, LSE GBP) | 0.07% | €48,236 m | distributing, quarterly | full | same index |
| SPY/VOO/IVV | IE000XZSV718 | SPDR S&P 500 UCITS ETF (Acc) | SPYL (Xetra, Amsterdam, LSE USD) | 0.03% | €17,596 m | accumulating | full | same index, cheapest |
| VTI | IE00BJ0KDR00 | Xtrackers MSCI USA UCITS ETF 1C | XD9U (Xetra, LSE USD) | 0.03% | €12,329 m | accumulating | full | approximate: large and mid-sized companies only |
| VT | IE00BK5BQT80 | Vanguard FTSE All-World UCITS ETF Acc | VWCE (Xetra, Amsterdam), VWRA (LSE USD) | 0.14% | €55,102 m | accumulating | sampled | close (without small companies) |
| VT | IE00B3RBWM25 | Vanguard FTSE All-World UCITS ETF Dist | VGWL (Xetra), VWRL (Amsterdam, LSE) | 0.14% | €24,335 m | distributing, quarterly | sampled | close |
| VT | IE00B3YLTY66 | SPDR MSCI ACWI IMI UCITS ETF (Acc) | SPYI (Xetra), IMID (LSE USD) | 0.17% | €8,257 m | accumulating | sampled | close, includes small companies |
| VXUS | IE0009A5ADV9 | Vanguard FTSE All-World ex-U.S. UCITS ETF Acc | VXUS (Xetra, Amsterdam), VXUA (LSE USD) | 0.12% | €110 m | accumulating | sampled | close; the fund is new (18.08.2026) and small |
| VEA | IE0006WW1TQ4 | Xtrackers MSCI World ex USA UCITS ETF 1C | EXUS (Xetra, LSE USD) | 0.15% | €6,989 m | accumulating | full | approximate (755 holdings vs ~3,900) |
| VWO | IE00BK5BR733 | Vanguard FTSE Emerging Markets UCITS ETF Acc | VFEA (Xetra, LSE USD) | 0.17% | €2,192 m | accumulating | full | same index family |
| VWO | IE00B3VVMM84 | Vanguard FTSE Emerging Markets UCITS ETF Dist | VFEM (Xetra, Amsterdam) | 0.17% | €3,234 m | distributing, quarterly | full | same index family |
| VWO | IE00BKM4GZ66 | iShares Core MSCI EM IMI UCITS ETF (Acc) | IS3N (Xetra), EIMI (LSE USD), EMIM (Amsterdam) | 0.18% | €40,895 m | accumulating | full | close |
| SCHD/VYM | IE00B6YX5D40 | SPDR S&P U.S. Dividend Aristocrats UCITS ETF (Dist) | SPYD (Xetra), UDVD (LSE USD) | 0.35% | €3,261 m | distributing, quarterly | full | different index (US) |
| VYM/SCHD | IE00B8GKDB10 | Vanguard FTSE All-World High Dividend Yield UCITS ETF Dist | VGWD (Xetra), VHYL (Amsterdam, LSE) | 0.29% | €9,982 m | distributing, quarterly | sampled | different coverage: the whole world |
| VYM/SCHD | IE00BK5BR626 | Vanguard FTSE All-World High Dividend Yield UCITS ETF Acc | VGWE (Xetra, Amsterdam), VHYA (LSE USD) | 0.29% | €3,093 m | accumulating | sampled | the whole world |
| AGG/BND | IE00B44CGS96 | iShares US Aggregate Bond UCITS ETF (Dist) | EUNX (Xetra), IUAG (LSE USD) | 0.25% | €1,054 m | distributing, semi-annual | sampled | same index |
| AGG/BND | IE00BDFJYM28 | iShares US Aggregate Bond UCITS ETF EUR Hedged (Acc) | IUAE (LSE EUR), EUNE (gettex) | 0.30% | €343 m | accumulating | sampled | same index, hedged to euro |
| GLD | IE00B579F325 | Invesco Physical Gold ETC | 8PSG (Xetra), SGLD (LSE USD, Amsterdam) | 0.12% | €25,786 m | — | physical gold | **ETC, not a UCITS fund** |
| GLD | IE00B4ND3602 | iShares Physical Gold ETC | PPFB (Xetra), IGLN (LSE USD) | 0.12% | €34,064 m | — | physical gold | ETC |
| GLD | DE000A0S9GB0 | Xetra-Gold (Germany) | 4GLD (Xetra) | 0.00% per justETF | €20,886 m | — | physical gold | ETC/bond |
| VNQ | IE00B1FZSF77 | iShares US Property Yield UCITS ETF | IQQ7 (Xetra), IUSP (Amsterdam), IDUP (LSE USD) | 0.40% | €507 m | distributing, quarterly | full | approximate (85 holdings vs 139) |
| IWM | IE00BJ38QD84 | SPDR Russell 2000 U.S. Small Cap UCITS ETF | ZPRR (Xetra), R2US (LSE USD) | 0.30% | €4,233 m | accumulating | sampled | same index |
| QQQ | IE0032077012 | Invesco EQQQ Nasdaq-100 UCITS ETF (Dist) | EQQQ (Xetra), EQQU (LSE USD) | 0.30% | €13,244 m | distributing, quarterly | full | same index |
| QQQ | IE00BFZXGZ54 | Invesco EQQQ Nasdaq-100 UCITS ETF Acc | EQQB (Xetra) | 0.30% | €4,484 m | accumulating | full | same index |
| QQQ | IE00B53SZB19 | iShares Nasdaq 100 UCITS ETF (Acc) | SXRV (Xetra), CNDX (LSE USD, Amsterdam) | 0.30% | €26,969 m | accumulating | full | same index |
| for reference | IE00B4L5Y983 | iShares Core MSCI World UCITS ETF (Acc) | EUNL (Xetra), SWDA (LSE GBP), IWDA (LSE USD, Amsterdam) | 0.20% | €133,406 m | accumulating | sampled | developed markets only |

The fund currency of all the Irish funds is USD. So buying in crowns or euros does not remove the currency risk. None of the funds has a Prague exchange listing on justETF.

## 4. Brokers used by Czechs

| Broker | US ETFs for retail clients | How confident | Source |
|---|---|---|---|
| Fio e-Broker | **Yes** (execution-only, ČNB position) | high | fio.cz/akcie-investice/etf, ČNB RS2018-12 |
| Patria | Probably yes, by searching for the ISIN | low: the source is from 2022 | FinHacker |
| XTB | No, only UCITS or CFDs (there is a CFD on SPY) | medium | FinHacker 2022, xtb.com |
| Trading 212 | No | medium (community answer) | community.trading212.com |
| Interactive Brokers / Lynx | No; yes for a professional client; CFDs available | high (IBKR KB, via search results) | ibkb.interactivebrokers.com/node/3324 |
| DEGIRO | No | medium (a notice from around 2018 on a forum) | mustachianpost |
| Saxo | No for retail clients, KID is checked before an order | medium (2022 data) | home.saxo |
| Revolut | **Not verified** | — | — |
| Portu, Fondee | Robo-advisors: the provider chooses the tickers; which ETFs they hold inside has not been verified | — | — |

A professional client on request (§ 2b(1)(b) of Act 256/2004 Sb., MiFID II Annex II) needs 2 of 3 conditions: ≥10 significant trades per quarter on average over four consecutive quarters; cash plus instruments ≥ €500,000; ≥1 year of work in the financial sector.

## 5. Taxes for a Czech tax resident (checked against the text of the law as in force 01.08–31.12.2026)

- **Dividends of a US ETF:** by default the US withholds 30% (IRS). With a W-8BEN, 15% under the CZ–US treaty, Art. 10(2)(b). Art. 10(3) explicitly extends the 15% rate to RICs, and US ETFs are RICs. In the Czech Republic, foreign dividends go into a separate 15% tax base (§ 8(8), § 16a). The US 15% is credited, so the total is about 15%. Without a W-8BEN, 30% is withheld and only 15% can be credited.
- **Irish UCITS:** the fund pays 15% on dividends of US companies (US–Ireland treaty). That 15% stays inside the fund and cannot be credited in the Czech Republic; this is my conclusion, there is no direct quote. An accumulating fund does not pay out dividends, and tax arises only on sale. A distributing fund: payouts are taxed at 15% in the Czech Republic.
- **Time test (časový test):** the sale of a security is exempt if more than 3 years have passed since the purchase (§ 4(1)(u)).
- **100,000 Kč threshold:** exempt if the **gross proceeds** (not profit) from all sales of securities in the year are ≤ 100,000 Kč (§ 4(1)(t)).
- **40 million Kč limit:** introduced from 2025, **abolished from 01.01.2026** for securities and shares (Act 360/2025 Sb.); it remains only for crypto-assets (§ 4(3)). It still applies to sales made in 2025.
- **Reporting obligation:** exempt income above 5,000,000 Kč must be reported to the tax office before the deadline for filing the tax return (§ 38v).
- **Unified exchange rate for 2025** (GFŘ-D-75): 1 EUR = 24.66 Kč, 1 USD = 21.84 Kč.
- **US estate tax:** if a non-resident holds US assets worth more than $60,000, Form 706-NA is required. Credit $13,000, rates 18–40% (40% above $1 million). The Czech Republic has **no** estate tax treaty with the US (the IRS list has 15 countries, and the Czech Republic is not among them). Irish UCITS do not count as US assets; this is the commonly accepted reading, and I did not find a separate IRS page on it.

## 6. Assumptions for the fee calculator

| What | Value | Source, date |
|---|---|---|
| S&P 500, 1928–2025, geometric (nominal, USD) | 10.02% (arithmetic 11.86%) | Damodaran, updated 05.01.2026; calculated myself from the annual data |
| S&P 500, 1976–2025 / 1996–2025 / 2016–2025 | 11.93% / 10.26% / 14.68% | same |
| US equities 1900–2025, nominal | 9.76% ($1 → $124,854) | UBS Yearbook 2026 (03.03.2026); the percentage calculated myself |
| Developed / emerging markets since 1900 | 8.5% / 6.9% (real or nominal, UBS does not specify) | UBS, 03.03.2026 |
| Vanguard 10-year forecast: US / developed ex-US / EM | 4.2–6.2% / 4.5–6.5% / 2–4% | VCMM as of 30.06.2026, page updated 22.07.2026 |
| SPIVA: active large-cap funds underperforming the S&P 500 in 2025 | 79% (2024: 65%) | S&P DJI, via search results |
| ČNB exchange rates | EUR/CZK 24.365; USD/CZK 21.745 | fixing no. 195 of 09.10.2026 |
| **Default proposal** | 7% nominal, scenarios 5 / 7 / 9% | my assumption, not a source |

## 7. Caveats

- All returns are past returns. For a Czech investor holding crowns, the actual result is different: it is affected by the USD/CZK exchange rate.
- For Vanguard, "assets" is the ETF share class as of 31.08.2026. For SSGA, iShares and Schwab, it is the whole fund as of 08–09.10.2026. These are different cut-offs.
- On justETF there is no "as of" date next to fund size and TER: the values were taken from the pages on the day of access (11.10.2026). justETF does not say whose size it is, that of the share class or of the whole fund.
- VTI was renamed in 2026: CRSP → Morningstar, after Morningstar bought CRSP. It is better to use the new name on the page.
- GLD and the European gold products are not UCITS funds but ETCs (debt securities backed by metal).
- For SPY, the table gives the gross TER from the prospectus, 0.0945%. Stockanalysis rounds it to 0.09%, so the figure may differ between sites.

## 8. What I could not verify

1. **SCHD returns from the Schwab site.** curl and WebFetch got 403; only the key-facts block made it into the browser snapshot. The table uses third-party data from investor.vanguard.com (QQQ is from there too; I did not open invesco.com).
2. **The PRIIPs and MiFID II texts on EUR-Lex**: bot protection. I took the article numbers from the ČNB clarification and the professional client criteria from the Czech Act 256/2004 Sb.
3. **The IBKR page on PRIIPs** returns 403 or a redirect; the content is from search results.
4. **Revolut**: there is no source at all. **XTB, DEGIRO, Saxo, Trading 212**: only community posts, forums or sources from 2018–2022, no official help pages. **Patria**: a 2022 source.
5. **The route via exercising options**: only blogs and forums, IBKR has no documentation on it.
6. **Which ETFs are inside Portu and Fondee**: the sites did not show it.
7. **Global real equity returns (DMS)**: the UBS PDF summary returned 403. Whether 8.5%/6.9% is a real or nominal return, UBS does not specify.
8. **SPIVA for 15 and 20 years**: the S&P page returned 403. The 79% figure was taken from a quote in search results.
9. **Irish funds do not withhold Irish tax on payouts to a Czech investor**: not checked, worded cautiously.
10. **The exchange of Vanguard funds (NYSE Arca)**: only from stockanalysis. BND and VXUS being on Nasdaq is confirmed by a Vanguard press release and Nasdaq materials via search results.
11. **SEC yield of VT, VEA, VWO, VXUS, VNQ**: the Vanguard API does not provide it, so the TTM from stockanalysis is used instead.
12. **Xetra-Gold costs**: justETF shows a TER of 0.00%, but a storage fee may be charged in a different way; not checked.
13. **The number of holdings of BND** differs: Vanguard says 11,421 bonds as of 31.08.2026, stockanalysis says "15,000". I used the Vanguard figure.
