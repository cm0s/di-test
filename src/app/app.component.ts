import {Component} from '@angular/core';
import {SuperService} from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private superservice: SuperService) {

  }
}
