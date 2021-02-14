# Angular 2+ com Loiane

  - Praticando Angular 2 + com Loiane Groner

    - [x] Nodejs/npm - https://nodejs.org/en/
    - [x] Angular CLI - npm i @angular/cli
    - [x] Type Script - npm i typescript
    - [x] Angular 10
    - [x] ES6 / ES 2015

  - Sintaxe do ES6 e do ES5

    http://es6-features.org/#Constants

    TypeScript > ECMAScrip 6 (2015) > ECMAScrip 5(2009)

### Dicas

  - Operadores RXJS

    - Operadores RXJS deve ser colocado no .pipe() quando for feita uma chamada HTTP.

  - HttpClintModel

    -  Não precisa usar o .pipe(map(...)) em chamadas http

  - Memory Leak

    - Para evitar vazamento de memoria(memory leak), é bom evitar inscrição dentro do OnInit(), a solução é usar o pipe "async" ou take(1)!

    - Mas pode se desinscrever da requisição depois que o component é destruido, usando o ciclo de vida ngDestroi()!

  - Métodos "static"

    - Não precisa instanciar.

    - Não precisa de Injeção de dependencia.

    - Se usa diretamente, apenas fazendo referencia da classe.

    - Tem apenas uma instancia! 

### Principais operadores do RXJS

 - distinctUntilChanged()

    - Descrição: Se uma função de comparação for fornecida, ela será chamada para cada item para testar se esse valor deve ou não ser emitido.

    - Se uma função de comparador não for fornecida, uma verificação de igualdade será usada por padrão.

    - Exemplo: https://rxjs-dev.firebaseapp.com/api/operators/distinctUntilChanged

 - switchMap()

    - Permite executar dois obsobo!

    <blockquote>

       this.formulario.get('endereco.cep').statusChanges
        .pipe(
        distinctUntilChanged(),
        tap(statusValue => console.log('status CEP: ', statusValue)),
        switchMap(status => status === 'VALID' ?
        this.cepService.getCep(this.formulario.get('endereco.cep').value)
          : empty()
        )
      )
      .subscribe((data :cepData) => this.feedsData(data));      

    </blockquote>

### Atualizando o Angular CLI

  -Sempre atualize uma versão para outra, do 4 para o 5, do 5 para o 6 , etc, usando sempre um repositorio para cada versão!

  - executar o comando, executa em um promt comando como ADMINISTRADOR!

    - atualizando globalmente:

    <blockquote> npm install -g @angular/cli</blockquote>

    - Comando que atualiza automatico 
    
    <blockquote> ng update</blockquote>

    Guia das principais modificações: https://update.angular.io/

    - Caso de imcompatibilidade com o codelyzer, execute o comando abaixo

    <blockquote>npm install -save codelyzer@latest</blockquote>

  - NCU updates

    - https://www.npmjs.com/package/npm-check-updates

    - Exibe todos os pacotes dezatualizado!    

     <blockquote> npm i npm-check-updates</blockquote> 

     <blockquote> npm install -g npm-check-updates</blockquote> 

    - Comando que verifica oque está desatualizado

     <blockquote> ncu </blockquote>

    - Comando que atualiza
     
     <blockquote> ncu -u</blockquote>


### Reparando erro de vulnerabilidade 

  - Comando

    <blockquote> $ npm audit fix</blockquote>

    depois executa um ng build e executa com ng serve!


### Principais  comando JS/TS

  - Compilar o TS

    <blockquete> tsc "nome do arquivo TS"</blockquote>

  - .filter() 

    - Filtra uma lista, deacordo com uma condição, pode passar uma Arrow functions!

    <blockquote>

      value.filter(
        
        v => v.toLocaleLowerCase().indexOf(filter) != -1

      );

    </blockquote> 

  - .indexOf()

    - O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

    <blockquote> 

      return value.filter(

          v => v.toLocaleLowerCase().indexOf(filter) != -1

      );

    </blockquote> 

  - .map()

    - Cria um novo array, com cada valor do antigo array modificado, baseado no que foi programado! 

    - https://www.w3schools.com/jsref/jsref_map.asp

    <blockquote> 

    var numbers = [2, 3, 4, 5];

    // resultado: 20,30,40,50
    var newarray = numbers.map(num => num * 10 )

    // Quando tipa fica mais facil de tratar!
    var x = map((dados: {emails: any[]}) => dados.emails),

    </blockquote> 

  - .includes()

    - Verifica se existe em um array a string passado como parametro!

    <blockquote>

      includes('editar')

    </blockquote>

  - .replace() 

    - Remove caracteres indesejaveis
      
    <blockquote>

      cep = cep.replace(/\D/g, '');

    </blockquote>

  - Object.keys()

    - Esse método recebe uma lista de controls, aonde ele pega todas as keys, assim consegimos trator como array!

    <blockquote>

      Object.keys(this.formulario.controls).forEach((campo)=>{

          console.log(campo);

          const controle = this.formulario.get(campo);

          controle.markAsDirty();

      });

    </blockquote>

  - Object.assign()

    <blockquote>

      // Criando uma copia do valor!

      let valueSubmit = Object.assign({}, form.value)
      
    </blockquote>

  - .teste()

    - O método test () testa uma correspondência em uma string.
    - Este método retorna verdadeiro se encontrar uma correspondência, caso contrário, retorna falso.
    - https://www.w3schools.com/jsref/jsref_regexp_test.asp

    <blockquote>

      let cep = this.formulario.get("endereco.cep").value;

      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)){}

    </blockquote>


  - JSON.stringify()

    Transforma qualquer objeto JS em JSON

    <blockquote>

      JSON.stringify(objetoExemplo)

    </blockquote>

  - tap()

    - Informa dados do dado tratado pelo "map()"

    <blockquote>

      tap(console.log)

    </blockquote>

  - in

    - O operador in retorna true se a propriedade especificada estiver no objeto especificado ou na sua cadeia de protótipo (prototype chain) desde objeto.

    <blockquote>
      // Arrays

      var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];

      0 in trees        // retorna true

      3 in trees        // retorna true

      6 in trees        // retorna false

      'bay' in trees    // retorna false (você precisa especificar o  
                        // número do índice, não o valor naquele índice)
      'length' in trees // retorna true (length é uma propridade do Array)

      Symbol.iterator in trees // retorna true (arrays são iteráveis, funciona apenas na ES2015+)

    </blockquote>

  - Object.prototype.hasOwnProperty()

    - O método hasOwnProperty() retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).

    - 



### Principais comandos do Angular CLI

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




### Comandos de teste

  - Comando que varifica o seu codigo!

    <blockquote> ng lint </blockquote>

  - Roda os arquivos de teste, e informa o tipo de erro no teste!

    <blockquote> ng test: </blockquote>

  - Teste de integração

    <blockquote> ng e2e</blockquote>



### Ciclo de vida do Angular ! 

  - Quando? - Evento (Hooks) -

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


### Mudando o pré processador de css de um projeto que ja existe!

 - style guid: Padrões do angular

  https://angular.io/guide/styleguide

  <blockquote>ng set defaults.styleExt scss</blockquote>

  <blockquote>ng set dedaults.styleExt less</blockquote>

  <blockquote>ng set dedaults.styleExt style</blockquote>


# Projeto de Module

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

  - Exemplo:

    https://github.com/LincolnLink/Angular-Loiane/tree/master/primeiro-projeto
  

# Projeto de Data-binding

- https://github.com/LincolnLink/Angular-Loiane/tree/master/data-binding


# Projeto de estudo sobre Diretivas

- https://github.com/LincolnLink/Angular-Loiane/tree/master/diretivas 


# Projeto de estudo sobre Service

- https://github.com/LincolnLink/Angular-Loiane/tree/master/servicos


# Projeto de estudo sobre Pipes

- https://github.com/LincolnLink/Angular-Loiane/tree/master/pipes


# Projeto de estudo sobre Rotas

- https://github.com/LincolnLink/Angular-Loiane/tree/master/rotas


# Projeto de Formulários (template vs data / reativo) Introdução

- https://github.com/LincolnLink/Angular-Loiane/tree/master/forms

# Projetos de request HTTP

  - Criando um novo projeto!

  <blockquete>
    ng new requests-http --routing --style=scss -S
  </blockquete>

  - O "-S" é para não gerar arquivos de teste!

  - https://github.com/LincolnLink/Angular-Loiane/tree/master/requests-http

# Debug e Build de Produção!

    
### Debug com Augury

  - Não funciona com o Angular 11, apenas com 8 para baixo!

### Debug com Visual Studio Code

  - Na configuração de debuger , bota a porta usada no angular no localhost

### Suporte ao Internet Explorer

  - No arquivo do angular chamado ".browserslistrc" e "polyfills.ts" descomenta e instala caso precise, aquilo que você precisa como suporte!


### Build de Produção

  - A configuração do build de produção fica no arquivo "Angular.json"

  - Apenas inclua a flag "--prod" no "package.json" dolado do "ng build"!

  - com tudo configurado executa o comando que gera o build de produção!

  <blockquote> npm run build </blockquote>

### Deploy em Produção (Firebase Hosting)

  - Hospedando usando o firebase!

  - Instala o firebase! 

  - https://firebase.google.com/docs/cli?hl=pt-br#windows-npm

  <blockquote> npm install -g firebase-tools </blockquote>

  - Depois que instala deve fazer login, pode usar qualquer conta do Gmail!

  <blockquote> firebase login </blockquote>

  - aceita os termos, ativa o Analitic ou não e fecha o nevegador que foi aberto!

  - No site do FireBase, entra no modo console!

  - Cria um projeto novo

  - No seu projeto inicia o firebase!

  <blockquote> firebase init </blockquote>

  - Escolha a opção usando "espaço" e aperta enter para seguir!

  - aceita todos, menos a ultima pergunta que fala sobre sobreescrever o arquivo index.html!

  - Não vincula com o github

  - É gerado 2 arquivos, firebase.json e firebaserc

  - bota o caminho " "public": "dist/requests-http","

  - para subir os arquivos gerado!

  <blockquote> firebase deploy </blockquote>

  - Com isso já é feito o deploy e o site já está no ar!

### Deploy em Produção com ng deploy (Firebase)

  - Comandos que agiliza o deploy

  <blockquote> ng add @angular/fire </blockquote>  

  - banco de dados em tempo real!

  - Precisa da versão do Angular CLI 8.3.3

  - precisa do firebase e está logado no fire base!

  <blockquote> ng deploy </blockquote>

  - Gera conteudo do /dist/ e sobe em produção!


### Gerando Imagem Docker com Build de Produção

  - Instala o Docker!

  - Busca por "docker communit download" no google!

  - Depois instala um puglin no VS code chamado "docker"!

    - Primeira faze é fazer o build de produção do Angular!

    - Segundo é gerar a imagem NGinX com o conteudo do build de produção!

  - "node: latest" representa a ultima versão

  - precisa do node 10

# 1° Fase

  - Configurando a imagem no arquivo "Dockerfile"

    <blockquote>

        FROM node:12.18-alpine
        ENV NODE_ENV=production
        WORKDIR /app

    </blockquote>

    - COPY: ele copia o arquivo , informa o diretorio de destino!

    <blockquote> COPY package.json /app </blockquote>

    - RUN: codigo para executar!

    <blockquote> RUN npm install --silent </blockquote>

    - Gerando o arquivo nginx, e copiando o projeto para outro diretorio!

    <blockquote>

      FROM nginx:alpine
      VOLUME /var/cache/nginx
      COPY --from=angular app/dist/rotas /usr/share/nginx/html

    </blockquote>

    - No arquivo "dockerignore" bota alguns diretorios e arquivos desncessarios para não subir!
     <blockquote>
        **/dist
        **/e2e
    </blockquote>

  - Cria uma configuração


# 2° Fase

  - https://www.nginx.com/

  - Cria um pasta chamada "config" e um arquivo dentro dela chamado "nginx.conf"!

  - Copia e cola o conteudo! 

  <blockquote>

    server {
        listen 0.0.0.0:80;
        listen [::]:80;
        default_type application/octet-stream;

        gzip                    on;
        gzip_comp_level         6;
        gzip_vary               on;
        gzip_min_length         1000;
        gzip_proxied            any;
        gzip_types              text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
        gzip_buffers            16 8k;
        client_max_body_size    256M;

        root /usr/share/nginx/html;

        location / {
            try_files $uri $uri/ /index.html =404;
        }
    }

  </blockquote>

   - Define a porta como 80 é uma porta padrão paraservidores http!

   - Aplicar o gzip em varios arquivos estaticos, arquivos da pasta dist

   - Usar a pasta raiz que é a pasta do HTML!

   - Em caso de pagina não encontrada , redireciona no index.html!

   - Pode por Cache e proxy (se estiver usando node, php ou C#)

   - https://docs.nginx.com/?_ga=2.41121963.801573988.1613180107-1425533929.1613180107 

   - APLICA mais uma configuração no Dockerfile!

  <blockquote>
    COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf

    # docker build -t curso-angular .
    # docker run -p 8081:80 curso-angular
  </blockquote>

  - Bota dois comandos que gera e executa a imagem docker, mapeando as portas!

  - Arquivo "Dockerfile" completo!

  <blockquote>

    FROM node:latest as angular
    ENV NODE_ENV=production
    WORKDIR /app
    COPY package.json /app
    RUN npm install --silent
    COPY . .
    RUN npm run build

    FROM nginx:alpine
    VOLUME /var/cache/nginx
    COPY --from=angular app/dist/rotas /usr/share/nginx/html
    COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf

    # docker build -t curso-angular .
    # docker run -p 8081:80 curso-angular

  </blockquote>


  - Pode por as configurações do que executar no "docker-compose.yml"!

  <blockquote>

    version: '3.4'

    services:
      curso-angular:
        image: curso-angular
        build: .
        ports:
          - 8081:80

  </blockquote>

  - executa o plugin: 

  <blockquote> ctrl + shift + p, escreve docker: compose up </blockquote>

  - Pode ter um arquivo de dockerCompose para debug, um para outro ambiente x, y et

  - Caso não de certo cria e copia 3 arquivos do Docker!

  https://github.com/loiane/curso-angular/blob/master/requests-http/Dockerfile

  - Dockerfile, docker-compose.yml e .dockerignore


### Imagem Docker: Deploy Google Cloud (Cloud Run)

  - Fazer o depoly de imagem Docker, usando serviço Cloud!

  - https://cloud.google.com/run

  - Escala automaticamente!

  - https://cloud.google.com/run/docs/quickstarts/build-and-deploy

  - Infelismente usa cartão de credito!

  - Cria um projeto em "Acessar a pagina gerenciar recursos"

  - creat projetc

  - De um nome, edita o project ID, CREATe!!!!!

  - Depois de criado vai no "Container Registry"!

  - 










