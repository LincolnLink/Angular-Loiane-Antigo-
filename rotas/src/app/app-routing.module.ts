import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


/* Define o nome da rota e vincula um componente */
const routes: Routes = [
  { path: 'cursos', component:CursosComponent },
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent}
];

/*Configura a lista de rotas que foi definidas! */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
