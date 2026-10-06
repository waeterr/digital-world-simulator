import { Item, ItemType } from "@nexus/types";

export function createItem(name: string, basePrice: number, itemType: ItemType, description?: string): Item {
  return {
    id: crypto.randomUUID(),
    name,
    basePrice,
    itemType,
    description,
  };
}