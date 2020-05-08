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

-.filter(): Filtra uma lista, deacordo com uma condição, pode passar uma Arrow functions!

  <blockquote>

    return value.filter(

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



# Diretivas do Angular:

Uma forma de passar instruções para o template(codigo HTML)


EXEMPLO: *ngFor

<ul>
    <li *ngFor="let curso of cursos">
    {{ curso }}
    </li>
</ul>

Os componentes ~soa diretivas com template

exemplos:
<cursos-lista></cursos-lista>


existe 2 tipos de diretivas 

-- Diretivas Estruturais:
Interagem com a view e
modifica a estrutura do DOM o/ou codigo html! 

exemplo: ngFor, ngIf


-- Diretivas de atributos

Interagem com o elemento em que foram aplicadas

exemplo: ng-class, ng-style


-- ngIf



------Service---------


-- bota a classe de serviço no providers para ela ser
 instanciada uma vez para toda aplicação


---------criando module de funcionalidade

Module de funcionalidade vs module root/ modulo raiz

Module de funcionalidade se importa o CommonModule!

Modulo raiz se importa o BrowserModule!



padrão singoto: não importa quantas vezes declara o servico, 
sempre vai ter uma unica instancia!


--------------Pipes--------------------


# criando um Pipe personalizado


 `ng g p 'nome do pipe'`


# Projeto de estudo sobre ROTAS

- https://github.com/LincolnLink/Angular-Loiane/tree/master/rotas

# Criando um sistema de rotas 




# Lazy Loading

O conseito de Lazy loading seria você deixar a sua aplicação/ site mas rapido, carregando ele em partes, o Angular divide essas partes atraves dos Modulos(pode organizar com pastas), cada Modulo agrupa componentes, você carregando os modulos sobe demanda, faz com que os componentes carrega apenas quando são chamados! 

Essa configuração de Lazy Loading se configura usando o sistema de rotas!

A organização de pastas fica assim:

-pasta-alunos
--pasta/do-componente-aluno-detalhes
--pasta/do-componente-aluno-forms
alunos-routing.module.ts
alunos-componente-principal.component.ts
alunos.module.ts


# Guarda de rota

A principal função é de não deixar o usuario acessar outras paginas de forma errada, um bom exemplo seria acessar uma pagina sem fazer login e digitando diretamente
na URL!

É um tipo de serviço especial, que implementa um método, que o Angular reconhece a implementação dele, e pode ser usado como Guarda de rota!

``


ng g s guards/'nome do serviço'

``


Remove a parte de "serviço" e quarda na pasta "guards"

implementa a interface 'CanActivate', isso define que esse serviço é uma Guarda de rota!



