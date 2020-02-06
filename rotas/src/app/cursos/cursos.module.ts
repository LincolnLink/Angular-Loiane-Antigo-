import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [
    CursosComponent,    
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CursosService]
})
export class CursosModule { }
