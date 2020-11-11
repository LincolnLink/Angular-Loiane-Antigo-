import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { KeyValueComponent } from './key-value/key-value.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';

const routes: Routes = [
  {path: 'keyvalue', component: KeyValueComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'url-invalida', component: KeyValueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    malformedUriErrorHandler:
        (error: URIError, urlSerializer: UrlSerializer, url: string) => {
            // console.log(error);
            console.log(url);
            return urlSerializer.parse('/url-invalida');
        }
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
