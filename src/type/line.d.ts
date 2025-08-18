import type { LineSymbolJson } from "./line_symbol";
import type { StateJson } from "./state";

export interface LineJson {
  direction: string
  stopStationCount: string
  teiki3Index?: string
  teiki12Index?: string
  teiki6Index?: string
  timeOnBoard: string
  exhaustCO2: string
  fareIndex?: string
  exhaustCO2atPassengerCar: string
  distance: string
  teiki1Index?: string
  Name: string
  Type: string
  ArrivalState: StateJson
  TypicalName: string
  TimeReliability: string
  DepartureState: StateJson
  LineSymbol?: LineSymbolJson
  Color: string
  chargeIndex?: string
}
