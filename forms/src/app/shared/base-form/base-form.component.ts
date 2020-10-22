import { FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'

})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  abstract submit();

  onSubmit(){

    if (this.formulario.valid){
      this.submit();
    }
    else
    {
      console.log('Formulario invalido');

      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(dateInforme: FormGroup | FormArray)
  {
    Object.keys(dateInforme.controls).forEach(campo => {

      const controle = dateInforme.get(campo);
      controle.markAsDirty();
      controle.markAllAsTouched();

      if(controle instanceof FormGroup || controle instanceof FormArray){
        this.verificaValidacoesForm(controle);
      }
    });
  }

  /// Método que limpa os campos
  resetar(){
    this.formulario.reset();
  }

  // (VALIDAÇÃO) Verifica se o campo foi tocado e se é valido!
  isValidTouched(campo: string){

    // this.formulario.controls["campo"];

    // Melhor forma de pegar o campo do formulario!
    return this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)

  }

  // (VALIDAÇÃO) Verifica se o campo foi tocado e se é valido!
  isInValidTouched(campo: string){
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  //(VALIDAÇÃO)
  isInvalidEmail(){
    let emailProp = this.formulario.get('email');

    return !emailProp.valid && emailProp.touched;

    //console.log(emailProp);
    /*
    if(emailProp.errors){
      return emailProp.errors['email'] && emailProp.touched;
    }*/
  }

  // Aplica o style do css
  aplicaCssErro(campo: string){

    return {
      'is-valid': this.isValidTouched(campo),
      'is-invalid': this.isInValidTouched (campo)
    }

  }






}
