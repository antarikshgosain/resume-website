import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { GlobalConstants } from '../../GlobalConstants';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Portfolio - Antariksh Gosain');
  }
  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }
}
