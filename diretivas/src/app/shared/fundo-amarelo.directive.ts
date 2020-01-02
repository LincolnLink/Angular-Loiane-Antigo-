import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'

  /*Limitando o local da diretiva, apenas no paragrafo! */
  /*selector: 'p[FundoAmarelo]'*/
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef, 
    private _renderer: Renderer
    ) { 

    /* URGENTE ---- Evitar usando ElementRef!!! */
    //console.log(_elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';


    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
      );

  }  

}
