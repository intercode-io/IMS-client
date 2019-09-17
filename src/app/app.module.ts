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
import {HttpService} from "../services/http.service";
import {ProjectHttpService} from "../services/project.http.service";

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    AuthCallbackComponent,
    DashboardComponent,
    CallApiComponent,
    TopComponent,
    LeftAdminComponent,
    ProjectsComponent,
    ModalAddProjectComponent,
    FormAddProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    HttpService,
    ProjectHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
