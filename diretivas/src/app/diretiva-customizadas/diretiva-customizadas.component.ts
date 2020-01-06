import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizadas',
  templateUrl: './diretiva-customizadas.component.html',
  styleUrls: ['./diretiva-customizadas.component.css']
})
export class DiretivaCustomizadasComponent implements OnInit {

  diretivaExibe: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  btnDiretiva(){
    this.diretivaExibe = !this.diretivaExibe;
  }
  
}
