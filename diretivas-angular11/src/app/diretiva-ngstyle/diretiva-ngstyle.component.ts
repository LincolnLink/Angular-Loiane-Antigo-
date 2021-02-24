import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {


  ativo: boolean = false;
  tamanhoFonte: number = 10;

  constructor() { }

  ngOnInit() {
  }


  onClick(){

    this.ativo = !this.ativo;
    
  }

}
