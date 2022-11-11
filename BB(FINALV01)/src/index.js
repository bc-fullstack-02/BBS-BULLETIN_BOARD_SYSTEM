const express = require('express');

const routes = require('./routes').default;

const app = express();
require('./config/dbconfig');

app.use(express.json());
app.use('../config/dbconfig', routes);
app.listen(666, () => console.log('Welcome to hell! port 666'));