import { PriceJson } from "./price";
import { TeikiJson } from "./teiki";
import { RouteJson } from "./route";
import { PassStatusJson } from "./pass_status";

export interface CourseJson {
  searchType: string
  dataType: string
  SerializeData: string
  Price: PriceJson[]
  Teiki: TeikiJson
  Route: RouteJson
  PassStatus?: PassStatusJson[]
}

