import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc-take-until',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-primary">
    </app-poc-base>
    `

})
export class PocTakeUntilComponent implements OnInit,OnDestroy {

  nome = 'Componente com takeUntil';
  valor: string;

  unsub$ = new Subject();

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {

    // Pegando o novo valor e atribuindo!
    this.service.getValor()
      .pipe(
        tap(v => console.log(this.nome, v)),
        takeUntil(this.unsub$)
      )
      .subscribe(novoValor => this.valor = novoValor);
  }

  // Verificando quando ele é destruido!
  ngOnDestroy() {

    // emite um valor, para tivar a inscrição!
    this.unsub$.next();

    // completa para não ter problema de memoriLiki
    this.unsub$.complete();
    console.log(`${this.nome} foi destruido`);
  }

}
