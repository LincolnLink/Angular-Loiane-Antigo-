import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot,   
  Router,
  CanLoad,
  Route,
  UrlSegment
} from '@angular/router';


@Injectable(/*{
  providedIn: 'root'
}*/)
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
    ){}
    
  

  // No JS não tem o conceito Interface, mas se deve implementar o método obrigatorio! 
  // Implementando o método que reconhece o serviço como uma Guarda de rotas!
  // Parametros pode ter qualquer nome, mas o tipo é obrigatorio  
  // Os resultados de pois do ':' são os tipos de retornos!
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) : Observable<boolean> | boolean
  {
    console.log("canActivate: Verifica se esta logado - Guarda de rota Global!");    

    return this.verificarAcesso();   
    
  }

  private verificarAcesso(){

    if(this.authService.usuarioEstaAutenticado())
    {
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;

  }


  canLoad(
    route: Route, 
    segments: UrlSegment[]
    ): boolean | Observable<boolean> | Promise<boolean> {
    
    console.log("canLoad: Verificando se o usuario pode carregar o cod. do mudule")

    return this.verificarAcesso();

  }



}
