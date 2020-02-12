import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


/* Define o nome da rota e vincula um componente */
/* Path Está vazio porque está configurado na rota  */
const cursosRoutes: Routes = [
  { path: '', component:CursosComponent },
  { path: ':id', component:CursoDetalheComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
];


@NgModule({  
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
