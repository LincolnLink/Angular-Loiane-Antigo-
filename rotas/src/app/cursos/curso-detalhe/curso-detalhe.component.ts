import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  // Boas praticas, cria um atributo do tipo "subscription"!
  // Para depois se desinscrever depois que o objeto for destruido!
  inscricao: Subscription;

  curso: any;

  constructor(
    private route: ActivatedRoute, 
    private cursosService: CursosService,
    private router: Router) {

    // Obtendo o parametro da rota, [ Forma ruim ]
    //this.id = this.route.snapshot.params['id'];
    //console.log(route)
  }

  // Executa quando a classe é inicializada!
  ngOnInit() {

    // Se inscreve para poder receber ID do curso! 
    // Com o ID carrega o curso selecionado!
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        // Busca o curso com o id especificado!
        this.curso = this.cursosService.getCurso(this.id);


        if(this.curso == null)
        {
          // Verificar se a rota está ativa
          //this.router.isActive

          // Vai passar o objeto da rota!
          // Transfere a pagina para o componente informado!
          this.router.navigate(['cursos/naoEncontrado']);
        }

      }
    ); 



  }

  // Quando o objeto é descruido ele se desinscreve![Boas praticas]
  ngOnDestroy(){
    //this.inscricao.unsubscribe();
  }
  
}
