import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NgxNavbarModule } from 'ngx-bootstrap-navbar'; 

import { CursosModule } from './cursos/cursos.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AlunosModule } from './alunos/alunos.module';

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
    CursosModule,
    AlunosModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
