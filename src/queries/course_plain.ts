import { Client } from '../client';
import type { CourseJson } from '../type/course';
import { Course } from '../models/course';
import Base from './base';

export default class CoursePlain extends Base {
  private readonly from: string | undefined;
  private readonly to: string | undefined;
  private readonly via: string | undefined;
  private readonly date: Date | undefined;
  private readonly plane: boolean = true;
  private readonly shinkansen: boolean = true;
  private readonly limitedExpress: boolean = true;
  private readonly bus: boolean = true;
  private readonly gcs: string = 'tokyo';

  constructor(client: Client) {
    super(client);
  }

  execute() {
    if (!this.from || !this.to) {
      throw new Error('Both "from" and "to" parameters are required.');
    }

    const params: Record<string, string | number> = {};
    params['from'] = this.from;
    params['to'] = this.to;

    if (this.via) {
      params['via'] = this.via;
    }

    if (this.date) {
      params['date'] = `${Utilities.formatDate(this.date, 'JST', 'YYYYMMdd')}`;
    }

    params['plane'] = this.plane ? 'true' : 'false';
    params['shinkansen'] = this.shinkansen ? 'true' : 'false';
    params['limitedExpress'] = this.limitedExpress ? 'true' : 'false';
    params['bus'] = this.bus ? 'true' : 'false';
    params['gcs'] = this.gcs;

    const res = super._execute<{
      Course: CourseJson[] | CourseJson;
    }>('/search/course/plain', params);
    const courses: Course[] = [];
    console.log({ res });
    if (res.Course) {
      const courseArray = Array.isArray(res.Course) ? res.Course : [res.Course];
      courseArray.forEach(course => courses.push(new Course(course)));
    }
    return courses;
  }
}