import type { GateGroupJson } from "../type/gate_group";
import { Gate } from "./gate";

export class GateGroup {
  private gates: Gate[] = []

  constructor(data: GateGroupJson) {
    this.sets(data);
  }

  sets(data: GateGroupJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "gate":
        if (Array.isArray(value)) {
          this.gates = value.map(g => new Gate(g));
        } else {
          this.gates = [new Gate(value)];
        }
        break;
      default:
        throw new Error(`Unknown key: ${key} in GateGroup`);
    }
  }
}