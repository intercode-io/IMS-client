import {Project} from "../../../../models/project/project";
import {BehaviorSubject, Observable} from "rxjs";

export class DataService {

  private _list: Project[] = [];
  private _observableList: BehaviorSubject<Project[]> = new BehaviorSubject([]);

  get observableList(): Observable<Project[]> { return this._observableList.asObservable() }

  add(person: Project) {
    this._list.push(person);
    this._observableList.next(this._list);
  }

}
