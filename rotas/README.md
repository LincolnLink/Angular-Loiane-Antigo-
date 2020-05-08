# Configurando o Module de Rotas

- Se cria primeiro um modulo da rota do componente principal, esse modulo na versão 8 já vem implementado
    quando cria o projeto angular(ng new 'nomeDoProjeto')!
    A classe "AppRoutingModule" recebe a configuração principal das rotas, primeiro cria uma constante do tipo "Rotes" que recebe um array de objetos, cada objetos desse tem uma configração de rotas diferente!

    - Path/component: As principais propriedade de cada objeto é, a definição do "Path" que é o caminho da rota, e a definição do "component" que é o nome do componente que vai ser carregado!

    - loadChildren: Caso tenha configurado um "Lazy Loading", você deve trocar o "component" pela propriedade "loadChildren", ele recebe uma "Arrow functions" que define qual modulo será carregado quando o usuario entrar naquela rota, sendo assim aquele modulo carregara outros componentes que foi configurado na quele modulo, com isso você carrega componentes sobre demanda, deixando o sistema mais leve e rapido!

    - canActivate:  Outra propriedade que pode ter nesse objeto é o "canActivate", aonde ela recebe um array de "Guardas de rotas", essa "guarda de rotas" é um tipo de service especial do Angular, aonde você precisa implementar uma interface para o Angular reconhecer ele como guarda de rota, ele é executado quando o usuario entra na rota especifica, você pode configurar na rota pai ou na rota filha!

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







