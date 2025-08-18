import type { GeoPointJson } from "./geo_point";
import type { PrefectureJson } from "./prefecture";
import type { StationJson } from "./station";

export interface PointJson {
  Station: StationJson
  Prefecture: PrefectureJson
  GeoPoint: GeoPointJson
}
