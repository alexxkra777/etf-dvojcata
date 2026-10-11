// Screenshots of the landing page in a local headless Chrome.
// Usage: start `npm run dev` (or `npx vite preview`), then `node scripts/screenshot.mjs [base-url]`.
// Writes docs/screenshots/mobile-hero.png, mobile-full.png, desktop.png.
import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright-core';

const base = process.argv[2] ?? process.env.BASE_URL ?? 'http://localhost:5173';
const out = new URL('../docs/screenshots/', import.meta.url);
mkdirSync(out, { recursive: true });
const query = process.env.VARIANT ? `?v=${process.env.VARIANT}` : '?v=voo-hero';

const browser = await chromium.launch({ channel: 'chrome' });
try {
  const mobile = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const page = await mobile.newPage();
  await page.goto(`${base}/${query}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: new URL('mobile-hero.png', out).pathname });
  await page.screenshot({ path: new URL('mobile-full.png', out).pathname, fullPage: true });

  const desktop = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const wide = await desktop.newPage();
  await wide.goto(`${base}/${query}`, { waitUntil: 'networkidle' });
  await wide.evaluate(() => document.fonts.ready);
  await wide.screenshot({ path: new URL('desktop.png', out).pathname, fullPage: true });
  console.log(`Screenshots saved to ${out.pathname}`);
} finally {
  await browser.close();
}
