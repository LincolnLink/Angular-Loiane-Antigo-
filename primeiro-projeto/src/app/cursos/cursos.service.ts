import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {



  constructor() { }

  gerCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }

}
