import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  alunoTeste: any;
  inscricao: Subscription;
  

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) { }

  ngOnInit() {

    // Se inscreve para obter o parametro da rota!
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let idAluno = params['id'];

        this.alunoTeste = this.alunoService.getAluno(idAluno)
        console.log(this.alunoTeste)

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

}
