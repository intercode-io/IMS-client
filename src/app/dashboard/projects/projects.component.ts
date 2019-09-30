import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Project, ProjectInterface} from "../../../models/project/project";
import {ProjectHttpService} from "../../../services/project.http.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements AfterViewInit {

  displayedColumns: string[] = ["id", "title", "edit"];
  public dataSource = new MatTableDataSource<ProjectInterface>([]); //outputs table

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  constructor(
    protected  projectHttpService: ProjectHttpService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getProjects();
  }

  ngAfterViewInit() {}

  getProjects() {
    const self = this;
    this.projectHttpService.getProjectList(1)
      .subscribe(
      result => {
        const projects = result.map(
          item => new Project(item.id, item.title)
        );
        self.dataSource = new MatTableDataSource<ProjectInterface>(projects);
      }
    )
  }
}
