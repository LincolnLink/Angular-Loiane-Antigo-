import { Observable } from 'rxjs';
import { LibSearchService } from './../service/lib-search.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, tap, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();
  results$: Observable<any>;
  total: number;
  readonly fields = 'name,description,version,homepage';

  constructor(private libSearchService: LibSearchService) { }

  ngOnInit(){

    this.results$ = this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((value) => this.libSearchService.getLibAngular(value, this.fields)),
      tap((res: any) => this.total = res.total),
      map((res: any) => {return res.results})
    );
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
