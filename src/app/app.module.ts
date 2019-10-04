import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { CallApiComponent } from './call-api/call-api.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopComponent } from './dashboard/bar/top/top.component';
import { LeftAdminComponent } from './dashboard/bar/left-admin/left-admin.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { ModalAddProjectComponent } from './dashboard/projects/modal-add-project/modal-add-project.component';
import { FormAddProjectComponent } from './dashboard/projects/modal-add-project/form-add-project/form-add-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BaseHttpService} from "../services/baseHttp.service";
import {ProjectHttpService} from "../services/project.http.service";
import {MatTableModule} from '@angular/material/table';
import { ActivityComponent } from './dashboard/activity/activity.component';
import { TrackerComponent } from './dashboard/tracker/tracker.component';
import { ModalAddActivityComponent } from './dashboard/activity/modal-add-activity/modal-add-activity.component';
import {ActivityHttpService} from "../services/activity.http.service";
import {DatePipe} from "@angular/common";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    AuthCallbackComponent,
    CallApiComponent,
    TopComponent,
    LeftAdminComponent,
    ProjectsComponent,
    ModalAddProjectComponent,
    FormAddProjectComponent,
    DashboardComponent,
    ActivityComponent,
    TrackerComponent,
    ModalAddActivityComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    NoopAnimationsModule
  ],
  providers: [
    BaseHttpService,
    ProjectHttpService,
    ActivityHttpService,
    DatePipe,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
