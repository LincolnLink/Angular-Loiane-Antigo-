
# Diretivas

 - Existe 2 tipos de diretivas 

   - Diretivas Estruturais

   - Interagem com a view e modifica a estrutura do DOM o/ou codigo html! 

   <blockquote>
    ngFor, ngIf
   </blockquote>

   - Diretivas de atributos

   - Interagem com o elemento em que foram aplicadas

   <blockquote>
     ng-class, ng-style
   </blockquote>


# Diretivas do Angular

 - Os componentes são diretivas com template

 Exemplos:
 <blockquote> < cursos-lista></ cursos-lista> </blockquote>


# ngIf

 - Definindo as variaveis e valores

 <blockquote>
     
     cursos: string[] = ["Angular 2", "C#", "PHP"];

      mostrarCursos: boolean = false;

      constructor() { }

      ngOnInit() {
      }

      onMostrarCrusos(){
        this.mostrarCursos = !this.mostrarCursos;
      }

 </blockquote>

 - Não existe ELSE, tem que negar para mostrar o oposto do IF

 <blockquote>

    < div *ngIf="cursos.length > 0">
        Lista de cursos aqui.
    < /div>

    < div *ngIf="cursos.length == 0">
        Não existe cursos para serem listados.
    < /div>

 </blockquote>

    
 ### Usando boolean

 - Não existe ELSE, tem que negar para mostrar o oposto do IF

 <blockquote>

     < div *ngIf="mostrarCursos">
        Lista de cursos aqui.
     < /div>

     
     < div *ngIf="!mostrarCursos">
        Não existe cursos para serem listados.
     < /div>

 </blockquote>

 ### Com Botão

 <blockquote>

    < button (click)="onMostrarCrusos()">Mostrar ou Esconder cursos< /button>

 </blockquote>

 - Hidden como alternativa

 - Alternativa para trocar o ngIf, seria o hidden, ele esconde ao inves de destruir o DOM!

 - Não existe ELSE, tem que negar para mostrar o oposto do IF

 <blockquote>

    < div [hidden]="!mostrarCursos">
        Lista de cursos aqui.
    < /div>

    
    < div [hidden]="mostrarCursos">
        Não existe cursos para serem listados.
    < /div>

 </blockquote>

 ### Usando template

 <blockquote>

    < ng-template [ngIf]="!mostrarCursos">
        < div> Lista de cursos aqui.</ div>
    < /ng-template>

 </blockquote>


# *ngFor


 - Exemplo de NgFor

 <blockquote> cursos: string[] = ["Angular", "C#", "PHP"]; </blockquote>

 <blockquote>
     < ul>
        < li *ngFor="let curso of cursos, let i = index">
            {{ i + 1}} - {{ curso }}
        < /li>
     < /ul>     
 </blockquote>


 - não funciona mais!

 <blockquote>

    < ul>
        < li template="ngFor let curso of cursos, let i = index">
            {{ i + 1}} - {{ curso }}
        < /li>
    < /ul>
 
 </blockquote> 

 - Forma para remover o *

 <blockquote>
    < ul>
        < ng-template ngFor [ngForOf]="cursos" let-curso let-i="index">
            < li >
                {{ i + 1}} - {{ curso }}
            < /li>
        < /ng-template>

    < /ul>
 </blockquote>

# Diretivas: ngSwitch, ngSwitchCase e ngSwitchDefault

 - Exemplo!

 <blockquote> aba: string = 'home'; </blockquote>

 - Cria uma lista de link, aonde tem o evento de click, cada item modifica o valor da variavel!

 <blockquote>

    < ul class="navbar-nav">
    < li
    class="nav-item"
    [class.active]="aba == 'home'"
    (click)="aba = 'home'"
    >
    < a class="nav-link">Home </ a>
    </ li>
    < li
    class="nav-item"
    [class.active]="aba == 'mapa'"
    (click)="aba = 'mapa'"
    >
    < a class="nav-link">Mapa</ a>
    </ li>
    < li
    class="nav-item"
    [class.active]="aba == 'lista'"
    (click)="aba = 'lista'"
    >
    < a class="nav-link">Lista</ a>
    </ li>
    </ ul>
    
 </blockquote>

 - A div pai recebe o [ngSwitch] que recebe a variavel!

 - As div filha recebe o *ngSwitchCase="'...'" aonde e definida um valor para representar aquela div!

 - "*ngSwitchDefault" deve ser colocada na div filha sem valor!

 <blockquote>

  < div class="container" [ngSwitch]="aba" >
  < h5>Removendo o *</ h5>

  < div  *ngSwitchCase="'mapa'">
  < p>Modo mapa ativado</ p>
  </ div>

  < div  *ngSwitchCase="'lista'">
  < p>Modo lista ativado</ p>
  </ div>

  < div  *ngSwitchCase="'home'">
  < p>Home</ p>
  </ div>
  </ div>
    
 </blockquote>


#  Diretivas: sobre o * e template

 - Usando sem o *

 <blockquote>

  < ng-template [ngIf]="!mostrarCursos">
    < div> Lista de cursos aqui.</ div>
  </ ng-template>

 </blockquote>

 - Usando sem o *

 <blockquote>

  < ul>
  < ng-template ngFor [ngForOf]="cursos" let-curso let-i="index">
    < li >
        {{ i + 1}} - {{ curso }}
    </ li>
  </ ng-template>

  </ ul>
   
 </blockquote>

# Diretivas: ngClass

 - Método que troca o valor do atributo e modifica a classe

 <blockquote>
     meuFavorito: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    onClick(){
      this.meuFavorito = !this.meuFavorito;
    }

 </blockquote>

 - Sem ngClass

 <blockquote>

  < h1>
    < i class="glyphicon"
    [class.glyphicon-star-empty]="!meuFavorito"
    [class.glyphicon-star]="meuFavorito"
    (click)="onClick()"
    >< /i>
  < /h1>  

 </blockquote>

 - Com ngClass

 <blockquote>

   < h1>
    < i class="glyphicon"
    [ngClass]="{
        'glyphicon-star-empty': !meuFavorito,
        'glyphicon-star': meuFavorito
    }"    
    (click)="onClick()"
    >< /i>
  < /h1>
   
   
 </blockquote>


# Diretivas: ngStyle

  - Método que modifica o valor da variavel, trocando o style

  <blockquote>

     ativo: boolean = false;
    tamanhoFonte: number = 10;

    constructor() { }

    ngOnInit() {
    }


    onClick(){

      this.ativo = !this.ativo;
      
    }
    
  </blockquote>

  -Sem o ngStyle

  <blockquote>

    < h5>Styles com property binding (style binding)< /h5>

    < button
        [style.backgroundColor]="ativo ? 'blue' : 'gray'"
        [style.color]="ativo ? 'white' : 'black'"
        [style.fontWeight]="ativo ? 'bold' : 'normal'"
        [style.fontSize]="tamanhoFonte + 'px'"
        (click)="onClick()"
    >Mudar atributo 'ativo'< /button>

    < br>
    < input type="text" [(ngModel)]="tamanhoFonte">
    < br>
    
  </blockquote>

  - Usando o ngStyle

  <blockquote>

    < button
    [ngStyle]="{
        'backgroundColor': (ativo ? 'blue' : 'gray'),
        'color': (ativo ? 'white' : 'black'),
        'fontWeight': (ativo ? 'bold' : 'normal'),
        'fontSize': (tamanhoFonte + 'px')       
    }"
    (click)="onClick()">
    Mudar atributo 'ativo' com ngStyle
    < /button>
    
  </blockquote>

# Operador Elvis ("?")

  - Esse objeto é do tipo any!
  - A propriedade responsavel é do tipo null, pode ser qualquer coisa! 

  <blockquote>

    tarefa: any = {
      desc: 'Descrição da tarefa',
      responsavel1: null,
      responsavel2 : {nome: 'Lincoln'},
      responsavel3: {usuario: null}
    };

    constructor() { }

    ngOnInit() {
    }
    
  </blockquote>

  - Como evitar dar o erro, de quando o objeto esperado for null

  <blockquote>
  < h5>Primeira solução:</ h5>
  < p>Descrição: {{ tarefa.desc }}< /p>
  < p>Responsavel: {{ tarefa.responsavel != null ? tarefa.responsavel.nome : ''}}
  < /p>
    
  </blockquote>

  - Segunda solução

  <blockquote>


    < p>Descrição: {{ tarefa.desc }}</ p>
    < p>Responsavel1: {{ tarefa.responsavel1}}</ p>
    < p>Responsavel2: {{ tarefa.responsavel2?.nome}}</ p>
    < p>Responsavel3: {{ tarefa.responsavel3?.usuario?.nome}}</ p>
    
  </blockquote>

# ng-content

 - A ideia é o PAI passar um CONTEUDO (exibição)  para o filho!! 

 - Definição do component FILHO!

 <blockquote>

    < h5>Com select</ h5>
      < div class="row">
          < div class="col">
              < div class="panel panel-default">                
                  < div class="panel-heading">                    
                      < ng-content select=".titulo"></ ng-content>  
                  </ div>
                  < div class="panel-body">
                      < ng-content select=".corpo"></ ng-content>                    
                  </ div>
              </ div>
          </ div>
      </ div>
   
 </blockquote>

 - Definição do component PAI!

 <blockquote>


  < app-exemplo-ng-content>
      < div class="titulo">
          Título do Painel
      </ div>
      < div class="corpo">
          Conteúdo passado para o componente.
      </ div>
      < div class="corpo">
          Conteúdo passado para o componente 2.
      </ div>
  </ app-exemplo-ng-content>

   
 </blockquote>


# Criando uma diretiva de atributo (propriedade do DOM)

 - A diretiva criada é declarada no app.module, igual os component!

 - O component "DiretivaCustomizadasComponent" é o que recebe as diretivas.

 - Criando uma diretiva e o Melhor local para salvar.

 - shared : é o diretorio que fica os arquivos aonde toda aplicação tem acesso.

 <blockquote>ng g d 'shared/' 'nome da diretiva'</blockquote>

 - Diretiva é um component sem template, decoreito só tem o "selector".

 <blockquote>

    @Directive({
      selector: '[FundoAmarelo]' 
    })  
   
 </blockquote>

 - No "selector" pode definir uma tag especifica

 - Assim apenas o "p" vai ter o efeito da diretiva!

 <blockquote>

    @Directive({
      selector: 'p[FundoAmarelo]' 
    })  
   
 </blockquote>

 - Manipula a propriedade do DOM de quem recebe a diretiva!

 - Troca a cor de fundo!

 - URGENTE: Evitar usando ElementRef sozinho!!! (Errado!)

 - Evita ataque xxp, e vulnerabilidade no DOM!

 <blockquote> this._elementRef.nativeElement.style.backgroundColor = 'yellow'; </blockquote>


 - A forma correta! USANDO junto com o "Renderer2"

 <blockquote>

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
   
 </blockquote>

 - O component recebendo a diretiva!

 <blockquote>

  < p FundoAmarelo>Texto com fundo amarelo</ p>
  < br>
  < button FundoAmarelo>Click</ button>  
   
 </blockquote>


# Diretivas: HostListener e HostBinding (trabalhando com eventos e propriedades do DOM)

  - HostListener: Decoreito que capitura eventos, e executa um método!

  - HostBinding: É um decoraito Faz uma associação a um atributo de um elemento HTML!

  ### HostListener

  - Cria uma diretiva chamada "HighlightMouseDirective", com um selector chamado "HighlightMouse".

  - Cria um atributo provado chamado "backgroundColor"

  - Depois cria um decoreito que tem o nome de "HostListener"

  - Passa como parametro para o decoreito, o nome do evento que vai ser capiturado, se chama "mouseenter".

  - Esses eventos são os eventos do Java Script!

  - Esse decoreito, decora um método que é chamado logo depois do evento definido!

  - Evento quando passa o mouse

  <blockquote>

     @HostListener('mouseenter') selecionaNoMouse(){
    
      this.backgroundColor = 'yellow';
    }
    
  </blockquote>

  - Eventos aonde tira o mouse da posição!

  <blockquote>

    @HostListener('mouseleave') tiraMouse(){    

      this.backgroundColor = 'white';
   }
    
  </blockquote>

  ### HostBinding

  - Decoraitor que faz uma associação de atributo ou classe do elemento HTML para uma variavel!

  - Antes ou depois de pegar o valor, pode criar algum tipo de script, caso sejá preciso!

  - A propriedade privada "backgroundColor" é vinculada com a propriedade "style.backgroundColor" do DOM, usando o decoreitor.

  - get : escuta assim que a variavel for modificada(retornada)

  - Atributo com manipulação

  <blockquote>

    @HostBinding('style.backgroundColor') get setColor(){

    return this.backgroundColor;

   }
    
  </blockquote>

  - Ele faz uma associação do HTML para uma variavel.

  - Atributo sem manipulação.

  <blockquote>

    @HostBinding('style.backgroundColor') backgroundColor: string;
    
  </blockquote>


# Diretivas: Input e Property Binding


  - Cria uma diretiva chamada "HighlightDirective" com o select "highlight".

  - Atributo sem manipulação
  - Criando uma associação com a propriedade HTML(style.backgroundColor)
  - com o variavel backgroundColor!

  - HostListener: decoraitor que escuta eventos, e executa métodos!

  - As propriedades do "@Input" recebe novos valores de cores!

  <blockquote>

    @HostBinding('style.backgroundColor') backgroundColor: string = "";

    @Input() defaultColor: string = 'white';

    @Input('highlight') highlightColor: string = 'yellow';

    ngOnInit(): void {
      this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') selecionaNoMouse(){
      this.backgroundColor = this.highlightColor;
    }
   
    @HostListener('mouseleave') tiraMouse(){
      this.backgroundColor = this.defaultColor;
    }
    
  </blockquote>

  - Component pai executando "Input, HostBinding e HostListener "

  <blockquote>    
    <p [highlight]="'red'" [defaultColor]="'grey'">
      Texto com highlight com cores customizadas
    </p>    
  </blockquote>


# Criando uma diretiva de estrutura (ngElse)

  - set: se usa ele para identificar toda vez que o input for modificado(setado)!

  - @Input: exportar a propriedade para o componente pai!

  - 'ngElse': da propriedade da classe NgElseDirective

    - TemplateRef< any>: Faz referencia a TAG

    - ViewContainerRef: faz referencia ao conteudo!

  - Dentro da diretiva é criado um html, que vai ser renderizado, de acordo com a logica(falso)!

  - Usando o método "createEmbeddedView()"

  - Caso seja verdadeiro, destroi o conteudo "this._viewContainerRef.clear();"

  <blockquote>


    @Directive({
      selector: '[ngElse]'
    })
    export class NgElseDirective {

      @Input('ngElse') set ngElse(condition: boolean){
        if (!condition){

         
          this._viewContainerRef.createEmbeddedView(this._templateRef)
        } else{
          
          this._viewContainerRef.clear();
        }
      };

      constructor(
        private _templateRef: TemplateRef< any>,
        private _viewContainerRef: ViewContainerRef
        ) { }
    }    
  </blockquote>


  - Diretiva chamada no component PAI !

  - Não existe ELSE, tem que negar para mostrar o oposto do IF

  <blockquote>
    
    < div *ngIf="diretivaExibe">
        Lista de cursos aqui.
    < /div>

    < div *ngElse="diretivaExibe">
        Não existe cursos para serem listados.
    < /div>    
  </blockquote>
 


