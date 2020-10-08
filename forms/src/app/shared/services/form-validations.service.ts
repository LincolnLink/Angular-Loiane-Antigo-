import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {

  constructor() { }


  // Método "static" cria apenas uma instancia, não precisa instanciar!
  // Método que cria a validação personalizada!
  static requiredMinCheckbox(min = 1){

    // Contante que recebe uma função que trata o "formArray"!
    const validator = (formArray: FormArray) => {

      /*
      // Constante que recebe os controles do "formArray"!
      const values = formArray.controls;
      // Verifica cada check se algum deles foi marcado!
      let totalChecked = 0;
      for (let i = 0; i< values.length; i++){
        if (values[i].value){
          totalChecked += 1;
        }
      }
      */

      /* Programação funcional */
     const totalChecked = formArray.controls
     .map(v => v.value)
     .reduce((total, current) => current ? total + current : total, 0);

      // Retorna se atende ou não o minimo de check marcados!
      // Precisa retornar um objeto quando for required
      return totalChecked >= min ? null : {required: true};
    };

    return validator;
  }

  static cepValidator(control: FormControl){

    const cep = control.value;

    if (cep && cep !== '')
    {
      const validacep = /^[0-9]{8}$/;
      // É preciso retornar um objeto quando da erro!
      return validacep.test(cep) ? null : { cepInvalido : true};
    }
    return null;
  }

  // Compara os dois campos de email, recebe como paremetro o 1° campo!
  static equalsTo(otherField: string){

    // Resultado é colocado em uma constant, recebe como parametro o 2° campo "automaticamente"!
    const validator = (formControl: FormControl) => {

      // Verificando se existe o 1° campo.
      if(otherField == null)
      {
        throw new Error('É necessário informar :' + otherField );
      }

      // Verificando todos os campos existem, ou se já foram carregados no sistema
      if(!formControl.root || !(<FormGroup>formControl.root).controls){

        return null;
      }

      // Pesquisa o valor do 1° campo
      const field = (<FormGroup>formControl.root).get(otherField);

      // Verifica se o valor do 1° campo existe
      if (!field){

        throw new Error('É necessario informar um campo válido.');

      }

      // Compara o 1° valor com o 2° valor
      if (field.value !== formControl.value){

        return {equalsTo: otherField};

      }

      // Caso não tenha erro retorne null
      return null;
    }

    return validator;
  }
}
