import type { NPC } from "@nexus/types";

export function damageNPC(npc: NPC, damage: number): NPC {
  const newHealth = Math.max(0, npc.health - damage);
  return {
    ...npc,
    health: newHealth,
  };
}

export function healNPC(npc: NPC, amount: number): NPC {
  const newHealth = Math.min(npc.maxHealth, npc.health + amount);
  return {
    ...npc,
    health: newHealth,
  };
}

export function feedNPC(npc: NPC, foodAmount: number): NPC {
  const newHunger = Math.max(0, npc.hunger - foodAmount);
  return {
    ...npc,
    hunger: newHunger,
  };
}

export function moveNPC(npc: NPC, regionId: string): NPC {
  return {
    ...npc,
    regionId,
  };
}

export function addMoney(npc: NPC, amount: number): NPC {
  return {
    ...npc,
    money: npc.money + amount,
  };
}
