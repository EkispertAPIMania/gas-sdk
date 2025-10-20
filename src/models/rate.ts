import type { RateJson } from '../type/rate';

export class Rate {
  private text: string | undefined;
  private area: string | undefined;

  constructor(data: RateJson) {
    this.sets(data);
  }

  sets(data: RateJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "text":
        this.text = value;
        break;
      case "area":
        this.area = value;
        break;
      default:
        throw new Error(`Unknown key: ${key} in Rate`);
    }
  }
}
