import { Component} from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {

  isCollapsed = true;

  title = 'requests-http';

  constructor(){
    setTheme('bs4');
  }

}
