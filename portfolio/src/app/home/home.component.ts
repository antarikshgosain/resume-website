import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalConstants } from 'src/GlobalConstants';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  description = GlobalConstants.DESCRIPTION;
  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Welcome to Antariksh\'s Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectsService.GetProjectById(3);
  }
  
}
