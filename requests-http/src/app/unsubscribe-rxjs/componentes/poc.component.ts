import { tap } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-danger">
    </app-poc-base>
    `

})
export class PocComponent implements OnInit, OnDestroy {

  nome = 'Componente sem unsubscribe';
  valor: string;

  constructor(private service: EnviarValorService) { }


  ngOnInit(): void {

    // Pegando o novo valor e atribuindo!
    this.service.getValor()
    .pipe(tap(v => console.log(this.nome, v)))
    .subscribe(novoValor => this.valor = novoValor);
  }

  // Ferificando quando ele é destruido!
  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }

}
