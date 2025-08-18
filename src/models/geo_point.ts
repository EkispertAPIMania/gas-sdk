import type { GeoPointJson } from "../type/geo_point"

export class GeoPoint {
  private longi: string | undefined
  private lati: string | undefined
  private longi_d: string | undefined
  private gcs: string | undefined
  private lati_d: string | undefined

  constructor(data: GeoPointJson) {
    this.sets(data);
  }

  sets(data: GeoPointJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "longi":
        this.longi = value;
        break;
      case "lati":
        this.lati = value;
        break;
      case "longi_d":
        this.longi_d = value;
        break;
      case "gcs":
        this.gcs = value;
        break;
      case "lati_d":
        this.lati_d = value;
        break;
      default:
        throw new Error(`Unknown key: ${key} in GeoPoint`);
    }
  }
}
