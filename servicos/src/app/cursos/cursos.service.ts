import { Injectable, EventEmitter } from '@angular/core';


@Injectable(/*{
  //providedIn: 'root'
}*/)
export class CursosService {

  private cursos: string[] = ['Angular2', 'Java', 'JS', 'PHP'];

  //Comunicação de componente pai para filho!
  // Esse atributo vira um evento!
  // Esse evento envia informações, está enviando uma informação do tipo string
  emitirCursoCriado = new EventEmitter<string>();

  // Comunicação de componente diferentes
  // Esse atributo vira um evento!
  // atributo ou método statico, não precisa acessar a instancia do mesmo!
  static criouNovoCurso = new EventEmitter<string>();

  constructor() { 
    console.log('!-->instancia da classe de serviço');
  }

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){

    // Adicionando o novo curso na lista!
    this.cursos.push(curso);

    //Comunicação de componente pai para filho!
    // Emitindo uma informação, para que outro componente receba
    // Dessa forma que é feita a conversa de componente pelo serviço!
    this.emitirCursoCriado.emit(curso);

    // Emite informação para outro componente poder escutar!
    CursosService.criouNovoCurso.emit(curso);

  }
}
