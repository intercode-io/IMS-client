import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
import {DataService} from "./Services/DataService";
import {Project, ProjectInterface} from "../../../models/project/project";
import {MatTableDataSource} from "@angular/material/table";
import {BehaviorSubject} from "rxjs";
import {ProjectHttpService} from "../../../services/project.http.service";

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activityForm: FormGroup;

  constructor(
    protected  dataService: DataService,
  ) {
  }

  ngOnInit() {
    this.activityForm = new FormGroup({
      projectName: new FormControl(),
      startTime: new FormControl(),
      endTime: new FormControl()
    });
    console.log("initialisation finished act.comp");
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
          self._observableList = new BehaviorSubject(projects);
        }
      )
  }

}

