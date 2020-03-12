import { Injectable, Component } from '@angular/core';
import { 
    ActivatedRouteSnapshot,
    CanDeactivate,
    RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunoFormComponent } from './../aluno-form/aluno-form.component';
import { IformCanDeactivade } from 'src/app/guards/iform-candeactivate';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable({providedIn: 'root'})
export class AlunosDeactivateGuard implements CanDeactivate<IformCanDeactivade> {
    canDeactivate(
        component: IformCanDeactivade,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        console.log("Entrou na configuração de desativar a rota [x]");

        // Logica para definir se vai mudar ou não de rota!
        //return component.podeMudarDeRota();

        return component.podeDesativar();

    }
}