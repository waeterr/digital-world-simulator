export type BaseEvent = {
  timestamp: number;
  tick: number;
};

export type NPCCreatedEvent = BaseEvent & {
  type: "NPC_CREATED";
  npcId: string;
  npcName: string;
  regionId: string;
};

export type NPCMovedEvent = BaseEvent & {
  type: "NPC_MOVED";
  npcId: string;
  fromRegionId: string;
  toRegionId: string;
};

export type NPCDiedEvent = BaseEvent & {
  type: "NPC_DIED";
  npcId: string;
  cause: string;
};

export type NPCDamagedEvent = BaseEvent & {
  type: "NPC_DAMAGED";
  npcId: string;
  damage: number;
  remainingHealth: number;
};

export type NPCHealedEvent = BaseEvent & {
  type: "NPC_HEALED";
  npcId: string;
  amount: number;
  currentHealth: number;
};

export type ItemCreatedEvent = BaseEvent & {
  type: "ITEM_CREATED";
  itemId: string;
  itemName: string;
};

export type ItemConsumedEvent = BaseEvent & {
  type: "ITEM_CONSUMED";
  itemId: string;
  npcId: string;
};

export type WeatherChangedEvent = BaseEvent & {
  type: "WEATHER_CHANGED";
  oldWeather: string;
  newWeather: string;
  regionId?: string;
};

export type ResourceDiscoveredEvent = BaseEvent & {
  type: "RESOURCE_DISCOVERED";
  resourceName: string;
  regionId: string;
  amount: number;
};

export type TradeCompletedEvent = BaseEvent & {
  type: "TRADE_COMPLETED";
  buyerId: string;
  sellerId: string;
  itemId: string;
  price: number;
};

export type GameEvent =
  | NPCCreatedEvent
  | NPCMovedEvent
  | NPCDiedEvent
  | NPCDamagedEvent
  | NPCHealedEvent
  | ItemCreatedEvent
  | ItemConsumedEvent
  | WeatherChangedEvent
  | ResourceDiscoveredEvent
  | TradeCompletedEvent;
