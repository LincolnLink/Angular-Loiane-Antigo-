import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
  pathMatch -> Totalmente vazio,
  redirectTo -> redireciona para cursos!
  ---------------------------------------
  Criando LazyLoading
*/
const routes: Routes = [
  {
   path: '', pathMatch: 'full', redirectTo: 'cursos'
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
