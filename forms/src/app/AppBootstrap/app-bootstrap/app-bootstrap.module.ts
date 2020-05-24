import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap/alert';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  exports:[
    AlertModule
  ]
})
export class AppBootstrapModule { }
