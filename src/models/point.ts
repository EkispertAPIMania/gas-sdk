import type { PointJson } from "../type/point"
import { GeoPoint } from "./geo_point"
import { Prefecture } from "./prefecture"
import { Station } from "./station"

export class Point {
  private station: Station | undefined
  private prefecture: Prefecture | undefined
  private geoPoint: GeoPoint | undefined

  constructor(data: PointJson) {
    this.sets(data);
  }

  sets(data: PointJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "station":
        this.station = new Station(value);
        break;
      case "prefecture":
        this.prefecture = new Prefecture(value);
        break;
      case "geopoint":
        this.geoPoint = new GeoPoint(value);
        break;
      default:
        throw new Error(`Unknown key: ${key} in Point`);
    }
  }
}
