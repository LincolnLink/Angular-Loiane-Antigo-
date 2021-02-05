import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibSearchService {

  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';

  constructor(private httpService: HttpClient) { }


  getLibAngular(value: any, fields: any)
  {

    // Não vai aceitar nome diferente de "params"
    // Usar esse exemplo caso tenha todos os parametros!
    const params_ = {
      search: value,
      fields: fields
    };

    let params = new HttpParams()
    params = params.set('search', value); //params_.append('search', value)
    params = params.set('fields', fields);

    //+ '?fields=' + fields + '&search=' + value
    // + '?fields=' + fields.fields + '&search=' + value
    return this.httpService.get(this.SEARCH_URL, { params } );
  }
}
