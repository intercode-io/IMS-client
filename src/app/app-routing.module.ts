import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtectedComponent } from './protected/protected.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

import { CallApiComponent } from './call-api/call-api.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import {ProjectsComponent} from "./dashboard/projects/projects.component";
import {ActivityComponent} from "./dashboard/activity/activity.component";
import {TrackerComponent} from "./dashboard/tracker/tracker.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'projects', component: ProjectsComponent},
      {path: 'activity', component: ActivityComponent},
      {path: 'tracker', component: TrackerComponent}

    ]
  },
  {
    path: 'call-api',
    component: CallApiComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService, AuthService]
})
export class AppRoutingModule { }
