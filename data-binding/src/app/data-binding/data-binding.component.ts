import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  teste: string = 'Valor do componente';
  urlImagem = 'http://lorempixel.com/400/200/';
  cursoAngular: boolean = true;
  valorAtual: string = ''; 
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';

  //objeto sem tipo
  pessoa: any = {
    nome: 'def',
    idade: 17
  }

  constructor() { }

  /*----------Interpolation / Interpolação--------*/

  ngOnInit() {
  }

  getCalculo() {
    return 25 + 25;
  }

  getCurtirCurso(){
    return true;
  }

  /*-------Event Binding--------*/

  botaoClicado(){

    //função do JS!
    alert('botão clicado');

  }

  //Método que recebe evento quando o cursor sai do foco, recebendo o valor que foi digitado!
  //evento é a variavel que recebe o valor, precisa ser tipado para recuperar o valor!
  onKeyUp(evento: KeyboardEvent){

    this.valorAtual = ((<HTMLInputElement>evento.target).value);

  }

  salvarValor(valor){

    this.valorSalvo = valor;

  }

  onMouseOverOut(){

    this.isMouseOver = !this.isMouseOver;

  }

  /*----------------Two-way data binding-----------------*/



}
