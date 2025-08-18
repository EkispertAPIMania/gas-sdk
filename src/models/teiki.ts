import type { TeikiJson } from "../type/teiki";

export class Teiki {
  private serializeData: string | undefined
  private detailRoute: string | undefined
  private displayRoute: string | undefined

  constructor(data: TeikiJson) {
    this.sets(data);
  }

  sets(data: TeikiJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "serializedata":
        this.serializeData = value;
        break;
      case "detailroute":
        this.detailRoute = value;
        break;
      case "displayroute":
        this.displayRoute = value;
        break;
      default:
        throw new Error(`Unknown key: ${key} in Teiki`);
    }
  }
}

