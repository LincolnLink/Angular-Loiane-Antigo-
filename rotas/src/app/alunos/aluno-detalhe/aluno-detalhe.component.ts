import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  inscricao: Subscription;  
  alunoTeste: any;  

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService,
    private router: Router
  ) { }

  ngOnInit() {

    // Se inscreve para obter o parametro da rota!
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let idAluno = params['id'];

        this.alunoTeste = this.alunoService.getAluno(idAluno)
        
         // Tratamento
         if( this.alunoTeste === null)
         {
           this.alunoTeste = {};
         }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarContato(){

    this.router.navigate(['/alunos', this.alunoTeste.id,'editar']);

  }

}
