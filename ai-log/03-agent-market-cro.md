# Agent: Czech market, brokers, conversion

Claude Code sub-agent log, exported from `agent-a99288b03f7414405.jsonl`.
Tool outputs longer than 1,500 characters are shortened.
Russian prose and localized tool output are translated into English; executed tool code is retained.

## Brief

You are a growth/CRO researcher. A company wants a lead-magnet landing page: comparison of NYSE-traded ETFs for a CZECH retail investor who arrives from a paid ad on mobile and spends only a few seconds on the page. Goal = collect the visitor's contact (email). The reviewer's question: "Could we launch ads to it tomorrow?" Today is 2026-10-11. Research only, no code.

Produce evidence for these decisions, every claim with source URL + accessed date:
1. Target audience in CZ: who invests in ETFs (age, income, mobile share), size of the market (ČNB data, AKAT statistics, surveys by e.g. Česká spořitelna/Partners/STEM/Ipsos/Median about investing habits, number of XTB/Trading 212/Portu/Fondee/Revolut clients in CZ). Top questions and fears beginners have (Reddit r/czech, r/czechfinance / r/CzechFinance, Finex.cz, Investiční web, penize.cz forums, Facebook groups). Common keyword demand: "ETF", "jak investovat do ETF", "S&P 500 ETF", "nejlepší ETF", "VOO" etc. (Google Trends/keyword tools free).
2. Czech broker landscape for buying ETFs: XTB, Trading 212, Interactive Brokers, Degiro, Fio e-Broker, Revolut, Saxo, Lynx, Portu, Fondee, Finax, Anycoin? — fees per trade, FX conversion fee, custody fee, minimum, whether they offer US-domiciled ETFs to CZ retail clients (PRIIPs/KID) and UCITS ETFs, CZK accounts, Czech-language support, regulator. Source each from the broker's official price list (ceník) with date.
3. Competitors' landing pages / lead magnets in this niche in CZ/SK (e.g. Investiční web e-books, Finex, Portu calculators, XTB academy, Fondee, Finax, Peníze.cz calculators, "Rodinné finance", bankovniposplatky.cz, srovnejto, Patria). What they offer in exchange for email, form fields, CTA wording, first-screen promise. Note 5 good and 5 bad patterns.
4. Benchmarks: typical lead-gen landing page conversion rate for finance (Unbounce Conversion Benchmark Report, HubSpot, WordStream; mobile vs desktop), typical Meta/Google CPC/CPL in CZ or CEE for finance, effect of number of form fields, of email-only forms, of multi-step forms / quiz funnels. Cite.
5. Legal constraints for such a page in CZ/EU: GDPR consent for marketing email (zákon 480/2004 Sb. o některých službách informační společnosti — commercial communications need consent), cookie consent for analytics/Meta pixel (ePrivacy, Czech law since 2022 opt-in), investment advice disclaimer (ČNB, MiFID II — what a non-licensed publisher may say; "not investment advice"), Meta ad policy for financial products and special category, Google Ads financial services verification. Practical implications for the page and ads.
6. Ad creative insights: what Czech finance ads on Meta look like (Meta Ad Library for XTB, Portu, Fondee, Trading 212, Revolut in CZ — describe hooks and formats; you can open https://www.facebook.com/ads/library/ via WebFetch if it works, otherwise use articles).

Rules: WebSearch/WebFetch heavily; never invent numbers; if unverifiable say so. No signups/forms/git, don't touch other files.

Output: [redacted: local path] (English, sections 1–6, tables where useful, with a final "Implications for the page" list of 15 concrete decisions). Create the folder if missing. Final message: 15-line summary + path.

→ `ToolSearch`

<details><summary>result</summary>

```

```
</details>

→ `WebSearch` AKAT statistika 2025 objem majetku fondů ETF Česko

→ `WebSearch` průzkum investování Češi ETF 2025 kolik procent investuje věk

→ `WebSearch` XTB počet klientů Česko 2025

→ `WebSearch` Portu Fondee počet klientů 2025 objem majetku

<details><summary>result</summary>

```
Web search results for query: "XTB počet klientů Česko 2025"

Links: [{"title":"www.letemsvetemapplem.eu","url":"https://www.letemsvetemapplem.eu/?p=799260"},{"title":"Představujeme brokera XTB","url":"https://iocharts.io/cs/blog/xtb-broker-elemzes-ezt-tudja-a-platform-2026-ban/"},{"title":"Představujeme brokera XTB","url":"https://iocharts.io/cs/blog/Anal%C3%BDza-brokera-xtb%3A-tohle-platforma-v%C3%AD-v-roce-2026/"},{"title":"Predstavujeme brokera XTB","url":"https://iocharts.io/sk/blog/Anal%C3%BDza-brokera-xtb%3A-toto-platforma-vie-v-roku-2026/"},{"title":"biznes.pap.pl","url":"https://biznes.pap.pl/wiadomosci/firma/1410"},{"title":"Predstavujeme brokera XTB","url":"https://iocharts.io/sk/blog/xtb-broker-elemzes-ezt-tudja-a-platform-2026-ban/"},{"title":"Predstavujeme brokera XTB","url":"https://iocharts.io/sk/blog/?p=10750"},{"title":"Rok rekordního klientského růstu a expanze - rozhovor","url":"https://zpravy.kurzy.cz/848245-rok-rekordniho-klientskeho-rustu-a-expanze-rozhovor/"},{"title":"w xtb jest juz ponad 2 mln klientow wstepne wyniki xtb za iii kwartal 2025 roku","url":"https://comparic.pl/w-xtb-jest-juz-ponad-2-mln-klientow-wstepne-wyniki-xtb-za-iii-kwartal-2025-roku/"}]

Konkrétní počet klientů XTB v Česku za rok 2025 jsem ve výsledcích nenašel. Dostupná čísla se týkají celé skupiny.

- **Celosvětově:** Podle předběžných výsledků za rok 2025 vzrostl počet aktivních klientů meziročně o téměř 70 % a dosáhl 1,19 milionu. Podle předběžných finančních výsledků za rok 20
… [1177 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "průzkum investování Češi ETF 2025 kolik procent investuje věk"

Links: [{"title":"Index prosperity: Přes 8 z 10 Čechů zhodnocuje své úspory a více než polovina populace aktivně investuje","url":"https://www.businessinfo.cz/clanky/index-prosperity-pres-8-z-10-cechu-zhodnocuje-sve-uspory-a-vice-nez-polovina-populace-aktivne-investuje/"},{"title":"mladi se investovani neboji vic nez tretina spoleha jen na svuj usudek","url":"https://www.newstream.cz/money/mladi-se-investovani-neboji-vic-nez-tretina-spoleha-jen-na-svuj-usudek"},{"title":"Češi už nevěří státu a investují si na stáří. Pro ty z generace 55+ se blíží ještě levnější nástroje","url":"https://cc.cz/cesi-uz-neveri-statu-a-investuji-si-na-stari-pro-ty-z-generace-55-se-blizi-jeste-levnejsi-nastroje/"},{"title":"Češi se nebojí propadů. Investují nejvíc ve střední Evropě, ukazuje průzkum","url":"https://www.e15.cz/tiskove-zpravy/cesi-se-neboji-propadu-investuji-nejvic-ve-stredni-evrope-ukazuje-pruzkum-1434425"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-osobni-investovani-v-cesku-sili-pribyva-lidi-kteri-sve-penize-nechavaji-pracovat-296132"},{"title":"Patnáct Čechů ze sta přežije s úsporami celý rok. Peníze drží na spořicích účtech a zamilovávají se do akcií","url":"https://www.e15.cz/byznys/burzy-a-trhy/patnact-cechu-ze-sta-prezije-s-usporami-cely-rok-penize-drzi-na-sporicich-uctech-a-zamilovavaji-se-do-akcii-1424790"},{"title":"Investiční fondy","url":
… [2054 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Portu Fondee počet klientů 2025 objem majetku"

Links: [{"title":"Lidé už přes Portu investovali do akcií či dluhopisů přes pět miliard. Dobře funguje spolupráce s Air Bank","url":"https://cc.cz/lide-uz-pres-portu-investovali-do-akcii-ci-dluhopisu-pres-pet-miliard-dobre-funguje-spoluprace-s-air-bank/"},{"title":"Annual report 2025","url":"https://cdn.portu.cz/portu/documents/obligatory-published-information/cs/Annual-report-2025.pdf"},{"title":"Ticker Tape by TradingView","url":"https://www.fxstreet.cz/zpravodajstvi-205542.html"},{"title":"finex.cz","url":"https://finex.cz/recenze/portu/"},{"title":"portu hlasi pres 40 tisic uzivatelu a dve a pul miliardy korun ve sprave do konce roku prekoname 5 miliard veri jeho sef","url":"https://cc.cz/portu-hlasi-pres-40-tisic-uzivatelu-a-dve-a-pul-miliardy-korun-ve-sprave-do-konce-roku-prekoname-5-miliard-veri-jeho-sef/"},{"title":"www.portu.sk","url":"https://www.portu.sk/documents/download/generaldocument/SK/PriceList"},{"title":"www.portu.cz","url":"https://www.portu.cz/documents/download/generaldocument/cs/PriceList"},{"title":"Ve fondech Češi přichází o miliony zisků ročně","url":"https://www.finance.cz/530404-ve-fondech-cesi-prichazi-o-miliony-zisku-rocne"},{"title":"www.portu.sk","url":"https://www.portu.sk/documents/download/generaldocument/sk/PriceList"}]

Podle výroční zprávy Portu za rok 2025 společnost ke konci roku spravovala více než 55 miliard korun klientského majetku a měla přes 280 000 kl
… [895 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "AKAT statistika 2025 objem majetku fondů ETF Česko"

Links: [{"title":"Kam zajít, co ochutnat a co stojí za pozornost","url":"https://www.newstream.cz/money/podilove-fondy-si-konzervativni-cesi-oblibili-maji-v-nich-pres-bilion-korun"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-investice-do-fondu-v-cesku-prekonaly-dvoubilionovou-hranici-283647"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/313302"},{"title":"cdn0.erstegroup.com","url":"https://cdn0.erstegroup.com/content/dam/cz/eam/Image_Banka/AKATCR20250812.pdf"},{"title":"fondy dal bobtnaji cesi v nich drzi uz 1 4 bilionu korun","url":"https://www.newstream.cz/money/fondy-dal-bobtnaji-cesi-v-nich-drzi-uz-1-4-bilionu-korun"},{"title":"cesi rekordne investuji jen za posledni rok pridali 540 miliard korun","url":"https://forbes.cz/cesi-rekordne-investuji-jen-za-posledni-rok-pridali-540-miliard-korun/"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-osobni-cesi-nalili-do-podilovych-fondu-za-ctvrtleti-40-miliard-korun-253269"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-osobni-cesi-investuji-ve-velkem-do-fondu-poslali-187-miliard-korun-247596"},{"title":"Podílové fondy frčí, Češi v nich uložili o 34 miliard korun více","url":"https://www.e15.cz/byznys/finance-a-bankovnictvi/podilove-fondy-frci-cesi-v-nich-ulozili-o-34-miliard-korun-vice-1325281"}]

Hledání nenašl
… [1481 more characters]
```
</details>

→ `WebFetch` https://www.businessinfo.cz/clanky/index-prosperity-pres-8-z-10-cechu-zhodnocuje-sve-uspory-a-vice-nez-polovina-populace-aktivne-investuje/

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

→ `WebFetch` https://zpravy.kurzy.cz/848245-rok-rekordniho-klientskeho-rustu-a-expanze-rozhovor/

→ `WebFetch` https://www.e15.cz/tiskove-zpravy/cesi-se-neboji-propadu-investuji-nejvic-ve-stredni-evrope-ukazuje-pruzkum-1434425

→ `WebFetch` https://www.newstream.cz/money/mladi-se-investovani-neboji-vic-nez-tretina-spoleha-jen-na-svuj-usudek

<details><summary>result</summary>

```
The article gives **no figures specific to XTB clients in the Czech Republic**. The numbers below are group-wide, from preliminary 2025 results published 6 February 2026:

- **Active clients:** about 1.19 million, up roughly 70% year on year.
- **New accounts:** over 864,000 opened in the past year, a 73.4% increase.

The article does not give figures for:

- **Share investing in ETFs:** not stated. The interviewee only says ETFs and shares are increasingly seen as standard tools for long-term wealth building, with no percentage.
- **Client age:** no figures. The interviewee says the biggest shift is among younger generations, without numbers.
- **Mobile share:** not stated. The article mentions a "mobile first" generation but gives no percentage.
```
</details>

<details><summary>result</summary>

```
**Survey details**
- **Conducted by:** Generali Investments CEE (sixth annual edition, first run across all Visegrad Four countries)
- **Date:** Article published 20 July 2026. Fieldwork dates are not stated.
- **Sample size:** Not stated.
- **Age breakdown:** Not reported.

**Investment figures (Czech Republic)**
- **Investing:** 56% of Czech respondents invest, more than in Poland or Hungary.
- **Stocks:** 65% hold stocks, the highest share in the region. This is about 15 percentage points higher than three years earlier.
- **Real estate:** 28% hold property, the highest among V4 countries.
- **Online tools** (brokers, platforms, apps): 45%, against a V4 average of 37%.
- **Funds:** Used by more than half of investors in the region, most often in Slovakia and the Czech Republic.
- **ETFs:** No Czech figure is given. The article says only that Slovakia uses ETFs more heavily than other countries.
- **Savings accounts:** Nearly half of Czechs consider them the best place to keep money.
- **Cash:** 16% of Czechs, versus 38% in Poland and 36% in Hungary.

**Fears and outlook**
- The article does not report a "fears" question. The closest measure is economic expectations.
- 32% of Czechs expect the economy to worsen over the next two years, and 14% expect it to improve.
- Hungary is the most optimistic, with 54% expecting improvement. In Slovakia, nearly half expect a worsening.
- The survey's main finding is that Czechs treat market falls as buying opportunities, despite their
… [26 more characters]
```
</details>

<details><summary>result</summary>

```
**Survey details**
- **Who:** Ipsos, commissioned by the Garanční systém finančního trhu (GSFT, Czech Financial Market Guarantee System)
- **Date:** The article was published 31 August 2026. The page doesn't give the survey's fieldwork dates.
- **Sample:** The page doesn't state the sample size or methodology.

**Key figures**
- **Share investing:** 39% of people aged 16–30 have some investment product, compared with 30% of those over 31 (as worded in the article).
- **Investing without an expert:** More than a third of young people invest without a professional.
- **Methods among young investors:**
  - 36% invest on their own in individual stocks, ETFs, cryptocurrencies, or other products, typically through online platforms.
  - 27% use expert advice or bank products arranged through a professional.
  - 22% use an app that builds and manages a portfolio for them.
- **ETF share:** No separate ETF figure is given. ETFs are included in the 36% self-directed group.
- **Monthly saving or investing (ages 16–30):** 32% set aside up to 1,000 CZK, 34% between 1,000 and 3,000 CZK, and about two-thirds no more than 3,000 CZK.
- **Non-savers:** One in five people aged 16–30 neither saves nor invests. Of these, 59% say they would like to start in the future.

**Information sources (social media):** The page doesn't mention where young people get investment information, including social media.

**Age breakdown:** The article compares only two groups, 16–30 and over 31. It doesn't provide
… [16 more characters]
```
</details>

→ `WebFetch` https://www.seznamzpravy.cz/clanek/ekonomika-finance-investice-do-fondu-v-cesku-prekonaly-dvoubilionovou-hranici-283647

→ `WebSearch` Index prosperity Česká spořitelna 2026 Ipsos ETF investuje procent mladí

→ `WebSearch` Trading 212 Revolut počet klientů Česká republika investice

→ `WebSearch` Fondee počet klientů 2026

<details><summary>result</summary>

```
**AKAT figures (as of 30 June 2025)**

- **Total fund assets:** 2.1 trillion CZK, a record. This covers collective investment funds and qualified investor funds.
- **Date of data:** 30 June 2025 (end of Q2).
- **Growth:**
  - Collective investment funds grew by 58 billion CZK over the quarter.
  - Qualified investor funds (FKI) grew by 88 billion CZK (+12.3%) to 812 billion CZK.
  - Public funds total 1.29 trillion CZK, up almost 5% from the end of March.
- **Equity funds:** Their share of total assets is not stated. The article only says they grew by 23 billion CZK, the largest increase of any category.
- **ETFs:** Not mentioned.
- **Number of investors:** Not mentioned.
- **Article publication date:** 12 August 2025 (9:56).
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Fondee počet klientů 2026"

Links: [{"title":"Tržby 4,5 milionu, ale se ztrátou 21 milionů. Platforma Fondee masivně investuje do expanze","url":"https://cc.cz/trzby-45-milionu-ale-se-ztratou-21-milionu-platforma-fondee-masivne-investuje-do-expanze/"},{"title":"Fondee má deset tisíc klientů. K investicím přivedlo hlavně mladé, tak jim otevírá udržitelné fondy","url":"https://cc.cz/fondee-ma-deset-tisic-klientu-k-investicim-privedlo-hlavne-mlade-tak-jim-otevira-udrzitelne-fondy/"},{"title":"KB Results 1Q2026 CZ","url":"https://www.kb.cz/getmedia/d2df1105-bf27-4c89-8347-cbfb3221708c/KB-Results-1Q2026-CZ.pdf"},{"title":"S Sp 2023 00120 CNB 573","url":"https://cnb.cz/export/sites/cnb/cs/dohled-financni-trh/.galleries/prilohy/S-Sp-2023_00120_CNB_573.pdf"},{"title":"vz 2024 csps","url":"https://cdn0.erstegroup.com/content/dam/cz/csas/www_csps_cz/Dokumenty-ke-stazeni/vz_2024_csps.pdf"},{"title":"polrocna sprava 2026","url":"https://www.finax.eu/storage/app/media/_static_docs/sk/polrocna-sprava-2026.pdf"},{"title":"Čestné prohlášení poskytovatele o počtu klientů, kteří se účastnili probačního a resocializačního programu v roce 2025","url":"https://msp.gov.cz/documents/d/msp/cestne-prohlaseni-o-poctu-klientu-2025"},{"title":"Preskočiť na hlavný obsah","url":"https://beancount.io/sk/blog/2026/10/06/stitch-fix-fy2026-earnings-analysis"},{"title":"VZOR skupina B 1","url":"https://socialnipece.brno.cz/wp-content/uploads/2026/06/VZOR_skupina-B-1.pdf"}]

Searc
… [1195 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Trading 212 Revolut počet klientů Česká republika investice"

Links: [{"title":"Revolut v Česku raketově roste, překonal milion uživatelů a nechává za sebou i velká bankovní jména","url":"https://cc.cz/revolut-v-cesku-raketove-roste-prekonal-milion-uzivatelu-a-nechava-za-sebou-i-velka-bankovni-jmena/"},{"title":"recenze trading 212","url":"https://www.testado.cz/recenze-trading-212/"},{"title":"Revolut roste jak v nejdivočejším boomu: zisk, tržby i uživatelé jdou nahoru o desítky procent","url":"https://cc.cz/revolut-roste-jak-v-nejdivocejsim-boomu-zisk-trzby-i-uzivatele-jdou-nahoru-o-desitky-procent/"},{"title":"Trading212 vs Revolut","url":"https://investing.co.uk/trading212-vs-revolut"},{"title":"Revolut vydělal v čistém 23 miliard, po světě mu loni přibylo 15 milionů klientů","url":"https://cc.cz/revolut-vydelal-v-cistem-23-miliard-po-svete-mu-loni-pribylo-15-milionu-klientu/"},{"title":"Revolut má v Česku 800 tisíc klientů. Vybral si je na test a spouští tu pilotně investiční aplikaci","url":"https://cc.cz/revolut-ma-v-cesku-800-tisic-klientu-vybral-si-je-na-test-a-spousti-tu-pilotne-investicni-aplikaci/"},{"title":"Are you confused about whether to choose Trading 212 vs Revolut Trading as a broker for your investing needs?","url":"https://investingintheweb.com/comparison/trading-212-vs-revolut-trading-2023-comparison/"},{"title":"trading 212 opet otevira registrace pro ceske klienty","url":"https://finex.cz/trading-212-opet-otevira-registr
… [1516 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Index prosperity Česká spořitelna 2026 Ipsos ETF investuje procent mladí"

Links: [{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-b2b-investuji-uz-ctyri-z-peti-cechu-inflacni-sok-pusobil-jako-budicek-301142"},{"title":"Index prosperity: Přes 8 z 10 Čechů zhodnocuje své úspory a více než polovina populace aktivně investuje","url":"https://www.businessinfo.cz/clanky/index-prosperity-pres-8-z-10-cechu-zhodnocuje-sve-uspory-a-vice-nez-polovina-populace-aktivne-investuje/"},{"title":"index prosperity cisla ted vypadaji dobre ale budouci rust na nich nestoji","url":"https://www.newstream.cz/money/index-prosperity-cisla-ted-vypadaji-dobre-ale-budouci-rust-na-nich-nestoji"},{"title":"Index prosperity: Finanční zdraví Čechů se zlepšuje, jsme sedmí v EU","url":"https://www.businessinfo.cz/clanky/index-prosperity-financni-zdravi-cechu-se-zlepsuje-jsme-sedmi-v-eu/"},{"title":"www.ceskenoviny.cz","url":"https://www.ceskenoviny.cz/zpravy/2300477"},{"title":"Index prosperity: Aktivně investují 4 z 10 Čechů. Jako ziskové hodnotí své investice 76 procent z nich","url":"https://www.businessinfo.cz/clanky/index-prosperity-aktivne-investuji-4-z-10-cechu-jako-ziskove-hodnoti-sve-investice-76-procent-z-nich/"},{"title":"Index prosperity: Česko posiluje, ekonomiku ale dusí krize bydlení a statut montovny","url":"https://www.businessinfo.cz/clanky/index-prosperity-cesko-posiluje-ekonomiku-ale-dusi-krize-bydleni-a-statut-montovny/"},{"title"
… [1509 more characters]
```
</details>

→ `WebFetch` https://www.seznamzpravy.cz/clanek/ekonomika-b2b-investuji-uz-ctyri-z-peti-cechu-inflacni-sok-pusobil-jako-budicek-301142

→ `WebFetch` https://cc.cz/revolut-v-cesku-raketove-roste-prekonal-milion-uzivatelu-a-nechava-za-sebou-i-velka-bankovni-jmena/

→ `WebFetch` https://cc.cz/revolut-ma-v-cesku-800-tisic-klientu-vybral-si-je-na-test-a-spousti-tu-pilotne-investicni-aplikaci/

→ `WebFetch` https://cdn.portu.cz/portu/documents/obligatory-published-information/cs/Annual-report-2025.pdf

<details><summary>result</summary>

```
**Number of Revolut users in Czechia:** More than 1 million, a milestone the article reports. Revolut added over 350,000 Czech users in the past year. The company's stated goal is 1.5 million.

**Article date:** 28 March 2025.

**Age breakdown:** Not in the article.

**Investing figures:**
- The article gives no count of Czech users of Revolut's investing services.
- Revolut was offering free purchases of hundreds of ETFs and had launched its own investment app, with Czechia as a pilot market.
- Revolut had 800,000 Czech clients in autumn 2024, a figure the article cites without linking it to investing.
- Global valuation: $45 billion in summer 2024, with Bloomberg reporting talks around $60 billion.
```
</details>

<details><summary>result</summary>

```
- **Date:** 24 September 2024
- **Revolut clients in Czechia:** 800,000
- **Share aged 18–34:** 58%
- **ETF share of Czech clients' holdings:** 12% in the first half of 2024. The article breaks down how Czech clients allocated their money: 44% money-market funds, 39% US or European stocks, 12% ETFs, and 5% bonds.
- **Czech investing users:** The article gives no total count. It only says that 73% of Generation Z (people born after the Velvet Revolution) invest regularly, according to research Revolut commissioned.
```
</details>

<details><summary>result</summary>

```
I couldn't find any of the requested figures in the content you provided. It's a raw, compressed PDF binary (FlateDecode object streams), not readable text, and it's also truncated. I can't find the number of clients, AUM at end 2025, YoY growth, the share of clients investing regularly, client age, or the mobile app share.

To get these, you could:
- Paste the extracted text from the PDF (for example, from a PDF-to-text tool or the "copy text" function in a PDF viewer).
- Provide the page's HTML or a link to the document.
- Upload the PDF if your interface supports file attachments.

Once I have the readable text, I'll pull out those figures and quote the exact sentences, keeping each quote within 125 characters.

[Binary content (application/pdf, 2.7MB) also saved to [redacted: private assistant config]]
```
</details>

<details><summary>result</summary>

```
**Index prosperity 2026: investování v Česku** (Ipsos a Česká spořitelna; článek Ondřeje Katze, Seznam Zprávy)

- **Publikováno:** 11. 3. 2026, 9:30
- **Nechávají peníze zhodnocovat:** 82 % (2024: 66 %). Článek uvádí „82 procent lidí“.
- **Aktivně investují:** 55 % (před dvěma lety: 41 %). Článek uvádí „55 procent z nás“.
- **Fondy a ETF (včetně penzijních fondů):** téměř 59 % investorů.
- **Přímé nákupy akcií:** 23 % investorů.
- **Nemovitosti a drahé kovy:** kolem 18 %.
- **Velikost vzorku:** v článku není uvedena.
- **Věk:**
  - Mladí do 30 let využívají fondy a ETF ještě častěji, článek ale nepublikuje konkrétní číslo.
  - Klienti digitálních kanálů jsou v průměru 35 let, klienti na pobočce 59 let.
  - Nejvyšší aktiva nad 3 mil. Kč mají 4 % investorů, nejčastěji ve věku 40–49 let.
- **Demografické rozdíly:** Údaje o pohlaví a příjmu článek neuvádí. U mladých článek zmiňuje specifické bariéry, zejména obavy ze ztráty peněz a neznalost, jak začít.
- **Výkonnost:** 8 z 10 investorů bylo v roce 2025 ziskových, 4 z 10 vydělali více, než kolik jim vzala inflace.
```
</details>

→ `Bash` — Extract text from Portu annual report PDF and grep figures
```sh
cd [tmp] && pdftotext [redacted: private assistant config] portu.txt 2>&1 | head; grep -n -i -E "klient|miliard|pravideln" portu.txt | head -30
```

<details><summary>result</summary>

```
41:Ke konci roku 2025 spravovala Společnost více než 55 miliard korun klientského majetku a měla přes 280 000 klientů. Oproti začátku loňského
44:o 2 procenta. Úspěch Portu tak nestojí na příznivém tržním větru, ale na důvěře klientů a kvalitě naší platformy.
45:Za celý loňský rok Společnost zpracovala neuvěřitelných 2,5 milionů vkladů. Téměř 80 % investorů Portu přitom investuje pravidelně, což je
50:investičních konzultací, v jejichž rámci naši odborníci radí klientům prostřednictvím online schůzek a webinářů s jejich financemi a investicemi.
52:klientovo finanční zdraví.
53:V rámci dalších produktových inovací Společnost posílila také možnosti správy portfolia. Klienti si nově mohou sami určit míru kontroly
54:prostřednictvím funkce automatického nebo manuálního schvalování některých změn – investiční komise Portu portfolio pravidelně
58:V průběhu roku Společnost dále rozšiřovala nabídku ETF fondů v režimu, kdy si klient portfolio sestavuje sám. Mezi ně se řadí nástroje
61:Průběžně jsme pracovali také na vylepšování naší mobilní aplikace. Tu dnes využívá přes 100 tisíc klientů týdně, a stává se tak jednoznačně
63:návyků našich klientů.
65:mladých. Počet našich klientů ve věkové skupině 18-26 let i díky tomu narostl za loňský rok o 32 % a přesahuje 16 tisíc. Oblíbenost si drží i
69:2025 mělo uzavřeno smlouvu DIP u Společnosti téměř 42 tisíc klientů. Patříme tak mezi lídry trhu, získali jsme i třetí příčku v kategorii
75:veřejností, tak s klienty samotnými. A právě spokojeno
… [2055 more characters]
```
</details>

→ `Bash` — Probe Google Trends API availability
```sh
cd [tmp] && curl -s -m 20 -o trends.txt -w "%{http_code}\n" 'https://trends.google.com/trends/api/explore?hl=cs&tz=-120&req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22ETF%22%2C%22geo%22%3A%22CZ%22%2C%22time%22%3A%22today%205-y%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D'; head -c 500 trends.txt; python3 -c "import pytrends" 2>&1
```

<details><summary>result</summary>

```
Exit code 1
429
<html lang="cs" dir=ltr><meta charset=utf-8><meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width"><title>Error 429 (Too Many Requests)!!1</title><style nonce="5WmG5t9fjUo0CvlP8DG4JQ">*{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{color:#222;text-align:unset;margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px;}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px nTraceback (most recent call last):
  File "<string>", line 1, in <module>
    import pytrends
ModuleNotFoundError: No module named 'pytrends'
```
</details>

→ `WebSearch` reddit CzechFinance ETF začátečník jaký broker S&P 500 VOO UCITS

→ `WebSearch` finex.cz VOO nelze koupit KID PRIIPs americké ETF evropský investor

→ `WebSearch` ETF daně časový test 3 roky 100 000 Kč osvobození 2025 akcie ETF

<details><summary>result</summary>

```
Web search results for query: "reddit CzechFinance ETF začátečník jaký broker S&P 500 VOO UCITS"

Links: [{"title":"ve fondech za biliony dolaru uz investuje cely svet jak se k nim muze dostat i cesky investor","url":"https://finex.cz/ve-fondech-za-biliony-dolaru-uz-investuje-cely-svet-jak-se-k-nim-muze-dostat-i-cesky-investor/"},{"title":"czech republic","url":"https://www.digrin.com/stocks/list/country/czech-republic/"},{"title":"czech republic","url":"https://www.digrin.com/stocks/list/country/czech-republic/?page=1"},{"title":"fund-docs.vanguard.com","url":"https://fund-docs.vanguard.com/F0968.pdf"},{"title":"Etf-VOO-Vanguard S&P 500 ETF","url":"https://www.etoro.com/cs-cz/markets/voo"},{"title":"best voo etf alternatives in europe and uk","url":"https://investingintheweb.com/brokers/best-voo-etf-alternatives-in-europe-and-uk/"},{"title":"how to invest in voo","url":"https://investingintheweb.com/blog/how-to-invest-in-voo/"},{"title":"investingintheweb.com","url":"https://investingintheweb.com/?p=55044"},{"title":"Investing for beginners: How to buy the S&P 500 index and S&P 500 ETFs in Europe?","url":"https://lilys.ai/notes/ru/sp500-etf-20251125/buy-s-p-500-etf-europe-beginners"}]

The search didn't turn up any Reddit r/CzechFinance threads, so I can't report what that community recommends. The results do cover the core facts a Czech beginner needs.

- **VOO is not directly available to Czech retail investors.** VOO, a popular US-domiciled ETF, isn't directly available
… [1484 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "finex.cz VOO nelze koupit KID PRIIPs americké ETF evropský investor"

Links: [{"title":"investingintheweb.com","url":"https://investingintheweb.com/?p=55044"},{"title":"priips kid regulation","url":"https://myetfjourney.com/blog/priips-kid-regulation"},{"title":"VOO vs CSPX vs VUAA — Best S&P 500 ETF for Polish/EU Investors 2026","url":"https://freenance.io/comparisons/voo-vs-cspx-vs-vuaa-sp500-etf-comparison-2026/"},{"title":"Key Information Documents (PRIIPs)","url":"https://www.cnb.cz/en/supervision-financial-market/legislation/key-information-documents-priips/index.html"},{"title":"PRIIPS: Impact On Luxembourg Funds","url":"https://vlex.com/vid/priips-impact-on-luxembourg-689156029"},{"title":"PRIIPs KID","url":"https://www.elliptic.co/corpus/gen-3357/priips/priips-kid.html"},{"title":"starting 1 january 2023 retail investors can no longer purchase investment fund units and etfs if","url":"https://seb.ee/en/starting-1-january-2023-retail-investors-can-no-longer-purchase-investment-fund-units-and-etfs-if"},{"title":"Key Information Documents (PRIIPs)","url":"https://www.cnb.cz/en/supervision-financial-market/legislation/key-information-documents-priips/"},{"title":"Questions and answers on the PRIIPs KID","url":"https://cnb.cz/en/faq/Questions-and-answers-on-the-PRIIPs-KID"}]

Hledání nenašlo žádnou stránku finex.cz, takže nemohu potvrdit, co přesně tento web uvádí. Obecné zdroje ale vysvětlují, proč se VOO evropským investorům nekupuje.

- *
… [1191 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "ETF daně časový test 3 roky 100 000 Kč osvobození 2025 akcie ETF"

Links: [{"title":"Přeskočit na obsah","url":"https://arws.cz/novinky-v-arrows/efektivni-zdaneni-akcii-a-etf"},{"title":"Přeskočit na obsah","url":"https://arws.cz/novinky-v-arrows/firemni-investice-do-cennych-papiru-a-etf"},{"title":"Aktualizováno: Zdanění investic 2026: Kdy nemusíte danit akcie, ETF a krypto za rok 2025","url":"https://www.e15.cz/zdaneni-investic-akcie-kryptomeny"},{"title":"dan kapitalove zisky","url":"https://rulecalc.com/cs/dan/dan-kapitalove-zisky"},{"title":"etf zdaneni","url":"https://rulecalc.com/cs/dan/etf-zdaneni"},{"title":"dan prodej akcii podilu","url":"https://rulecalc.com/cs/dan/dan-prodej-akcii-podilu"},{"title":"casovy test osvobozen","url":"https://rulecalc.com/cs/dan/casovy-test-osvobozen"},{"title":"casovy test osvobozen","url":"https://rulecalc.com/de/steuern/casovy-test-osvobozen"},{"title":"dan z prodeje cp","url":"https://rulecalc.com/de/dan/dan-z-prodeje-cp"}]

Podle výsledků vyhledávání platí pro akcie a ETF hlavně tyto dvě cesty k osvobození od daně, ale zdroje se rozcházejí v několika detailech.

- **Časový test:** Podle e15 je zisk z prodeje akcií nebo ETF zcela osvobozen, pokud je držíte déle než tři roky a v přiznání ho vůbec neuvádíte. Rulecalc uvádí, že se test počítá zvlášť pro každou transakci od data nákupu do data prodeje každé transakce zvlášť.
- **Limit 100 000 Kč:** Podle e15 se uplatní i u prodejů před uplynutím tří let, p
… [1302 more characters]
```
</details>

→ `Bash` — Fetch Reddit search results for ETF threads
```sh
cd [tmp] && for s in CzechFinance czech; do curl -s -m 20 -A "Mozilla/5.0 research-script" -o r_$s.json -w "$s %{http_code}\n" "https://www.reddit.com/r/$s/search.json?q=ETF&restrict_sr=1&sort=top&t=year&limit=50"; done; ls -la r_*.json
```

<details><summary>result</summary>

```
CzechFinance 403
czech 403
-rw-r--r--  1 [user]  wheel  189908 11 Oct  01:10 r_czech.json
-rw-r--r--  1 [user]  wheel  189908 11 Oct  01:10 r_CzechFinance.json
```
</details>

→ `WebSearch` site:reddit.com CzechFinance ETF

→ `WebSearch` nejčastější otázky začínající investor ETF obavy ztráta peněz jak začít investovat průzkum

<details><summary>result</summary>

```
Web search results for query: "site:reddit.com CzechFinance ETF"

Links: [{"title":"zbrojari cez i banky na jeden klik pro koho je urcene nove etf prazske burzy","url":"https://forbes.cz/zbrojari-cez-i-banky-na-jeden-klik-pro-koho-je-urcene-nove-etf-prazske-burzy/"},{"title":"1. Best brokers","url":"https://brokerchooser.com/best-brokers/best-etf-brokers-in-the-czech-republic"},{"title":"www.finmag.cz","url":"https://www.finmag.cz/tema/etf"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-akcie-fondy-bludny-kruh-prazske-burzy-etf-chybi-kvuli-nedostatku-investoru-282078"},{"title":"Original title:","url":"https://invenio.nusl.cz/record/190021?ln=en"},{"title":"ETF - strana 2","url":"https://www.finmag.cz/tema/etf?strana=2"},{"title":"kbc asset management debuts etf with czk hedge","url":"https://www.structuredretailproducts.com/insights/83202/kbc-asset-management-debuts-etf-with-czk-hedge"},{"title":"Best ETFs for Czech Investors 2026 — VWCE, IWDA, CSPX","url":"https://freenance.io/etf/best-etf-for-czech-investors-2026/"},{"title":"Analýza výkonnosti vybraných podílových fondů a srovnatelných ETF fondů – Jakub Václavíček","url":"https://theses.cz/id/nnfhhb?lang=en"}]

The search returned no Reddit results for "CzechFinance ETF," and I found nothing that mentions a "CzechFinance" entity. The results were general Czech ETF content from other sites:

- **Prague exchange listings are thin.** A Seznam Zprávy piece says the only ETF tracking the P
… [944 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "nejčastější otázky začínající investor ETF obavy ztráta peněz jak začít investovat průzkum"

Links: [{"title":"how to overcome the fear of investing","url":"https://www.home.saxo/cs-cz/learn/guides/start-investing/how-to-overcome-the-fear-of-investing"},{"title":"Investování pro začátečníky: Kam a proč (ne)investovat a nejčastější investorské chyby","url":"https://www.businessinfo.cz/navody/investovani-pro-zacatecniky-kam-a-proc-neinvestovat-a-nejcastejsi-investorske-chyby/"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/285261"},{"title":"Hlavní obsah","url":"https://seznamzpravy.cz/clanek/audio-podcast-ve-vate-bez-emoci-se-nic-nenaucite-pet-rad-jak-zacit-investovat-285261"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-b2b-o-svuj-duchod-se-radeji-postarejte-sami-experti-poradi-jak-na-to-298572"},{"title":"ESMA35 335435667 6519 Call for evidence on Investor Journey   Summary for consumer organisations CS","url":"https://www.esma.europa.eu/sites/default/files/2025-05/ESMA35-335435667-6519_Call_for_evidence_on_Investor_Journey_-_Summary_for_consumer_organisations_CS.pdf"},{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/236785"},{"title":"investors struggle to choose the right etf","url":"https://benefitspro.com/2017/03/29/investors-struggle-to-choose-the-right-etf"},{"title":"From curious to confident","url":"https://www.blackrock.com/au/education/ishares/ishares-etf-insights"}]

… [2300 more characters]
```
</details>

→ `WebFetch` https://old.reddit.com/r/czech/search?q=ETF&restrict_sr=on&sort=top&t=year

<details><summary>result</summary>

```
Claude Code is unable to fetch from old.reddit.com
```
</details>

→ `WebFetch` https://www.seznamzpravy.cz/clanek/285261

<details><summary>result</summary>

```
**Main fears preventing Czechs from investing** (article by Markéta Bidrmanová, Seznam Zprávy, **4 September 2025**)

- **Losing money:** Petr Žabža, head of investments at Air Bank, calls this the biggest fear: "Největším strašákem pro lidi je, že přijdou o své peníze."
- **Falling for fraud:** Potential investors are also held back by fear of being scammed.
- **Market swings:** The article's lead names fear of market fluctuations (výkyvů trhu) as one of the three main obstacles.
- **Anxiety from apps and media:** Žabža warns that investment apps send constant notifications and that headlines are alarmist, which can cause needless worry.

**Figures**

- **Monthly investing:** According to the Asociace pro kapitálový trh (cited in the article, not by Žabža), Czechs invest between 1,700 and 3,000 CZK per month.
- **Panic threshold:** Žabža says that "už při dvou procentech začíná panika," so panic can start at a 2% portfolio drop, even though many people believe they could handle a 20% fall.
- **Cash holdings:** The article says Czechs keep far more money in cash and savings accounts than in investments, but gives no figure.
```
</details>

→ `WebSearch` reddit r/czech investování XTB nebo Trading 212 ETF

<details><summary>result</summary>

```
API Error: 400 The following domains are not accessible to our user agent: ['reddit.com']. Read more: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
```
</details>

→ `WebSearch` penize.cz diskuze ETF začátečník otázky jaký ETF vybrat

<details><summary>result</summary>

```
Web search results for query: "penize.cz diskuze ETF začátečník otázky jaký ETF vybrat"

Links: [{"title":"do plusu jak nechat penize pracovat za vas","url":"https://cc.cz/special/do-plusu-jak-nechat-penize-pracovat-za-vas/"},{"title":"podcastova serie do plusu investovani neni o stesti ale o discipline","url":"https://cc.cz/special/do-plusu-jak-nechat-penize-pracovat-za-vas/podcastova-serie-do-plusu-investovani-neni-o-stesti-ale-o-discipline/"},{"title":"www.penize.cz","url":"https://www.penize.cz/tema/etf"},{"title":"Kurzové riziko","url":"https://www.finmag.cz/tema/kurzove-riziko"},{"title":"do plusu jak ne","url":"https://cc.cz/special/do-plusu-jak-ne"},{"title":"Investiční riziko","url":"https://www.finmag.cz/tema/investicni-riziko"},{"title":"www.finmag.cz","url":"https://www.finmag.cz/tema/etf"},{"title":"ETFs explained","url":"https://www.home.saxo/cs-cz/learn/guides/etfs/how-to-choose-an-etf"},{"title":"Hojně diskutované ETF","url":"https://www.lynxbroker.cz/investovani/burzovni-trhy/etf/nejlepsi-etf"},{"title":"ETF - strana 2","url":"https://www.finmag.cz/tema/etf?strana=2"}]

Hledání nenašlo žádné vlákno z diskuzí na penize.cz. Výsledky jsou články a rozcestníky na téma ETF, které z něj vycházejí, takže k otázce „jaký ETF vybrat“ mám jen obecné informace.

- **Základ:** Peníze.cz popisují ETF jako burzovně obchodovaný fond, který obvykle sleduje celý index nebo sektor, a jejich strategie v naprosté většině případů nespoléhá na aktivní správu.
- **Poplatky:** Saxo d
… [775 more characters]
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
await page.goto('https://www.reddit.com/r/czech/search/?q=ETF&type=posts&t=year&sort=top');
```
### Page
- Page URL: https://www.reddit.com/r/czech/search/?q=ETF&type=posts&t=year&sort=top
- Page Title: Reddit - Prove your humanity
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-11-10-270Z.yml)
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://trends.google.com/trends/explore?date=today%2012-m&geo=CZ&q=ETF,S%26P%20500,investov%C3%A1n%C3%AD,XTB,Portu&hl=cs');
```
### Page
- Page URL: https://trends.google.com/trends/explore?geo=CZ&q=ETF,S%26P%20500,investov%C3%A1n%C3%AD,XTB,Portu&hl=cs
- Page Title: ETF, S&P 500, investování, XTB, Portu - Prozkoumat - Trendy Google
- Console: 0 errors, 2 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-11-13-408Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-11-12-560Z.log#L1-L2
```
</details>

→ `mcp__playwright__browser_wait_for`

<details><summary>result</summary>

```
### Result
Waited for 5 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 5 * 1000));
```
### Page
- Page URL: https://trends.google.com/trends/explore?geo=CZ&q=ETF,S%26P%20500,investov%C3%A1n%C3%AD,XTB,Portu&hl=cs
- Page Title: ETF, S&P 500, investování, XTB, Portu - Prozkoumat - Trendy Google
- Console: 1 errors, 2 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-11-19-538Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-11-12-560Z.log#L3
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"Tento web používá k poskytování a zlepšování svých služeb a k analýze návštěvnosti soubory cookie společnosti Google.Další informaceOK, rozumím\nDomovská stránka\nProzkoumat\nAktuální trendy\nshare\nfeedback\nPřihlásit\ninfo\nVyzkoušejte nové prostředí!\nProzkoumejte trendy ve vyhledávání s Gemini. Jedná se o rychlý a snadný způsob, jak najít vyhledávací dotazy a objevit trendy.\nPřejít na novou stránku Prozkoumat\nclose_24px\n•\nHledaný výraz\n•\nHledaný výraz\n•\nHledaný výraz\n•\nHledaný výraz\n•\nHledaný výraz\nČesko\nPředchozí měsíce: 12\nVšechny kategorie\nVyhledávání na webu\nETF\nS&P 500\ninvestování\nXTB\nPortu\nČesko, Předchozí měsíce: 12\nZájem v průběhu času help_outline\nfile_download\ncode\nshare\nPrůměr\nx1\tETF\tS&P 500\tinvestování\tXTB\tPortu\nPrůměr\t61\t26\t7\t31\t20\n‪5. 10. 2025‬\n‪8. 2. 2026‬\n‪14. 6. 2026‬\n25\n50\n75\n100\nx\ty1\ty2\ty3\ty4\ty5\n‪5. 10. 2025‬\t36\t21\t6\t36\t19\n‪12. 10. 2025‬\t45\t21\t8\t37\t20\n‪19. 10. 2025‬\t33\t14\t7\t30\t17\n‪26. 10. 2025‬\t64\t25\t8\t35\t17\n‪2. 11. 2025‬\t75\t30\t7\t35\t17\n‪9. 11. 2025‬\t75\t27\t9\t34\t15\n‪16. 11. 2025‬\t74\t34\t9\t33\t18\n‪23. 11. 2025‬\t73\t27\t8\t31\t15\n‪30. 11. 2025‬\t67\t26\t8\t27\t17\n‪7. 12. 2025‬\t71\t33\t9\t27\t15\n‪14. 12. 2025‬\t67\t29\t8\t26\t15\n‪21. 12. 2025‬\t69\t20\t9\t27\t16\n‪28. 12. 2025‬\t80\t27\t9\t31\t25\n‪4. 1. 2026‬\t83\t30\t9\t36\t29\n‪11. 1. 2026‬\t83\t30\t10\t44\t29\n‪18. 1. 2026‬\t84\t29\t10\t61\t28\n‪25. 1. 2026‬\t100\t33\t10\t50\t28\n‪1. 2. 2026‬\t7
… [3309 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_wait_for`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://trends.google.com/trends/explore?date=today%2012-m&geo=CZ&q=ETF,VOO,VWCE,CSPX,nejlep%C5%A1%C3%AD%20ETF&hl=cs');
```
### Page
- Page URL: https://trends.google.com/trends/explore?geo=CZ&q=ETF,VOO,VWCE,CSPX,nejlep%C5%A1%C3%AD%20ETF&hl=cs
- Page Title: ETF, VOO, VWCE, CSPX, nejlepší ETF - Prozkoumat - Trendy Google
- Console: 0 errors, 2 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-11-24-166Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-11-23-842Z.log#L1-L2
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
Waited for 6 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 6 * 1000));
```
### Page
- Page URL: https://trends.google.com/trends/explore?geo=CZ&q=ETF,VOO,VWCE,CSPX,nejlep%C5%A1%C3%AD%20ETF&hl=cs
- Page Title: ETF, VOO, VWCE, CSPX, nejlepší ETF - Prozkoumat - Trendy Google
- Console: 1 errors, 2 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-11-30-258Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-11-23-842Z.log#L3
```
</details>

<details><summary>result</summary>

```
### Result
"Průměr\nx1\tETF\tVOO\tVWCE\tCSPX\tnejlepší ETF\nPrůměr\t61\t3\t3\t1\t0\n‪5. 10. 2025‬\n‪8. 2. 2026‬\n‪14. 6. 2026‬\n25\n50\n75\n100\nx\ty1\ty2\ty3\ty4\ty5\n‪5. 10. 2025‬\t36\t2\t4\t0\t0\n‪12. 10. 2025‬\t45\t0\t4\t3\t0\n‪19. 10. 2025‬\t33\t0\t3\t0\t0\n‪26. 10. 2025‬\t64\t3\t4\t0\t0\n‪2. 11. 2025‬\t75\t4\t5\t3\t0\n‪9. 11. 2025‬\t75\t3\t3\t2\t0\n‪16. 11. 2025‬\t74\t4\t4\t0\t0\n‪23. 11. 2025‬\t73\t5\t0\t3\t0\n‪30. 11. 2025‬\t67\t4\t0\t0\t0\n‪7. 12. 2025‬\t71\t4\t0\t0\t0\n‪14. 12. 2025‬\n----\nPorovnání podle regionu\nRegion\nfile_download\ncode\nshare\nETF\nVOO\nVWCE\nCSPX\nnejlepší ETF\nIntenzita barvy znázorňuje procento vyhledávání \nDALŠÍ INFORMACE\nŘazení:\nZájem o termín ETF\n1\nKarlovarský kraj\n2\nÚstecký kraj\n3\nJihočeský kraj\n4\nLiberecký kraj\n5\nMoravskoslezský kraj\n Zobrazuje se 1.–5. z 14 podoblastí \nETF\nZájem podle regionu\nhelp_outline\nRegion\nfile_download\ncode\nshare\nSouvisející dotazy\nhelp_outline\nNa vzestupu\nfile_download\ncode\nshare\n1\nai news today\nPrůlom\nmore_vert\n2\nwood px etf\nPrůlom\nmore_vert\n3\nopenai news\nPrůlom\nmore_vert\n4\ndram etf\nPrůlom\nmore_vert\n5\nkospi etf\nPrůlom\nmore_vert\n Zobrazuje se 1.–5. z 25 dotazů \nVOO\nZájem podle regionu\nhelp_outline\nRegion\nfile_download\ncode\nshare\nSouvisející dotazy\nhelp_outline\nNa vzestupu\nfile_download\ncode\nshare\n1\nbtc usd\nPrůlom\nmore_vert\n2\nbitcoin\nPrůlom\nmore_vert\n3\neth usd\nPrůlom\nmore_vert\n4\nvxus stock\nPrůlom\nmore_vert\n5\ngld stock\nPrůlom\nmore_
… [1299 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://trends.google.com/trends/explore?date=today%2012-m&geo=CZ&q=ETF,jak%20investovat,S%26P%20500%20ETF,investov%C3%A1n%C3%AD%20do%20ETF,akcie&hl=cs');
```
### Page
- Page URL: https://trends.google.com/trends/explore?geo=CZ&q=ETF,jak%20investovat,S%26P%20500%20ETF,investov%C3%A1n%C3%AD%20do%20ETF,akcie&hl=cs
- Page Title: ETF, jak investovat, S&P 500 ETF, investování do ETF, akcie - Prozkoumat - Trendy Google
- Console: 0 errors, 2 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-11-34-973Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-11-34-749Z.log#L1-L2
```
</details>

→ `mcp__playwright__browser_wait_for`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
Waited for 6 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 6 * 1000));
```
### Page
- Page URL: https://trends.google.com/trends/explore?geo=CZ&q=ETF,jak%20investovat,S%26P%20500%20ETF,investov%C3%A1n%C3%AD%20do%20ETF,akcie&hl=cs
- Page Title: ETF, jak investovat, S&P 500 ETF, investování do ETF, akcie - Prozkoumat - Trendy Google
- Console: 1 errors, 2 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-11-41-134Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-11-34-749Z.log#L3
```
</details>

<details><summary>result</summary>

```
### Result
"Průměr\nx1\tETF\tjak investovat\tS&P 500 ETF\tinvestování do ETF\takcie\nPrůměr\t20\t2\t1\t0\t48\n‪5. 10. 2025‬\n‪8. 2. 2026‬\n‪14. 6. "
### Ran Playwright code
```js
await page.evaluate('() => { const t = document.body.innerText; const i = t.indexOf(\'Průměr\'); return t.slice(i, i+120); }');
```
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://trends.google.com/trends/explore?date=today%2012-m&geo=CZ&q=ETF&hl=cs');
```
### Page
- Page URL: https://trends.google.com/trends/explore?geo=CZ&q=ETF&hl=cs
- Page Title: ETF - Prozkoumat - Trendy Google
- Console: 0 errors, 2 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-11-44-218Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-11-43-997Z.log#L1-L2
```
</details>

→ `mcp__playwright__browser_wait_for`

→ `mcp__playwright__browser_find`

<details><summary>result</summary>

```
### Result
Found 2 matches for "Na vzestupu":

- generic [active] [ref=f22e1]:
  - generic [ref=f22e9]:
    - generic [ref=f22e114]:
      - generic [ref=f22e176]:
        - generic [ref=f22e177]:
          - generic [ref=f22e178]:
            - text: Související dotazy
            - button "help_outline" [ref=f22e180] [cursor=pointer]
          - 'listbox "Select bullets view: Na vzestupu" [ref=f22e183]':
            - generic [ref=f22e184]:
              - generic [ref=f22e185]: Na vzestupu
              - generic [aria-hidden] [ref=f22e186]: ▼
          - generic [ref=f22e188]:
            - button "file_download" [ref=f22e189] [cursor=pointer]
```
</details>

<details><summary>result</summary>

```
### Result
Waited for 6 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 6 * 1000));
```
### Page
- Page URL: https://trends.google.com/trends/explore?geo=CZ&q=ETF&hl=cs
- Page Title: ETF - Prozkoumat - Trendy Google
- Console: 1 errors, 2 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-11-50-363Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-11-43-997Z.log#L3
```
</details>

→ `mcp__playwright__browser_click`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.locator('#select_28').click();
```
### Page
- Page URL: https://trends.google.com/trends/explore?geo=CZ&q=ETF&hl=cs
- Page Title: ETF - Prozkoumat - Trendy Google
- Console: 4 errors, 2 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-11-52-164Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-11-43-997Z.log#L4-L36
```
</details>

→ `mcp__playwright__browser_find`

<details><summary>result</summary>

```
### Result
Found 1 match for "Nejčastější":

- generic [ref=f22e1]:
  - generic [ref=f22e9]:
    - generic [ref=f22e114]:
      - generic [ref=f22e176]:
        - generic [ref=f22e177]:
          - 'listbox "Select bullets view: Na vzestupu" [expanded] [ref=f22e183]':
            - generic [ref=f22e184]:
              ...
              - generic [aria-hidden] [ref=f22e186]: ▼
            - generic [ref=f22e623]:
              - option "Na vzestupu" [active] [selected] [ref=f22e624] [cursor=pointer]
              - option "Nejčastější" [ref=f22e626] [cursor=pointer]
          - generic [ref=f22e188]:
            - button "file_download" [ref=f22e189] [cursor=pointer]
            - button "code" [ref=f22e191] [cursor=pointer]
```
</details>

→ `mcp__playwright__browser_click`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.getByRole('option', { name: 'Nejčastější' }).click();
```
### Page
- Page URL: https://trends.google.com/trends/explore?geo=CZ&q=ETF&hl=cs
- Page Title: ETF - Prozkoumat - Trendy Google
- Console: 8 errors, 2 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-11-55-316Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-11-43-997Z.log#L37-L70
```
</details>

<details><summary>result</summary>

```
### Result
"Související dotazy\nhelp_outline\nNejčastější\nfile_download\ncode\nshare\n1\nucits etf\n100\nmore_vert\n2\nbest etf\n63\nmore_vert\n3\netf news\n57\nmore_vert\n4\nworld etf\n54\nmore_vert\n5\nishares\n52\nmore_vert\n Zobrazuje se 1.–5. z 25 dotazů "
### Ran Playwright code
```js
await page.evaluate('() => { const t = document.body.innerText; const i = t.indexOf(\'Související dotazy\'); return t.slice(i, i+1500); }');
```
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"jší\nfile_download\ncode\nshare\n1\nucits etf\n100\n\n2\nbest etf\n63\n\n3\netf news\n57\n\n4\nworld etf\n54\n\n5\nishares\n52\n\n Zobrazuje se 1.–5. z 25 dotazů "
### Ran Playwright code
```js
await page.evaluate('async () => { const out=[]; for (let k=0;k<5;k++){ const w=[...document.querySelectorAll(\'widget[type="fe_related_queries"], .fe-related-queries\')]; const t=document.body.innerText; const i=t.indexOf(\'Související dotazy\'); out.push(t.slice(i+40,i+400).replace(/more_vert/g,\'\')); const btns=[...document.querySelectorAll(\'button[aria-label="Další"], button.md-button\')].filter(b=>/chevron_right/.test(b.innerText)); if(!btns.length) break; btns[btns.length-1].click(); await new Promise(r=>setTimeout(r,800)); } return out.join(\'\\n=====\\n\'); }');
```
```
</details>

→ `mcp__playwright__browser_find`

<details><summary>result</summary>

```
### Result
No matches found for /Zobrazuje se 1.–5. z 25/.
### Page
- Page URL: https://www.schwabassetmanagement.com/products/schd
- Page Title: SCHD | Schwab U.S. Dividend Equity ETF | Schwab Asset Management
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_wait_for`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=XTB&search_type=keyword_unordered&media_type=all');
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=XTB&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-12-06-482Z.yml)
```
</details>

<details><summary>result</summary>

```
### Result
Waited for 8 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 8 * 1000));
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=XTB&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-12-14-607Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-12-04-880Z.log#L10-L17
```
</details>

<details><summary>result</summary>

```
### Result
"Meta Ad Library\nAd Library\nAd Library Report\nAd Library API\nBranded content\n​\nCzech Republic\n​\n​\n​\nAll ads\n​\nSearch by keyword or advertiser\n​\n​\nLog in\nAd Library\nAd Library Report\nAd Library API\nBranded content\nSystem status\nSubscribe to email notifications\nFrequently asked questions\nInformation about ads and data use\nPrivacy\nTerms\nCookies\nResults: ~250\nResults contain active ads matching your keyword query.\nFilters\nSort\n​\nSorting\nStatus \"Active\": Active ads\nRemove\n​\n​\nActive\nLibrary ID: 10007530189292762\nStarted running 26 May 2025\nPlatforms\n​\n​\n​\n​\nThis ad has multiple versions\n​\nThis creative and copy are used in 5 ads\nOpen dropdown menu\n​\nView summary data\nXTB Online Trading\nAdvertising\nNaučte se investovat do akcií a ETF a sestavte si své vlastní skálopevné portfolio!\n\nPřihlášením do bezplatného kurzu získáte:\n\n✅ 8 videí se zaměřením na akciové a ETF investování\n✅ Celý postup tvorby portfolia – vše, co potřebujete vědět\n✅ Od obecných informací a výběru akcií či ETF, přes samotný nákup titulů, až po následné zabezpečení celého portfolia\n✅ Kurz je vhodný pro úplné začátečníky i pokročilé investory\nXTB.CZ/TVORBA-AKCIOVEHO-PORTFOLIA\nZÍSKEJTE INVESTIČNÍ KURZ ZDARMA\nDownload\n​\nActive\nLibrary ID [truncated]
… [7004 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_wait_for`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=Portu&search_type=keyword_unordered&media_type=all');
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=Portu&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-12-21-641Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-12-17-204Z.log#L1-L16
```
</details>

<details><summary>result</summary>

```
### Result
Waited for 8 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 8 * 1000));
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=Portu&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-12-29-793Z.yml)
```
</details>

<details><summary>result</summary>

```
### Result
"Results: ~110\nResults contain active ads matching your keyword query.\nFilters\nSort\nSorting\nStatus \"Active\": Active ads\nRemove\nActive\nLibrary ID: 972272191849232\nStarted running 16 May 2026\nThis ad has multiple versions\nVIBAe\nAdvertising\nA New Standard of Ergonomic Footwear. Designed in Finland. Crafted in Portugal.\nVIBAE.COM\nZUMA Linen Pacific Blue\n€145\nShop Now\nActive\nLibrary ID: 575699768894727\nStarted running 12 May 2025\nThis ad has multiple versions\nPort 1560\nAdvertising\nAreál historického českokrumlovského pivovaru proměněný v centrum, které pulzuje životem!🤩\nDo Krumlova a do Portu\nVýlet, který stojí za to\nLearn More\nActive\nLibrary ID: 1834853007442631\nStarted running 26 Sep 2025\nBidCars - USA Car Import\nAdvertising\nTransport na terenie Stanów Zjednoczonych w pigułce! Wygrane podczas licytacji pojazdy są transportowane z placów aukcyjnych na terminal, gdzie następuje ich załadunek do kontenera, a w dalszej kolejności dostawa do portu wysyłkowego. \n\nZapraszamy do udziału w licytacjach online na naszej platformie aukcyjnej! Znajdziecie na niej ponad 100,000 pojazdów dostępnych do licytacji na żywo! \n\nPozdrawiamy\nZespół BidCars!\n#bidcars #autazusa #importzusa #samochodyzusa #importsamochodów #amerykacars #brykizameryki #polska\n0:00 / 0:51\nBID.CARS\nBidCars - USA Car Import\nGet a quote\nActive\nLibrary ID: 1441679956882506\nStarted running 29 Aug 20
… [3703 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_wait_for`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=Fondee&search_type=keyword_unordered&media_type=all');
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=Fondee&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-12-37-827Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-12-32-952Z.log#L1-L16
```
</details>

<details><summary>result</summary>

```
### Result
Waited for 8 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 8 * 1000));
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=Fondee&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-12-45-992Z.yml)
```
</details>

<details><summary>result</summary>

```
### Result
"Results: ~87\nResults contain active ads matching your keyword query.\nFilters\nSort\nSorting\nStatus \"Active\": Active ads\nRemove\nLibrary ID: 28055100750793947\nStarted running 3 Aug 2026\nThis creative and copy are used in 3 ads\nDirect Fondee\nAdvertising\nSpočítejte si, kolik může mít vaše investice za 10, 20 nebo 30 let. 📈 Neodkládejte investování na později. S Direct Fondee začnete jednoduše, online a na pár kliknutí.\n0:00 / 0:43\nLibrary ID: 1743693030119483\nStarted running 1 Aug 2026\nToo.posh.storee\nAdvertising\n⚡Doručení cca 10 dní⚡\nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nLibrary ID: 1417684586198605\nStarted running 19 Mar 2026\nToo.posh.storee\nAdvertising\n‼🤩 Doručení cca 10 dní ‼🤩\nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nVisit Instagram Profile\n \nINSTAGRAM.COM\nV
… [3020 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_wait_for`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=%22Trading%20212%22&search_type=keyword_exact_phrase&media_type=all');
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=%22Trading%20212%22&search_type=keyword_exact_phrase&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-12-49-374Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-12-48-872Z.log#L1-L16
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
Waited for 8 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 8 * 1000));
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=%22Trading%20212%22&search_type=keyword_exact_phrase&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-12-57-471Z.yml)
```
</details>

<details><summary>result</summary>

```
### Result
"Results include ads matching your exact-phrase query.\nFilters\nSort\nSorting\nStatus \"Active\": Active ads\nRemove\nLibrary ID: 4071667012966167\nStarted running 13 Sep 2026\nInvestovanie pre Začiatočníkov\nAdvertising\n🏦 BANKA ALEBO BROKER? Kde vás poplatky a dane oberajú o najviac peňazí? 📉\n\nMnohí Slováci začínajú investovať cez svoju vlastnú banku. Je to pohodlné – pár klikov v mobilnej aplikácii a je to. Viete však, o koľko peňazí vás ročne pripravia priebežné poplatky a aký obrovský je daňový rozdiel oproti nákupu ETF fondov cez brokera?\n\nV novom videu som si posvietil na reálne čísla a porovnal 3 najčastejšie voľby slovenských investorov:\n🔹 Klasické podielové fondy v banke (VÚB)\n🔹 Investičné plány na XTB\n🔹 Koláče (Pies) na Trading 212\n\nUkážeme si konkrétny modelový príklad (pri vklade 300 € mesačne), skryté náklady aj to, prečo môžete na poplatkoch v banke prísť o tisíce až desaťtisíce eur zo svojho zisku.\n\n🎬 Celé porovnanie a praktické ukážky nájdete vo videu tu:\n\n👉 https://youtu.be/xaoAmXa5a1k\n\n💬 Otázka na vás:\n\nKde máte svoje investície vy? Dávate prednosť pohodliu bankovej aplikácie, alebo už investujete samostatne cez brokerov ako XTB či Trading 212? Napíšte mi svoje skúsenosti do komentára! 👇\n\n(Upozornenie: Investovanie na finančných trhoch zahŕňa riziko straty kapitálu. Obsah videa slúži výhradne na vzdelávacie účely.)\nYOUTUBE.COM\nFondy Banky VUB vs Investičné plány od XTB a Tra
… [643 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_wait_for`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=ETF%20zdarma&search_type=keyword_unordered&media_type=all');
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=ETF%20zdarma&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-13-04-671Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-13-00-170Z.log#L1-L16
```
</details>

<details><summary>result</summary>

```
### Result
Waited for 8 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 8 * 1000));
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=ETF%20zdarma&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-13-12-792Z.yml)
```
</details>

<details><summary>result</summary>

```
### Result
"Results: ~44\nResults contain active ads matching your keyword query.\nFilters\nSort\nSorting\nStatus \"Active\": Active ads\nRemove\nLibrary ID: 2299367657147403\nStarted running 24 Jun 2025\nInvestování pro holky\nAdvertising\nPřijď na webinář ZDARMA a zjisti, jak začít investovat tím nejjednodušším způsobem – prostřednictvím indexových ETF! \n\nNapiš „chci investovat“ do komentáře a pošlu ti odkaz na webinář zdarma do zprávy 😊\n\n#jakinvestovat #budujemebohatstvi #investicniwebinar #webinaroinvestovani #investovanijednoduse #webinarzdarma #jakmitvicepenez #budujbohatstvi #bohatstvi #webinar\n0:00 / 0:55\nVZDELAVANI.INVESTOVANIPROHOLKY.CZ\nInvestování pro holky\nSee more\nLibrary ID: 1496566814710793\nStarted running 3 Jun 2026\nXTB Online Trading\nAdvertising\nNaučte se investovat do akcií a ETF a sestavte si své vlastní skálopevné portfolio!\n\nPřihlášením do bezplatného kurzu získáte:\n\n✅ 8 videí se zaměřením na akciové a ETF investování\n✅ Celý postup tvorby portfolia – vše, co potřebujete vědět\n✅ Od obecných informací a výběru akcií či ETF, přes samotný nákup titulů, až po následné zabezpečení celého portfolia\n✅ Kurz je vhodný pro úplné začátečníky i pokročilé investory\n0:00 / 0:37\nLibrary ID: 4557863711100374\nStarted running 16 Jul 2026\nCategories\nInvestiční spoření jednoduše\nAdvertising\nRok 2026 přináší jedinečné příležitosti pro investory všech úrovních. 💸\n\n👉 Náš e-book vás proved
… [6947 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_wait_for`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=Revolut%20investov%C3%A1n%C3%AD&search_type=keyword_unordered&media_type=all');
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=Revolut%20investov%C3%A1n%C3%AD&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-13-17-316Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-13-16-845Z.log#L1-L16
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
Waited for 8 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 8 * 1000));
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=Revolut%20investov%C3%A1n%C3%AD&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-13-25-399Z.yml)
```
</details>

<details><summary>result</summary>

```
### Result
"й"
### Ran Playwright code
```js
await page.evaluate('() => { const t=document.body.innerText; const i=t.indexOf(\'Результаты\'); return t.slice(i, i+4000).replace(/​\\n/g,\'\').replace(/Платформы\\n|Открыть раскрывающееся меню\\n|Смотреть сводные данные\\n|Прозрачность информации для ЕС\\n|Информация об объявлении\\n|У этой рекламы несколько версий\\n|Активно\\n|Этот креатив и текст используются в \\d+ объявлениях\\n/g,\'\'); }');
```
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_wait_for`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&q=Revolut&search_type=keyword_unordered&media_type=all');
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=Revolut&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-13-32-827Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-13-27-592Z.log#L1-L16
```
</details>

<details><summary>result</summary>

```
### Result
Waited for 8 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 8 * 1000));
```
### Page
- Page URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&q=Revolut&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc
- Page Title: Ad Library
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-13-40-993Z.yml)
```
</details>

<details><summary>result</summary>

```
### Result
"Results: ~160\nResults contain active ads matching your keyword query.\nFilters\nSort\nSorting\nStatus \"Active\": Active ads\nRemove\nLibrary ID: 1915971843145455\nStarted running 23 Jun 2026\nBearefoot\nAdvertising\nAre you tired of stiff, uncomfortable shoes? 🤔 We hear you! Bearefoot shoes embrace the comfort of walking barefoot with still feeling safe. \n\n✅ Wide Toe Box: reduce foot & ankle pain \n✅ Zero-Drop: increase foot strength & mobility \n✅ Thin Sole: comfortable & flexible fit\nBEAREFOOT.COM\nGrab a pair today!\nshop now >>\nShop Now\nLibrary ID: 3632467593572917\nStarted running 10 Sep 2026\nRevolut\nAdvertising\nPřidejte se k milionům zákazníků po celém světě, kteří s Revolutem platí, posílají a spoří peníze. Stáhněte si aplikaci 💪\nOtevřete si účet během chvilky\nSign Up\nLibrary ID: 1833770841117722\nStarted running 10 Sep 2026\nRevolut\nAdvertising\nOdemkněte platby ve více měnách, rychlé převody, chytré spoření a další. Stáhněte si aplikaci Revolut ještě dnes ⚡️\nSpravujte peníze po svém\nSign Up\nLibrary ID: 1149803153571859\nStarted running 12 Jun 2025\nRevolut Business\nAdvertising\nS Revolut Business můžete ušetřit na převodech a platbách. Platí podmínky.\nREVOLUT.COM/CZ/BUSINESS\nPodnikatelský účet online\nSign Up\nLibrary ID: 1137320558536230\nStarted running 13 Oct 2025\nRevolut Business\nAdvertising\nS Revolut Business můžete ušetřit na převodech a platbách. Platí podmínky.\nREVOLUT
… [2288 more characters]
```
</details>

→ `WebFetch` https://www.xtb.com/cz/poplatky-a-naklady

<details><summary>result</summary>

```
The server returned HTTP 404 Not Found.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

→ `WebFetch` https://www.trading212.com/cs/pricing

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

→ `WebFetch` https://www.interactivebrokers.ie/en/pricing/commissions-stocks-europe.php

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

→ `WebFetch` https://www.degiro.cz/data/pdf/cz/Sazebnik_poplatku.pdf

<details><summary>result</summary>

```
The server returned HTTP 404 Not Found.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

→ `WebSearch` XTB ceník poplatků akcie ETF konverze měn 0,5 % 100 000 EUR xtb.com/cz

→ `WebSearch` Fio e-Broker ceník poplatky zahraniční trhy Xetra USA 2026

→ `WebSearch` DEGIRO Česko ceník poplatků ETF výběr core selection 1 EUR poplatek za konverzi

<details><summary>result</summary>

```
Web search results for query: "XTB ceník poplatků akcie ETF konverze měn 0,5 % 100 000 EUR xtb.com/cz"

Links: [{"title":"tabulka poplatku a provizi","url":"https://www.xtb.com/cz/dulezite-dokumenty/tabulka-poplatku-a-provizi.pdf"},{"title":"Poplatek za směnu u XTB","url":"https://www.finhacker.cz/xtb/xtb-poplatek-za-smenu/"},{"title":"XTB vs. Fio: Porovnání poplatků a nákladů na obchodování","url":"https://zpravy.kurzy.cz/565890-xtb-vs-fio-porovnani-poplatku-a-nakladu-na-obchodovani/"},{"title":"Neděle 02. srpna 2026 21:15","url":"https://www.fxstreet.cz/xtbcr-lynx-vs-xtb-porovnani-poplatku-a-nakladu-na-obchodovani.html"},{"title":"Jak na vklady a výběry u XTB zcela zdarma","url":"https://www.finhacker.cz/jak-na-vklady-a-vybery-k-xtb-zcela-zdarma/"},{"title":"XTB ruší poplatek za výběry a upřesňuje měnovou konverzi u CFD – změny od 14. března 2026","url":"https://www.finhacker.cz/xtb-rusi-poplatek-za-vybery-a-upresnuje-menovou-konverzi-u-cfd/"},{"title":"XTB - shrnutí změn smluvní dokumentace účinné od 14. března 2026","url":"https://www.finhacker.cz/xtb-shrnuti-zmen-smluvni-dokumentace-ucinne-od-14-brezna-2026/"},{"title":"Představujeme brokera XTB","url":"https://iocharts.io/cs/blog/Anal%C3%BDza-brokera-xtb%3A-tohle-platforma-v%C3%AD-v-roce-2026/"},{"title":"Představujeme brokera XTB","url":"https://iocharts.io/cs/blog/xtb-broker-elemzes-ezt-tudja-a-platform-2026-ban/"}]

Search results support the 0,5 % conversion fee and the 100 000 EUR commission-free limit, but I could
… [2152 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "DEGIRO Česko ceník poplatků ETF výběr core selection 1 EUR poplatek za konverzi"

Links: [{"title":"degiro core selection etf","url":"https://curvo.eu/article/degiro-core-selection-etf"},{"title":"degiro free etfs","url":"https://www.eupersonalfinance.eu/articles/degiro-free-etfs"},{"title":"Core Selection di ETF DEGIRO | Quali sono le novità?","url":"https://investimi.com/?p=3631"},{"title":"By Kestutis Balciunas · Last reviewed 22 June 2026 · 11-year EU ETF investor","url":"https://financialexpertclass.com/?p=726"},{"title":"Core Selection di ETF DEGIRO | Quali sono le novità?","url":"https://investimi.com/etf-gratis-degiro/"},{"title":"DEGIRO review","url":"https://quantroutine.com/brokers/degiro/"},{"title":"DEGIRO Review 2026 — Fees, ETFs, EU Verdict","url":"https://freenance.io/products/degiro-review-european-broker-2026/"},{"title":"How to Buy ETFs on DEGIRO (Step by Step)","url":"https://quantroutine.com/brokers/buy-etfs-on-degiro/"},{"title":"DEGIRO ETF Core Selection 2026 — Free List, Fees, Tax, DCA","url":"https://freenance.io/etf/degiro-etf-core-selection-2026-eu-investors-free-list-fees-tax-savings-plan-comparison/"}]

Search didn't turn up a Czech-language DEGIRO fee schedule (ceník), so these figures come from English and Italian sources and may not match what Czech clients pay. Check the current Czech ceník on DEGIRO's site before relying on them.

- **Core Selection fee:** The Core Selection covers all ETFs, ETCs and ETNs listed
… [1567 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Fio e-Broker ceník poplatky zahraniční trhy Xetra USA 2026"

Links: [{"title":"kudy na burzu jak najit v cesku spolehliveho maklere","url":"https://forbes.cz/kudy-na-burzu-jak-najit-v-cesku-spolehliveho-maklere/"},{"title":"C trh 121130","url":"https://www.fio.cz/docs/cz/C_trh_121130.pdf"},{"title":"Fio výrazně snižuje poplatky","url":"https://www.finance.cz/clanky/54935-fio-vyrazne-snizuje-poplatky/"},{"title":"C zaklad 130901","url":"https://www.fio.cz/docs/cz/C_zaklad_130901.pdf"},{"title":"C zaklad 120406","url":"https://www.fio.cz/docs/cz/C_zaklad_120406.pdf"},{"title":"C trh 260108","url":"https://www1.fio.cz/docs/cz/C_trh_260108.pdf"},{"title":"C trh 260921","url":"https://www.fio.cz/docs/cz/C_trh_260921.pdf"},{"title":"C trh 120712","url":"https://www.fio.cz/docs/cz/C_trh_120712.pdf"},{"title":"C zaklad 260701","url":"https://www.fio.cz/docs/cz/C_zaklad_260701.pdf"},{"title":"C zaklad 121130","url":"https://www.fio.cz/docs/cz/C_zaklad_121130.pdf"}]

The most current Fio documents I found are the July 2026 base price list and a trading annex from August 2026. I found no current Xetra fee.

- **US commissions:** Under the July 2026 price list, electronic orders carry no order-entry fee. Trades up to 100 shares cost $7.95, and larger trades cost $9.95. Obchod do 100 kusů včetně $ 7,95 / Obchod nad 100 kusů $ 9,95 (trades up to 100 pieces inclusive: $7.95; over 100 pieces: $9.95). Personal order entry costs $2.00.
- **US regulatory fees (lat
… [1136 more characters]
```
</details>

→ `Bash` — Download broker fee PDFs
```sh
mkdir -p [tmp] && cd [tmp] && UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36"; for u in https://www.fio.cz/docs/cz/C_zaklad_260701.pdf https://www.fio.cz/docs/cz/C_trh_260921.pdf https://www.portu.cz/documents/download/generaldocument/cs/PriceList https://www.xtb.com/cz/dulezite-dokumenty/tabulka-poplatku-a-provizi.pdf; do n=$(echo $u | sed 's#.*/##'); curl -sL -m 30 -A "$UA" -o "$n" -w "$n %{http_code} %{content_type}\n" "$u"; done; ls -la
```

<details><summary>result</summary>

```
C_zaklad_260701.pdf 200 application/pdf
C_trh_260921.pdf 200 application/pdf
PriceList 200 application/pdf
tabulka-poplatku-a-provizi.pdf 200 application/pdf
total 4152
drwxr-xr-x   6 [user]  wheel      192 11 Oct  01:14 .
drwx------  20 [user]  wheel      640 11 Oct  01:14 ..
-rw-r--r--   1 [user]  wheel   419885 11 Oct  01:14 C_trh_260921.pdf
-rw-r--r--   1 [user]  wheel   359339 11 Oct  01:14 C_zaklad_260701.pdf
-rw-r--r--   1 [user]  wheel   233788 11 Oct  01:14 PriceList
-rw-r--r--   1 [user]  wheel  1103808 11 Oct  01:14 tabulka-poplatku-a-provizi.pdf
```
</details>

→ `Bash` — Extract text from Fio price list and grep relevant fees
```sh
cd [tmp] && for f in C_zaklad_260701.pdf PriceList tabulka-poplatku-a-provizi.pdf; do pdftotext -layout "$f" "$f.txt"; done; grep -n -i -E "účinn|platn|xetra|německ|NYSE|USA|ETF|konverz|směn|úschov|správ|minim" C_zaklad_260701.pdf.txt | head -80
```

<details><summary>result</summary>

```
69:
(C)   Trhy cenných papírů v USA (dále jen „USA“)
90:                      libovolného pokynu s vícedenní platností bude poplatek dle výše uvedené tabulky účtován odděleně
95: (E) Deusche Börse AG – XETRA (XETR) a Frankfurt (XFRA)
119:      Upozornění: U pokynu s vícedenní platností bude každý den, kdy došlo k jeho částečnému uspokojení, účtován
151:      R1/1 4365/18-3, je s účinností ode dne 12. 3. 2018 do odvolání pozastavena možnost vkládat do obchodního
167:       IN obchodované na trzích v USA na účet jiného klienta Fio                              $ 14,50 za ISIN a stranu
168:       IN obchodované na trhu XETRA na účet jiného klienta Fio                                € 14,50 za ISIN a stranu
169:       IN obchodované na trzích v USA k jinému obchodníkovi                                        $ 25,00 za ISIN
170:       IN obchodované na trhu XETRA k jinému obchodníkovi                                          € 25,00 za ISIN
192:          IN uložené na sběrném účtu pro obchodování v USA                                               zdarma
193:          IN uložené na sběrném účtu pro obchodování na DB XETRA                                         zdarma
236:        Založení a správa zástavního práva                                                    120,- Kč včetně DPH / ISIN
237:        Založení a správa PPN                                                                 120,- Kč včetně DPH / ISIN
252:      Upozornění:      Hotovostní a bezhotovostní operace na jak
… [1224 more characters]
```
</details>

→ `Bash` — Read Fio price list commission section
```sh
cd [tmp] && sed -n 1,135p C_zaklad_260701.pdf.txt
```

<details><summary>result</summary>

```
 CENÍK ZÁKLADNÍCH SLUŽEB

                                          Část I. A
      Poplatky za investování do podílových listů* a investičních akcií investičních fondů

         Jednorázová investice (v min. hodnotě 5.000 Kč, resp. 200 EUR**) –
                                                                                                                 zdarma
        platí jak pro podílové listy, tak pro investiční akcie
         Pravidelné investování (v min. hodnotě každé dílčí investice 300 Kč,
                                                                                                                 zdarma
        resp. 10 EUR**) – platí jak pro podílové listy, tak pro investiční akcie
            Odkup podílových listů vydaných před jedním rokem a více                                             zdarma
                                                                                                   3 % z hodnoty odkupovaných
            Odkup podílových listů vydaných před méně než jedním rokem
                                                                                                        podílových listů***
            Odkup investičních akcií vydaných před třemi a více roky                                             zdarma
         Odkup investičních akcií vydaných před dvěma roky a více a                                1 % z hodnoty odkupovaných
        zároveň před méně než třemi roky                                                               in
… [9947 more characters]
```
</details>

→ `Bash` — Read Fio custody and Portu price list
```sh
cd [tmp] && sed -n 180,200p C_zaklad_260701.pdf.txt; echo ======; grep -n -i -E "účinn|platn|%|minim|Kč" PriceList.txt | head -60
```

<details><summary>result</summary>

```
Exit code 1

          Založení klienta CDCP                                                                          zdarma
          Založení majetkového účtu v CDCP                                                               zdarma
          Registrace nového účtu u RMS                                                                   zdarma

(P)   Vedení majetkového účtu investičních nástrojů
                                                                                             poplatek příslušné třetí strany
          IN uložené na vlastním účtu klienta v CDCP
                                                                                              (viz Příloha ceníku) + DPH
          Kotované IN uložené na sběrném účtu v CDCP                                                     zdarma
          Nekotované IN uložené na sběrném účtu v CDCP                                          N x 0,04 % p. a.+ DPH *
          IN uložené na sběrném účtu pro obchodování na RMS                                             zdarma**
          IN uložené na sběrném účtu pro obchodování v USA                                               zdarma
          IN uložené na sběrném účtu pro obchodování na DB XETRA                                         zdarma
                                                                                                   N x 0,05 % p. a.***
          IN uložené na sběrném účtu pro obchodování na trhu GPW

… [462 more characters]
```
</details>

→ `Bash` — Inspect Portu price list text
```sh
cd [tmp] && ls; head -c 300 PriceList.txt; grep -n -i -E "účinn|platn|%|minim|Kč" PriceList.txt | head -60
```

<details><summary>result</summary>

```
C_trh_260921.pdf
C_zaklad_260701.pdf
C_zaklad_260701.pdf.txt
PriceList
PriceList.txt
tabulka-poplatku-a-provizi.pdf
tabulka-poplatku-a-provizi.pdf.txt
                                                                                                                                                          účinnost od 1. 9. 2026

                                                                               SAZEBNÍK SLUŽEB




Obsah
1.          P1:                                                                                                                                                          účinnost od 1. 9. 2026
15:     VI.         Doplňující informace souhrnně platné pro produkty a služby platformy Portu .......... 6
35: Bronzová                                                                  do 0,5 mil. Kč
37: Stříbrná                                                                   0,5–1 mil. Kč
40: Zlatá                                                                       1–5 mil. Kč
43: Platinová                                                                 Nad 5 mil. Kč
65: Bronzová                           1,00 %              0,50 %
67: Stříbrná                          0,80 %               0,40 %
68:                                                                             0,30 %             0,25 %
69: Zlatá                             0,60 %               0,30 %
72: Platinová                         0,40 %               0,20 %
92:    Transakční poplatky
… [2307 more characters]
```
</details>

→ `Bash` — Read Portu fee table details
```sh
cd [tmp] && sed -n 55,75p PriceList.txt; sed -n 180,232p PriceList.txt
```

<details><summary>result</summary>

```
Poplatek za využívání produktu1 (p.a.)


                               Klasický účet,                            Důchodový
 Úroveň účtu Portu                                 Účet Portu <26                           Dětský účet
                               Firemní účet                                 účet


 Bronzová                           1,00 %              0,50 %

 Stříbrná                          0,80 %               0,40 %
                                                                             0,30 %             0,25 %
 Zlatá                             0,60 %               0,30 %


 Platinová                         0,40 %               0,20 %


Příslušná sazba Poplatku za využívání produktu se vztahuje na všechen investovaný majetek
                                                         4
               WOOD Retail Investments a.s., Jihlavská 1558/21, Michle, 140 00 Praha 4, Česká republika;
    IČ: 178 18 834; Společnost je zapsána v Obchodním rejstříku u Městského soudu v Praze, oddíl B, vložka 27805

      IV.      Jednotlivé akcie a ETF (Brokerage)


Poplatek za realizovaný pokyn



Úroveň účtu Portu                       Klasický a Důchodový účet                    Účet Portu <26




Bronzová                                              0,4 %                                 0,2 %


Stříbrná                                              0,3 %                                0,15 %


Zlatá                                                 0,2 %
… [1014 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.xtb.com/cz/ucty-a-poplatky');
```
### Page
- Page URL: https://www.xtb.com/cz/ucty-a-poplatky
- Page Title: Not Found | XTB.com
- HTTP status: 404
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-14-26-210Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-14-25-759Z.log#L1
```
</details>

<details><summary>result</summary>

```
### Result
"https://www.xtb.com/cz/ucty-a-poplatky\nNot Found | XTB.com\nIt seems that we do not\nhave such page\n\nWe will take you to our homepage in:\n\n  10\nor you can click here:\nHomepage\n\nCopyright 2026 © X-Trade Brokers"
### Ran Playwright code
```js
await page.evaluate('() => location.href + \'\\n\' + document.title + \'\\n\' + document.body.innerText.slice(0, 6000)');
```
```
</details>

→ `WebSearch` xtb.com/cz poplatky "akcie a ETF" provize 0 % konverze měn úrok volné prostředky stránka poplatky

<details><summary>result</summary>

```
Web search results for query: "xtb.com/cz poplatky "akcie a ETF" provize 0 % konverze měn úrok volné prostředky stránka poplatky"

Links: [{"title":"Investice do akcií s nulovými poplatky","url":"https://akcie.xtb.com/investujte-do-akcii-bez-poplatku"},{"title":"Začněte investovat s akcií zdarma","url":"https://akcie.xtb.com/akcie-zdarma"},{"title":"Investice do akcií s nulovými poplatky","url":"https://cz.xtb.com/absolutni-nula"},{"title":"Investiční plány - poplatky","url":"https://www.xtb.com/int/help-center/investment-plan/are-investment-plans-commission-free"},{"title":"Maximize Your Investments: Access 350+ ETFs and a Fractional Shares Offer. T&Cs apply. Investing carries risks your capital.","url":"https://www.xtb.com/int/etfs"},{"title":"XTB","url":"https://www.xtb.com/int"},{"title":"Investment Plans - a smarter way to invest your savings","url":"https://www.xtb.com/int/investment-plans"},{"title":"XTB - Instrument specification","url":"https://www.xtb.com/int/instrument-specification"},{"title":"XTB Česká republika","url":"https://www.xtb.com/cz/akcie/investor"},{"title":"Frakční akcie s nulovými poplatky u XTB","url":"https://cz.xtb.com/frakcni-pravo"}]

Výsledky potvrzují hlavní body dotazu, ale stránku s kompletním ceníkem a úrokem z volných prostředků se najít nepodařilo.

**Akcie a ETF:** Na české stránce XTB je uvedeno, že při měsíčním objemu do 100 000 EUR jsou akcie a ETF bez poplatku. Transakce nad tento limit podléhají drobnému poplatku 0,2 % (min. 10 EUR)
… [930 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://cz.xtb.com/absolutni-nula');
```
### Page
- Page URL: https://akcie.xtb.com/investujte-do-akcii-bez-poplatku
- Page Title: Investice do akcií s nulovými poplatky | XTB
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-14-40-201Z.yml)
```
</details>

<details><summary>result</summary>

```
### Result
"https://akcie.xtb.com/investujte-do-akcii-bez-poplatku\nInvestujte do akcií bez poplatků\n*Při měsíčním objemu do 100 000 EUR. Všechny transakce nad tento limit jsou zpoplatněny drobným poplatkem 0,2 % (min. 10 EUR). Může být účtován poplatek 0,5 % za konverzi měn.\nNulové poplatky jsou teprve začátek\nMinimální hodnota transakce 10 EUR\nBezplatné a bezpečné vklady a výběry\nCo znamená „bez poplatků“?\n„Bez provize“ znamená, že pokud Váš měsíční obrat nepřesáhne 100 000 EUR, neplatíte žádný poplatek za investování do reálných akcií a ETF (může být účtován poplatek za konverzi měny ve výši 0,5 %).\nCo když můj měsíční obrat přesáhne 100 000 EUR?\nJe to jednoduché. Všechny transakce nad tento limit jsou zpoplatněny drobným poplatkem ve výši 0,2 % (min. 10 EUR).\ns nulovými poplatky!*\nPoužíváme soubory cookie, abychom zajistili správnou funkčnost webu. Díky tomu je web uživatelsky přívětivější a může více vyhovět Vašim potřebám. Díky nim můžeme měřit efektivitu obsahu a reklam, analyzovat, kdo navštěvuje naše stránky, a zobrazovat personalizované reklamy. Kliknutím na \"Přijmout vše“ souhlasíte s jejich umístěním na Vašem zařízení a jejich používáním z naší strany. Více informací o tom, jak zpracováváme údaje, naleznete v našich Nastavení souborů cookies"
### Ran Playwright code
```js
await page.evaluate('() => { const L=document.body.innerText.split(\'\\n\').filter(l=>/poplat|konverz|úschov|neaktiv|minim|vklad|CZK|Kč|KNF|ČNB|regul|EUR|%/i.test(l)); return location.
… [64 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.trading212.com/terms/invest');
```
### Page
- Page URL: https://www.trading212.com/terms/invest
- Page Title: Just a moment...
- HTTP status: 403
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-14-44-023Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-14-43-754Z.log#L1
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"https://www.trading212.com/terms/invest\nJust a moment...\n"
### Ran Playwright code
```js
await page.evaluate('() => { const L=document.body.innerText.split(\'\\n\').filter(l=>/fee|commission|conversion|custody|minimum|CySEC|BaFin|FCA|Cyprus|Czech|CZK|%/i.test(l)); return location.href+\'\\n\'+document.title+\'\\n\'+[...new Set(L)].slice(0,60).join(\'\\n\'); }');
```
### Page
- Page URL: https://www.trading212.com/terms/invest?__cf_chl_tk=wtGDJPKGILRAV0JE8FTT50xRxmiAC_.x3dVmOSCzHaw-1791674083-1.0.1.1-xm6LnTv6cLYa0Ms2qpsB.cA48G9B5IHrIAiJfgehN00
- Page Title: Loading https://www.trading212.com/ru/terms/invest
- Console: 2 errors, 0 warnings
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-14-43-754Z.log#L2
```
</details>

→ `mcp__playwright__browser_wait_for`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
Waited for 5 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 5 * 1000));
```
### Page
- Page URL: https://www.trading212.com/ru/terms/invest
- Page Title: Invest account trading terms
- Console: 4 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-14-51-466Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-14-43-754Z.log#L3-L6
```
</details>

<details><summary>result</summary>

```
### Result
"https://www.trading212.com/ru/terms/invest\nInvest account trading terms\nTerms and fees\nTrading commission\nCustody fee\nFX fee\n0,15 %\nApplies whenever you convert funds between currencies, including trades involving currency conversion. We convert at the current interbank rate used by banks to exchange currencies with one another. No additional currency-conversion costs. You never pay more than 0,15 %, even at weekends. Reduce or avoid conversion costs with our multi-currency feature. Learn more.\n0,7 %\nTrading 212 does not charge withdrawal fees. Third-party banks or payment processors may charge their own fees outside our control.\n3,4 % APY\n2,5 % APY\n3,55 % APY\n0,5 % APY\n0,25 % APY\n2,25 % APY\n3 % APY\nCZK interest rate\n3,5 % APY\nIssuer fees and charges\nAmerican depositary receipt fee\nSome foreign stocks trade as American depositary receipts (ADRs). Their issuer may charge a small fee, usually a few cents per share per year (0,01–0,05 $ per share). Trading 212 charges no additional fees. Learn more.\n0,5 %\n0,4 %\nFINRA fee\nSEC fee\n0,00206 %\nNo fee\nNo FX commission, no spread markup, the actual interbank rate.\n1 %\nRegulated by the FCA\nTrading 212 UK Ltd. is registered in England and Wales,
… [2173 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.interactivebrokers.ie/en/pricing/commissions-stocks-europe.php');
```
### Page
- Page URL: https://www.interactivebrokers.ie/en/pricing/commissions-stocks.php?region=americas
- Page Title: Commissions Stocks | Interactive Brokers Ireland
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-14-57-542Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-14-55-215Z.log#L1-L2
```
</details>

<details><summary>result</summary>

```
### Result
"https://www.interactivebrokers.ie/en/pricing/commissions-stocks.php?region=americas\nCommissions Stocks | Interactive Brokers Ireland\nTrade with low 0.03% FX rates + Earn up to 3.38% on cash. Terms apply Get Started\n\nInvesting in financial products involves risk. Losses may exceed the value of your original investment.\n\nLog In\nOpen Account\nWhy IBKR\nProducts\nPlatforms\nAccounts\nPricing\nEducation\nSupport\nAbout Us\n\nPrivacy Preference \n...\nTrade with low 0.03% FX rates + Earn up to 3.38% on cash. Terms apply Get Started\n\nInvesting in financial products involves risk. Losses may exceed the value of your original investment.\n\nLog In\nOpen Account\nWhy IBKR\nProducts\nPlatforms\nAccounts\nPricing\nEducation\nSupport\nAbout Us\n\nPrivacy Preference Center\n\nThis website uses cookies to offer a better browsing experience and to collect usage information.\nBy clicking on the \"ACCEPT COOKIES\" button you accept our Cookie Policy.\n\nCustomize Settings \nReject All Cookies  Accept Cookies\n\nOverview\nStocks, ETFs, Warrants and Structured Products\nOptions\nFutures and FOPs\nPrediction Markets\nSpot Currencies\nCrypto-Assets\nMetals\nBonds\nCFDs\nMutual Funds\nGlobal Outsourced Trading Desk\n\nCOMMISSIONS\n\nStocks, ETFs, Warrants and Structured Products\n\nMinimize Your Costs to Maximize Your Returns*. Low commissions with no added spreads, ticket charges, platform fees, or account minimums.\n\nAmericas\nEurope\nMiddle East\nAsia Pacific\nUNITED STATES
… [1072 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.interactivebrokers.ie/en/pricing/commissions-stocks.php?region=europe');
```
### Page
- Page URL: https://www.interactivebrokers.ie/en/pricing/commissions-stocks.php?region=europe
- Page Title: Commissions Stocks | Interactive Brokers Ireland
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-15-03-382Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-15-00-181Z.log#L1-L2
```
</details>

<details><summary>result</summary>

```
### Result
"Maximize Your Returns*. Low commissions with no added spreads, ticket charges, platform fees, or account minimums.\n\nAmericas\nEurope\nMiddle East\nAsia Pacific\nAUSTRIA\nMonthly Trade Value (EUR)1\tTiered5\tFixed - IB SmartRoutingSM\tFixed - Direct Routing\n≤ 50,000,000\t0.05% of Trade Value\t0.05% of Trade Value\t0.1% of Trade Value\n50,000,000.01 - 100,000,000\t0.03% of Trade Value\t\t\n100,000,000.01 - 500,000,000\t0.02% of Trade Value\t\t\n> 500,000,000\t0.015% of Trade Value\t\t\nFractional Shares\tTiered Pricing\t0.05% of Trade Value\t\n\nMinimum per order (shares)\tEUR 1.25\tEUR 3.00\tEUR 4.00\nMinimum per order (fractional shares)\tEUR 1.25\tEUR 1.25\t\nMaximum per order (shares)\tEUR 29.00\t\n\nNone\n\n\t\n\nNone\n\n\nMaximum per order (fractional shares)\t\n\nNone\n\n\t\t\nIB SmartRoutingSM\t\t\t\nThird Party Fees2\t\nExchange Fees\nClearing Fees\nRegulatory Fees\n\t\n\nNone3\n\n\t\n\nNone\n\nAustria - Fees\nAustria - Third Party Fees\nAustria - Examples\nBALTIC REGION (ESTONIA, LATVIA, LITHUANIA)\nMonthly Trade Value (EUR)1\tTiered\tFixed\n≤ 50,000,000\t0.05% of Trade Value\t0.2% of Trade Value\n50,000,000.01 - 100,000,000\t0.03% of Trade Value\t\n100,000,000.01 - 500,000,000\t0.02% of Trade Value\t\n> 500,000,000\t0.015% of Trade Value\t\n\nMinimum per order\tEUR 1.25\tEUR 10.00\nMaximum per order\tEUR 29.00\tNone\nIB SmartRoutingSM\t\t\nThird Party Fees2\t\nExchange Fees\nClearing Fees\n\t\n\nNone\n\nBaltic Region (Estonia, Latvia, Lithuania) - Fees
… [2194 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.degiro.cz/poplatky');
```
### Page
- Page URL: https://www.degiro.cz/poplatky
- Page Title: Investujte s neuvěřitelně nízkými poplatky
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-15-07-326Z.yml)
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"https://www.degiro.cz/poplatky\nInvestujte s neuvěřitelně nízkými poplatky\nPOPLATKY\nInvestujte s neuvěřitelně nízkými poplatky\nNaše poplatková struktura způsobila revoluci v oboru a umožňuje vám maximálně využít vaše investice.\nObjevte naše poplatky\nChceme zpřístupnit investování všem. Podívejte se na náš jednoduchý ceník a paušální strukturu poplatků. Chcete si přesně spočítat, kolik ročně zaplatíte při investování s námi, včetně měnových a externích poplatků? Pak použijte naši kalkulačku nákladů.\nUSA\n€1\nETFs\n€0\n€2\nPoznámka: Provizní poplatky zaplatíme u všech ETF v našem Core Selection my, vy za každou transakci zaplatíte pouze manipulační poplatek ve výši 1 EUR. Před investováním si daný seznam nejprve prostudujte.\n€0,75\nJiné poplatky\nPOPLATEK\n€5,50\nPoplatek za neaktivnost\nPoplatky za úschovu\nKonverze měny\n%0,25*\nPoznámka: Tato stránka s přehledem poplatků uvádí poplatky pro běžný (základní účet, aktivní účet, účet obchodník) a depozitní (nikoli úvěrový) účet. Mezi běžným a depozitním účtem však existují určité rozdíly, viz Sazebník poplatků / Sazebník depozitních poplatků.\nNáklady na produkty jsou zahrnuty v ceně a neplatí se nám, ale emitentovi daných produktů. Například emitenti ETF a fondů si účtují celkový poměr nákladů (TER) a emitenti pákových produktů si účtují finanční poplatek. Tyto poplatky, jakož i další informace týkající se produktů, naleznete v Dokumentu klíčových informací pro investory (KIID) / Dokumentu klíčových informací
… [5005 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.revolut.com/cs-CZ/legal/trading-fees/');
```
### Page
- Page URL: https://www.revolut.com/cs-CZ/legal/trading-fees/
- Page Title: 404 | Revolut
- HTTP status: 404
- Console: 1 errors, 3 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-15-12-285Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-15-11-730Z.log#L1-L4
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"https://www.revolut.com/cs-CZ/legal/trading-fees/\n404 | Revolut\nWe update our website regularly, so this page may have been moved, removed, or the URL wasn’t quite right."
### Ran Playwright code
```js
await page.evaluate('() => { const L=document.body.innerText.split(\'\\n\').filter(l=>/poplat|ETF|konverz|směn|úschov|Standard|Premium|Metal|Ultra|obchod|€|EUR|%|Kč|regul|Litv|CBL|ČNB/i.test(l)); return location.href+\'\\n\'+document.title+\'\\n\'+[...new Set(L)].slice(0,80).join(\'\\n\'); }');
```
```
</details>

→ `WebSearch` Revolut Česko investování poplatky ETF akcie Standard plán poplatek za obchod 0,25 % úschova Revolut Securities Europe

→ `WebSearch` Saxo Česká republika ceník akcie ETF poplatek minimální poplatek konverze měn 2026

→ `WebSearch` Lynx ceník poplatky akcie ETF USA Evropa minimální poplatek lynxbroker.cz

<details><summary>result</summary>

```
Web search results for query: "Revolut Česko investování poplatky ETF akcie Standard plán poplatek za obchod 0,25 % úschova Revolut Securities Europe"

Links: [{"title":"Revolut má v Česku 800 tisíc klientů. Vybral si je na test a spouští tu pilotně investiční aplikaci","url":"https://cc.cz/revolut-ma-v-cesku-800-tisic-klientu-vybral-si-je-na-test-a-spousti-tu-pilotne-investicni-aplikaci/"},{"title":"Revolut usiluje o pasivní investory, spouští pro ně nákupy stovek ETF zdarma. Dočkají se i Češi","url":"https://cc.cz/revolut-usiluje-o-pasivni-investory-spousti-pro-ne-nakupy-stovek-etf-zdarma-dockaji-se-i-cesi/"},{"title":"revolut.com","url":"https://revolut.com/cs-CZ/etfs"},{"title":"revolut.com","url":"https://revolut.com/sk-SK/etfs"},{"title":"Pondělí 21. září 2026 05:31","url":"https://www.fxstreet.cz/klicova-slova+ehp.html"},{"title":"nova investicni aplikace revolut invest je nyni dostupna v cesku recku a dansku","url":"https://finex.cz/nova-investicni-aplikace-revolut-invest-je-nyni-dostupna-v-cesku-recku-a-dansku/"},{"title":"Úterý 04. srpna 2026 04:32","url":"https://www.fxstreet.cz/klicova-slova+revolut-securities.html"},{"title":"Revolut oznámil spuštění ETF investičních plánů bez poplatků","url":"https://www.e15.cz/tiskove-zpravy/revolut-oznamil-spusteni-etf-investicnich-planu-bez-poplatku-1421634"},{"title":"etf revolut","url":"https://brokerchooser.com/cs/invest-long-term/diversification/etf-revolut"}]

The search didn't turn up a 0,25 % trading fee for Revolut in
… [1537 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Lynx ceník poplatky akcie ETF USA Evropa minimální poplatek lynxbroker.cz"

Links: [{"title":"cfd fees","url":"https://brokerchooser.com/cs/broker-reviews/lynx-review/cfd-fees"},{"title":"ve zkratce","url":"https://brokerchooser.com/cs/broker-reviews/lynx-review"},{"title":"lynx forex","url":"https://brokerchooser.com/cs/broker-reviews/lynx-review/lynx-forex"},{"title":"www.home.saxo","url":"https://www.home.saxo/cs-cz/rates-and-conditions/etf/commissions"},{"title":"www.home.saxo","url":"https://www.home.saxo/sk-sk/rates-and-conditions/etf/commissions"},{"title":"Evropa – obchodování akcií, ETF, trackers a páčených produktů","url":"https://lynxbroker.cz/poplatky/evropa-akcie"},{"title":"us stocks lynx","url":"https://brokerchooser.com/sk/invest-long-term/diversification/us-stocks-lynx"},{"title":"Lynx: Nový broker na českém trhu bojuje proti zbytečně vysokým poplatkům","url":"https://www.finance.cz/zpravy/finance/373039-lynx-novy-broker-na-ceskem-trhu-bojuje-proti-zbytecne-vysokym-poplatkum"},{"title":"lynx review","url":"https://brokerchooser.com/sk/broker-reviews/lynx-review"}]

Hledání nenašlo aktuální ceník přímo na lynxbroker.cz. Oficiální stránka pro Evropu se načetla jen částečně, bez konkrétních sazeb.

- **Oficiální stránka (Evropa):** Objednávky zadané přes LYNX provádí Interactive Brokers, který účtuje náklady za provedení, burzovní, clearingové a další poplatky. Tyto náklady jsou už zahrnuty v provizi, kterou najdete na stránce saze
… [1006 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Saxo Česká republika ceník akcie ETF poplatek minimální poplatek konverze měn 2026"

Links: [{"title":"www.home.saxo","url":"https://www.home.saxo/sk-sk/rates-and-conditions/etf/commissions"},{"title":"www.home.saxo","url":"https://www.home.saxo/cs-cz/rates-and-conditions/etf/commissions"},{"title":"ETFs explained","url":"https://www.home.saxo/cs-cz/learn/guides/etfs/how-to-choose-an-etf"},{"title":"Investujte do ETF","url":"https://www.home.saxo/cs-cz/products/etf-v2"},{"title":"Investujte do ETF","url":"https://www.home.saxo/cs-cz/products/etf"},{"title":"Investujte do ETF","url":"https://www.home.saxo/sk-sk/products/etf"},{"title":"cenik investovani","url":"https://www.csas.cz/cenik-investovani"},{"title":"1. Best brokers","url":"https://brokerchooser.com/best-brokers/best-etf-brokers-in-the-czech-republic"},{"title":"Why Saxo Stands Out for ETF Investors (2026 Review)","url":"https://financialexpertclass.com/?p=5180"}]

Výsledky ukazují jen část ceníku. Konkrétní poplatek za obchod a poplatek za měnovou konverzi se v nich nenašel.

- **Cenové úrovně:** Saxo nabízí tři úrovně účtu, a čím více obchodujete, tím méně platíte (Máme tři cenové úrovně. Když obchodujete více, platíte méně.). Ceny za burzy se podle stránky liší podle země bydliště a přesný přehled je v trade ticketech na platformě (Výše uvedené ceny jsou orientační – liší se podle země, ve které žijete. Úplný přehled přesných cen je k dispozici prostřednictvím trade ticketů na platfo
… [1649 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.home.saxo/cs-cz/rates-and-conditions/etf/commissions');
```
### Page
- Page URL: https://www.home.saxo/cs-cz/rates-and-conditions/etf/commissions
- Page Title: ETF Commissions | Saxo Bank
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-15-27-488Z.yml)
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"https://www.home.saxo/cs-cz/rates-and-conditions/etf/commissions\nETF Commissions | Saxo Bank\nPoplatky a ceny\nNaše webové stránky používají soubory cookie k tomu, aby vám nabídly lepší zážitek z prohlížení tím, že umožňují, optimalizují a analyzují provoz stránek, a také k poskytování personalizovaného obsahu reklam a umožňují připojení k sociálním médiím. Výběrem možnosti \"Přijmout vše\" souhlasíte s používáním souborů cookie a souvisejícím zpracováním osobních údajů. Výběrem možnosti \"Spravovat souhlas\" můžete spravovat své předvolby souhlasu. Své preference můžete kdykoli změnit nebo odvolat svůj souhlas prostřednictvím stránky se zásadami používání souborů cookie. Prohlédněte si prosím naše zásady používání souborů cookie cookie a naše zásady ochrany osobních údajů.\n*ETF, které nemají KID v českém jazyce (např. ETF obchodované v USA), jsou dostupné pouze profesionálním investorům.\nPoplatky\nBurza - Severní Amerika\tClassic\tPlatinum\tVIP\t\nBurza - Evropa / Střední východ/Afrika\tClassic\tPlatinum\tVIP\t\nBurza - Asia / Pacific\tClassic\tPlatinum\tVIP\t\n0,08%\n(min. 3 AUD)\n0,05%\n0,03%\n(min. 15 HKD)\n0,2%\n(min. 50 MYR)\n0,15%\n0,1%\n(min. 15 CNH)\n(min. 3 SGD)\n(min. 800 JPY)\nVyplnění žádosti o účet trvá zhruba 5 minut\nPoplatky za převod akcií\nDaně a poplatky za korporátní akce\nSouhrnné poplatky a sazby\nPoplatky již od\nPoplatek již od\n0.05%\nProvize, poplatky za úschovu a poplatky za platformu za\nSouhrnné poplatky\nApple a logo Apple jsou oc
… [512 more characters]
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"Burza - Severní AmerikaClassicPlatinumVIP NASDAQ 0,08% (min. 1 USD) 0,05% (min. 1 USD) 0,03% (min. 1 USD) Obchodujte NASDAQ New York Stock Exchange 0,08% (min. 1 USD) 0,05% (min. 1 USD) 0,03% (min. 1 USD) Obchodujte New York Stock Exchange NYSE American 0,08% (min. 1 USD) 0,05% (min. 1 USD) 0,03% (min. 1 USD) Obchodujte NYSE American OTC Markets Group (Pink Sheets) 0,015 USD/Akcie (min. 1 USD - max. 25 USD) 0,01 USD/Akcie (min. 1 USD - max. 25 USD) 0,005 USD/Akcie (min. 1 USD - max. 25 USD) Obchodujte OTC Markets Group (Pink Sheets) Toronto Stock Exchange 0,08% (min. 5 CAD) 0,05% (min. 5 CAD) 0,03% (min. 5 CAD) Obchodujte Toronto Stock Exchange TSX Venture Exchange 0,015 CAD/Akcie (min. 5 CAD - max. 25 CAD) 0,01 CAD/Akcie (min. 5 CAD - max. 25 CAD) 0,005 CAD/Akcie (min. 5 CAD - max. 25 CAD) Obchodujte TSX Venture Exchange\n---\nError MessageDošlo k chyběKontaktujte nás prosím, pokud problém nezmizí.\n---\nBurza - Evropa / Střední východ/AfrikaClassicPlatinumVIP Prague Stock Exchange 0,25% (min. 75 CZK) 0,15% (min. 75 CZK) 0,1% (min. 75 CZK) Obchodujte Prague Stock Exchange Athens Exchange 0,3% (min. 10 EUR) 0,25% (min. 10 EUR) 0,2% (min. 10 EUR) Obchodujte Athens Exchange BME Spanish Exchanges 0,12% (min. 5 EUR) 0,08% (min. 5 EUR) 0,05% (min. 5 EUR) Obchodujte BME Spanish Exchanges Deutsche Börse (XETRA) 0,08% (min. 3 EUR) 0,05% (min. 3 EUR) 0,03% (min. 3 EUR) Obchodujte Deutsche Börse (XETRA) Euronext Dublin 0,12% (min. 5 EUR) 0,08% (min. 5 EUR) 0,05% (min. 5 EUR
… [2656 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.home.saxo/cs-cz/rates-and-conditions/custody-fees');
```
### Page
- Page URL: https://www.home.saxo/cs-cz/rates-and-conditions/custody-fees
- Page Title: NotFoundPage | Saxo Bank
- HTTP status: 404
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-15-35-733Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-15-34-586Z.log#L1
```
</details>

<details><summary>result</summary>

```
### Result
"https://www.home.saxo/cs-cz/rates-and-conditions/custody-fees\nNaše webové stránky používají soubory cookie k tomu, aby vám nabídly lepší zážitek z prohlížení tím, že umožňují, optimalizují a analyzují provoz stránek, a také k poskytování personalizovaného obsahu reklam a umožňují připojení k sociálním médiím. Výběrem možnosti \"Přijmout vše\" souhlasíte s používáním souborů cookie a souvisejícím zpracováním osobních údajů. Výběrem možnosti \"Spravovat souhlas\" můžete spravovat své předvolby souhlasu. Své preference můžete kdykoli změnit nebo odvolat svůj souhlas prostřednictvím stránky se zásadami používání souborů cookie. Prohlédněte si prosím naše zásady používání souborů cookie cookie a naše zásady ochrany osobních údajů."
### Ran Playwright code
```js
await page.evaluate('() => location.href+\'\\n\'+[...new Set(document.body.innerText.split(\'\\n\').filter(l=>/úschov|%|EUR|DPH|konverz|měn/i.test(l)))].slice(0,30).join(\'\\n\')');
```
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://lynxbroker.cz/poplatky/evropa-akcie');
```
### Page
- Page URL: https://www.lynxbroker.cz/poplatky/
- Page Title: Poplatky za obchodování na burze ▷ Nízké a transparentní poplatky LYNX
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-15-40-099Z.yml)
```
</details>

<details><summary>result</summary>

```
### Result
"https://www.lynxbroker.cz/poplatky/\nNáklady ovlivňují výnos z vašich investic. Při investování skrze LYNX se setkáte s pěti kategoriemi nákladů: provize, transakční náklady, úroky, poplatky za neaktivitu a ostatní náklady.\n(v EUR)\n1,00 EUR + 0,15 %\nMaximum: 99,00 EUR\nMinimum: 5,00 USD Maximum: 2 % z hodnoty transakce\n99,00 CZK + 0,20 %\nPoplatky třetích stran (0,05 % hodnoty pozice ročně)\nKontrola měnových konverzí\nJaký je minimální vklad pro otevření investičního účtu?\nEuro Stoxx 50: Rostoucí a klesající akcie\nLYNX je online brokerem pro aktivní investory od roku 2006. Díky pobočkám v Evropě nabízíme investorům přístup k široké škále finančních nástrojů prostřednictvím jediného investičního účtu. Klienti mohou využívat investiční platformu a mobilní aplikace s analytickými nástroji a aktuálními informacemi o cenách. LYNX také nabízí vzdělávací články, analýzy a webináře. Pro více informací navštivte náš Investiční portál. LYNX neposkytuje investiční poradenství. Za své investiční rozhodnutí jste vždy zodpovědní vy sami. Investování zahrnuje riziko. Celková ztráta může převýšit vklad. Výsledky z minulosti nejsou zárukou budoucnosti.\nMin. požadavky"
### Ran Playwright code
```js
await page.evaluate('() => location.href+\'\\n\'+[...new Set(document.body.innerText.split(\'\\n\').filter(l=>/Němec|Xetra|Německo|EUR|%|min|úschov|neaktiv|konverz|KID|ETF/i.test(l)))].slice(0,50).join(\'\\n\')');
```
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
" v důsledku toho, že používáte jejich služby.\n\nPřizpůsobit \nPřijmout vše\nSkip to main content\nONLINE BROKER\nŠIROKÁ NABÍDKA PRODUKTŮ A TRHŮ\nNÍZKÉ A TRANSPARENTNÍ POPLATKY\nOnline broker\nProč LYNX\nProdukty & Burzy\nObchodní platformy\nPoplatky\nInvestiční účet\nVzdělávání & Inspirace\nInfo\nInvestiční portál\nPodpora\nVyhledat\nPřihlášení\nOtevřít účet\nPoplatky\nTarify\n\nNáklady ovlivňují výnos z vašich investic. Při investování skrze LYNX se setkáte s pěti kategoriemi nákladů: provize, transakční náklady, úroky, poplatky za neaktivitu a ostatní náklady.\n\nPři každé transakci účtuje LYNX poplatky v měně dané transakce.\n\nChcete-li si prohlédnout všechny tarify a služby podle obchodovatelných produktů, nahlédněte do úplného přehledu poplatků.\n\nAkcie\nOpce\nFutures\n\nEvropské akcie (Tradegate | TGATE)\n(v EUR)\n\n1,00 EUR + 0,15 %\n\nz hodnoty transakce\nMaximum: 99,00 EUR\n\nUS akcie (Nasdaq | NDAX)\n(v USD)\n\n0,01 USD\n\nza akcii\nMinimum: 5,00 USD Maximum: 2 % z hodnoty transakce\n\nČeské akcie (Prague Stock Exchange | PRA) (v CZK)\n\n99,00 CZK + 0,20 %\n\nz hodnoty transakce\nPoplatky třetích stran (0,05 % hodnoty pozice ročně)\n\nOtevřít účet\n\nBezplatné investování neexistuje\n\nPředem však můžete získat přehled o nákladech. Díky transparentním nákladům můžete mít své portfolio pod kontrolou.\n\nKontrola měnových konverzí\n\nProstřednictvím LYNX se sami můžete rozhodnout, zda a kdy chcete měnu konvertovat. Díky tomu vás nepřekvapí neočekávané n
… [472 more characters]
```
</details>

**Agent:**

Now Revolut, Fondee, Finax.

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.revolut.com/cs-CZ/etfs/');
```
### Page
- Page URL: https://www.revolut.com/cs-CZ/etfs/
- Page Title: ETF | Revolut Česko
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-15-46-272Z.yml)
```
</details>

<details><summary>result</summary>

```
### Result
"https://www.revolut.com/cs-CZ/etfs/\nETF\nDiverzifikujte své portfolio s ETF\nZačněte již od 1 € se zlomkovými akciemi, abyste vlastnili část těchto ETF a investovali menší částky a zároveň využívali výhod diverzifikovaných portfolií.\nÚčtuje se provize a platí se poplatek Revolutu za provedení.¹ Mohou se účtovat i další poplatky, například za směnu měn nebo regulatorní poplatky. Přečtěte si Nejčastější dotazy k poplatkům za obchodování a Nejčastější dotazy k nákladům ETF.\nVybrat ETF\nJednoduché a jasné poplatky\nS plánem Premium, Metal a Ultra můžete investovat do akcií a ETF (včetně jejich zlomků) bez provizí v rámci měsíčního limitu vašeho plánu.\nZískáte 5 pokynů bez provize s plánem Premium a 10 s plány Ultra a Metal.\nMohou se účtovat další náklady, jako je poměr celkových nákladů (TER) nebo regulatorní poplatky. Provizí se rozumí poplatek Revolutu za provedení.¹ Přečtěte si Nejčastější dotazy k poplatkům za obchodování, Zveřejnění nákladů a poplatků ex-ante a Nejčastější dotazy k nákladům ETF.\nNejčastější dotazy k poplatkům za obchodování\nZjednodušte si investování pomocí automatických příspěvků ze mzdy. Nastavte si opakovanou investici do způsobilých ETF a udělejte z investování zvyk.\nInvestování do burzovně obchodovaných fondů (ETF) zahrnuje rizika, jako je kolísání trhu, což může vést k částečné nebo úplné ztrátě vašeho investovaného kapitálu. Sektorově zaměřeným ETF může chybět diverzifikace, čímž se zvyšuje jejich zranitelnost vůči ekonomickým změn
… [3998 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.fondee.cz/cs/cenik');
```
### Page
- Page URL: https://www.fondee.cz/cenik
- Page Title: 404: This page could not be found.
- HTTP status: 404
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-15-49-099Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-15-48-174Z.log#L1
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"https://www.fondee.cz/cenik\n404: This page could not be found.\nHodnota investice může v průběhu času kolísat, návratnost investované částky není zaručena. S investicemi jsou spojena rizika. Investor se vystavuje především tržním rizikům spočívajícím v možnosti nepříznivého vývoje cen aktiv (akcií, dluhopisů, atd.), úvěrovým rizikům, riziku inflace, riziku likvidity a rizikům nepříznivého vývoje směnných kurzů. Investor může získat zpět méně než kolik investoval. Výnos investice může být snížen vlivem poplatků a daňových povinností investora. Informace na webu mají informační charakter a nejsou investičním doporučením.\nPoplatky\nAplikace Direct Fondee\n© 2026 Direct Fondee a.s. · made with ❤️ by Direct Fondee"
### Ran Playwright code
```js
await page.evaluate('() => location.href+\'\\n\'+document.title+\'\\n\'+[...new Set(document.body.innerText.split(\'\\n\').filter(l=>/poplat|%|Kč|minim|ETF|ČNB|Direct|regul|dětsk|DIP/i.test(l)))].slice(0,40).join(\'\\n\')');
```
### Page
- Page URL: https://www.fondee.cz/cenik
- Page Title: 404: This page could not be found.
- HTTP status: 404
- Console: 1 errors, 1 warnings
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-15-48-174Z.log#L2
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"https://www.fondee.cz/poplatky"
### Ran Playwright code
```js
await page.evaluate('() => [...document.querySelectorAll(\'a\')].filter(a=>/poplat/i.test(a.textContent)).map(a=>a.href).join(\'\\n\')');
```
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.fondee.cz/poplatky');
```
### Page
- Page URL: https://www.fondee.cz/poplatky
- Page Title: Poplatky za investování | Direct Fondee
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-15-55-672Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-15-54-299Z.log#L1
```
</details>

<details><summary>result</summary>

```
### Result
"https://www.fondee.cz/poplatky\nPoplatky za investování | Direct Fondee\nPOPLATKY\nJeden transparentní poplatek. Žádné vstupní poplatky, skryté náklady ani nepříjemná překvapení.\nJeden poplatek. Žádné háčky.\nVedení účtu, sestavení portfolia, pravidelné vyvažování i každý nákup a prodej ETF máte v ceně.\nKolik stojí investování u Direct Fondee?\nJeden roční poplatek, ve kterém je všechno. Žádné hvězdičky, žádná překvapení.\n1,09 % p. a.\nDĚTSKÝ ÚČET\n0,24 % p. a.\nÚČET NA DŮCHOD (DIP)\n0,3 % p. a.\n0,61 % p. a.\nPoplatky jsou zaokrouhlené, přesnou sazbu najdete v ceníku. Pokud vás zajímá detailnější dopad poplatků na zhodnocení, můžete se podívat sem.\n0,9 % p. a.\nPokud investujete alespoň 10 000 Kč/měsíc nebo máte v portfoliu od 1 milionu Kč.\n0,7 % p. a.\nPokud investujete alespoň 30 000 Kč/měsíc nebo máte v portfoliu od 3 milionů Kč.\nNěkteré investiční služby si účtují poplatky za věci, které považujeme za samozřejmost. \nŽádný vstupní poplatek\nŽádný výstupní poplatek\nŽádný poplatek za založení účtu\nŽádný poplatek za neaktivitu\nŽádné skryté poplatky\nPoplatky jsou důležité, ale nejsou jediná věc, která ovlivňuje vaše investování. Podívejte se, v čem dalším se Direct Fondee liší od běžných bankovních fondů.\nDirect Fondee\nVstupní poplatek\nInvestování do ETF\nJsou v poplatku zahrnuté opravdu všechny běžné náklady?\nAno. V našem poplatku je zahrnuté vedení účtu, správa portfolia, pravidelné vyvažování (rebalancing) i nákupy a prodeje ETF. Neplatíte zvlášť
… [1383 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.finax.eu/cs/poplatky');
```
### Page
- Page URL: https://www.finax.eu/cs/poplatky
- Page Title: 404 | Finax.eu
- HTTP status: 404
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-16-00-623Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-15-58-707Z.log#L1-L2
```
</details>

<details><summary>result</summary>

```
### Result
"https://www.finax.eu/cs/poplatky\n404 | Finax.eu\nPokud není uvedeno jinak, všechna čísla vážící se k výnosům jsou počítána na základě zpětných modelů a nebyla dosažena našimi klienty. Hodnota portfolia může klesat a stoupat. Výsledkem vaší investice může být i ztráta. Výnos v domácí měně je ovlivněn také kolísáním směnného kurzu EUR/CZK. Obchodování je rizikové."
### Ran Playwright code
```js
await page.evaluate('() => location.href+\'\\n\'+document.title+\'\\n\'+[...new Set(document.body.innerText.split(\'\\n\').filter(l=>/poplat|%|Kč|minim|ETF|ČNB|NBS|regul|klient|€/i.test(l)))].slice(0,40).join(\'\\n\')');
```
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"CS https://www.finax.eu/cs/poplatky#\nInvestovat https://www.finax.eu/cs/poplatky#\nInvestování podle cíle\n                    \n                        \n                                                        \n\n\n\n\n    \n        Pro začátečníky\n    \n                                                    \n                    \n                \n                \n                    \n                        arrow_forward\n                    \n                \n            \n            Nemusíte se trápit výběrem produktu a složením portfolia. Řěkněte nám svůj cíl a o zbytek se postaráme.\n            \n                \n                                        \n\n\n\n\n    \n        Pro začátečníky https://www.finax.eu/cs/poplatky\nInvestiční produkty\n                    \n                        \n                                                        \n\n\n\n\n    \n        Pro zkušenější\n    \n                                                    \n                    \n                \n                \n                    \n                        arrow_forward\n                    \n                \n            \n            Pokud přesně víte, co chcete, a nepotřebujete od nás poradit.\n            \n                \n                                        \n\n\n\n\n    \n        Pro zkušenější https://www.finax.eu/cs/poplatky\nOstatní služby Finaxu\n                    \n                        \n
… [1700 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.finax.eu/cs/poplatky-a-cenik');
```
### Page
- Page URL: https://www.finax.eu/cs/poplatky-a-cenik
- Page Title: Poplatky a ceník | Finax.eu
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-16-07-838Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-16-05-304Z.log#L1-L3
```
</details>

<details><summary>result</summary>

```
### Result
"https://www.finax.eu/cs/poplatky-a-cenik\nPoplatky a ceník | Finax.eu\nJen jeden férový poplatek\nŽádné skryté poplatky ani poplatky za vklad či výběr vašich peněz.\n0 Kč za nákup a prodej ETF\n0 Kč za zhodnocení\n0 Kč za ukončení\nJen jediný poplatek – maximálně 1 % + SK DPH ze spravovaného majetku\nDo 100 000 €\tNad 100 000 €\tNad 500 000 €\n1 % + SK DPH\n0,85 % + SK DPH\n0,65 % + SK DPH\n0,5 % včetně SK DPH\n0,9% (0,6 % Finax, 0,14 % SK DPH a 0,16–0,22 % TER ETF)\nHodnoty poplatků jsou uvedené na roční bázi.\nPokud je investování podezřele levné, vždy je v tom háček. Firmy, které jej nabízejí, buď dlouho nevydrží, nebo na vás budou chtít vydělat jiným způsobem. My vám za jeden férový poplatek nabízíme bezpečnost a...\nMinimalizace dopadu emocí\nKoupit si indexový ETF fond není žádná věda. U nás však máte rozložené riziko ve světových fondech s více než 13 tisíci tituly.\nMožnost kdykoliv si bez poplatků vybrat své finanční prostředky by měla být samozřejmostí. U nás vás za dřívější výběr žádnými poplatky trestat nebudeme.\nMůže být poplatek ještě nižší?\nNízké poplatky\nNaši klienti v minulém roce ve skutečnosti zaplatili na poplatcích v průměru jen 0,8 %.\nOd vzniku Finaxu poplatky neustále snižujeme a plánujeme to dělat i nadále. Když se daří nám, daří se i našim klientům.\nPravidelně nabízíme slevy a akce , díky kterým si můžete snížit poplatek až na nulu.\nPřeneste své investice k nám a jako odměnu vám budeme 2 roky zdarma spravovat 50 % přenesené částky. P
… [1983 more characters]
```
</details>

→ `WebSearch` Anycoin akcie ETF nabídka 2026

→ `WebSearch` XTB poplatek za neaktivitu 10 EUR 12 měsíců organizační složka KNF ČNB

→ `WebSearch` XTB pokuta ČNB 2026

<details><summary>result</summary>

```
Web search results for query: "Anycoin akcie ETF nabídka 2026"

Links: [{"title":"Analysts Predict Significant Growth for Cryptocurrency ETFs by 2026","url":"https://www.radom.com/insights/analysts-predict-significant-growth-for-cryptocurrency-etfs-by-2026"},{"title":"crypto etfs explode higher 2026","url":"https://regional-front.cointelegraph.com/news/crypto-etfs-explode-higher-2026"},{"title":"crypto etfs explode higher 2026","url":"https://cointelegraph.com/news/crypto-etfs-explode-higher-2026?rand=26097"},{"title":"crypto etfs explode higher 2026","url":"https://cointelegraph.com/news/crypto-etfs-explode-higher-2026"},{"title":"2026 U.S. Crypto Investment Landscape: ETFs, Treasury Firms, and Market Trends","url":"https://www.kucoin.com/news/flash/2026-u-s-crypto-investment-landscape-etfs-treasury-firms-and-market-trends"},{"title":"bitwise zverejnuje 10 predpovedi byci zvitezi na bitcoin altcoiny krypto etf","url":"https://news.bitcoin.com/cs/bitwise-zverejnuje-10-predpovedi-byci-zvitezi-na-bitcoin-altcoiny-krypto-etf/"},{"title":"Crypto ETFs in 2026: What to Expect for Bitcoin, Ethereum, XRP, and Solana","url":"https://finance.yahoo.com/news/crypto-etfs-2026-expect-bitcoin-150626003.html"},{"title":"www.mexc.com","url":"https://www.mexc.com/news/364689"},{"title":"www.mexc.com","url":"https://www.mexc.com/news/352917"}]

The search found nothing specific to Anycoin akcie (Anycoin shares) or an Anycoin ETF offering in 2026. The results cover the broader crypto ETF market
… [979 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "XTB pokuta ČNB 2026"

Links: [{"title":"xtb achieves best quarter yet preliminary net profit and client base hit all time highs","url":"https://www.khaleejtimes.com/business/xtb-achieves-best-quarter-yet-preliminary-net-profit-and-client-base-hit-all-time-highs?amp=1"},{"title":"váš průvodce finančním světem","url":"https://www.mesec.cz/n/investice/?pi=3"},{"title":"XTB preliminary H1 2026 results: all-time high consolidated net profit and record client base growth","url":"https://ir.xtb.com/en/xtb-preliminary-h1-2026-results-all-time-high-consolidated-net-profit-and-record-client-base-growth/"},{"title":"XTB preliminary H1 2026 results: all-time high consolidated net profit and record client base growth","url":"https://ir.xtb.com/?p=5841"},{"title":"16:14 · 26. marca 2025","url":"https://www.xtb.com/sk/trhove-analyzy/spravy-z-trhov/komentar-xtb-nazivo-cnb-rozhoduje-o-sadzbach"},{"title":"recenze xtb","url":"https://www.arecenze.cz/clanky/recenze-xtb/"},{"title":"XTB achieves best quarter yet: preliminary net profit and client base hit all-time highs","url":"https://ir.xtb.com/?p=5583"},{"title":"Investors Wave Off Record KNF Fine, Push XTB to New All-Time High","url":"https://www.financemagnates.com/forex/brokers/investors-wave-off-record-knf-fine-push-xtb-to-new-all-time-high/"},{"title":"XTB (XTB) Q1 2026 TU earnings summary","url":"https://quartr.com/events/xtb-sa-xtb-q1-2026-tu_FPmo3DWg"}]

I found no reports of a Czech National Bank (ČNB)
… [1129 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "XTB poplatek za neaktivitu 10 EUR 12 měsíců organizační složka KNF ČNB"

Links: [{"title":"Poplatky za investice: Srovnání brokerů a investičních platforem","url":"https://www.e15.cz/investicni-platformy-poplatky-srovnani-xtb-portu-fio-broker-degiro-etoro-trading212-fondee"},{"title":"invezz.com","url":"https://invezz.com/cz/reviews/xtb/"},{"title":"Poplatky za investice: Srovnání brokerů a investičních platforem","url":"https://www.e15.cz/finexpert/investujeme/poplatky-za-investicni-platformy-prehledne-srovnani-1399874"},{"title":"77 % retailových CFD účtů přichází o peníze","url":"https://brokerchooser.com/cs/invest-long-term/costs/inactivity-fee-xtb"},{"title":"77 % retailových CFD účtů přichází o peníze","url":"https://brokerchooser.com/cs/broker-reviews/xtb-review/xtb-custody-fee"},{"title":"77 % der Privatanleger verlieren Geld beim CFD-Handel","url":"https://brokerchooser.com/de/invest-long-term/costs/inactivity-fee-xtb"},{"title":"Fees and commissions at XTB","url":"https://www.xtb.com/cy/help-center/fees-and-payments/fees-and-commissions-at-xtb"},{"title":"Inactivity fees","url":"https://xtb.com/cy/help-center/fees-and-payments/inactivity-fees"},{"title":"Inactivity fees","url":"https://xtb.com/int/help-center/fees-and-payments/inactivity-fees"}]

Search results confirm the basic fee terms, but none tie the fee specifically to XTB's Czech branch or to the KNF/ČNB supervisory split you asked about.

- **Fee amount and trigger:** Several
… [1380 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Error
Error: browserBackend.callTool: net::ERR_CERT_COMMON_NAME_INVALID at https://www.xtb.cz/tvorba-akcioveho-portfolia
Call log:
[2m  - navigating to "https://www.xtb.cz/tvorba-akcioveho-portfolia", waiting until "domcontentloaded"[22m
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"chrome-error://chromewebdata/\nPrivacy error\nFORMS:\n\nLABELS:\nHelp make the internet safer by allowing Chrome to send Google URLs and content from some visited pages, as well as limited [truncated]\nTo make Chrome as secure as possible, enable \"Enhanced protection\".\nTEXT:\nYour connection is not private\n\nAttackers may be trying to steal your information from www.xtb.cz, including passwords, messages and credit-card details. Learn more about this warning…\n\nNET::ERR_CERT_COMMON_NAME_INVALID\nTo make Chrome as secure as possible, enable \"Enhanced protection\".\nBack to safety\nAdvanced settings"
### Ran Playwright code
```js
await page.evaluate('() => { const f=[...document.querySelectorAll(\'form\')].map(f=>[...f.querySelectorAll(\'input,select,textarea,button\')].filter(e=>e.type!==\'hidden\').map(e=>(e.tagName+\':\'+(e.type||\'\')+\':\'+(e.name||\'\')+\':\'+(e.placeholder||e.textContent||\'\').trim().slice(0,60))).join(\' | \')); const labels=[...document.querySelectorAll(\'label\')].map(l=>l.textContent.trim().slice(0,150)); return location.href+\'\\n\'+document.title+\'\\nFORMS:\\n\'+f.join(\'\\n\')+\'\\nLABELS:\\n\'+labels.join(\'\\n\')+\'\\nTEXT:\\n\'+document.body.innerText.slice(0,2500); }');
```
### Page
- Page URL: chrome-error://chromewebdata/
- Page Title: Privacy error
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://cz.xtb.com/tvorba-akcioveho-portfolia');
```
### Page
- Page URL: https://vzdelavani.xtb.com/tvorba-akcioveho-portfolia
- Page Title: Jak si vytvořit první portfolio | XTB Online Trading
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-16-29-283Z.yml)
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"https://vzdelavani.xtb.com/tvorba-akcioveho-portfolia\nJak si vytvořit první portfolio | XTB Online Trading\nFORMS:\nINPUT:text:firstname: | INPUT:text:lastname: | INPUT:email:email: | INPUT:tel:phone: | INPUT:checkbox:form_consents__c: | INPUT:checkbox:form_consents__c: | INPUT:button::\nINPUT:text:firstname: | INPUT:text:lastname: | INPUT:email:email: | INPUT:tel:phone: | INPUT:checkbox:form_consents__c: | INPUT:checkbox:form_consents__c: | INPUT:button::\nLABELS:\nJméno*\nPříjmení*\nE-mail*\nTelefonní číslo*\n*\nSeznámil/a jsem se s podmínkami ochrany osobních údajů\nSouhlasím se zasíláním obchodních sdělení a dalších nabídek\nAdobe UID\nBranch\nCountry\nLanguage\nLast Marketing Conversion Content\nLast Marketing Conversion Source\nLast Marketing Conversion Entry URL\nLast Marketing Conversion Medium\nLast Marketing Conversion Campaign\nFirst Visit Campaign\nFirst Visit Content\nLast Marketing Conversion Term\nLast Marketing Conversion Channel\nLast Marketing Conversion Channel Drill\nFirst Visit Channel\nFirst Visit Channel Drill-down\nFirst Visit Entry URL\nFirst Visit Medium\nFirst Visit Source\nFirst Visit Term\nMarketing CXD Client Id\nMarketing CXD Create Date\nMarketing CXD Token\nPSO Partner Campaign\nPSO Partner Create Date\nPSO Partner Id\nJméno*\nPříjmení*\nE-mail*\nTelefonní číslo*\n*\nSeznámil/a jsem se s podmínkami ochrany osobních údajů\nSouhlasím se zasíláním obchodních sdělení a dalších nabídek\nAdobe UID\nBranch\nCountry\nLanguage\nLast Market
… [3784 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.investicniweb.cz/');
```
### Page
- Page URL: https://www.investicniweb.cz/
- Page Title: Investiční web - Aktuality o trzích, akciích a kryptoměnách
- Console: 1 errors, 1 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-16-33-930Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-16-32-927Z.log#L1-L3
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"https://www.investicniweb.cz/\nInvestiční web - Aktuality o trzích, akciích a kryptoměnách\nLINKS:\nFacebook -> https://www.facebook.com/investicniweb.cz/\nFORMS:\ntext:q:Článek, téma, podcast...\ntext:q:Co hledáte?\nemail:SubscribeEmail:Váš e-mail | submit::Odeslat\nemail:SubscribeEmail:Váš e-mail | submit::Odeslat\nemail:SubscribeEmail:Váš e-mail | submit::Odeslat"
### Ran Playwright code
```js
await page.evaluate('() => { const a=[...document.querySelectorAll(\'a\')].filter(a=>/e-?book|zdarma|kurz|newsletter|průvodce|ke stažení/i.test(a.textContent)).map(a=>a.textContent.trim().replace(/\\s+/g,\' \').slice(0,80)+\' -> \'+a.href); const f=[...document.querySelectorAll(\'form\')].map(f=>[...f.querySelectorAll(\'input,select,button\')].filter(e=>e.type!==\'hidden\').map(e=>e.type+\':\'+(e.name||\'\')+\':\'+(e.placeholder||e.value||e.textContent||\'\').trim().slice(0,40)).join(\' | \')); return location.href+\'\\n\'+document.title+\'\\nLINKS:\\n\'+[...new Set(a)].slice(0,25).join(\'\\n\')+\'\\nFORMS:\\n\'+f.join(\'\\n\'); }');
```
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"Video\nAkcie a trhy\nEkonomika a byznys\nKryptoměny\nVývoj trhů\nPodcasty\nEventy\nVíce\nŽeny a moc peněz\nByt, či nebyt"
### Ran Playwright code
```js
await page.evaluate('() => { const e=document.querySelector(\'input[name=SubscribeEmail]\'); let n=e; for(let i=0;i<6;i++) n=n.parentElement; return n.innerText.slice(0,800); }');
```
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"Video Akcie a trhy Ekonomika a byznys Kryptoměny Vývoj trhů Podcasty Eventy Více\n---\nTOP témata: S&P 500 Donald Trump Tesla NVIDIA Bitcoin Fed Pražská burza Zlato V PONDĚLÍ V 10 HODIN ŽIVĚ: Expertní tržní výhled (Petr Lajsek, Purple Trading) 10. 10.-Michaela Nováková Pondělní dopoledne patří na Investičním webu expertním tržním výhledům. Tentokrát bude naším hostem Petr Lajsek z Purple Trading. Expertní tržní výhledy Kdo v Evropě vede v \"zeleném\" závodě a proč bez bateriových úlož\n---\nSledujte nás Facebook X X Live Instagram Linked IN YouTube O nás Náš tým Pravidla a obchodní podmínky RSS Odebírejte náš newsletter Každý den ráno shrnutí toho nejdůležitějšího ze světa investic. Odeslat Odesláním souhlasíte se zásadami o ochraně osobních údajů. Copyright ©2025 Investičníweb.cz - Všechna práva vyhrazena. Web je součástí vydavatelství NextPage Media, s.r.o. | Cookie"
### Ran Playwright code
```js
await page.evaluate('() => [...document.querySelectorAll(\'input[name=SubscribeEmail]\')].map(e=>{ let n=e.closest(\'form\'); let p=n; for(let i=0;i<3;i++) p=p.parentElement; return p.innerText.replace(/\\s+/g,\' \').slice(0,400);}).join(\'\\n---\\n\')');
```
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://finex.cz/');
```
### Page
- Page URL: https://finex.cz/
- Page Title: Finex.cz » Pomáháme dělat chytrá finanční rozhodnutí
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-16-43-892Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-16-42-846Z.log#L1-L2
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"Finex.cz » Pomáháme dělat chytrá finanční rozhodnutí\nFORMS:\nsearch:s:Napište jméno společnosti/kryptoměny/pro | submit::  CONTEXT: CZK Můj účet Získejte Finex Premium\nLINKS:\nKurzy kryptoměn -> https://finex.cz/seznam-kryptomen/\nSrovnání brokerů -> https://finex.cz/rubrika/brokeri/\nSrovnání bank -> https://finex.cz/rubrika/banky/\nSrovnání bankovních účtů -> https://finex.cz/rubrika/banky/bankovni-ucty/\nVšechny kurzy -> https://finex.cz/akademie/\nSeznam a kurzy kryptoměn -> https://finex.cz/seznam-kryptomen/"
### Ran Playwright code
```js
await page.evaluate('() => { const f=[...document.querySelectorAll(\'form\')].map(f=>{let p=f; for(let i=0;i<2;i++) p=p.parentElement||p; return [...f.querySelectorAll(\'input,select,button\')].filter(e=>e.type!==\'hidden\').map(e=>e.type+\':\'+(e.name||\'\')+\':\'+(e.placeholder||e.value||e.textContent||\'\').trim().slice(0,40)).join(\' | \')+\'  CONTEXT: \'+p.innerText.replace(/\\s+/g,\' \').slice(0,300)}); const a=[...document.querySelectorAll(\'a\')].filter(a=>/e-?book|zdarma|kurz|newsletter|průvodce|kalkul|srovnání/i.test(a.textContent)).map(a=>a.textContent.trim().replace(/\\s+/g,\' \').slice(0,80)+\' -> \'+a.href); return document.title+\'\\nFORMS:\\n\'+f.join(\'\\n\')+\'\\nLINKS:\\n\'+[...new Set(a)].slice(0,20).join(\'\\n\'); }');
```
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://finex.cz/akademie/');
```
### Page
- Page URL: https://finex.cz/akademie/
- Page Title: Akademie » Finex.cz
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-16-48-558Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-16-47-496Z.log#L1-L2
```
</details>

<details><summary>result</summary>

```
### Result
"Akademie » Finex.cz\nSouhlas s použitím cookies\nAbychom Vám mohli poskytnout co nejlepší služby, používáme různé technologie, mezi které patří i soubory cookies.\nVáš souhlas s použitím těchto technologií nám umožní zpracovávat údaje, jako je Vaše chování při používání našeho webu. Díky tomu můžeme náš web dále zlepšovat. Nesouhlas nebo odvolání souhlasu může nepříznivě ovlivnit určité vlastnosti a funkce těchto webových stránek.\nSouhlasím\nPřijmout nutné cookies\nZobrazit předvolby\nO NÁS\nINZERCE\nKARIÉRA\nKONTAKTUJTE NÁS\nCZK\nMůj účet\n Získejte Finex Premium\nNovinky\nTrhy\nPříležitosti\nNástroje\nRecenze\nOsobní finance\nJAK INVESTOVAT\nAKADEMIE\nAkademie\nDíky naší Akademii ovládnete svět investic od základů až po pokročilé strategie.\nInvestiční vzdělání, které má smysl\n300+ vzdělávacích lekcí\nOvěřeno dlouholetými investory a tradery\nDostupné kurzy 17\nJednoduše, srozumitelně a vše pohodlně na jednom místě. Pečlivě vytvořená vzdělávací Akademie, která stojí na letech investičních zkušeností, vám pomůže ušetřit čas i peníze.\nVšechny kurzy\nAkcie\nKomodity\nKryptoměny\nFundamentální analýza\nBudoucnost investování je v datech. Naučte se je číst a správně interpretovat.\nDélka\n10 hodin\nPočet lekcí\n13\nOtevřít kurz\nJaroslav Jarolím, Patrik Kudláček\nAutoři kurzu\nTechnická analýza\nTechnická analýza od A do Z: jak číst grafy, identifikovat trend a rozpoznat příležitosti.\nDélka\n17 hodin\nPočet lekcí\n36\nOtevřít kurz\nMartin Klass, Vladimír Růžička\
… [1274 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.portu.cz/');
```
### Page
- Page URL: https://www.portu.cz/
- Page Title: Portu - Investuj. Nestresuj. | Portu - Investuj. Nestresuj.
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-16-51-989Z.yml)
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"Portu - Investuj. Nestresuj. | Portu - Investuj. Nestresuj.\nH1: Investuj.\nNestresuj. || Zjistěte, kolik vám investování\ns Portu může vydělat || Nechte své peníze chytře růst\nbez zbytečných starostí || Portfolio od Portu || Výhodné investování díky jednomu nízkému poplatku || Podívejte se, jak Portu hodnotí lidé, kteří s námi dlouhodobě investují\nCTA:\nZačít investovat -> https://www.portu.cz/registrace"
### Ran Playwright code
```js
await page.evaluate('() => { const a=[...document.querySelectorAll(\'a,button\')].filter(a=>/kalkul|zdarma|e-?book|průvodce|newsletter|začít|investovat|registr|založ/i.test(a.textContent)).map(a=>a.textContent.trim().replace(/\\s+/g,\' \').slice(0,60)+\' -> \'+(a.href||\'\')); return document.title+\'\\nH1: \'+[...document.querySelectorAll(\'h1,h2\')].slice(0,6).map(h=>h.innerText.trim()).join(\' || \')+\'\\nCTA:\\n\'+[...new Set(a)].slice(0,20).join(\'\\n\'); }');
```
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"Zjistěte, kolik vám investování\ns Portu může vydělat\n\nČím déle investujete, tím větší výnosy můžete získat.\n\nZadejte, kolik a na jak dlouho chcete investovat\nJednorázově pošlu\n\n30 000 Kč\n\nMěsíčně budu posílat\n\n3 000 Kč\n\nChci investovat na\n\n20 let\n\nPortfolio\nKonzervativní\nVyvážené\nRůstové\n\n1 615 845 Kč\n\nTolik můžete s Portu mít za 20 let\n\n1,6 mil.\n1,3 mil.\n969,5 tis.\n646,3 tis.\n323,2 tis.\n0\n2027\n2031\n2035\n2039\n2043\n2047\n\n865 845 Kč\n\nOdhadovaný výnos\n\n750 000 Kč\n\nVaše vklady\n\n3 017 076 Kč\n\nOptimistický\n\n1 615 845 Kč\n\nOčekávaný\n\n886 526 Kč\n\nPesimistický\n\n750 000 Kč\n\nVaše vklady\n\nNávratnost\nScénáře\nInvestuji na důchod (DIP)\nZačít investovat\n\nMinulé výnosy nejsou zárukou budoucích. Investice na kapitálových trzích nejsou bez rizika.\n\nNechte své peníze chytře růst\nbez zbytečných starostí\nPrvní volba klientů\nPortfolio od Portu\n\nNastavíme vám portfolio na míru vašim cílům a potřebám. Vy nemusíte dělat nic.\n\nZačít investovat\nVíc o portfoliu\n10,24 %\n\nPrůměrný roční výnos\nza posledních 10 let včetně poplatků\n\nPortfolio nastavíme za vás\na budeme ho hlídat\nIdeální pro pravidelné investování,\nstačí nastavit trvalý příkaz\nJeden nízký poplatek\npodle objemu a délky\nDalší investiční možnosti\nSestavt"
### Ran Playwright code
```js
await page.evaluate('() => { const t=document.body.innerText; const i=t.indexOf(\'Zjistěte, kolik vám\'); return t.slice(i, i+1200); }');
```
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://vzdelavani.investovaniproholky.cz/');
```
### Page
- Page URL: https://vzdelavani.investovaniproholky.cz/pages/zth-akademie
- Page Title: ZTH akademie: Tvá cesta k finanční nezávislosti!
- Console: 6 errors, 8 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-17-01-594Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-16-58-694Z.log#L1-L17
```
</details>

<details><summary>result</summary>

```
### Result
"https://vzdelavani.investovaniproholky.cz/pages/zth-akademie\nZTH akademie: Tvá cesta k finanční nezávislosti!\nFORMS:\n\nTEXT:\nZáleží nám na vašem soukromí\nPomocí cookies vylepšujeme příjemnost prohlížení, nabízíme na míru přizpůsobené reklamy či obsah a analyzujeme návštěvnost stránky. Kliknutím na „Přijmout vše“ vyjadřujete souhlas s tím, jak cookies používáme.\nPřizpůsobit\nOdmítnout\nPřijmout vše\nPřeskočit na hlavní obsah\nZTH akademie\nPŘIHLÁSIT SE\nZasloužíš si mít dostatek peněz a žít svobodnější život!\nZero to Hero akademie je online členství a komunita, která ti pomůže vzít své finance do vlastních rukou. Abys měla vždycky dost peněz, nebyla závislá na partnerovi a mohla žít život, jaký si představuješ!\nCHCI VÍCE SVOBODY!\nZačni konečně investovat!\nI ty můžeš dosáhnout větší nezávislosti a svobody\nSpousta žen žije ve strachu o svou finanční budoucnost. Rády by měly více peněz a žily svobodnější život, ale netuší, jak toho dosáhnout. Každá z vás je schopná postarat o své osobní finance, když dostane tu správnou podporu! Proto jsme vytvořili Zero to Hero akademii, kde ti ukážeme, jak dosáhnout větší nezávislosti (nejen) díky investování.\nVidíš se v tom?\nVíš, že bys měla něco dělat s penězi, které si vyděláš, ale nevíš, kde začít..\nNechceš žít od výplaty k výplatě, počítat každou korunu a bát se, že nevyjdeš...\nNetoužíš po tom trávit čas od 8 do 5 v práci, která tě nebaví až do 70 let...\nNechceš být závislá na partnerovi, státu ani nikom jiném (
… [960 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.fondee.cz/');
```
### Page
- Page URL: https://www.fondee.cz/
- Page Title: Investování, kterému rozumíte | Direct Fondee
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-17-05-572Z.yml)
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"Investování, kterému rozumíte | Direct Fondee\nH: Investování,Investování,kterému rozumítekterému rozumíte || S lidmi, kterým\nmůžete věřit || Investování,\nInvestování,\nkterému rozumíte\nkterému rozumíte || S lidmi, kterým\nmůžete věřit || Finanční svět je\nFinanční svět je\nnepřehledný\nnepřehledný || Investování má být\nInvestování má být\nsrozumitelné\nsrozumitelné\nFORMS: \nBTN: O investování / Naše účty / O Fondee / Podpora / Přihlásit se / Začít / CZ / Začít investovat / Investiční kalkulačka / Začít registraci / Jdu do toho / Jak na to / Chci pro děti víc / Začít řešit důchod / Celá recenze / Musím rozumět investování? / blogu / Kolik peněz potřebuji na investování? / Co když budu peníze potřebovat? / Jsou moje peníze v bezpečí? / Jaké jsou poplatky? / Vyplnit dotazník / Jak funguje investování / Zajistit děti / Připravit se na důchod / Poplatky / Blog / Dokumenty / Psali o nás / [redacted: email address]\nTOP: O investování\nNaše účty\nO Fondee\nPodpora\nPřihlásit se\nZačít\nCZ\nInvestování,\nInvestování,\nkterému rozumíte\nkterému rozumíte\nČNB\ndohled\n27 000+\nklientů\naž 11,7 %\nprůměrný roční výnos za 10 let\nPomůžeme vám investovat jednoduše, srozumitelně a z pohodlí gauče. Začít můžete už od 500 Kč.\nZačít investovat\nInvestiční kalkulačka\nS lidmi, kterým\nmůžete věřit\nFinanční svět je\nFinanční svět je\nnepřehledný\nnepřehledný\nInvestování má být\nInvestování má být\nsrozumitelné\nsrozumitelné\nTřetina Čechů neví, jak s investováním začít.\nPřitom stačí,
… [1328 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.penize.cz/kalkulacky/investicni-kalkulacka');
```
### Page
- Page URL: https://www.penize.cz/kalkulacky/investicni-kalkulacka
- Page Title: Peníze.cz - Stránka nenalezena
- HTTP status: 404
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-17-12-947Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-17-12-545Z.log#L1-L2
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"https://www.penize.cz/kalkulacky/investicni-kalkulacka\nPeníze.cz - Stránka nenalezena\nFORMS:\ntext:q:Co hledáte? | submit::\ntext:newsletter:@ | submit::Odebírat\nemail:SubscribeEmail:@ | submit::Odebírat\nTOP: SPOŘENÍ\nINVESTICE\nBYDLENÍ\nDANĚ\nDŮCHODY A DÁVKY\nSPECIÁLY\nKALKULAČKY\nREJSTŘÍK\nÚČTY A KARTY\nPŮJČKY\nSPOTŘEBITEL\nZAMĚSTNÁNÍ\nPOJIŠTĚNÍ\nEKONOMIKA\n›\nPŘIHLÁŠENÍ\nChyba 404\nTato stránka už není v oběhu\nJe možné, že byla přesunuta, přejmenována, nebo odstraněna. Investujte svůj čas do jiného článku.\nVYBERTE SI Z NAŠÍ HOMEPAGE\nKalkulačky\nVýpočet čisté mzdy\nDůchodová kalkulačka\nPřevod měn\nValorizace důchodů\nKalkulačka DPČ a DPP\nPříspěvek na bydlení\nNemocenská\nVýpočet podpory\nMzdová kalkulačka\nCestovní náhrady\nVýpočet procent\nDaňová kalkulačka\nDaňová kalkulačka OSVČ\nSuperdávka\nŽivotní minimum\nRodičovský příspěvek\nVýpočet důchodu\nInflace\nOšetřovné\nVýpočet dovolené\nMohlo by se hodit\nJarní prázdniny 2027\nRecenze: Nedůvěryhodné e-shopy\nInvalidní důchod - podmínky\nMateřská 2026\nDaňové přiznání\nVýpověď a odstupné\nVýpočet alimentů\nCo je DIP – dlouhodobý investiční produkt\nPodpora v nezaměstnanosti 2026\nNemáte v peněžence poklad?\nVýchovné k důchodu – změny\nOtevírací doba o svátcích\nVyplatí se znát\nRegistr dotací\nBanky, kódy bank\nDluhy\nDaň z nemovitosti\nZákony\nObchodní rejstřík\nKdo vlastní banky v Česku\nBitcoin\nNejlépe placené práce v ČR\nRejstřík sociálních služeb\nKdo vlastní obchodní řetězce\nNejlepší spo"
### Ran
… [490 more characters]
```
</details>

→ `WebSearch` Unbounce Conversion Benchmark Report finance insurance median conversion rate landing page

→ `WebSearch` WordStream Google Ads benchmarks 2025 finance insurance conversion rate cost per lead

→ `WebSearch` multi-step form conversion rate increase study Venture Harbour HubSpot form fields number conversion

<details><summary>result</summary>

```
Web search results for query: "Unbounce Conversion Benchmark Report finance insurance median conversion rate landing page"

Links: [{"title":"unbounce unbounce","url":"https://unbounce.com/?p=135737"},{"title":"Mobile and social are your cash cows","url":"https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate"},{"title":"unbounce unbounce","url":"https://unbounce.com/?p=94305"},{"title":"unbounce unbounce","url":"https://unbounce.com/?p=94289"},{"title":"unbounce unbounce","url":"https://unbounce.com/industry/finance/"},{"title":"unbounce unbounce","url":"https://unbounce.com/conversion-benchmark-report-2020/"},{"title":"unbounce unbounce","url":"https://unbounce.com/?p=94295"},{"title":"unbounce unbounce","url":"https://unbounce.com/industry/finance-and-insurance/"},{"title":"What Is a Good Conversion Rate for Landing Pages?","url":"https://www.webtonic.io/blog/landing-page-statistics"}]

The results show a few different figures, and they come from different report editions, so check the year before using any of them.

**Most recent Unbounce figures (2024 edition, per the subcategory page):** The financial services median is 8.3%. Insurance is the strongest subcategory at 18.2%, and investing is the weakest at 3.9%. Credit and lending sit at 8.8%. By traffic channel, paid search has a median of 10.1%, paid social 9.3%, and email 7.9%, against an all-industries channel benchmark of 6.7%.

**Older edition:** An earlier Unbounce finance and insurance
… [640 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "WordStream Google Ads benchmarks 2025 finance insurance conversion rate cost per lead"

Links: [{"title":"Where to Spend, What to Skip: Marketing Moves That Generate Higher ROI","url":"https://www.searchenginejournal.com/rundowns/where-to-spend-what-to-skip-marketing-moves-that-generate-higher-roi"},{"title":"Back to top","url":"https://searchengineland.com/google-ads-costs-keep-rising-but-conversion-rates-improved-in-2025-477927"},{"title":"conversion rate benchmarks","url":"https://www.wordstream.com/blog/conversion-rate-benchmarks"},{"title":"google ads cpcs rose to 5 42 in 2025 with 87 of industries seeing increases but conversion rates climbed to 8 18 as automation improves","url":"https://www.shopifreaks.com/google-ads-cpcs-rose-to-5-42-in-2025-with-87-of-industries-seeing-increases-but-conversion-rates-climbed-to-8-18-as-automation-improves/"},{"title":"google ads average cost per conversion","url":"https://focus-digital.co/google-ads-average-cost-per-conversion/"},{"title":"focus digital","url":"https://focus-digital.co/?p=6016"},{"title":"www.searchenginejournal.com","url":"https://www.searchenginejournal.com/what-are-good-google-ads-benchmarks/546995/"},{"title":"www.searchenginejournal.com","url":"https://www.searchenginejournal.com/google-ads-ctr-cpc-cpa/439096/"},{"title":"www.searchenginejournal.com","url":"https://www.searchenginejournal.com/what-a-good-ctr-for-google-ads/492785/"},{"title":"google ads costs rise 12 88","url":"htt
… [1754 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "multi-step form conversion rate increase study Venture Harbour HubSpot form fields number conversion"

Links: [{"title":"inbound marketing convert forms","url":"https://whitehat-seo.co.uk/blog/inbound-marketing-convert-forms"},{"title":"Divide forms into steps and design them comprehensively","url":"https://blog.fuerstvonmartin.de/en/knowledge/divide-forms-into-steps-and-design-them-comprehensively"},{"title":"multi step form drop off rates how to reduce them","url":"https://www.reform.app/blog/multi-step-form-drop-off-rates-how-to-reduce-them"},{"title":"how to create a form in hubspot","url":"https://avidlyagency.com/blog/how-to-create-a-form-in-hubspot"},{"title":"- Knowledge Base","url":"https://knowledge.hubspot.com/forms/increase-form-conversion-rates"},{"title":"- Knowledge Base","url":"https://knowledge.hubspot.com/forms/increase-form-conversion-rates?so=1"},{"title":"- Knowledge Base","url":"https://knowledge.hubspot.com/forms/increase-form-conversion-rates?rd=1"},{"title":"- Knowledge Base","url":"https://knowledge.hubspot.com/forms/increase-form-conversion-rates?cId=cj"},{"title":"- Knowledge Base","url":"https://knowledge.hubspot.com/forms/increase-form-conversion-rates?data=data"},{"title":"single page vs multi step forms which converts better","url":"https://reform.app/blog/single-page-vs-multi-step-forms-which-converts-better"}]

The search turned up the Venture Harbour figures, but only through secondary blogs. I didn't find the
… [1818 more characters]
```
</details>

→ `WebFetch` https://unbounce.com/conversion-benchmark-report/finance-insurance-conversion-rate

→ `WebFetch` https://unbounce.com/conversion-benchmark-report/

<details><summary>result</summary>

```
**Edition year:** 2024. The report is the "2024 Conversion Benchmark Report."

**Overall median conversion rate:** "The median conversion rate across all industries is 6.6%."

**Mobile vs. desktop:**
- Mobile accounts for most traffic: "83% of landing page visits were on a mobile device, yet mobile converts 8% less than desktop."
- The page also says "The industry average shows that desktop converts 8% better than mobile." Both statements describe the same gap in different terms.

**Page length and reading level:**
- Word count has a -18.6% correlation with conversion rate, and reading time has -19.4%. Difficult words have the strongest negative correlation at -24.3%.
- Copy at a reading level of "5th to 7th grade" converts at 11.1%, which the page describes as 56% higher than 8th and 9th grade copy and more than 2x higher than professional-level writing (5.3%).
- The report does not identify an ideal page length.

**Dataset size:** "Conversion benchmarks backed by 57M+ conversions and 41K+ landing pages." The report also cites 464M+ unique visitors over the past year.
```
</details>

<details><summary>result</summary>

```
**Report:** Unbounce Conversion Benchmark Report, Financial Services page. The page doesn't state an edition year, but its image filenames are prefixed "CBR-2024," which suggests the 2024 edition.

**Finance & insurance overall:**
- Median conversion rate: 8.3% (the page labels this the "financial services median")
- Insurance: 18.2% median
- Credit and lending: 8.8% median, with top pages reaching 55.8%

**Investing subcategory:**
- Conversion rate: 3.9%
- Top performers: up to 20.6%

**Mobile vs. desktop:**
- Mobile: 11.5% average conversion rate (all-industries median: 11.2%)
- Desktop: 9% (all-industries median: 12.1%)
- Mobile vs. desktop gap: the page says mobile converts "27.8% better than desktop"
- Traffic share: not provided on the page

Note: the Overview section says desktop visitors convert "22% less than mobile." That matches the same 9% vs. 11.5% figures, just measured from the other direction.

**Traffic channel medians:**
- Paid search: 10.1% (compared with an industry benchmark of 6.7%)
- Paid social: 9.3% (compared with an all-industries median of 5.2%)
- Email: 7.9%

**Reading level (median conversion rate):**
- 5th–7th grade: 18.1%
- 8th–9th grade: 6.5%
- 10th–12th grade: 9.3%
- College: 7.1%
- Professional: 14.4%

**Word count and difficult words:**
- Best-converting word count: 195 to 715 words (median 8.3%)
- Suggested difficult-word range: 35 to 125 words with three or more syllables
```
</details>

→ `WebSearch` Facebook ads CPC Czech Republic 2025 average cost per click CPM benchmark

→ `WebSearch` Meta ads cost per lead finance industry benchmark 2025 WordStream LocaliQ Facebook lead ads finance insurance

→ `WebSearch` cena za lead Facebook reklama finance Česko kolik stojí lead investice CPL Kč

<details><summary>result</summary>

```
Web search results for query: "Facebook ads CPC Czech Republic 2025 average cost per click CPM benchmark"

Links: [{"title":"kolik stoji reklama na facebooku","url":"https://www.shopify.com/cz/blog/kolik-stoji-reklama-na-facebooku"},{"title":"Benchmarky Facebook reklam 2026: CTR, CPC, CPM, CPA a ROAS podle oboru","url":"https://influee.co/cz/blog/facebook-ads-benchmarks"},{"title":"Benchmarky Facebook reklám 2026: CTR, CPC, CPM, CPA a ROAS podľa odvetvia","url":"https://influee.co/sk/blog/facebook-ads-benchmarks"},{"title":"Jaké CPC je dobré u Facebook reklam? Benchmarky a data 2026","url":"https://influee.co/cz/blog/good-cpc-facebook-ads"},{"title":"Aká je dobrá CPC pre Facebook reklamy? Benchmarky a dáta 2026","url":"https://influee.co/sk/blog/good-cpc-facebook-ads"},{"title":"kalkulator kosztow reklam na facebooku","url":"https://miniwebtool.com/pl/kalkulator-kosztow-reklam-na-facebooku/"},{"title":"hvor meget koster facebook annoncer","url":"https://www.shopify.com/dk/blog/hvor-meget-koster-facebook-annoncer"},{"title":"Wat kost adverteren op Facebook en hoe kun je die kosten verlagen?","url":"https://www.shopify.com/nl/blog/wat-kost-adverteren-op-facebook"},{"title":"Facebook Ads Benchmarks 2025: Latest CPC, CPM & CTR Trends by Industry","url":"https://twominutereports.com/blog/facebook-ads-benchmarks"}]

I found no Czech-specific Facebook CPC or CPM benchmark for 2025. The results are global or multi-market figures, so treat them as rough reference points only.

- **Sho
… [1142 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Meta ads cost per lead finance industry benchmark 2025 WordStream LocaliQ Facebook lead ads finance insurance"

Links: [{"title":"Meta ad spend by industry 2025: the ultimate benchmark report","url":"https://www.trendtrack.io/fr/blog-post/meta-ad-spend-by-industry"},{"title":"Meta ad spend by industry 2025: the ultimate benchmark report","url":"https://www.trendtrack.io/blog-post/meta-ad-spend-by-industry"},{"title":"Meta ad spend by industry 2025: the ultimate benchmark report","url":"https://wf.trendtrack.io/blog-post/meta-ad-spend-by-industry"},{"title":"Grow Your Agency","url":"https://insights.vaizle.com/facebook-ad-benchmarks/"},{"title":"facebook ads benchmarks 2025","url":"https://www.wordstream.com/blog/facebook-ads-benchmarks-2025"},{"title":"average cost per lead on facebook july 2025 report","url":"https://focus-digital.co/average-cost-per-lead-on-facebook-july-2025-report/"},{"title":"Mortgage Facebook & Meta Ads Statistics: 60+ Performance Benchmarks (2026)","url":"https://www.webtonic.io/blog/mortgage-facebook-ads-statistics"},{"title":"focus digital","url":"https://focus-digital.co/?p=5439"},{"title":"how much do facebook ads cost","url":"https://adadvisor.ai/blog/how-much-do-facebook-ads-cost"},{"title":"Meta Ads CPM by Industry 2026 Facebook & Instagram Benchmarks","url":"https://sovran.ai/benchmarks/meta-ads-cpm-by-industry"}]

I ran one search. It didn't return WordStream's finance-specific cost-per-lead figure, so the financ
… [1423 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "cena za lead Facebook reklama finance Česko kolik stojí lead investice CPL Kč"

Links: [{"title":"kolik stoji reklama na facebooku","url":"https://www.shopify.com/cz/blog/kolik-stoji-reklama-na-facebooku"},{"title":"Jak snížit CPL u reklam na Facebooku po nových zásadách ochrany osobních údajů","url":"https://mundobytes.com/cs/Jak-sn%C3%AD%C5%BEit-CPL-v-reklam%C3%A1ch-na-Facebooku-po-zaveden%C3%AD-nov%C3%BDch-z%C3%A1sad-ochrany-osobn%C3%ADch-%C3%BAdaj%C5%AF/"},{"title":"Autor textu MediaGuru","url":"https://www.mediaguru.cz/15-tipu-pro-reklamu-na-facebooku"},{"title":"ile kosztuje reklama na facebooku","url":"https://www.shopify.com/pl/blog/ile-kosztuje-reklama-na-facebooku"},{"title":"Facebook Ads Insights Tool","url":"https://www.superads.ai/facebook-ads-costs/cost-per-lead/finance"},{"title":"CPL (Cost Per Lead)","url":"https://www.kontentino.com/sk/slovnik-slangu-socialnych-medii/cpl-cost-per-lead/"},{"title":"CPL (Cost Per Lead)","url":"https://www.kontentino.com/sk/social-media-urban-dictionary/cpl-cost-per-lead/"},{"title":"Hledání zákazníků na sociálních sítích","url":"https://www.businessinfo.cz/clanky/hledani-zakazniku-na-socialnich-sitich/"},{"title":"CPL (Cost Per Lead)","url":"https://www.kontentino.com/cs/social-media-urban-dictionary/cpl-cost-per-lead/"}]

Přímé číslo pro CPL ve finančním sektoru v Česku jsem nenašel. Nejbližší údaje jsou globální nebo obecné.

- **Finance, všechny země:** Superads uvádí průměrné CPL pro finance n
… [1163 more characters]
```
</details>

→ `WebFetch` https://www.wordstream.com/blog/facebook-ads-benchmarks-2025

<details><summary>result</summary>

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```
</details>

→ `WebFetch` https://www.shopify.com/cz/blog/kolik-stoji-reklama-na-facebooku

<details><summary>result</summary>

```
| Metric | Value (USD) | CZK on page | Period | Source | Scope |
|---|---|---|---|---|---|
| CPC (cost per click) | 0.768 | 16.17 Kč in one place, 14.73 Kč in another | July 2025 | app.bir.ch (CPC link) | Global |
| CPM (cost per 1,000 impressions) | 15.49 | 326.06 Kč | July 2025 | app.bir.ch (linked from the CPM section, but the URL points to the CPL page) | Global |
| CPL (cost per lead) | 44.55 | 937.78 Kč | July 2025 | app.bir.ch (cpl-cost-per-lead link) | Global |

- **Czech-specific data:** None. All figures are global USD averages. The Czech koruna amounts are conversions, and the page gives two different CZK values for CPC.
- **Source:** The page doesn't name the data provider in its text. The only attribution is the links to app.bir.ch, a third-party benchmark site.
- **Publication date:** 20 August 2025. The article says the figures reflect July 2025.
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.wordstream.com/blog/facebook-ads-benchmarks-2025');
```
### Page
- Page URL: https://www.wordstream.com/blog/facebook-ads-benchmarks-2025
- Page Title: Facebook Ads Benchmarks 2025: Data, Trends, & Insights for Your Industry | WordStream
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-18-00-111Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-17-58-116Z.log#L1-L2
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"Facebook Ads Benchmarks 2025: Data, Trends, & Insights for Your Industry | WordStream\n\nTABLES:\nBusiness Category | Average CTR\nFinance & Insurance | 0.98%\n---\nBusiness Category | Average CPC\nFinance & Insurance | $1.22\nSNIPS:\nmotive — For Sale 1.48% Automotive — Repair, Service & Parts 0.80% Beauty & Personal Care 1.81% Business Services 1.38% Education & Instruction 1.45% Finance & Insurance 0.98% Furniture 1.39% Health & Fitness 1.63% Home & Home Improvement 1.28% Industrial & Commercial 1.36% Personal Services 1.70% Physicians & Surgeons 0.83% Real Estate 1.68% Restaurants & Food 1.67% Shopping, Collectibles & Gifts\n...\nanwhile, the industries with the lowest click-through rates were Automotive—Repair, Services, and Parts (0.80%), Physicians and Surgeons (0.83%), and Finance and Insurance (0.98%). The industries with the highest CTRs, such as Shopping, Collectibles, and Gifts, or Sports and Recreation, are typically those that offer “anytime treats.” In other words, you don’t need to be in the market to respond \n...\nf ads as people can be tempted into shopping or recreation anytime. On the other hand, industries such as Automotive—Repair, Services, and Parts and Finance and Insurance, can’t always rely on compelling visuals to increase their Facebook ad CTRs. It’s harder to get clicks on ads for industries where only some of the audience is going to be in market. These business types need to focus on engagin\n...\nmotive — For Sale $0.79 Automotive
… [1428 more characters]
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"his year’s annual Facebook ads benchmarks report, analyzing data from over 1,000 campaigns to provide you with industry-specific KPIs including average cost per click (CPC), click-through rate (CTR), conversion rate (CVR), and cost per lead (CPL) for two core Facebook ads campaign objectives: traffic and leads. Contents Key Facebook ad trends: The big picture Facebook ads benchmarks: Traffic campaigns Average click-through rate Average cost per click Facebook ads benchmarks: Leads campaigns Ave\n...\npicture Facebook ads benchmarks: Traffic campaigns Average click-through rate Average cost per click Facebook ads benchmarks: Leads campaigns Average click-through rate Average cost per click Average conversion rate Average cost per lead How to improve your Facebook ad results Want the latest data delivere right to your inbox? Download our free 2026 Facebook ads benchmarks report here! Key trends: The big picture Facebook ads with a traffic objective saw strong improvement year over year, wi\n...\nook ads with a traffic objective saw strong improvement year over year, with both higher CTR and lower CPC compared to 2024. Facebook leads campaigns saw performance declines, with a 20% increase in CPL. However, CPC and CPL for this ad type are still significantly lower than comparable ads on Google. Despite rising advertising costs and economic challenges, Facebook Lead Ads maintain a cost advantage over Google Ads. This means that social ads are the perfect complement to
… [3920 more characters]
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"The average conversion rate in Facebook ads for leads campaigns across all industries is 7.72%—lower than last year’s overall average of 8.67%. Business Category Average CVR Arts & Entertainment 9.34% Attorneys & Legal Services 10.53% Beauty & Personal Care 5.29% Career & Employment 5.77% Dentists & Dental Services 6.38% Education & Instruction 10.08% Furniture 3.77% Health & Fitness 5.63% Home & Home Improvement 5.22% Industrial & Commercial 9.34% Personal Services 6.51% Physicians & Surgeons 4.51% Real Estate 9.53% Restaurants & Food 18.25% Sports & Recreation 5.48% The industries that convert at the highest rates for Facebook leads campaigns include Restaurants and Food with a CVR of 18\n....\nAverage cost per lead for leads campaigns Cost per lead is often referred to as the “money metric” in Facebook leads campaign strategies because it indicates how much each new potential customer costs your business. “The most important metric is the one that aligns the closest with your definition of success. For many businesses looking for leads, CPL is a key metric to watch,” Tyler said. The average cost per lead in Facebook ads for leads campaigns across all industries is $27.66. This is higher than last year’s overall average of $22.87. Business Category Average CPL Arts & Entertainment $18.17 Attorneys & Legal Services $18.17 Beauty & Personal Care $51.42 Career & Employment $17.64 Dentists & Dental Services $76.71 Education & Instruction $28.22 Furniture $40.04 Heal
… [456 more characters]
```
</details>

→ `WebSearch` Imagescape reduced form fields from 11 to 4 conversions increased 120% HubSpot

→ `WebSearch` Interact quiz lead generation average conversion rate 40% report quiz funnel benchmark

→ `WebSearch` Zuko form analytics benchmark abandonment rate phone number field financial services

<details><summary>result</summary>

```
Web search results for query: "Imagescape reduced form fields from 11 to 4 conversions increased 120% HubSpot"

Links: [{"title":"imagescape.com","url":"https://imagescape.com/filer/canonical/1455648270/152"},{"title":"How Many Form Fields Do You Have?","url":"https://saleslion.io/sales-statistics/imagescape-saw-a-160-increase-in-submissions-when-they-decreased-form-fields-from-11-to-a-mere-four"},{"title":"Optimizing Fields in Form: Boosting Conversions with Smart Design Strategies","url":"https://dr-xm.saas.infor.com/fields-in-form"},{"title":"Form Design Best Practices for 2024: 17 Tips to Maximize Conversions","url":"https://expertbeacon.com/form-design-best-practices-for-2024-17-tips-to-maximize-conversions/"},{"title":"Asset 20 8 2","url":"https://www.lilachbullock.com/resources/form-field-reduction-cheat-sheet/"},{"title":"10 min read","url":"https://wbcomdesigns.com/the-benefits-of-reducing-fields-in-your-contact-forms/"},{"title":"Why Having Less Form Fields Drives Conversions","url":"https://marketingtechblog.com/infographic-why-having-less-form-fields-drives-conversions"},{"title":"which types of form fields lower landing page conversions","url":"https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx"},{"title":"which landing page elements to test","url":"https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-landing-page-elements-to-test.aspx"},{"title":"Which Types of Form Fields Lower Landing Page Conver
… [1356 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Zuko form analytics benchmark abandonment rate phone number field financial services"

Links: [{"title":"63a5e39fefca11ea7ee766fb Zuko data to optimize form final","url":"https://uploads-ssl.webflow.com/5dc3cb16429c1a55a9f87dce/63a5e39fefca11ea7ee766fb_Zuko_data_to_optimize_form_final.pdf"},{"title":"62b44b2dbedf9abf64b31c98 Zuko The Big Guide To Form Optimization ebook Final 2nd Edition","url":"https://uploads-ssl.webflow.com/5dc3cb16429c1a55a9f87dce/62b44b2dbedf9abf64b31c98_Zuko_The_Big_Guide_To_Form_Optimization_ebook_Final_2nd_Edition.pdf"},{"title":"Optimizing Finance Forms with Zuko Analytics","url":"https://www.zuko.io/industries/financial-services"},{"title":"zuko.io","url":"https://zuko.io/product"},{"title":"how to reduce form abandonment insights from zuko analytics","url":"https://www.reform.app/blog/how-to-reduce-form-abandonment-insights-from-zuko-analytics"},{"title":"Optimizing Lead Generation Forms with Zuko Analytics","url":"https://www.zuko.io/industries/lead-generation"},{"title":"The most effective form analytics software in the market","url":"https://www.zuko.io/product-overview"},{"title":"Formisimo Launches Next-Generation Platform Zuko","url":"https://salestechstar.com/?p=58982"},{"title":"Formisimo Launches Next-Generation Platform Zuko","url":"https://salestechstar.com/data-visualization/formisimo-launches-next-generation-platform-zuko/"}]

I didn't find a benchmark for phone number abandonment specific to financial se
… [1381 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Interact quiz lead generation average conversion rate 40% report quiz funnel benchmark"

Links: [{"title":"Quiz Conversion Rate Report 2025","url":"https://www.tryinteract.com/blog/quiz-conversion-rate-report/"},{"title":"How Interactive Quizzes Solve the Form Fatigue Problem and Boost Lead Generation Conversions","url":"https://www.fyrebox.com/blog/quizzes-convert-better-than-forms"},{"title":"Got a Website? Here's How to Make Visitors Actually Raise Their Hand","url":"https://www.fyrebox.com/blog/how-interactive-quizzes-turn-website-visitors-into-leads"},{"title":"AI Agents >","url":"https://hellotars.com/ai-agents/quiz-ai-agent-for-lead-generation"},{"title":"What Marketers Should Budget for Interactive Marketing Statistics","url":"https://www.webtonic.io/blog/interactive-marketing-statistics"},{"title":"AI Agents >","url":"https://webflow.hellotars.com/ai-agents/quiz-ai-agent-for-lead-generation"},{"title":"How to Create a Quiz for Lead Generation (Step-by-Step)","url":"https://www.fyrebox.com/blog/how-to-create-lead-generation-quizzes"},{"title":"September 2026","url":"https://www.convertflow.com/benchmark-reports/lead-generation-quiz-funnel-benchmark-september-2026"},{"title":"15 Lead Magnet Examples That Convert in 2026","url":"https://prospeo.io/s/lead-magnet-examples"},{"title":"Lead Generation Offers in 2026: Examples, Benchmarks & Tips","url":"https://prospeo.io/s/lead-generation-offers"}]

The 40% figure comes from Interact's own dat
… [1793 more characters]
```
</details>

→ `WebFetch` https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx

→ `WebFetch` https://www.convertflow.com/benchmark-reports/lead-generation-quiz-funnel-benchmark-september-2026

<details><summary>result</summary>

```
**Key findings from the article**

- **Dataset:** The analysis covers over 40,000 landing pages from HubSpot customers.
- **Number of fields:** Conversion rates decrease slightly as the number of form fields increases, but less steeply than the author expected.
- **Single-line text fields:** Adding more of these caused very little decrease in conversion rate.
- **Multi-line textareas:** Multiple textareas had a strong negative effect on conversion rates.
- **Drop-down select boxes:** Multiple drop-downs on a page were associated with lower conversion rates.
- **Recommendation:** Use as few form fields as possible, and be especially cautious with textareas and select boxes.
- **Fields not covered:** The article does not mention age, phone number, or address fields, so it offers no findings on those.

**Author:** Dan Zarrella

**Publication date:** The page lists only an "Updated" date of 06/06/25 (June 6, 2025). The original publication date is not shown.
```
</details>

<details><summary>result</summary>

```
**Visitor-to-lead (lead capture) rates, all means, n=1,063 campaigns:**

| Format | Lead capture rate |
|---|---|
| Landing page | 11.28% |
| Embed | 10.45% |
| Embed (dark theme) | 7.06% |
| All landing page and embed formats (blended) | 7.85% |
| Popup | Not reported |

**Other requested breakdowns:**
- **Dataset size:** 1,063 campaigns.
- **Time window:** Not specified beyond "recent" campaigns. The page is dated September 2026.
- **Mobile vs. desktop:** Not reported.
- **Finance industry:** Not reported.

The page reports a separate "conversion rate" (engagement) that is not the same as lead capture. For example, the dark-theme landing page converts 15.14% of visitors, but no lead capture rate is given for that template.
```
</details>

→ `WebSearch` Google Ads financial services verification countries list Czech Republic

→ `WebSearch` Meta special ad category financial products and services 2025 expanded investment ads targeting restrictions Europe

→ `WebSearch` ČNB finfluenceři investiční doporučení upozornění 2025 investiční poradenství bez licence

<details><summary>result</summary>

```
Web search results for query: "Google Ads financial services verification countries list Czech Republic"

Links: [{"title":"google expands financial ad verification to 24 eu and eea countries","url":"https://ppc.land/google-expands-financial-ad-verification-to-24-eu-and-eea-countries/"},{"title":"Google financial ads: verification in 24 markets","url":"https://www.seo-day.de/news/article/google-expands-financial-services-ad-verification-across-24?lang=en"},{"title":"google expands financial services advertiser verification program to 24 countries","url":"https://www.dawan.africa/news/google-expands-financial-services-advertiser-verification-program-to-24-countries"},{"title":"google expands financial services advertiser verification programme to 24 countries","url":"https://www.dawan.africa/news/google-expands-financial-services-advertiser-verification-programme-to-24-countries"},{"title":"Google Ads","url":"https://blog.google/products/ads-commerce/eu-financial-advertiser-verification/"},{"title":"Google Ads: financial verification in 24 EEA markets","url":"https://www.seo-day.de/news/article/google-ads-expands-financial-advertiser-verification-across?lang=en"},{"title":"Expanding financial advertiser verification across Europe","url":"https://www.taxheal.com/expanding-financial-advertiser-verification-across-europe.html"},{"title":"Expanding our efforts to combat financial fraud in ads","url":"https://blog.google/technology/ads/expanding-our-efforts-to-combat-financial-frau
… [1586 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "ČNB finfluenceři investiční doporučení upozornění 2025 investiční poradenství bez licence"

Links: [{"title":"Hlavní obsah","url":"https://www.seznamzpravy.cz/clanek/ekonomika-finance-rikali-to-na-internetu-cnb-varuje-pred-financnimi-influencery-268783"},{"title":"Jan Procházka: Finanční influenceři pod dozorem ČNB? Evropští regulátoři zbystřili","url":"https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Financni-influenceri-pod-dozorem-CNB-Evropsti-regulatori-zbystrili-00001"},{"title":"Přeskočit na obsah","url":"https://arws.cz/novinky-v-arrows/cnb-a-finfluenceri-pozor-na-pokuty"},{"title":"Kam zajít, co ochutnat a co stojí za pozornost","url":"https://www.newstream.cz/money/cnb-uz-dosla-trpelivost-varuje-pred-finfluencery-a-jejich-radami"},{"title":"Finanční influenceři pod dozorem ČNB? Evropští regulátoři zbystřili, říká centrální bankéř Procházka","url":"https://www.e15.cz/rozhovory/financni-influenceri-pod-dozorem-cnb-evropsti-regulatori-zbystrili-rika-centralni-banker-prochazka-1419464"},{"title":"Jan Procházka: Chceme, aby finfluenceři neporušovali pravidla. Jejich přínos však může být i pozitivní","url":"https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Chceme-aby-finfluenceri-neporusovali-pravidla.-Jejich-prinos-vsak-muze-byt-i-pozitivni"},{"title":"Jan Procházka: Finfluencery sledujeme i s pomocí AI","url":"https://www.c
… [3540 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Meta special ad category financial products and services 2025 expanded investment ads targeting restrictions Europe"

Links: [{"title":"Digital Audiences","url":"https://www.data-axle.com/?p=686399"},{"title":"Digital Audiences","url":"https://www.data-axle.com/resources/blog/meta-special-ad-categories-rules/"},{"title":"Special Ad Categories","url":"https://developers.secure.facebook.com/docs/marketing-api/special-ad-category"},{"title":"Meta blocks political ads in EU as TTPA regulation takes effect","url":"https://ppc.land/meta-blocks-political-ads-in-eu-as-ttpa-regulation-takes-effect"},{"title":"special ad category","url":"https://developers.facebook.com/docs/marketing-api/audiences/special-ad-category"},{"title":"financial products and services","url":"https://www.jonloomer.com/qvt/financial-products-and-services/"},{"title":"Ads and Commerce","url":"https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category"},{"title":"2025 changes for meta ads","url":"https://www.zaginteractive.com/insights/january-2025/2025-changes-for-meta-ads"},{"title":"final expense meta ads special ad category targeting","url":"https://elevarus.com/final-expense-meta-ads-special-ad-category-targeting/"}]

The search turned up good coverage of the US rollout, but little that is specific to Europe.

- **The category:** Meta added "Financial products and services" in October 2024 to replace the older Credit category. The new
… [2624 more characters]
```
</details>

→ `WebFetch` https://blog.google/products/ads-commerce/eu-financial-advertiser-verification/

→ `WebFetch` https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Financni-influenceri-pod-dozorem-CNB-Evropsti-regulatori-zbystrili-00001

→ `WebFetch` https://www.zakonyprolidi.cz/cs/2004-480

<details><summary>result</summary>

```
**Publication date:** June 23, 2026 (Ads & Commerce Blog, by Keerat Sharma, VP & General Manager, Ads Privacy and Safety).

**Countries:** The program covers "every member state in the European Union and European Economic Area." The post says this adds 24 countries to a program already active in 18 countries worldwide, including six EU member states and the UK. It does not list the countries.

**Enforcement dates:** The post gives no specific dates. It says the requirements "will be introduced in phases," with businesses getting 30 days to complete verification. It does not mention Czechia or any country-level timeline.

**What's required:** Advertisers must prove they are authorized by their national regulators. Google checks credentials "directly against the relevant official registry across the EU and EEA." The post does not name specific regulators, so the FCA comparison doesn't come from this page.

**Categories in scope:** The post refers broadly to "financial services" and "financial ads." Its examples are "a new bank, a loan or insurance advice." It does not mention securities or investment advice, so whether those are covered is unclear from this page.

**Consequence for unverified advertisers:** If an advertiser isn't verified within 30 days, Google will "restrict their financial services ads until verification is complete."
```
</details>

<details><summary>result</summary>

```
The full text of § 7 exceeds the 125-character limit per quote, so I've quoted it in segments and paraphrased the rest.

**§ 7 – Sending commercial communications (Czech text, paraphrased in English)**

1. **General rule:** Commercial messages may be sent electronically only under the conditions this Act sets out. Quote: "Obchodní sdělení lze šířit elektronickými prostředky jen za podmínek stanovených tímto zákonem."

2. **Consent:** Electronic contact details may be used for commercial messages only for users who gave prior consent. Quote: "využít pouze ve vztahu k uživatelům, kteří k tomu dali předchozí souhlas."

3. **Existing-customer exception:** A business that obtained a customer's email address in connection with a sale may use it to market its own similar products or services. The customer must be given a clear, simple, free (or at the business's cost) way to refuse, both initially and in each individual message. Quote: "může tato fyzická či právnická osoba využít tyto podrobnosti elektronického kontaktu."

4. **Email prohibitions:** Sending marketing email is banned if:
   - it is not clearly and unambiguously labelled as a commercial message;
   - it hides or conceals the identity of the sender on whose behalf it is sent;
   - it has no valid address to which the recipient can directly and effectively send a request to stop receiving such messages.

   Quote for the last point: "je zaslána bez platné adresy, na kterou by mohl adresát přímo a účinně zaslat informaci
… [328 more characters]
```
</details>

<details><summary>result</summary>

```
**Datum:** 22. 10. 2024. Rozhovor s Janem Procházkou vyšel v e15 (autor Petr Lukáč).

**Kdy obsah připomíná investiční doporučení**
Procházka říká, že finfluenceři dávají investiční doporučení, která "většinou směřují na mladé a málo informované investory". Typickým příkladem je prohlášení typu "já jsem známý a kupuju tohle, protože je to dobrý". Podle něj to "nestačí". Za zmínku stojí i placené investorské skupiny, u nichž zaznívá, že jde "někdy hodně za hranou".

**Požadované upozornění (disclaimery)**
Podle článku mají finfluenceři "řadu povinností ohledně férovosti doporučení, jejichž nedodržování lze stíhat". Procházka konkrétně uvádí, že jejich sdělení "neobsahují všechna potřebná upozornění, všechny disclaimery, které jsou u takových informací potřebné". Článek ale nevyjmenovává, jaké disclaimery se vyžadují.

**Rizika pro publikující osoby s provizemi nebo affiliate odkazy**
Článek se přímo o provizích nebo affiliate odkazech nezmiňuje. Nejblíže k tomu je tato pasáž: pokud si influencera platí licencovaný subjekt, například obchodník s cennými papíry, pak "je odpovědností obchodníka, co influencer říká". Dále se zmiňuje, že i když tipaři prodej dluhopisů "nechají obchodníkovi nebo jeho vázanému zástupci", mohou tím porušovat zákon, pokud k tomu nemají oprávnění. Z toho lze odvodit, že odpovědnost za obsah může padat na licencovaného zprostředkovatele i na osobu, která bez licence doporučení šíří, ale to jsou závěry z textu, nikoli přímá tvrzení článku.

**Zmíněné před
… [773 more characters]
```
</details>

→ `WebSearch` ÚOOÚ cookies souhlas od 1. 1. 2022 zákon o elektronických komunikacích § 89 odst. 3 opt-in analytické cookies

→ `WebSearch` EDPB guidelines 05/2020 consent conditionality freely given article 7(4) access to content in exchange for newsletter consent

→ `WebSearch` Meta advertising standards financial and insurance products and services policy investment ads requirements

<details><summary>result</summary>

```
Web search results for query: "ÚOOÚ cookies souhlas od 1. 1. 2022 zákon o elektronických komunikacích § 89 odst. 3 opt-in analytické cookies"

Links: [{"title":"2024 06 12 p04 praxe uoou v oblasti cookies","url":"https://uoou.gov.cz/media/seminare-uoou/prezentace/2024-06-12-p04-praxe-uoou-v-oblasti-cookies.pdf"},{"title":"Informace pro účetní a podnikatele","url":"https://portal.pohoda.cz/?p=13343"},{"title":"Cookies nově jen se souhlasem. Poslanecká sněmovna přijala zpřísňující pravidla od roku 2022","url":"https://www.epravo.cz/clanky/cookies-nove-jen-se-souhlasem-poslanecka-snemovna-prijala-zprisnujici-pravidla-od-roku-2022-113207.html"},{"title":"Informace pro účetní a podnikatele","url":"https://portal.pohoda.cz/zakon-a-pravo/legislativa-pro-podnikatele/cookies-po-novele-zakona-o-elektronickych-komunika"},{"title":"Czech Republic now requires opt-in Consent for Cookies","url":"https://complianz.io/czech-republic-now-requires-opt-in-consent-for-cookies/"},{"title":"cookies nove jen se souhlasem poslanecka snemovna prijala zprisnujici pravidla od roku 2022 113207","url":"https://www.epravo.cz/top/clanky/cookies-nove-jen-se-souhlasem-poslanecka-snemovna-prijala-zprisnujici-pravidla-od-roku-2022-113207.html"},{"title":"Informace pro účetní a podnikatele","url":"https://portal.pohoda.cz/zakon-a-pravo/legislativa-pro-podnikatele/aktivni-souhlas-uzivatele-pro-prijeti-cookies-na-webu/"},{"title":"79 cj uoou 0074723 4 dokument c 79","url":"https://uoou.gov.cz/media/poskytnute-inf
… [1888 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Meta advertising standards financial and insurance products and services policy investment ads requirements"

Links: [{"title":"Financial and insurance products and services","url":"https://transparency.meta.com/en-gb/policies/ad-standards/restricted-goods-services/financial-services/"},{"title":"financial services","url":"https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services"},{"title":"meta ads finance insurance","url":"https://benly.ai/learn/meta-ads/meta-ads-finance-insurance"},{"title":"Facebook Ads for Fintech: Compliance, Creative, and Conversion","url":"https://www.stackmatix.com/blog/facebook-ads-for-fintech-startups"},{"title":"Meta bolsters transparency in financial advertising for Australian advertisers","url":"https://mediaweek.com.au/meta-rolls-out-verification-requirements-for-financial-ads"},{"title":"Meta's new rules to fight financial scams","url":"https://www.adnews.com.au/news/meta-s-new-rules-to-fight-financial-scams"},{"title":"Introduction to the Advertising Standards","url":"https://transparency.meta.com/en-gb/policies/ad-standards"},{"title":"final expense meta ads special ad category targeting","url":"https://elevarus.com/final-expense-meta-ads-special-ad-category-targeting/"},{"title":"Meta · Meta Special Ad Category Requirements · View original document ↗","url":"https://conductatlas.com/platform/meta/meta-special-ad-category-requirements/financial-products-and-services-speci
… [2607 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "EDPB guidelines 05/2020 consent conditionality freely given article 7(4) access to content in exchange for newsletter consent"

Links: [{"title":"edpb adopts updated consent guidance","url":"https://www.wsgrdataadvisor.com/2020/05/edpb-adopts-updated-consent-guidance/"},{"title":"www.wsgrdataadvisor.com","url":"https://www.wsgrdataadvisor.com/?p=2416"},{"title":"www.lexblog.com","url":"https://www.lexblog.com/?p=2238855"},{"title":"the european data protection board adopts new guidelines on consent","url":"https://www.mondaq.com/data-protection/992954/the-european-data-protection-board-adopts-new-guidelines-on-consent"},{"title":"the european data protection board adopts new guidelines on consent","url":"https://webiis08.mondaq.com/data-protection/992954/the-european-data-protection-board-adopts-new-guidelines-on-consent"},{"title":"EDPB issue updated guidelines on consent","url":"https://www.algoodbody.com/insights-publications/edpb-issue-updated-guidelines-on-consent"},{"title":"EDPB Updates Guidelines on Consent Under the GDPR","url":"https://www.manatt.com/insights/newsletters/advertising-law/edpb-updates-guidelines-on-consent-under-the-gdpr"},{"title":"European Data Protection Board adopts guidelines on consent under the GDPR","url":"https://ecovis.lt/?p=3263"},{"title":"European Data Protection Board adopts guidelines on consent under the GDPR","url":"https://ecovis.lt/?p=476"},{"title":"GDPR Article 7 — Consent Conditions: The Complete Sa
… [1957 more characters]
```
</details>

→ `WebFetch` https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services

<details><summary>result</summary>

```
The content you provided contains only a page title: "Financial and Insurance Products and Services | Transparency Center." It includes no policy text, so I can't quote or summarize any of the items you listed:

- Targeting 18+
- Requesting PII or financial information
- Licensing
- Special ad category self-identification (including regions such as Europe)
- Investment products and "complex speculative financial products"
- Any prohibition on promises of returns

No date appears in the provided content.

If you paste the full text of the page, I can pull the relevant passages, keeping each quote under 125 characters.
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://transparency.meta.com/en-gb/policies/ad-standards/restricted-goods-services/financial-services/');
```
### Open tabs
- 0: (current) [Financial and insurance products and services | Transparency Centre](https://transparency.meta.com/en-gb/policies/ad-standards/restricted-goods-services/financial-services/)
- 1: [](https://accounts.youtube.com/accounts/CheckConnection?pmpo=https%3A%2F%2Faccounts.google.com&v=897831460&timestamp=1791674300483)
- 2: [New tab](chrome://new-tab-page/)
### Page
- Page URL: https://transparency.meta.com/en-gb/policies/ad-standards/restricted-goods-services/financial-services/
- Page Title: Financial and insurance products and services | Transparency Centre
- Console: 1 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-19-28-591Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-19-26-905Z.log#L1-L8
```
</details>

<details><summary>result</summary>

```
### Result
"Policy details\nCHANGE LOG\nToday\n30 Apr 2026\n20 Mar 2026\n11 Mar 2026\n8 Dec 2025\n12 Nov 2025\n18 Jul 2024\n19 Oct 2022\nFinancial and insurance products and services\nAds promoting credit cards, loans or insurance services must be targeted to people aged 18 or older. We prohibit ads that directly request the input of any personally identifiable information or certain types of financial information under our Fraud, Scam and Deceptive Practices and/or Privacy Violations policies.\nAdvertisers promoting financial products and services may be required to verify their business and/or individual identity and demonstrate they are authorised by the relevant regulatory authorities where this is a requirement; and any such authorisation may be subject to review by Meta. Advertisers are also required to comply with disclosure requirements set by law.\nLearn more about the authorisation process in our Business Help Centre.\nOverview\nAdvertisers can run ads that promote credit cards, loans or insurance services as long as they only target people 18 years or older. Ads that directly request the input of any personally identifiable information or certain types of financial information are prohibited by our Fraud, Scam and Deceptive Practices and/or Privacy Violations policies.\nAdvertisers may be required to be licensed in the country that they are targeting if they wish to run ads for financial products or services. Meta may review any relevant licensing or otherwise conf
… [4526 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.facebook.com/business/help/298000447747885');
```
### Open tabs
- 0: (current) [How do I choose a special ad category? | Meta Business Help Center](https://www.facebook.com/business/help/298000447747885)
- 1: [](https://accounts.youtube.com/accounts/CheckConnection?pmpo=https%3A%2F%2Faccounts.google.com&v=897831460&timestamp=1791674300483)
- 2: [New tab](chrome://new-tab-page/)
### Page
- Page URL: https://www.facebook.com/business/help/298000447747885
- Page Title: How do I choose a special ad category? | Meta Business Help Center
- Console: 5 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-19-36-372Z.yml)
### Events
- New console entries: .playwright-mcp/console-2026-10-10T23-19-34-232Z.log#L1-L18
```
</details>

<details><summary>result</summary>

```
### Result
"How do I choose a special ad category? | Meta Business Help Center\n"
### Ran Playwright code
```js
await page.evaluate('() => { const t=document.body.innerText; const out=[]; const re=/(Financial products|financial products|Europe|European|United States|Canada|investment)/g; let m; while((m=re.exec(t)) && out.length<12){ out.push(t.slice(Math.max(0,m.index-250), m.index+350).replace(/\\s+/g,\' \')); re.lastIndex=m.index+350;} return document.title+\'\\n\'+out.join(\'\\n...\\n\'); }');
```
### Open tabs
- 0: (current) [How do I choose a special ad category? | Meta Business Help Center](https://www.facebook.com/business/help/298000447747885)
- 1: [](https://accounts.youtube.com/accounts/CheckConnection?pmpo=https%3A%2F%2Faccounts.google.com&v=897831460&timestamp=1791674300483)
- 2: [New tab](chrome://new-tab-page/)
- 3: [Authorize Vercel](https://github.com/login/oauth/authorize?client_id=Iv1.9d7d662ea00b8481&scope=read%3Auser%2Cuser%3Aemail&state=8a9a283fd848f8e5d990662fc71fdb22cec1851ae6e49ab25f8b9498126b5865053a3c7c9f3ff1d82439dec77efb118dd3fd0fef546088cd8f2e2f6288657b23f1b4ba68295dec02517bf048d5d5b2be6006058ef20c5c02a85a7be8d9ac6a92450e85cb3f4fb1e389f5095fdb5ef541d1decb1b8f6ee765545b1d8ef557109217d3023c968dd6dc250ecbc90cfe966b13b9ddadb28d80af579455186d1dc3a1ef633b97266bcb08377601416626ff3e17b54eda26b19d252d15692fc374dcad2858534aae1610ce5874991f8048ce244bcbc55042832562a70242812f838863b3d84dd8b83c9ac87406fc945d36287f0858be8a32e203668453edbc6d1
… [206 more characters]
```
</details>

→ `mcp__playwright__browser_wait_for`

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
Waited for 3 seconds
### Ran Playwright code
```js
await new Promise(f => setTimeout(f, 3 * 1000));
```
### Open tabs
- 0: (current) [How do I choose a special ad category? | Meta Business Help Center](https://www.facebook.com/business/help/298000447747885)
- 1: [](https://accounts.youtube.com/accounts/CheckConnection?pmpo=https%3A%2F%2Faccounts.google.com&v=897831460&timestamp=1791674300483)
- 2: [New tab](chrome://new-tab-page/)
### Page
- Page URL: https://www.facebook.com/business/help/298000447747885
- Page Title: How do I choose a special ad category? | Meta Business Help Center
- Console: 5 errors, 0 warnings
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-19-45-187Z.yml)
```
</details>

<details><summary>result</summary>

```
### Result
"7923\nGet started\nAdvertising\nLearn\nSupport\nGet started\nBusiness Help Center\nGet support\nHow do I choose a special ad category?\nWe continuously work to ensure fairness on our advertising platform. As part of this work, we introduced a new special ad category \"Financial products and services\" for advertisers promoting financial products and services. From 21 January 2025, this category is mandatory for campaigns promoting financial products and services run by advertisers in, or targeting audiences in, the US. Choosing the wrong category may result in ad rejection. Learn more about the changes.\n\nChoosing the correct campaign category is an important part of complying with Meta Advertising Standards. When creating a campaign, indicate whether your ads fall into a special ad category.\n\nSpecial ad categories apply to ads with specific requirements, for example:\n\nObtaining authorization to run ads about social issues, elections or politics and adding funding-source disclaimers labelled \"Paid for by\".\nRestrictions on advertising tools for employment, housing and financial products and services to protect platform users from unlawful discrimination.\n\nNote: a special category may limit audience selection in [truncated]
… [1544 more characters]
```
</details>

→ `Bash` — Fetch StatCounter CZ device and search engine share CSV
```sh
cd [tmp] && UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/130 Safari/537.36"; curl -s -m 30 -A "$UA" "https://gs.statcounter.com/chart.php?device_hidden=desktop%2Bmobile%2Btablet&statType_hidden=comparison&region_hidden=CZ&granularity=monthly&statType=Desktop%20vs%20Mobile%20vs%20Tablet&region=Czech%20Republic&fromInt=202509&toInt=202609&fromMonthYear=2025-09&toMonthYear=2026-09&csv=1" | head -20; echo; curl -s -m 30 -A "$UA" "https://gs.statcounter.com/chart.php?statType_hidden=search_engine&region_hidden=CZ&granularity=monthly&statType=Search%20Engine&region=Czech%20Republic&fromInt=202609&toInt=202609&fromMonthYear=2026-09&toMonthYear=2026-09&csv=1" | head -8
```

<details><summary>result</summary>

```
"Date","Desktop","Mobile","Tablet"
2025-09,47.19,51.11,1.7
2025-10,53.44,45.19,1.37
2025-11,53.47,45.21,1.32
2025-12,56.63,42.22,1.15
2026-01,56.28,42.34,1.38
2026-02,58.21,40.34,1.45
2026-03,57.95,40.67,1.38
2026-04,57.47,41.12,1.41
2026-05,55.52,43.02,1.45
2026-06,52.5,46.14,1.35
2026-07,50.41,48.12,1.46
2026-08,52.48,45.98,1.54
2026-09,49.18,49.22,1.6

"Search Engine","Market Share Perc. (Sept 2026)"
"Google",69.58
"Seznam",16.47
"bing",11.81
"DuckDuckGo",0.72
"Yahoo!",0.67
"YANDEX",0.59
"Ecosia",0.1
```
</details>

→ `WebSearch` AKAT průzkum Perfect Crowd 46 procent zkušenost s investicemi 2025 věk příjem ETF

→ `WebSearch` ČNB finanční aktiva domácností podílové fondy akcie 2025 objem miliard statistika

<details><summary>result</summary>

```
Web search results for query: "AKAT průzkum Perfect Crowd 46 procent zkušenost s investicemi 2025 věk příjem ETF"

Links: [{"title":"www.surveymonkey.com","url":"https://www.surveymonkey.com/r/95KY29G"},{"title":"Best Performing ETFS 2025 in a Turbulent Market","url":"https://m.fightcancer.org/category/etf-investing/"},{"title":"Best ETF for 2025 Expert Insights for Maximum Returns","url":"https://m.fightcancer.org/tag/financial-news/"},{"title":"trends in the european investment fund industry in q3 2017 data 1","url":"https://www.akatcr.cz/Documents/News/trends-in-the-european-investment-fund-industry-in-q3-2017-data-1"},{"title":"The Top 5 Best Performing ETFs of 2025 You Cant Afford to Miss! - Anadea","url":"https://itquestdwa.anadea.info/media/the-top-5-best-performing-etfs-of-2025-you-cant-afford-to-miss-7622927"},{"title":"www.akatcr.cz","url":"https://www.akatcr.cz/en-gb/Blog/category/aktuality"},{"title":"Top Performing Etfs 2025 - Monetize Software","url":"https://extads.monetize.software/news/top-performing-etfs-2025"},{"title":"Active ETF Content Hub Global ETF Survey: Investors Flock to Active ETFs By Nick Peters-GoldenMay 30, 2024","url":"https://www.etftrends.com/tag/global-etf-survey/"},{"title":"6+ Compelling ETFs to Watch for 2025","url":"https://vipsites.publisherdesk.com/tag/etfs"},{"title":"perfect corp rises 10 4","url":"https://www.tipranks.com/news/the-fly/perfect-corp-rises-10-4"}]

The search did not find the specific AKAT / Perfect Crowd survey you d
… [1103 more characters]
```
</details>

<details><summary>result</summary>

```
Web search results for query: "ČNB finanční aktiva domácností podílové fondy akcie 2025 objem miliard statistika"

Links: [{"title":"Růst nebankovních finančních institucí a investic domácností: trendy a rizika","url":"https://www.cnb.cz/cs/o_cnb/cnblog/Rust-nebankovnich-financnich-instituci-a-investic-domacnosti-trendy-a-rizika"},{"title":"2026 07 15 Strucne shrnuti Zprava o vyvoji financniho trhu v roce 2025","url":"https://mf.gov.cz/assets/attachments/2026-07-15_Strucne-shrnuti-Zprava-o-vyvoji-financniho-trhu-v-roce-2025.pdf"},{"title":"2025 06 18 Strucne shrnuti Zprava o vyvoji financniho trhu v roce 2024","url":"https://mfcr.cz/assets/attachments/2025-06-18_Strucne-shrnuti-Zprava-o-vyvoji-financniho-trhu-v-roce-2024.pdf"},{"title":"monetika vyrocni zprava 2025 final","url":"https://www.investika.cz/files/monetika-vyrocni-zprava-2025-final.pdf"},{"title":"2026 07 15 Zprava o vyvoji financniho trhu v roce 2025","url":"https://mf.gov.cz/assets/attachments/2026-07-15_Zprava-o-vyvoji-financniho-trhu-v-roce-2025.pdf"},{"title":"cnb.cz (ČNB)","url":"https://zpravy.kurzy.cz/851752-nejvetsi-polozku-aktiv-tvori-poskytnute-pujcky-v-celkove-hodnote-436-7-mld-kc-z-toho-bylo-429/"},{"title":"2026 04 30 D Zprava o stavu a vyvoji statnich financnich aktiv a statnich zaruk","url":"https://mf.gov.cz/assets/attachments/2026-04-30_D-Zprava-o-stavu-a-vyvoji-statnich-financnich-aktiv-a-statnich-zaruk.pdf"},{"title":"867454 objem prostredku umistenych na financnim trhu se zvysil o 10 4  na 12
… [1793 more characters]
```
</details>

→ `Bash` — Download MF financial market report summary and grep household figures
```sh
cd [tmp] && curl -sL -m 30 -A "Mozilla/5.0" -o mf.pdf "https://mf.gov.cz/assets/attachments/2026-07-15_Strucne-shrnuti-Zprava-o-vyvoji-financniho-trhu-v-roce-2025.pdf" && pdftotext -layout mf.pdf mf.txt && grep -n -i -E "domácnost|investičních fond|kotované akcie|7,6|22,2" mf.txt | head -20
```

<details><summary>result</summary>

```
26:Struktura úspor               Objem úspor domácností umístěných na finančním trhu vzrostl o 9,1 % na
27:domácností                    7,6 bil. Kč. Nejvyšší absolutní nárůst zaznamenaly, stejně jako v letech 2023 a 2024,
28:                              prostředky umístěné v investičních fondech, a to o 278,2 mld. Kč na téměř
33:                              domácností klesl během posledních 5 let na 57,3 %, a to zejména ve prospěch úspor
34:                              umístěných v investičních fondech, jejichž podíl naopak vzrostl na 22,2 %.
36:Zadlužení                     Zadlužení domácností vzrostlo o 8,5 % na 2,7 bil. Kč. Tempo růstu objemu úvěrů na
37:domácností                    bydlení (nárůst nesplacené jistiny) se zvýšilo o 2,9 p. b. na 8,2 %. Podíl těchto úvěrů
38:                              na celkovém zadlužení domácností se však meziročně prakticky nezměnil (74,6 %).
68:                              a úvěrů domácnostem na spotřebu. Naopak úročení úvěrů domácnostem na bydlení
73:                              domácností vykázal vyšší tempo růstu (8,4 %) než nefinanční podniky (5,1 %). Podíl
```
</details>

→ `WebFetch` https://ir.xtb.com/en/xtb-preliminary-h1-2026-results-all-time-high-consolidated-net-profit-and-record-client-base-growth/

→ `WebSearch` Trading 212 Česko čeština zákaznická podpora CZK účet Trading 212 Markets Ltd CySEC čeští klienti

<details><summary>result</summary>

```
- **Total clients:** over 2.9 million, as of July 28, 2026.
- **Active clients:** nearly 1.5 million, an all-time high and a 74.5% increase year-on-year.
- **New clients in H1 2026:** over 703 thousand, up 94.5% year-on-year.
- **Release date:** The page doesn't state an explicit publication date. It references data as of July 28, 2026 and H1 2026 results.
- **Czech Republic / CEE split:** The Czech Republic appears only as one of the markets where options trading was rolled out in H1 2026, alongside Germany, Spain, France, Slovakia, and Portugal. The page gives no CEE regional client split.
- **New clients and investment products:** The page says "83% of new users now prioritize stocks, ETFs, or personal Investment Plans." It doesn't give a separate ETF-only figure.
- **Mobile app share:** Not mentioned.
```
</details>

<details><summary>result</summary>

```
Web search results for query: "Trading 212 Česko čeština zákaznická podpora CZK účet Trading 212 Markets Ltd CySEC čeští klienti"

Links: [{"title":"How to open a UK bank account online in 2025","url":"https://wise.com/gb/blog/trading-212-multicurrency-account"},{"title":"trading 212 to open branch in czech republic hiring local compliance team","url":"https://www.tradeinformer.com/broker-news/trading-212-to-open-branch-in-czech-republic-hiring-local-compliance-team"},{"title":"moneytothemasses.com","url":"https://moneytothemasses.com/?p=41943"},{"title":"commodity.com","url":"https://commodity.com/?p=18295"},{"title":"trading 212 review","url":"https://brokerchooser.com/zh/broker-reviews/trading-212-review"},{"title":"Trading 212 Review 2025","url":"https://www.daytrading.com/trading212-vs-ic-markets"},{"title":"Trading 212 – jak na založení účtu krok za krokem","url":"https://www.finhacker.cz/trading-212/trading-212-jak-na-zalozeni-uctu-krok-za-krokem/"},{"title":"Best Brokers for Beginners in the Czech Republic in 2026","url":"https://brokerchooser.com/czech-republic/best-brokers-for-beginners"},{"title":"Neděle 02. srpna 2026 17:35","url":"https://www.fxstreet.cz/trading-212.html"}]

Search results confirm a CZK account option but don't verify Czech-language support or the exact CySEC entity name.

- **CZK accounts:** The Invest account supports 12 currencies, including the Czech koruna, for deposits and withdrawals. These are: British pound, US dollar, Euro, Swiss franc,
… [1870 more characters]
```
</details>

→ `WebSearch` Interactive Brokers EU retail clients US ETF KID PRIIPs restriction knowledge base "KID"

<details><summary>result</summary>

```
Web search results for query: "Interactive Brokers EU retail clients US ETF KID PRIIPs restriction knowledge base "KID""

Links: [{"title":"Trading Overseas with IBKR","url":"https://www.interactivebrokers.com/campus/trading-lessons/trading-overseas-with-ibkr/"},{"title":"FAQ: PRIIPs overview","url":"https://www.ibkrguides.com/kb/article-3324.htm"},{"title":"FAQ: PRIIPs regulation","url":"https://ibkrguides.com/kb/article-2993.htm"},{"title":"Products, Exchanges and Contracts Search","url":"https://www.interactivebrokers.com/en/trading/products-exchanges.php"},{"title":"US Taxes for US Non-Residents","url":"https://www.interactivebrokers.com/campus/trading-lessons/us-taxes-for-us-non-residents-3/"},{"title":"PRIIPS KID - Documentation","url":"https://www.ibkrguides.com/clientportal/support_prips_kid.htm"},{"title":"Adding Trading Permissions & Subscribing to Market Data and Research Subscriptions","url":"https://www.interactivebrokers.com/campus/trading-lessons/trade-permissions-mkt/"},{"title":"omnibus and carrying brokers agreement regarding ...","url":"https://ndcdyn.interactivebrokers.com/Universal/servlet/Registration_v2.formSampleView?formdb=4627&lang=en"},{"title":"INTERACTIVE BROKERS (U.K.) LIMITED PROFESSIONAL CLIENT NOTIFICATION","url":"https://www.interactivebrokers.com/download/IBKR-UK-ProServNotification-Per-se.pdf"},{"title":"FAQ: Interactive Brokers (U.K.) limited - MiFID categorisation","url":"https://www.interactivebrokers.com/lib/cstools/faq/content/11123731
… [1768 more characters]
```
</details>

→ `WebSearch` ČNB informace pro finfluencery dokument pravidla investiční doporučení MAR zveřejnění střet zájmů cnb.cz

<details><summary>result</summary>

```
Web search results for query: "ČNB informace pro finfluencery dokument pravidla investiční doporučení MAR zveřejnění střet zájmů cnb.cz"

Links: [{"title":"Upozornění České národní banky pro investory sledující tzv. finfluencery - Česká národní banka","url":"https://www.cnb.cz/cs/dohled-financni-trh/ochrana-spotrebitele/upozorneni/Upozorneni-Ceske-narodni-banky-pro-investory-sledujici-tzv.-finfluencery/"},{"title":"Upozornění České národní banky pro poskytovatele investičních služeb spolupracující s finfluencery - Česká národní banka","url":"https://www.cnb.cz/cs/dohled-financni-trh/ochrana-spotrebitele/upozorneni/Upozorneni-Ceske-narodni-banky-pro-poskytovatele-investicnich-sluzeb-spolupracujici-s-finfluencery/"},{"title":"Upozornění České národní banky pro influencery v oblasti financí - Česká národní banka","url":"https://www.cnb.cz/cs/dohled-financni-trh/ochrana-spotrebitele/upozorneni/Upozorneni-Ceske-narodni-banky-pro-influencery-v-oblasti-financi/"},{"title":"Jan Procházka: Finfluencery sledujeme i s pomocí AI - Česká národní banka","url":"https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Finfluencery-sledujeme-ispomociAI/"},{"title":"Jan Procházka: Chceme upozornit na povinnosti finfluencerů - Česká národní banka","url":"https://www.cnb.cz/cs/verejnost/servis-pro-media/autorske-clanky-rozhovory-s-predstaviteli-cnb/Jan-Prochazka-Chceme-upozornit-na-povinnosti-finfluenceru/"},{"title":"Desatero pro investory - Č
… [3789 more characters]
```
</details>

→ `WebFetch` https://www.cnb.cz/cs/dohled-financni-trh/ochrana-spotrebitele/upozorneni/Upozorneni-Ceske-narodni-banky-pro-influencery-v-oblasti-financi/

<details><summary>result</summary>

```
**Publication date:** 23 January 2025 (23. 1. 2025). The page is titled "Upozornění České národní banky pro influencery v oblasti financí."

**Definition of investment recommendation (MAR):** Any public communication, including on social media, that gives advice, opinions, or ideas about buying or selling investment instruments (shares, bonds, fund units, derivatives) or about how to build a portfolio of them. MAR separates:
- **Direct recommendations**, which explicitly urge buying, selling, or holding an instrument.
- **Indirect recommendations**, which do not, such as saying a security looks "overvalued" without advising a trade.

**Required elements for anyone giving a direct recommendation:**
- **Author identity:** name and job position, plus the employer if the author works for a legal entity.
- **Date and time** the recommendation was made.
- **Objective presentation:** facts must be separated from interpretations, estimates, and personal opinions.
- **Sources:** reliable information sources, with material sources disclosed.
- **Conflicts of interest:** information about them must be included.

For audio or audiovisual content, these details may be omitted from the recommendation itself if the format makes that impractical, but the recommendation must say where they are easily and freely available.

**Extra duties for professionals and experts:**
- A summary of the valuation basis or methodology and key assumptions.
- The recommended investment horizon and a suitable r
… [1944 more characters]
```
</details>

→ `WebFetch` https://www.cnb.cz/cs/dohled-financni-trh/ochrana-spotrebitele/upozorneni/Upozorneni-Ceske-narodni-banky-pro-poskytovatele-investicnich-sluzeb-spolupracujici-s-finfluencery/

<details><summary>result</summary>

```
**Publication date:** 23 January 2025 (23. 1. 2025)

**1. Who may represent a broker when dealing with clients**
Only the broker's own employee, an investment intermediary, or a tied agent may represent it in dealings with (potential) clients. The notice says the representative must be "pouze svým pracovníkem, investičním zprostředkovatelem nebo svým vázaným zástupcem." Cooperation with a finfluencer will generally be limited to promotion, not representation, unless the finfluencer is also a tied agent.

**2. Incentives for promotion**
A broker may not accept, offer, or provide a fee, commission, or non-monetary benefit that could breach its duty to act honestly, fairly, professionally, and in the client's best interest. This applies to payments to a finfluencer for promoting the broker's services. The notice points to the CNB's position on permissible incentives in capital markets.

**3. Affiliate and paid promotion**
The broker remains responsible for promotion carried out on its behalf by another person, such as a finfluencer: "odpovědnost i za propagaci, kterou pro něj vykonává jiná osoba, např. finfluencer." The notice does not specifically address affiliate links or revenue-share arrangements.

**4. Product governance and target market**
The broker must distribute its investment instruments primarily to a target market it defines in advance, using a suitable distribution strategy. Marketing communication is part of that strategy, so the broker should assess whether invo
… [879 more characters]
```
</details>

→ `mcp__playwright__browser_navigate`

<details><summary>result</summary>

```
### Ran Playwright code
```js
await page.goto('https://www.xtb.com/cz');
```
### Open tabs
- 0: (current) [XTB – Investice, úspory, trading | XTB](https://www.xtb.com/cz)
- 1: [](https://accounts.youtube.com/accounts/CheckConnection?pmpo=https%3A%2F%2Faccounts.google.com&v=897831460&timestamp=1791674300483)
- 2: [New tab](chrome://new-tab-page/)
### Page
- Page URL: https://www.xtb.com/cz
- Page Title: XTB – Investice, úspory, trading | XTB
### Snapshot
- [Snapshot](.playwright-mcp/page-2026-10-10T23-21-23-651Z.yml)
```
</details>

→ `mcp__playwright__browser_evaluate`

<details><summary>result</summary>

```
### Result
"Rozdílové smlouvy jsou komplexní nástroje a v důsledku použití finanční páky jsou spojeny s vysokým rizikem rychlého vzniku finanční ztráty. U 77 % účtů retailových investorů došlo při obchodování s rozdílovými smlouvami u tohoto poskytovatele ke vzniku ztráty. Měli byste zvážit, zda rozumíte tomu, jak rozdílové smlouvy fungují, a zda si můžete dovolit vysoké riziko ztráty svých finančních prostředků. Investování je rizikové. Investujte zodpovědně.\nCFD kontrakty\nVíce než 2700 pákových nástrojů CFD\nVíce než 40 CFD BTC, ETH a další\nCFD\nU 77 % účtů retailových investorů došlo při obchodování s rozdílovými smlouvami u tohoto poskytovatele ke vzniku ztráty.\nXTB S.A., organizační složka se sídlem Praha 8-Libeň, Boudníkova 2506/3, PSČ 180 00, IČO: 27867102, DIČ: CZ27867102, zapsána v obchodním rejstříku vedeném Městským soudem v Praze, oddíl A, vložka č. 56720."
### Ran Playwright code
```js
await page.evaluate('() => [...new Set(document.body.innerText.split(\'\\n\').map(s=>s.trim()).filter(l=>/organizační|KNF|ČNB|Komise|dohled|CZK|korun|neaktiv|úschov|minimální vklad|76 %|77 %|CFD/i.test(l)))].slice(0,20).join(\'\\n\')');
```
```
</details>

→ `mcp__playwright__browser_close`

<details><summary>result</summary>

```
### Result
No open tabs. Navigate to a URL to create one.
### Ran Playwright code
```js
await page.close()
```
```
</details>

→ `Bash` — Locate Playwright snapshot output folder
```sh
for d in [redacted: private assistant config] [redacted: local path] [redacted: local path] do ls -d "$d/.playwright-mcp" 2>/dev/null && ls "$d/.playwright-mcp" | wc -l && ls -la "$d/.playwright-mcp" | head -5; done
```

<details><summary>result</summary>

```
Exit code 1
[redacted: local path]
    1356
total 67464
drwxr-xr-x  1358 [user]  staff   43456 11 Oct  01:21 .
drwxr-x---+   59 [user]  staff    1888 11 Oct  01:21 ..
-rw-r--r--     1 [user]  staff     294 24 Sep 13:02 console-2026-09-24T11-02-18-098Z.log
-rw-r--r--     1 [user]  staff     136 24 Sep 13:02 console-2026-09-24T11-02-52-010Z.log
```
</details>

→ `WebFetch` https://www.tryinteract.com/blog/quiz-conversion-rate-report/

→ `WebFetch` https://imagescape.com/filer/canonical/1455648270/152

<details><summary>result</summary>

```
- **Start-to-lead rate:** 40.1% across the Interact portfolio of lead-generation quizzes.
- **Percentage finishing the quiz:** 65% start-to-finish, meaning the share of starters who answer all questions. The page doesn't give a separate finish rate for the portfolio average.
- **Sample size:** Not stated. The page says Interact quizzes have generated more than 100 million leads over the platform's lifetime, but it doesn't give the number of quiz starts or quizzes behind the benchmarks.
- **Period:** The benchmark was measured from 2014 onward and recalculated over many time periods. The page was updated September 8, 2026.
- **Finance industry figure:** None. The category benchmarks cover coaching and courses (44.9% start-to-lead, 59.1% start-to-finish), ecommerce (37.6%, 55.5%), and service providers (42.2%, 47.3%).
- **Lead rate definition (denominator):** Quiz starts. A lead is a starter who submits contact information through the quiz, and both the lead and finish rates use starts as the denominator.
```
</details>

<details><summary>result</summary>

```
I can't find that information in the content you provided. It's a raw PDF file with compressed streams and an embedded image, not readable text, and the content is also cut off. I can't tell from it what test was run, how many fields it compared, what the change in submissions was, or the year.

If you paste the article's text directly, or share a readable version of the document, I can answer the question.

[Binary content (application/pdf, 432.4KB) also saved to [redacted: private assistant config]]
```
</details>

→ `Bash` — Extract Imagescape case study text
```sh
pdftotext -layout [redacted: private assistant config] - | grep -i -E "field|160|increase|200[0-9]" | head -15
```

<details><summary>result</summary>

```
                        Fewer fields in a contact form sharply increases
                        In the fall of 2007 and again in the spring of 2008, Imaginary Landscape performed a
                        The test compared an 11-field Contact Us form with a 4-field Contact Us form. The
                        more abbreviated form resulted in a 160% increase in submitted forms.
                        was in place on the Web site throughout 2007. The “after” form is the 4-question
                        general contact form that replaced the “before” form in April 2008. The test
Released:                               © 2008 Imaginary Landscape, LLC All right reserved                           Page
June 2008                                                (773) 275-9144                                           1 of 4
in place during 2007 and
November 2007.
Released:                               © 2008 Imaginary Landscape, LLC All right reserved                           Page
June 2008                                                (773) 275-9144                                           2 of 4
2008.
                                               Date Range                     2007               2008
                                   Thank You Page Views                          10                 26    160.0%
```
</details>

→ `WebFetch` https://www.e15.cz/zdaneni-investic-akcie-kryptomeny

<details><summary>result</summary>

```
**Source:** e15.cz, "Zdanění investic 2026: Kdy nemusíte danit akcie, ETF a krypto za rok 2025" by Matty Marečků, published 28 April 2026, 10:00.

**Rules for stock and ETF gains (2025 tax year), per the article:**

- **Three-year time test:** If you hold shares or ETFs for more than three years, the gain from selling them is fully exempt from tax. The article says these sales don't need to be reported in the return. It states: "Pokud akcie nebo ETF držíte déle než tři roky, je zisk z jejich prodeje od daně zcela osvobozen."
- **100,000 CZK annual limit:** If you sell before the three-year mark, the gain is still exempt when your total annual sales proceeds stay at or below 100,000 CZK. The test uses gross proceeds, not the net gain. Selling for 105,000 CZK makes the gain taxable, even if the profit is small.
- **40 million CZK limit:** The article mentions this only for cryptocurrencies, where the time test applies up to a combined 40 million CZK. It doesn't state a comparable limit for stocks or ETFs.
- **Tax rates:** Gains are generally taxed at 15%, with 23% applying to the portion of the base above the threshold (36 times the average wage).
- **Rebalancing and active management:** Sales made before three years, with annual volume over 100,000 CZK, create a tax liability. Accumulating ETFs that don't pay dividends can avoid this, as the return builds up in the price.
- **Notification duty:** If gross proceeds from exempt securities exceed 5 million CZK in one transaction,
… [712 more characters]
```
</details>

→ `Bash` — Create research output folder
```sh
mkdir -p [redacted: local path] && ls -la [redacted: local path] [redacted: local path]
```

<details><summary>result</summary>

```
[redacted: local path]
total 0
drwxr-xr-x   4 [user]  staff  128 11 Oct  01:23 .
drwxr-xr-x   4 [user]  staff  128 11 Oct  01:07 ..
drwxr-xr-x  10 [user]  staff  320 11 Oct  01:22 .git
drwxr-xr-x   2 [user]  staff   64 11 Oct  01:23 research

[redacted: local path]
total 0
drwxr-xr-x  2 [user]  staff   64 11 Oct  01:23 .
drwxr-xr-x  4 [user]  staff  128 11 Oct  01:23 ..
```
</details>

→ `Write` [redacted: local path]

<details><summary>result</summary>

```
File created successfully at: [redacted: local path] (file state is current in your context — no need to Read it back)
```
</details>

**Agent:**

[redacted: name]

1. Ads cannot launch tomorrow in this form. Czech retail investors cannot buy US NYSE ETFs (VOO, SPY, QQQ): they lack the EU-required KID. Saxo explicitly says these ETFs are available only to professional clients. IBKR has the same rule, but I saw its knowledge-base entry only in search results.
2. The page should therefore become “ETFs tracking US indices that can actually be bought in Czechia (UCITS).” This matches demand: the most frequent related Czech Google Trends query for “ETF” is “ucits etf”.
3. Overall demand: “ETF” averages 61 versus 3 for “VOO” and 0 for “nejlepší ETF”. Interest peaks in January and drops in summer. “DIP” (a Czech tax-advantaged long-term investment account) is frequently searched alongside it. Absolute search volumes are not available for free; Keyword Planner and Sklik require an advertising-account login.
4. Audience: 55% of Czechs actively invest; 82% invest their savings in some form (Česká spořitelna and Ipsos, 2026). The digital client is on average 35 years younger… correction: their average age is 35, versus 59 for branch clients. Among people aged 16–30, 36% buy stocks, ETFs and crypto themselves.
5. Market size: households hold about 1.7 trillion Kč in funds, representing 22.2% of their savings (Ministry of Finance, 2025 results). No separate ETF-only figure is published.
6. Platform clients: Portu had 280,000 at the end of 2025 and advertised 344,000 in September 2026; Fondee has more than 27,000; Revolut has more than 1 million in Czechia. Czech figures for XTB and Trading 212 are unavailable.
7. Beginners mainly fear losing money, not knowing where to start and encountering fraud. Other questions concern why VOO cannot be bought and taxes: exemptions after 3 years of holding or for annual sales up to 100,000 Kč.
8. Reddit (403 and CAPTCHA) and Facebook groups (login required) could not be reviewed. I collected the question themes from surveys, Google Trends and media coverage.
9. The broker table uses dated official price lists: XTB, Trading 212, IBKR, DEGIRO, Fio, Revolut, Saxo, Lynx, Portu, Fondee and Finax. Anycoin was excluded because I found no ETFs there. The main hidden difference is currency conversion: 0.15% at Trading 212 to 0.5% at XTB.
10. Competitors: 5 good and 5 poor practices. Good: Portu’s ungated calculator, email-only forms and a separate newsletter-consent checkbox. Poor: XTB’s required phone number, “safe and profitable” claims and return percentages on the first screen.
11. Conversion benchmarks (Unbounce 2024): finance overall has an 8.3% median; the investing subcategory has 3.9%. Finance converts at 11.5% on mobile versus 9% on desktop.
12. Meta finance-ad costs (WordStream, mostly US data): $1.22 CPC and 0.98% CTR. No public Czech CPC or CPL data was found. My illustrative CPL estimate is $15–31.
13. Law: newsletter consent under §7 of Act 480/2004, cookie consent before loading the pixel (in Czechia since 2022), ČNB’s “not investment advice” warning, MAR disclosures and conflicts of interest from broker affiliate payments.
14. Platforms: Meta allows educational ads without a licence but bans CFDs. Google is introducing financial-advertiser verification across the EU; the Czech date is unconfirmed, so start with Meta.
15. Competitor Meta ads: XTB uses a free course, “zero commissions” and “an account in 15 minutes”; Portu uses “no need to be an expert” and client counts; Fondee uses a calculator. Nobody occupied the “why you cannot buy VOO and what to buy instead” or FX-fee comparison angles. The file ends with 15 page decisions.

I closed the Playwright browser. Page-snapshot logs remain in the shared `~/.playwright-mcp` directory. I made no Git commits.

File: [redacted: local path]

