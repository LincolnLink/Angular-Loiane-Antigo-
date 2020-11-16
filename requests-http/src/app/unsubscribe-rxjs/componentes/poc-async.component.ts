import { EnviarValorService } from './../enviar-valor.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poc-async',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor$ | async" estilo="bg-success">
    </app-poc-base>
  `

})
export class PocAsyncComponent implements OnInit {

  nome = 'Componente com async';
  valor$: Observable<string>;

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
  }

}
