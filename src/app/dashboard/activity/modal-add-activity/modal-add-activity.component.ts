import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Activity} from "../../../../models/activity/activity";
import {ProjectHttpService} from "../../../../services/project.http.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Project, ProjectInterface} from "../../../../models/project/project";
import {MatTableDataSource} from "@angular/material/table";
import {BehaviorSubject, Observable, of } from "rxjs";

@Component({
  selector: 'modal-add-activity',
  templateUrl: './modal-add-activity.component.html',
  styleUrls: ['./modal-add-activity.component.scss']
})

export class ModalAddActivityComponent implements AfterViewInit {

  //projects: Observable<Project[]> = new Observable<Project[]>();

  //projectList = new BehaviorSubject<ProjectInterface[]>([]);
  projectList = [];

  activityForm = new FormGroup({
    projectName: new FormControl("",[Validators.required]),
    startTime: new FormControl("",[Validators.required]),
    endTime: new FormControl("",[Validators.required])
  });

  dateModel: Date = new Date();
  stringDateModel: string = new Date().toString();
  stringDateModel2: string = new Date().toString();

  constructor(
    protected  projectHttpService: ProjectHttpService,
    private formBuilder: FormBuilder
  )   { }

  ngOnInit() {
    //console.log("projects before func: ", this.observableProjectList)
    this.getProjects();
    console.log("projects in modal: ", this.projectList);
  }

  ngAfterViewInit(): void {
    console.log("AVI Form add Activity: addActivity: ");
  }

  submitCreateActivityForm(): void {
    var vals = this.activityForm.value;
    console.log("Create activityForm submited!");
    //TODO Change user_id
    const activity: Activity = new Activity(null, vals.projectName, null,
      1, null, null, vals.startTime, vals.endTime);

    console.log(activity);

  }

  // submitCreateProjectForm() {
  //   const self = this;
  //   console.log("Create Form submitted !!!");
  //   console.log(this.formAddProject.project.value);
  //   const project: Project  = new Project(null, this.formAddProject.project.value.title, null);
  //   this.projectHttpService.createProject(project).subscribe(
  //     result => {
  //       console.log(result);
  //       self._parent.dataSource.data.push(new Project(result.id, result.title));
  //       self._parent.dataSource.data = self._parent.dataSource.data;
  //     }
  //   );
  // }

  getProjects() {
    const self = this;
    this.projectHttpService.getProjectList(1)
      .subscribe(
        result => {
          const projects = result.map(
            item => new Project(item.id, item.title)
          );
          self.projectList = projects;
          //self.projectList = new BehaviorSubject<Project[]>(projects);
          //self.projectList.next(projects);
          //console.log("obs List11111: ", self.observableProjectList)
          this.projectList = projects;
          self.activityForm.controls.orders.patchValue(this.projectList[0].id);
          console.log("obs List: ", self.projectList)
        }
      )
  }

  // async orders

// synchronous orders
// this.orders = this.getOrders();
// this.form.controls.orders.patchValue(this.orders[0].id);



//get observableProjectList(): Observable<ProjectInterface[]> { return this.projectList.asObservable() }
}

