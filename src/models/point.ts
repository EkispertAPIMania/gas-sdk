import type { PointJson } from "../type/point"
import { GeoPoint } from "./geo_point"
import { Prefecture } from "./prefecture"
import { Station } from "./station"
import { Cost } from "./cost"

export class Point {
  private station: Station | undefined
  private prefecture: Prefecture | undefined
  private geoPoint: GeoPoint | undefined
  private getOn: boolean | undefined
  private getOff: boolean | undefined
  private onRoute: boolean | undefined
  private onRouteEdge: boolean | undefined
  private distance: string | undefined
  private cost: Cost | undefined

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
      case "geton":
        this.getOn = value === 'True' ? true : false;
        break;
      case "getoff":
        this.getOff = value === 'True' ? true : false;
        break;
      case "onroute":
        this.onRoute = value === 'True' ? true : false;
        break;
      case "onrouteedge":
        this.onRouteEdge = value === 'True' ? true : false;
        break;
      case "distance":
        this.distance = value;
        break;
      case "cost":
        this.cost = new Cost(value);
        break;
      default:
        throw new Error(`Unknown key: ${key} in Point`);
    }
  }
}
