import { describe, expect, it } from "vitest";
import { calculatePrice, updateMarketPrice } from "../packages/simulation/src/economy";
import type { MarketData } from "../packages/types/src";

describe("Economy System", () => {
  it("increases price when demand > supply", () => {
    const price = calculatePrice(100, 10, 50);
    expect(price).toBeGreaterThan(100);
  });

  it("decreases price when supply > demand", () => {
    const price = calculatePrice(100, 50, 10);
    expect(price).toBeLessThan(100);
  });

  it("applies modifiers correctly", () => {
    const modifiers = [
      { factor: 1.5, reason: "drought" },
      { factor: 0.8, reason: "festival" },
    ];
    const price = calculatePrice(100, 10, 10, modifiers);
    expect(price).toBe(120);
  });

  it("updates market data with new price", () => {
    const market: MarketData = {
      itemId: "item-1",
      itemName: "Food",
      basePrice: 100,
      currentPrice: 100,
      supply: 10,
      demand: 20,
    };

    const updated = updateMarketPrice(market);
    expect(updated.currentPrice).toBeGreaterThan(market.basePrice);
  });

  it("never returns price below 1", () => {
    const price = calculatePrice(10, 1000, 1);
    expect(price).toBeGreaterThanOrEqual(1);
  });
});
