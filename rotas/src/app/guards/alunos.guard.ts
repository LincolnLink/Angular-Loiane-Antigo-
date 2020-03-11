import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { promise } from 'protractor';


@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): boolean | Observable<boolean> | Promise<boolean>
    {
        console.log("Chamando guarda de rotas filhas - ALUNOS!");
            return true;
    }

    
    constructor() {       
        
    }

}