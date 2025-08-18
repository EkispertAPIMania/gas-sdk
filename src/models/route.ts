import type { RouteJson } from "../type/route"
import { Line } from "./line"
import { Point } from "./point"

export class Route {
  private timeOther: string | undefined
  private timeOnBoard: string | undefined
  private exhaustCo2: string | undefined
  private exhaustCo2atPassengerCar: string | undefined
  private distance: string | undefined
  private timeWalk: string | undefined
  private transferCount: string | undefined
  private lines: Line[] = []
  private points: Point[] = []

  constructor(data: RouteJson) {
    this.sets(data);
  }

  sets(data: RouteJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "timeother":
        this.timeOther = value;
        break;
      case "timeonboard":
        this.timeOnBoard = value;
        break;
      case "exhaustco2":
        this.exhaustCo2 = value;
        break;
      case "exhaustco2atpassengercar":
        this.exhaustCo2atPassengerCar = value;
        break;
      case "distance":
        this.distance = value;
        break;
      case "timewalk":
        this.timeWalk = value;
        break;
      case "transfercount":
        this.transferCount = value;
        break;
      case "line":
        this.lines = (Array.isArray(value) ? value : [value]).map(item => new Line(item));
        break;
      case "point":
        this.points = (Array.isArray(value) ? value : [value]).map(item => new Point(item));
        break;
      default:
        throw new Error(`Unknown key: ${key} in Route`);
    }
  }
}
