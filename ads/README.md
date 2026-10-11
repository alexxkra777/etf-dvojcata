# ETF dvojčata — Meta launch test

Educational Czech ETF comparison, prepared 11 October 2026. Two promises, two matching landing headlines. No broker relationship or affiliate links. Sources and reasoning: [strategy](../docs/STRATEGY.md), [market research §§2, 3, 5, 6](../research/market-cro.md), [fund data](../research/etf-data.md), [dated source records](../research/etf-data.json).

## Creative files and build

`a-feed.html`, `a-story.html`, `b-feed.html`, `b-story.html` share `creative.css`. Feed is 1080 × 1350; story is 1080 × 1920. All story text fits between y=250 and y=1670. The background extends to every edge. Hooks are at least 70 px. The mark uses two overlapping circles. The creatives import the landing design tokens and load local Fraunces and IBM Plex Sans font files, including Czech glyphs. Georgia and system sans are fallbacks. The renderer resolves local font and token URLs for its temporary HTML.

Run from the repository root with the three numbers the landing calculator shows for its default
scenario (3 000 Kč a month, 20 years, 7 % a year, CSPX/SXR8 bought monthly):

```sh
ads/build.sh 47700 15700 63400   # difference, cheapest route, most expensive route
```

These are the calculator's own outputs (`src/calc.ts`, checked by `src/calc.test.ts`): Trading 212
15 700 Kč, Fio e-Broker on Xetra 63 400 Kč, difference 47 700 Kč. Most of the gap is Fio's €3.95
commission per monthly purchase, not the currency conversion, so creative B talks about fees in
general and shows both ends of the range instead of blaming FX. If fees or rates change, rerun the
calculator tests first, then rebuild with the new numbers. The script renders all four files into
`ads/out/` with isolated temporary Chrome profiles and cleans up after itself.

## A — Mýtus VOO

| Field | Copy |
|---|---|
| Primary text | “VOO si u většiny českých brokerů nekoupíte. Jeho evropské dvojče ano. Stáhněte si průvodce ETF zdarma.” |
| Headline | “VOO a jeho evropská dvojčata” |
| Description | “Srovnání ETF, poplatků a daňových pravidel.” |
| CTA button | “Stáhnout” |
| Alternative primary 1 | “Znáte VOO? Poznejte CSPX a VUAA. Stejný index S&P 500, evropské fondy. Průvodce zdarma.” |
| Alternative primary 2 | “Proč VOO často nejde koupit? Vysvětlení i evropská dvojčata najdete v českém průvodci ETF.” |

Final URL: `https://etf-dvojcata.vercel.app/?utm_source=meta&utm_medium=paid_social&utm_campaign=etf_dvojcata_launch&utm_content=voo`

**Promise → first screen:** `utm_content=voo` must repeat the qualified “u většiny brokerů” claim, show VOO → CSPX/VUAA and offer the free PDF in an email-only form. The qualifier matters: Fio's execution-only route is an exception, described in the guide. CSPX is the London USD ticker; VUAA here is Xetra EUR. Both follow S&P 500, but fund ownership, domicile and distribution policy differ from VOO. This is an index comparison, not a recommendation to buy.

## B — Skryté poplatky

| Field | Copy |
|---|---|
| Primary text | “Stejný fond na S&P 500, jiný broker: rozdíl až 47 700 Kč za 20 let. Spočítejte si poplatky v korunách.” |
| Headline | “Kolik vás stojí broker za 20 let?” |
| Description | “Modelový výpočet a český průvodce ETF.” |
| CTA button | “Zjistit více” |
| Alternative primary 1 | “Provize, směna měn, úschova. Přepočítali jsme poplatky 4 brokerů na koruny. Zdarma a bez registrace.” |
| Alternative primary 2 | “15 700 Kč, nebo 63 400 Kč? Stejný fond, jiný broker. Zadejte svou částku do kalkulačky.” |

Final URL: `https://etf-dvojcata.vercel.app/?utm_source=meta&utm_medium=paid_social&utm_campaign=etf_dvojcata_launch&utm_content=fx`

**Promise → first screen:** `utm_content=fx` repeats the same 47 700 Kč amount, identify it as a modeled fee difference, show the 20-year scenario and offer the editable calculator plus the guide. Use the same fund and assumptions across brokers. “Až” must refer to an identified comparison among the listed brokers, not an unlimited claim. The ad number, headline and calculator must be checked together before launch. 

All primary texts and alternatives are below 125 characters at template length; both headlines are below 40 characters. Recheck B's length after number substitution. Keep the full primary hook before “Zobrazit více”; actual truncation depends on placement.

## Audience and placements

- Czech Republic, Czech language, all genders, intended age 22–45; minimum age 18.
- Start broad. If available, test a separate audience suggestion using ETF, S&P 500 and investing interests. Interest availability varies; avoid tiny audiences and implied personal financial circumstances.
- Advantage+ placements, with feed and story/reels assets assigned to the corresponding aspect ratio. Keep all story text within the 250 px top/bottom safe zone.
- Use equal spend and the same audience, schedule, landing variant and attribution window for A/B. A creative test and an interest test should run separately to keep the result interpretable.
- If Ads Manager requires the Financial products and services category or restricts age/interests, declare it and use the permitted broad 18+ audience. Verify country-specific rules in the account before launch; the research could not establish the Czech category requirement.

## Budget, measurement and stop rules

Start with 2 × 300 Kč/day for 5 days = **3 000 Kč total**, **1 500 Kč per version**. At the strategy's illustrative CPC of 15–25 Kč, this buys about **60–100 visits per version**, not 1 000. These are planning assumptions, not Czech market benchmarks. At 6% visitor-to-lead, expect roughly 4–6 leads per version; this is a smoke test, not evidence of an A/B winner. If needed, reaching 1 000 visits per version at that CPC requires approximately 30 000–50 000 Kč total. Decide on further spend after observing actual traffic; no automatic budget increase.

| Metric | Initial plan / action |
|---|---|
| Link CTR | Aim ≥0.8%; below 0.8% after 3 000 impressions per creative → replace that creative |
| Landing CPC | Illustrative 15–25 Kč; inspect click-to-session losses and placement quality |
| Visitor → lead | Plan 6%, working range 5–8%; use server-side confirmed leads divided by landing sessions |
| CPL | Plan 333 Kč at 20 Kč CPC / 6% lead rate; >666 Kč after 30 confirmed leads per version → stop that version and diagnose |
| Quality | Compare PDF downloads per confirmed lead, five-second engagement and calculator usage |
| Decision | Report denominator, spend and uncertainty; do not declare a winner from 4–6 leads |

Do not stop early merely because the five-day smoke test cannot reach the 30-lead rule. It is a minimum evidence threshold. Preserve both UTM values in sessions, lead records and PDF-download events. Keep A/B reporting separate. Count duplicate submissions only once. The server-side lead count is the source of truth; Meta's consent-dependent attribution is secondary. Meta pixel and marketing analytics start only after consent, with refusal as easy as acceptance.

## Pre-launch compliance review

- [ ] Position as education and a generic comparison. No account-opening offer, personalized transaction advice or claims about the viewer's assets.
- [ ] No promotion of CFDs, binary options, leverage or prohibited financial products. No broker logos, people, stock photos or fabricated broker interfaces.
- [ ] No PII or financial details requested in the ad. The landing form asks for email only; marketing consent is separate and initially unticked. Download access must not depend on marketing consent.
- [ ] No “safe”, “guaranteed” or “best” claims; no headline returns. Both creatives carry “Nejde o investiční doporučení” and a capital-at-risk warning. A disclaimer alone does not remove MAR duties if content actually recommends a trade.
- [ ] Landing and PDF disclose author [redacted: name], data date, sources, methodology, risks, past-performance warning and absence of affiliate links. Keep facts separate from assumptions and avoid personalized recommendations in comments.
- [ ] Verify current Meta financial-services requirements and country/category restrictions in Ads Manager, including any authorization request. The research's education exemption is not a blanket approval of this campaign.
- [ ] verify message match on mobile, check download and consent behavior, and review every placement crop.

Policy references: [Meta financial services](https://transparency.meta.com/en-gb/policies/ad-standards/restricted-goods-services/financial-services/), [Meta category help](https://www.facebook.com/business/help/298000447747885), [ČNB financial influencer warning](https://www.cnb.cz/cs/dohled-financni-trh/ochrana-spotrebitele/upozorneni/Upozorneni-Ceske-narodni-banky-pro-influencery-v-oblasti-financi/). Checked against repository research dated 11 October 2026. ČNB's page was re-opened during preparation; Meta's policy re-fetch returned HTTP 429, so the live wording and account requirements remain to be verified before launch.
