import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


import { cepData } from 'src/app/Entidades/cepData';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  //Se coloca privada para ela se tornar local!
  constructor(private http: HttpClient) { }

  //GET - endpoint que pega dados de um cep!
  getCep(cep: any){

    // Remove caracteres indesejaveis
    cep = cep.replace(/\D/g, '');

    // Verfirificar se não está vazio!
    if (cep !== ''){

      // Expressão regular para validar o CEP
      const validaCep = /^[0-9]{8}$/;

      // Valida o formato do CEP
      if (validaCep.test(cep)){

        const configUrl = `//viacep.com.br/ws/${cep}/json`;

        return this.http.get<cepData>(configUrl);

      }
      return of({});
    }
    return of({});
  }

  //POST - envia dados para uma API de teste
  postFormData(form: FormGroup){

    const configUrl = `https://httpbin.org/post`;

    //Converte um objeto JS em JSON!
    return this.http.post(configUrl, JSON.stringify(form.value));
  }


}
