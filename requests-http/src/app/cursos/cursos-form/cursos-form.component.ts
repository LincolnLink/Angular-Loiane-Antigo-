import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private httpService: CursosService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    });
  }

  // Envia dados do formulario!
  onSubmit(){

    this.submitted = true;
    console.log(this.form.value)

    if(this.form.valid){
      console.log("Enviado")
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
