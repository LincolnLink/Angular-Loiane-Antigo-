
### Http: Upload de Arquivo: Back-end com Node.js

 - Tutorial detalhado do body-parser que é um middleware

 https://github.com/expressjs/body-parser

 - Cria uma pasta e faz um npm init!

 - "-y" é para criar um pact-json

 <blockquete> npm init -y </blockquete>

 <blockquete> npm install -save express body-parser connect-multiparty cors </blockquete>

 - Cria uma pasta "src" e um arquivo "index.js"

 - Cria o "'start': "node src/index.js"" no script

 - Modofica o " "main": "src/index.js""

 - Faça as requesições das dependencia que foi colocada no pactjson: cors, express, bodyParser e Multipart

 - Instanciando a aplicação

 <blockquete> const app = express(); </blockquete>

 - Escutando a porta, e passando uma função de callback, informando que o servidor foi iniciado!

 <blockquete>

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(8000, ()=> {
        console.log('Servidor porta 8000');
    })

 </blockquete>

 - Para iniciar a aplicação digita o comando!

 <blockquete> npm rum start </blockquete>

 - Cors é um middleware, ele serve para dominios diferentes se comunicarem, o JS por padrão impede a comunicação entre dominios diferentes, o cors tem a função de liberar essa comunicação!

 - Para não commitar arquivos, bota o diretorio no arquivo de gitignore!

 - configurando e usando o cors

 <blockquete> 

  const corsOptions = {
    origin: '*',
    optionsSuccessStattus: 200
  }

  app.use(cors(corsOptions));

 </blockquete>

  - Define o diretorio aonde os arquivos upados vai ficar!

  - Define a URL que vai ser consumida para fazer upload

  - configura o endPoint!

 <blockquete> </blockquete>

 <blockquete> </blockquete>
