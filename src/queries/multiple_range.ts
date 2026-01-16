import { Client } from '../client';
import Base from './base';
import type { PointJson } from '../type/point';
import { Point } from '../models/point';

export default class MultipleRange extends Base {
  private readonly baseList: string[] = [];
  private readonly upperMinute: number[] = [];
  private readonly upperTransferCount: number[] = [];
  private readonly plane: boolean = true;
  private readonly shinkansen: boolean = true;
  private readonly limitedExpress: boolean = true;
  private readonly waitAverageTime: boolean = true;
  private readonly includeBaseStation: boolean = false;
  private readonly limit: number | undefined;
  private readonly date: Date | undefined;
  
  constructor(client: Client) {
    super(client);
  }

  execute(): {
    points: Point[],
    base: Point,
  } {
    const params: Record<string, string | number> = {};
    if (this.baseList.length === 0)
      throw new Error('At least one base is required');
    params['baseList'] = this.baseList.join(':');
    if (this.upperMinute.length === 0)
      throw new Error('At least one upperMinute is required');
    params['upperMinute'] = this.upperMinute.join(':');
    if (this.upperTransferCount.length > 0) {
      params['upperTransferCount'] = this.upperTransferCount.join(':');
    }
    params['plane'] = this.plane ? 'true' : 'false';
    params['shinkansen'] = this.shinkansen ? 'true' : 'false';
    params['limitedExpress'] = this.limitedExpress ? 'true' : 'false';
    params['waitAverageTime'] = this.waitAverageTime ? 'true' : 'false';
    params['includeBaseStation'] = this.includeBaseStation ? 'true' : 'false';
    if (this.limit !== undefined) {
      params['limit'] = String(this.limit);
    }
    if (this.date) {
      params['date'] = `${Utilities.formatDate(this.date, 'JST', 'YYYYMMdd')}`;
    }
    const res = super._execute<{
      Point?: PointJson[] | PointJson;
      Base: {
        Point: PointJson;
      }
    }>('/search/multipleRange', params);

    const points: Point[] = [];
    if (res.Point) {
      const pointArray = Array.isArray(res.Point) ? res.Point : [res.Point];
      pointArray.forEach(point => points.push(new Point(point)));
    }
    const base = new Point(res.Base.Point);
    return {
      points,
      base,
    }
  }
}