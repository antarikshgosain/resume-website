import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalConstants } from '../../GlobalConstants';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Resume - Antariksh Gosain');
  }

  workExperience = GlobalConstants.WORK_EXPERIENCE;
  studyExperience = GlobalConstants.STUDIES;
  certifications = GlobalConstants.CERTIFICATIONS;
  languageSkills = GlobalConstants.SKILLS_LANGUAGES;
  frameworkSkills = GlobalConstants.SKILLS_FRAMEWORKS;
  toolSkills = GlobalConstants.SKILLS_TOOLS_OTHER;
  hobbies = GlobalConstants.HOBBIES;

  DownloadFile() {
    const link = this.renderer.createElement('a'); //creates <a/> elements
    link.setAttribute('target', '_blank');
    link.setAttribute('href', GlobalConstants.DOWNLOAD_RESUME_PATH + GlobalConstants.DOWNLOAD_RESUME_NAME);
    link.setAttribute('download','Antariksh - Resume.pdf');
    link.click();
    link.remove();
  }
}
