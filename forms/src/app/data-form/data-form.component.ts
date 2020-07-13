import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ConsultaCepService } from '../template-form/consulta-cep.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  dismissible = true;

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formService: ConsultaCepService) 
    { }

  ngOnInit(): void {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    //Melhor forma de declarar os campos do formulario!
    this.formulario = this.formBuilder.group({

      // 1° parametro: valor inicial
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]]

    });

    //console.log(this.formulario)

  }

  //Método que envia os dados preenchido para o servidor!
  onSubmit(){

    //console.log(this.formulario.value);

    this.formService.postFormData(this.formulario)    
    .subscribe(dados =>{

       console.log(dados);
       //reseta o form 
       //this.formulario.reset();
       this.resetar();

      },
      (error: any) => alert('erro')
      
    );
      
  }

  /// Método que limpa os campos  
  resetar(){
    this.formulario.reset();
  }

  // Verifica se o campo foi tocado e se é valido!
  isValidTouched(campo: any){

    //this.formulario.controls["campo"];

    //Melhor forma de pegar o campo do formulario!
    return this.formulario.get(campo).valid && this.formulario.get(campo).touched

  }

  // Verifica se o campo foi tocado e se é valido!
  isInValidTouched(campo: any){

    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched

  }

  aplicaCssErro(campo){

    return {
      'is-valid': this.isValidTouched(campo),
      'is-invalid': this.isInValidTouched (campo)        
    } 

  }

}
