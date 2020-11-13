import { environment } from './../../../environments/environment';
import { Curso } from './../curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // readonly: siginifica que não pode atualizar essa variavel!
  //private readonly API = 'http://localhost:3000/cursos';

  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) { }


  // GET All
  list(){
    return this.http.get<Curso[]>(this.API)
    .pipe(tap(console.log));
  }


}
