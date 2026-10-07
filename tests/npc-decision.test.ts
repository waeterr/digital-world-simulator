import { describe, expect, it } from "vitest";
import { decideAction, getPersonalityScore } from "../packages/simulation/src/npc-decision";
import type { NPC } from "../packages/types/src";

describe("NPC Decision Engine", () => {
  const baseNPC: NPC = {
    id: "npc-1",
    worldId: "world-1",
    regionId: "region-1",
    name: "Arin",
    age: 25,
    health: 100,
    maxHealth: 100,
    energy: 100,
    maxEnergy: 100,
    hunger: 0,
    money: 50,
    personality: ["BRAVE", "KIND"],
  };

  it("decides to EAT when hunger > 70", () => {
    const hungryNPC: NPC = { ...baseNPC, hunger: 80 };
    const action = decideAction(hungryNPC);
    expect(action.type).toBe("EAT");
  });

  it("decides to SEEK_HEALER when health < 30%", () => {
    const injuredNPC: NPC = { ...baseNPC, health: 20 };
    const action = decideAction(injuredNPC);
    expect(action.type).toBe("SEEK_HEALER");
  });

  it("decides to REST when energy < 20%", () => {
    const tiredNPC: NPC = { ...baseNPC, energy: 15 };
    const action = decideAction(tiredNPC);
    expect(action.type).toBe("REST");
  });

  it("decides to WORK when money < 10", () => {
    const poorNPC: NPC = { ...baseNPC, money: 5 };
    const action = decideAction(poorNPC);
    expect(action.type).toBe("WORK");
  });

  it("decides to EXPLORE when all needs are satisfied", () => {
    const action = decideAction(baseNPC);
    expect(action.type).toBe("EXPLORE");
  });

  it("returns 1 for personality trait the NPC has", () => {
    const score = getPersonalityScore(baseNPC, "BRAVE");
    expect(score).toBe(1);
  });

  it("returns 0 for personality trait the NPC doesn't have", () => {
    const score = getPersonalityScore(baseNPC, "GREEDY");
    expect(score).toBe(0);
  });
});
