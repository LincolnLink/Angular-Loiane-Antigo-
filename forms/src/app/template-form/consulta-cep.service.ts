import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { FormGroup } from '@angular/forms';
import { cepData } from '../Entidades/cepData';


@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  //Se coloca privada para ela se tornar local!
  constructor(private http: HttpClient) { }

  //GET - endpoint que pega dados de um cep!
  getCep(cep: any){

    const configUrl = `//viacep.com.br/ws/${cep}/json`;

    return this.http.get<cepData>(configUrl);
    
  }

  postFormData(form: FormGroup){

    const configUrl = `https://httpbin.org/post`;

    //Converte um objeto JS em JSON!
    return this.http.post(configUrl, JSON.stringify(form.value));
  }

}
