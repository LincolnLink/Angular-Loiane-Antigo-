import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBr(){

    return this.http.get('assets/dados/estadosbr.json');
    //.pipe(map((res: Response) => res.json()));

  }



}
