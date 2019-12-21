import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeiroCursoComponent } from './primeiro-curso/primeiro-curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.Service';


//exportando o componente para outro modulo reconhecer
@NgModule({
  declarations: [PrimeiroCursoComponent, CursoDetalheComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PrimeiroCursoComponent
  ],
  providers: [CursosService]
})
export class CursosModule { }
