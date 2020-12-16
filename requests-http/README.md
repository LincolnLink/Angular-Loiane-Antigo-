# RequestsHttp

Executando o emulador de API: json-server --watch db.json

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



 











