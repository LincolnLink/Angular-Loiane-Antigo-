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

    Só é possivel se inscrever porque o "params" é do tipo BehaviorSubject

    Essa inscrição deve ser colocada em uma variavel, para poder desiscrever "unsubscribe()" quando o componente é destruido "ngOnDestroy()"!

    Com essa inscrição você sempre vai obter o snapshot da rota atual!

    - Router (Rotas Imperativas, Redirecionamento via código): Essa classe foi usada para poder trocar de pagina, ultilizando o método(navigate())

    <blockquote>

        inscricao: Subscription;        

        constructor(
            private route: ActivatedRoute, 
            private cursosService: CursosService,
            private router: Router) { 

            //console.log(route)               
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

    

# Definindo e extraindo parâmetros de url (query)

- queryParams: É uma diretiva do angular que permite passar um objeto(queryParams) na URL, é um parametro de pagina!

    <blockquote>

        <li routeLinkActive="active" class="nav-item">
            <a routerLink="/cursos" [queryParams]="{pagina:1}" class="nav-link" >Cursos</a>
        </li> 

    </blockquote>

- A forma de extrair esse "queryParams", seria usando novamente o "ActivatedRoute"

    <blockquote>

        pagina: number;
        inscricao: Subscription;

        constructor(

            private CursosService: CursosService,
            private route: ActivatedRoute,
            private router: Router

        ) { }

        ngOnInit() {

            this.cursos = this.CursosService.getCursos();

            // Obtendo o queryParams!
            this.inscricao = this.route.queryParams.subscribe(
            (queryParams: any) => {

                this.pagina = queryParams['pagina'];

            }
        );
        }

        // Boa pratica para quando for usar o método "subscribe"

        ngOnDestroy(){

            this.inscricao.unsubscribe();

        }

        // Botão da paginação
        proximaPagina(){    

        this.router.navigate(['/cursos'],{queryParams: {'pagina': ++this.pagina}});

        }

    <blockquote>
    

# Guia rapido de Lazy Loading

- Motivação:

    - Carrega com component sob demanda, deixando as paginas mais rapida de carregar!

    - Segurança: caso tenha uma pagina de login, vai carregar primeiro apenas a pagina de login!

- Configuração: 

    - Configure a aplicação em modulos, usando modulos de funcionabilidade, examplo: um module apenas para paginas de "Alunos" ou um module apenas para paginas de "Cursos", o module ele agrupa os componentes quando você declara os componentes uma unica vez em um module especifico!

    - Pare e execução do ng serve!

    - Veja em todos os lugares e Remove a importação e declaração dos module que você for usar nas rotas.

    - No arquivo "app-routing.module.ts" configure uma rota, passa o valor do "path" e na propriedade "loadChildren", passa um caminho de um module, e depois o nome do module.

    - Cria um module de "RoutingModule" para o componente que estásendo roteado, ele deve ter uma rota padrão com o valor do "path" vazio, e com o "component" informado.

    - Mantenha um padrão de nome de rotas.

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



# Configurando a guarda de rotas (CanActivate)

- Motivo para usar

    A principal função é de não deixar o usuario acessar outras paginas de forma errada, um bom exemplo seria acessar uma pagina digitando diretamente na URL sem fazer login, uma guarda de rota com um script que verifica se o usuario está logado ou não, bloquearia a URL, forçando o usuario a fazer login!

- Criando uma guarda de rota

    <blockquote>
        ng g s guards/'nome do serviço'
    </blockquote>

    - Remove a parte de "serviço" e quarda na pasta "guards"

    - Implementa a interface 'CanActivate', isso define que esse serviço é uma Guarda de rota!

# Configurando Guarda de Rotas filhas (CanActivateChild)

- Motivo para usar

    - Verificar se o usuario pode editar ou deletar, quando entra na pagina de visualização do curso ou produto!

- Cria um arquivo chamada "CursosGuard" na pasta "guards", depois implementa a interface "CanActivateChild"

    - childRoute: ActivatedRouteSnapshot -> Esse parametro é uma foto da rota ativada!

    - state: RouterStateSnapshot -> Esse parametro é o estado dessa rota! 

        <blockquote>

            @Injectable()
            export class CursosGuard implements CanActivateChild {

                canActivateChild(
                    childRoute: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot
                    ): boolean | Observable<boolean> | Promise<boolean>
                {
                    console.log("Chamando guarda de rotas filhas! - cursos");

                    // Usa esses dois objetos para criar logica
                    console.log(childRoute);

                    console.log(state);

                    return true;
                }

                constructor() {}

            }

        </blockquote>

        Pode definir as guardas de rotas de forma global no modulo de rotas principal, ou no modulo especifico do componente que deseja!


# Configurando as Guarda de Rotas (CanDeactivate)

- Motivo para usar

    - Verificar se o usuario pode desativar uma rota ou não!

    - Verificar se o usuario realmente quer sair do formulario que já foi preenchido, informando para ele que pode perder os dados que já foram digitados!

    - Caso de erro na pagina!

- Crie uma interface com nome de "IformCanDeactivade", caso queira tipar de forma generica a classe!

    <blockquote>

    // interface é coisa do Type Script
    export interface IformCanDeactivade{

        podeDesativar(): any;

    }

    </blockquote>


- Crie um servico chamado "AlunosDeactivateGuard", você pode definor qual componente vai receber essa guarda de rotas, <T>, ou então passar uma interface para tipar de forma generica!

    <blockquote>

    @Injectable({providedIn: 'root'})
    export class AlunosDeactivateGuard implements CanDeactivate< IformCanDeactivade> {
        canDeactivate(
        component: IformCanDeactivade,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
        ): Observable< boolean>|Promise< boolean>|boolean {

        console.log("Entrou na configuração de desativar a rota [x]");

        // Logica para definir se vai mudar ou não de rota!
        //return component.podeMudarDeRota();

        return component.podeDesativar();

        }
    }

    </blockquote>

- Uma classe precisa dar um corpo de logica para o método da interface, nesse caso o componente "AlunoFormComponent" implementou o método da interface!

    <blockquote>

        private formMudou: boolean = false;

        // Logica que verifica se o campo "nome" está preenchido!
        onInput(){
            this.formMudou = true;
            console.log("O campo está preenchido!");
        }

        // Logica informa para o usuario que o campo está preenchido e não foi salvo!
        // Pergunta se ele deseja sair ou não!

        podeMudarDeRota(){

            if(this.formMudou) {

            return confirm("Tem certeza que deseja mudar de pagina, exite dados modificados que não foram salvos!");

            }

        }
        
        podeDesativar() {

            return this.podeMudarDeRota();

        }

    </blockquote>

- Por final declara o "AlunosDeactivateGuard" em algum provider de algum module, no module principal fica global, no module especifico ele só ativa no componente especifico! 

    <blockquote>

    canDeactivate: [AlunosDeactivateGuard]

    </blockquote>


# Guarda de Rotas (Resolve) 

- Motivo de usar

    - Carregando dados antes da rota ser ativada(antes que o componente seja criado)

    - Serve também para obter informações de um usuario ou produto, com o id que está sendo passado pela pagina, para poder obter os dados e depois quando carregar o outro componente carregar !

- Cria um servico chamado "AlunoDetalheResolver", herda a classe Resolve< T> com um tipo de objeto que sera resolvido, no construtor já tem uma injeção de dependencia do servico Crud, obtenha o parametro da rota que é um id de usuario, usando o "route.params[' id']"

    <blockquete>
            
        @Injectable(/*{ providedIn: 'root' }*/)
        export class AlunoDetalheResolver implements Resolve<Aluno> {
        
            alunoTeste: any;

            constructor(private alunoService: AlunosService){}
            
            resolve(
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
                ): Observable<any>|Promise<any>|any {

                let id = route.params['id']; 

                console.log("Obtem informação antes de entrar na rota - Resolve");

                return this.alunoTeste = this.alunoService.getAluno(id);
            }
        }

    </blockquete>


- Define o Resolve em um componente filho! 

    <blockquete>
        resolve: { aluno: AlunoDetalheResolver }
    </blockquete>

- Configurando o componente que usa o resolve!

    Com o resolve configurado, e definido em qual componente vai usar, no componente você deve fazer uma injeção de dependencia do "private route: ActivatedRoute", para poder pegar os dados do "resolve", você deve fazer uma inscrição no na propriedade "data", com isso você consegue extrair o objeto "aluno" do tipo aluno que foi declarado na rota filha, com os dados que veio do servico!

    Como uma boa pratica é sempre bom se desinscrever depois que o objeto é destruido!

    <blockquote>
        inscricao: Subscription;  
        alunoView: Aluno;  

        constructor(
            private route: ActivatedRoute,    
            private router: Router,
            //private alunoService: AlunosService,
        ) { }

        this.inscricao = this.route.data.subscribe(
            (info: {aluno: Aluno}) => {

            //console.log("objeto que é recebido");
            //console.log(info);

            this.alunoView = info.aluno
            } 
        );

        ngOnDestroy(){
            this.inscricao.unsubscribe();
        }
    </blockquote>

    Por final declara no provider do module de rotas do projeto Alunos, para a injeção de dependencia funcionar!


# Usando Guarda de Rotas (CanLoad) Como não carregar o módulo sem permissão

- Motivo de usar

    - É uma permissão para segurar que seu script não fica exposto em inspeções de navegadores, quando o usuario não está logado!

- Configuração: a interface canLoad foi implementada na classe "authGuard"

    O método que verifica login foi refatorado e isolado em um método novo, foi feito isso para reutilizar ele no na implementação do "canActivate" e "canLoad"

    <blockquote>

        private verificarAcesso(){

            if(this.authService.usuarioEstaAutenticado())
            {
            return true;
            }
            
            this.router.navigate(['/login']);
            return false;
        }
    </blockquote>

    Implementa o método "CanLoad"

    <blockquote>
    
        canLoad(
            route: Route, 
            segments: UrlSegment[]
            ): boolean | Observable<boolean> | Promise<boolean> {           
            
            console.log("canLoad: Verificando se o usuario pode carregar o cod. do mudule")

            return this.verificarAcesso();

        }

    </blockquote>

    Depois disso faz a chamada do canLoad no module de rotas principal, aonde está configurado o lazyLoad

    <blockquote>

        canLoad: [AuthGuard]

    </blockqoute>

# Definindo rota padrão e wildcard (rota não encontrada)


- Motivo para usar 

    - Configurar uma pagina para o erro 404

    - Quando o usuario digita um valor na URL!

- Configuração

    Cria um componente com o nome de "paginaNaoEncontrada"

    <blockquote>

        ng g c paginaNaoEncontrada

    </blockquote>

    Adiciona uma nova rota, todo caminho estranho é considerado um "**", que direciona para uma pagina mais amigavel para o usuario !

    <blockquote>

        {
            path: '**', component: PaginaNaoEncontradaComponent //, canActivate: [AuthGuard]
        }

    </blockquote>

    Pode por o "canActivate: [ AuthGuard]" para redirecionar o usuario para pagina de login!

- Rota padrão (redirectTo), segunda dica!

    Fazendo um redirecionamento diretamente pelo module padrão de rotas, usando a propriedade "redirectTo"

    <blockquote>

        { 
            path: '/Home',
            component: HomeComponent,
            canActivate: [AuthGuard]
        },

        { path: '', redirectTo: '/home', pathMatch: 'full' },

        {
            path: '**', component: PaginaNaoEncontradaComponent //, canActivate: [AuthGuard]
        }
    
    </blockquote>

    O a propriedade "pathMatch" tem dois valores, full e prefix

    - full: verifica e avalia a rota toda, ignorando as rotas filhas!

    - prefix: verifica e avalia as rotas filhas!

# Estilo de url: HTML5 ou usando #

- o HTML5 deixa as rotas sem o "#", porem pode dar erro na hora de fazer requisição e uma API!

-Configuração: deve configurar no module de rota principal, passa um segundo parametro, que é um objeto com a propriedade "useHash" recebendo valor de "true"

    <blockquote>

        @NgModule({
        imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
        exports: [RouterModule]
        })
        export class AppRoutingModule { }

    </blockquote>






















