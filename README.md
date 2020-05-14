# Angular-Loiane
Praticando Angular com Loiane Groner

# Atualizando o Angular CLI

- passo1: atualizando de forma global: Global package

  <blockquote>npm uninstall -g angular-cli @angular/cli</blockquote>
  <blockquote>npm cache clean</blockquote>
  <blockquote>npm install -g @angular/cli@latest</blockquote>

- passo2: Local do projeto: local project package

  <blockquote>rm -rf nome_modules dist</blockquote>
  <blockquote>npm install --save-dev @angular/cli@latest</blockquote>
  <blockquote>npm install</blockquote>

- passo3: executar o comando

  <blockquote> ng update</blockquote>

# Principais  comando JS/TS

- .filter(): Filtra uma lista, deacordo com uma condição, pode passar uma Arrow functions!

  <blockquote>

    value.filter(
      
      v => v.toLocaleLowerCase().indexOf(filter) != -1

    );

  </blockquote> 

- .indexOf(): O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

  <blockquote> 

    return value.filter(

        v => v.toLocaleLowerCase().indexOf(filter) != -1

    );

  </blockquote> 

- .map()


- .includes()

  Verifica se existe em um array a string passado como parametro!


    <blockquote>

      includes('editar')

    </blockquote>



# Principais comandos do Angular CLI

- Criando um componente pelo CLI

  <blockquote> ng g c nomeDoComponente </blockquote> 

- Criando um module pelo CLI

  <blockquote> ng g m nomeDoModulo</blockquote> 

- Criando um serviço 

  <blockquote> ng g s nomeDoServico</blockquote> 

- Instalando o bootstrap no angular

  <blockquote>npm i ngx-bootstrap-navbar </blockquote>

  <blockquote> npm i @angular/cdk</blockquote>

  É preciso que o modulo principal tenha essas importações para que o componente funcione!

  <blockquote> 
  
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { BrowserModule } from '@angular/platform-browser';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { AppComponent } from './app.component';
    import { AppRoutingModule } from './app-routing.module';

    import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
  
  </blockquote> 

  <blockquote> https://www.npmjs.com/package/ngx-bootstrap-navbar </blockquote> 

  <blockquote> https://valor-software.com/ngx-bootstrap/#/documentation </blockquote>




# Comandos de teste

- Comando que varifica o seu codigo!

  <blockquote> ng lint </blockquote>

- Roda os arquivos de teste, e informa o tipo de erro no teste!

  <blockquote> ng test: </blockquote>

- Teste de integração

  <blockquote> ng e2e</blockquote>



# Ciclo de vida do Angular ! 

  Quando? - Evento (Hooks) -

- Antes #2 e quando valor property-binding é atualizado (importante):

    <blockquote> ngOnChanges() </blockquote> 

- Quando component é inicializado:

    <blockquote> ngOnInit()</blockquote>

- A cada ciclo de verificação de mudanças:

    <blockquote> ngDoCheck()</blockquote>

- Depois de inserir conteúdo externo na view:

  <blockquote> ngAfterContentInit()</blockquote>

- A cada verificação de conteúdo inserido:

  <blockquote> ngAfterContentChecked()</blockquote>

- A cada verificação de conteúdo / conteúdo filho: 

  <blockquote> ngAfterViewChecked()</blockquote> 

- Antes da diretiva / component ser destruído (importante):

  <blockquote> ngOnDestroy()</blockquote>



# Mudando o pré processador de css de um projeto que ja existe!

- style guid: Padrões do angular

  https://angular.io/guide/styleguide
  
  <blockquote>ng set defaults.styleExt scss</blockquote>

  <blockquote>ng set dedaults.styleExt less</blockquote>

  <blockquote>ng set dedaults.styleExt style</blockquote>



# Projeto de estudo sobre Diretivas

- Uma forma de passar instruções para o template(codigo HTML)

  *ngFor

  <blockquote>

    < ul>
      < li *ngFor="let curso of cursos">
      {{ curso }}
      < /li>
    < /ul>
    
  </blockquote> 

  Os componentes são diretivas com template

  Exemplos:
  <blockquote>
    < cursos-lista></ cursos-lista>
  </blockquote>

- Existe 2 tipos de diretivas 

  - Diretivas Estruturais

    Interagem com a view e modifica a estrutura do DOM o/ou codigo html! 

    <blockquote>
      ngFor, ngIf
    </blockquote>

  - Diretivas de atributos

    Interagem com o elemento em que foram aplicadas

    <blockquote>
      ng-class, ng-style
    </blockquote>


- ngIf



# Projeto de estudo sobre Service

- Bota a classe de serviço no providers para ela ser instanciada uma vez para toda aplicação (Usando a injeção de dependencia)

  Padrão singoto: não importa quantas vezes declara o servico, sempre vai ter uma unica instancia!


# Module

- Module de funcionalidade vs module root/ modulo raiz

  - Module de funcionalidade se importa o CommonModule!

  - Modulo raiz se importa o BrowserModule!


# Projeto de estudo sobre Pipes

- Criando um Pipe personalizado

  <blockquote>

    ng g p 'nome do pipe'

  </blockquote>


# Projeto de estudo sobre Rotas

- https://github.com/LincolnLink/Angular-Loiane/tree/master/rotas


# Formulários (template vs data / reativo) Introdução


- Existe 2 tipos de formulario no angular 2+ o Template Driven e o Data Driven

- Template Driven: 

  - O formulario é criado e configurado no HTML.

  - Validações são feitas no proprio template do HTML.

  - Angular cria/deduz um FormGroup do cod HTML, é colocado diretivas nos campos para o angular saber para o Angular gerencia.

  - Valores do form são submetidos com ngSubmit, é usada uma variasvel local para o método que faz o submite pegar os valores.

- Data Driven(Reativo)

  - O formulario é criado e configurado no Component, o HTML só recebe o basico, o componente cria o objeto forms, e o proprio componente gerencia os dados.

  - Validações são feitas no component, no HTML é feita apenas uma ferencia para poder casar as informações!

  - Angular usa o FormGroup criado no Component!

  - Form já está no Component e não precisa de ngSubmit

# Iniciando um projeto para estudo de formularios no Angular 2+

- Cria um projeto chamado "forms"

  <blockquote>ng new forms</blockquote>

- Instala o ngx-bootstrap no projeto

  https://github.com/valor-software/ngx-bootstrap/blob/development/docs/getting-started/ng-cli.md
  
  <blockquote>
    npm install ngx-bootstrap bootstrap --save
  </blockquote>


- Link com os exemplos de forms: 
  
  https://getbootstrap.com/docs/3.3/css/#forms

  Bota o caminho do css no arquivo angular.json

  <blockquote>

    "styles": [
            "./node_modules/bootstrap/dist/css/bootstrap.min.css",
            "styles.css",
          
    ],

  </blockquote>

- Estrutura HTML do NavBar com as duas rotas

  <blockquote>

    < nav class="navbar navbar-default">
      < div class="container-fluid">        
        < div class="navbar-header">
          < button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            < span class="sr-only">Home</ span>
            < span class="icon-bar"></ span>
            < span class="icon-bar"></ span>
            < span class="icon-bar"></ span>
          </ button>
          < a class="navbar-brand" [ routerLink]="" >Angular Forms</a>
        </ div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">

          <li routerLinkActive="active"  class="active">
            <a [routerLink]="/templateForm" >Form - Template Driven</a>
          </li>

          <li routerLinkActive="active"  class="active">
            <a [routerLink]="/dataForm" >Form - Data Driven</a>
          </li>

        </ul>
      </ div>
    </ nav>


    < div class="container">
      < div class="row">
        < div class="col-md-12">
          < router-outlet></ router-outlet>
        </ div>
      </ div>
    </ div>

  </blockquote>

  Crie dois componentes, para cada formulario diferente, depois configura no module de rotas


  </blockquote>ng g c TemplateFormComponent</blockquote>


  </blockquote>ng g c DataFormComponent</blockquote>

  
















