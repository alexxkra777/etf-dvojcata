# Implementation and review process

This is a retrospective account of the completed work, not a conversation transcript. Agent instructions and tool records are in `../ai-log/`.

## Product decision

The brief asked for a NYSE ETF comparison for a Czech visitor arriving from a mobile ad. Research found that most covered brokers block US ETFs for retail clients because the funds lack a PRIIPs KID; Fio is an exception. The page therefore keeps familiar US tickers as the entry point and offers actionable European UCITS counterparts and a broker-fee calculator in crowns.

## Work stages

1. Research the Czech audience, issuer data, broker tariffs and conversion assumptions; define the offer and section order in `STRATEGY.md`.
2. Give the data, frontend, backend and creative tasks separate contracts. Label exact index matches, approximate alternatives and unavailable matches. Do not invent missing values.
3. Build an ungated fund comparison and calculator, then offer the PDF for an email. Keep marketing consent optional and separate.
4. Create two ad concepts and first-screen message matching, then track the journey through forms, PDF download and broker answer.
5. Review sources and implementation. Correct DEGIRO Xetra pricing, add the newly launched direct VT counterpart, remove an unimplemented email-delivery promise, protect server-only lead events, and calculate funnel transitions from matching session cohorts.
6. Rebuild and inspect all eight PDF pages and four advertising images. Check mobile and desktop layouts, consent, forms and downloads locally, using mocked lead responses for interface checks.
7. Run the calculator and backend tests, TypeScript checks and production build. A human reviewer checks the finished submission package before publication.

## Result and limits

Final local validation passed 84 tests, TypeScript and the production build. The dataset contains 16 US funds and 28 UCITS counterparts. Real conversion and acquisition cost need campaign traffic. Email follow-up needs a connected delivery service; native Czech copy review remains a launch check. The revised version is held locally pending publication approval.

AI checks and human approval are separate stages. Assignment A also has a separately confirmed human source-by-source check of 60 claims; that score is not an ETF-data accuracy measure. Conversation records are translated and edited with that fact disclosed; native `/export` coverage is described in `../ai-log/README.md`.
