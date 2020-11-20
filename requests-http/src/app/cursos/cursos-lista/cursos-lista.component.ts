import { Component, OnInit } from '@angular/core';

import { CursosService } from './../service/cursos.service';
import { Curso } from '../curso';
import { empty, Observable, of, Subject } from 'rxjs';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  //NGX-Bootstrap!
  //bsModalRef: BsModalRef;

  //cursos: Curso[];
  cursos$: Observable<Curso[]>;

  // Subject é um objeto que consegue emitir valores!
  error$ = new Subject<boolean>();

  constructor(
    private serviceHttp: CursosService,
    private alertService: AlertModalService
    /*private modalService: BsModalService*/) { }

  ngOnInit(): void {

    this.onRefresh();

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
  }

  onRefresh() {
    this.cursos$ = this.serviceHttp.list().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        //this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
  }

  //Criando uma modal(componente) usando NGX-Bootstrap!
  handleError(){

    // Refatorado, método foi colocado em um serviço!
    this.alertService.showAlertDanger("Erro ao carregar cursos, Tetnte novamente mais tarde!");

    /*
    // Pode ter valores iniciais!
    // está chamando o outro component que é o corpo da modal!
    this.bsModalRef = this.modalService.show(AlertModalComponent);

    // Passando valores de input!
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = ' Erro ao carregar cursos, Tetnte novamente mais tarde!';
    */
  }

  onEdit(){

  }

  onDelete(){

  }

}
