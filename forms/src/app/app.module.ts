import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

import { TemplateFormModule } from './template-form/template-form.module';
import { DataFormModule } from './data-form/data-form.module';


//declarations: cadastra os component, diretivas e pipes, criando um vinculo unico com eles!
//imports: inclui modulos que vem de fora.
//export: compartilha o acesso de componentes e modulos. 
//providers: lista de serviços que os component, diretiva, e pipes vão usar.

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
