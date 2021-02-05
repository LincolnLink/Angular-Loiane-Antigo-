import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibSearchService } from './../service/lib-search.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();

  results$: Observable<any>;
  total: number;



  constructor(private libSearchService: LibSearchService) { }

  ngOnInit(): void {
  }

  onSeartch(){


    let value: string = this.queryField.value;
    const fields = 'name,description,version,homepage';

    // Tratando o que foi digitado!
    if(value && value.trim() !== '')
    {
      value = value.trim();
    }

    const params = {
      search: value,
      fields: fields
    };

    // Requisição http, e o tratamento!
    this.results$ = this.libSearchService.getLibAngular(value, fields)
    .pipe(
      // Obomseria tipar com uma interface
      tap((res: any) => this.total = res.total),
      map((res: any) => res.results)

    );



  }

}
