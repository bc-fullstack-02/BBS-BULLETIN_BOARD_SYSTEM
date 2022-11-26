const http = require('http');
const port = process.env.PORT || 3000;
const lancamentos = require('./lancamento');
const server = http.createServer(lancamentos);

server.listen(port);
