import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { cepData } from '../Entidades/cepData';
import { map } from 'rxjs/operators';
import { DropdownService } from './../shared/services/dropdown.service';
import { EstadoBr } from './../shared/models/estado-br.model';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  dismissible = true;

  formulario: FormGroup;

  /*estados: EstadoBr[];*/
  estados: Observable<EstadoBr[]>;

  cargos: any[];

  constructor(
    private formBuilder: FormBuilder,
    private cepService: ConsultaCepService,
    private dropdownService: DropdownService
  ){ }

  ngOnInit(): void {

    //Chamada da lista de estado
    /*
    this.dropdownService.getEstadosBr()
    .subscribe((dados: EstadoBr[]) =>{ this.estados = dados; console.log(dados);});
    */

    this.estados = this.dropdownService.getEstadosBr();

    this.cargos = this.dropdownService.getCargos();

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
      }),
      cargo:[null]


    });

    //console.log(this.formulario)

  }

  //(POST) Método que envia os dados preenchido para o servidor!
  onSubmit(){

    // console.log(this.formulario.value);

    if(this.formulario.valid){

      this.cepService.postFormData(this.formulario)
      .subscribe(dados =>{

        //TODO: Criar uma requisição post para uma API
        console.log(dados);

        // reseta o form
        // this.formulario.reset();
        this.resetar();

        },
        (error: any) => alert('erro')

      );
    }
    else
    {
      console.log('Formulario invalido');

      this.verificaValidacoesForm(this.formulario);

    }
  }

  //(GET) Consulta o cep digitado, depois que perde o foco, usando uma requisição em API de terceiros!
  consultaCep(){

    // Obtenha o valor do campo cep
    let cep = this.formulario.get("endereco.cep").value;

    if(cep != null && cep !== ''){
      // Mapeia os valores e transformar em um json
      // Se inscreve para ter a notificação, seria a execução de uma função como se fosse um callback!
      this.cepService.getCep(cep)
      .pipe(map(data => data))
      .subscribe((data :cepData) => this.feedsData(data));
    }
    // TODO:  Implementar uma mensagem de ERRO caso o cep esteja errado

    this.resetDados();
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

    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)

  }

  //(VALIDAÇÃO)
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


  /*
    Método que popula os campos, "setValue" e "patchValue" são Método do FormGroup,
    "patchValue" é a melhor maneira de popular os dados, porque você escolher qual campo pode popular!
  */
  feedsData(dados: cepData){

    /* formulario.setValue({
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

    //Popular apenas um campo
    //this.formulario.get('nome').setValue('Lincoln');

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

  verificaValidacoesForm(dateInforme: FormGroup)
  {
    Object.keys(dateInforme.controls).forEach(campo => {
      console.log(campo);
      const controle = dateInforme.get(campo);
      controle.markAsDirty();

      if(controle instanceof FormGroup){
        this.verificaValidacoesForm(controle);
      }
    });
  }

}
