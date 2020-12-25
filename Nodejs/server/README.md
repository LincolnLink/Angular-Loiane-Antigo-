
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

### removendo o cors, usando o proxy que está embutido no angular CLI!

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

    - securre: false

    - loglevel: 'debug'

    - pathRewrite: reescrever o caminho! '^/api': ''

  - No "package.json" adiciona uma flag no start!

    "ng serve --proxy-config proxy.conf.js"

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