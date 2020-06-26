import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

import { TemplateFormModule } from './template-form/template-form.module';
import { DataFormModule } from './data-form/data-form.module';


//declarations: component, diretivas e pipes.
//imports: modulos que vem de fora.
//export: compartilha acesso de componentes e modulos. 
//providers: serviços.

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxNavbarModule,
    TemplateFormModule,    
    DataFormModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
