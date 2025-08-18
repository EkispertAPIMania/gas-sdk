import type { LineJson } from "./line";
import type { PointJson } from "./point";

export interface RouteJson {
  timeOther: string
  timeOnBoard: string
  exhaustCO2: string
  exhaustCO2atPassengerCar: string
  distance: string
  timeWalk: string
  transferCount: string
  Line: LineJson[]
  Point: PointJson[]
}
