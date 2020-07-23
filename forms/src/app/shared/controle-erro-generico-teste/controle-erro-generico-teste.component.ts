import { FormGroup, FormControl, EmailValidator, FormControlName } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-controle-erro-generico-teste',
  templateUrl: './controle-erro-generico-teste.component.html',
  styleUrls: ['./controle-erro-generico-teste.component.css']
})
export class ControleErroGenericoTesteComponent implements OnInit {


  @Input() controle: FormControlName;
  @Input() nomeCampo: string;

  msnErro: string;

  dismissible = true;

  constructor() { }

  ngOnInit(): void {
  }

  exibeCampo(){
    

    if(this.nomeCampo == "email"){ 

        if(this.controle.errors && this.controle.touched){

          this.msnErro = "Campo de Email é obrigatorio!  <- logica em outro componente";

          if(this.controle.errors['email'] && this.controle.touched){

            this.msnErro = "O email está errado e é obrigatorio!  <- logica em outro componente";

            return true;
          }

          return true;
        }
    }


    if(this.nomeCampo == "nome"){ 

      if(this.controle.errors){

        let resultado = !this.controle.valid && this.controle.touched;

        if(resultado == true){

          this.msnErro = "O Nome está invalido!   <- logica em outro componente";       
          
        }

        return resultado          
      }
  }
    
  }

}
