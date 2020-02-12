import { NgModule, Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

/* Exemplo de rotas filhas */
const alunosRoutes: Routes = [
  {path: '', component:AlunosComponent, children: [
      {path: 'novo', component: AlunoFormComponent},
      {path: ':id', component: AlunoDetalheComponent},
      {path: ':id/editar', component: AlunoFormComponent},
  ]},
  
 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]

})
export class AlunosRoutingModule { }
