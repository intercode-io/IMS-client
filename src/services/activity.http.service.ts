import {BaseHttpService} from './baseHttp.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ActivityFilter} from '../models/activity/activity-filter';
import {Activity, ActivityInterface} from '../models/activity/activity';
import {Project, ProjectInterface} from '../models/project/project';

@Injectable()
export class ActivityHttpService extends BaseHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  getActivityList(activity: ActivityFilter) {
    return this.http.post<ActivityInterface[]>(this.baseUrl + '/api/timelog/getList/', activity);
  }

  createActivity(activity: Activity) {
    return this.http.post<ActivityInterface>(this.baseUrl + '/api/timelog/create/', activity);
  }
}
