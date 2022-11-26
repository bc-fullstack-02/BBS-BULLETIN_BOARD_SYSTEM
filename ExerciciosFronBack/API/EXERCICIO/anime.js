const http = require('http');
const express = require('express');
const app = express();
const port = 3000;
const server = http.createServer(app);

server.listen(port);
