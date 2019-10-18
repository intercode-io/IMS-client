import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
//import {DataService} from "./Services/DataService";
import {Project, ProjectInterface} from "../../../models/project/project";
import {MatTableDataSource} from "@angular/material/table";
import {BehaviorSubject, Observable} from "rxjs";
import {ActivityHttpService} from "../../../services/activity.http.service";
import {Activity, ActivityInterface} from "../../../models/activity/activity";
import {ActivityFilter} from "../../../models/activity/activity-filter";
import {MatPaginator} from "@angular/material/paginator";
import {AuthService} from '../../services/auth.service';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {ModalSelectProjectComponent} from './modal-select-project/modal-select-project.component';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})


export class ActivityComponent implements OnInit {
  displayedColumns: string[] = ["projectId", "projectTitle", "description", "hours", "startTime", "endTime"];

  public activityDataSource = new MatTableDataSource<ActivityInterface>([]);

  //
   @ViewChild(MatPaginator, {static: true})
   paginator: MatPaginator;

   @ViewChild('rangeDatePicker', {static: false})
   rangeDatePicker: DatepickerComponent;

   @ViewChild('modalSelectProject', {static: false})
   modalSelectProject: ModalSelectProjectComponent;

  constructor(
    protected  activityHttpService: ActivityHttpService,
    protected  authService: AuthService,
  ) {
  }

  ngOnInit() {
    // this.activityDataSource.paginator = this.paginator;
    console.log('initialisation finished act.comp');
    console.log(this.rangeDatePicker);
    //this.getActivities();
  }


  getActivities(){
    console.log("In getActivities");
    var date1 = new Date("December 12, 2000");
    var date2 = new Date("December 12, 2030");


    const self = this;
    // const activityFilter: ActivityFilter = new ActivityFilter([1, 2, 4],
    const activityFilter: ActivityFilter = new ActivityFilter([],
      self.authService.getUserId(), date1, date2);
    console.log('Activity Filter: ', activityFilter);

    this.activityHttpService.getActivityList(activityFilter)
      .subscribe(
        result => {
          self.activityDataSource = new MatTableDataSource<ActivityInterface>(result);
        }
      );
  }

  getActivities2(activityFilter: ActivityFilter){
    console.log("In getActivities22");
    const self = this;
    this.activityHttpService.getActivityList(activityFilter)
      .subscribe(
        result => {
          self.activityDataSource = new MatTableDataSource<ActivityInterface>(result);
        }
      );
  }

  generateActivityFilter(){
    let projectIds = [];
    let selected = this.modalSelectProject.selectedItems;
    for (let item of selected) {
       projectIds.push(item.id);
    }

    let fromDate = this.rangeDatePicker.fromDate;
    let toDate = this.rangeDatePicker.toDate;
    const activityFilter = new ActivityFilter(projectIds,
      this.authService.getUserId(),
      new Date(fromDate.year, fromDate.month, fromDate.day),
      new Date(toDate.year, toDate.month, toDate.day)
    );
      console.log("ACTIVITY FILTER:", activityFilter);
    console.log("ACTIVITY FILTER:", activityFilter);
    this.getActivities2(activityFilter);
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

