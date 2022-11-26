const express = require('express');
const lancamento = express();
const morgan = require('morgan');


const rotasLancamento = require('./Rotas/newanime');
const rotasAnime = require('./Rotas/ani');

lancamento.use(morgan('dev'));
lancamento.use('/newanime', rotasLancamento);
lancamento.use('/ani', rotasAnime);
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

