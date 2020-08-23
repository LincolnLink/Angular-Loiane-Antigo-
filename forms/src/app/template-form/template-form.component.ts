import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { cepData } from '../Entidades/cepData';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';

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

  constructor(private cepService: ConsultaCepService) { }

  ngOnInit(): void {
  }


  onSubmit(formularioVariavel: any){
    // console.log(form);
    // console.log(form.value);
    // console.log(this.userExemplo);

    this.cepService.postFormData(formularioVariavel)
    .pipe(map(data => data))
    .subscribe(data =>{
       console.log( "informações enviadas: " + data)

       formularioVariavel.form.reset();

      }
    );
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

  // Consulta uma API que busca dados de cep
  consultaCEP(cep, form){

    if(cep != null && cep !== ''){
      // Mapeia os valores e transformar em um json, .pipe(map(data => data))
      // Se inscreve para ter a notificação, seria a execução de uma função como se fosse um callback!
      this.cepService.getCep(cep)
      .subscribe((data :cepData) => this.feedsData(data, form))

    }
    // TODO:  Implementar uma mensagem de ERRO caso o cep esteja errado
  }

  // "setValue" e "patchValue" são Método do FormGroup!
  // Método que popula os campos
  feedsData(dados: cepData, formulario){

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

    // console.log(formulario);

    formulario.form.patchValue({

      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }

    });

  }

  // Reseta os dados do campo!
  resetDados(formulario){

    formulario.form.patchValue({

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
