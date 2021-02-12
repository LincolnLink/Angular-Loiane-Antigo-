# RequestsHttp

Executando o emulador de API: json-server --watch db.json

executa: npm run start, ao inves de ng serve!

### Dicas MUITO IMPORTANTE

  - Deve-se inscrever em métodos que retorna "observable"

  - É bom ultilizar o pipe Async, por que ele se inscreve e se desinscreve automaticamente, assim evita de ter erro de vazamento de memória!

  - Toda variavel que tem um "$" no final, ela é um "observable"!

  - Toda vez que o ngIf esconde ele destroi o componet!

  - É importante desinscrever quando o component é destruido!

  - "Subject" é um o objeto que consegue emitir valores no RXJS!

      <blockquete> 
        error$ = new Subject() 
      </blockquete>    

  - No TS pode ser gerar um variavel usando o "as" ! 
  
  - O ngIf define qual "ng-template" vai ser exibido!

  - Declaração de component no "entryComponents" resolve erros de falta de "Factory"!

  - Não se inicializa formulario dentro do SUBSCRIBE porq ele é um codigo assincrone !

  - Deve se inicializar o formulario dentro do construtor ou dentro do ngOInit!

  - É bom evitar por atribuição de valores dentro de subscribe, e sim por métodos que recebe os valores e faz essa atribuição!

  - Quando se declara um component no "entryComponents" significa que ele vai ser invocado de outro component!    
    - É possivel mandar valores(inputProp) para o component que foi invocado usando um serviço com "bsModalRef" do NgxBootstrap!
    - Técnicamente ele não é filho, então não é possivel usar o outInput propert!
    - A solução para receber valores desse component que é invocado, seria usando o "Subject< boolean>;" do RXJS!!
    - Esse objeto ele emite valores, então com isso o component pode escutar esses valores!

  - "asObservable" é como se fosse um Subscrible, é usando no retorno de um "Subject" para escutar oque foi emitido!

  - "empty()" não se usa mais, é o EMPTY!

  - Lista do tipo "Set < file>" evita que arquivo duplicados sejam salvos!
  

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

    <blockquete>
      npm install node-rest-client
    </blockquete>

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

### Http GET: listar registros

 - Cria um HTML que lista uns cursos

 https://github.com/loiane/curso-angular/blob/master/requests-http/src/app/cursos/cursos-lista/cursos-lista.component.html

 - Cria um service chamado "cursos"

 - Usa o modulo HttpClient

 - Não precisa transformar o jSom manualmente

 - Cria uma requisição GET

 - Tipando o GET, ajuda no intelecense do VS code em tempo de desenvolvimento!

 - Foi criada uma interface, para poder tipar, informando que retorna um array da interface informada!

 <blockquete>

  private readonly API = 'http://localhost:3000/cursos';

    constructor(private http: HttpClient) { }


    list(){
      return this.http.get<Curso[]>(this.API);
    }

 </blockquete>

 - Depois injeta o serviço no component!

 #### Quando um método retorna um "observable" deve sempre se inscrever nele, para poder executar!

 - Na inspeção do navegador na aba "NETWORK" é possivel ve o resultado da inscrição usando um console.log, filtra usando o XHR!

 - Para debugar no serviço, pode usar o .pipe(.tap()) do RXJS!

 - Depois disso, no subscrible, deve passar a response para o arry de "curso"!

 - No templat do componet, deve ser criado um ngFor no body da tabela!

### Http: Dica: Variável de Ambiente

 - Na pasta environments é adiministrada as variaveis de ambientes!

 - Todo projeto Angular tem esse pasta "environments"

  - Nele tem dois arquivos, um de desenvolvimento: "envirinments.ts"

  - E o outro arquivo é de produção: "envirinment.prod.ts"

 - Na configurations do arquivo "angular.json" está configurado o replace de quando é feito o build em produção!

 - Configura o arquivo "envirinments"

  <blockquete>
    export const environment = {
      production: false,
      API: 'http://localhost:3000/'
    };
  </blockquete>

- Configura o arquivo "envirinment.prod.ts"

  <blockquete>

    export const environment = {
      production: true,
      API:'/'
    };
  </blockquete>


- Para chamar a variavel deve se escrever: 


  private readonly API = `${environment.API}cursos`;

### Curso Angular #122: Http GET + Pipe Async

 - Pipe Async: serve para se inscrever automaticamente! 

  #### Importante

 - Esse pipe é melhor porque alem dele se inscrever, ele se desinscreve automaticamente!! 

 - Deve se desisncrever para não ter problema de vazamento de memoria!

 - Mesmo o componete destruido, deve se desinscrever para não ter vazamento!

 - Toda variavel que tem um "$" no final, ela é um "observable"!

 - Dessa forma não precisa se inscrever!

 <blockquete>
   this.cursos$ = this.serviceHttp.list();
 </blockquete>

 #### Criando uma mensagem de carregamento!

  - Cria um ngTemple com a mensagem e uma identificação!

  <blockquete>

    < ng-template #loading>
      < span>Carregando Cursos...</>
    </>

  </blockquete>

  - Depois cria uma condição para a tabela que exibe os resultados!

  <blockquete>
    *ngIf="(cursos$ | async) as cursos; else loading"
  </blockquete>

  - Caso carrega duas vezes, crie uma variavel local no ngIf

  <blockquete>
      < table class="table table-hover" *ngIf="(cursos$ | async) as cursosVarLocal; else loading" >
  </blockquete>

### Http + RxJS: Unsubscribe Automático

  - Cria um module "unsubscribeRxjsModule"

  - Cria um arquivo de roteamento "unsubscribeRxjsRoutingModule"

  - Cria um component "unsubscribePocComponentComponent"

  - Cria um component "pocBaseComponent"

  - Cria um serviço "EnviarValorService"

  - Toda vez que o ngIf esconde ele destroi o componet!

  - Depois cria 5 component e injeta os serviços!

- Formar de trabalhar com requisições !

  1° Fazendo um ".subscribe" na requisição! 

  2° Fazendo um ".subscribe" na requisição, e fazendo um unsbscribe manualmente, passando a requisição a uma variavel do tipo "Subscription", e depois chamando em um "ngOnDestroy()" e executando o ".unsubscribe()"

  3° Não ultilizando ".subscribe", e usando o "pipe async", no entando o valor deve se colocado em uma variavel do tipo "Observable<string>".

  <blockquete> valor$: Observable<string>; </blockquete>

  4° Ultilizando o "takeUntil()" é um outro observable, ele se desiscreve automaticamente, passando por paremetro uma variavel "unsub$ = new Subject();
  Para não ter outro problema, deve fazer um next e de desinscrever 

  <blockquete>

    // Ferificando quando ele é destruido!
    ngOnDestroy() {

      // emite um valor, para tivar a inscrição!
      this.unsub$.next();

      // completa para não ter problema de memoriLiki
      this.unsub$.complete();
      console.log(`${this.nome} foi destruido`);
    }

  </blockquete>

  é uma forma caso queria que seu observable fique vivo durante todo o ciclo de vida do component!

  exemplo: NETFLIX!

  5° Ultilizando o "take", com ele não fica escutando direto, é passado para ele um numero, seria a quantidade de vezes que você vai receber a resposta, caso não tente novamente boa o numero 1! ele tenta uma vez, vindo valor de sucesso ou erro!

  é bom usar quando o backend não é reativo!

### Capturando Erros (+ Erro com async)

 - No component de cursos, na chamada http "list()" deve se colocar um "catchError" dentro de um pipe!

 - pode se chamar o método "console.error(error);" para exisbir o resultado!

 - e retornar "return empty();" ou "return of();" para finalizar !

 - é IMPORTANTE retornar algo, porque o observable está sendo consumindo pelo ngIf, porq pode da erro quando não retorna uma lista de cursos(valor esperado)!

 - Esses métodos faz parte do pacote do RXJS!

 - "Subject" é um o objeto que consegue emitir valores no RXJS!

    <blockquete> error$ = new Subject() </blockquete>
  
 - Bota a logia da requisição da lista em um método chamado "onRefresh"

 - E cria um botão que chama esse método!

 - O ngIf define qual "ng-template" vai ser exibido!

 - No TS pode ser gerar um variavel usando o "as" ! 

 - Para o erro ser tratado e identificado, deve se criar uma variavel que recebe "new Subject<boolean>();"

  <blockquete> error$ = new Subject< boolean>(); </blockquete>

 - Com isso o "catchError" consegue emitir esse erro, para ser tratado com ngIf na parte do template

  <blockquete>
    catchError(error => {
            console.error(error);
            this.error$.next(true);
            return empty();
          })
  </blockquete>

### No subscrible é passado 3 tipos de logica nos parametros!

  1°: Sucesso -> Trata o valor!

  2°: Errror -> Trata o erro!

  3°: Complete -> Exibe uma mensagem quando termina!

  - Porem o erro pode ser tratado antes de fazer um "subscribe", ultilizando ".pipe()" e dentro dele um "catchError()"!

  - Dentro do ".pipe()" pode se colocar o "map()","tap()", "switchMap()" e outros métodos do RXJS!

  - catchError() deve ser sempre o ultimo operador do pipe!

  <blockquete>

    this.serviceHttp.list()
      .pipe(
        catchError(error => empty())
      )
      .subscribe(
        dados => {
          console.log(dados)
        },
        error => console.log(error),
        () => console.log('Observable completo!')
      );

  </blockquete>

### Erro Http: MODAL de Alerta de Erro com NGX-Bootstrap (ModalComponent)

 - Cria um module "shared"

  <blockquete>   ng g m shared </blockquete>

  - Declara no appModule com o "ModalModule.forRoot()"

  - Deve se declarar com "forRoot()" para ser usado em toda a aplicação!

  ### Conteudo da MODAL

    - Como funciona uma modal em forma de component do NGX-Bootstrap!

    - Cria um component para o shared module, chamado "AlertModalComponent" e declara no module!

    <blockquete>

        < class="alert alert-{{ type }} " role="alert">
          < strong>{{ message }}</>
          < button type="button" class="close" data-dismiss="alert" aria-label="Close" (click)="onClose()">
            < span aria-hidden="true">&times;</>
          </>
        </ div>

    </blockquete>

  - Esse component vai ser o corpo da modal, declara os @input()

    - @Input() type: 'success';
    - @Input() message: string;

    <blockquete> constructor(public bsModalRef: BsModalRef) { }</blockquete> 

    - Com essa ID cria o método que fecha a modal!

    <blockquete>
      onClose(){
          this.bsModalRef.hide();
      }
    <blockquete>

    - Deve se declarar "entryComponents:" no module "shared", para informar que o component vai ser avaliado em tempo de execução!
    
    - Declaração de component no "entryComponents" resolve erros de falta de "Factory"

    - Pois ele é chamado dentro do codigo do TS!

    <blockquete> entryComponents: [ AlertModalComponent] </blockquete>

  ### Local que é chamada a MODAL

  - Deve fazer uma injeção de dependencia do "BsModalService"

    <blockquete> 

      private modalService: BsModalService

    </blockquete>

  - Cria uma propriedade com o tipo "BsModalRef", 
  
    - Nela você informa o "ModalComponent" que vai ser chamado e informações dos "@input()" do "ModalComponent"

  - Cria um método chamado "handleError", ele é chamado quando da erro no "catchError"

    <blockquete>

        //Criando uma modal(componente) usando NGX-Bootstrap!
        handleError(){

          // Pode ter valores iniciais!
          // está chamando o outro component que é o corpo da modal!
          this.bsModalRef = this.modalService.show(AlertModalComponent);

          // Passando valores de input!
          this.bsModalRef.content.type = 'danger';
          this.bsModalRef.content.message = ' Erro ao carregar cursos, Tetnte novamente mais tarde!';
        }

    <blockquete>

  - O método "show()" recebe o nome do componentModal e pode receber um segundo parametro que é uma constante com valores do input!

  - Com o componentModal definido na variavel, é possivel passar os valores do input!

  - Fote: https://valor-software.com/ngx-bootstrap/#/modals

### Serviço de alerta genérico com Bootstrap 4 (refatoração)

- Cria um serviço para o component da modal, onde tem o método que trata a mensagem!

- Cria um injeção de dependencia da classe "BsModalService"

  <blockquete> 

      constructor(private modalService: BsModalService) { }

  </blockquete>

- Cria um método privado com a logica da mensagem de erro!

  <blockquete>

      private showAlert(message: string, type: AlertType){

        // Pode ter valores iniciais!
        // está chamando o outro component que é o corpo da modal!

        const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);

        // Passando valores de input!

        bsModalRef.content.type = type;
        bsModalRef.content.message = message;

      }

  </blockquete>

- Cria métodos com mensagem de erro e de sucesso

  <blockquete>

      /Criando uma modal(componente) usando NGX-Bootstrap!

      showAlertDanger(message: string){
        this.showAlert(message, AlertType.DANGER);
      }

  </blockquete>

  <blockquete>

      //Criando uma modal(componente) usando NGX-Bootstrap!

      showAlertSuccess(message: string){
        this.showAlert(message, AlertType.SUCCESS);
      }

  </blockquete>

- O que vai diferenciar é o ENUL !

  <blockquete>

      export enum AlertType{
        DANGER = 'danger',
        SUCCESS = 'success'
      }  

  </blockquete>

- Na chamada do método fica dessa forma!

  <blockquete>

      handleError(){
        this.alertService.showAlertDanger("Erro ao carregar cursos, Tetnte novamente mais tarde!");
      }

  </blockquete>

### Http: Criando formulário para criar e editar cursos

 - Cria um component chamado "cursos-form" dentro da pasta cursos!

 - Cria uma propriedade do tipo "formGroup"

 - Faça uma injeção de dependencia de "FormBuilder"

 - No ngOnInit, com a propriedade do tipo "FormBuilder" cria ".group()" assim você define um formulario reativo!

 <blockquete>

    ngOnInit(): void {
      this.form = this.fb.group({
        nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
      });
    }

 </blockquete>

 - Cria o campo nome com as validações!

 - Cria um botão com evento de salvar e outro de cancelar

 - Cria a validação que está no HTML do "CursosFormComponent"!

### HTTP POST Criando Cursos

  - Inejeta a dependencia do serviço curso, no component de cadastro!

  - cria um método post no serviço, ultiliza pipe e depois "take", pois será apenas uma tentativa, o backEnd não é reativo!

  - No Método submit, deve se chamar o método posta passando o valor do form!

  - Deve se inscrever, pois está retornandop um OBSERVABLE! 

  - Trata a resposta mesmo sendo um succes ou error!

  - Caso não tenha inscrição, não terar nada na aba "network" no navegador!

  - Ele fez 2 requisição porque o backend ultilizado é de teste ele habilita o CORS!

  - Foi colocado uma método no serviço de modal, aonde caso seja uma mensagem de sucesso, tem uma duração de exibição da modal!

    <blockquete>

        // Define um tempo de existencia da modal, caso seja uma de success
        if(dismissTimeout){
          setTimeout(() => bsModalRef.hide(), dismissTimeout);
        }

    </blockquete>

  ### IMPORTANTE: como volta sozinho para outra pagina usando "Location"

   - Cria uma injeção de dependencia do "location"

   - Cria um corpo na parte de success!

     <blockquete> this.location.back(); </blockquete>

   - OU pode fazer um "router.navigate" para cursos normalmente

### Http: Editando Cursos e Observables aninhados

 - Cria um evento de click no botão de editar!

 - O evento tem um método que passao id do curso para ele!

 - "ActivatedRoute" é a classe que contem os parametros da rota!

 - Uma das propriedades da classe "ActivatedRoute" é o "params" que retornar um observable, com isso é possivel se inscrever nele!

 - "params" é um array que tem os parametros das rotas!

    <blockquete>
      this.route.params.subscribe((params: any) => {
        const id = params['id'];

        console.log(id);
      });

    </blockquete>

 - Com o ID, você pode obter todos os dados para atualizar, pode cachear os dados da lista ou fazer uma requisição ao backend!

 - No serviço do curso, cria uma requisição que busca apenas um curso se baseando no id passado para editar!

<blockquete>

    // Get byID
    loadById(id){
      return this.http.get(`${this.API}/${id}`)
      .pipe(
        take(1)
      );
    }

</blockquete>

- Define um campo "ID" APENAS NO ARQUIVO TS, para que o curso seja identificado!

- Se usa o ".patchValue()" para carregar valores do no formulario! 

<blockquete>

    updateForm(curso){
        this.form.patchValue({
          id: curso.id,
          nome: curso.nome
      });
    }

</blockquete>

- Não se inicializa formulario dentro do SUBSCRIBE porq ele é um codigo assincrone ! 

- Deve se inicializar o formulario dentro do construtor ou dentro do ngOInit!

- É bom evitar por atribuição de valores dentro de subscribe, e sim por métodos que recebe os valores e faz essa atribuição!

### Refatorando o codigo acima, para ficar melhor!!

- Como o "params" do "route" retorna um observable, eu posso por um pipe(), e nele por um map(), assim posso já pegar o id diretamente!

    - switchMap -> cancela as anteriores e apenas busca o valor da
  ultima requisição!

    - Caso queira fazer um create, update ou delete!

    - concatMap -> ordem da requisição importa!

    - mergeMap -> caso não se importa com a ordem das resposta!

    - exHaustMap -> vai obter os valores, antes da segunda tentativa!
    - Muito ultilizado em casos de login!

### Http: Editando Cursos + Resolver (Rota)

  - Cria um diretorio chamado "Guard", e cria um Guard chamado "curso-resolver"!

  - Implementa a interface "Resolve< Curso>" curso é uma tipagem!

  <blockquete>

    // route: uma fotografia da rota, pode extrair os parametros da rota!
    // state: Nesse cenário não importa!

    resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<Curso> {

        if(route.params && route.params['id']){

          // Se reclamar que um observable          
          //de object não é um observable de curso, deve se tipar o getbyId

          return this.httpService.loadById(route.params['id'])
        }

        // Situação aonde é criado um curso novo!
        // O operador "of()" do RXJS, serve para retornar
        // um observable apartir de um objeto!

        return of({
          id: null,
          nome: null
        });
    }      
  </blockquete>

  - A ideia é obter o curso que vai ser editado, antes mesmo de carregar o component(antes do "ngOnInit()").

  - Se reclamar que um observable de object não é um observable de curso, deve se tipar o getbyId !

  - Cria um if, para ve se o "route.params && route.params['id']" existe!

  - retorna o valor do curso usando o parametro da rota com o método do serviço!

  - Caso não exista, retorne um observarble de curso, usando o operador "of()", para transformar o objeto em observable também!

### Http PUT Atualizando Cursos

 - Foi criado um método no serviço aonde tem um if, que escolhe se deve salvar ou atualizar!

 - Isso depende quando se tem valor no ID ou não!

 - O método que salva e atualiza foi refatorado, então com um só método é possivel salvar um novo registro 
 ou atualizar um que ja existe

 - A mensagem de success e error ficou dinamica, foi colocado ela em um let, e um if acaba trocando dependendo da situação!

  <blockquete>

    if (this.form.valid) {

        let msgSuccess = 'Curso criado com sucesso';
        let msgError = 'Erro ao criar curso, tente novamente';
        if (this.form.value.id){
          msgSuccess = 'Curso atualizado com sucesso!';
          msgError = 'Error ao atualizar curso';
        }

        this.httpService.save(this.form.value)
        .subscribe(succes =>{
          this.modal.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        error => this.modal.showAlertDanger(msgError),
        () => console.log('request de update completo')
        );
    }
  <blockquete>




### Http DELETE: Popup de Confirmação para remover Cursos
        
- Vamos criar o método que deleta, com uma confirmação se deve ser deletado ou não!

- cria um evento de click no botão deletar no curso lista!

- Para fazer referencia de um identificador de um "ng-template", deve se usar o "@ViewChild" 

<blockquete>
  @ViewChid('deleteModal') deleteModal
</blockquete>

- Cria dois métodos um para cancelar o delete "onDeclineDelete", e outro para confirmar "onConfirmeDelete"!

- Cria uma variavel do tipo "curso" que recebe uma copia do curso passado, que vai ser deletado, porque o component(modal de confirmação) não recebe parametro! 

- Na confirmação é chamado o delete do http, e depois o "onRefresh" para atualizar a pagina em caso de successo, junto com a mensagem de sucesso!

- Em casos de erro, retorna a mensagem de erro na modal e chama o metodo que esconde a modal de confirmação!


### Popup de Confirmação genérica Bootstrap 4 (com RxJS)  

  - É um Component totalmente indenpendente, uma modal de confirmação generica!

  - Cria um component chamado "confirmModal", bota nele uma modal que tem titulo e botão de confirmar e fechar do bootstrap!

  - Exporta e declara ela no "shared.module.ts"

  - Cria 4 input property, "msn", "titulo", "botão" dinamico "ok" e "cancelar" 

  - Cria o método para cancelar, e outro para confirmar, no cancelar precisa da referencia da modal, para fechar ela!

    <blockquete>

      onClose(){
        this.bsModalRef.hide();
      }

    </blockquete>

  ### método que abre a modal dentro de um service!

      - No "alert-modal.service" se cria um método para executar o component "ConfirmModalComponent"

      - Passa os input property, para poder alimentar os valores

      - bsModalService(modalService) tem um método chamada "show" que exibe ng-template ou component!

      <blockquete>

          showConfirm(title: string, msn: string, okTxt?: string, cancelText?: string){

            // bsModalService(modalService) tem um método chamada "show" que exibe ng-template ou component
            // Praticamente um DOM!
            const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);

            // Alimentando os valores do input propert
            bsModalRef.content.title = title;
            bsModalRef.content.msn = msn;

            if(okTxt){bsModalRef.content.okTxt = okTxt;}

            if(cancelText){bsModalRef.content.cancelText = cancelText;}
          }

      </blockquete>

      - Caso a popup não funciona, demove as 2 primeiras DIV's

    - Com isso a modal já é aberta, basta terminar de refatorar o botão que confirma, para deletar!

  ### Tratando o botão da modal de confirmação!

    - Não é possivel usar o OutPut propert, porque o component não é filho do component pai, ele está sendo paenas invocado!

    - Quando se declara um component no "entryComponents" significa que ele vai ser invocado de outro component!    
        - É possivel mandar valores(inputProp) para o component que foi invocado usando um serviço com "bsModalRef" do NgxBootstrap!
        - Técnicamente ele não é filho, então não é possivel usar o outInput propert!
        - A solução para receber valores desse component que é invocado, seria usando o "Subject< boolean>;" do RXJS!!
        - Esse objeto ele emite valores, então com isso o component pode escutar esses valores!

    - Cria uma instancia toda vez que o component se inicializar!

    <blockquete>

        confirmResult: Subject<boolean>;

        constructor(private bsModalRef: BsModalRef) { }

        ngOnInit(): void {
          this.confirmResult = new Subject();
        }

        private ConfirmAnClose(value: boolean){
          this.confirmResult.next(value);
          this.bsModalRef.hide();
        }

        onClose(){
          this.ConfirmAnClose(false);
        }

        onConfirm(){
          this.ConfirmAnClose(true);
        }
    
    </blockquete>

    - Com isso vai ser emitido qual botão ele apertou, se foi o de cancelar ou de confirmar!!


  ### Voltando ao serviço para ele retornar um observable do oque foi emitido!

    - Retorna o valor que foi emitodo pelo componente de modal que confirma!(botão da modal)

    - fazer o "castim", Tipa o retorno que é "bsModalRef.content" !
    
    - Usando o operador Diamond(diamante) com o tipo "ConfirmModalComponent" que é o component modal!

    - Assim ele reconhece todos os valores, a nessecidade dessa tipagem é quando for retornar objetos

    <blockquete> return (< ConfirmModalComponent>bsModalRef.content).confirmResult </blockquete>

### Voltando ao component para ele escutar oque foi emitido!

    - O método "this.alertService.showConfirm" deve ser colocado em uma constante!

    - Agora ele retorna um observable, com isso é possivel fazer um "asObservable" que pertence a classe "Subject"!

    - "asObservable" com ele consegue fazer um Subscrible!

    - "empty()" não se usa mais, é o EMPTY!

### Http: Serviço Genérico de CRUD

  - Criando uma CLASSE repositorio, um serviço generico de CRUD, que serve para ser reutilizado!

  - Cria uma classe chamada "crud-service" e copia todo conteudo do "cursos.service" na classe!

  - Troca tudo que tem o nome de "curso" para "record"

  - O que tiver id, troque para [ 'id']

  - Troca tuda variavel "API" para "API_URL", com isso o codigo fica generico!

 ### Criando o serviço! 

  - Cria um outro serviço para cursos

  - Nesse caso é bom ultilizar herança!

    <blockquete>

      export class Cursos2Service extends CrudService< Curso> { ... }

    </blockquete>

  - Quando se trabalha com herança tem que chamar o "super( );" no construtor!

  - O "super();"  recebe 2 parametros, 
  
      - o primeiro é a variavel do HttpClient, 
      
      - e o segundo é o endPoint !

  <blockquete>

      export class Cursos2Service extends CrudService<Curso> {

      constructor(protected http: HttpClient )
      {
        super(http, `${environment.API}cursos`);
      }

    }

  </blockquete>

  - Ainda tem o poder de sobre escrever os métodos, apenas repita o mesmo nome do métodos que deseja alterar!

### Upload de Arquivo: Formulário Upload com Bootstrap 4

 - Executa o comando!

  <blockquete> ng g m upload-file --routing </blockquete>

  - Cria um component "upload-file"

  - bota o novo component na rota, criando um link, congigurando a rota principal e a rota do component!

  - No html do component, bota um formulario que faz upload de arquivos!

  - Para exibir os nomes dos arquivos deve criar um evento no input de quando o input é modificado!

  - 

### Http: Upload de Arquivo: Back-end com Node.js

 - Cria uma pasta e faz um npm init!

 - "-y" é para criar um pact-json

  https://github.com/LincolnLink/Angular-Loiane/tree/master/Nodejs/server


### Http Upload de Arquivo: Request com FormData

 - Cria um botão chamado "upload", com um evento de ngClick

 - Para evitar que arquivos duplicados vão para o servidor, se usa o "Set< file>" ao inves do array!

 - Cria um variavel do tipo "Set < file>", ele não deixa que arquivo duplicado entre nesse tipo de lista!

 - Intancia o "this.files = new Set();" para por os arquivos dentro!

 - O botão só aparece caso tenha arquivos no input, pode usar ngIf ou ngHide

 - No método do botão de upload, verifica se tem arquivos e se tem mais que 1 arquivo!

 ### Criando um request de arquivos na mão

 - Cria um serviço para o component upload!

 - Caso queira fazer métodos alem do "GET", "POST", "PUT", "DELETE", deve se instancia o HttpRequest() !

 - Antes deve criar o "formData" !

 - Para poder enviar arquivos deve instancia o formData!

    - Cada arquivo deve se fazer um append!

    - Deve ter 3 informações no append!

      - Nome do campo ou Nome do atributo: 'file'

      - Valor do campo ou Blob: blob que é o arquivo

      - Nome do arquivo: file.name

    <blockquete>

      const formData = new FormData();
      
      files.forEach(file => formData.append('file', file, file.name));

    </blockquete>

 - Os parametros que deve ser passado, está definido no projeto NODEjs!
    - Tipo de método
    - url
    - informações, BODY, body mais algumas informações!

    <blockquete>

      // Criando o request!
      const resquest = new HttpRequest('POST', url, formData);

      // Chama o metodo Http do Angular
      return this.httpService.request(resquest);

    </blockquete>

 - É como "se fosse" um request personalisado!

 - Upload de arquivos, não envia jSom, envia o arquivo!

 - Instancia a variavel "FormData", para por todos os arquivos!

 - Construa o "FormData" 

 - Inteira cada arquivo que vc tenha no "FormData" usando append

 - Deve ser passar: 
    - nome do atributo
    - Valor ou blob, que seria o arquivo!
    - nome do arquivo

  <blockquete>
    // Instanciando e criando o FormData!
    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name));
  </blockquete>

  - Pode ser usado o POST simples

  <blockquete>
    return this.httpService.post(url, formData);
  <blockquete>

### Usando o request personalizado de arquivos, no component!

- Chama o método upload, passa os valores que são os arquivos e a url!

- faça o subscribe

<blockquete>

  onUpload(){

      if(this.files && this.files.size > 0){

        this.serviceUpload.upload(this.files, 'http://localhost:8000/upload')
        .subscribe(response => console.log ( 'upload concluido!'));
      }

    }
</blockquete>

- Não use o Take(1) porq ele envia 2 requisições, use o UNsubscribe!

- Boa a inscrição em uma variavel "Subscription", quando chegar no "ngOnDestroy", 
você deve se sesisncrever usando a variavel do tipo "Subscription"!

</blockquete>
  ngOnDestroy(){
      this.sub.unsubscribe();
    }
</blockquete>

- 

### Http: Removendo CORS com Angular Proxy, configuração é no Angular e não no back end

 - Removendo primeiro do back end NODE!

    - No projeto foi instalado uma lib do cors, e configurado um " * " para habilitar ele!

    - Com isso qualquer pessoa tem acesso a API

    - Em produção não é uma boa ideia fazer isso! 

    - Comenta a linha do cors

 ### configurando o projeto Angular para conectar com o backend sem precisar usar o cors!

  - Cria um arquivo chamado "proxy.conf.js" na pasta raiz do projeto Angular

  - pode ser arquivo JS ou JSOM!

  - Nesse arquivo cria uma constando chamada "PROXY_CONFIG" ela recebe um array que tem um objeto com as configurações, depois exporta essa constante!

    - context: Uma definição de chamada para o backend, diferente de rota, se bota '/api' por que é uma convenção.

    - target: Uma string que define a porta do backend.

      - O "context" redireciona para o "target"!

    - securre: false

    - loglevel: 'debug'

    - pathRewrite: reescrever o caminho! '^/api': '' , ele está  removendo o "api" usar caso seja necessario!

  - No "package.json" adiciona uma flag no start!

    <blockquete> " ng serve --proxy-config proxy.conf.js " </blockquete>

    - Deve ultilizar o " npm run start "

    - O codigo completo!

    <blockquete>

        const PROXY_CONFIG = [
          {
            context: ['/api'],
            target: 'http://localhost:8000/',
            secure: false,
            loglevel: 'debug',
            pathRewrite: { '^/api': '' }
          }
        ]
        module.exports = PROXY_CONFIG;

    </blockquete>



 ### (JSOM) configurando o projeto Angular para conectar com o backend sem precisar usar o cors!

  <blockquete>

    {
      "/api/*": {
        "target": "http://localhost:8000",
        "secure": false,
        "loglevel": "debug",
        "pathRewrite": {
          "^/api": ""
        }
      }
    }

  </blockquete>



### Upload Arquivo: Barra de Progresso + Observando Eventos Http

  - Devese capturar eventos de upload de arquivos!

  <blockquete>
      export declare enum HttpEventType {
          /**
          * The request was sent out over the wire.
          */
          Sent = 0,
          /**
          * An upload progress event was received.
          */
          UploadProgress = 1,
          /**
          * The response status code and headers were received.
          */
          ResponseHeader = 2,
          /**
          * A download progress event was received.
          */
          DownloadProgress = 3,
          /**
          * The full response including the body was received.
          */
          Response = 4,
          /**
          * A custom event from an interceptor or a backend.
          */
          User = 5
      }
  </blockquete>

- No método POST no serviço, pode passar um header ou observable, alem da url e do formData!

- {observe: 'events'} é o 3° parametro que é passado, para obter dados do update!

- Essa configuração só funciona apenas em POST de update e download 

- Retorna esse objeto para poder funcionar o progresso!

  <blockquete>
      return this.httpService.post(url, formData,
      {
        observe: 'events',
        reportProgress: true
      })

  </blockquete>

- No subscribe deve se por o response do console.log

  - type 1 : informa o quando foi carregado, e o total, informa o quant foi carregado até chegar no total!

  - HttpHeadersResponse: informa o status

  - type 3 : downloadprogresse, informa o loaded!
  
  - HttpResponse: informa o status

- Copia uma barra de progresso do Bootstrap4 

- Troca o response por "event: HttpEvent<Object>", para ajuda no intellisense! 

- No subscribe é possivel definir a % do progresso! 

  <blockquete>

      if(event.type === HttpEventType.Response){
                console.log('upload concluido!');
              }
              else if (event.type === HttpEventType.UploadProgress){
                const percentDone = Math.round((event.loaded * 100) / event.total);

                console.log('Progresso', percentDone);

                this.progress = percentDone;

              }

  </blockquete>

  - O evento só é concluido quando temos o "HttpEventType.Response"

  -  Se o evento for do tipo "UploadProgress" ele carrega a barra de progresso!

### Http: Criando operador RxJS customizado

 - Reultilizando o método que faz upload de arquivo!

 - Podemos fazer 2 operadores RxJs para facilitar a reutilização!
 
 <blockquete>

  this.sub = this.serviceUpload.upload(this.files, '/api/upload')    
   .subscribe((event: HttpEvent<Object>) => {}

 </blockquete>

 - O subscribe ele retorna a resposta que é um event do tipo "HttpEvent<Object>", apenas requisições de upload e download!

 - Com base nisso podemos criar 2 operadores do RxJs

 - A primeira função do rxjs personalizada, o método retorna o HttpResponse, que tem o status de upload concluido!

  <blockquete>
    export function filterResponse<T>(){
        return pipe(
          filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
          map((res: HttpResponse<T>) => res.body)
        );
    }
  </blockquete>

  - Ele retorna um tipo qualquer!

  - Dentro do pipe(), bota um filter() que recebe o evento do tipo "HttpEvent<T>", verifica se ele é igual ao "HttpEventType.Response"!

  - Caso seja igual, cria um "mapeamento" map(), aonde retorna o corpo da resposta! 
__________________________________________________________________________
  <blockquete>
    export function uploadProgress<T>(cb: (progress: number) => void){
      return tap((event: HttpEvent<T>)=>{
        if(event.type === HttpEventType.UploadProgress){
          cb(Math.round((event.loaded * 100) / event.total))
        }
      });
    }
  </blockquete>
  
  - A segunda função do rxjs personalizada, recebe é um função de Callback, que o tipo dela é uma função não retorna nada, apenas recebe o "progress" que é do tipo number!

  - O tap() lee executa alguma logica!

  - Retorna um tap(), nesse tap() é colocado uma função que recebe como parametro um "event" que é do tipo "HttpEvent<T>"!

 - A função tem uma condição, aonde verifica se o tipo do evento é igual a "HttpEventType.UploadProgress", caso seja é chamada a função de callback, para ser definida, e com isso passa o calculo que retorna o valor do progresso! no parametro da função de callback!

 ### Refatorando

 - Troca todo codigo de dentro do subscript, e bota em um pipe antes mesmo do subscribe, para receber os métodos do RXJS personalizados!

 - Passa a função de callback , quando for chamar a função "uploadProgress()" a informação é passada para a variavel que alimenta o html!

 - A função de callback ela serve apenas para receber o valor que é calculado na propria função, ela só retorna o valor se o evento for do tipo determinado!


### Http: Download de Arquivo

 - Cria o botão de "download EXCEL" no HTML e o botão de " download PDF"

 - Cria dois novos endPoint noservidor NODE!

 - Cria no front end 2 botoes, um de download od PDF e outro do EXCEL!

 - Cria dois arquivos um PDF e outro Excel!

 - O Angular não da suporte ao download de arquivo, isso é feito com JS puro!

 - O Anular só oferece o GET!

 - Quando faz um get(), o ppadrão é retornar um json, só que no caso, vai ser retornado um blob!

 - No get pode usar o "reportProgress" para saber do progresso do download!

 - O backend deve setar o "content -length"! para saber o tamanho completo do arquivo

 <blockquete>

  download(url: string){

      return this.httpService.get(url, {
        responseType: 'blob' as 'json', //Progresso de download!
        //reportProgress   <- rever para poder entender!
        // content -length
    });
  }

 </blockquete>

 - Os tipos de retorno que podem ser configurado no backend

 <blockquete> 

    https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Basico_sobre_HTTP/MIME_types/Complete_list_of_MIME_types

 </blockquete>

 - cria uma instancia de um blob na parte do método do botão!

 - bota um array para instanciar o arquivo!

 - Para gerenciar melhor o arquivo , pode por o tipo dele

 - Pega a janela do browser, setar a URL e cria um link

 - passa o objeto, a instancia do Blob!

 <blockquete>  const blob = window.URL.createObjectURL(file); </blockquete>
  
 - Cria um link e seta o href, que é a URL no arquivo!

 <blockquete> const link = document.createElement('a'); </blockquete>

 - Criando a "Gambiarra"

 <blockquete>

  link.href = blob;
  link.download = 'report.pdf';

  link.click();

  window.URL.revokeObjectURL(blob);
  link.remove();

 <blockquete>

 - O link é removido para ser reutilizado em outros arquivos!

###  Para funcionar no Internet Explore, deve criar um link usando o DOM e fazer o js clickar nele, para poder fazer download do arquivo

  <blockquete>
      
    if(window.navigator && window.navigator.msSaveOrOpenBlob){
      window.navigator.msSaveOrOpenBlob(file)
    }

  </blockquete>

### DOWNLOAD de arquivos Excel em navegadores do fireFox !

  - Troca o evento de "click" por algo mais personalizado!

  <blockquete>

   //link.click();
      link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window

      }))

  </blockquete>


 - Para o firefox precisa por um settimeout

  <blockquete>
    setTimeout(() =>{ //firefox

          window.URL.revokeObjectURL(blob);
          link.remove();

        }, 100);

  </blockquete>

### Criando tela de pesquisa (HTML/CSS + BootSnipp)

  - Criando um modulo com o arquivo de configuração de rotas

  <blockquete>

    ng g m reactive-search --routing

  </blockquete>

  - Cria um component chamado "LibSearchComponent" adiciona ele no "ReactiveSearchRoutingModule" 

  - Bootsnipp são modelos prontos de estruturas em HTML e CSS que usa o bootstrap! 

   https://bootsnipp.com/snippets/Q0eE1

  - Cria um evento de click no botão com um método que pega oque foi digitado!

  <blockquete>

    onSeartch(){
      console.log(this.queryField.value);
    }

  </blockquete>

### Http: Passando Parâmetros na URL (HttpParams)

 - Isola a requisição HTTP em um serviço

 - Trata o que foi digitado!

  <blockquete>
    let value = this.queryField.value;

    if(value && value.trim() !== '')
    {
      value = value.trim();
    }
  </blockquete>

 - Trata o resultado da requisição usando map e tap

  <blockquete>

      this.results$ = this.libSearchService.getLibAngular(value)
      .pipe(
        // Obomseria tipar com uma interface
        tap((res: any) => this.total = res.total),
        map((res: any) => res.results)

      );
  </blockquete>

  - Caso tenha todos os parametros

  - Cria uma const com o valor e parametros e passa como objeto!

  <blockquete>

    getLibAngular(value: string, fields: string)
    {

      const params = {
        search: value,
        fields: fields
      };

      //+ '?fields=' + fields + '&search=' + value
      // + '?fields=' + fields.fields + '&search=' + value
      return this.httpService.get(this.SEARCH_URL, { params } );
    }

  </blockquete>

  - Caso não tenha todos os parametros! (Uma forma mais DINAMICA!)

  - Pode fazer "append" caso tenha mais valores!

  - Deve construir de forma dinamica! 

  - Só aceita se o nome for "params"


  <blockquete>

    getLibAngular(value: any, fields: any)
    {
      let params = new HttpParams()
      params = params.set('search', value); //params_.append('search', value2)
      params = params.set('fields', fields);
     
      return this.httpService.get(this.SEARCH_URL, { params } );
    }

  </blockquete>

### Http: Pesquisa/Busca com Programação Reativa


  - Pega o campo de busca e faz com que a propriedade "ValueChanges", seja a tribuida ao "this.results$", Para não precisar usar o subscribes,

  - "ValueChanges" sempre retorna um "observable", faz parte da programação reativa!

  - Operadores do Rxjs que ajuda no campo de busca!

  <blockquete>
    ngOnInit(){

      this.queryField.valueChanges
      .pipe(
        map(value => value.trim()),
        filter(value => value.length > 4),
        distinctUntilChanged(),
        tap(value => console.log(value))

      ).subscribe();
    }

  </blockquete>

  - Para fazer uma busca com o minimo de caracteres

  <blockquete> filter(value => value.length > 4), </blockquete>


  - Evitando valores repetidos!

  <blockquete> distinctUntilChanged(), </blockquete>


  - Por um tempo para fazer a requisição 

  <blockquete> debounceTime(200), </blockquete>

  - Evitar chamadas alinhadas (switchMap)

  <blockquete>

    ngOnInit(){

        this.results$ = this.queryField.valueChanges
        .pipe(
          map(value => value.trim()),
          filter(value => value.length > 3),
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((value) => this.libSearchService.getLibAngular(value, this.fields)),
          tap((res: any) => this.total = res.total),
          map((res: any) => {return res.results})
        );
      }

  </blockquete>






  













