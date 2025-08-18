import type { StationJson } from "../type/station";

export class Station {
  private code: string | undefined
  private name: string | undefined
  private type: string | undefined
  private yomi: string | undefined

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
      case "type":
        this.type = value;
        break;
      case "yomi":
        this.yomi = value;
        break;
      default:
        throw new Error(`Unknown key: ${key} in Station`);
    }
  }
}
