# RequestsHttp

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







