import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {cep } from './Entidades/cep';


@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  //Se coloca privada para ela se tornar local!
  constructor(private http: HttpClient) { }

  //Mapeia os valores e transformar em um json
  //Se inscreve para ter a notificação, seria a execução de uma função como se fosse um callback!
  getCep(cep: any){

    const configUrl = `//viacep.com.br/ws/${cep}/json`;

    return this.http.get<cep>(configUrl);
    
  }

}
