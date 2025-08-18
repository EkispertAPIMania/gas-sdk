import CourseExtreme from "./queries/course_extreme.js";

export class Client {
  readonly apiKey: string;
  readonly baseUrl: string;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.ekispert.jp';
  }

  courseExtremeQuery() {
    return new CourseExtreme(this);
  }
}

export {
  CourseExtreme
}