import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { strict } from 'assert';
import { map, tap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient) { }


  verificarEmail(email: string){
    return this.http.get('assets/dados/verificarEmail.json')
    .pipe(
      delay(5000),
      map((dados: {emails: any[]}) => dados.emails),
      tap(console.log),
      map((dados : {email: string}[]) => dados.filter(v => v.email === email) ),
      //tap(console.log),
      map( dados => dados.length > 0),
      //tap(console.log)
    );
  }
}
