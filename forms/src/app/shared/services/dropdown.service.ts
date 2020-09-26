import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoBr } from '../models/estado-br.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr(){

    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
    //.pipe(map((res: Response) => res.json()));

  }

  getCargos(){
    return [
      {nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
      {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
      {nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr'},
    ]
  }

  getTecnologias(){
    return [
      {nome: 'java script', desc: 'Java Script'},
      {nome: 'php', desc: 'PHP'},
      {nome: 'c#', desc: 'C#'},
      {nome: 'java', desc: 'Java'},
      {nome: 'ruby', desc: 'Ruby'},
    ];
  }



}
