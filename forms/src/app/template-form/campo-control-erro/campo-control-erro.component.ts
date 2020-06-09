import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit {

  @Input() condicao: boolean;
  @Input() msnErro: string;

  dismissible = true;


  constructor() { }

  ngOnInit(): void {
  }

}
