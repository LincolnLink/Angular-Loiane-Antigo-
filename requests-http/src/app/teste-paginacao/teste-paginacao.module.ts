import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestePaginacaoRoutingModule } from './teste-paginacao-routing.module';
import { TestePaginacaoComponent } from './paginacao-Base/teste-paginacao.component';
import { PrimeiroTesteComponent } from './primeiroTeste/primeiro-teste/primeiro-teste.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations:
  [
    TestePaginacaoComponent,
    PrimeiroTesteComponent
  ],
  imports:
  [
    CommonModule,
    ReactiveFormsModule,
    TestePaginacaoRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class TestePaginacaoModule { }
