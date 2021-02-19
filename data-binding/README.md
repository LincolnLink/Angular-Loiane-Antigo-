# DataBinding

# Property Binding e Interpolação

# Interpolação


 - Define a propriedade e método e de valor a ela (TS)

 <blockquete> 

		cursoAngular: boolean = true;
	  	teste: string = 'Valor do componente';  	

	  getCalculo() {
	    return 25 + 25;
	  }

	  getCurtirCurso(){
	    return true;
	  }

 </blockquete>

 - Formas de fazer a interpolação (HTML)

 <blockquete> 

		<p>{{ teste }}</p>
	    <p>Valor de uam soma: {{getCalculo()}}</p>
	    <p>Resultado de 1 + 1 é: {{ 1 + 1 }}</p>
	    <p>O curso é bom: {{ cursoAngular && getCurtirCurso()}}</p>

 </blockquete> 

# Property Binding

 - Cria a propriedade com o valor (TS)

 <blockquote>

 	urlImagem = 'http://lorempixel.com/400/200/';

 </blockquote>

 - Formas de fazer o property binding (HTML)

 - Interpolação também faz  property binding!

 - Exemplo claro de property binding

 - Formato padrão é através de bind-nomePropriedade

 <blockquote>

   < img src="{{ urlImagem }}">                
 
   < img [src]="urlImagem ">

   < img bind-src="urlImagem" />	   
	
 </blockquote>

 - Quando não existe uma propriedade no elemento, usa-se [attr.colspan]

 <blockquote> [attr.colspan] </blockquote>

# Class e Style binding

 - Usa a propriedade de class ou style, para manipular o DOM dependendo das escolhas do select!

 <blockquote>

	< article>

	    <h3>Property Binding com CSS/Class-Binding</h3>
	    
	    <select #varSelect (change)="0">
	        <option value="alert-success">Sucesso</option>
	        <option value="alert-info">Info</option>
	        <option value="alert-warning">Alerta</option>
	        <option value="alert-danger">Erro</option>
	    </select>
	    <br><br>
	    <div class="alert {{ varSelect.value}}" role="alert">Otexto é colorido de acordo com oque foi escolhido</div>
	    <br><br>

	    <div class="alert" role="alert" [class.alert-success]="varSelect.value == 'alert-success'">Sucesso</div>
	    <div class="alert" role="alert" [class.alert-info]="varSelect.value == 'alert-info'">Info</div>
	    <div class="alert" role="alert" [class.alert-warning]="varSelect.value == 'alert-warning'">Alerta</div>
	    <div class="alert" role="alert" [class.alert-danger]="varSelect.value == 'alert-danger'">Erro</div>

	    <br><br>
	    <div class="alert alert-danger" role="alert" [style.display]="varSelect.value == 'alert-danger' ? 'block': 'none'">Só exibe caso tenha erro</div>

	< /article>

 </blockquote>

# Event binding


 - Define as propriedades e valores no TS

 - Método que recebe evento quando o cursor sai do foco, recebendo o valor que foi digitado!
 - evento é a variavel que recebe o valor, precisa ser tipado para recuperar o valor! "((<HTMLInputElement>evento.target).value);"

 <blockquote>

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  botaoClicado(){

    //função do JS!
    alert('botão clicado');

  }


  onKeyUp(evento: KeyboardEvent){

    this.valorAtual = ((<HTMLInputElement>evento.target).value);

  }

  salvarValor(valor){

    this.valorSalvo = valor;

  }

  onMouseOverOut(){

    this.isMouseOver = !this.isMouseOver;

  }

 </blockquote>


 - Evento de click, chama um método já definido no TS!

 <blockquote>

	
    < div>
        < button class="btn btn-primary"
            (click)="botaoClicado()">
            Me clique!
        < /button>
    < /div>

 </blockquote>

 - keyup: evento quando termina de digitar
 
 - keyup.enter: evento quando aperta o enter!

 - blur: evento quando perde o foco

 - #campoInput: Variavel/propriedade criada que faz referencia ao controlador input-->

 <blockquote>

	 < input type="text"
            (keyup)="onKeyUp($event)"
            (keyup.enter)="salvarValor($event.target.value)"
            (blur)="salvarValor(campoInput.value)"
            #campoInput />

        <br><br>

        <p>Valor atual: {{ valorAtual }}</p>
        <p>Valor atual: {{ valorSalvo }}</p>

        <br><br>
	
 </blockquote>

 - mouseover: evento ocorre quando coloca o mouse em cima do controlador 

 - mouseover: evento ocorre quando tira o mouse de cima do controlador 

 <blockquote>

        <span
        (mouseover)="onMouseOverOut()"
        (mouseout)="onMouseOverOut()"
        [class.highlight]="isMouseOver">
        Passe o mouse sobre mim</span>

 </blockquote>


# Two-way data binding

 - 

 <blockquote>

	nome: string = 'abc';

  //objeto sem tipo
  pessoa = {
    nome: 'def',
    idade: 17
  }

 </blockquote>

 - Lado do HTML

 - o controlador input tem um evento chamado input, ativa quando atualiza o campo

 - ngModel: é a representação de uma entidade

 - ngModel tem um evento chamado ngModelChange, ativa quando o campo é atualizado

 <blockquote>

 	 < article>
        < h3>Two-way data binding</ h3>

       
        <!--<input type="text"
            [value]="nome"
            (input)="nome = $event.target.value"
        />-->


        <!--<input type="text"
            [ngModel]="nome"
            (ngModelChange)="nome = $event"
        />-->

        <input type="text" [(ngModel)]="nome">

        <p>Você digitou: {{ nome }}</p>
        <br><br>
        <input type="text" name="nome" [(ngModel)]="pessoa.nome" />
        <input type="text" name="idade" [(ngModel)]="pessoa.idade" />

        <p>Meu nome é : {{ pessoa.nome }}, e a minha idade é: {{ pessoa.idade }}</p>


        <br><br>
        <br><br>
    < /article>

 </blockquote>



# Reusando Componentes com Input properties

 - No HTML 

 <blockquote>

 	< p>
	    {{ nomeCurso }}
	< /p>
 	
 </blockquote>

 - Esse decoreito de atributos/propriedade serve para expor uma atributo/propriedade para outro componente poder ver!

 - Com isso o seletor ganha uma propriedade que recebe valores de outros componentes!

 - Ele recebe um parametro que define como aquela atributo/propriedade vai ser vista no componente!

 - Internamente ele se chama 'nomeCurso', externamente 'nome'! 

 <blockquote>

	  @Input('nome') nomeCurso: string = '';

	  constructor() { }

	  ngOnInit() {
	  }
 	
 </blockquote> 

# Emitindo Eventos com Output properties


 - DEFININDO

 - criando um evento apartir do componente
 - se bota o @Output() para exportar o evento!

 - emit(), Passando informação para o objeto pai, essa informação pode ser string ou objetos
 - Nesse caso criei uma nova propriedade do tipo de um atributo existente!

 <blockquote>

  @Input() valor: number = 0;
 
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  incrementa(){
    this.valor++;    
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
 	
 </blockquote>

 - definindo o component

 <blockquote>

	< div> 
	    < button class="btn btn-primary" (click)="decrementa()">-</ button>
	    < input type="text" [value]="valor" readonly>
	    < button class="btn btn-primary" (click)="incrementa()">+</ button>
	< /div>
 	
 </blockquote>
 



 ### INVOCANDO _________________________________

 - Lado do TS

 <blockquote>

   valorInicial = 15;

  	onMudouValor(evento){
    //console.log(evento);
    console.log(evento.novoValor);
   }

 </blockquote>

 - Lado do HTML

 - Jogando informação de um componente para o outro, usando as input-property

 - Só foi possivel criar a propriedade "nome", porque foi declarado um @input

 - O componente pai está enviando informação para o componente filho!!

 - Um segundo componente filho!

 - Com o evento personalizado, o filho consegue enviar o valor da propriedade para o componente pai

 <blockquote>
	
  < article>
		< h3>Input/Output Properties</ h3>
		
		<app-curso [nome]="nomeDoCurso"></app-curso>
		
		<contador [valor]="valorInicial"
		(mudouValor)="onMudouValor($event)">
		</contador>

  < /article>

 </blockquote>



# Ciclo de vida do Componente


 - 

 <blockquote>

 	<p>
	   Valor: {{ valorInicial }}
	</p>
 	
 </blockquote>

 - Ciclo de vida na ordem!

 <blockquote>



	export class CicloComponent implements OnInit, OnChanges, 
	DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {


  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('constructor');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
 	}
 </blockquote>
 

# Acesso ao DOM e ao Template com ViewChild


 - DEFININDO

 <blockquote>

	 	< div>
	 	< button class="btn btn-primary" (click)="decrementa()">-</ button>
	    < input type="text" [value]="valorDOM" readonly #campoInput>
	    < button class="btn btn-primary" (click)="incrementa()">+</ button>
		< /div>

 </blockquote> 

 - exportando a propriedade para o componente pai poder mandar valores!

 - exportando o evento para o componente pai poder receber o resultado do evento!

 - Esse decoreitor é usado para exportar uma variavel do template!

 - Ele é usado para você manilupar o DOM do componente filho!

 <blockquote>

	  @Input() valorDOM: number = 0;

	  
	  @Output() eventoPersonalizado = new EventEmitter();


	 
	  @ViewChild('campoInput', {static: true}) campoValorInput: ElementRef;

	  constructor() { }

	  ngOnInit() {
	  }


	  incrementa(){

	    console.log(this.campoValorInput);

	    this.campoValorInput.nativeElement.value++;
	    this.eventoPersonalizado.emit({novoValor: this.valorDOM});
	  }

	  decrementa(){
	    this.campoValorInput.nativeElement.value--;
	    this.eventoPersonalizado.emit({novoValor: this.valorDOM});
	  }  	
 </blockquote>



 ### INVOCANDO no component pai! _________________________________

 <blockquote>

 valorInicialDOM = 15;
 	

  pegandoValorQueFoiPassadoPorDom(evento){
    console.log(evento.novoValor);
  }

 </blockquote>


 - Manipulando o DOM (HTML)

 <blockquote>

 	< article>
        < h3>DOM Properties< /h3>


        <dom [valorDOM]="valorInicialDOM"
        (eventoPersonalizado)="pegandoValorQueFoiPassadoPorDom($event)"></dom>


        <br><br>


    < /article>

 </blockquote>



