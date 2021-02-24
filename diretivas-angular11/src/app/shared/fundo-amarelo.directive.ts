import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'

  /*Limitando o local da diretiva, apenas no paragrafo! */
  /*selector: 'p[FundoAmarelo]'*/
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) {


    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
      );

  }

}
