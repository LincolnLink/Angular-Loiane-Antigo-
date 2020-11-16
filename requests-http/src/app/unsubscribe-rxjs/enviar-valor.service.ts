import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviarValorService {

  // Emissor do RXJS, existe varios tipos de sujeitos!
  private emissor$ = new Subject<string>();

  constructor() { }

  // A forma que é emitida o valor observable
  emitirValor(valor: string){
    this.emissor$.next(valor);
  }

  // Retorna o valor da propriedade privada!
  getValor(){
    return this.emissor$.asObservable();
  }
}
