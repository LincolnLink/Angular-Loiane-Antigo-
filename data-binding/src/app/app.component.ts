import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exemplos';

  valorI: number = 75;

  deletarCiclo: boolean = false;

mudarValor() {
   this.valorI++;
}

destruirCiclo() {
  this.deletarCiclo = true;
}

}
