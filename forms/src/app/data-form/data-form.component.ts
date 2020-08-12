import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ConsultaCepService } from '../template-form/consulta-cep.service';
import { cepData } from '../Entidades/cepData';
import { map } from 'rxjs/operators';

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
    private httpServiceCep: ConsultaCepService)
    { }

  ngOnInit(): void {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    // Melhor forma de declarar os campos do formulario!
    this.formulario = this.formBuilder.group({

      // 1° parametro: valor inicial
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })

    });

    //console.log(this.formulario)

  }

  // Método que envia os dados preenchido para o servidor!
  onSubmit(){

    // console.log(this.formulario.value);

    this.httpServiceCep.postFormData(this.formulario)
    .subscribe(dados =>{

       console.log(dados);
       // reseta o form
       // this.formulario.reset();
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
  isValidTouched(campo: string){

    // this.formulario.controls["campo"];

    // Melhor forma de pegar o campo do formulario!
    return this.formulario.get(campo).valid && this.formulario.get(campo).touched

  }

  // Verifica se o campo foi tocado e se é valido!
  isInValidTouched(campo: string){

    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched

  }

  isInvalidEmail(){
    let emailProp = this.formulario.get('email');

    if(emailProp.errors){
      return emailProp.errors['email'] && emailProp.touched;
    }
  }

  aplicaCssErro(campo: string){

    return {
      'is-valid': this.isValidTouched(campo),
      'is-invalid': this.isInValidTouched (campo)
    }

  }

  consultaCep(){

    // Obtenha o valor do campo cep
    let cep = this.formulario.get("endereco.cep").value;

    // Remove caracteres indesejaveis
    cep = cep.replace(/\D/g, '');

    // Verfirificar se não está vazio!
    if (cep !== ''){

      // Expressão regular para validar o CEP
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)){

        this.resetDados();

        // TODO:  Implementar uma mensagem de ERRO caso o cep esteja errado

        // Mapeia os valores e transformar em um json
        // Se inscreve para ter a notificação, seria a execução de uma função como se fosse um callback!
        this.httpServiceCep.getCep(cep)
          .pipe(map(data => data))
          .subscribe((data :cepData) => this.feedsData(data))



      }
    }
  }


  // "setValue" e "patchValue" são Método do FormGroup!
  // Método que popula os campos
  // "patchValue" é a melhor maneira de popular os dados,
  // porque  você escolher qual campo pode popular!
  feedsData(dados: cepData){

    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados.cep.replace(/\D/g, ''),
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    this.formulario.patchValue({

      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }


  // Reseta campos especificos, e não todos!
  resetDados(){

    this.formulario.patchValue({

      endereco: {
        complemento: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
      }

    });

  }

}
