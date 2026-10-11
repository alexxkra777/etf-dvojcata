// A/B setup. Nothing is stored: a reload can land in the other form variant, that's fine for a per-visit test.
export type Hero = 'voo' | 'fx';
export type FormPlacement = 'hero' | 'calc';

const HEROES: Hero[] = ['voo', 'fx'];
const FORMS: FormPlacement[] = ['hero', 'calc'];

// Hero follows the ad: utm_content "voo" (ad A, myth-buster) or "fx" (ad B, hidden fees).
// Creative names like "a-feed" / "b-story" map the same way. Unknown -> voo.
export function heroFrom(params: URLSearchParams): Hero {
  const forced = params.get('v')?.split('-')[0];
  if (HEROES.includes(forced as Hero)) return forced as Hero;
  const content = (params.get('utm_content') ?? '').toLowerCase();
  if (/^(fx|b)(?![a-z0-9])/.test(content)) return 'fx';
  return 'voo';
}

// 50/50 per page load. ?v=voo-calc (or ?f=calc) pins it for QA.
export function formFrom(params: URLSearchParams, random = Math.random): FormPlacement {
  const forced = params.get('v')?.split('-')[1] ?? params.get('f');
  if (FORMS.includes(forced as FormPlacement)) return forced as FormPlacement;
  return random() < 0.5 ? 'hero' : 'calc';
}

export const variantId = (hero: Hero, form: FormPlacement) => `${hero}-${form}`;

export function pickVariant(search = location.search, random = Math.random) {
  const params = new URLSearchParams(search);
  const hero = heroFrom(params);
  const form = formFrom(params, random);
  return { hero, form, id: variantId(hero, form) };
}
