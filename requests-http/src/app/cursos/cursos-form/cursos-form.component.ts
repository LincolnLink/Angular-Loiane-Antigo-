import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { CursosService } from './../service/cursos.service';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
})
export class CursosFormComponent implements OnInit {

  // Formúlario !
  form: FormGroup;
  submitted: boolean;

  // Precisa do "FormBuilder" para deixar o formulario reativo!
  constructor(
    private fb: FormBuilder,
    private httpService: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // Pega o parametro da rota, pesquisando o curso com o ID!
    // Botando dados do curso nos formulario, para editar!
    /* 1° REFATORANDO!
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      const cursoEdit$ = this.httpService.loadById(id);
      cursoEdit$.subscribe(curso =>{
        this.updateForm(curso)
      });
    });
    */

    /* 2° REFATORAÇÃO, codigo perfeito, porem foi passado para o resolve! */
    /*
      this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.httpService.loadById(id))

        // Não precisa fazer unsubscribe, o angular já faz!

        // Caso precise fazer outro método!
        //switchMap(cursos => obterAulas())
      )
      .subscribe((curso) => this.updateForm(curso));
    */

    // switchMap -> cancela as anteriores e apenas busca o valor da ultima requisição!

    // Caso queira fazer um create, update ou delete!

    // concatMap -> ordem da requisição importa!
    // mergeMap -> caso não se importa com a ordem das resposta!

    // exHaustMap -> vai obter os valores, antes da segunda tentativa!
    // Muito ultilizado em casos de login!

    /* 3° REFATORAÇÃO! */

    // Pega o resultado da GUARDA DE ROTA Resolve!
    const curso = this.route.snapshot.data['curso'];


    // Declaração dos campos do formulario!
    // A inicialização é definida com a Guarda de rota "Resolve"!
    this.form = this.fb.group({
      id: [curso.id],
      nome: [
        curso.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
    });

  }

  // Envia dados do formulario para o backend
  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);

    if (this.form.valid) {

      this.httpService.create(this.form.value).subscribe(
        (success) => {
          this.modal.showAlertSuccess(`Curso criado com sucesso!`);
          this.location.back(); // Poderia ser o "router.navigate"
        },
        (error) =>
          this.modal.showAlertDanger('Error ao criar curso, tente novamente!'),
        () => console.log('Completo')
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    //console.log("cancelado");
  }

  // Informa se tem erros no campo informado!
  hasError(field: string) {
    return this.form.get(field).errors;
  }

  // Carrega o formulario com os dados do curso para editar!
  // 2° REFATORAÇÃO
  /*
  updateForm(curso){
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    });
  }*/


}
