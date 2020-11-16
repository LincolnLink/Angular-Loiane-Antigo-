import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-unsubscribe-poc-component',
  templateUrl: './unsubscribe-poc-component.html',
  styleUrls: ['./unsubscribe-poc-component.scss']
})
export class UnsubscribePocComponent implements OnInit {

  mostrarComponentes = true;

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
  }

  emitirValor(valor: string){

    return this.service.emitirValor(valor);

  }

  // Altera o valor bool, para esconder(destruir) os component!
  destruirComponentes(){

    this.mostrarComponentes = !this.mostrarComponentes;

  }

}
