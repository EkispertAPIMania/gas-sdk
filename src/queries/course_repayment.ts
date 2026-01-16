import { Client } from '../client';
import type { RepaymentListJson } from '../type/repayment_list';
import { RepaymentList } from '../models/repayment_list';
import Base from './base';
import { TeikiRoute } from '../models/teiki_route';
import type { TeikiRouteJson } from '../type/teiki_route';

export default class CourseRepayment extends Base {

  private readonly serializeData: string | undefined;
  private readonly checkEngineVersion: boolean = true;
  private readonly startDate: Date | undefined;
  private readonly buyDate: Date | undefined;
  private readonly repaymentDate: Date | undefined;
  private readonly validityPeriod: number = 6;
  private readonly changeSection: boolean = false;
  private readonly separator: string[] = [];

  constructor(client: Client) {
    super(client);
  }

  execute(): {
    teikiRoute: TeikiRoute;
    repaymentList: RepaymentList;
  } | null {
    if (!this.serializeData) {
      throw new Error('serializeData is required');
    }

    const params: Record<string, string | number> = {};
    params['serializeData'] = this.serializeData;
    params['checkEngineVersion'] = this.checkEngineVersion ? 'true' : 'false';

    if (this.startDate)
      params['startDate'] = `${Utilities.formatDate(this.startDate, 'JST', 'YYYYMMdd')}`;

    if (this.buyDate)
      params['buyDate'] = `${Utilities.formatDate(this.buyDate, 'JST', 'YYYYMMdd')}`;

    if (this.repaymentDate)
      params['repaymentDate'] = `${Utilities.formatDate(this.repaymentDate, 'JST', 'YYYYMMdd')}`;

    params['validityPeriod'] = String(this.validityPeriod);
    params['changeSection'] = this.changeSection ? 'true' : 'false';
    if (this.separator.length > 0) {
      params['separator'] = this.separator.join(',');
    }
    const res = super._execute<{
      RepaymentList: RepaymentListJson;
      TeikiRoute: TeikiRouteJson;
    }>('/course/repayment', params);
    if (!res.RepaymentList && !res.TeikiRoute) return null;
    
    return {
      teikiRoute: new TeikiRoute(res.TeikiRoute),
      repaymentList: new RepaymentList(res.RepaymentList),
    };
  }
}