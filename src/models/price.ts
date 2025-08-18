import type { PriceJson } from "../type/price"

export class Price {
  private fareRevisionStatus: string | undefined
  private toLineIndex: string | undefined
  private fromLineIndex: string | undefined
  private kind: string | undefined
  private index: string | undefined
  private selected: string | undefined
  private type: string | undefined
  private oneway: string | undefined
  private revisionStatus: string | undefined
  private round: string | undefined
  private passClassIndex: string | undefined
  private name: string | undefined
  private vehicleIndex: string | undefined

  constructor(data: PriceJson) {
    this.sets(data);
  }

  sets(data: PriceJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "farerevisionstatus":
        this.fareRevisionStatus = value;
        break;
      case "tolineindex":
        this.toLineIndex = value;
        break;
      case "fromlineindex":
        this.fromLineIndex = value;
        break;
      case "kind":
        this.kind = value;
        break;
      case "index":
        this.index = value;
        break;
      case "selected":
        this.selected = value;
        break;
      case "type":
        this.type = value;
        break;
      case "oneway":
        this.oneway = value;
        break;
      case "revisionstatus":
        this.revisionStatus = value;
        break;
      case "round":
        this.round = value;
        break;
      case "passclassindex":
        this.passClassIndex = value;
        break;
      case "name":
        this.name = value;
        break;
      case "vehicleindex":
        this.vehicleIndex = value;
        break;
      default:
        throw new Error(`Unknown key: ${key} in Price`);
    }
  }
}
