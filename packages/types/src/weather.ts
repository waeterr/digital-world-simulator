export type WeatherType =
  | "SUNNY"
  | "CLOUDY"
  | "RAIN"
  | "STORM"
  | "SNOW"
  | "FOG"
  | "DROUGHT";

export type Weather = {
  type: WeatherType;
  temperature: number;
  humidity: number;
};