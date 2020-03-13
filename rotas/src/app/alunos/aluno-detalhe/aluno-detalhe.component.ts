import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  inscricao: Subscription;  
  alunoView: Aluno;  

  constructor(
    private route: ActivatedRoute,    
    private router: Router,
    //private alunoService: AlunosService,
  ) { }

  ngOnInit() {

    // Se inscreve para obter o parametro da rota!
    // Essa logica está correta, só foi colocada no "aluno-detalhes.resolver.ts" para testar!
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let idAluno = params['id'];

        this.alunoTeste = this.alunoService.getAluno(idAluno)
        
         // Tratamento
         if( this.alunoTeste === null)
         {
           this.alunoTeste = {};
         }
      }
    );*/

    console.log("ngOnInit do componente");

    // Essa forma de pegar a informação é quando usa a guarda de rota "resolve"
    // Só está pegando o objeto que já foi tratado, antes mesmo de entrar na rota!
    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno}) => {

        console.log("objeto que é recebido");
        console.log(info);

        this.alunoView = info.aluno
      } 
    );

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarContato(){

    this.router.navigate(['/alunos', this.alunoView.id,'editar']);

  }

}
