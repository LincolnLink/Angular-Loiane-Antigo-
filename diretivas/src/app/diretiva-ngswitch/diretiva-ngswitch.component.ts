import { Component } from '@angular/core';


@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent {

  aba: string = 'home';

  //@ViewChild('aba') aba;

  constructor() { }


}
