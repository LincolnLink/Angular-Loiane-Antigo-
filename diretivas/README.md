
# Diretivas

- Existe 2 tipos de diretivas 

# Diretivas Estruturais

 - Interagem com a view e modifica a estrutura do DOM o/ou codigo html! 

 <blockquote>
  ngFor, ngIf
 </blockquote>

# Diretivas de atributos

 - Interagem com o elemento em que foram aplicadas

 <blockquote>
   ng-class, ng-style
 </blockquote>

# Criando Diretiva personalizada de atributos

 - exemplo: 

 <blockquote>
  ng g d 'shared/' 'nome da diretiva'
 </blockquote>

# Diretivas do Angular

 - Os componentes são diretivas com template

 Exemplos:
 <blockquote> < cursos-lista></ cursos-lista> </blockquote>

 - shared : é o diretorio que fica os arquivos aonde toda aplicação tem acesso!


# ngIf

 - Definindo as variaveis e valores

 <blockquote>
     
     cursos: string[] = ["Angular 2", "C#", "PHP"];

      mostrarCursos: boolean = false;

      constructor() { }

      ngOnInit() {
      }

      onMostrarCrusos(){
        this.mostrarCursos = !this.mostrarCursos;
      }

 </blockquote>

 - Não existe ELSE, tem que negar para mostrar o oposto do IF

 <blockquote>

    < div *ngIf="cursos.length > 0">
        Lista de cursos aqui.
    < /div>

    < div *ngIf="cursos.length == 0">
        Não existe cursos para serem listados.
    < /div>

 </blockquote>

    
 ### Usando boolean

 - Não existe ELSE, tem que negar para mostrar o oposto do IF

 <blockquote>

     < div *ngIf="mostrarCursos">
        Lista de cursos aqui.
     < /div>

     
     < div *ngIf="!mostrarCursos">
        Não existe cursos para serem listados.
     < /div>

 </blockquote>

 ### Com Botão

 <blockquote>

    < button (click)="onMostrarCrusos()">Mostrar ou Esconder cursos< /button>

 </blockquote>

 - Hidden como alternativa

 - Alternativa para trocar o ngIf, seria o hidden, ele esconde ao inves de destruir o DOM!

 - Não existe ELSE, tem que negar para mostrar o oposto do IF

 <blockquote>

    < div [hidden]="!mostrarCursos">
        Lista de cursos aqui.
    < /div>

    
    < div [hidden]="mostrarCursos">
        Não existe cursos para serem listados.
    < /div>

 </blockquote>

 ### Usando template

 <blockquote>

    < ng-template [ngIf]="!mostrarCursos">
        < div> Lista de cursos aqui.</ div>
    < /ng-template>

 </blockquote>



# *ngFor


 - Exemplo de NgFor

 <blockquote> cursos: string[] = ["Angular", "C#", "PHP"]; </blockquote>

 <blockquote>
     < ul>
        < li *ngFor="let curso of cursos, let i = index">
            {{ i + 1}} - {{ curso }}
        < /li>
     < /ul>     
 </blockquote>


 - não funciona mais!

 <blockquote>

    < ul>
        < li template="ngFor let curso of cursos, let i = index">
            {{ i + 1}} - {{ curso }}
        < /li>
    < /ul>
 
 </blockquote> 

 - Forma para remover o *

 <blockquote>
    < ul>
        < ng-template ngFor [ngForOf]="cursos" let-curso let-i="index">
            < li >
                {{ i + 1}} - {{ curso }}
            < /li>
        < /ng-template>

    < /ul>
 </blockquote>


# Diretivas: ngSwitch, ngSwitchCase e ngSwitchDefault

- Exemplo!

<blockquote> aba: string = 'home'; </blockquote>

-

<blockquote>
    
</blockquote>

-

<blockquote>
    
</blockquote>



