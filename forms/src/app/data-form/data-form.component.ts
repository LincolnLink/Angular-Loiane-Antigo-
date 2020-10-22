import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

import { cepData } from '../Entidades/cepData';
import { DropdownService } from './../shared/services/dropdown.service';
import { EstadoBr } from './../shared/models/estado-br.model';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { empty, observable, Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { ValueTransformer } from '@angular/compiler/src/util';
import { FormValidationsService } from '../shared/services/form-validations.service';
import { VerificaEmailService } from './services/verifica-email.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';



@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {

  dismissible = true;

  //formulario: FormGroup;

  /*estados: EstadoBr[];*/
  estados: Observable<EstadoBr[]>;

  cargos: any[];

  tecnologias: any[];

  newsletterOp: any[];

  // Pode vim de alguma base de dados!
  frameworksList: any[];

  constructor(
    private formBuilder: FormBuilder,
    private cepService: ConsultaCepService,
    private dropdownService: DropdownService,
    private validarEmailService: VerificaEmailService
  )
  {
    super();
  }

  ngOnInit(): void {

    //Chamada da lista de estado
    /*
    this.dropdownService.getEstadosBr()
    .subscribe((dados: EstadoBr[]) =>{ this.estados = dados; console.log(dados);});
    */

    //this.validarEmailService.verificarEmail('email4@email.com.br').subscribe();

    this.estados = this.dropdownService.getEstadosBr();

    this.cargos = this.dropdownService.getCargos();

    this.tecnologias = this.dropdownService.getTecnologias();

    this.newsletterOp = this.dropdownService.getNewsletter();

    this.frameworksList = ['Angular', 'React', 'Vue', 'Sencha'];

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    // Melhor forma de declarar os campos do formulario!
    this.formulario = this.formBuilder.group({

      // 1° parametro: valor inicial
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, FormValidationsService.equalsTo('email')],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidationsService.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo:[null, Validators.required],
      tecnologias:[null],
      newsletter:[1],
      termos:[null, Validators.requiredTrue],
      frameworks: this.buildFrameworks(),
    });

    //console.log(this.formulario)

    // Verifica o status do formulario e caso esteja valido, busca o cep!
    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(statusValue => console.log('status CEP: ', statusValue)),
        switchMap(status => status === 'VALID' ?
        this.cepService.getCep(this.formulario.get('endereco.cep').value)
          : empty()
        )
      )
      .subscribe((data :cepData) => this.feedsData(data));

  }

  buildFrameworks(){

    // Criando manualmente!
    /*return[
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]*/

    // Criando dinamicamente
    const values = this.frameworksList.map( v => new FormControl(false));

    return this.formBuilder.array(values, FormValidationsService.requiredMinCheckbox(1));

  }

   // (POST) Método que envia os dados preenchido para o servidor!
  submit() {

      this.cepService.postFormData(this.formulario, this.frameworksList)
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

  // (GET) Consulta o cep digitado, depois que perde o foco, usando uma requisição em API de terceiros!
  // Aplicava quando perdia o foco com o evento "BLUR"
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

  setarCargo(){
    const cargo = {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'};

    this.formulario.get('cargo').setValue(cargo);
  }

  comparandoObjetos(obj1, obj2)
  {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel): obj1 === obj2;
  }

  setarTecnologia(){
    const tec = ['java','php','c#']

    this.formulario.get('tecnologias').setValue(tec);
  }

  validarEmail(formControl: FormControl){

    let outroCampo = this.formulario.get('confirmarEmail');

    outroCampo.setValue('');

    return this.validarEmailService.verificarEmail(formControl.value)
    .pipe(
      map(emailExiste => emailExiste ? { emailInvalido: true } : null)
    );
  }





}
