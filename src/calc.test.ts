import { describe, expect, it } from 'vitest';
import { clampInput, commission, compare, DEFAULT_INPUT, simulate, spread, type Route } from './calc';
import { rates, routes } from './brokers';
import { cz, date, kc, nb, pct } from './cz';

const route = (patch: Partial<Route>): Route => ({
  id: 'test', name: 'Test', fund: 'X', ter: 0, currency: 'EUR', sameFund: true,
  commission: { kind: 'flat', fee: 0 }, fxPct: 0, ...patch,
});
const fakeRates = { EUR: 25, USD: 20 };

describe('commission', () => {
  const fio = { kind: 'tiers', tiers: [{ upTo: 1400, fee: 3.95 }, { upTo: 3000, fee: 4.95 }], pct: 0.15, min: 6.95 } as const;
  it('picks the tier by order size, then a percentage with a minimum', () => {
    expect(commission(fio, 1400)).toBe(3.95);
    expect(commission(fio, 1400.01)).toBe(4.95);
    expect(commission(fio, 3000.01)).toBe(6.95); // 0.15 % of 3000 is 4.50, the minimum wins
    expect(commission(fio, 10000)).toBeCloseTo(15); // 0.15 % of 10 000
  });
});

describe('simulate', () => {
  it('matches a hand calculation: 1 000 Kč a month, 1 year, no growth, 1 € fee, 0.5 % FX', () => {
    // fee per order: 1 € x 25 Kč = 25 Kč
    // invested each month: (1 000 - 25) x (1 - 0.005) = 975 x 0.995 = 970.125 Kč
    // after 12 months with 0 % growth: 12 x 970.125 = 11 641.50 Kč
    // with no fees at all you'd have 12 x 1 000 = 12 000 Kč, so fees cost 358.50 Kč
    const result = simulate(route({ commission: { kind: 'flat', fee: 1 }, fxPct: 0.5 }),
      { monthly: 1000, years: 1, ret: 0 }, fakeRates);
    expect(result.orderFeeCzk).toBe(25);
    expect(result.value).toBeCloseTo(11641.5, 6);
    expect(result.baseline).toBe(12000);
    expect(result.cost).toBeCloseTo(358.5, 6);
  });

  it('compounds monthly at (return - TER) / 12', () => {
    // 12 % a year = 1 % a month; money paid in at the start of each month:
    // 1 000 x 1.01 x (1.01^12 - 1) / 0.01 = 12 809.33 Kč
    const noFees = simulate(route({}), { monthly: 1000, years: 1, ret: 12 }, fakeRates);
    expect(noFees.value).toBeCloseTo(12809.33, 2);
    expect(noFees.cost).toBeCloseTo(0, 6);
    // a TER equal to the return eats all the growth, so the cost is the growth itself: 809.33 Kč
    const allTer = simulate(route({ ter: 12 }), { monthly: 1000, years: 1, ret: 12 }, fakeRates);
    expect(allTer.value).toBeCloseTo(12000, 6);
    expect(allTer.cost).toBeCloseTo(809.33, 2);
  });

  it('takes the yearly connectivity fee, capped', () => {
    // 0.25 % of 12 000 Kč = 30 Kč, below the cap of 2.50 € x 25 = 62.50 Kč
    const small = simulate(route({ connectivity: { pct: 0.25, capPerYear: 2.5 } }), { monthly: 1000, years: 1, ret: 0 }, fakeRates);
    expect(small.value).toBeCloseTo(11970, 6);
    // 0.25 % of 600 000 Kč = 1 500 Kč, so the cap of 62.50 Kč applies
    const big = simulate(route({ connectivity: { pct: 0.25, capPerYear: 2.5 } }), { monthly: 50000, years: 1, ret: 0 }, fakeRates);
    expect(big.value).toBeCloseTo(600000 - 62.5, 6);
  });

  it('converts a USD fee with the USD rate', () => {
    const result = simulate(route({ currency: 'USD', commission: { kind: 'flat', fee: 7.95 } }), { monthly: 3000, years: 1, ret: 0 }, fakeRates);
    expect(result.orderFeeCzk).toBeCloseTo(159, 6); // 7.95 $ x 20 Kč
  });
});

describe('defaults with real fees', () => {
  const results = compare(routes, DEFAULT_INPUT, rates);
  const { cheapest, priciest, diff } = spread(results);

  it('ranks the routes and gives a headline number in whole hundreds', () => {
    expect(cheapest.route.id).toBe('t212');
    expect(priciest.route.id).toBe('fio');
    expect(diff % 100).toBe(0);
    expect(diff).toBeGreaterThan(0);
    // the US original via Fio isn't "the same fund", so it's not part of the spread
    expect(results.find(result => result.route.id === 'fio-voo')!.route.sameFund).toBe(false);
  });

  it('keeps cost = baseline - value for every route', () => {
    for (const result of results) expect(result.cost).toBeCloseTo(result.baseline - result.value, 6);
  });
});

describe('clampInput', () => {
  it('keeps inputs inside the slider range', () => {
    expect(clampInput({ monthly: 10, years: 99, ret: Number.NaN })).toEqual({ monthly: 500, years: 30, ret: 7 });
  });
});

describe('Czech formatting', () => {
  it('formats numbers with nbsp and decimal comma', () => {
    expect(cz(12500)).toBe('12 500');
    expect(cz(3000)).toBe('3 000');
    expect(cz(1234567.891, 2)).toBe('1 234 567,89');
    expect(kc(41300)).toBe('41 300 Kč');
    expect(pct(0.07)).toBe('0,07 %');
    expect(pct(0.5)).toBe('0,5 %');
    expect(pct(7, 2, 0)).toBe('7 %');
    expect(date('2026-10-11')).toBe('11. 10. 2026');
  });
  it('glues one-letter words and units', () => {
    expect(nb('fond v korunách a v eurech')).toBe('fond v korunách a v eurech');
    expect(nb('za 3 000 Kč')).toBe('za 3 000 Kč');
  });
});
