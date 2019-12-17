import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  teste: string = 'Valor do componente';

  urlImagem = 'http://lorempixel.com/400/200/';

  cursoAngular: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  getCalculo() {
    return 25 + 25;
  }

  getCurtirCurso(){
    return true;
  }

}
