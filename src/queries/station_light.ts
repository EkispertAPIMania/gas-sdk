import { Client } from '../client';
import { Point } from '../models/point';
import type { PointJson } from '../type/point';
import Base from './base';

export default class StationLight extends Base {
  private readonly name: string | undefined;
  private readonly nameMatchType: string = 'forward';
  private readonly code: number | undefined;
  private readonly types: string[] = [];
  private readonly prefectureCodes: number[] = [];
  private readonly corporationBinds: string[] = [];
  private readonly communityBus: string = 'contain';

  constructor(client: Client) {
    super(client);
  }

  execute() {
    const params: Record<string, string | number> = {};

    if (this.name) {
      params['name'] = this.name;
      params['nameMatchType'] = this.nameMatchType;
    }
    if (this.code) params['code'] = String(this.code);

    this.addArrayParams(params, 'type', this.types);

    if (this.prefectureCodes.length > 0) {
      params['prefectureCode'] = this.prefectureCodes.join(':');
    }

    this.addArrayParams(params, 'corporationBind', this.corporationBinds);
    params['communityBus'] = this.communityBus;

    const res = super._execute<{
      Point?: PointJson[] | PointJson;
    }>('/station/light', params);

    const points: Point[] = [];
    if (res.Point) {
      const pointArray = Array.isArray(res.Point) ? res.Point : [res.Point];
      pointArray.forEach(point => points.push(new Point(point)));
    }

    return points;
  }
}