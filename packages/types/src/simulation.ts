export type SimulationSpeed = 1 | 2 | 5 | 10 | 50;

export type SimulationStatus = "IDLE" | "RUNNING" | "PAUSED";

export type SimulationClock = {
  currentTick: number;
  speed: SimulationSpeed;
  status: SimulationStatus;
};