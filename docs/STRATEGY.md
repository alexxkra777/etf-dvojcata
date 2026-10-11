# Strategy: who the page is for, what they get, when we ask

Research behind this: [`research/market-cro.md`](../research/market-cro.md) (market, brokers, competitors,
benchmarks, law) and [`research/etf-data.md`](../research/etf-data.md) (fund data).

## The brief vs. reality

The brief asks for a comparison of ETFs traded on NYSE for a Czech retail investor.
A Czech retail investor **can't buy them**. US-domiciled ETFs (VOO, SPY, IVV, VTI...) have no PRIIPs KID,
so EU brokers block them for retail clients. Saxo says it on its Czech price list in plain words:
*"ETF, které nemají KID v českém jazyce (např. ETF obchodované v USA), jsou dostupné pouze profesionálním investorům."*

A page that compares NYSE ETFs and asks for an email would promise something the visitor can't act on.
They'd find out at the broker, and the lead would be worth nothing (or worse, they'd feel tricked).

So I kept the NYSE ETFs as the **hook** (that's what people hear about on YouTube and Reddit) and made the
**value** the honest answer: *"VOO si u většiny českých brokerů nekoupíte. Tady je jeho evropské dvojče, a kolik vás bude stát v korunách."*
The page distinguishes exact UCITS index matches, approximate alternatives and funds without an exact twin. European alternatives are buyable
from CZ. This angle was absent from the Czech finance ads inspected in the Meta Ad Library on 11 October 2026; that limited sample does not establish that no competitor uses it.

## Target group

**Primary: "the YouTube-informed beginner".** 22–40, lives in a Czech city, has 2,000–10,000 Kč a month to put aside,
has heard "just buy the S&P 500 / VOO" from a creator or a friend, maybe downloaded XTB or Trading 212 but hasn't
bought anything yet. On a phone, scrolling Instagram or Facebook in the evening.

Why this group:
- 55 % of Czechs say they invest actively, and among 16–30 year-olds 36 % buy shares, ETFs or crypto themselves (Česká spořitelna / Ipsos 2026).
- The top related search to "ETF" in Czechia is "ucits etf" — people are already running into the KID wall and looking for the answer.
- Their fears are measurable: losing money, not knowing where to start, choosing wrong. Fees in a foreign currency are a fear they don't know they should have yet.

**Not the target:** active traders (they know all this), people looking for a financial adviser (we don't advise),
people with large portfolios (different needs: estate tax, professional status).

## What they get for their email

**"Průvodce: americké ETF a jejich evropská dvojčata"** — a PDF they can open right away, no waiting for an email:
1. All 13 popular NYSE Arca products and their exact twins or explicitly labelled alternatives (ticker, exchange, TER, size, accumulating or distributing).
2. Fees at 7 brokers available in CZ, converted to korunas, with the currency-conversion fee that most comparisons skip.
3. Taxes in one page: 3-year time test, the 100,000 Kč limit, W-8BEN, accumulating vs distributing.
4. A 5-step checklist for the first purchase.

The current build provides a static PDF download. A future ESP integration could deliver personalised calculator results; no email or personalised PDF is sent by the current implementation.

**What we show before the form, for free:** the twin table and the calculator. The visitor gets the gist without
leaving anything. The PDF is the depth: everything in one place, with sources, to keep and come back to.
This is the pattern that works best in the competitor review (Portu's open calculator) and avoids the worst one
(XTB asks for name, surname, phone and email for a "free" course).

## When we ask for the contact

1. **Right in the first screen**, one field. Someone who clicked an ad that said "VOO si nekoupíte, tady je co místo něj"
   and sees the twin card already knows what they'll get. Making them scroll first would lose the decided ones.
2. **Right after the calculator shows a number.** That's the moment of highest perceived value — they just saw what
   fees cost *them*. The form there is pre-labelled "Získat PDF srovnání".
3. A **sticky bottom button** on mobile once the hero is out of view, so the ask is never more than one tap away.

All three are the same one-field form. Marketing consent is a separate unticked checkbox, because the PDF they asked
for is a different purpose from a newsletter (zákon 480/2004 Sb. §7, GDPR art. 7(4)).

## After the form

No "thank you" dead end:
- a PDF download button appears immediately (a click is measured; opening the PDF is not),
- a one-tap question "Máte už brokera?" (Ne / XTB / Trading 212 / Jiný) — segments the lead for the follow-up emails at zero form cost,
- three next steps: open the PDF, check your broker's FX fee, set up a monthly order,
- a possible future email sequence (5 short emails over 2 weeks) needs the client’s ESP. The optional webhook provides the integration point; it is not a configured sending service.

## Section order and why

| # | Section | Job | Why here |
|---|---|---|---|
| 1 | **Hero**: message-matched headline, twin card VOO → CSPX, one-field form | Confirm the ad's promise in < 3 s, take the decided leads | Paid social visitors decide in seconds; the headline is swapped per ad (`utm_content`) so the first line repeats the ad they clicked |
| 2 | **Twin table** (filter: S&P 500 / svět / Nasdaq / dividendy / dluhopisy) | Deliver the promised value openly | Proves we're not bait; builds the trust the form needs |
| 3 | **Fee calculator in Kč** | Personal "aha": what fees cost *me* | The highest-intent moment; the second form sits right under the result |
| 4 | **3 things that cost Czechs money** (FX fee, dividends/W-8BEN, 3-year test) | Objection handling + shows the PDF's depth | Short, scannable, each ends with "more in the guide" |
| 5 | **What's in the guide** (page previews) + form | Make the value tangible before the last ask | People who scrolled this far want more; show exactly what they get |
| 6 | **FAQ** (Why not VOO? Is it advice? Who's behind it? Spam?) | Remove last doubts | Low on the page, only for the hesitant |
| 7 | **Footer**: sources, data date, author, disclaimers | Compliance (ČNB / MAR), credibility | Required, kept out of the way |

## Expected conversion

Benchmarks (Unbounce Conversion Benchmark Report 2024): finance landing pages median **8.3 %**, the investing
subcategory **3.9 %**, finance from paid social **9.3 %**, finance on mobile 11.5 % vs 9 % on desktop.

My estimate for this page with cold Meta traffic: **5–8 % visitor → lead**, with 6 % as the planning number.
Above the investing median because the ask is one field and the value is a free PDF, not an account opening;
below the finance median because the traffic is cold and mobile-only, and the topic needs some reading.
At an illustrative CPC of 15–25 Kč that's roughly **190–500 Kč per lead**. Replace with real numbers after 3–5 days
and ~1,000 visits per ad version.

## A/B hypotheses (ordered by expected impact)

1. **Message match per ad vs. one generic hero.** Swapping the headline to repeat the exact ad promise will raise visitor → lead by 15–30 % relative.
   Biggest lever because it acts on 100 % of visitors in the first 3 seconds, where most of them leave. *Metric:* lead rate per session; *guardrail:* bounce within 5 s.
2. **Form in the hero vs. form only after the calculator.** Asking later lowers the raw rate but may raise lead quality (they've seen their own number). Expect hero form +10–20 % leads, calculator-first +10 % PDF download clicks. *Metric:* leads and PDF download clicks per session.
3. **2-tap micro-quiz before the email ("Kolik chcete měsíčně investovat?" → "Máte brokera?") vs. plain email field.** Vendor data puts quiz funnels at 8–11 % visitor-to-lead, but the evidence is weak, so this one goes third. *Metric:* lead rate; *bonus:* segmentation data.

## Measurement

Every step from landing to submitted form is tracked first-party, without cookies (a random session id lives only in
the page's memory), so it works even for visitors who decline the cookie banner:
`page_view → engaged_5s → section_view(table|calc|guide) → calc_change / compare_filter / twin_open → cta_click → form_view → form_focus → form_submit → lead_ok → pdf_download → broker_answer`.
Each event carries `variant` and the UTM tags, so the funnel can be cut by ad version and A/B variant at `/api/stats`.
The Meta pixel and GA4 only load after consent, as the second, optimisation-only layer. Server-side lead count is the source of truth.
