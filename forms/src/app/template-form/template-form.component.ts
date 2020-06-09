import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  dismissible = true;

  userExemplo: any = { 
    nome: null, 
    email: null
  };

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form: any){
    console.log(form);
    //console.log(form.value);
    //console.log(this.userExemplo);
  }


  // Verifica se o campo foi tocado e se é valido!
  isValidTouched(campo: any){
    return campo.valid && campo.touched;
  }

  // Verifica se o campo foi tocado e se é valido!
  isInValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  // Retorna um conjuto de classes CSS, de acordo com a condição baseada no parametro!
  aplicaCssErro(campo){ 
      return {
        'is-valid': this.isValidTouched(campo),
        'is-invalid': this.isInValidTouched (campo)        
    }  
  }

  

}
