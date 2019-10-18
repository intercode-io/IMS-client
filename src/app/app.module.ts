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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BaseHttpService} from "../services/baseHttp.service";
import {ProjectHttpService} from "../services/project.http.service";
import {MatTableModule} from '@angular/material/table';
import { ActivityComponent } from './dashboard/activity/activity.component';
import { TrackerComponent } from './dashboard/tracker/tracker.component';
import { ModalAddActivityComponent } from './dashboard/activity/modal-add-activity/modal-add-activity.component';
import {ActivityHttpService} from "../services/activity.http.service";
import {DatePipe} from "@angular/common";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";


/////////////////////////////MAT IMPORTS/////////////////////////////
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTreeModule} from "@angular/material/tree";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSortModule} from "@angular/material/sort";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {MatChipsModule} from "@angular/material/chips";
import {MatSliderModule} from "@angular/material/slider";
import {MatBadgeModule} from "@angular/material/badge";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {CdkTreeModule} from "@angular/cdk/tree";
import {A11yModule} from "@angular/cdk/a11y";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {CdkTableModule} from "@angular/cdk/table";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {PortalModule} from "@angular/cdk/portal";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatRangeDatepickerModule, MatRangeNativeDateModule} from 'mat-range-datepicker';
import {DatepickerComponent} from './dashboard/activity/datepicker/datepicker.component';
import { ModalSelectProjectComponent } from './dashboard/activity/modal-select-project/modal-select-project.component';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
//====================================================

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
    ModalAddActivityComponent,
    DatepickerComponent,
    ModalSelectProjectComponent,
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
    NoopAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatRangeDatepickerModule,
    MatRangeNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    //===
    A11yModule,

    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    AngularMultiSelectModule,
    //

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
