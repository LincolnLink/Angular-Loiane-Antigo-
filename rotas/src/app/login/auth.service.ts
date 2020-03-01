import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';


@Injectable(/*{
  providedIn: 'root'
}*/)
export class AuthService {

    private usuarioAutenticado: boolean = false;
    mostrarMenuEmitter = new EventEmitter<boolean>();

    constructor(private router: Router) { }
  
    //TODO 
    // Validar Login - retornaria um token!
    fazerLogin(usuario: Usuario){
      
      //Logica temporaria para validação!
      if(usuario.nome === "Link")
      {        
        this.usuarioAutenticado = true;
        
        // Decide se mostra o menu ou não
        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);
      }
      else
      {
        this.usuarioAutenticado = false;

        // Decide se mostra o menu ou não
        this.mostrarMenuEmitter.emit(false);       
      }
    }
    

    usuarioEstaAutenticado(){
      return this.usuarioAutenticado;
    }
}
