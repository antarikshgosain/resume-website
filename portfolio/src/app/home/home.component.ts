import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalConstants } from 'src/GlobalConstants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Welcome to Antariksh\'s Home');
  }
  description = GlobalConstants.DESCRIPTION;
}
