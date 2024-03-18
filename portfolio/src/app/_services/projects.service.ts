import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { GlobalConstants } from '../../GlobalConstants';
import { Tag } from '../_models/Tag';

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

  GetProjectsByFilter(filterTags: Tag[]){
    let filterProjects : Project[] = []; //initialized to empty array
    this.projects.forEach(function (project){
      let foundAll = true;
      filterTags.forEach(function (filterTag){
        if(project.tags.includes(filterTag)==false){
          foundAll = false;
        }
      });
      
      //if all tags are found in the projects.forEach()
      //that project is pushed to filterProjects
      if(foundAll){
        filterProjects.push(project);
      }
    });
    return filterProjects;
  }

}
