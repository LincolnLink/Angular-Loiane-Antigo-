import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxNavbarModule } from 'ngx-bootstrap-navbar'; 

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,  
    BrowserAnimationsModule,  
    NgxNavbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
