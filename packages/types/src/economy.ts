export type MarketData = {
  itemId: string;
  itemName: string;
  basePrice: number;
  currentPrice: number;
  supply: number;
  demand: number;
};

export type PriceModifier = {
  factor: number;
  reason: string;
};
