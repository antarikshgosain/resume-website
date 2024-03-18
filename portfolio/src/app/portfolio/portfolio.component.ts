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

  //==>ADD NEW FILTERS FOR BOOLEAN HERE

  //Define Languages Filter
  java: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  sql: boolean = false;

  //Define Frameworks Filter
  angular: boolean = false;
  aws: boolean = false;
  react: boolean = false;
  azure: boolean = false;


  projects = {} as Project[];
  isCollapsed: boolean = true; //collapsed by default

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Portfolio - Antariksh Gosain');
  }
  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }

  Filter() {
    let filterTags : Tag[] = [] ;

    //==>ADD NEW FILTER CHECKS HERE

    //check for Languages Filter
    if(this.java)         {   filterTags.push(Tag.JAVA);        }
    if(this.javascript)   {   filterTags.push(Tag.JAVASCRIPT);  } 
    if(this.python)       {   filterTags.push(Tag.PYTHON);      }      
    if(this.sql)          {   filterTags.push(Tag.SQL);         }  

    //check for Frameworks Filter
    if(this.angular)      {   filterTags.push(Tag.ANGULAR);     }
    if(this.react)        {   filterTags.push(Tag.REACT);       } 
    if(this.aws)          {   filterTags.push(Tag.AWS);         }
    if(this.azure)      {   filterTags.push(Tag.MS_AZURE);    }
    
    this.projects = this.projectsService.GetProjectsByFilter(filterTags);

  }
}
