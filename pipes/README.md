# Pipes


# Pipes (usando pipes, parâmetros e pipes aninhados)

 - Doc: https://angular.io/guide/pipes

 - Cria um component "ExemplosPipesComponent" e um objeto!

 - Pode deixar eles alinhados, mas oque vai causar efeito é o ultimo.

	 - uppercase: Transforma tudo em letras maiusculas

	 - number:'2.1' : define que é valor numerico, e as casas inteiras e decimais!

	 - number:currency : define que é numerico e é moeda!

	 - number:currency:'BRL':true : define que é numerico e é moeda, passando o valor em real, o true e se elequer o simbolo ou não

	 - date:'short' : define que é um valor de data e pode passar o tipo.

	 - date:'dd-MM-yyyy' : define que é um valor de data e pode passar o tipo.

	 - jsom : uma forma de debugar um objeto.

	 - 

	 - lowercase: tudo em letra minusculas

	 - camelCase: 



 <blockquote>

 	<p>Título: {{ livro.titulo | uppercase | lowercase | camelCase }} </p>
	<p>Estrelas: {{ livro.ranting | number:'1.1-1' }}</p>
	<p>Páginas: {{ livro.numeroPaginas | number }}</p>
	<p>Preço: {{ livro.preco | currency:'BRL':true }}</p>
	<!--<p>Data Lançamento: {{ livro.dataLancamento | date:'dd-MM-yyyy' }}</p>-->
	<p>Data Lançamento: {{ livro.dataLancamento | date }}</p>
	<p>Url: {{ livro.url }}</p>
	<br>
	<p>Livro: {{ livro | json }}</p>
 	
 </blockquote>


# Criando um Pipe

 - Criando um Pipe personalizado

 - Component, diretivas e pipes, são declarados no Module

  <blockquote> ng g p 'nome do pipe' </blockquote>

 - Para se identificar um pipe, deve por o decoreito "@Pipe" e o nome do select, e implementar uma interface chamada "PipeTransform"

 - Devemos implementar o método "transform", que recebe 2 parametros, o primeiro é o valor a ser transformado, e o segundo seria os argumentos!

 - os argumentos são opicionais

 - o método capitalize, pega a palabra e deixa apenas a primeira letra maiuscula!

 - O split está separando com base no espaço vazio, e botando em uma array!

 - O for está modificando cada palavra com o método

 <blockquote>
 	@Pipe({
	  name: 'camelCase'
	})
	export class CamelCasePipe implements PipeTransform {

		transform(value: any, ...args?: any[]): any {			

		    let values = value.split(' ');
		    let result = '';
		   
		    for (let v of values){
		      result += this.capitalize(v);
		    }
		    return result;
		}
	}
	  capitalize(value: string){
	    return value.substr(0,1).toUpperCase() +
	    value.substr(1).toLowerCase() + " ";
	  }
 </blockquote>


# Aplicando Locale (internacionalização) nos Pipes

 - Informar a nacionalidade para o projeto usando providers.

 <blockquote>

 	providers: [   
	    SettingsService, //obtendo a informação de um servico!
	    {
	      provide: LOCALE_ID,
	      deps: [SettingsService],
	      useFactory: (settingsService) => settingsService.getLocale()
	    }
  ],
 	
 </blockquote>

 - SettingsService: é um serviço tem o método "getLocale", que retorna o valor "pt-BR".

 - Dessa forma toda aplicação tem acesso ao valor!


# Pipes: Criando um Pipe "Puro"

 - Pipe puro: Não olha as modificações que é feita no objeto que está sendo modificado pelo pipe.

 - Bota um ngFor, de uma lista de livros

 - Cria um pipe chamado "FiltroArrayPipe"

 	- Esse codigo é uma gambiarra, não filtro arrays com pipes em projetos reais.

	 - Foi criado apenas para mostrar um exemplo de pipe puro e impuro

	 - Converte tudo em munisculo

	 - O método indexOf() retorna o primeiro índice em que o 
       elemento pode ser encontrado no array, retorna -1 
       caso o mesmo não esteja presente.

     - .filter() filtra uma lista de acondo com uma condição

 <blockquote>

 	transform(value: any, args?: any): any {   
    
	    if (value.length === 0 || args === undefined){
	      return value;
	    }
    
    	let filter = args.toLocaleLowerCase();    
    
	    return value.filter(
	      v => v.toLocaleLowerCase().indexOf(filter) != -1
	    );    
  	}
 	
 </blockquote>

 - Cria um botão que add curso, e um outro campo que filtra


# Pipes: Criando um Pipe "Impuro"

 - Herança no Angular!

 - Cria outro pipe chamado "FiltroArrayImpuroPipe"

 - herda o outro pipe

 - Usa o meta dado para dizer que o pipe não é puro!

 <blockquote>

 	@Pipe({
	  name: 'filtroArrayImpuro',
	  pure: false
	})
	export class FiltroArrayImpuroPipe extends FiltroArrayPipe {}

 </blockquote>

 ### Maneira correta de usar filtro nos projetos

 - A menira correta é por método e não por pipe

 <blockquote>

 	obterCursos(){

    // Codigo que faz o filtro!
    if (this.livros.length === 0 || this.filtro === undefined 
      || this.filtro.trim() === ''){
      return this.livros;
    }

	    return this.livros.filter( (v) =>{
	        if (v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
	          return true;
	        }
	        return false;
	      });
	  }
 	
 </blockquote>

 - O html

 <blockquote>

 	<ul>
	    <li *ngFor="let liv of obterCursos()">
	        {{ liv }}
	    </li>
	</ul>
 	
 </blockquote>


# Pipes: Async (assíncrono)

 - Saida de valor no template, mesmo se o valor demore um pouco.

 - Simulando uma chamada Ajax no servidor

 - Atribui o valor da string para o atributo(valorAsync) em 2 segundos

 - setTimeout serve para demorar um pouco

### Exemplo com Promise

 <blockquote>

  valorAsync = new Promise((resolve, reject) =>{

    setTimeout( ()=> resolve('Valor assíncrono'), 2000);

  });
 	
 </blockquote>

### Exemplo com Observable(usando metodo do RxJS)

 - Programação por fluxo, Observable!
 

 <blockquote>

 	 // forma antiga
 	 valorAsync2 = Observable.interval(2000)

 	valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));
 	
 </blockquote>

