export type TerrainType =
  | "FOREST"
  | "VALLEY"
  | "DESERT"
  | "RUINS"
  | "COAST"
  | "MOUNTAIN"
  | "SWAMP"
  | "VILLAGE";

export type Region = {
  readonly id: string;
  worldId: string;
  name: string;
  terrain: TerrainType;
  temperature: number;
  dangerLevel: number;
  connectedRegionIds: string[];
};