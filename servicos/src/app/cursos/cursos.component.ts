import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = []; //this.serviceCurso.getCursos();

  constructor(private serviceCurso: CursosService ) { 

  }

  ngOnInit() {
    this.cursos = this.serviceCurso.getCursos();
  }

}
