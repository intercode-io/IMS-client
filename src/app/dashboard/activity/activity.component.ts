import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
//import {DataService} from "./Services/DataService";
import {Project, ProjectInterface} from "../../../models/project/project";
import {MatTableDataSource} from "@angular/material/table";
import {BehaviorSubject, Observable} from "rxjs";
import {ActivityHttpService} from "../../../services/activity.http.service";
import {Activity, ActivityInterface} from "../../../models/activity/activity";
import {ActivityFilter} from "../../../models/activity/activity-filter";
import {DatePipe} from "@angular/common";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})


export class ActivityComponent implements OnInit {
  displayedColumns: string[] = ["projectId", "projectTitle", "description", "hours", "startTime", "endTime"];

  public activityDataSource = new MatTableDataSource<ActivityInterface>([]);

  //
  // @ViewChild(MatPaginator, {static: true})
  // paginator: MatPaginator;

  constructor(
    protected  activityHttpService: ActivityHttpService,
  ) {
  }

  ngOnInit() {
    // this.activityDataSource.paginator = this.paginator;
    console.log("initialisation finished act.comp");
    this.getActivities();
  }


  getActivities(){
    console.log("In getActivities");
    var date1 = new Date("December 12, 2000");
    var date2 = new Date("December 12, 2030");


    const self = this;
    const activityFilter: ActivityFilter = new ActivityFilter([1,2], 2, date1, date2);
    console.log("Activity Filter: ",activityFilter);

    this.activityHttpService.getActivityList(activityFilter)
      .subscribe(
        result => {
          self.activityDataSource = new MatTableDataSource<ActivityInterface>(result);
        }
      )
  }
}


  // getProjects() {
  //   const self = this;
  //   this.projectHttpService.getProjectList(1)
  //     .subscribe(
  //       result => {/
  //         const projects = result.map(
  //           item => new Project(item.id, item.title)
  //         );
  //         self._observableList = new BehaviorSubject(projects);
  //       }
  //     )
  // }

