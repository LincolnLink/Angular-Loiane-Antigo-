import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']

  //'@input' pode ser declarado aqui!
  //,inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {

  // Esse decoreito de atributos/propriedade serve para expor uma atributo/propriedade para outro componente poder ver!
  // Com isso o seletor ganha uma propriedade que recebe valores de outros componentes!
  // Ele recebe um parametro que define como aquela atributo/propriedade vai ser vista no componente!
  // Internamente ele se chama 'nomeCurso', externamente 'nome'! 
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
