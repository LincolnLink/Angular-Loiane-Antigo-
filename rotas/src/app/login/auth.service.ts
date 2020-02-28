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
    fazerLogin(usuario: Usuario){

      // Validar o usuario e senha pelo servidor, com um token!
      console.log(usuario);

      //Logica temporaria
      if(usuario.nome === "Link")
      {        
        this.usuarioAutenticado = true;
        console.log(this.usuarioAutenticado);
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/home']);
      }
      else
      {        
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
        console.log(this.usuarioAutenticado);
      }
    }
}
