import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../service/cursos.service';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor(
    private httpService: CursosService
    ){}


    // route: uma fotografia da rota, pode extrair os parametros da rota!
    // state: Nesse cenário não importa!
    resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<Curso> {

      if(route.params && route.params['id']){

        // Se reclamar que um observable
        //de object não é um observable de curso, deve se tipar o getbyId

        return this.httpService.loadById(route.params['id'])

      }

      // Situação aonde é criado um curso novo!
      // O operador "of()" do RXJS, serve para retornar
      // um observable apartir de um objeto!

      return of({
        id: null,
        nome: null
      });


  }

}
