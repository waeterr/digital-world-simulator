import type { Item, NPC, Region, SimulationClock, Weather, World } from "@nexus/types";

export type WorldState = {
  world: World;
  clock: SimulationClock;
  weather: Weather;
  regions: Region[];
  npcs: NPC[];
  items: Item[];
};
