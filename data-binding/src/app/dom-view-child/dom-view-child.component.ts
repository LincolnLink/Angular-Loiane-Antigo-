import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'dom',
  templateUrl: './dom-view-child.component.html',
  styleUrls: ['./dom-view-child.component.css']
})
export class DomViewChildComponent implements OnInit {


  //exportando a propriedade para o componente pai poder mandar valores!
  @Input() valorDOM: number = 0;

  //exportando o evento para o componente pai poder receber o resultado do evento!
  @Output() eventoPersonalizado = new EventEmitter();


  // Esse decoreitor é usado para exportar uma variavel do template!
  // Ele é usado para você manilupar o DOM do componente filho!
  @ViewChild('campoInput', {static: true}) campoValorInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  incrementa(){

    console.log(this.campoValorInput);

    this.campoValorInput.nativeElement.value++;
    this.eventoPersonalizado.emit({novoValor: this.valorDOM});
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.eventoPersonalizado.emit({novoValor: this.valorDOM});
  }

}
