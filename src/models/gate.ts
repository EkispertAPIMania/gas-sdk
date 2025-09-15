import type { GateJson } from "../type/gate";
import { GeoPoint } from "./geo_point";

export class Gate {
  private code: string | undefined
  private name: string | undefined
  private geoPoint: GeoPoint | undefined

  constructor(data: GateJson) {
    this.sets(data);
  }

  sets(data: GateJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "code":
        this.code = value;
        break;
      case "name":
        this.name = value;
        break;
      case "geopoint":
        this.geoPoint = new GeoPoint(value);
        break;
      default:
        throw new Error(`Unknown key: ${key} in Gate`);
    }
  }
}