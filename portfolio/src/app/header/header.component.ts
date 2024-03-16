import { Component } from '@angular/core';
import { GlobalConstants } from 'src/GlobalConstants';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name=GlobalConstants.FULL_NAME;
  title=GlobalConstants.TITLE;
}

