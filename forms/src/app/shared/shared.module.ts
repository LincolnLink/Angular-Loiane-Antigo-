import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { AppBootstrapModule } from '../AppBootstrap/app-bootstrap/app-bootstrap.module';
import { ControleErroGenericoTesteComponent } from './controle-erro-generico-teste/controle-erro-generico-teste.component';



@NgModule({
  declarations: [
    CampoControlErroComponent,
    FormDebugComponent,
    ControleErroGenericoTesteComponent
  ],
  imports: [
    CommonModule,
    AppBootstrapModule
  ],
  exports:[
    CampoControlErroComponent,
    FormDebugComponent,
    AppBootstrapModule,
    ControleErroGenericoTesteComponent
  ]
})
export class SharedModule { }
