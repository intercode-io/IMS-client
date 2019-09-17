import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormAddProjectComponent} from "./form-add-project/form-add-project.component";
import {ProjectHttpService} from "../../../../services/project.http.service";
import {Project} from "../../../../models/project/project";

@Component({
  selector: 'app-modal-add-project',
  templateUrl: './modal-add-project.component.html',
  styleUrls: ['./modal-add-project.component.scss']
})
export class ModalAddProjectComponent implements AfterViewInit {

  @ViewChild("tabsetAddProject", {read: ElementRef, static: false})
  tabsetAddProject: ElementRef;

  @ViewChild(FormAddProjectComponent, {static: false})
  formAddProject: FormAddProjectComponent;

  constructor(private projectHttpService: ProjectHttpService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log("After view init MODAL:");
    console.log(this.formAddProject)
  }

  submitCreateProjectForm() {
    console.log("Create Form submitted !!!");
    console.log(this.formAddProject.project.value);
    const project: Project  = new Project(null, this.formAddProject.project.value.title, null);
    this.projectHttpService.createProject(project);
  }


}
