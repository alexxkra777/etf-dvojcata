# ETF lead-magnet landing page for Czech retail: market & CRO research

Prepared 2026-10-11. All sources were accessed on **2026-10-11** unless a different date is given. "acc." means accessed.
Marking used below:
- **[verified]**: I read the figure on the source page or PDF myself.
- **[secondary]**: the figure comes from a search-engine snippet or a third-party summary. I could not open the primary page (403 or no access), so treat it as indicative.
- **[unverifiable]**: I could not find a source. No number is invented.

---

## TL;DR: can we launch ads tomorrow?

**Not as briefed.** There are three blockers. Each one can be fixed in roughly 1–2 working days.

1. **The product premise is wrong for this audience.** Czech and other EEA retail investors normally **cannot buy US-domiciled, NYSE-listed ETFs** such as VOO, SPY or QQQ. These funds don't publish a PRIIPs KID. Two brokers state this outright:
   - Saxo's Czech price list: *"ETF, které nemají KID v českém jazyce (např. ETF obchodované v USA), jsou dostupné pouze profesionálním investorům"* ([home.saxo/cs-cz](https://www.home.saxo/cs-cz/rates-and-conditions/etf/commissions), acc. 2026-10-11) [verified].
   - IBKR's knowledge base says the same for EEA retail ([ibkrguides.com/kb/article-2993](https://ibkrguides.com/kb/article-2993.htm), acc. 2026-10-11) [secondary].

   A page called "compare NYSE ETFs" would promise something the visitor cannot act on. The page has to reframe to **"US-index exposure via UCITS ETFs you can actually buy in CZ"**. This also matches what Czechs search for: the top related query to "ETF" in CZ is "ucits etf" (see §1.4).
2. **The legal plumbing must be in place before the pixel fires.** That means:
   - an opt-in cookie consent manager (CZ law since 1 Jan 2022);
   - a separate consent for marketing e-mail (zákon 480/2004 Sb. §7);
   - MAR investment-recommendation disclosures, if the page ranks or recommends specific ETFs.
3. **The ad-platform setup needs checking.** Meta allows educational finance content without authorisation. Even so, the campaign should be set up with the 18+ targeting and disclosure rules in mind. Google is phasing in financial-services advertiser verification across all EU/EEA countries in 2026, and the Czech date is not confirmed. **Start with Meta. Add Google or Seznam after a verification check.**

**Recommendation:** fix (1)–(2), then run a small Meta test. The concrete decisions are listed at the end.

---

## 1. Target audience in the Czech Republic

### 1.1 Who invests, and how many (surveys)

| Metric | Value | Source (acc. 2026-10-11) | Status |
|---|---|---|---|
| Share of Czechs (18–65) who "let savings work" | **82 %** in 2026, up from 66 % in 2024 | Index prosperity 2026 (Ipsos for Česká spořitelna), [Seznam Zprávy, 11 Mar 2026](https://www.seznamzpravy.cz/clanek/ekonomika-b2b-investuji-uz-ctyri-z-peti-cechu-inflacni-sok-pusobil-jako-budicek-301142) | verified |
| Share actively investing | **55 %**, up from 41 % two years earlier | same | verified |
| Investors using funds/ETFs (incl. pension funds) | **~59 %** of investors; direct stocks 23 % | same | verified |
| Typical digital-channel client age vs branch client | **35 vs 59 years** (average) | same | verified |
| Barriers for young people | Fear of losing money; not knowing how to start | same | verified |
| Sample of Index prosperity | 1,003 respondents aged 18–65; skews toward men, younger people and higher-income households | [BusinessInfo.cz](https://www.businessinfo.cz/clanky/index-prosperity-pres-8-z-10-cechu-zhodnocuje-sve-uspory-a-vice-nez-polovina-populace-aktivne-investuje/) (page returned 403; read via search snippet) | secondary |
| Young people (16–30) owning some investment product | **39 %**, vs 30 % of people over 31 | Ipsos for the Garanční systém finančního trhu, [Newstream, 31 Aug 2026](https://www.newstream.cz/money/mladi-se-investovani-neboji-vic-nez-tretina-spoleha-jen-na-svuj-usudek) | verified |
| Young investors investing themselves (stocks, ETFs, crypto) via online platforms | **36 %**; 22 % use a robo-app; 27 % use an adviser or bank | same | verified |
| Monthly amount set aside (ages 16–30) | 32 % up to 1,000 CZK; 34 % 1,000–3,000 CZK | same | verified |
| Czechs who invest (Generali V4 survey) | **56 %**; **65 %** of investors hold stocks; **45 %** use online tools (V4 average 37 %) | [E15, 20 Jul 2026](https://www.e15.cz/tiskove-zpravy/cesi-se-neboji-propadu-investuji-nejvic-ve-stredni-evrope-ukazuje-pruzkum-1434425) | verified |
| Typical monthly investment | 1,700–3,000 CZK (attributed to AKAT) | [Seznam Zprávy, 4 Sep 2025](https://www.seznamzpravy.cz/clanek/285261) | verified (as quoted in the article) |

**Income:** I found no published Czech breakdown of ETF investors by income. The only statement available is the qualitative skew toward higher-income households in Index prosperity [secondary]. **[unverifiable]** beyond that.

**Age, inferred:** the core audience for a self-directed ETF page is **roughly 20–40, skewed male**, with an average digital investor age of about 35. This is an inference from the rows above, not a measured ETF-specific demographic.

### 1.2 Market size

| Metric | Value | Source (acc. 2026-10-11) | Status |
|---|---|---|---|
| Household savings placed on the financial market, end-2025 | **7.6 trn CZK** (+9.1 %) | Ministry of Finance, [Zpráva o vývoji finančního trhu 2025 – shrnutí (15 Jul 2026)](https://mf.gov.cz/assets/attachments/2026-07-15_Strucne-shrnuti-Zprava-o-vyvoji-financniho-trhu-v-roce-2025.pdf) | verified (PDF) |
| Household money in investment funds | **almost 1.7 trn CZK** (+278.2 bn CZK); funds' share of household savings is **22.2 %**, while deposits fell to 57.3 % | same | verified |
| Listed shares held by households | ~340 bn CZK (+29.4 %) | same (search summary of the full report) | secondary |
| Fund assets in CZ (AKAT), 30 Jun 2025 | **2.1 trn CZK** record: 1.29 trn in public funds, 812 bn in qualified-investor funds | [Seznam Zprávy, 12 Aug 2025](https://www.seznamzpravy.cz/clanek/ekonomika-finance-investice-do-fondu-v-cesku-prekonaly-dvoubilionovou-hranici-283647) | verified |
| AKAT, end-2025 | 2.247 trn CZK | search snippet citing AKAT | secondary |
| ETF-only volume in CZ | Not published separately by AKAT or ČNB | — | **unverifiable** |

I could not open the ČNB's own household financial-accounts tables in this session. The Ministry of Finance report above is built on market data and is the closest official figure.

### 1.3 Platform client counts

| Platform | Clients | Source (acc. 2026-10-11) | Status |
|---|---|---|---|
| Portu | **>280,000 clients, >55 bn CZK AUM** (end-2025); ~80 % invest regularly; app used by >100k clients weekly; 18–26 segment >16k (+32 %); ~42k DIP contracts | [Portu Annual report 2025 (PDF)](https://cdn.portu.cz/portu/documents/obligatory-published-information/cs/Annual-report-2025.pdf) | verified |
| Portu | **344,000** "klientek a klientů" (ad copy, ad started 23 Sep 2026) | [Meta Ad Library, CZ, query "Portu"](https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=Portu&search_type=keyword_unordered&media_type=all) | verified (advertiser claim) |
| Direct Fondee | **27,000+ clients**; from 500 CZK; "ČNB dohled" badge | [fondee.cz](https://www.fondee.cz/) | verified (advertiser claim) |
| Revolut (all products) | **>1 million** CZ users (Mar 2025); 800k in Sep 2024, **58 % aged 18–34**; ETFs were 12 % of CZ clients' H1-2024 holdings | [CzechCrunch, 28 Mar 2025](https://cc.cz/revolut-v-cesku-raketove-roste-prekonal-milion-uzivatelu-a-nechava-za-sebou-i-velka-bankovni-jmena/); [CzechCrunch, 24 Sep 2024](https://cc.cz/revolut-ma-v-cesku-800-tisic-klientu-vybral-si-je-na-test-a-spousti-tu-pilotne-investicni-aplikaci/) | verified |
| XTB (group, not CZ) | **>2.9 m clients**, ~1.5 m active (28 Jul 2026); "83 % of new users prioritise stocks, ETFs or Investment Plans" | [XTB IR, H1 2026](https://ir.xtb.com/en/xtb-preliminary-h1-2026-results-all-time-high-consolidated-net-profit-and-record-client-base-growth/) | verified |
| XTB CZ only | Not disclosed (an interview with the CZ/SK/HU director gives no CZ number) | [Kurzy.cz](https://zpravy.kurzy.cz/848245-rok-rekordniho-klientskeho-rustu-a-expanze-rozhovor/) | **unverifiable** |
| Trading 212 CZ | Not disclosed | — | **unverifiable** |
| Finax (CZ+SK+…) | ">100,000 clients" in its H1-2026 report | [finax.eu polročná správa 2026 (PDF)](https://www.finax.eu/storage/app/media/_static_docs/sk/polrocna-sprava-2026.pdf) | secondary |

**Mobile share:**

| Metric | Value | Source (acc. 2026-10-11) | Status |
|---|---|---|---|
| Mobile share of CZ web page views, Sep 2026 | **49.2 % mobile / 49.2 % desktop / 1.6 % tablet** (it was 40–48 % in other months of the last year) | [StatCounter CSV, CZ, Sep 2025–Sep 2026](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/czech-republic) | verified |
| Mobile share of landing-page visits (Unbounce dataset, all industries) | **83 %** | [Unbounce CBR 2024](https://unbounce.com/conversion-benchmark-report/) | verified |
| Search engine share in CZ, Sep 2026 | Google **69.6 %**, Seznam **16.5 %**, Bing 11.8 % | [StatCounter search engine CZ](https://gs.statcounter.com/search-engine-market-share/all/czech-republic) | verified |

StatCounter counts all page views. Paid-social traffic is overwhelmingly mobile, so design for **mobile only** and treat desktop as the secondary case.

### 1.4 Search demand (Google Trends, CZ, last 12 months, read 2026-10-11)

I found no free tool that gives absolute Czech keyword volumes: Google Keyword Planner and Seznam Sklik both require a logged-in ad account. Absolute volumes are therefore **[unverifiable]**. Relative interest is shown below.

| Comparison (same chart, average index over 12 m) | Result | Source |
|---|---|---|
| ETF / S&P 500 / investování / XTB / Portu | **61 / 26 / 7 / 31 / 20** | [Google Trends](https://trends.google.com/trends/explore?date=today%2012-m&geo=CZ&q=ETF,S%26P%20500,investov%C3%A1n%C3%AD,XTB,Portu&hl=cs) |
| ETF / VOO / VWCE / CSPX / "nejlepší ETF" | **61 / 3 / 3 / 1 / 0** | [Google Trends](https://trends.google.com/trends/explore?date=today%2012-m&geo=CZ&q=ETF,VOO,VWCE,CSPX,nejlep%C5%A1%C3%AD%20ETF&hl=cs) |
| ETF / "jak investovat" / "S&P 500 ETF" / "investování do ETF" / akcie | **20 / 2 / 1 / 0 / 48** | [Google Trends](https://trends.google.com/trends/explore?date=today%2012-m&geo=CZ&q=ETF,jak%20investovat,S%26P%20500%20ETF,investov%C3%A1n%C3%AD%20do%20ETF,akcie&hl=cs) |
| Top related queries for "ETF" (CZ) | **ucits etf (100), best etf (63), etf news (57), world etf (54), ishares (52)** | [Google Trends, q=ETF](https://trends.google.com/trends/explore?date=today%2012-m&geo=CZ&q=ETF&hl=cs) |
| Rising queries for "ETF" (CZ) | "wood px etf" (breakout), "dram etf", "kospi etf" | same |
| Top related queries for "Portu" | portu dip (100), dip (99), investice portu, portu recenze, portu poplatky | Trends, first comparison above |
| Seasonality of "ETF" | Peak in the week of 25 Jan 2026 (100); lows in Jul–Aug and late Sep 2026 (33–40) | Trends, first comparison above |

**Takeaways:**
- The **short head ("ETF") is the demand**. Ticker queries are tiny: VOO averages 3 against 61 for "ETF", and "nejlepší ETF" has too little data to register.
- The **top related query is "ucits etf"**. That supports the UCITS reframe.
- Interest is **seasonal**: it peaks in January (New-Year resolutions and tax season) and dips in summer.
- "**DIP**", the Czech tax-advantaged long-term investment account, is a big co-query and worth a line on the page.

### 1.5 Beginners' top questions and fears

| Theme | Evidence (acc. 2026-10-11) |
|---|---|
| **Fear of losing money** is the main barrier, followed by fraud and volatility. "Already at a 2 % drop panic begins." | Air Bank's head of investments, [Seznam Zprávy, 4 Sep 2025](https://www.seznamzpravy.cz/clanek/285261) [verified] |
| Not knowing how to start, plus fear of loss, among the young | [Seznam Zprávy, Index prosperity](https://www.seznamzpravy.cz/clanek/ekonomika-b2b-investuji-uz-ctyri-z-peti-cechu-inflacni-sok-pusobil-jako-budicek-301142) [verified] |
| "A third of Czechs don't know how to start investing" | Fondee homepage claim, no study cited ([fondee.cz](https://www.fondee.cz/)) [verified as claim; underlying data unverifiable] |
| **"Why can't I buy VOO?"** (KID/PRIIPs) | [Saxo CZ note](https://www.home.saxo/cs-cz/rates-and-conditions/etf/commissions) [verified]; [IBKR KB 2993](https://ibkrguides.com/kb/article-2993.htm) [secondary] |
| **Which UCITS ETF / which broker / which fees** ("ucits etf", "best etf", "portu poplatky", "portu recenze") | Google Trends related queries above [verified] |
| **Taxes:** 3-year time test; 100,000 CZK annual gross-proceeds exemption; 15 %/23 % rates; accumulating vs distributing ETFs; foreign dividends must be declared | [E15, 28 Apr 2026](https://www.e15.cz/zdaneni-investic-akcie-kryptomeny) [verified] |
| **Currency risk / USD exposure** (">60 % US in a global index") | [Finmag tema ETF](https://www.finmag.cz/tema/etf) (search snippet) [secondary] |
| DIP (long-term investment product) | "portu dip", "dip" as top co-queries [verified]; Portu has ~42k DIP contracts [verified] |

**Forums not reviewed:**
- **Reddit** (r/czech, r/CzechFinance): reddit.com returned 403 to the API, showed a CAPTCHA in the browser, and is blocked for the search tool.
- **Facebook groups**: these require login, which the brief disallows.

Forum-level question frequencies are therefore **[unverifiable]** in this session. The themes above come from surveys, search data and media.

---

## 2. Czech broker landscape for buying ETFs (official price lists, acc. 2026-10-11)

| Broker | ETF / stock commission | FX conversion | Custody / account fee | Minimum | US-domiciled ETFs for CZ retail? | CZK / Czech support | Regulator / entity |
|---|---|---|---|---|---|---|---|
| **XTB** | **0 %** up to €100k monthly turnover; above that 0.2 % (min €10) ([akcie.xtb.com](https://akcie.xtb.com/investujte-do-akcii-bez-poplatku)) | **0.5 %** (same page) | Not shown on the official page. Inactivity fee of €10/month after 12 months with no trade and no deposit in 90 days ([BrokerChooser](https://brokerchooser.com/cs/invest-long-term/costs/inactivity-fee-xtb)) [secondary] | Min. transaction €10 [verified] | Not stated on the official pages [unverifiable] | Czech branch "XTB S.A., organizační složka", Prague 8 ([xtb.com/cz](https://www.xtb.com/cz)) [verified]. CZK account not confirmed on the official page | XTB S.A. (PL) via its CZ branch; home regulator not shown on the page read |
| **Trading 212** | **€0** commission | **0.15 %** ("never more than 0.15 %, even at weekends") | — ; interest paid on CZK cash 3.5 % APY | — | No KID means the order is rejected ([myetfjourney](https://myetfjourney.com/blog/priips-kid-regulation)) [secondary] | CZK is one of 12 account currencies ([Wise](https://wise.com/gb/blog/trading-212-multicurrency-account)) [secondary]. Support is English-only per [fxstreet.cz](https://www.fxstreet.cz/trading-212.html) [secondary] | Trading 212 EU GmbH (BaFin), Markets Ltd (CySEC), Ltd (FSC BG), per [trading212.com/terms/invest](https://www.trading212.com/terms/invest) [verified]. Which entity serves CZ is unverified |
| **Interactive Brokers (IE)** | Germany: tiered **0.05 % min €1.25**, max €29; fixed 0.05 % min €3. US: tiered $0.0035/share min $0.35; fixed $0.005 min $1 ([IBKR Europe](https://www.interactivebrokers.ie/en/pricing/commissions-stocks.php?region=europe); [Americas](https://www.interactivebrokers.ie/en/pricing/commissions-stocks.php?region=americas)) | Site banner: "0.03 % FX rates" | No account minimum stated | **No:** "EEA and UK Retail clients cannot purchase" US ETFs without a KID ([IBKR KB](https://ibkrguides.com/kb/article-2993.htm)) [secondary] | Czech UI/support not verified | Interactive Brokers Ireland Ltd |
| **DEGIRO** | Core Selection ETFs: **€0 commission + €1 handling fee**. Other ETFs: €2 + handling. USA: €1 ([degiro.cz/poplatky](https://www.degiro.cz/poplatky)) | **AutoFX 0.25 %**; manual €10 + 0.25 % | Connectivity fee ≤0.25 % of account value, **max €2.50 per exchange per year** (Prague exempt) | — | No KID means rejection [secondary] | Czech-language site [verified] | flatexDEGIRO Bank SE (BaFin), Dutch branch (AFM/DNB) [verified] |
| **Fio e-Broker** | Xetra: **€3.95** (≤€1,400), €4.95 (≤€3,000), 0.15 % min €6.95 above; DIP ≤€500: €1.98. USA: **$7.95** (≤100 shares), $9.95 (>100). Price list valid from 1 Jul 2026 ([Fio ceník PDF](https://www.fio.cz/docs/cz/C_zaklad_260701.pdf)) | Not in the price list (the bank's FX rate applies) [unverifiable] | Custody **free** for USA/Xetra collective accounts (same PDF) | Not stated | Not stated in the price list [unverifiable] | Czech bank, CZK, Czech support | Fio banka, a.s. (Czech bank, ČNB) |
| **Revolut** | Commission-free orders per plan: Premium 5/month, Metal/Ultra 10. Commission charged beyond that, amount not shown on the page ([revolut.com/cs-CZ/etfs](https://www.revolut.com/cs-CZ/etfs/)). ETF recurring plans: 300+ EU ETFs commission-free ([E15 press release](https://www.e15.cz/tiskove-zpravy/revolut-oznamil-spusteni-etf-investicnich-planu-bez-poplatku-1421634)) [secondary] | FX fee "may apply" (amount not on page) | Plans: Plus 114.99, Premium 244.99, Metal 394.99, Ultra 1,320 CZK/month | From €1 (fractional) | Page lists EU ETFs; US ETFs not verified | Czech-language site; CZK | Revolut Securities Europe UAB (Bank of Lithuania) [verified] |
| **Saxo** | NYSE: **0.08 % min $1** (Classic). Xetra: 0.08 % min €3. Prague: 0.25 % min 75 CZK ([Saxo CZ ETF commissions](https://www.home.saxo/cs-cz/rates-and-conditions/etf/commissions)) | Not read [unverifiable] | Custody 0.15 % p.a. (Classic), min €5/month + VAT (search snippet of the Saxo page) [secondary] | — | **No: "pouze profesionálním investorům"** [verified] | Czech-language site | Saxo Bank A/S (not re-verified) |
| **LYNX** | European shares (Tradegate): **€1 + 0.15 %**, max €99. US: $0.01/share, min $5, max 2 %. Prague: 99 CZK + 0.20 % ([lynxbroker.cz/poplatky](https://www.lynxbroker.cz/poplatky/)) | You choose when to convert (rate not read) | Inactivity fees exist (category listed; amount not read) | Not read | Not stated [unverifiable] | Czech site and support | Executes via Interactive Brokers (per LYNX) |
| **Portu** (robo + brokerage) | Managed portfolio: **1.00 % p.a.** (<0.5 m CZK), 0.50 % for under-26s. Brokerage: **0.4 %** per order, min 39 CZK / €2 / $2 ([Sazebník, valid from 1 Sep 2026](https://www.portu.cz/documents/download/generaldocument/cs/PriceList)) | **0.4 %** | Brokerage custody **0.05 % p.a.** | — | Not stated | Czech company, CZK, Czech support | WOOD Retail Investments a.s. (Prague) |
| **Direct Fondee** (robo) | **1.09 % p.a. all-in**; 0.9 % from 10k CZK/month or 1 m portfolio; 0.7 % from 30k/month or 3 m. Child/DIP rates also listed (0.24 %, 0.3 %, 0.61 %; the mapping is ambiguous on the page) ([fondee.cz/poplatky](https://www.fondee.cz/poplatky)) | Included | Included | **500 CZK** | No (managed UCITS portfolios) | Czech | Direct Fondee a.s.; site shows a "ČNB dohled" badge |
| **Finax** (robo) | **1 % + SK VAT** p.a. up to €100k; 0.85 % above; 0.65 % above €500k; ETF trades free ([finax.eu/cs/poplatky-a-cenik](https://www.finax.eu/cs/poplatky-a-cenik)) | Included | Included | Not read | No (managed UCITS) | Czech site; CZK return disclaimer | Finax (SK) |
| **Anycoin** | No evidence of any ETF offering | — | — | — | — | — | **Exclude** (crypto) |

**What this means for the page:**
- **None of the mainstream CZ retail routes gives a beginner VOO/SPY/QQQ.** The comparison has to be of **UCITS equivalents**: S&P 500 via CSPX/SXR8/VUAA, world via VWCE/IWDA. Those are the tickers Czechs already search for, and justETF-type data covers them.
- **Fees that really differ:** commission (0 at XTB and T212, €1-ish at DEGIRO and IBKR, €3.95+ at Fio) and **FX**: 0.15 % at T212, 0.25 % at DEGIRO, 0.4 % at Portu, 0.5 % at XTB. **FX is the hidden cost for a CZK investor** and a strong "aha" line for the page.
- **Every fee cell must be date-stamped** ("stav k 11. 10. 2026") and linked. Several lists changed in 2026: Fio from 1 Jul, Portu from 1 Sep, and XTB's terms on 14 Mar per [Finhacker](https://www.finhacker.cz/xtb-shrnuti-zmen-smluvni-dokumentace-ucinne-od-14-brezna-2026/) [secondary].

---

## 3. Competitor landing pages and lead magnets (CZ/SK)

| Site | What they offer for the contact | Form fields | CTA wording | First-screen promise | Source (acc. 2026-10-11) |
|---|---|---|---|---|---|
| **XTB, "Jak si vytvořit první portfolio"** | Free video course; the ad says 8 videos, the page says 7; full access only "jako klient XTB" | **4 required:** first name, last name, e-mail, phone, plus 2 checkboxes (privacy acknowledgement; separate *"Souhlasím se zasíláním obchodních sdělení"*) | "ZÍSKAT KURZ ZDARMA"; secondary "OTEVŘÍT ÚČET ZDARMA" | "Investování nemusí být složité – ukážeme vám první kroky od nuly." | [vzdelavani.xtb.com/tvorba-akcioveho-portfolia](https://vzdelavani.xtb.com/tvorba-akcioveho-portfolia) |
| **Portu** | **Ungated** return calculator (one-off amount, monthly amount, horizon, 3 risk profiles, optimistic/expected/pessimistic scenarios) | none (CTA leads to registration) | "Začít investovat" | "Investuj. Nestresuj." / "Zjistěte, kolik vám investování s Portu může vydělat" + "Minulé výnosy nejsou zárukou budoucích." | [portu.cz](https://www.portu.cz/) |
| **Direct Fondee** | Calculator + questionnaire funnel ("Vyplnit dotazník") | none on the homepage | "Začít investovat", "Investiční kalkulačka" | "Investování, kterému rozumíte" + trust stack (ČNB dohled, 27,000+ clients, "až 11,7 %" 10-year return, from 500 CZK) | [fondee.cz](https://www.fondee.cz/) |
| **Investiční web** | Daily morning newsletter | **e-mail only** | "Odeslat" | "Každý den ráno shrnutí toho nejdůležitějšího ze světa investic." + "Odesláním souhlasíte se zásadami o ochraně osobních údajů." | [investicniweb.cz](https://www.investicniweb.cz/) |
| **Peníze.cz** | Newsletter | **e-mail only** | "Odebírat" | (newsletter box in the page chrome) | [penize.cz](https://www.penize.cz/) (404 page chrome on the calculator URL) |
| **Finex.cz** | Akademie (17 courses, "300+ lekcí") behind an account / "Finex Premium" | account registration | "Otevřít kurz", "Získejte Finex Premium" | "Investiční vzdělání, které má smysl" | [finex.cz/akademie](https://finex.cz/akademie/) |
| **"Průvodce investicemi"** (Meta ad) | "ETF příručka" + **automatic free consultation call** | Meta instant form (fb.me) | "Chcete si stáhnout ETF příručku?" | "Zajímavá, **bezpečná a také výnosná** alternativa…" | [Meta Ad Library "ETF zdarma"](https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=ETF%20zdarma&search_type=keyword_unordered&media_type=all) |
| **"Investiční spoření jednoduše"** (Meta ad) | E-book "Jak sestavit nejlepší investiční portfolio v roce 2026" | "Vyplňte formulář" (instant form) | "Stáhnout" | "Rok 2026 přináší jedinečné příležitosti…" | same |
| **"Investování pro holky"** (Meta ad) | Free webinar; comment "chci investovat" and the link arrives by DM | comment → DM | — | "jak začít investovat … prostřednictvím indexových ETF" | same; landing at [investovaniproholky.cz](https://vzdelavani.investovaniproholky.cz/) |
| **Finademica** (Meta ad) | Free AI portfolio check ("do 2 minut") | (tool) | "Zkontrolovat portfolio" | "Deset různých akcií v portfoliu ještě neznamená deset různých rizik." | same |

**Not reviewed:** Rodinné finance, bankovnipoplatky.com, srovnejto.cz, Patria. Reviewing them would have pushed past the time budget. The patterns above already cover broker, robo, media and adviser funnels.

### 5 good patterns to copy
1. **Instant value without a gate.** Portu's calculator shows a number in the first screen and adds a past-performance disclaimer. Our version: let the visitor see the comparison table, and gate only the **PDF / e-mail series**.
2. **E-mail-only form with a concrete cadence promise**, as Investiční web does ("každý den ráno shrnutí…").
3. **Separate, unticked marketing-consent checkbox**, as XTB does. It is legally clean (§5).
4. **Trust stack above the fold**: regulator badge, client count, low entry amount (Fondee). For a publisher: author name + credentials, data date, "nezávislé srovnání".
5. **Objection-led copy aimed at beginners' fears**: XTB's "Tento kurz je pro vás, pokud… bojíte se udělat chybu" maps directly onto the survey fears in §1.5.

### 5 bad patterns to avoid
1. **Phone number and surname required for a "free" PDF/course** (XTB). Every extra field is friction, and phone signals sales calls (§4).
2. **Ad ↔ page mismatch**: 8 videos in the ad, 7 on the page (XTB). A "free" course that is partly locked until you become a client.
3. **"Bezpečná a výnosná" claims and an automatic adviser call** (Průvodce investicemi). This is misleading under ČNB's "nejasné, nepravdivé, zavádějící" standard (§5) and feels like bait.
4. **Cherry-picked performance in the hero** ("až 11,7 % průměrný roční výnos", Fondee; "28–38 % ročního výnosu", W&Go car-wash ad). This invites regulatory and ad-policy trouble and sets false expectations.
5. **Implied consent by submitting** ("Odesláním souhlasíte…", Investiční web). It is fine for an editorial newsletter the user asked for. It is weak if the list will later carry commercial offers (§5).

---

## 4. Benchmarks

### 4.1 Landing-page conversion rates

| Benchmark | Value | Source (acc. 2026-10-11) | Status |
|---|---|---|---|
| All-industry median landing-page conversion rate | **6.6 %** (41k+ pages, 57m+ conversions) | [Unbounce CBR 2024](https://unbounce.com/conversion-benchmark-report/) | verified |
| Financial services median | **8.3 %**; **investing subcategory 3.9 %** (top performers up to 20.6 %); insurance 18.2 %; credit/lending 8.8 % | [Unbounce, Finance & Insurance](https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate) | verified |
| Finance: mobile vs desktop | **Mobile 11.5 % vs desktop 9 %** (mobile +27.8 %) | same | verified |
| All industries: mobile vs desktop | 83 % of visits on mobile, but mobile converts **8 % worse** than desktop | [Unbounce CBR 2024](https://unbounce.com/conversion-benchmark-report/) | verified |
| Finance: by channel | Paid social **9.3 %**; paid search 10.1 %; e-mail 7.9 % | Unbounce finance page | verified |
| Copy reading level (finance) | 5th–7th grade **18.1 %** vs 8th–9th grade 6.5 %; best word count **195–715 words** | Unbounce finance page | verified |
| Google Ads, Finance & Insurance CVR | **2.55 %** (LocaliQ/WordStream 2025) | via [Search Engine Journal](https://www.searchenginejournal.com/what-are-good-google-ads-benchmarks/546995/) | secondary |
| Google Ads, all-industry avg CPL | $70.11 (2025) | WordStream, as quoted on its own Facebook-benchmarks page ([wordstream.com](https://www.wordstream.com/blog/facebook-ads-benchmarks-2025)) | verified (quoted figure) |

### 4.2 Meta / Google costs

| Benchmark | Value | Source (acc. 2026-10-11) | Status |
|---|---|---|---|
| Meta traffic campaigns, Finance & Insurance | **CTR 0.98 %, CPC $1.22** (the highest CPC of all industries) | [WordStream Facebook Ads Benchmarks 2025](https://www.wordstream.com/blog/facebook-ads-benchmarks-2025) | verified |
| Meta lead campaigns, all industries | **CVR 7.72 %, CPL $27.66** (+20.9 % YoY); finance is *not* listed in the lead-campaign table | same | verified |
| Meta average CPC / CPM / CPL, global, July 2025 | $0.768 / $15.49 / $44.55 (Shopify CZ blog; global, not Czech) | [Shopify CZ](https://www.shopify.com/cz/blog/kolik-stoji-reklama-na-facebooku) | verified (global) |
| Meta CPC/CPL for **finance in CZ or CEE** | No public source found | — | **unverifiable** |
| Google Ads CPC for finance in CZ | No public source found | — | **unverifiable** |

**Illustrative planning math (my calculation, not a benchmark):** the WordStream finance traffic CPC of $1.22 is US-weighted, and Czech CPCs are usually lower. At Unbounce's investing (3.9 %) to finance (8.3 %) CVR range, that gives a **CPL of about $15–31**. Replace this with real numbers after 3–5 days of the test.

### 4.3 Form design evidence

| Finding | Source (acc. 2026-10-11) | Status / caveat |
|---|---|---|
| Fewer fields convert better, but single-line text fields cost little. Multiple drop-downs and textareas hurt most (40k+ HubSpot landing pages) | [HubSpot, Dan Zarrella](https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx) | verified; an old analysis (updated 2025) |
| Cutting an 11-field form to 4 fields gave **+160 % submissions** | [Imaginary Landscape case study, 2008 (PDF)](https://imagescape.com/filer/canonical/1455648270/152) | verified. **Tiny sample: 10 vs 26 submissions.** Directional only |
| Phone field average abandonment 6.4 %; people fear sales calls | Zuko data via [Reform blog](https://www.reform.app/blog/how-to-reduce-form-abandonment-insights-from-zuko-analytics) | secondary |
| Multi-step forms: claims of +11 %→46 % (BrokerNotes / Venture Harbour), "+86 %", "+300 %" | blog summaries ([whitehat-seo](https://whitehat-seo.co.uk/blog/inbound-marketing-convert-forms)) | **secondary, inconsistent; don't cite as fact** |
| Quiz funnels: **40.1 % start-to-lead** (denominator = quiz starts, vendor data); 65 % finish | [Interact report](https://www.tryinteract.com/blog/quiz-conversion-rate-report/) | verified, vendor-published |
| Quiz funnels as landing pages: **11.28 % visitor-to-lead** (1,063 campaigns); all formats 7.85 % | [ConvertFlow benchmark, Sep 2026](https://www.convertflow.com/benchmark-reports/lead-generation-quiz-funnel-benchmark-september-2026) | verified, vendor-published |

**Read-out:**
- **E-mail-only is the right default** for a cold mobile visitor with a few seconds of attention.
- A **micro-quiz** (2–3 taps, e.g. "Kolik chcete investovat měsíčně?" / "Máte už brokera?") placed **before** the e-mail step is a defensible A/B variant. Vendor data puts its visitor-to-lead rate at 8–11 %, in the same band as Unbounce's finance median. That is not proven better, so test it rather than assume it.

---

## 5. Legal constraints (CZ/EU) and what they mean in practice

*This is research, not legal advice. Have a Czech lawyer review the final page and e-mail flow.*

| Topic | Rule | Source (acc. 2026-10-11) | Practical implication |
|---|---|---|---|
| **Marketing e-mail** | §7 zákon 480/2004 Sb.: electronic commercial communications only to users with **prior consent**. The exception covers only an existing customer's address for similar own products. Each e-mail must be clearly marked as commercial, identify the sender, and carry a working opt-out address. Supervisor: **ÚOOÚ** (§10) | [zakonyprolidi.cz 2004-480](https://www.zakonyprolidi.cz/cs/2004-480) [verified] | 1) Deliver the PDF/series the user asked for. 2) **Separate unticked checkbox** for "novinky a nabídky". 3) Mark e-mails as "obchodní sdělení" when they are; unsubscribe link in every mail |
| **Freely given consent** | GDPR Art. 7(4): consent is not "freely given" if a service is made conditional on consent the service doesn't need. EDPB Guidelines 05/2020 cover cookie walls and conditionality | [summary of EDPB 05/2020](https://www.algoodbody.com/insights-publications/edpb-issue-updated-guidelines-on-consent) [secondary] | Don't make **marketing** consent the price of the PDF. Sending the requested PDF is a separate purpose from the newsletter |
| **Cookies / Meta pixel / analytics** | CZ opt-in since **1 Jan 2022** (§89(3) zákon 127/2005 Sb.); non-technical cookies (analytics, marketing) **need consent** | ÚOOÚ seminar deck ([uoou.gov.cz PDF](https://uoou.gov.cz/media/seminare-uoou/prezentace/2024-06-12-p04-praxe-uoou-v-oblasti-cookies.pdf)), [ePravo](https://www.epravo.cz/clanky/cookies-nove-jen-se-souhlasem-poslanecka-snemovna-prijala-zprisnujici-pravidla-od-roku-2022-113207.html) [secondary: search summaries of both] | A CMP with "Odmítnout" as easy as "Přijmout vše" (Finex and investovaniproholky do this). **Fire the Meta pixel / GA only after consent.** Expect missing conversions from people who decline, and keep server-side lead counts as the source of truth |
| **"Not investment advice"** | **Investment advice** = an individualised recommendation for a specific transaction. It needs a licence (broker, investment intermediary, tied agent). Fine up to **150 m CZK**. It can arise in **replies to comments** | [ČNB warning to finfluencers, 23 Jan 2025](https://www.cnb.cz/cs/dohled-financni-trh/ochrana-spotrebitele/upozorneni/Upozorneni-Ceske-narodni-banky-pro-influencery-v-oblasti-financi/) [verified] | Generic, non-personalised comparison only. No "for you, buy X" outputs, including from a quiz result. Train whoever answers comments and e-mails |
| **Investment recommendation (MAR)** | Any public communication advising buy/sell/hold of instruments is a recommendation. **Direct** recommendations need: author identity, date and time, facts separated from opinion, sources, **conflicts of interest**. "Experts" (people who repeatedly present financial expertise) have extra duties: methodology, horizon, risk warning, update frequency. Fines up to **15 m CZK** (natural person) / **30 m CZK** (legal person) | same ČNB page [verified] | Avoid "nejlepší ETF – kupte" framing. If the page ranks ETFs, add a methodology box, author + date/time, sources, and an **affiliate / conflict-of-interest disclosure** |
| **Paid by brokers (affiliate / CPL)** | The broker stays responsible for promotion done for it. Only its employee, investment intermediary or tied agent may **represent** it. Promotion must be clearly identifiable as promotion and must not contain "nejasné, nepravdivé, zavádějící nebo klamavé informace". Risky or complex products without advice are generally unsuitable for finfluencer promotion | [ČNB warning to investment-service providers, 23 Jan 2025](https://www.cnb.cz/cs/dohled-financni-trh/ochrana-spotrebitele/upozorneni/Upozorneni-Ceske-narodni-banky-pro-poskytovatele-investicnich-sluzeb-spolupracujici-s-finfluencery/) [verified] | Label affiliate links ("reklama / affiliate odkaz"). Don't promote CFDs. Don't imply we act for the broker |
| **Meta ad policy** | Financial ads may require proof of authorisation "where this is a requirement". Ads for **education/training** and ads that "only mention a financial service or product without the ability to obtain or connect with" it can run **without authorisation**. **CFDs and binary options are prohibited.** Ads must not directly request PII or financial info | [Meta Transparency Centre, change log up to 30 Apr 2026](https://transparency.meta.com/en-gb/policies/ad-standards/restricted-goods-services/financial-services/) [verified] | Position the ad as an **educational comparison / guide**. Never advertise CFDs. Keep the form on our page (consent control). If an instant form is used, ask only for e-mail |
| **Meta Special Ad Category "Financial products and services"** | Mandatory for US-targeted campaigns since 21 Jan 2025. Audience restrictions (age, gender, lookalikes…) apply in the US, Canada and "certain countries of Europe" (the list is not given) | [Meta Business Help 298000447747885](https://www.facebook.com/business/help/298000447747885) [verified] | Not clearly mandatory for CZ. Declare it if Ads Manager flags the campaign. Plan creative to work without lookalikes or narrow age targeting, as a fallback |
| **Google Ads** | Financial-services advertiser verification extended to **all EU/EEA** markets in phases, with 30 days to verify, after which ads are restricted. Announced 23 Jun 2026 | [Google blog](https://blog.google/products/ads-commerce/eu-financial-advertiser-verification/) [verified]; Czechia's date not confirmed (one report lists 23 Jul 2026 for other countries: [ppc.land](https://ppc.land/google-expands-financial-ad-verification-to-24-eu-and-eea-countries/)) [secondary] | Before Google search ads, check in the Ads account whether "financial services verification" is required. An unlicensed publisher may be limited to pure education. Use Meta first |
| **Taxes on the page** | Time test 3 years; 100,000 CZK gross-sales exemption; 15 %/23 % | [E15, 28 Apr 2026](https://www.e15.cz/zdaneni-investic-akcie-kryptomeny) [verified] | It is fine to state the general rules with a date and source. Add "nejde o daňové poradenství" |

---

## 6. Ad creative insights (Meta Ad Library, country = CZ, active ads, read 2026-10-11)

| Advertiser | Hooks and formats seen | Library link |
|---|---|---|
| **XTB** (~250 results for "XTB") | (a) **Lead magnet**: free course "Naučte se investovat do akcií a ETF… 8 videí", CTA "Získejte investiční kurz zdarma" / "Download". (b) **Fees**: "Jaké jsou poplatky? Nulové poplatky!" with a 0 %/€100k/0.5 % FX fine-print block. (c) **Speed**: "účet už za 15 minut". (d) **Identity/pride**: "Peníze máš. Teď je nech pracovat pro tebe. Tak přemýšlí investor." (e) **Rate offer**: "5% úrok p.a. … na 90 dní". (f) **Topical**: tariffs ("Odpočítávání začalo – jak zareagujete?"), defence e-book. (g) **Comparison video**: "Byt, nebo investice?" Formats: short video (15–39 s), static, app-install | [XTB, CZ](https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=XTB&search_type=keyword_unordered&media_type=all) |
| **Portu** (~110 results; many non-Portu) | "Nemusíte být investiční expert, stačí chtít začít"; social proof "Věří nám už přes 280 tisíc investorů" → "344 000 klientek a klientů"; "Máte bankovní aplikaci? Tak proč ne taky investiční?" (analogy to a standing order); tagline "Investuj. Nestresuj." / "Bohatší stáří začíná u nás". App-install + 6–15 s video | [Portu, CZ](https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=Portu&search_type=keyword_unordered&media_type=all) |
| **Direct Fondee** | **Calculator hook**: "Spočítejte si, kolik může mít vaše investice za 10, 20 nebo 30 let" (43 s video). **Transparency hook**: "Bez skrytých poplatků a záhadných poznámek pod čarou 👀". Kids' account (SK) | [Fondee, CZ](https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=Fondee&search_type=keyword_unordered&media_type=all) |
| **Revolut** | Generic account acquisition ("Přidejte se k milionům…", "Otevřete si účet během chvilky"). **No investment-specific CZ ad** found for "Revolut" / "Revolut investování" | [Revolut, CZ](https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=Revolut&search_type=keyword_unordered&media_type=all) |
| **Trading 212** | **No Trading 212-run ads** found under the exact phrase in CZ. The only hit was a Slovak creator ("Investovanie pre Začiatočníkov") comparing bank funds vs XTB vs T212 pies, with a YouTube link and a risk disclaimer | [exact "Trading 212", CZ](https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=%22Trading%20212%22&search_type=keyword_exact_phrase&media_type=all) |
| **Small lead-gen players** ("ETF zdarma", ~44 results) | E-book / "ETF příručka" via instant forms with a consultation upsell; comment-to-DM webinar; AI portfolio check; non-financial "investment" offers with yield claims | [ETF zdarma, CZ](https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=ETF%20zdarma&search_type=keyword_unordered&media_type=all) |

**Patterns:**
- Big brands push **simplicity ("nemusíte být expert"), zero or low fees, social proof (client counts) and app installs**.
- Lead-magnet ads are mainly **XTB's own course** and small advisers using **instant forms**.
- No competitor ad found makes a **"why you can't buy VOO / what to buy instead" myth-buster**, a **"hidden FX fee" comparison**, or a **neutral broker-fee table**. That is the open angle.

---

## Implications for the page: 15 decisions

1. **Reframe the offer.** Use "S&P 500 a další americké indexy přes ETF, které si v ČR opravdu koupíte (UCITS)". Mention VOO/SPY/QQQ only to explain the KID block (Saxo/IBKR, §2). Don't promise access to NYSE ETFs.
2. **Make the hero promise one sentence plus one field.** For example: "Srovnání S&P 500 ETF a brokerů pro Čechy – poplatky v korunách, stav k 11. 10. 2026". Below it: e-mail input + "Pošlete mi srovnání". Design mobile-first at 360 px. No carousel, no video in the hero.
3. **Use an e-mail-only form.** No name, no phone. Phone fields add abandonment and imply sales calls (§4.3), and they are the key "bad pattern" at XTB.
4. **Gate the depth, not the gist.** Show a short teaser table (3 UCITS S&P 500 ETFs: TER, exchange, currency) ungated, Portu-style instant value. Gate the full PDF (ETFs + broker fee/FX matrix + tax basics) and the 5-day e-mail course.
5. **Put FX cost at the centre.** "Kolik vás stojí převod korun na dolary/eura: 0,15 % až 0,5 %" (§2). It is concrete, CZK-specific, and missing from competitor ads.
6. **Split consent.** The requested PDF/course is delivered on request. Marketing news gets a separate unticked checkbox, "Chci dostávat novinky a nabídky (můžu se kdykoli odhlásit)" (480/2004 §7, GDPR 7(4)). Every e-mail carries sender identity and an unsubscribe link.
7. **Use double opt-in.** This is my recommendation, not a legal requirement found in the sources. It protects deliverability and proves consent.
8. **Add a cookie CMP before launch.** "Přijmout vše / Odmítnout / Nastavit" with equal prominence. Load the Meta pixel and GA only after opt-in. Count leads server-side as the source of truth.
9. **Add a compliance footer and box on the page:**
   - "Informace mají vzdělávací charakter, nejde o investiční doporučení ani poradenství";
   - author + date/time + sources + methodology;
   - "Minulé výnosy nejsou zárukou budoucích";
   - a capital-at-risk line;
   - an affiliate / conflict-of-interest disclosure if any broker pays us (ČNB/MAR, §5).
10. **Ban claim words.** No "nejlepší", "bezpečné", "garantovaný výnos", no headline return percentages, no CFDs anywhere (ČNB "zavádějící" standard; Meta bans CFD promotion).
11. **Date-stamp and link every number.** Assign an owner to re-check fees monthly: Fio, Portu and XTB terms all changed in 2026.
12. **Write in Czech at a 5th–7th-grade reading level, 195–715 words.** Unbounce finance data shows the best CVR there (§4.1). Write short sentences, cut jargon, explain "UCITS", "TER" and "KID" in one line each.
13. **Lead the copy with the measured fears.** Fear of losing money, not knowing where to start, fear of choosing wrong (§1.5). Add one line each on the 3-year tax test and DIP, which are high-interest co-queries.
14. **Launch on Meta first. Google/Seznam later.** Run 2–3 creatives:
    - a myth-buster: "Proč si VOO nekoupíte (a co místo něj)";
    - a hidden FX fee comparison;
    - a calculator-style "kolik zaplatíte na poplatcích za 10 let".

    Use 6–20 s vertical video and static images. Target 18+ with broad audiences and declare a special ad category if prompted. Check Google financial-services verification before any search campaign.
15. **Set test KPIs and kill rules up front.**
    - Benchmark CVR band: **3.9 % (Unbounce investing median) to 8.3 % (finance median)**; paid-social finance median 9.3 %.
    - Planning CPL: about **$15–31** (illustrative, §4.2). Replace it with real data after ~3–5 days.
    - A/B test 1: e-mail-only vs a 2-tap micro-quiz → e-mail.
    - A/B test 2: teaser table visible vs hidden.
    - Plan bigger spend around January, when interest peaks (§1.4).

**Answer to the reviewer:** **No-go tomorrow as briefed** because of the NYSE-ETF premise, missing consent/CMP plumbing and missing MAR/affiliate disclosures. It becomes a **conditional go for a small Meta test** once decisions 1, 3, 6, 8 and 9 are implemented, which is about 1–2 days of work.

## Independent tariff check — 11 Oct 2026

DEGIRO Core Selection pricing (€1 handling only) applies exclusively to Tradegate. The calculator uses SXR8 on Xetra, so it now uses €2 commission + €1 handling and the Xetra connectivity fee. ETF trades on Tradegate have no connectivity fee. Sources: [Core Selection exchange rule](https://www.degiro.cz/helpdesk/fees/why-are-there-commission-fees-charged-etf-etf-core-selection-list), [current price list](https://www.degiro.cz/poplatky), [Core Selection](https://www.degiro.cz/poplatky/etf-core-selection), accessed 2026-10-11.
