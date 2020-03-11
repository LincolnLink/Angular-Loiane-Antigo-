import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot,   
  Router
} from '@angular/router';


@Injectable(/*{
  providedIn: 'root'
}*/)
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  // Implementando a Interface que reconhece o serviço como uma Guarda de rotas!
  // passando os parametros!
  // Os resultados de pois do ':' são os retornos!
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) : Observable<boolean> | boolean
  {
    //throw new Error("Method not implemented.");
    if(this.authService.usuarioEstaAutenticado())
    {
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
    
  }



}
