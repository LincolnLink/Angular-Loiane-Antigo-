import { CursosService } from './../service/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[];

  constructor(private serviceHttp: CursosService) { }

  ngOnInit(): void {

    // GET All
    // Deve se inscrever quando retorna um observable, com isso sempre vai atualizar a informação!
    this.serviceHttp.list()
    .subscribe(dados => this.cursos = dados);

    this.onRefresh();
  }

  onRefresh() {/*
    this.cursos$ = this.service.list().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        this.handleError();
        return empty();
      })
    );*/
  }

  onEdit(){

  }

  onDelete(){

  }

}
