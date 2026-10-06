import { randomUUID } from "node:crypto";
import { NPC, PersonalityTrait } from "@nexus/types";

export function createNPC(
  worldId: string,
  regionId: string,
  name: string,
  age: number,
  personality: PersonalityTrait[] = []
): NPC {
  return {
    id: randomUUID(),
    worldId,
    regionId,
    name,
    age,
    health: 100,
    maxHealth: 100,
    energy: 100,
    maxEnergy: 100,
    hunger: 0,
    money: 0,
    personality,
  };
}