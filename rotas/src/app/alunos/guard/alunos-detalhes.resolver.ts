import { RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { Aluno } from '../aluno';
import { ConstantPool } from '@angular/compiler';

@Injectable(/*{ providedIn: 'root' }*/)
export class AlunoDetalheResolver implements Resolve<Aluno> {
  
    alunoTeste: any;

    constructor(private alunoService: AlunosService){}
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

        let id = route.params['id']; 

        console.log("Obtem informação antes de entrar na rota - Resolve");

        return this.alunoTeste = this.alunoService.getAluno(id);
    }
}


