export type ItemType =
  | "FOOD"
  | "WEAPON"
  | "ARMOR"
  | "POTION"
  | "MATERIAL"
  | "QUEST_ITEM";

export type Item = {
  readonly id: string;
  name: string;
  description?: string;
  basePrice: number;
  itemType: ItemType;
};