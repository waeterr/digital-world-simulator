import { describe, expect, it, vi } from "vitest";
import { EventBus } from "../packages/events/src";

describe("EventBus", () => {
  it("calls only handlers for the emitted event type", () => {
    const eventBus = new EventBus();
    const handler = vi.fn();

    eventBus.on("NPC_MOVED", handler);
    eventBus.emit({
      type: "NPC_MOVED",
      timestamp: 1,
      tick: 2,
      npcId: "npc-1",
      fromRegionId: "forest",
      toRegionId: "village",
    });

    expect(handler).toHaveBeenCalledOnce();
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({ type: "NPC_MOVED", npcId: "npc-1" })
    );
  });

  it("removes a handler with off", () => {
    const eventBus = new EventBus();
    const handler = vi.fn();

    eventBus.on("NPC_DIED", handler);
    eventBus.off("NPC_DIED", handler);
    eventBus.emit({
      type: "NPC_DIED",
      timestamp: 1,
      tick: 2,
      npcId: "npc-1",
      cause: "hunger",
    });

    expect(handler).not.toHaveBeenCalled();
  });
});
