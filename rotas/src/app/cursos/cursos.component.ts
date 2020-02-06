import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;


  constructor(
    private CursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.cursos = this.CursosService.getCursos();

    // Obtendo o queryParams!
   this.inscricao = this.route.queryParams.subscribe(
     (queryParams: any) => {
        this.pagina = queryParams['pagina'];
     }
   );
  }

  // Boa pratica para quando for usar o método "subscribe"
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  // Botão da paginação
  proximaPagina(){
    //this.pagina++;

    this.router.navigate(['/cursos'],
      {queryParams: {'pagina': ++this.pagina}});
  }

}
