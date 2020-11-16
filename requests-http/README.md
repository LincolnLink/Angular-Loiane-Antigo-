# RequestsHttp

Executando o emulador de API: json-server --watch db.json

# Dicas MUITO IMPORTANTE

  - Deve-se inscrever em métodos que retorna "observable"

  - É bom ultilizar o pipe Async, por que ele se inscreve e se desinscreve automaticamente, assim evita de ter erro de vazamento de memória!

  - Toda variavel que tem um "$" no final, ela é um "observable"!

  - Toda vez que o ngIf esconde ele destroi o componet!

  - É importante desinscrever quando o component é destruido!

### Instalando Bootstrap 4 

  <blockquete>

    npm install bootstrap

  </blockquete>

  - Inclui o Bootstrap no arquivo global de css do Angular!

  <blockquete>
    @import '~bootstrap/dist/css/bootstrap.min.css';
  </blockquete>

### NGX-Bootstrap

 - Instala o ngx-bootstrap

 <blockquete>

  npm install ngx-bootstrap --save

 </blockquete>

 - Para usar os componentes deve se instalar cada um que foi usado usando o CLI

 - Lista de comandos que add os componentes!

    https://valor-software.com/ngx-bootstrap/#/documentation#getting-started



### Cria um navBar pegando no site do bootstrap 4

  <blockquete>

    < nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      < a class="navbar-brand" href="#">Http</>
      < button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        < span class="navbar-toggler-icon"></>
      </>
      < div class="collapse navbar-collapse" id="navbarNav">
        < ul class="navbar-nav">
          < li class="nav-item ">
            < a class="nav-link" [ routerLink]="[' /']" routerLinkActive="active"> Home
              < span class="sr-only">(current)</>
            </>
          </>
          < li class="nav-item">
            < a class="nav-link" [ routerLink]="[' /cursos']" routerLinkActive="active">Cursos</>
          </>
        </>
      </>
    </>

    < div class="container">
      < router-outlet></>
    </ div>

  </blockquete>

### cria um novo modulo de "cursos"

  <blockquete>

    ng g m cursos --routing

  </blockquete>

### Cria um component chamado "cursos-lista"

  <blockquete>

    ng g c cursos-lista --routing

  </blockquete>

### Configuração do modulo de rotas!

  - CursosRoutingModule

  <blockquete>
        
    const routes: Routes = [
      { path: '', component: CursosListaComponent}
    ];

  </blockquete>

  - AppRoutingModule

    - pathMatch -> Totalmente vazio

    - redirectTo -> redireciona para cursos

    - Criando LazyLoading

    <blockquete>

      const routes: Routes = [

        {path: '', pathMatch: 'full', redirectTo: 'cursos'},
        {
          path: 'cursos',
          loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
        }
      ];

    </blockquete>

### Reparando  a barra do navBar responsiva!

 - Troca o "" por evento do ngxBootstrap

 - add o component "collapse" 

 - ng add ngx-bootstrap  --component collapse

 <blockquete>

  < button class="navbar-toggler" type="button"
    (click)="isCollapsed = !isCollapsed" [ attr.aria-expanded]="!isCollapsed"
    aria-controls="navbarNav">
      < span class="navbar-toggler-icon"></>
    </>

    < div class="collapse navbar-collapse" id="navbarNav"
    [ collapse]="isCollapsed" [ isAnimated]="true" >
    
      < ul> ... </ ul>

    < / div>

 </blockquete>

 - Documentação do NGX-bootstrap

 https://valor-software.com/ngx-bootstrap/#/collapse



### Http: Simulando Servidor REST (json-server)

 - Emulando uma API

 - Instalando o "json serve"

 - https://www.npmjs.com/package/json-server

 <blockquete> npm install -g json-server  </blockquete>

 - Exemplo, arquivo db.json

  <blockquete>

  {
    "cursos": [
      { "id": 1, "nome": "Angular" }
    ]
  }

 </blockquete>

 - Para executar 

 <blockquete>json-server --watch db.json </blockquete>

### Fazendo request usando extenção (tipo um postman)

 - Instala a extenção "Rest Client"

 - Cria um outro arquivo chamado "exemplo.http"!

 - Nele bota "http://localhost:3000/cursos"

 - Vai aparecer um link escrito "send request",não precisa sair do VS code para testar as requisições !


 - Cria o GET,POST,DELET, PUT, e GET por id !

  <blockquete>

      http://localhost:3000/cursos

      ###

      http://localhost:3000/cursos/2

      ###

      POST http://localhost:3000/cursos HTTP/1.1
      content-type: application/json

      {
          "nome": "PHP"
      }

      ###

      PUT http://localhost:3000/cursos/2 HTTP/1.1
      content-type: application/json

      {
          "nome": "C# OO"
      }

      ###

      DELETE http://localhost:3000/cursos/2

   </blockquete>

### Http GET: listar registros

 - Cria um HTML que lista uns cursos

 https://github.com/loiane/curso-angular/blob/master/requests-http/src/app/cursos/cursos-lista/cursos-lista.component.html

 - Cria um service chamado "cursos"

 - Usa o modulo HttpClient

 - Não precisa transformar o jSom manualmente

 - Cria uma requisição GET

 - Tipando o GET, ajuda no intelecense do VS code em tempo de desenvolvimento!

 - Foi criada uma interface, para poder tipar, informando que retorna um array da interface informada!

 <blockquete>

  private readonly API = 'http://localhost:3000/cursos';

    constructor(private http: HttpClient) { }


    list(){
      return this.http.get<Curso[]>(this.API);
    }

 </blockquete>

 - Depois injeta o serviço no component!

 #### Quando um método retorna um "observable" deve sempre se inscrever nele, para poder executar!

 - Na inspeção do navegador na aba "NETWORK" é possivel ve o resultado da inscrição usando um console.log, filtra usando o XHR!

 - Para debugar no serviço, pode usar o .pipe(.tap()) do RXJS!

 - Depois disso, no subscrible, deve passar a response para o arry de "curso"!

 - No templat do componet, deve ser criado um ngFor no body da tabela!

### Http: Dica: Variável de Ambiente

 - Na pasta environments é adiministrada as variaveis de ambientes!

 - Todo projeto Angular tem esse pasta "environments"

  - Nele tem dois arquivos, um de desenvolvimento: "envirinments.ts"

  - E o outro arquivo é de produção: "envirinment.prod.ts"

 - Na configurations do arquivo "angular.json" está configurado o replace de quando é feito o build em produção!

 - Configura o arquivo "envirinments"

  <blockquete>
    export const environment = {
      production: false,
      API: 'http://localhost:3000/'
    };
  </blockquete>

- Configura o arquivo "envirinment.prod.ts"

  <blockquete>

    export const environment = {
      production: true,
      API:'/'
    };
  </blockquete>


- Para chamar a variavel deve se escrever: 


  private readonly API = `${environment.API}cursos`;

### Curso Angular #122: Http GET + Pipe Async

 - Pipe Async: serve para se inscrever automaticamente! 

  #### Importante

 - Esse pipe é melhor porque alem dele se inscrever, ele se desinscreve automaticamente!! 

 - Deve se desisncrever para não ter problema de vazamento de memoria!

 - Mesmo o componete destruido, deve se desinscrever para não ter vazamento!

 - Toda variavel que tem um "$" no final, ela é um "observable"!

 - Dessa forma não precisa se inscrever!

 <blockquete>
   this.cursos$ = this.serviceHttp.list();
 </blockquete>

 #### Criando uma mensagem de carregamento!

  - Cria um ngTemple com a mensagem e uma identificação!

  <blockquete>

    < ng-template #loading>
      < span>Carregando Cursos...</>
    </>

  </blockquete>

  - Depois cria uma condição para a tabela que exibe os resultados!

  <blockquete>
    *ngIf="(cursos$ | async) as cursos; else loading"
  </blockquete>

  - Caso carrega duas vezes, crie uma variavel local no ngIf

  <blockquete>
      < table class="table table-hover" *ngIf="(cursos$ | async) as cursosVarLocal; else loading" >
  </blockquete>

### Http + RxJS: Unsubscribe Automático

- Cria um module "unsubscribeRxjsModule"

- Cria um arquivo de roteamento "unsubscribeRxjsRoutingModule"

- Cria um component "unsubscribePocComponentComponent"

- Cria um component "pocBaseComponent"

- Cria um serviço "EnviarValorService"

- Toda vez que o ngIf esconde ele destroi o componet!

- Depois cria 5 component e injeta os serviços!

- 
 











