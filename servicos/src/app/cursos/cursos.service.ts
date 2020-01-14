import { Injectable } from '@angular/core';

@Injectable(/*{
  //providedIn: 'root'
}*/)
export class CursosService {

  private cursos: string[] = ['Angular2', 'Java', 'JS', 'PHP'];

  constructor() { 
    console.log('!-->instancia da classe de serviço');
  }

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
  }
}
