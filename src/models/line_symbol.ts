import type { LineSymbolJson } from "../type/line_symbol";

export class LineSymbol {
  private code: string | undefined
  private name: string | undefined

  constructor(data: LineSymbolJson) {
    this.sets(data);
  }

  sets(data: LineSymbolJson) {
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
      default:
        throw new Error(`Unknown key: ${key} in LineSymbol`);
    }
  }
}
