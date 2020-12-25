const express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');


// Instanciando a aplicação
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Cors é um middleware, ele serve para dominios diferentes, se comunicarem
// o JS por padrão impede a comunicação entre dominios diferentes, 
// o cors tem a função de liberar essa comunicação!
/* Configuração do cors */
/*
const corsOptions = {
    origin: '*',
    optionsSuccessStattus: 200
}
// Usando outro middleware!
app.use(cors(corsOptions));
*/

// Definindo a pasta que vai ser usada para guardar os arquivo do upload
const multipartMiddleware = multipart({uploadDir: './uploads'});

// defindo a URL que vai ser consumida, passa o local aonde vai ser salvo!
// callback para receber o request e o response!
// Pega os arquivos no "req" guarda na const "files" e exibe no console.log!
// Cria uma resposta para o Angular! (foi passado o arquivo que recebeu)
app.post('/upload', multipartMiddleware, (req, res) =>{
    const files = req.files;
    console.log(files);
    res.json({message: files});
});

// Mensagem de erro, caso tenha algum!
app.use((err, req, res, next) => res.json({error: err.message}));

// Escutando a porta, e passando uma função de callback, 
// informando que o servidor foi iniciado!
app.listen(8000, ()=> {
    console.log('Servidor porta 8000');
})
