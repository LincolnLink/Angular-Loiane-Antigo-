import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { AppBootstrapModule } from '../AppBootstrap/app-bootstrap/app-bootstrap.module';



@NgModule({
  declarations: [
    CampoControlErroComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    AppBootstrapModule
  ],
  exports:[
    CampoControlErroComponent,
    FormDebugComponent,
    AppBootstrapModule
  ]
})
export class SharedModule { }
