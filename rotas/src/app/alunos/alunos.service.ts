import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'}
  ];

  constructor() { }

  getAlunos(){

    return this.alunos;

  }

  /*
  getAluno(idAluno: number){

    let aluno: any = this.alunos.filter( a => a.id == idAluno);
    console.log(aluno);
    return aluno;
  }*/

  getAluno(id: number){

    
    // Pega a lista dos cursos!
    let cursos = this.getAlunos();

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
