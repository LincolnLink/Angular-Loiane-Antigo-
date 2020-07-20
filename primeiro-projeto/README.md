# PrimeiroProjeto


- Modulo: Ajuda a organizar a aplicação e a modularizar


- Meta dados de um Module

    - declarations: Lista todos os componentes diretivas de pipes

    - imports: Outros modulos de fora que vão ser usado no modulo ou em um componente declarado!

    - exports: Lista todos os componentes, diretivas, pipes que vai ser exposto para outros modulos!
    (exemplo: component filhos)

    - providers: lista os serviços e guarda de rotas que vão ficar disponies para todos so componentes!

    - bootstrap: Só é encontrado no module raiz, declara o componente principal o container!

- Template: A parte da view, o template que vai ser renderizado

    - o seletor(tag) é declarado no arquivo TS do component

    - Interpolação: faz a saida de variaveis, digita o nome da variavel mas exibe o valor dela!

    - TamplateURL: indica o caminho do arquivo HTML 

- Classes de Serviço e injeção de dependencia!

    - Serviço: aonde fica a logica do componente, se comunica com o servidor!

    - injeção de dependencia: cria uma instancia automaticamente, sem precisar dar "new()", deve ser declarado no "providers" no module, no componente é declarado dentro do construtor!


    <blockquote>
        
        constructor(private cursoService: CursosService) {

            this.nomePortal = 'Exemplo';

            this.cursos = this.cursoService.gerCursos();
        }

    </blockquote>