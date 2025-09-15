import type { GateGroupJson } from "./gate_group";

export interface StationJson {
  code: string
  Name: string
  OldName?: string
  Type?: string | { text: string; detail: string }
  Yomi?: string
  GateGroup?: GateGroupJson
}
