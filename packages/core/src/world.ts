import { randomUUID } from "node:crypto";
import { World } from "@nexus/types";

export function createWorld(name: string, seed: string): World {
  return {
    id: randomUUID(),
    name,
    seed,
    createdAt: Date.now(),
    currentTick: 0,
    currentTime: Date.now(),
  };
}