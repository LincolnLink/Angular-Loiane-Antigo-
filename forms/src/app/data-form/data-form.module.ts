import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataFormComponent } from './data-form.component';
import { AuxiliaresModule } from '../componentes-auxiliares/auxiliares.module';


@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    HttpClientModule,    
    AuxiliaresModule
  ]
})
export class DataFormModule { }
