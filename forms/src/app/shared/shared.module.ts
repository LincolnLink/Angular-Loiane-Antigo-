import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { AppBootstrapModule } from '../AppBootstrap/app-bootstrap/app-bootstrap.module';
import { ControleErroGenericoTesteComponent } from './controle-erro-generico-teste/controle-erro-generico-teste.component';
import { DropdownService } from './services/dropdown.service';
import { ErrorMsgComponent } from './error-msg/error-msg.component';


@NgModule({
  declarations: [
    CampoControlErroComponent,
    FormDebugComponent,
    ControleErroGenericoTesteComponent,
    ErrorMsgComponent
  ],
  imports: [
    CommonModule,
    AppBootstrapModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CampoControlErroComponent,
    FormDebugComponent,
    AppBootstrapModule,
    ControleErroGenericoTesteComponent,
    ErrorMsgComponent
  ],
  providers:[]
})
export class SharedModule { }
