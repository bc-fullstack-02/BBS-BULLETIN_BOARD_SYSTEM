const express = require('express');
const routes = express.Router();
const datacontrol = require('../controllers/datacontrol');
routes.get('/anotacoes', datacontrol.create);

module.exports = routes;