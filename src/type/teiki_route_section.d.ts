import type { PointJson } from "./point";

export interface TeikiRouteSectionJson {
  repaymentTicketIndex: string;
  Point: PointJson[] | PointJson;
}