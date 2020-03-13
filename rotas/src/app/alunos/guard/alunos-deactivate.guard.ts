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

// Cria uma interface para poder tipar o CanDeactivate, e tornar ele generico!
// Assim todos os componentes pode ter a opção de cancelar a rota, implementa o método da interface
// com a logica que decide, se vai ser desativado ou não a rota!
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