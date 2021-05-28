import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { FormsModule } from '@angular/forms';
import { IformCanDeactivade } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IformCanDeactivade {

  alunoTeste: any;
  inscricao: Subscription;
  private formMudou: boolean = false;


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

        // Tratamento
        if( this.alunoTeste === null)
        {
          this.alunoTeste = {};
        }

      }
    );
  }

  // Logica que verifica se o campo "nome" está preenchido!
  usahsu(){
      this.formMudou = true;
      console.log("O campo está preenchido!");
  }

  // Logica informa para o usuario que o campo está preenchido e não foi salvo!
  // Pergunta se ele deseja sair ou não!
  podeMudarDeRota(){
    if(this.formMudou) {
      return confirm("Tem certeza que deseja mudar de pagina, exite dados modificados que não foram salvos!");
    }
  }

  podeDesativar() {
    return this.podeMudarDeRota();
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
