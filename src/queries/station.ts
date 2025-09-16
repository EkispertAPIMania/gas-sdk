import { Client } from '../client';
import { Point } from '../models/point';
import type { PointJson } from '../type/point';
import Base from './base';

export default class Station extends Base {
  private readonly name: string | undefined;
  private readonly oldName: string | undefined;
  private readonly code: number | undefined;
  private readonly corporationName: string | undefined;
  private readonly railName: string | undefined;
  private readonly operationLineCode: string | undefined;
  private readonly types: string[] = [];
  private readonly prefectureCodes: number[] = [];
  private readonly offset: number = 1;
  private readonly limit: number = 100;
  private readonly direction: string = 'up';
  private readonly corporationBinds: string[] = [];
  private readonly addGateGroup: boolean = false;
  private readonly communityBus: string = 'contain';
  private readonly gcs: string = 'tokyo';

  constructor(client: Client) {
    super(client);
  }

  execute() {
    const params: Record<string, string | number> = {};

    if (this.name) params['name'] = this.name;
    if (this.oldName) params['oldName'] = this.oldName;
    if (this.code) params['code'] = String(this.code);
    if (this.corporationName) params['corporationName'] = this.corporationName;
    if (this.railName) params['railName'] = this.railName;
    if (this.operationLineCode) params['operationLineCode'] = this.operationLineCode;

    this.addArrayParams(params, 'type', this.types);

    if (this.prefectureCodes.length > 0) {
      params['prefectureCode'] = this.prefectureCodes.join(':');
    }

    params['offset'] = String(this.offset);
    params['limit'] = String(this.limit);
    params['direction'] = this.direction;

    this.addArrayParams(params, 'corporationBind', this.corporationBinds);
    this.addBooleanParams(params, 'addGateGroup', this.addGateGroup);
    params['communityBus'] = this.communityBus;
    params['gcs'] = this.gcs;

    const res = super._execute<{
      Point?: PointJson[] | PointJson;
      max?: number;
      offset?: number;
      RoundTripType?: string;
    }>('/station', params);

    const points: Point[] = [];
    if (res.Point) {
      const pointArray = Array.isArray(res.Point) ? res.Point : [res.Point];
      pointArray.forEach(point => points.push(new Point(point)));
    }

    return {
      points,
      max: parseInt(`${res.max}`, 10),
      offset: parseInt(`${res.offset}`, 10),
      roundTripType: res.RoundTripType
    };
  }
}