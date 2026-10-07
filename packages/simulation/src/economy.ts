import type { MarketData, PriceModifier } from "@nexus/types";

export function calculatePrice(
  basePrice: number,
  supply: number,
  demand: number,
  modifiers: PriceModifier[] = []
): number {
  const supplyDemandRatio = demand / Math.max(1, supply);
  const modifier = modifiers.reduce((total, item) => total * item.factor, 1);
  return Math.max(1, Math.round(basePrice * supplyDemandRatio * modifier));
}

export function updateMarketPrice(
  market: MarketData,
  modifiers: PriceModifier[] = []
): MarketData {
  return {
    ...market,
    currentPrice: calculatePrice(
      market.basePrice,
      market.supply,
      market.demand,
      modifiers
    ),
  };
}
