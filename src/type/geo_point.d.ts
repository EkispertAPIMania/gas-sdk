export interface GeoPointJson {
  longi: string
  lati: string
  longi_d: string
  gcs: string
  lati_d: string
}

export interface GeoPointParams {
  latitude: number
  longitude: number
  gcs?: string
  radius?: number
}