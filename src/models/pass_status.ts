import type { PassStatusJson } from "../type/pass_status";

export class PassStatus {
  private teiki3Index: string | undefined;
  private toLineIndex: string | undefined;
  private teiki6Index: string | undefined;
  private fromLineIndex: string | undefined;
  private kind: string | undefined;
  private selected: string | undefined;
  private teiki1Index: string | undefined;
  private name: string | undefined;
  private type: string | undefined;
  private comment: string | undefined;

  constructor(data: PassStatusJson) {
    this.sets(data);
  }

  sets(data: PassStatusJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "teiki3index":
        this.teiki3Index = value;
        break;
      case "tolineindex":
        this.toLineIndex = value;
        break;
      case "teiki6index":
        this.teiki6Index = value;
        break;
      case "fromlineindex":
        this.fromLineIndex = value;
        break;
      case "kind":
        this.kind = value;
        break;
      case "selected":
        this.selected = value;
        break;
      case "teiki1index":
        this.teiki1Index = value;
        break;
      case "name":
        this.name = value;
        break;
      case "type":
        this.type = value;
        break;
      case "comment":
        this.comment = value;
        break;
      default:
        throw new Error(`Unknown key: ${key} in PassStatus`);
    }
  }

}