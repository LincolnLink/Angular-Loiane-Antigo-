import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestePaginacaoComponent } from './paginacao-Base/teste-paginacao.component';

const routes: Routes = [{ path: '', component: TestePaginacaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestePaginacaoRoutingModule {}
