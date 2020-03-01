import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


/* Define o nome da rota e vincula um componente */
/* Configurando Modulos sobre demanda*/
/* Informa o path principal, mais o caminho do Module! */
/* Lazy Loading */
const appRoutes: Routes = [
  { 
    path: 'cursos', 
    loadChildren: './cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'alunos',
    loadChildren: './alunos/alunos.module#AlunosModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent    
  },
  { 
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }

];

/*Configura a lista de rotas que foi definidas! */
/*RouterModule é exportado e importado, para poder usar a diretiva routerLink */
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
