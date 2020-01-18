import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService] //uma forma de vincular o serviço ao componente
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  //Injeção de dependencia dentro do construtor
  constructor( private cursoService: CursosService) { }

  ngOnInit() {

    // Carrega os cursos existente para o componente
    this.cursos = this.cursoService.getCursos();
  }

  //Mé todo que adiciona um novo curso, recebido pelo input!
  onAddCurso(curso: string){
    this.cursoService.addCurso(curso);
  }

}
