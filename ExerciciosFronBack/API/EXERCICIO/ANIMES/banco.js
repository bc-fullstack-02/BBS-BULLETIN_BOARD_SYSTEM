require('dotenv').config({ path: 'variaveis.env' })
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotas = require('./rotas');
const server = express();


server.use(cors());
server.use(bodyParser.json());
server.use('/api', rotas);
server.use(bodyParser.urlencoded({ extended: false }));
server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});