import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opening-modal',
  templateUrl: './opening-modal.component.html',
  styleUrls: ['./opening-modal.component.css']
})
export class OpeningModalComponent implements OnInit {



  valorDoNumero = 0;

  lista;
  pessoas;

  pessoas2;
  pessoas3 : any[];

  constructor() { }

  ngOnInit(): void {


    this.pessoas = [

      {nome: 'Pedro', sexo: 'masculino', idade: 18},
      {nome: 'Maria', sexo: 'Femenino', idade: 21},
      {nome: 'Ana', sexo: 'Femenino', idade: 22},
      {nome: 'João', sexo: 'masculino', idade: 11},
      {nome: 'Pablo', sexo: 'gay', idade: 30},
      {nome: 'Carla', sexo: 'gay', idade: 30},

    ]

    this.pessoas2 =  this.teste(this.pessoas);


    console.log(this.pessoas2);

  }


  teste(pessoas) {

      return pessoas
            .filter(e => e.idade >= 18)
            .reduce((a, b) => ({
            ...a,
            [b.sexo]:[...(a[b.sexo] || []),b]
            }), {})

            /*.reduce((a, b) => ({
            ...a,
            [b.sexo]: [...(a[b.sexo] || []), b]

            }), {})*/
  }

  addValor(){
    this.valorDoNumero += 1;

    if(this.valorDoNumero == 5 || this.valorDoNumero == 10){
      document.getElementById("openModalButton").click();
    }
  }

}
