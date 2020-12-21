import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestePaginacaoComponent } from './paginacao-Base/teste-paginacao.component';
import { TestePaginacaoRoutingModule } from './teste-paginacao-routing.module';
import { PrimeiroTesteComponent } from './primeiroTeste/primeiro-teste/primeiro-teste.component';


@NgModule({
  declarations: [TestePaginacaoComponent, PrimeiroTesteComponent],
  imports: [
    CommonModule,
    TestePaginacaoRoutingModule

  ]
})
export class TestePaginacaoModule { }
