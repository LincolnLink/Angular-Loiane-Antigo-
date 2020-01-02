import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  // Esse objeto é do tipo any!
  // A propriedade responsavel é do tipo null, pode ser qualquer coisa! 
  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel1: null,
    responsavel2 : {nome: 'Lincoln'},
    responsavel3: {usuario: null}
  };

  constructor() { }

  ngOnInit() {
  }

}
