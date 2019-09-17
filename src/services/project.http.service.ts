import {HttpService} from "./http.service";
import {Injectable} from "@angular/core";
import {Project} from "../models/project/project";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProjectHttpService {
  constructor (private http: HttpClient) {}

  createProject(project: Project) {
    this.http.post('http://localhost:5010/api/project/create', project).subscribe(json => {
        debugger;
        console.log(json);
      }
    );
  }
}
