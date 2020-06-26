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

  Bota essa diretiva como propert-baind para vincular a variavel do tipo "FormGroup"!

  <blockquote>
    < form class="mt-5" [formGroup]="formulario">
  </blockquote>

- 












  































  




