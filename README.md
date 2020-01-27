# Angular-Loiane
Praticando Angular com Loiane Groner

# Principais  comando JS/TS

.filter() : Filtra uma lista, deacordo com uma condição!
pode passar uma Arrow functions!

return value.filter(
      v => v.toLocaleLowerCase().indexOf(filter) != -1
    );

________________________________________________________

.indexOf(): O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

return value.filter(
      v => v.toLocaleLowerCase().indexOf(filter) != -1
    );

________________________________________________________


.map


________________________________________________________




# Comando principais

-- componente pelo CLI

`ng g c nomeDoComponente`

-- module pelo cli

`ng  g m nomeDoModulo`

-- service 

`ng g s nomeServico`


-- bootstrap no angular

npm install ngx - inicialização - salvar

https://valor-software.com/ngx-bootstrap/#/documentation

outros 

http://themicon.co/theme/angle/v4.6/frontend/site/



# Ciclo de vida do Angular ! 

Evento (Hooks) -  Quando?

-- ngOnChanges: Antes #2 e quando valor property-binding é atualizado (importante)

-- ngOnInit: Quando component é inicializado

-- ngDoCheck: A cada ciclo de verificação de mudanças

-- ngAfterContentInit: Depois de inserir conteúdo externo na view

-- ngAfterContentChecked: A cada verificação de conteúdo inserido

-- ngAfterViewChecked: A cada verificação de conteúdo / conteúdo filho

-- ngOnDestroy: Antes da diretiva / component ser destruído (importante

# Mudando o pré processador de css de um projeto que ja existe!
 
`
ng set defaults.styleExt scss

ng set dedaults.styleExt less

ng set dedaults.styleExt styl

`
-- style guid: Padrões do angular

https://angular.io/guide/styleguide


# nglint: 
comando que varifica o seu codigo!


# ng test: 
roda os arquivos de teste, e informa o tipo de erro no teste!


# nge2e:
 teste de integração!

# Diretivas do Angular:

Uma forma de passar instruções para o template(codigo HTML)


EXEMPLO: *ngFor

<ul>
    <li *ngFor="let curso of cursos">
    {{ curso }}
    </li>
</ul>

Os componentes ~soa diretivas com template

exemplos:
<cursos-lista></cursos-lista>


existe 2 tipos de diretivas 

-- Diretivas Estruturais:
Interagem com a view e
modifica a estrutura do DOM o/ou codigo html! 

exemplo: ngFor, ngIf


-- Diretivas de atributos

Interagem com o elemento em que foram aplicadas

exemplo: ng-class, ng-style


-- ngIf



------Service---------


-- bota a classe de serviço no providers para ela ser
 instanciada uma vez para toda aplicação


---------criando module de funcionalidade

Module de funcionalidade vs module root/ modulo raiz

Module de funcionalidade se importa o CommonModule!

Modulo raiz se importa o BrowserModule!



padrão singoto: não importa quantas vezes declara o servico, 
sempre vai ter uma unica instancia!


--------------Pipes--------------------


# criando um Pipe personalizado


 `ng g p 'nome do pipe'`










