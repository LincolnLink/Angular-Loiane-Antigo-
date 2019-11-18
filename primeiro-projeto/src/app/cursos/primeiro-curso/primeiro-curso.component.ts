import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos.Service';

//Componente do Module Curso
@Component({
  selector: 'app-primeiro-curso',
  templateUrl: './primeiro-curso.component.html',
  styleUrls: ['./primeiro-curso.component.css']
})
export class PrimeiroCursoComponent implements OnInit {


  nomePortal: string;
  cursos: string[];

  constructor(private cursoService: CursosService) {

    this.nomePortal = 'Exemplo';

    this.cursos = this.cursoService.gerCursos();
  }

  ngOnInit() {
  }

}
