const express = require('express');
const routes = express.Router();
const datacontrol = require('./controllers/datacontrol');
routes.get('/', datacontrol.create);