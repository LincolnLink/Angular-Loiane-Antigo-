import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {    
  }

  
  iniciandoLogin(usuario: Usuario){

    // Validação dos dados!
    this.authService.fazerLogin(this.usuario);

  }


}
