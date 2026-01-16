import type { CostJson } from "../type/cost";

export class Cost {
  private baseIndex: number | undefined
  private minute: number | undefined
  private transferCount: number | undefined
  
  constructor(data: CostJson) {
    this.sets(data);
  }

  sets(data: CostJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "baseindex":
        this.baseIndex = Number(value);
        break;
      case "minute":
        this.minute = Number(value);
        break;
      case "transfercount":
        this.transferCount = Number(value);
        break;
      default:
        throw new Error(`Unknown key: ${key} in Cost`);
    }
  }
}