export type NPCGoal = "EAT" | "REST" | "HEAL" | "WORK" | "EXPLORE";

export type NPCAction =
  | { type: "EAT" }
  | { type: "REST" }
  | { type: "SEEK_HEALER" }
  | { type: "WORK" }
  | { type: "EXPLORE" };
