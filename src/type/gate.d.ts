import type { GeoPointJson } from "./geo_point";

export interface GateJson {
  code: string
  Name: string
  GeoPoint?: GeoPointJson
}