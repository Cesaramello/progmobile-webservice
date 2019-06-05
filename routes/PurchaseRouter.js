//Biblioteca de status HTTP
const HttpStatus = require('http-status-codes');

//Serviços para Genres
const services = require('../services/PurchaseServices');

//Server Restify
const server = require('../config/server').server;

//Validação de Token
const validateToken = require('../config/token');

//Url do Recurso
const resourceName = '/purchases';

server.get(resourceName, validateToken, (request, response, next) => {

    const userId = request.header('userId');

    services.getPurchases(userId)
        .then(purchases => {
            purchases ? response.send(HttpStatus.OK, purchases) : response.send(HttpStatus.NOT_FOUND, []);
        })
        .catch(err => response.send(HttpStatus.SERVICE_UNAVAILABLE, err));

});
