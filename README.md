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

# Reparando erro de vulnerabilidade 

- Comando

  <blockquote> $ npm audit fix</blockquote>

  depois executa um ng build e executa com ng serve!


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

- JSON.stringify()

  Transforma qualquer objeto JS em JSON

  <blockquote>

    JSON.stringify(objetoExemplo)

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


# Module

- Module de funcionalidade vs module root/ modulo raiz

  - Module de funcionalidade se importa o CommonModule!

  - Modulo raiz se importa o BrowserModule!

- Decoreitor do ngModule 

  - declarations: Cadastra os component, diretivas e pipes, vinculando ao modulo.

  - imports: Pega os modulos que vem de fora.

  - export: compartilha o acesso de componentes e modulos. 

  - providers: cadastra os serviços que vão ser usado pelos componentes, pipes e diretivas vinculados.

- Modulo de compartilhamento

  Para compartilhar um componet que é reutilizado em varias paginas, por exemplo um "componente de mensagem de erro" devese declarar ele em um modulo, com isso você precisa apenas importar esse modulo!

# Data-binding

- https://github.com/LincolnLink/Angular-Loiane/tree/master/data-binding


# Projeto de estudo sobre Diretivas

- https://github.com/LincolnLink/Angular-Loiane/tree/master/diretivas 


# Projeto de estudo sobre Service

- https://github.com/LincolnLink/Angular-Loiane/tree/master/servicos


# Projeto de estudo sobre Pipes

- https://github.com/LincolnLink/Angular-Loiane/tree/master/pipes


# Projeto de estudo sobre Rotas

- https://github.com/LincolnLink/Angular-Loiane/tree/master/rotas


# Formulários (template vs data / reativo) Introdução

- https://github.com/LincolnLink/Angular-Loiane/tree/master/forms











