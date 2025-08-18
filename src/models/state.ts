import type { StateJson } from "../type/state"
import { Datetime } from "./datetime"

export class State {
  private type: string | undefined
  private datetime: Datetime | undefined

  constructor(data: StateJson) {
    this.sets(data);
  }

  sets(data: StateJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "type":
        this.type = value;
        break;
      case "datetime":
        this.datetime = new Datetime(value);
        break;
      default:
        throw new Error(`Unknown key: ${key} in State`);
    }
  }
}
