# Servicos


# Introdução a Serviços

 - Evita repetir codigo.

 - Usar como ultilitario.

 - É ultilizada para fazer chamadas no banco, enviar e receber dados 
da base de dados para o componente.

 - Também é ultilizada para criar métodos e distributir para outros componentes, evitando
repetição de métodos em cada componente.

 - Alem da logica podemos por classe ultilitarias dentro dos serviços.

 - Uma forma de passar instruções para o template(codigo HTML).

 - Bota a classe de serviço no providers para ela ser instanciada uma vez para toda aplicação (Usando a injeção de dependencia)

 - Padrão singoto: não importa quantas vezes declara o servico, sempre vai ter uma unica instancia!


# Criando um serviço (Service)

 - Criando uma classe de servico.

 <blockquote> ng g s "nome do servico" </blockquote>

 - Cria uma classe de serviço chamada "CursosComponent"

 - Com o método getCursos(), retorna uma lista de array.

 - private cursos: string[] = ['Angular2', 'Java', 'JS', 'PHP'];

 <blockquote>

 	private cursos: string[] = ['Angular2', 'Java', 'JS', 'PHP'];

 	getCursos(){
    
	    this.logService.consoleLog('Obtendo lista de cursos');

	    return this.cursos;
  	}
 	
 </blockquote>

 - No component do curso, a classe de serviço é passado como injeção de dependencia, é a melhor forma, instanciando é uma má pratica!

 <blockquote>

 	constructor(private serviceCurso: CursosService ) {}

 	ngOnInit() {
    	this.cursos = this.serviceCurso.getCursos();
	}
 	
 </blockquote>

 - Nessa parte a lista de array é exibida no html do component

 <blockquote>


	< ul>
	    < li *ngFor="let curso of cursos">
	        {{ curso }}
	    </ li>
	</ ul>
 	
 </blockquote>


# Injeção de Dependência (DI) + como usar um serviço em um componente# 


 - Todo serviço tem o decoreitor "@Injectable", define que ele é injetavel.

 - "providedIn: 'root'" siginifica que não precisa por no providers do appModule

 <blockquote>

 	@Injectable({
  		providedIn: 'root'
	})
 	
 </blockquote>

 - Pode adicionar o providers no decoreito do Component


# Escopo de instâncias de serviços e módulos (singleton e várias instâncias)

 - Um unico serviço é usado(compartilhado) para mais de um component!

# Comunicação entre componentes usando serviços (broadcast de eventos)

 ###  classe de SERVIÇO

 ### Propriedade

  - Na classe service cria um método para add os cursos, chamado ....

  - Comunicação de componente pai para filho!

  - Esse atributo vira um evento!

  - Esse evento envia informações, está enviando uma informação do tipo string

  - atributo ou método statico, não precisa acessar a instancia do mesmo!

 ### Método addCurso ()

  - Add o novo valor na lista usando push

  - Emitindo uma informação, para que outro componente receba.

  - Dessa forma que é feita a conversa de componente pelo serviço.

  - Segunda forma de emitir dados usando propriedade statica.

  - Emite informação para outro componente poder escutar.

  - Pode emitir usando propriedade statica.

 <blockquote>
 	 
  emitirCursoCriado = new EventEmitter<string>();	 
  
  static criouNovoCurso = new EventEmitter<string>();

  addCurso(curso: string){
  
  	this.cursos.push(curso);
  
    this.emitirCursoCriado.emit(curso);
    
    CursosService.criouNovoCurso.emit(curso);
  }
 </blockquote>


 ### component (PAI) que cria os serviço e exisbe tb

 - Cria um component chamado "criar-curso"

 - Esse component recebe o valor do novo curso com um input

 - ele usa o SERVIÇO que tem o método que emite valores " this.cursoService.addCurso(curso);"

 - E passa o valor para um outro component.

 - Recebe o serviço pela Injeção de dependencia

 <blockquote>

   cursos: string[] = [];
  	
   constructor( private cursoService: CursosService) { }

   ngOnInit() {
    
	    this.cursos = this.cursoService.getCursos();
   }
  
  onAddCurso(curso: string){
    this.cursoService.addCurso(curso);
   }
 </blockquote>

 - A parte HTML do component que cria o curso!

 - Nesse HTML é chamado um outro component que é filho!

 <blockquote>

 	< p>Compartilhando um serviço entre componente</ p>

	< input type="text" #cursoInput>
	< button (click)="onAddCurso(cursoInput.value)">Add Curso</ button>


	< ul>
	    < li *ngFor="let curso of cursos">
	        {{ curso }}
	    </ li>
	< /ul>

	< app-receber-curso-criado></ app-receber-curso-criado>
 	
 </blockquote>

 ### Component(FILHO) que exibe apenas o curso criado!
 
 - O componente se inscreve no método para pegar a informação do componente pai, e guarda em uma variavel!

 - Informa o curso que foi cadastrado

 <blockquote>

 	curso: string;

  	constructor( private cursoService: CursosService ) {  }

	ngOnInit() {

	    this.cursoService.emitirCursoCriado.subscribe(
	      cursoCriado => this.curso = cursoCriado
	    );
	}

 </blockquote>

 - HTML do component (FILHO) que recebe o valor da inscrição

 <blockquote>

 	< p *ngIf="curso">
    	O último curso criado foi: {{ curso }}
	< /p> 	
 	
 </blockquote>


# Injetando um serviço em outro serviço

 - Um serviço pode ser chamado dentro de outro serviço, usando o método construtor!

 - Dentro de "CursosService", é chamado "LogService"

 <blockquote>
	 constructor(private logService: LogService) {
	    console.log('!-->instancia da classe de serviço');
	  }  	
 </blockquote>

 - Para não precisar concatenar string, usa o "${}"





