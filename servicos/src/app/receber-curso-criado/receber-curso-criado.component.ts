import { Component, OnInit } from '@angular/core';


import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string;

  constructor( private cursoService: CursosService ) {  }

  ngOnInit() {

    // Comunicação de componente pai para filho!
    // O componente se inscreve no método para pegar a informação do componente pai! 
    // Informa o curso que foi cadastrado   
    this.cursoService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
  }

}
