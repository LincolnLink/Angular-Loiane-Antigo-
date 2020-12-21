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
   path: '', pathMatch: 'full', redirectTo: 'upload-file'
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'rxjs-poc',
    loadChildren: () => import('./unsubscribe-rxjs/unsubscribe-rxjs.module').then(m => m.UnsubscribeRxjsModule)
  },
  {
    path: 'upload-file',
    loadChildren: () => import('./upload-file/upload-file.module').then(m => m.UploadFileModule)
  },
  {
    path: 'teste-paginacao',
    loadChildren: () => import('./teste-paginacao/teste-paginacao.module').then(m => m.TestePaginacaoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
