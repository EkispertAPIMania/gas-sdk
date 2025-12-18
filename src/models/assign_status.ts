import type { GateJson } from "../type/gate";
import { GeoPoint } from "./geo_point";

export class AssignStatus {
  private kind: string | undefined
  private code: number | undefined
  private requireUpdate: number | undefined

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
        this.code = parseInt(value);
        break;
      case "kind":
        this.kind = value;
        break;
      case "requireupdate":
        this.requireUpdate = parseInt(value);
        break;
      default:
        throw new Error(`Unknown key: ${key} in AssignStatus`);
    }
  }
}