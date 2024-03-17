import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { GlobalConstants } from '../../GlobalConstants';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = GlobalConstants.PORTFOLIO;

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(proj => proj.id === id);
    if(project === undefined){
      throw new TypeError('No project match found for: '+ id);
    }
    return project;
  }

}
