import { Component, OnInit } from '@angular/core';

import { CursosService } from './../service/cursos.service';
import { Curso } from '../curso';
import { empty, Observable, of, Subject } from 'rxjs';
import { catchError, switchMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  //cursos: Curso[];

  cursos$: Observable<Curso[]>;

  // Subject é um objeto que consegue emitir valores!
  error$ = new Subject<boolean>();

  constructor(private serviceHttp: CursosService) { }

  ngOnInit(): void {

    // GET All
    // Deve se inscrever quando retorna um observable, com isso sempre vai atualizar a informação!
    //this.serviceHttp.list()
    //.subscribe(dados => this.cursos = dados);

    // Quando usa o pipe Async, pode atribuir o valor direto!
    // Sem se inscrever!

    /*
    this.cursos$ = this.serviceHttp.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return empty();
        //return of();
      })
    );*/

    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.serviceHttp.list().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        //this.handleError();
        return empty();
      })
    );

    this.serviceHttp.list()
    .pipe(
      catchError(error => empty())
    )
    .subscribe(
      dados => {
        console.log(dados)
      },
      error => console.log(error),
      () => console.log('Observable completo!')

    );

  }

  onEdit(){

  }

  onDelete(){

  }

}
