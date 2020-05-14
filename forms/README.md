# Forms

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

      < nav ngxNavbarDynamicExpand class="navbar navbar-expand-lg navbar-dark bg-dark">

        <a class="navbar-brand" routerLink="">Angular Forms</a>

        <button class="navbar-toggler" type="button" (click)="collapse.toggle()">
          <span class="navbar-toggler-icon"></span>
        </button>

        <ngx-navbar-collapse id="main-nav" #collapse="ngxNavbarCollapse">
          <ul class="navbar-nav">
            <li class="nav-item active" routerLinkActive="active">
              <a class="nav-link" routerLink="/templateForm">Form - Template Driven</a>
            </li>
            <li class="nav-item" routerLinkActive="active">
              <a class="nav-link" routerLink="/dataForm">Form - Data Driven</a>
            </li>
            
          </ul>
        </ngx-navbar-collapse>
      < /nav>

      < div class="container">        
          
            <router-outlet></router-outlet>          
        
      < /div>

  </blockquote>

  Crie dois componentes, para cada formulario diferente, depois configura no module de rotas


  </blockquote>ng g c TemplateFormComponent</blockquote>


  </blockquote>ng g c DataFormComponent</blockquote>


# Estrutura em HTML do Template-formulario

- Exemplo
  
    </blockquote>
    
        <form class="form-horizontal">
        <div class="form-group">

            <label for="nome" class="control-label">Nome</label>
            <input type="text" class="form-control" id="nome" placeholder="Nome">
            

            <label for="email" class="control-label">Email</label>        
            <input type="email" class="form-control" id="email" placeholder="nome@Email.com">
            
            <button type="submit" class="btn btn-primary">Enviar</button>



            </div>
        </form>    
    
    </blockquote>

  




