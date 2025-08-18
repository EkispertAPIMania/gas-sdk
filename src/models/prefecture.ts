import type { PrefectureJson } from "../type/prefecture";

export class Prefecture {
  private code: string | undefined
  private name: string | undefined

  constructor(data: PrefectureJson) {
    this.sets(data);
  }

  sets(data: PrefectureJson) {
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
        throw new Error(`Unknown key: ${key} in Prefecture`);
    }
  }
}
