import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { buffer, tap } from 'rxjs/operators';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc-unsub',
  template: `<app-poc-base [nome]="nome"
  [valor]="valor" estilo="bg-secondary">
</app-poc-base>`

})
export class PocUnsubComponent implements OnInit,OnDestroy {


  nome = 'Componente com unsubscribe';

  valor: string;

  // Criando um unsubscribe manualmente
  sub: Subscription;

  // Unsub... com array, mas existe maneiras melhorando usando rxjs!
  // sub: Subscription[] = [];

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {

    // Pegando o novo valor e atribuindo!
    this.sub = this.service.getValor()
    .pipe(tap(v => console.log(this.nome, v)))
    .subscribe(novoValor => this.valor = novoValor);

    // this.sub.push( ... );
  }

  // Verificando quando ele é destruido!
  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log(`${this.nome} foi destruido`);

    //this.sub.foreach(x => x.unsubscribe())
  }

}
