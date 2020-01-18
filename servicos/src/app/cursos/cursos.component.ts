import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService] //uma forma de vincular o serviço ao componente
})
export class CursosComponent implements OnInit {

  cursos: string[] = []; //this.serviceCurso.getCursos();

  //Injeção de dependencia dentro do construtor
  constructor(private serviceCurso: CursosService ) { 

  }

  ngOnInit() {
    // Carrega os cursos existente para o componente
    this.cursos = this.serviceCurso.getCursos();

    // Para receber a informação que o outro componente gerou!
    // Deve primeiro ter um evento emissor criado na ação que modifica a informação
    // Para poder escutar o evento que emite informação, tem que se INSCREVER no evento!
    CursosService.criouNovoCurso.subscribe(
      /*
      function(curso){
        console.log(curso);
      }*/

      // AeroFunction - ecmaScript 2015
      // curso => console.log(curso)
      // Informa o curso que foi cadastrado   
      curso => this.cursos.push(curso + " <-new")
    ); 





  }

}
