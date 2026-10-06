import type { World, Weather } from "@nexus/types";
import { createClock } from "./clock";
import type { WorldState } from "./state";

export function createWorldState(world: World, weather: Weather): WorldState {
  return {
    world,
    clock: createClock(),
    weather,
    regions: [],
    npcs: [],
    items: [],
  };
}
