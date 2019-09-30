import {BehaviorSubject, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Project} from "../../../../models/project/project";
import {ProjectHttpService} from "../../../../services/project.http.service";

@Injectable()
export class DataService {

  private _list: Project[]=[];
  private _observableList: BehaviorSubject<Project[]> = new BehaviorSubject([]);

  constructor(
    protected  projectHttpService: ProjectHttpService,
  ) { }

  get observableList(): Observable<Project[]> { return this._observableList.asObservable() }

  ngOnInit() {
    console.log("Projects:");
    this.getProjects();
    console.log(this.observableList);
  }

  add(project: Project) {
    this._list.push(project);
    this._observableList.next(this._list);
  }

  getProjects() {
    const self = this;
    this.projectHttpService.getProjectList(1)
      .subscribe(
        result => {
          const projects = result.map(
            item => new Project(item.id, item.title)
          );
          self._observableList = new BehaviorSubject(projects);
        }
      )
  }
}
