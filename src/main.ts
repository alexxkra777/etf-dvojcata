import './styles/fonts.css';
import './styles/tokens.css';
import './styles/main.css';
import { pickVariant } from './variants';
import { onceVisible, startTracking, track } from './track';
import { headline, initCalculator } from './calcui';
import { renderTable } from './table';
import { initLeads } from './lead';
import { kc, NBSP } from './cz';
import { DEFAULT_INPUT } from './calc';

const variant = pickVariant();
document.documentElement.dataset.variant = variant.id;

// Hero copy follows the ad the visitor came from
if (variant.hero === 'fx') {
  const title = document.getElementById('hero-title')!;
  title.innerHTML = `Stejný fond na S&amp;P${NBSP}500, jiný broker: rozdíl až <mark>${kc(headline())}</mark> za ${DEFAULT_INPUT.years}${NBSP}let.`;
  for (const line of document.querySelectorAll<HTMLElement>('[data-hero]')) line.hidden = line.dataset.hero !== 'fx';
}
// Form experiment: in "calc" the hero shows a button to the table, the first form sits under the calculator
if (variant.form === 'calc') {
  document.querySelector<HTMLElement>('.hero__ask form.lead')!.hidden = true;
  document.querySelector<HTMLElement>('.hero__alt')!.hidden = false;
}

startTracking(variant.id);
renderTable();
initCalculator();
initLeads(variant);

const sections = [...document.querySelectorAll<HTMLElement>('[data-section]')];
onceVisible(sections, section => track('section_view', { section: (section as HTMLElement).dataset.section }));

if (import.meta.env.VITE_META_PIXEL_ID || import.meta.env.VITE_GA4_ID) {
  void import('./consent').then(module => module.initConsent());
}
