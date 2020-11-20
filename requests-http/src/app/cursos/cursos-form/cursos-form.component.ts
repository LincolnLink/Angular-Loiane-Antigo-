import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { Location } from '@angular/common';

import { CursosService } from './../service/cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;

  // Precisa do "FormBuilder" para deixar o formulario reativo!
  constructor(
    private fb: FormBuilder,
    private httpService: CursosService,
    private modal: AlertModalService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  }

  // Envia dados do formulario!
  onSubmit(){

    this.submitted = true;
    console.log(this.form.value)

    if(this.form.valid){
      //console.log("Enviado")
      this.httpService.create(this.form.value)
      .subscribe(
        success => {

          this.modal.showAlertSuccess(`Curso criado com sucesso!`);
          this.location.back();

        } ,
        error => this.modal.showAlertDanger("Error ao criar curso, tente novamente!"),
        () => console.log("Completo")
      );
    }

  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    //console.log("cancelado");
  }

  hasError(field: string){

    return this.form.get(field).errors;

  }

}
