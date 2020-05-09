# RouterLink e RouteLinkActive

- RouterLink: Essa diretiva define rotas para o template HTML, que recebe o caminho da rota, ao clicar você é direcionado para rota, que ativa o componente que foi configurado!

- RouteLinkActive: É uma diretiva do angular que foi configurada no "< li>" que quando o link é clicado, a diretiva bota uma classe que foi configurada!

    <blockquote>

        <nav *ngIf="mostrarMenu" ngxNavbarDynamicExpand class="navbar navbar-dark bg-dark">

            <a routerLink="" class="navbar-brand" href="#">Logo</a>

            <button class="navbar-toggler" type="button" (click)="collapse.toggle()">
                <span class="navbar-toggler-icon d-flex align-items-center justify-content-center"></span>
            </button>
            
            <ngx-navbar-collapse id="main-nav" #collapse="ngxNavbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li routeLinkActive="active" class="nav-item">
                        <a routerLink="/" class="nav-link" >Home</a>
                    </li>
                    <li routeLinkActive="active" class="nav-item">
                        <a routerLink="/login" class="nav-link" >Login</a>
                    </li>
                    <li routeLinkActive="active" class="nav-item">
                        <a routerLink="/cursos" [queryParams]="{pagina:1}" class="nav-link" >Cursos</a>
                    </li>                    
                    <li routeLinkActive="active" class="nav-item">
                        <a [routerLink]="['alunos']" class="nav-link" >Alunos</a>
                    </li>
                </ul>
            </ngx-navbar-collapse>
        </nav>

        <div class="container">

            <router-outlet></router-outlet>

        </div>


    </blockquote>

# Definindo e extraindo parâmetros de roteamento

- Parametros na rota: a direteiva "[ routerLink]= ''" alem da rota receber o caminho ela também pode receber    um paremetro, no exemplo abaixo ela está recebendo um "idCurso.value" que seria o id de algum objeto que está sendo renderizado no 
 
    <blockquote>
        <li routeLinkActive="active" class="nav-item">
            <a [routerLink]="['curso', idCurso.value]" class="nav-link" >Cursos com Id</a>
        </li>
        <br>
        <p>Entre com o ID do curso</p>
        <input #idCurso>

    </blockquote>


- Extraindo parâmetros: 

    - Primeira forma[de forma ruim]: faz uma injeção de dependencia da classe "ActivatedRoute", com isso você tem acesso ao snapshot da roda, ele é uma copia da rota atual, com isso você consegue obter o parametro que foi passado para a rota!

    <blockquote>

        id: number;

        constructor(private route: ActivatedRoute) {

        //Obtendo o parametro da rota de forma ruim!
        this.id = this.route.snapshot.params['id'];
    }
        
    </blockquote>

    - Segunda forma[Solução mais elegante!] faz uma injeção de dependencia da classe "ActivatedRoute" com isso você acessa o "params" e faz uma inscrição "subscribe()" passa uma arrow function, esperando um parametro chamado "params" de qualquer tipo(any) com isso você pega o indice "id" igual da primeira forma!

    Essa inscrição deve ser colocada em uma variavel, para poder desiscrever "unsubscribe()" quando o componente é destruido "ngOnDestroy()"!

    Com essa inscrição você sempre vai obter o snapshot da rota atual!

    - Router: Essa classe foi usada para poder trocar de pagina, ultilizando o método(navigate())

    <blockquote>

        inscricao: Subscription;        

        constructor(
            private route: ActivatedRoute, 
            private cursosService: CursosService,
            private router: Router) {            
        }

        ngOnInit() {

        // Se inscreve para poder receber ID do curso! 
        // Com o ID carrega o curso selecionado!

        this.inscricao = this.route.params.subscribe( 
            (params: any) => {

            this.id = params['id'];

            // Busca o curso com o id especificado!

            this.curso = this.cursosService.getCurso(this.id);

            if(this.curso == null)
            {

            // Verificar se a rota está ativa
            //this.router.isActive

            // Vai passar o objeto da rota!
            // Transfere a pagina para o componente informado!

            this.router.navigate(['cursos/naoEncontrado']);

            }

        }
        ); 
    }

    // Quando o objeto é descruido ele se desinscreve![Boas praticas]
    
    ngOnDestroy(){

        //this.inscricao.unsubscribe();

    }

    </blockquote>

    

# Configurando o Module de Rotas

- Se cria primeiro um modulo da rota do componente principal, esse modulo na versão 8 já vem implementado
    quando cria o projeto angular(ng new 'nomeDoProjeto'), no index deve se por a tag "< base href="/">".
    A classe "AppRoutingModule" recebe a configuração principal das rotas, primeiro cria uma constante do tipo "Rotes" que recebe um array de objetos, cada objetos desse tem uma configração de rotas diferente!

    - Path/component: As principais propriedade de cada objeto é, a definição do "Path" que é o caminho da rota, e a definição do "component" que é o nome do componente que vai ser carregado!

    - loadChildren: Caso tenha configurado um "Lazy Loading", você deve trocar o "component" pela propriedade "loadChildren", ele recebe uma "Arrow functions" que define qual modulo será carregado quando o usuario entrar naquela rota, sendo assim aquele modulo carregara outros componentes que foi configurado na quele modulo, com isso você carrega componentes sobre demanda, deixando o sistema mais leve e rapido!

    - canActivate:  Outra propriedade que pode ter nesse objeto é o "canActivate", aonde ela recebe um array de "Guardas de rotas", essa "guarda de rotas" é um tipo de service especial do Angular, aonde você precisa implementar uma interface para o Angular reconhecer ele como guarda de rota, ele é executado quando o usuario entra na rota especifica, você pode configurar na rota pai ou na rota filha!

    - canActivateChild: faz o mesmo que "canActivate" só que para as rotas filhas!

    - Com o Array configurado você deve importar o "RouterModule" chamando o método "forRoot()" passando para ele o array de rotas que você configurou!


    <blockquote>

        const appRoutes: Routes = [
        { 
            path: 'cursos', 
            loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
            canActivate: [AuthGuard],
            canActivateChild: [CursosGuard]
        },
        { 
            path: 'alunos',
            loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
            canActivate: [AuthGuard],
            //canActivateChild: [AlunosGuard]
        },
        { 
            path: 'login', 
            component: LoginComponent    
        },
        { 
            path: '',
            component: HomeComponent,
            canActivate: [AuthGuard]
        }
        ];

        @NgModule({
            imports: [RouterModule.forRoot(appRoutes)],
            exports: [RouterModule]
        })
        export class AppRoutingModule { }

    </blockquote>

# Configurando o Module de Rotas filhas

- Motivo de usar

    - Evitar repetição no nome do "path" na configuração de rotas !
    - Renderizar componente pai e componente filho ao mesmo tempo na tela, ou rederizar 2 componentes filho ao mesmo tempo um dolado do outro! 

- Configuração

    Como o componente Alunos tem muitas paginas, cada pagina foi criada em forma de componente, para gerenciar cada componente de Alunos, foi criado um Module(AlunosModule) apenas para os componentes Alunos, e para gerencia as rotas foi criado um Module de rotas(AlunosRoutingModule) para so componentes Alunos!
    
    - No "AlunosRoutingModule" foi configurar uma constante do tipo "Routes" que recebe um array com apenas um objeto, que seria a configuração da rota pai do componente!

    - "children" é a propriedade da rota pai, que define as rotas filhas, ela recebe um array de objeto, cada objeto representa uma rota filha!

    - resolve:

    - canDeactivate:  

    O método "forRoot()" é apenas para o "AppRoutingModule" que é o Module de rotas principal do componente principal do projeto, outros Module de outros componentes deve ser usar o método "forChild()"

    <blockquote>

        const alunosRoutes: Routes = [
        {
            path: '', component:AlunosComponent,
            canActivateChild : [AlunosGuard],
            children: [
                {path: 'novo', component: AlunoFormComponent},
                {path: ':id', component: AlunoDetalheComponent,
                resolve: { aluno: AlunoDetalheResolver }
                },
                {path: ':id/editar',
                component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
                },
            ]
        },
        ];

        @NgModule({
        declarations: [],
        imports: [RouterModule.forChild(alunosRoutes)],
        exports: [RouterModule]

        })
        export class AlunosRoutingModule { }

    </blockquote>


- Configurando o arquivo HTML

    Para que as rotas filhas apareça no componente pai é preciso por o "< router-outlet></ router-outlet>" no codigo HTML do componente pai!

    <blockquote>

        <p>Lista de Alunos</p>

        <br>

        <div class="row">

            <div class="col-md-6">

                <div class="list-group">

                    <a [routerLink]="['/alunos',a.id]"  *ngFor="let a of alunos" class="list-group-item list-group-item-action list-group-item-secondary">

                        id: {{ a.id }} - Nome: {{ a.nome }}

                    </a>    
                </div>
            </div>

            <div class="col-md-6">

                <!--É preciso por o "router-outlet" quando o componente tem rotas filhas!-->

                <router-outlet></router-outlet>

            </div>
        </div>

    </blockquote>



# Configurando a guarda de rotas

- Motivo para usar

    A principal função é de não deixar o usuario acessar outras paginas de forma errada, um bom exemplo seria acessar uma pagina digitando diretamente na URL sem fazer login, uma guarda de rota com um script que verifica se o usuario está logado ou não, bloquearia a URL, forçando o usuario a fazer login!

- Criando uma guarda de rota

    <blockquote>
        ng g s guards/'nome do serviço'
    </blockquote>

    - Remove a parte de "serviço" e quarda na pasta "guards"

    - Implementa a interface 'CanActivate', isso define que esse serviço é uma Guarda de rota!

