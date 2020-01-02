import { 
  Directive, 
  HostListener, 
  ElementRef, 
  Renderer,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  /*-------- Atributo sem manipulação ----------- */
  // Criando um atributo com o decoraitor @HostBinding
  // Ele faz uma associação do HTML para uma variavel!
  //@HostBinding('style.backgroundColor') backgroundColor: string;

  /*-------- Atributo com manipulação ----------- */
  private backgroundColor: string;

  // Criando um método get para o atributo!
  @HostBinding('style.backgroundColor') get setColor(){
    // codigo  extra;
    // caso queira fazer algo antes de receber o valor!
    return this.backgroundColor;
    // codigo  extra;
    // caso queira fazer algo depois de receber o valor!
  }


  constructor(/*private _elementRef: ElementRef, private _renderer: Renderer*/) 
  {
  }

  // @HostListener: O método usa esse decoraitor para capiturar evento!
  // mouseenter: é um evento js!
  // clicaNoMouse() nome do método!
  @HostListener('mouseenter') selecionaNoMouse(){
    
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
      );*/
      this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') tiraMouse(){
    
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
      );*/

      this.backgroundColor = 'white';
  }

}
