const express = require('express');
const Controller = require('../controllers/controllerTransacao');
const ControllerBoleto = require('../controllers/controllerBoleto');

const routes = new express.Router();

routes.post('/post', Controller.store);
routes.post('/boleto', ControllerBoleto.store);

module.exports = routes;