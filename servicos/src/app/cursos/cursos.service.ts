import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Angular2', 'Java', 'JS', 'PHP'];
  }
}
