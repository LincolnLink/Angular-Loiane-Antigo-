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



# Principais comandos do Angular CLI

- Criando um componente pelo CLI

  <blockquote> ng g c nomeDoComponente </blockquote> 

- Criando um module pelo CLI

  <blockquote> ng g m nomeDoModulo</blockquote> 

- Criando um serviço 

  <blockquote> ng g s nomeDoServico</blockquote> 

- Instalando o bootstrap no angular

  <blockquote> npm install ngx - inicialização - salvar </blockquote> 

  <blockquote> https://valor-software.com/ngx-bootstrap/#/documentation </blockquote> 

  <blockquote> http://themicon.co/theme/angle/v4.6/frontend/site/</blockquote> 



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

- Bota a classe de serviço no providers para ela ser instanciada uma vez para toda aplicação

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










