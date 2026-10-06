import { randomUUID } from "node:crypto";
import { Region, TerrainType } from "@nexus/types";

export function createRegion(
  worldId: string,
  name: string,
  terrain: TerrainType,
  temperature: number = 20,
  dangerLevel: number = 1
): Region {
  return {
    id: randomUUID(),
    worldId,
    name,
    terrain,
    temperature,
    dangerLevel,
    connectedRegionIds: [],
  };
}