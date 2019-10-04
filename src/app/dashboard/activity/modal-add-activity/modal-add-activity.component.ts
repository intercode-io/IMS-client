import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Activity} from "../../../../models/activity/activity";
import {ProjectHttpService} from "../../../../services/project.http.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Project, ProjectInterface} from "../../../../models/project/project";
import {MatTableDataSource} from "@angular/material/table";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'modal-add-activity',
  templateUrl: './modal-add-activity.component.html',
  styleUrls: ['./modal-add-activity.component.scss']
})

export class ModalAddActivityComponent implements AfterViewInit {

  //projects: Observable<Project[]> = new Observable<Project[]>();

  projectList = new BehaviorSubject<ProjectInterface[]>([]);
  list: Project[] = [];
  public Obs;



  activityForm = new FormGroup({
    projectName: new FormControl(),
    startTime: new FormControl(),
    endTime: new FormControl()
  });

  constructor(
    protected  projectHttpService: ProjectHttpService
  )   { }

  ngOnInit() {
    this.Obs = this.projectList.asObservable();
    console.log("projects before func: ", this.observableProjectList)
    this.getProjects();
    console.log("projects in modal: ", this.observableProjectList);
  }

  ngAfterViewInit(): void {
    console.log("AVI Form add Activity: addActivity: ");
  }

  onSubmit(): void {
    console.log(this.activityForm.value);
  }

  getProjects() {
    const self = this;
    this.projectHttpService.getProjectList(1)
      .subscribe(
      result => {
        const projects = result.map(
          item => new Project(item.id, item.title)
        );
        self.list = projects;
        self.projectList = new BehaviorSubject<Project[]>(projects);
        self.projectList.next(projects);
        console.log("obs List11111: ", self.observableProjectList)
        console.log("obs List: ", projects)
      }
    )
  }

  get observableProjectList(): Observable<ProjectInterface[]> { return this.projectList.asObservable() }
}
