import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-paginacao',
  templateUrl: './teste-paginacao.component.html',
  styleUrls: ['./teste-paginacao.component.scss']
})
export class TestePaginacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log("O componet de paginação abriu")
  }

}
