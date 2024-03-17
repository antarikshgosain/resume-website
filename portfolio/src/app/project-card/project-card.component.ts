import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Project } from '../_models/project';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef; //added ? because it may not always be initialized
  
  //BsModalService is service provided by ngx-bootstrap
  constructor(private modalService: BsModalService){ 
    
  }

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class : "modal-lg", //css class
      initialState: {
        project: this.project
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }

}
