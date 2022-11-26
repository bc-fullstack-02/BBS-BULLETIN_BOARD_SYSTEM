const express = require('express');
const lancamento = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const rotasLancamento = require('./Rotas/newanime');
const rotasAnime = require('./Rotas/ani');
/*
Estamos usando o morgan para logar as requisições
*/
lancamento.use(morgan('dev'));
/*
Estamos usando o body-parser para pegar POSTS
*/
lancamento.use(bodyParser.urlencoded({ extended: false }));
/*
Estamos usando o body-parser para pegar JSONs
*/
lancamento.use(bodyParser.json());

lancamento.use('/newanime', rotasLancamento);
lancamento.use('/ani', rotasAnime);

lancamento.use((req, res, next) => {
    /** 
     *Estamos usando o header para o controle de CORS, controll access origin, controle de acesso a origem e estamos passando o * para permitir o acesso de qualquer origem
     */
    res.header('Access-Control-Allow-Origin', '*');
    /*
     Render Header renderiza o cabeçalho da resposta. 
     */
    res.render('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    } else {
        next();
    }
})
lancamento.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});
lancamento.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});
module.exports = lancamento;

