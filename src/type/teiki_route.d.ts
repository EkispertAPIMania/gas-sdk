import type { TeikiRouteSectionJson } from "./teiki_route_section";
export interface TeikiRouteJson {
  SectionSeparator: {
    divided: string;
    changeable: string;
  }
  TeikiRouteSection: TeikiRouteSectionJson[] | TeikiRouteSectionJson;
}