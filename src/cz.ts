// Czech number and text formatting. Always non-breaking spaces, decimal comma.
export const NBSP = ' ';

// cz(12500) -> "12 500", cz(0.07, 2) -> "0,07". Groups even 4-digit numbers ("3 000"), like the copy does.
export function cz(value: number, decimals = 0): string {
  const fixed = Math.abs(value).toFixed(decimals);
  const [whole, fraction] = fixed.split('.');
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
  const sign = value < 0 && Number(fixed) !== 0 ? '−' : '';
  return sign + grouped + (fraction ? `,${fraction}` : '');
}

export const kc = (value: number) => `${cz(value)}${NBSP}Kč`;

// pct(0.07) -> "0,07 %"; trims needless trailing zeros but keeps at least `min` decimals
export function pct(value: number, max = 2, min = 0): string {
  let text = value.toFixed(max);
  if (text.includes('.')) text = text.replace(/0+$/, '');
  const decimals = text.includes('.') ? text.split('.')[1].length : 0;
  return `${cz(value, Math.max(decimals, min))}${NBSP}%`;
}

// "2026-10-11" -> "11. 10. 2026"
export function date(iso: string): string {
  const [year, month, day] = iso.slice(0, 10).split('-').map(Number);
  return `${day}.${NBSP}${month}.${NBSP}${year}`;
}

// rounds to the nearest hundred, so model output doesn't look more precise than it is
export const round100 = (value: number) => Math.round(value / 100) * 100;

// Glues one-letter prepositions and conjunctions to the next word, numbers to their units.
export function nb(text: string): string {
  return text
    .replace(/(?<=^|[\s(„>])([vkszouaiVKSZOUAI]) +/g, `$1${NBSP}`)
    .replace(/(\d) (?=\d{3}\b)/g, `$1${NBSP}`)
    .replace(/(\d) (Kč|%|€|\$|let|roky|roku|měsíčně|mil\.|mld\.|tis\.)/g, `$1${NBSP}$2`);
}
