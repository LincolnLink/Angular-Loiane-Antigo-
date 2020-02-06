import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';


/* Define o nome da rota e vincula um componente */
const routes: Routes = [
  { path: 'cursos', component:CursosComponent },
  { path: 'curso/:id', component:CursoDetalheComponent },
  { path: 'login', component: LoginComponent},
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  { path: '', component: HomeComponent}
];

/*Configura a lista de rotas que foi definidas! */
/*RouterModule é exportado e importado, para poder usar a diretiva routerLink */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
