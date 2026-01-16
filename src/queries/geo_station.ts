import { Client } from '../client';
import { Point } from '../models/point';
import type { PointJson } from '../type/point';
import type { GeoPointParams } from '../type/geo_point';
import Base from './base';

export default class GeoSation extends Base {
  private readonly name: string | undefined;
  private geoPoint:	string | undefined;
  private readonly type:	string | undefined;
  private readonly corporationBinds: string[] = [];
  private readonly addGateGroup: boolean = false;
  private readonly excludeSameLineStation: boolean = false;
  private readonly stationCount: number = 0;
  private readonly communityBus: string = 'contain';
  private readonly gcs: string = 'tokyo';
  
  constructor(client: Client) {
    super(client);
  }

  setGeoPoint(geoPoint: GeoPointParams) {
    const parts: string[] = [];
    parts.push(`${geoPoint.latitude},${geoPoint.longitude}`);
    if (geoPoint.gcs) {
      parts.push(geoPoint.gcs);
    }
    if (geoPoint.radius) {
      parts.push(String(geoPoint.radius));
    }
    if (parts.length > 0) {
      this.geoPoint = parts.join(',');
      parts.push(this.gcs);
    }
  }

  execute(): Point[] {
    const params: Record<string, string | number> = {};
    if (!this.geoPoint) {
      throw new Error('GeoPoint is required');
    }
    params['geoPoint'] = this.geoPoint;
    if (this.type) params['type'] = this.type;
    this.addArrayParams(params, 'corporationBind', this.corporationBinds);
    params['addGateGroup'] = this.addGateGroup ? 'true' : 'false';
    params['excludeSameLineStation'] = this.excludeSameLineStation ? 'true' : 'false';
    params['stationCount'] = String(this.stationCount);
    params['communityBus'] = this.communityBus;
    params['gcs'] = this.gcs;
    const res = super._execute<{
      Point?: PointJson[] | PointJson;
    }>('/geo/station', params);

    const points: Point[] = [];
    if (res.Point) {
      const pointArray = Array.isArray(res.Point) ? res.Point : [res.Point];
      pointArray.forEach(point => points.push(new Point(point)));
    }
    return points;
  }
}