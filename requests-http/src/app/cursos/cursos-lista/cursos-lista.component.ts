import { Component, OnInit, ViewChild } from '@angular/core';

import { CursosService } from './../service/cursos.service';
import { Curso } from '../curso';
import { empty, Observable, of, Subject } from 'rxjs';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';


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

  // Faz parte da modal que confirma quando um curso é deletado!
  deleteModalRef: BsModalRef;

  // Propriedade que faz referencia a
  @ViewChild('deleteModal') deleteModal;

  // Copia do curso que foi selecionado!
  cursoSelecionado: Curso;

  constructor(
    private serviceHttp: CursosService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService) { }

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

  // Carrega a lista de curso!
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

  // Criando uma modal(componente) usando NGX-Bootstrap!
  // Informa se tem erro!
  handleError(){

    // Refatorado, método foi colocado em um serviço!
    this.alertService.showAlertDanger("Erro ao carregar cursos, Tente novamente mais tarde!");

    /*
    // Pode ter valores iniciais!
    // está chamando o outro component que é o corpo da modal!
    this.bsModalRef = this.modalService.show(AlertModalComponent);

    // Passando valores de input!
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = ' Erro ao carregar cursos, Tetnte novamente mais tarde!';
    */
  }

  /// Métodos que edita os cursos!
  onEdit(id){

    // Com o router você nevega para a pagina de edição!
    this.router.navigate(['editar', id], {relativeTo: this.route});

  }

  // Método do botão que deleta o curso, clicando invoca a modal de confirmação!
  onDelete(Curso){
    this.cursoSelecionado = Curso
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'})

  }

  // Método do botão que confirma quando vai deletar!
  onConfirmeDelete(){

    this.serviceHttp.delete(this.cursoSelecionado.id)
    .subscribe(
      (success) => {
        this.onRefresh();
        this.alertService.showAlertSuccess("Deletado com sucesso");
        this.deleteModalRef.hide();
      },
      (error) => {
        this.alertService.showAlertDanger("Erro ao deletar o cursos, Tente novamente mais tarde!");
        this.deleteModalRef.hide();
      }
    )
    //this.deleteModalRef.hide();

  }

  // Método do botão que cancela a ação de deletar!
  onDeclineDelete(){
    this.deleteModalRef.hide();
  }

}
