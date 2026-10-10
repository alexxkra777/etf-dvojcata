# Czech ETF guide

Eight A4 pages, authored in `pruvodce.html`, with `styles.css` and inline circle marks. The printable PDF is `../public/pruvodce-etf.pdf`.

Build from the repository root:

```sh
guide/build.sh
```

Requires Python 3 and the installed Google Chrome. The script uses an isolated temporary browser profile, stops its own Chrome process group, and replaces the PDF only after a successful render. It does not install packages or start a web server.

`prepare.py` writes local `fonts.css`: Fraunces and IBM Plex Sans from existing font packages, or Georgia and system sans fallbacks. It also reads matching palette values from `src/styles/tokens.css` when present. No landing source files are changed. Print styling uses A4 with 12 mm margins and a separate footer band. Table rows stay together.

## Content and sources

The guide follows [strategy](../docs/STRATEGY.md), [market research](../research/market-cro.md) and the dated [ETF records](../research/etf-data.json). It covers all 13 NYSE Arca examples, 26 selected European product/share-class profiles, and the three Nasdaq examples as a note. Gold counterparts are clearly labeled ETCs. Approximate index matches are explicit; this is not a ranking.

TER and product sizes preserve the justETF snapshot supplied in the research, accessed 11 October 2026. The source has no explicit valuation date or consistent fund-versus-share-class scope; the guide discloses this. Broker cells preserve raw fees and mark missing or secondary evidence. No scenario totals are included. Tax notes concern a Czech tax resident investing outside business assets; the 2026 removal of the securities cap is distinguished from the 2025 rule and crypto.

Numbered references and fund-profile links are clickable in the PDF. The ČNB execution-only clarification, Fio US trade fee, current tax-law wording and IRS estate threshold were re-opened for verification. Other quoted figures use the supplied dated research; availability and fees can change.

## Visual review

The final PDF must have eight pages. Previews of all pages are retained in `preview/`; page 1 and page 3 are the requested cover and table checks. With Poppler installed:

```sh
pdfinfo public/pruvodce-etf.pdf
pdftoppm -scale-to 1600 -png public/pruvodce-etf.pdf guide/preview/page
```

Review every page for overflow, footer overlap, readable Czech glyphs and unbroken table rows after any content or font change. Dense tables use smaller type than prose; view them at full size. PNG previews are review assets, not ad exports.
