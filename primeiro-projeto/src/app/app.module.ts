import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { PrimeiroCursoComponent } from './cursos/primeiro-curso/primeiro-curso.component';
import { CursosModule } from './cursos/cursos.module';

//Componente(primeiroCursoComponent) de outro Module!
@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
