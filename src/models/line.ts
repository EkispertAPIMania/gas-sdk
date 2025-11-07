import type { LineJson } from "../type/line"
import { LineSymbol } from "./line_symbol"
import { State } from "./state"

export class Line {
  private direction: string | undefined
  private stopStationCount: string | undefined
  private teiki3Index: string | undefined
  private teiki12Index: string | undefined
  private teiki6Index: string | undefined
  private timeOnBoard: string | undefined
  private exhaustCO2: string | undefined
  private fareIndex: string | undefined
  private exhaustCO2atPassengerCar: string | undefined
  private distance: string | undefined
  private teiki1Index: string | undefined
  private name: string | undefined
  private type: string | undefined
  private arrivalState: State | undefined
  private typicalName: string | undefined
  private timeReliability: string | undefined
  private departureState: State | undefined
  private lineSymbol: LineSymbol | undefined
  private color: string | undefined
  private chargeIndex: string | undefined
  private track: string | undefined
  private cars: string | undefined
  private trainId: string | undefined
  private destination: string | undefined
  private number: string | undefined

  constructor(data: LineJson) {
    this.sets(data);
  }

  sets(data: LineJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "direction":
        this.direction = value;
        break;
      case "stopstationcount":
        this.stopStationCount = value;
        break;
      case "teiki3index":
        this.teiki3Index = value;
        break;
      case "teiki12index":
        this.teiki12Index = value;
        break;
      case "teiki6index":
        this.teiki6Index = value;
        break;
      case "timeonboard":
        this.timeOnBoard = value;
        break;
      case "exhaustco2":
        this.exhaustCO2 = value;
        break;
      case "fareindex":
        this.fareIndex = value;
        break;
      case "exhaustco2atpassengercar":
        this.exhaustCO2atPassengerCar = value;
        break;
      case "distance":
        this.distance = value;
        break;
      case "teiki1index":
        this.teiki1Index = value;
        break;
      case "name":
        this.name = value;
        break;
      case "type":
        this.type = value;
        break;
      case "arrivalstate":
        this.arrivalState = new State(value);
        break;
      case "typicalname":
        this.typicalName = value;
        break;
      case "timereliability":
        this.timeReliability = value;
        break;
      case "departurestate":
        this.departureState = new State(value);
        break;
      case "linesymbol":
        this.lineSymbol = new LineSymbol(value);
        break;
      case "color":
        this.color = value;
        break;
      case "chargeindex":
        this.chargeIndex = value;
        break;
      case "track":
        this.track = value;
        break;
      case "cars":
        this.cars = value;
        break;
      case "trainid":
        this.trainId = value;
        break;
      case "destination":
        this.destination = value;
        break;
      case "number":
        this.number = value;
        break;
      default:
        throw new Error(`Unknown key: ${key} in Line`);
    }
  }
}
