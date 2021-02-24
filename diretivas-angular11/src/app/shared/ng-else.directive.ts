import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  Output
} from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {


  // set: se usa ele para identificar toda vez que o input for modificado!
  // @Input:  exportar a propriedade para o componente pai!
  // 'ngElse': da propriedade da classe NgElseDirective
  // ngElse()
  @Input('ngElse') set ngElse(condition: boolean){
    if (!condition){
      //rederiza a view embutida no template!
      //Renderiza o template em uma diretiva estrutural!
      // Cria um conteudo para o template
      this._viewContainerRef.createEmbeddedView(this._templateRef)
    } else{
      //Destroi o conteudo!
      this._viewContainerRef.clear();
    }
  };

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
    ) { }

}
