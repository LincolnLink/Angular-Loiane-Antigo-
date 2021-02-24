import {
  Directive,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  /*-------- Atributo sem manipulação ----------- */
  // Criando um atributo com o decoraitor @HostBinding
  // Ele faz uma associação do HTML para uma variavel!
  //@HostBinding('style.backgroundColor') backgroundColor: string;

  /*-------- Atributo com manipulação ----------- */
  private backgroundColor: string;

  // Criando um método get para o atributo!
  // Faz uma associação de atributo ou classe do elemento HTML para uma variavel!
  // style.backgroundColor: atributo do HTML!
  // this.backgroundColor: variavel!
  // get : escuta assim que a variavel for modificada(retornada)!
  // Manipular os dados antes de criar um vinculo(associação) entre o atributo HTML e variavel!
  @HostBinding('style.backgroundColor') get setColor(){
    // codigo  extra;
    // caso queira fazer algo antes de receber o valor!
    return this.backgroundColor;
    // codigo  extra;
    // caso queira fazer algo depois de receber o valor!
  }


  constructor(/*private _elementRef: ElementRef, private _renderer: Renderer2*/)
  {
  }

  // @HostListener: O método usa esse decoraitor para capiturar evento!
  // mouseenter: é um evento js!
  // clicaNoMouse() nome do método!
  // eSCUTA EVENTO!
  @HostListener('mouseenter') selecionaNoMouse(){

    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
      );*/
      this.backgroundColor = 'yellow';
  }

  // Escuta evento!
  @HostListener('mouseleave') tiraMouse(){

    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
      );*/

      this.backgroundColor = 'white';
  }

}
