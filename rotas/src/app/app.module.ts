import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NgxNavbarModule } from 'ngx-bootstrap-navbar'; 

/* For comentado para poder configurar o Module por demanda */

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,      
    BrowserAnimationsModule,
    AppRoutingModule, 
    NgxNavbarModule,
    //CursosModule,
    //AlunosModule,
    
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
