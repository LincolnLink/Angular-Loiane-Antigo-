import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opening-modal',
  templateUrl: './opening-modal.component.html',
  styleUrls: ['./opening-modal.component.css']
})
export class OpeningModalComponent implements OnInit {


  valorDoNumero = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addValor(){
    this.valorDoNumero += 1;

    if(this.valorDoNumero == 5){
      document.getElementById("openModalButton").click();
    }
  }

}
