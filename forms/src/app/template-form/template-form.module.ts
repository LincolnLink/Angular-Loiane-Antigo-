import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TemplateFormComponent } from './template-form.component';
import { ConsultaCepService } from './consulta-cep.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TemplateFormComponent    
  ],
  imports: [    
    CommonModule,
    FormsModule,
    HttpClientModule,    
    SharedModule         
  ],  
  providers: [ConsultaCepService]
})
export class TemplateFormModule { }
