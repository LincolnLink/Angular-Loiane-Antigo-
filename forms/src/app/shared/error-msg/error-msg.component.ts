import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { FormValidationsService } from '../services/form-validations.service';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  @Input() cssErro: string;

  //@Input() condicao: boolean;
  //@Input() msnErro: string;


  dismissible = true;

  constructor() { }

  ngOnInit(): void {

  }

  // Método é executado de acordo com o tempo de uso no template
  get errorMessage(){

    for( const propertyName in this.control.errors){

      if(this.control.errors.hasOwnProperty(propertyName) &&
      this.control.touched){

        return FormValidationsService.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
      }

    }
    return null;
  }

}
