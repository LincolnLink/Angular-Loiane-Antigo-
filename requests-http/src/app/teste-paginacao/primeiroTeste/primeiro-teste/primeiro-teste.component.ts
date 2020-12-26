import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../usuario';

@Component({
  selector: 'app-primeiro-teste',
  templateUrl: './primeiro-teste.component.html',
  styleUrls: ['./primeiro-teste.component.scss']
})
export class PrimeiroTesteComponent implements OnInit {

  usuarios: Usuario[] = [];

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.formulario = this.formBuilder.group({
      filterFild: []
    })

    this.usuarios.push(
      {
        nome: 'Lincoln',
        endereco: 'Rio de Janeiro'
      },
      {
        nome: 'Kelly',
        endereco: 'São Paulo'
      },
      {
        nome: 'Elenice',
        endereco: 'Rio de Janeiro'
      },
      {
        nome: 'Raimundo',
        endereco: 'São Paulo'
      },
    )
  }

}
