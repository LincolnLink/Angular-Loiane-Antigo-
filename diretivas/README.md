
# Diretivas

- Existe 2 tipos de diretivas 

  - Diretivas Estruturais

        Interagem com a view e modifica a estrutura do DOM o/ou codigo html! 

        <blockquote>
        ngFor, ngIf
        </blockquote>

  - Diretivas de atributos

        Interagem com o elemento em que foram aplicadas

        <blockquote>
        ng-class, ng-style
        </blockquote>

# Criando Diretiva personalizada de atributos

-   exemplo: 

    <blockquote>
    ng g d 'shared/' 'nome da diretiva'
    </blockquote>

# Diretivas do Angular

-   Os componentes são diretivas com template

    Exemplos:
    <blockquote>
    < cursos-lista></ cursos-lista>
    </blockquote>

    shared : é o diretorio que fica os arquivos aonde toda aplicação tem acesso!

-   *ngFor

    <blockquote>

        < ul>

            < li *ngFor="let curso of cursos">

            {{ curso }}

            < /li>

        < /ul>
    
    </blockquote> 





- ngIf

    <!--TODO-->