import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    CursosModule,
    CriarCursoModule    
  ],   
  providers: [LogService],
  bootstrap: [AppComponent]

})
export class AppModule { }
