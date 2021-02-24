import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
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

  constructor(private logService: LogService) {
    console.log('!-->instancia da classe de serviço');
  }

  // Requisição do tipo: GET
  getCursos(){

    this.logService.consoleLog('Obtendo lista de cursos');

    return this.cursos;
  }

  // Requisição do tipo: POST
  addCurso(curso: string){

    // Usando o serviço de log
    // templat do ecmaScript2015 usando CRASE, e ${} para ler uma variavel,
    // ...aonde não precisa concatenar
    this.logService.consoleLog(`Criando um novo curso: ${curso}`);

    // Adicionando o novo curso na lista!
    this.cursos.push(curso);

    //Comunicação de componente pai para filho!
    // Emitindo uma informação, para que outro componente receba
    // Dessa forma que é feita a conversa de componente pelo serviço!
    this.emitirCursoCriado.emit(curso);

    // Emite informação para outro componente poder escutar!
    // Como se usa uma classe statica!
    CursosService.criouNovoCurso.emit(curso);

  }
}
