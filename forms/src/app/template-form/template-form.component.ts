import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  dismissible = true;

  userExemplo: any = { 
    nome: null, 
    email: null
  };

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form: any){
    console.log(form);
    //console.log(form.value);
    //console.log(this.userExemplo);
  }

  

}
