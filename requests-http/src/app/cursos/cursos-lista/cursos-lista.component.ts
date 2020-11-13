import { CursosService } from './../service/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  //cursos: Curso[];

  cursos$: Observable<Curso[]>;

  constructor(private serviceHttp: CursosService) { }

  ngOnInit(): void {

    // GET All
    // Deve se inscrever quando retorna um observable, com isso sempre vai atualizar a informação!
    //this.serviceHttp.list()
    //.subscribe(dados => this.cursos = dados);

    // Quando usa o pipe Async, pode atribuir o valor direto!
    // Sem se inscrever!
    this.cursos$ = this.serviceHttp.list();

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
