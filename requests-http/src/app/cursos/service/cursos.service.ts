import { environment } from './../../../environments/environment';
import { Curso } from './../curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // readonly: siginifica que não pode atualizar essa variavel!
  //private readonly API = 'http://localhost:3000/cursos';

  private readonly API = `http://localhost:3000/cursos`;

  constructor(private http: HttpClient) { }


  // GET All
  list(){
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }

  // Get byID
  loadById(id){
    return this.http.get<Curso>(`${this.API}/${id}`)
    .pipe(
      take(1)
    );
  }


  // Post
  private create(curso: string){

    // Com apenas uma tentativa, a não ser se o backend fosse reativo!
    return this.http.post(this.API, curso)
    .pipe(take(1));

  }

  // Put
  private update(curso){
    return this.http.put(`${this.API}/${curso.id}`,curso)
    .pipe(take(1));
  }

  // Método que salva ou atualiza
  save(curso){
    if(curso.id){
      return this.update(curso);
    }
    return this.create(curso);
  }

  delete(id){
   return this.http.delete(`${this.API}/${id}`)
    .pipe(
      take(1)
    );
  }

}
