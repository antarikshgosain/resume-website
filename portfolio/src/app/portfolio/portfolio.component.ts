import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { GlobalConstants } from '../../GlobalConstants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  projects: Project[] = GlobalConstants.PORTFOLIO;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Portfolio - Antariksh Gosain');
    
  }
}
