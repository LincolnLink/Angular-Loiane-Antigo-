import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  //Objeto complexo do exemplo!
  livro: any = {
    titulo: 'Livro de Java Script data structures and Algorithms',
    ranting: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glgjpRP'
  }

  // Pipes puros
  livros:string[] = ['Angular2', 'PHP', 'Java'];

  filtro:string = '';

  constructor() { }

  ngOnInit() {    
  }

  addCurso(valor: string){
    this.livros.push(valor);

    console.log(valor);
  }

  obterCursos(){

    // Codigo que faz o filtro!
    if (this.livros.length === 0 || this.filtro === undefined 
      || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter( (v) =>{
        if (v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
          return true;
        }
        return false;
      });
  }



  // Simulando uma chamada Ajax no servidor
  valorAsync = new Promise((resolve, reject) =>{

    // Atribui o valor da string para o atributo(valorAsync) em 2 segundos
    // setTimeout serve para demorar um pouco
    setTimeout( ()=> resolve('Valor assíncrono'), 2000);
  });

  // Programação por fluxo, Observable!
  //valorAsync2 = Observable.interval(2000)

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));

}
