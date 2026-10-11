// Renders public/og.png (1200 x 630) from scripts/og.html in a local headless Chrome.
// Run: node scripts/og.mjs
import { readFileSync } from 'node:fs';
import { chromium } from 'playwright-core';

const compiled = JSON.parse(readFileSync(new URL('../research/etf-data.json', import.meta.url), 'utf8')).meta.compiled;
const [year, month, day] = compiled.split('-').map(Number);
const browser = await chromium.launch({ channel: 'chrome' });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto(new URL('og.html', import.meta.url).href, { waitUntil: 'load' });
  await page.evaluate(text => { document.getElementById('stamp').textContent = text; }, `stav k ${day}. ${month}. ${year}`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: new URL('../public/og.png', import.meta.url).pathname });
  console.log('public/og.png written');
} finally {
  await browser.close();
}
