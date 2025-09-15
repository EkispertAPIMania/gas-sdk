import type { StationJson } from "../type/station";
import { GateGroup } from "./gate_group";

export class Station {
  private code: string | undefined
  private name: string | undefined
  private oldName: string | undefined
  private type: string | { text: string; detail: string } | undefined
  private yomi: string | undefined
  private gateGroup: GateGroup | undefined

  constructor(data: StationJson) {
    this.sets(data);
  }

  sets(data: StationJson) {
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
      case "oldname":
        this.oldName = value;
        break;
      case "type":
        this.type = value;
        break;
      case "yomi":
        this.yomi = value;
        break;
      case "gategroup":
        this.gateGroup = new GateGroup(value);
        break;
      default:
        throw new Error(`Unknown key: ${key} in Station`);
    }
  }
}
