import type { TeikiRouteJson } from "../type/teiki_route";
import { TeikiRouteSeciton } from "./teiki_route_section";

export class SectionSeparator {
  divided: boolean | undefined
  changeable: boolean | undefined
}

export class TeikiRoute {
  private sectionSeparator: SectionSeparator | undefined;
  private teikiRouteSections: TeikiRouteSeciton[] = [];

  constructor(data: TeikiRouteJson) {
    this.sets(data);
  }

  sets(data: TeikiRouteJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "sectionseparator":
        this.sectionSeparator = {
          divided: value.divided.toLocaleLowerCase() === 'true' ? true : false,
          changeable: value.changeable.toLocaleLowerCase() === 'true' ? true : false,
        };
        break;
      case "teikiroutesection":
        this.teikiRouteSections = (Array.isArray(value) ? value : [value]).map(item => new TeikiRouteSeciton(item));
        break;
      default:
        throw new Error(`Unknown key: ${key} in TeikiRoute`);
    }
  }
}