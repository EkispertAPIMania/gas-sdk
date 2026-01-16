import CourseExtreme from "./queries/course_extreme.js";
import Station from "./queries/station.js";
import StationLight from "./queries/station_light.js";
import CoursePlain from "./queries/course_plain.js";
import GeoSation from "./queries/geo_station.js";
import courseRepayment from "./queries/course_repayment.js";
import multipleRange from "./queries/multiple_range.js";

export class Client {
  readonly apiKey: string;
  readonly baseUrl: string;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.ekispert.jp';
  }
  
  /**
   * 経路探索クエリを生成します。
   */
  courseExtremeQuery() {
    return new CourseExtreme(this);
  }

  /**
   * 駅情報検索クエリを生成します。
   */
  stationQuery() {
    return new Station(this);
  }
  
  /**
   * 駅簡易情報クエリを生成します。
   */
  stationLightQuery() {
    return new StationLight(this);
  }

  /**
   * 
   */
  coursePlainQuery() {
    return new CoursePlain(this);
  }

  /**
   * 
   */
  geoStationQuery() {
    return new GeoSation(this);
  }

  courseRepaymentQuery() {
    return new courseRepayment(this);
  }

  multipleRangeQuery() {
    return new multipleRange(this);
  }
}

export {
  CourseExtreme
}