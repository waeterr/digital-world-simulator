import type { GameEvent } from "./types";

type EventHandler<T extends GameEvent> = (event: T) => void;

type EventMap = {
  [K in GameEvent["type"]]: Extract<GameEvent, { type: K }>;
};

export class EventBus {
  private handlers: Map<string, EventHandler<GameEvent>[]> = new Map();

  on<T extends GameEvent["type"]>(
    eventType: T,
    handler: EventHandler<EventMap[T]>
  ): void {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
    }
    this.handlers.get(eventType)!.push(handler as EventHandler<GameEvent>);
  }

  off<T extends GameEvent["type"]>(
    eventType: T,
    handler: EventHandler<EventMap[T]>
  ): void {
    const handlers = this.handlers.get(eventType);
    if (!handlers) return;

    const index = handlers.indexOf(handler as EventHandler<GameEvent>);
    if (index > -1) {
      handlers.splice(index, 1);
    }
  }

  emit<T extends GameEvent>(event: T): void {
    const handlers = this.handlers.get(event.type);
    if (!handlers) return;

    handlers.forEach((handler) => handler(event));
  }

  clear(): void {
    this.handlers.clear();
  }
}
