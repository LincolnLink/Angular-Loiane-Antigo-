import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  /*-------- Atributo sem manipulação ----------- */
  // Criando uma associação com a propriedade HTML(style.backgroundColor)
  //com o variavel backgroundColor!
  @HostBinding('style.backgroundColor') backgroundColor: string = "";

  //cor padrão
  @Input() defaultColor: string = 'white';

  //@Input() highlightColor: string = 'yellow';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  // @HostListener: decoraitor que escuta eventos, usado em métodos!
  // mouseenter: é um evento js!
  // clicaNoMouse(): método que vai ser executado quando o evento for ativado!
  @HostListener('mouseenter') selecionaNoMouse(){
    this.backgroundColor = this.highlightColor;
  }

  //@HostListener: Escuta evento mouseleave, para ativar o método tiraMouse()!
  @HostListener('mouseleave') tiraMouse(){
    this.backgroundColor = this.defaultColor;
  }


}
