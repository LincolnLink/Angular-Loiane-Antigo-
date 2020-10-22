# Forms

- Existe 2 tipos de formulario no angular 2+ o Template Driven e o Data Driven

- Template Driven: 

  - O formulario é criado e configurado no HTML.

  - Validações são feitas no proprio template do HTML.

  - Angular cria/deduz um FormGroup do cod HTML, é colocado diretivas nos campos para o angular saber para o Angular gerencia.

  - Valores do form são submetidos com ngSubmit, é usada uma variasvel local para o método que faz o submite pegar os valores.

  - Usa ngModule para identificar um campo

- Data Driven(Reativo)

  - O formulario é criado e configurado no Component, o HTML só recebe o basico, o componente cria o objeto forms, e o proprio componente gerencia os dados.

  - Validações são feitas no component, no HTML é feita apenas uma ferencia para poder casar as informações!

  - Angular usa o FormGroup criado no Component!

  - Form já está no Component e não precisa de ngSubmit

  - Usa formControlName para identificar um campo

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
    
        <form class="form-horizontal" #f=ngForm (ngSubmit)="onSubmit(f)>
            <div class="form-group">

                <label for="nome" class="control-label">Nome</label>
                <input type="text" class="form-control" id="nome" placeholder="Nome">
                

                <label for="email" class="control-label">Email</label>        
                <input type="email" class="form-control" id="email" placeholder="nome@Email.com">
                
                <button type="submit" class="btn btn-primary">Enviar</button>
                
            </div>
        </form>    
    
    </blockquote>


    - Crie uma variavel local na tag "< form>" para poder fazer referencia ao formulario, essa variavel recebe uma diretiva do angular 2+ chamada "ngForm", ela ajuda a gerenciar!

    - Crie um evento chamado "(ngSubmit)='método()'", que pode ativar um método quando o botão de submit é clickado, deve ser passa para o método a variavel que faz referencia do formulario!

    <blockquote>

        onSubmit(form: any){
            console.log(form);
        }

    </blockquote>

    - Com as diretivas é criado uma formReative por de baixo dos panos.
      Porem para pegar o valor de cada campo, precisa ter uma asociação em cada campo, cada nome recebe uma propriedade chamada "nome" com seu valor nos campos input no HTML, e é colocada a diretiva "ngModel"!

      <blockquote>

        < label for="email" class="control-label">Email</ label>        
        < input type="email" class="form-control" id="email" 
        placeholder="nome@Email.com" nome="email" ngModel>

      </blockquote>

      Com isso é possivel obter os valores

- Forms (template driven) Inicializando valores com ngModel (two data binding)

  Cria uma variavel, ela recebe um objeto do tipo any, que tem a propriedade nome e email com um valor qualquer!

  <blockquote>

    userExemplo: any = { 
      nome: 'Lincoln', 
      email: 'link@email.com.br'
    };

  </blockquote>

  Com o "two data binding" se modificar o valor no formulario, o objeto é atualizado, com o propert Binding vai apenas inicializar o valor!

- Forms (template driven) Módulos e FormsModule

  Crie um Module para o projeto "template-form", e importa o componente "template-form" para o module "template-form", tem que ficar atento em importar o "FormsModule" no novo module!


  <blockquote>

  @NgModule({
    declarations: [
      TemplateFormComponent
    ],
    imports: [    
      CommonModule,
      FormsModule     
    ]
  })
  export class TemplateFormModule { }

  </blockquote>

- Forms (template driven) Aplicando validação nos campos

  Nas referencias da Api( https://angular.io/api) busca por "validator"

  - required: Torna o campo obrigatorio!

  - maxlength: Tamanho maximo!

  - minlength: Tamanho minimo!

  - email: Validação de email!


  O Angular usa a validação do HTML5:

  https://www.the-art-of-web.com/html/html5-form-validation/

  
- Forms (template driven) Aplicando CSS na validação dos campos

  O Angular aplica classes css nos CONTROLES de formulario dependendo do seu estado! 

  - Estado            |       Sim         |     Não

  - Controle visitado |     ng-Touched    |     ng-untouched

  - Valor mudou       |     ng dirty      |     ng-pristine

  - Controle válido   |     bg-valid      |     bg-invalid


  As classes é inlusa dependendo do estado do controle, pode ser um campo ou formulario!

  <blockquote>
      
    .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
    }

  </blockquote>

- Forms (template driven) Mostrando mensagens de erro de validação

  Os controles ganhando classes do css quando sofre uma ação, e também tem propriedades que tem essas informações, podendo assim criar uma logica dentro do HTML "*ngIf="!nome.valid && nome.touched", exibindo a mensagem apenas quando for verdadeira! 

  Uma forma de ver todas as informações é vendo cada objeto/controle dentro do form!

  <blockquote>
  
    onSubmit(form: any){
      console.log(form);      
    }    

  </blockquote> 

  Logica no HTML completa!
  <blockquote>

      < input type="text" class="form-control" name="nome" id="nome" 
        placeholder="Nome" [ (ngModel)]="userExemplo.nome" required 
        #nome="ngModel">

      < div *ngIf="!nome.valid && nome.touched" class="alert alert-danger" role="alert">
          Nome é obrigatorio
      < /div>

  </blockquote> 

  Outro exemplo mostrando o form completo, foi usado o NGX-Bootstrap para 
  <blockquote>

    < form class="form-horizontal" #f=ngForm (ngSubmit)="onSubmit(f)" >
      < div class="form-group"
            [ class.has-error]="!email.valid && email.touched"
            [ ngClass]="{'has-feedback': !email.valid && email.touched}">

            <label class="control-label" for="emailLb">Email</label> 

            <input type="email" class="form-control" name="email"
            id="email" placeholder="nome@Email.com" 
            [(ngModel)]="userExemplo.email" required email #email="ngModel" >       
          
            <alert type="danger" [dismissible]="dismissible" *ngIf="!email.valid && email.touched">
                <strong>Alerta -</strong> Com Botão!.
            </alert>
        
        </div>
      < /form>

  </blockquote>

- Forms (template driven) Desabilitando o botão de submit para formulário inválido

  Usando a propriedade "disabled" com isso podemos criar uma logica para habilitar apenas quando o formulario for totalmente valido!

  <blockquote>
    < button disabled="!f.valid" type="submit" class="btn btn-primary">Enviar< /button>
  </blockquote>

- Forms (Dica): Verificando dados do Form no template com JSON


  Crie um component com o nome de "FormDebugComponent", esse componente serve para ver informações do formulario!
  <blockquote>

    < div style="margin-top: 20px;" *ngIf="form">

        < div>

            Detalhes do form

        < /div>
        < pre>

            Form válido: {{ form.valid  }}

        < /pre>
        < pre>

            Form submetido: {{ form.submitted  }}

        < /pre>
        < pre>

            Valores: < br> {{ form.value | json  }}
            
        < /pre>
    < /div>
  
  </blockquote>

  Ele recebe do component pai um objeto de formulario!

  <blockquote>

    < app-form-debug [ form]="f"></ app-form-debug>
  
  </blockquote>

- Forms (template driven) Adicionando campos de endereço (form layout Bootstrap 3)

  Estrutura do HTML do formulario, exemplo curto: 

  <blockquote>

    < form class="mt-5" #f=ngForm (ngSubmit)="onSubmit(f)" >

        <div class="form-group row" [class.has-error]="!nome.valid && nome.touched">
            
            <div class="col-sm-12">

                <label for="nome" class="label font-weight-bold">Nome</label>

                <input type="text" name="nome" class="form-control"  
                id="nome" placeholder="Nome" [(ngModel)]="userExemplo.nome"
                required #nome="ngModel">
            
                <alert type="danger" [dismissible]="dismissible" *ngIf="!nome.valid && nome.touched">
                    <strong>Nome</strong>  é obrigatorio!
                </alert>

            </div>

        </div>

    </form>

  <blockquote>

- Forms (template driven) Refatorando (simplificando) CSS e mensagens de erro

  Refatorando a forma que o ngClasse recebe a condição, criando um método que recebe o campo como parametro, a condição que é usada pode se transformar em outro método reutilizavel!

  A forma de mostrar o erro foi alterada, isolando todo o HTML em um componente, passando as condições e mensagem pelo input do componente!

- Forms (template driven) Form groups (agrupando dados)

  ngModelGroup: agrupa cada elemento do ngModel, criando um objeto com varios objetos dentro!

  <blockquote>
    < div ngModelGroup="endereco">
      .....
    < /div>
  </blockquote>

- Forms (template driven) Pesquisando endereço automaticamente com CEP

  Importa o "HttpClientModule" no module, e "HttpClient" no seu service!

  fonte: https://angular.io/guide/http

  Na parte do servico

  <blockquote>

    //Se coloca privada para ela se tornar local!
    constructor(private http: HttpClient) { }

    getCep(cep){

      const configUrl =  //viacep.com.br/ws/${cep}/json`;

      return this.http.get<cep>(configUrl);    
      
    }

  </blockquote>

  Na parte do component

  <blockquote>

    consultaCEP(valueCep){

      //Filtro: somente digitos
      var cep = valueCep.replace(/\D/g, ''); 

      //Verfirificar se não está vazio!
      if(cep != ''){

        //Expressão regular para validar o CEP
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)){

          this.httpService.getCep(cep)
            .pipe(map(dados => dados))   
            .subscribe((dados: cep) => console.log(dados))          

        }      
      }  
    }

  </blockquote>

- Forms (template driven) Populando campos com setValue e patchValue (CEP)


  - setValue: Tem que popular todos os campos existentes!

  - patchValue: Pode popular apenas alguns campos

    <blockquote>

      formulario.form.patchValue({

          endereco: {
            cep: dados.cep.replace(/\D/g, ''),        
            complemento: dados.complemento,
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }


        });

    </blockquote>

- Forms (template driven) Submetendo valores com HTTP POST

  Exemplo de post no servico

  <blockquote>

    export class ConsultaCepService {

      //Se coloca privada para ela se tornar local!
      constructor(private http: HttpClient) { }

      postFormData(form: FormGroup){

        const configUrl = `https://httpbin.org/post`;

        //Converte um objeto JS em JSON!
        return this.http.post(configUrl, JSON.stringify(form.value));
      }

    }

  </blockquote>

  Chamando o servico no componente!

  <blockquote>

    onSubmit(form: any){
      //console.log(form);
      //console.log(form.value);
      //console.log(this.userExemplo);

      this.httpService.postFormData(form)
      .pipe(map(data => data))
      .subscribe(data => console.log("informações enviadas: "+ data));
    }

  </blockquote>



# Formulários reativos ( Data Driven )

- Formulários reativos (data driven) Introdução

  Formulário é criado programaticamente e é sincronizando com o DOM/HTML

  <blockquote>

  </blockquote>

- Formulários reativos: Configuração (Módulo e Componente)

  Cria uma variavel do tipo "FormGroup", essa classe representa o formulario, ela recebe os campos, validações, agrupamento de dados etc!


  <blockquote>

    formulario: FormGroup;

  </blockquote>

  Cria um modulo para o componente data-form, remove a declaração do appmodule, importa o "ReactiveFormsModule"

  <blockquote>

    bg g m data-form

  </blockquote>

  - (FormGroup) Primeira forma de iniciar um formulario reativo, seria no ngOnInit() e  atribuindo a variavel que tem como tipo FormGroup, uma instancia de FormGroup!

  Essa instancia recebe um objeto que tem as propriedades que representa um campo, elas recebem uma instancia de "FormControl", pode passar um valor unicial ou passar null caso não queira valor inicial

  <blockquote>

    formulario: FormGroup;

    ngOnInit(): void {

      this.formulario = new FormGroup({
        nome: new FormControl(null),
        email: new FormControl(null)

      });
    }

  </blockquote>


  - (FormBuilder) A segunda forma seria com o "FormBuild", injeta no contrutor, pode criar no construtor ou no ngOnInit

  <blockquote>

    formulario: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
    

      this.formulario = this.formBuilder.group({

        // 1° parametro: valor inicial
        nome: [ null],
        email: [ null]

      });

    }

  </blockquote>

- Formulários reativos: Sincronizando HTML com FormGroup


  Deve ser usada uma diretiva do "ReactiveFormsModule" chamada: "formGroup" na tag < form> para sincronizar o template com o componet!

  Bota essa diretiva como propert-baind para vincular a variavel do tipo "FormGroup", com isso o TS vai reconhecer todo o formulario!

  <blockquote>

    < form class="mt-5" [ formGroup]="formulario">

  </blockquote>

  Para vincular o campo do html para o TS, deve ser usar a diretiva "formControlName" 

  <blockquote>

    < input type="text" formControlName="nome" class="form-control"
            id="nome" placeholder="Nome">

  </blockquote>

  Para compartilhar varios componente se cria uma modulo de compartilhamento chamado "shared", declara os componente que vai ser compartilhado nele, e depois importa o modulo nos mudulos que vai receber os componentes reutilizaveis !

- Formulários reativos: Fazendo submit ((ngSubmit)="métido()")

  Cria um evento de onSubmit na tag "forms"

  <blockquote>

    < form class="mt-5" [ formGroup]="formulario" (ngSubmit)="onSubmit()">
      ...
    < /form>

  </blockquote>

  Não precisa passar nada para o parametro do método do evento de submite, porque já está vinculado!

  com a variavel vinculada é possivel pegar os valores dos campos do formulario, ele vem em um objeto chamado "value"

  <blockquote>
    
    onSubmit(){
      console.log(this.formulario.value);

      this.formService.postFormData(this.formulario)    
      .subscribe(dados => console.log(dados));
    }
  </blockquote>

- Formulários reativos: Resetando o form (reset())

  com a variavel(TS) que vincula com o formulario(HTML), você chama um método chamado "reset()", para reutilizar foi isolado esse método em um método!

  <blockquote>
    resetar(){
      this.formulario.reset();
    }
  </blockquote>

  Pode chamar esse método no template-form tb!


- Formulários reativos: Aplicando validação nos campos (Validators)

  A validação é feita dentro do campo de formulario no (TS), aonda passa um segundo parametro aonde foi declarada as propriedade no "this.formBuilder.group({})", com a classe do Angular "Validators" você define as validações da propriedade!

  <blockquote>

    this.formulario = this.formBuilder.group({

        // 1° parametro: valor inicial
        nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        email: [null, [Validators.required, Validators.email]]

      });

  </blockquote>


- Formulários reativos: Acesso ao FormControl no HTML e CSS de validação dos campos (get())

  Aplica um ngClass aonde tem a classe "form-group " com um método(aplicaCssErro('nome do campo')) para validar, cria outros 2 métodos(isInValidTouched() e isValidTouched()) para ajudar na validação!

  O método aplicaCssErro() no HTML recebe o nome do "formControlName" usando aspas simples!

  Com a variavel "formulario" aonde foi declarado o "this.formBuilder.group({})" é possivel pegar qualquer campo, usando o método "get()", com isso você pode acessar as propriedade dos campos!

  <blockquote>

    // Verifica se o campo foi tocado e se é valido!
    isValidTouched(campo: any){

      //this.formulario.controls[ campo];

      //Melhor forma de pegar o campo do formulario!
      return this.formulario.get(campo).valid && this.formulario.get(campo).touched

    }

  </blockquote>

  Quando é um property binding, pode acessar a variavel "formulario" que foi declarado no arquivo TS do componente, ou então chamar o método(aplicaCssErro()) que retorna ovalor booleano!

  <blockquote>
    < div class="form-group row" >
        
      < div class="col-sm-12">

        <label for="emailLb" class="label font-weight-bold">Email</label> 

        <input type="email"  formControlName="email" class="form-control"
        id="email" placeholder="nome@Email.com" required email  [ngClass]="aplicaCssErro('email')">
        
        <app-campo-control-erro [condicao]="!formulario.controls['email'].valid && formulario.get('email').touched" msnErro="Email" >
        < /app-campo-control-erro>

      < /div>
    < /div>
  </blockquote>

  O método get() ou controls[], funciona tanto no arquivo TS como no arquivo do HTML, para poder obter o valor dos campos


- Formulários reativos: Endereço (migrando de template driven para form reativo)

  remove as diretivas do ngModel, e deixa apenas, id,class, ngclass,
  define um "formControlName" para cada campo, declara uma propriedade no objeto "this.formBuilder.group({})" para representar um campo!


- Formulários reativos: Form groups (agrupando dados)

  - Para agrupar campo, deve chamar uma propriedade e por um "this.formBuilder.group({})" como valor!

  <blockquote>

    // Melhor forma de declarar os campos do formulario!
      this.formulario = this.formBuilder.group({

        // 1° parametro: valor inicial
        nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        email: [null, [Validators.required, Validators.email]],
        endereco: this.formBuilder.group({
          cep: [null, [Validators.required]],
          numero: [null, [Validators.required]],
          complemento: [null],
          rua: [null, [Validators.required]],
          bairro: [null, [Validators.required]],
          cidade: [null, [Validators.required]],
          estado: [null, [Validators.required]]
        })

      });

  </blockquote>

  - declara o "formGroupName" endereco no HTML, para poder agrupar!

  - Vai da erro na validação, porque precisa informar para o caminho "endereco." em cada propriedade para ser encontrada!

  - Dica de mascará de CEP: https://www.npmjs.com/package/angular2-text-mask


- Formulários reativos: Autopopulando endereço com CEP (setValue e patchValue)

  - Use o evento "blur()" no input cep, para quando perder o foco, executar um método que busca o cep digitado!

  - Cria o método, não precisa passar referencia do formulario, cria um let passando o valor do cep!

  - Reseta os dados dos campos endereço, o objeto "formulario" já tem o método "patchValue"

  - Chama o serviço que tem o método que faz a requisição que busca os dados com o CEP!

  - Se faz um ".pipe()" mapa por um ".map()" que transforma o valor em jSON!

  - Logo em seguida chama um ".subscribe()" para poder receber os valores da requisição quando ele chegar!

  - O valor fica na variavel "data" é tipado com a interface "cepData", que é passado por parametro no dentro do método ".subscribe()", em uma função chamada "feedsData()", essa função popula os campos com os valores novos! 

  - Popular apenas um campo

    <blockquote>

      this.formulario.get('nome').setValue('Lincoln');

    </blockquote>

- Formulários reativos: Verificar validação dos campos com botão submit

  - O this.formulario que é do tipo "FormGroup", tem uma propriedade chamada "controls" que representa uma lista de cada campo, no entanto ele não é um array, por isso não é possivel trabalhar com métodos como forEach, ou tratar ele como um array!

  - Com JS é possivel extrair as keys desse array, usando o método "Object.keys", com isso é possivel usar forEach!

  - Com o nome de cada key é possivel buscar cada uma delas, usando get()! 

  - Para ativar a validação, usa o método "markAsDirty", Dirty seria o campos quando tem o valor alterado!

  <blockquote>

    Object.keys(this.formulario.controls).forEach((campo)=>{

        console.log(campo);

        const controle = this.formulario.get(campo);

        controle.markAsDirty();

    });

  </blockquote>

- Formulários: Criando um serviço de Estados Brasileiros

  - Tranformar campo simples/tipo input para campo comboBox, select ou dropdown!

  - Json com estados: https://github.com/felipefdl/cidades-estados-brasil-json/blob/master/Estados.json

  - Criar um serviço chamado "Dropdown" dentro do "shared" com o diretorio "services"

  - O Json é colocado no diretorio "assets", transforma o nome das propriedades em tudo minusculo!

  - Antes de chamar o ".map()" deve por o ".pipe()"

  - A chamada retorna um objeto do tipo "response", que é convertida para o tipo "json", usando o mapeamento!

  <blockquote>

    constructor(private http: HttpClient) { }

    getEstadosBr(){

      return this.http.get('assets/dados/estadosbr.json');
      //.pipe(map((res: Response) => res.json()));

    }

  </blockquote>

  - A reqisição retorna uma observable ou uma promesse, por isso devese se increver!

  - Não foi preciso usar o pipe() nem map!

  - Apenas na chamada tipar o resultado!

  <blockquote>

    //Chamada da lista de estado
    this.dropdownService.getEstadosBr()
    .subscribe((dados: EstadoBr[]) =>{ this.estados = dados});

  </blockquote>

  - interface que serviu para tipar

  </blockquote>

    export interface EstadoBr {

    id: number;
    sigla: string;
    nome: string;

    }

  </blockquote>

- Formulários: Serviço de consulta CEP + provideIn

  - Quando cria um servido, ele já vem com a propriedade e valor "providedIn: 'root'" no decoreito do "@Injectable"

  - Facilitando a declaração para criar instancias automaticamente!

  - Nessa aula ela refatorou o serviso que consulta o cep, e botou na pasta shared, sem precisar declarar no "providers"!

  REFATORAÇÃO

  - Método consultaCep() do componente data-form

  <blockquote>

    //(GET) Consulta o cep digitado, depois que perde o foco, usando uma requisição em API de terceiros!
    consultaCep(){

      // Obtenha o valor do campo cep
      let cep = this.formulario.get("endereco.cep").value;

      if(cep != null && cep !== ''){

        // TODO:  Implementar uma mensagem de ERRO caso o cep esteja errado
        // Mapeia os valores e transformar em um json
        // Se inscreve para ter a notificação, seria a execução de uma função como se fosse um callback!
        this.cepService.getCep(cep)
        .pipe(map(data => data))
        .subscribe((data :cepData) => this.feedsData(data));
      }

      this.resetDados();
    }

  </blockquote>

  - Método ... do componente template-forms

  <blockquote>

    // Consulta uma API que busca dados de cep
    consultaCEP(cep, form){

      // Filtro: somente digitos
      cep = cep.replace(/\D/g, '');

      if(cep != null && cep !== ''){

        // TODO:  Implementar uma mensagem de ERRO caso o cep esteja errado

        // Mapeia os valores e transformar em um json
        // Se inscreve para ter a notificação, seria a execução de uma função como se fosse um callback!
        this.cepService.getCep(cep)
        .subscribe((data :cepData) => this.feedsData(data, form))

      }
    }
  </blockquote>

  - Método GetCep do serviço "consulta-cep.service"

  <blockquote>

    //GET - endpoint que pega dados de um cep!
    getCep(cep: any){

      // Remove caracteres indesejaveis
      cep = cep.replace(/\D/g, '');

      // Verfirificar se não está vazio!
      if (cep !== ''){

        // Expressão regular para validar o CEP
        const validaCep = /^[0-9]{8}$/;

        // Valida o formato do CEP
        if (validaCep.test(cep)){

          const configUrl = `//viacep.com.br/ws/${cep}/json`;

          return this.http.get<cepData>(configUrl);

        }
        return of({});
      }
      return of({});
    }
  </blockquote>


- Formulários reativos: Combobox simples (select)

  - Transforma o campo "Estado" em select!

  - Insclui a tag option, e faz um ngFor com os valores, inclui a propriedade "value" setando o estado.sigla!
  
  - IMPORTANTE: para evitar vazamento de memoria(memory leak), é bom evitar inscrição dentro do OnInit()

  - No ngFor é colocado um pipe chamado "async", para que ele construa e também destrua a inscrição!

  - A inscrição foi comentada, e foi subistuida por: 

    <blockquete>

      estados: Observable<EstadoBr[]>;

      this.estados = this.dropdownService.getEstadosBr();

    </blockquete>

  - Deve se por um tipo no get!

    <blockquete>
      getEstadosBr(){

        return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
        //.pipe(map((res: Response) => res.json()));

      }    
    </blockquete>

- Formulários reativos: Combobox com Objeto (ngValue e compareWith)

  - O angular compara os objetos com "===", se baseia em endereço de memroia, e sempre vai ser falso porq são sempre endereço de memoria diferente, mesmo os objetos tendo as mesmas propriedades!

  - Para fazer com que o Angular trabalhar com objeto complexo, deve se usar a diretiva "ngValue" no campo option!

  - Tratando a comparação dos objetos, usando uma diretiva do select chamada "compareWith"(ele é uma função), aonde você define a comparação dos objetos!

  - https://angular.io/api/forms/SelectControlValueAccessor

- Formulários reativos: Combobox Múltiplo (Select Multiple)

  - Cria um novo dropdown, e coloque o atributo "multiple" na tag select.

  - A tag option recebe a propriedade "value" e recebe a propriedade do objeto "nome", e exibe a "descr".

- Formulários reativos: Radio Button (Botão do tipo Rádio)

  - Cria uma campo radio buttom, torna ele dinamico com um ngFor, exemplo:

  <blockquote>

    < div class="col-md-4" [ ngClass]="aplicaCssErro('newsletter')">

      < label for="newsletter" class="label font-weight-bold">NewsLetter</>

        < div id="newsletter" class="form-check-inline">

          < div class="ml-2" *ngFor="let item of newsletterOp" >

            < label [ for]="item.value" class="form-check-label">

                < input type="radio" class="form-check-input" [id]="item.value" [value]="item.value"
                formControlName="newsletter" /> {{item.desc}}

            </>

          </>

        </>

      </>

    < /div>

  </blockquote>

- Formulários reativos: Checkbox Toggle

  - cria um checkbox, declara ele no "formBuilder", vincula o html com "formControlName"

  - cria uma alidação usando "Validators.pattern('true')" ou o "Validators.requiredTrue"

  <blockquete>

    termos:[null, Validators.pattern('true')]

  </blockquete>

- Formulários reativos: FormArray: Checkboxes Dinâmicos

  - Cria um array com os nomes dos checkBox, ou pode vim de uma base de dados!

    <blockquete>
      frameworks: ['Angular', 'React', 'Vue', 'Sencha'];
    </blockquete>

  - Quando trabalha com multiplos controle no Angular, se usa "FORM-ARRAY" se usa para checkBox dinamicos ou formularios alinhados.

  - É normal criar um método chamado "build...alguma coisa" para ser o valor da propriedade do campo "frameworks".

  - O método retorna um array de "new FormControl(false)", que seria a declaração de cada checkBox.

  - Não se coloca nome nos checkBox, se faz uma comparação(depara) baseada em Index do primeiro array criado.

  - Porem deve se criar cada campo dinamicamente, usando uma constante, aonde recebe o valor do primeiro array modificado pelo método ".map()".

  <blockquete>

    const values = this.frameworks.map( v => this.formBuilder.control(''));

    ou

    const values = this.frameworks.map( v => new FormControl(false));

  </blockquete>

  - Ultilizando a programação FUNCIONAL e programação REATIVA! 

  - Retorna uma "this.formBuilder.array(value);", value seria a constante.

  - o HTML fica dessa forma!

  <blockquete>

    < div class="col-md-6" [ ngClass]="aplicaCssErro('frameworks')">

        <label for="frameworks">frameworks favoritos</label>

          <div id="frameworks" class="row">

            <div class="checkbox col-md-4"
            formArrayName="frameworks"
            *ngFor="let item of formulario.get('frameworks')['controls']; let i = index">

              <label [for]="frameworks[i]" class="checkbox-inline">

                <input [id]="frameworks[i]" type="checkbox" [formControlName]="i"> {{ frameworks[i] }}

              </label>

            </div>

          </div>
          
      < /div>

  </blockquete>

  - Cria um tratamento para ir apenas valores marcados e o nome do framework

  <blockquete>

  
    // Criando uma copia do valor!

    let valueSubmit = Object.assign({}, form.value)

    // Tratamento paga pegar o nome dos framework marcado e apenas os que foram marcados!

    valueSubmit = Object.assign(valueSubmit, {

      frameworks: valueSubmit.frameworks

      .map((v, i) => v ? listFramework[i]: null)

      .filter((v) => v !== null)

    });

  </blockquete>

- Formulários reativos: Validação Customizada (FormArray Checkboxes)

  - Cria uma método chamada "requiredMinCheckbox", que recebe um parametro chamado "min" com o valor 1. 
  
  - Dentro dessa método cria uma constante que recebe uma função, e como parametro recebe o "formArray"!

  - Dentro desse método cria uma constante, que recebe os controles do "formArray"!

  - Codigo versão estruturada!

  <blockquete>

    // Meétodo que cria a validação personalizada!

    requiredMinCheckbox(min = 1){

    // Contante que recebe uma função que trata o "formArray"!

    const validator = (formArray: FormArray) => {

      // Constante que recebe os controles do "formArray"!

      const values = formArray.controls;

      // Verifica cada check se algum deles foi marcado!

      let totalChecked = 0;

      for (let i = 0; i< values.length; i++){

        if (values[i].value){

          totalChecked += 1;

        }

      }

      // Retorna se atende ou não o minimo de check marcados!

      return totalChecked >= min ? null : {required: true};

    };

    return validator;
  }

  </blockquete>

  - Codigo versão funcional

  <blockquete>

    // Meétodo que cria a validação personalizada!
    requiredMinCheckbox(min = 1){

      // Contante que recebe uma função que trata o "formArray"!
      const validator = (formArray: FormArray) => {    
     
      const totalChecked = formArray.controls
      .map(v => v.value)
      .reduce((total, current) => current ? total + current : total, 0);

        // Retorna se atende ou não o minimo de check marcados!
        return totalChecked >= min ? null : {required: true};

      };

      return validator;

    }
  
  </blockquete>

  - Dentro do "buildFrameworks" bota a validação!

  <blockquete>

    return this.formBuilder.array(values, this.requiredMinCheckbox(1));

  </blockquete>

  - configuração da validação personalizada no HTML

  <blockquete>
    < app-campo-control-erro [ condicao]="!formulario.get('frameworks').valid" msnErro="Selecione 1 opção" >
            </>
  </blockquete>

  - O método foi isolado em uma classe de serviço, e foi declarado como "static", não precisa instanciar a classe, se usa diretamente!

- Formulários reativos: Validação Customizada (CEP)

  - Cria um método static chamado "cepValidator", no serviço "form-validations"!

  - Caso de erro, retorna um objeto representando o tipo de erro!

  <blockquete>

    static cepValidator(control: FormControl){

      const cep = control.value;

      if (cep && cep !== '')
      {

        const validacep = /^[0-9]{8}$/;
        // É preciso retornar um objeto quando da erro!

        return validacep.test(cep) ? null : { cepInvalido : true};

      }

      return null;

    }

  <blockquete>

  - Declarando a validação no campo!

  <blockquete>

    cep: [null, [Validators.required, FormValidationsService.cepValidator]],

  <blockquete>

  - Mensagem de erro, no HTML!

  <blockquete>

    < alert type="danger" [ dismissible]="dismissible" *ngIf="formulario.get('endereco.cep').hasError('cepInvalido') && formulario.get('endereco.cep').touched">
    
    < strong> CEP</> é Invalido!
    < />

  </blockquete>

- Formulários reativos: Validação entre dois campos (confirmar email)

  - A ideia dessa validação é comparar os dois campos de email!

  - Cria um método chamado "equalsTo" no FormValidationsService, passando o valor o nome do primeiro campo como uma string.

  - Cria uma constante, que vai receber uma função que informa, se os campos são iguais.

  - Essa constante é criada para receber como método o 2° campo, o campo que vai receber a validação.

  - Com isso cria uma condição para varificar se:

   - O sistema carregou os campos.

   - O campo e depois o valor existe.

   - Os campos são iguais

  <blockquete>

    // Compara os dois campos de email, recebe como paremetro o 1° campo!
    static equalsTo(otherField: string){


      // Resultado é colocado em uma constant, recebe como parametro o 2° campo "automaticamente"!
      const validator = (formControl: FormControl) => {

        // Verificando se existe o 1° campo.
        if(otherField == null)
        {
          throw new Error('É necessário informar :' + otherField );
        }

        // Verificando todos os campos existem, ou se já foram carregados no sistema
        if(!formControl.root || !(<FormGroup>formControl.root).controls){

          return null;
        }

        // Pesquisa o valor do 1° campo
        const field = (<FormGroup>formControl.root).get(otherField);

        console.log(formControl);

        // Verifica se o valor do 1° campo existe
        if (!field){

          throw new Error('É necessario informar um campo válido.');

        }

        // Compara o 1° valor com o 2° valor
        if (field.value !== formControl.value){

          return {equalsTo: otherField};

        }

        // Caso não tenha erro retorne null
        return null;
      }

      return validator;
    }

  </blockquete>

  - Use o erro personalizado "equalsTo" para fazer a condição da mensagem de erro!

  <blockquete>

    < div class="col-sm-12">

          < label class="label font-weight-bold">Confirmar Email</>

          < input type="email"  formControlName="confirmarEmail" class="form-control"
          id="confEmail" placeholder="nome@Email.com" required email  [ngClass]="aplicaCssErro('confirmarEmail')">

          < app-campo-control-erro [condicao]="formulario.get('confirmarEmail').hasError('equalsTo')" msnErro="Confirma o Email" ></>
    < /div>

  </blockquete>

  - Biblioteca que tem as validações prontas, seja no "template-driven" ou como "model-driven"

  <blockquete> https://www.npmjs.com/package/ng2-validation </blockquete>

- Formulários reativos: Validação Assíncrona

  - Cria um jsom com dados para ser consultados

  <blockquete>
    {
      "emails": [
        {"email": "email@email.com.br" },
        {"email": "email1@email.com.br" }
        ...
      ]
    }

  </blockquete>

  - Com isso cria uma serviço chamado "verifica-email"

    - Cria uma pasta chamada "services" no component

    - Clica com o botão direito na pasta do component

    - Escolhe a opção: "Schematics" -> "Service" -> bota um nome, e aperta Enter!

    - O sistema gera um arquivo de serviço!

  - cria um método chamado "verificarEmail" que recebe um parametro string "email"

    - Ele retorna uma requisição, para usar os operadores do RXJS, deve se usar o .pipe()

    - Dentro desse .pipe(), chama o .map() para buscar apenas os valores desejaveis.

    - Passando um parametro chamado "dados", podemos tipar ele como um objeto "{emails : any[]}".

  - Cria a validação no componente, chamando o serviço criado!

  <blockquete>

    validarEmail(formControl: FormControl){

       let outroCampo = this.formulario.get('confirmarEmail');

       outroCampo.setValue('');

      return this.validarEmailService.verificarEmail(formControl.value)
      .pipe(
        map(emailExiste => emailExiste ? { emailInvalido: true } : null)
      );
      
    }

  </blockquete>

- Formulários reativos: Serviço de Mensagens de Erros

  - Crie um serviço usando o "Schematics", nele bota um "Input" do tipo "formControl", outro bool, e string!

  - crie um span, para receber a mensagem de erro!

  - Cria um método get para o component, ele já reconhece o get como uma propriedade padrão! 

  <blockquete>

    get errorMessage(){

      for( const propertyName in this.control.errors){

      if(this.control.errors.hasOwnProperty(propertyName) &&
      this.control.touched){

        return FormValidationsService.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
        }

      }
      return null;
    }

  </blockquete>

  - O método é calculado de acordo com o tempo de uso do component

  <blockquete>

    < div *ngIf="errorMessage != null" >

      < alert [ type]="cssErro" [ dismissible]="dismissible" >
        < strong>{{ errorMessage }}</>
      </>

    </>
  </blockquete>

  - O component ele verifica se a propriedade que faz parte de uma listagem de erro existe!

  - Existindo ele chama um serviço que tem uma método statico, para poder montar e returnar uma mensagem dinamicamente!

  - Essa mensagem vai variar de acordo com o nome do campo e do tipo de erro!

  <blockquete>

    static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any){

      const config = {
        'required': " $ { fieldName} é obrigatorio",
        'minlength': " ${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.",
        'maxlength': " $ { fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.",
        'cepInvalido': 'CEP inválido.'
      }

      return config[ validatorName];
    }

  </blockquete>

  - O formulario, precisa invocar o component, e passar o controle e uma label !

  <blockquete>

    < app-error-msg [ control]="formulario.get('nome')" label="Nome"
      cssErro="danger" >
    </>

  </blockquete>


- Formulários reativos: Reagindo à mudanças reativamente

  - Alem dos eventos do JS (Evento de input) que serve para fazer o two way data binding.
 
  - Tem outra forma de escutar as mudanças de valores de formularios, usando a API do formulario do Angular.

  - this.formulario.statusChanges: Ele emite varios valores a cada mudança de status do formulario, ele é um observable!

  - this.formulario.status: consegue pegar o status do formulario!

  - this.formulario.value: Obtem os valores de cada campo do formulario, oque geralmente envia para o servidor.

  - this.formulario.statusChanges: Captura cada mudança de valor do formulario!

  - Pode ser feito a nivel de formulario ou do controle, formGroup, ou formArray!

  - Consultando o CEP de forma reativa!

  - Se deve ativar o observable, usando um subscribe!

  - Usando o valueChanges/statusChanges, para confirmar se o CEP é valido, antes mesmo de executar o serviço!  

  <blockquete>
 
    this.formulario.get('endereco.cep').statusChanges
      .subscribe(statuss => console.log("status do CEP: ", statuss));

  </blockquete>

  - Comando "(blur)="consultaCep()"" foi removido do input do CEP!

  <blockquete>
  
    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP: ', value))
      )
      .subscribe(status => {
        if(status === 'VALID'){

          this.cepService.getCep(this.formulario.get('endereco.cep').value)
          .pipe(map(data => data))
          .subscribe((data :cepData) => this.feedsData(data));


        }
      });

  </blockquete>

  - O codigo pode ficar melhor usando um operador do RXJS que junta dois observable!

  <blockquete>


  this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP: ', value)),
        switchMap(status => status === 'VALID' ?
        this.cepService.getCep(this.formulario.get('endereco.cep').value)
          : empty()
        )
      )
      .subscribe((data :cepData) => this.feedsData(data));

  </blockquete>

-  Formulários reativos: Campo input customizado (ControlValueAcessor)

 - Cria um component chamado "InputField".

 - Replica um formulario no HTML dele, cria os "Imput" de valores que eles iram receber!  

  <blockquete>
      @Input() classeCss;
      @Input() id: string;
      @Input() label: string;
      @Input() type = 'text';
      @Input() placeholder: string;
      @Input() control;
  </blockquete>

 - O component pai ainda não reconhece o "formControlName="xxxx"" do formulario isolado que é um component filho!

 - Para o component pai reconhecer a configuração deve se usar o "ControlValueAccessor"

 - ControlValueAccessor: Define uma interface que atua como uma ponte entre a API de formulários Angular e um elemento nativo no DOM.

 - Devese implementar essa interface "ControlValueAccessor"

 - E implementar os métodos dessa interface!

  <blockquete>

    // Setar um valor
    writeValue(v: any): void {

      this.value = v;

      /*if(v !== this.innerValue){
        this.innerValue = v;
        this.onChangeCb(v);
      }*/
    }

    // Fala para o Angular toda vez que um valor muda!
    registerOnChange(fn: any): void {
      this.onChangeCb = fn;
    }

    // Fala com o Angular toda vez que o campo ganha foco!
    registerOnTouched(fn: any): void {
      this.onTouchedCb = fn;
    }

    // Fala pro Angular quando o Campo está dezabilitado !
    setDisabledState?(isDisabled: boolean): void {
      this.isReadOnly = isDisabled;
    }
  </blockquete> 

 - Com a interface implementada, é preciso por um [( ngmodel)]="value" e associar a um value!

 - O segundo paço transformar o component em um campo de imput é o "ngValueAccessor", para o Angular entender a logica!

   - provide: token para reconhecer que é um campo de imput!
   - useExisting: referenciando a propria classe!
   - multi: Informa que pode ter varias instancias!

   <blockquete> 

      const INPUT_FIELD_VALUE_ACCESSOR: any = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputFieldComponent),
        multi: true
      }

      @Component({
        selector: 'app-input-field',
        templateUrl: './input-field.component.html',
        styleUrls: [ './input-field.component.css'],
        providers: [ INPUT_FIELD_VALUE_ACCESSOR]
      })

   </blockquete>  

  - com o ngModel configurado, pode usar o componet de imput no template datadrive também!


- Formulários reativos: Classe base para Forms (herança no Angular)

 - Todo formulario vai herdar essa classe, para ter métodos padrão!

  ### Como Criar uma herança!

    - Cria um componente chamada "base-form" remove o HTML e o CSS dele.

    - Na configuração deixa apenas "template" e bota uma DIV vazia.

    - No DataFormComponent, bota o "extends" e o BaseFormComponent.

    - Assim o "DataFormComponent" herda o "BaseFormComponent".

    - No construtor do "DataFormComponent" deve se chamar o super();.

    - A propriedade "formulario: FormGroup;" foi comentada porque o "DataFormComponent" já herda ela do "base-form".

  ### Criando método abstratos

    - Cria um método abstract no "BaseFormComponent" e torna a classe dele abstract, pois método abstract deve ser criado em classes abstract!

    - Vai da erro no "DataFormComponent", porq ele vai pedir para implementar o novo método que foi herdado!

    <blockquete>

      export abstract class BaseFormComponent implements OnInit {

        formulario: FormGroup;

        constructor() { }

        ngOnInit(): void {
        }

        abstract submit();

        onSubmit(){

          if (this.formulario.valid){
            this.submit();
          }
          else
          {
            console.log('Formulario invalido');

            this.verificaValidacoesForm(this.formulario);
          }       
        }
      }
      
    </blockquete>

    - Métodos que sairam do "DataFormComponent" para ir para o "BaseFormComponent" :

     - onSubmit
     - verificaValidacoesForm
     - resetar
     - isValidTouched
     - isInValidTouched
     - isInvalidEmail
     - aplicaCssErro


- Formulários reativos: Combobox aninhado: Estado + Cidade

 - Baixa o json de cidade!

  












  































  




