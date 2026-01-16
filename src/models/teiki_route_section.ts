import type { TeikiRouteSectionJson } from "../type/teiki_route_section";
import { Point } from "./point";

export class TeikiRouteSeciton {
  private repaymentTicketIndex: string | undefined;
  private points: Point[] = [];

  constructor(data: TeikiRouteSectionJson) {
    this.sets(data);
  }

  sets(data: TeikiRouteSectionJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "repaymentticketindex":
        this.repaymentTicketIndex = value;
        break;
      case "point":
        this.points = (Array.isArray(value) ? value : [value]).map(item => new Point(item));
        break;
      default:
        throw new Error(`Unknown key: ${key} in TeikiRouteSection`);
    }
  }
}