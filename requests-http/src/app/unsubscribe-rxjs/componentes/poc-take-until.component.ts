import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc-take-until',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-primary">
    </app-poc-base>
    `

})
export class PocTakeUntilComponent implements OnInit {

  nome = 'Componente com takeUntil';
  valor: string;

  unsub$ = new Subject();

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
  }

}
