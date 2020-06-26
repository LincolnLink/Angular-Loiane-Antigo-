# Servicos

-   classe de serviço

    - É ultilizada para fazer chamadas no banco, enviar e receber dados 
    da base de dados para o componente.

    - Também é ultilizada para criar métodos e distributir para outros componentes, evitando
    repetição de métodos em cada componente.

    - Alem da logica podemos por classe ultilitarias dentro dos serviços.

    - Uma forma de passar instruções para o template(codigo HTML).

- Bota a classe de serviço no providers para ela ser instanciada uma vez para toda aplicação (Usando a injeção de dependencia)

  - Padrão singoto: não importa quantas vezes declara o servico, sempre vai ter uma unica instancia!

