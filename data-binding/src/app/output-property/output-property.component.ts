import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {


 @Input() valor: number = 0;

 //criando um evento apartir do componente
 // se bota o @Output() para exportar o evento!
 @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  incrementa(){
    this.valor++;
    // emit(), Passando informação para o objeto pai, essa informação pode ser string ou objetos
    // Nesse caso criei uma nova propriedade do tipo de um atributo existente!
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
