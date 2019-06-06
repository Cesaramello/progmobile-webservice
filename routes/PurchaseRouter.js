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
            console.log(purchases);
            purchases ? response.send(HttpStatus.OK, purchases) : response.send(HttpStatus.NOT_FOUND, []);
        })
        .catch(err => response.send(HttpStatus.SERVICE_UNAVAILABLE, err));

    next();

});


server.get(resourceName + '/:purchaseId', validateToken, (request, response, next) => {

    const userId = request.header('userId');

    const {
        purchaseId
    } = request.params;


    services.getPurchase(userId, purchaseId)
        .then(purchase => {
            console.log(purchase);
            purchase ? response.send(HttpStatus.OK, purchase) : response.send(HttpStatus.NOT_FOUND, {});
        })
        .catch(err => response.send(HttpStatus.SERVICE_UNAVAILABLE, err));

    next();

});
