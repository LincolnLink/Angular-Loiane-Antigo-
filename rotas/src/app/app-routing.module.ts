import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


/* Define o nome da rota e vincula um componente */
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent}
];

/*Configura a lista de rotas que foi definidas! */
/*RouterModule é exportado e importado, para poder usar a diretiva routerLink */
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
