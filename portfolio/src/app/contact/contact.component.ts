import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalConstants } from '../../GlobalConstants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  profileLinkedin = GlobalConstants.CONTACT_LINKEDIN;
  profileGithub = GlobalConstants.CONTACT_GITHUB;
  primaryEmailId = GlobalConstants.PRIMARY_EMAIL_ID;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Contact - Antariksh Gosain');
  }
}
