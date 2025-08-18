import type { DatetimeJson } from "../type/datetime"

export class Datetime {
  private text: string | undefined
  private operation: string | undefined

  constructor(data: DatetimeJson) {
    this.sets(data);
  }

  sets(data: DatetimeJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "text":
        this.text = value;
        break;
      case "operation":
        this.operation = value;
        break;
      default:
        throw new Error(`Unknown key: ${key} in Datetime`);
    }
  }
}
