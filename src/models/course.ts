import type { CourseJson } from "../type/course";
import { PassStatus } from "./pass_status";
import { Price } from "./price";
import { Route } from "./route";
import { Teiki } from "./teiki";


export class Course {
  private searchType: string | undefined;
  private dataType: string | undefined;
  private serializeData: string | undefined;
  private prices: Price[] = [];
  private teiki: Teiki | undefined;
  private routes: Route[] = [];
  private passStatuses: PassStatus[] = [];

  constructor(data: CourseJson) {
    this.sets(data);
  }
  sets(data: CourseJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    })
  }

  set(key: string, value: any) {
    if (value === null || value === undefined) {
      return;
    }
    switch (key.toLocaleLowerCase()) {
      case "searchtype":
        this.searchType = value;
        break;
      case "datatype":
        this.dataType = value;
        break;
      case "serializedata":
        this.serializeData = value;
        break;
      case "price":
        this.prices = (Array.isArray(value) ? value : [value]).map(item => new Price(item));
        break;
      case "teiki":
        this.teiki = new Teiki(value);
        break;
      case "route":
        this.routes = (Array.isArray(value) ? value : [value]).map(item => new Route(item));
        break;
      case "passstatus":
        this.passStatuses = (Array.isArray(value) ? value : [value]).map(item => new PassStatus(item));
        break;
      default:
        throw new Error(`Unknown key: ${key} in Course`);
    }
  }
}

