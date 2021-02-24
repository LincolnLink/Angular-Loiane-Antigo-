import { Component, OnInit, ViewChild } from '@angular/core';

// I get same result with explicit import
import {NgSwitch} from "@angular/common"


@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent {

  aba: string = 'home';

  //@ViewChild('aba') aba = 'home';

  constructor() { }


}
