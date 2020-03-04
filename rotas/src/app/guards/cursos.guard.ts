import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
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
            return true;
            //TODO -  iniciando quarda de rotas filhas, criei outro branch para poder 
            // atualizar o Angular8 para o Angular9
    }

    
    constructor() {       
        
    }

}