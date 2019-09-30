import {BaseHttpService} from "./baseHttp.service";
import {Injectable} from "@angular/core";
import {Project, ProjectInterface} from "../models/project/project";
import {HttpClient} from "@angular/common/http";
import {ProjectUserPermissions} from "../models/privileges/project.user.permissions";
import {User} from "../models/user/user";
@Injectable()
export class ProjectHttpService extends BaseHttpService {

  public permissions;

  constructor (private http: HttpClient) {
    super()
  }

  getUser(id: Number) {
    return this.http.get<User>(this.baseUrl+"/api/user/get/"+id);
  }
}
