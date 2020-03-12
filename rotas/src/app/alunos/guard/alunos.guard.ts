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
        // Usa esses dois objetos para criar logica
        console.log(childRoute);
        console.log(state);

        // Pode se criar uma validação para verificar se o usuario pode editar ou não!
        if(state.url.includes('editar')){
            alert('Usuario de acesso');
            return false;
        }

        return true;
    }

    
    constructor() {       
        
    }

}