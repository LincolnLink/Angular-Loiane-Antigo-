import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { promise } from 'protractor';


@Injectable()
export class CursosGuard implements CanActivateChild {

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): boolean | Observable<boolean> | Promise<boolean>
    {
        console.log("Chamando guarda de rotas filhas! - cursos");

        // Usa esses dois objetos para criar logica
        console.log(childRoute);
        console.log(state);

        return true;
    }
    

    
    constructor() {       
        
    }

}