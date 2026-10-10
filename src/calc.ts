// Fee model: what buying an ETF every month costs in korunas, including the growth the fees would have made.
// Pure functions only, no DOM. Tested in calc.test.ts.

export type Currency = 'EUR' | 'USD';
export type Rates = Record<Currency, number>;

export type Commission =
  | { kind: 'flat'; fee: number }
  // fixed fee up to each order size, then a percentage with a minimum (Fio style)
  | { kind: 'tiers'; tiers: { upTo: number; fee: number }[]; pct: number; min: number };

export interface Route {
  id: string;
  name: string;
  fund: string;
  ter: number; // % p.a.
  currency: Currency;
  commission: Commission;
  fxPct: number | null; // null = we don't know it, so it's left out (and the page says so)
  connectivity?: { pct: number; capPerYear: number }; // yearly fee per exchange, in fund currency
  sameFund: boolean; // true for the UCITS S&P 500 routes; false for buying the US original
}

export interface CalcInput {
  monthly: number; // CZK
  years: number;
  ret: number; // expected yearly return in %, before fees
}

export interface RouteResult {
  route: Route;
  contributed: number;
  value: number; // what you'd have with this route's fees
  baseline: number; // what you'd have with no fees at all
  cost: number; // baseline - value: fees plus the growth they'd have made
  orderFeeCzk: number; // commission per monthly order, in CZK
}

export const DEFAULT_INPUT: CalcInput = { monthly: 3000, years: 20, ret: 7 };
export const LIMITS = { monthly: [500, 50000], years: [5, 30] } as const;

export function commission(rule: Commission, order: number): number {
  if (rule.kind === 'flat') return rule.fee;
  for (const tier of rule.tiers) if (order <= tier.upTo) return tier.fee;
  return Math.max(order * rule.pct / 100, rule.min);
}

export function clampInput(input: CalcInput): CalcInput {
  const clamp = (value: number, [min, max]: readonly [number, number], fallback: number) =>
    Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
  return {
    monthly: Math.round(clamp(input.monthly, LIMITS.monthly, DEFAULT_INPUT.monthly)),
    years: Math.round(clamp(input.years, LIMITS.years, DEFAULT_INPUT.years)),
    ret: clamp(input.ret, [0, 15], DEFAULT_INPUT.ret),
  };
}

// Month by month: pay in at the start of the month, the money grows until the end of it.
// Exchange rate is held constant (today's ČNB fixing), so the result is in today's korunas of the same rate.
export function simulate(route: Route, input: CalcInput, rates: Rates): RouteResult {
  const rate = rates[route.currency];
  const months = input.years * 12;
  const growth = (input.ret - route.ter) / 100 / 12;
  const baseGrowth = input.ret / 100 / 12;
  const orderFeeCzk = commission(route.commission, input.monthly / rate) * rate;
  const invested = Math.max(0, input.monthly - orderFeeCzk) * (1 - (route.fxPct ?? 0) / 100);
  let value = 0;
  let baseline = 0;
  for (let month = 1; month <= months; month++) {
    value = (value + invested) * (1 + growth);
    baseline = (baseline + input.monthly) * (1 + baseGrowth);
    if (route.connectivity && month % 12 === 0) {
      value -= Math.min(value * route.connectivity.pct / 100, route.connectivity.capPerYear * rate);
    }
  }
  return { route, contributed: input.monthly * months, value, baseline, cost: baseline - value, orderFeeCzk };
}

export function compare(routes: Route[], input: CalcInput, rates: Rates): RouteResult[] {
  return routes.map(route => simulate(route, input, rates)).sort((a, b) => a.cost - b.cost);
}

// Cheapest vs most expensive way to buy the same fund (the UCITS twin), rounded to hundreds.
export function spread(results: RouteResult[]): { cheapest: RouteResult; priciest: RouteResult; diff: number } {
  const same = results.filter(result => result.route.sameFund).sort((a, b) => a.cost - b.cost);
  const cheapest = same[0];
  const priciest = same[same.length - 1];
  return { cheapest, priciest, diff: Math.round((priciest.cost - cheapest.cost) / 100) * 100 };
}
