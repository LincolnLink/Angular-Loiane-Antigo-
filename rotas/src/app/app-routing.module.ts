import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';


/* Define o nome da rota e vincula um componente */
/* Configurando Modulos sobre demanda*/
/* Informa o path principal, mais o caminho do Module! */
/* Lazy Loading */
const appRoutes: Routes = [
  { 
    path: 'cursos', 
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
  },
  { 
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    //canActivateChild: [AlunosGuard]
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
