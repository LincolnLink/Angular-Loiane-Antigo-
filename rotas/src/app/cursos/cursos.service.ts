import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class CursosService {

  constructor() { }


  getCursos(){
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'DotNetCore'}
    ]
  }

  getCurso(id: number){
    
    // Pega a lista dos cursos!
    let cursos = this.getCursos();

    // Verifica se o ID é igual ao numero passado!
    for (let x=0; x<cursos.length; x++)
    {
      // Avaliando cada objeto
      let c = cursos[x];

      // Verificando se é igual!
      if(c.id == id)
      {
        return c;
      }      
    }
    return null
  }


}
