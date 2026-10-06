import { SimulationClock, SimulationSpeed } from "@nexus/types";

export function createClock(): SimulationClock {
  return {
    currentTick: 0,
    speed: 1,
    status: "IDLE",
  };
}

export function tick(clock: SimulationClock): SimulationClock {
  if (clock.status !== "RUNNING") {
    return clock;
  }
  
  return {
    ...clock,
    currentTick: clock.currentTick + 1,
  };
}

export function pause(clock: SimulationClock): SimulationClock {
  return {
    ...clock,
    status: "PAUSED",
  };
}

export function resume(clock: SimulationClock): SimulationClock {
  return {
    ...clock,
    status: "RUNNING",
  };
}

export function setSpeed(clock: SimulationClock, speed: SimulationSpeed): SimulationClock {
  return {
    ...clock,
    speed,
  };
}
