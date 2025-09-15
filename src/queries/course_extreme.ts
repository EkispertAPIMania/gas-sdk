import { Client } from '../client';
import { Course } from '../models/course';
import type { CourseJson } from '../type/course';
import Base from './base';

export default class CourseExtreme extends Base {
  private readonly viaList: string[] = [];
  private readonly excludeSameLineStation: boolean | undefined;
  private readonly fixedRailList: string[] = [];
  private readonly fixedRailDirectionList: string[] = [];
  private readonly date: Date = new Date();
  private readonly searchType: string = 'departure';
  private readonly sort: string = 'ekispert';
  private readonly answerCount: number = 5;
  private readonly searchCount: number = 5;
  private readonly conditionDetails: string[] = [];
  private readonly corporationBinds: string[] = [];
  private readonly interruptCorporationList: string[] = [];
  private readonly interruptRailList: string[] = [];
  private readonly interruptOperationLineCodeList: string[] = [];
  private readonly interruptTransferStationCodeList: string[] = [];
  private readonly resultDetail: string | undefined;
  private readonly addOperationLinePattern: boolean | undefined;
  private readonly checkEngineVersion: boolean | undefined;
  private readonly assignTeikiSerializeData: string | undefined;
  private readonly assignRoutes: string[] = [];
  private readonly assignDetailRoutes: string[] = [];
  private readonly offpeakTeikiMode: string | undefined;
  private readonly assignPassClassIndex: number | undefined;
  private readonly coupon: string | undefined;
  private readonly bringAssignmentError: boolean | undefined;
  private readonly addAssignStatus: boolean | undefined;
  private readonly addChange: boolean | undefined;
  private readonly addStop: boolean | undefined;
  private readonly addSeatType: boolean | undefined;
  private readonly gcs: string;
  constructor(client: Client) {
    super(client);
    this.conditionDetails = 'T32212332323191:F332112212000010:A23121141:'.split(':');
    this.gcs = 'tokyo';
  }

  execute() {
    const params: Record<string, string | number> = {};
    this.addArrayParams(params, 'viaList', this.viaList);
    this.addArrayParams(params, 'conditionDetail', this.conditionDetails);
    this.addBooleanParams(params, 'excludeSameLineStation', this.excludeSameLineStation);
    this.addArrayParams(params, 'fixedRailList', this.fixedRailList);
    this.addArrayParams(params, 'fixedRailDirectionList', this.fixedRailDirectionList);
    if (this.date) {
      params['date'] = `${Utilities.formatDate(this.date, 'JST', 'YYYYMMdd')}`;
      params['time'] = `${Utilities.formatDate(this.date, 'JST', 'HHmm')}`;
    }
    params['searchType'] = this.searchType;
    params['sort'] = this.sort;
    params['answerCount'] = String(this.answerCount);
    params['searchCount'] = String(this.searchCount);
    this.addArrayParams(params, 'corporationBind', this.corporationBinds);
    this.addArrayParams(params, 'interruptCorporationList', this.interruptCorporationList);
    this.addArrayParams(params, 'interruptRailList', this.interruptRailList);
    this.addArrayParams(params, 'interruptOperationLineCodeList', this.interruptOperationLineCodeList);
    this.addArrayParams(params, 'interruptTransferStationCodeList', this.interruptTransferStationCodeList);
    if (this.resultDetail) params['resultDetail'] = this.resultDetail;
    this.addBooleanParams(params, 'addOperationLinePattern', this.addOperationLinePattern);
    this.addBooleanParams(params, 'checkEngineVersion', this.checkEngineVersion);
    if (this.assignTeikiSerializeData) params['assignTeikiSerializeData'] = this.assignTeikiSerializeData;
    this.addArrayParams(params, 'assignRoute', this.assignRoutes);
    this.addArrayParams(params, 'assignDetailRoute', this.assignDetailRoutes);
    if (this.offpeakTeikiMode) params['offpeakTeikiMode'] = this.offpeakTeikiMode;
    if (typeof this.assignPassClassIndex === 'number') {
      params['assignPassClassIndex'] = String(this.assignPassClassIndex);
    }
    if (this.coupon) params['coupon'] = this.coupon;
    this.addBooleanParams(params, 'bringAssignmentError', this.bringAssignmentError);
    this.addBooleanParams(params, 'addAssignStatus', this.addAssignStatus);
    this.addBooleanParams(params, 'addChange', this.addChange);
    this.addBooleanParams(params, 'addStop', this.addStop);
    this.addBooleanParams(params, 'addSeatType', this.addSeatType);
    params['gcs'] = this.gcs;
    const res = super._execute<{ Course: CourseJson[] | CourseJson}>('/search/course/extreme', params);
    return (Array.isArray(res.Course) ? res.Course : [res.Course]).map(course => new Course(course));
  }
}