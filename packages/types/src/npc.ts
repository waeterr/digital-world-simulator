export type PersonalityTrait =
  | "BRAVE"
  | "COWARD"
  | "GREEDY"
  | "KIND"
  | "CURIOUS"
  | "AGGRESSIVE"
  | "LAZY"
  | "HARDWORKING";

export type NPC = {
  readonly id: string;
  worldId: string;
  regionId: string;
  name: string;
  age: number;
  occupation?: string;
  health: number;
  maxHealth: number;
  energy: number;
  maxEnergy: number;
  hunger: number;
  money: number;
  personality: PersonalityTrait[];
};