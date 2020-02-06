import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  /*----------------------------Interpolation / Interpolação--------*/
  cursoAngular: boolean = true;
  teste: string = 'Valor do componente';  

  /*----------------------------Property Binding--------------------*/  
  urlImagem = 'http://lorempixel.com/400/200/';

  /*----------------------------Event Binding-----------------------*/  
  valorAtual: string = ''; 
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  /*----------------------------Two-way data binding---------------*/  
  nome: string = 'abc';  
  
  //objeto sem tipo
  pessoa: any = {
    nome: 'def',
    idade: 17
  }

  /*------------------------------Input Properties-----------------*/
  nomeDoCurso: string = 'Angular';

  /*------------------------------Output Properties----------------*/
  valorInicial = 15;

  
  /*------------------------------DOM----------------*/
  valorInicialDOM = 15;





  constructor() { }

  ngOnInit() {

  }

  /*----------------------------Interpolation / Interpolação--------*/  

  getCalculo() {
    return 25 + 25;
  }

  getCurtirCurso(){
    return true;
  }

  /*----------------------------Event Binding-------------------*/    
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


  /*------------------------------Output Properties-----------*/
  onMudouValor(evento){
    //console.log(evento);
    console.log(evento.novoValor);
  }


  /*----------------DOM---------------------*/

  pegandoValorQueFoiPassadoPorDom(evento){
    console.log(evento.novoValor);
  }








}
