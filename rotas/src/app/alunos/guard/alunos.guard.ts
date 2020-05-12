import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { promise } from 'protractor';


@Injectable()
export class AlunosGuard implements CanActivateChild {

    // Guarda de rota, para rotas filhas
    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): boolean | Observable<boolean> | Promise<boolean>
    {
        console.log("Verifica permissão para Editar - Guarda de rotas filha!");
        // Usa esses dois objetos para criar logica
        //console.log(childRoute); // Uma copia da  rota ativa
        //console.log(state); // O status da rota a tiva

        // Pode se criar uma validação para verificar se o usuario pode editar ou não
        // se base ando na informação do objeto state!
        // ng-if é melhor escolha!
        if(state.url.includes('editar')){
            //alert('Usuario de acesso');
            //return false;
        }

        return true;
    }

    constructor() {}

}