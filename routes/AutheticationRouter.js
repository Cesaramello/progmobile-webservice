//Biblioteca de status HTTP
const HttpStatus = require('http-status-codes');

//Serviços para Genres
const services = require('../services/AuthenticationServices');

//Server Restify
const server = require('../config/server').server;

//Url do Recurso
const resourceName = '/authentication';

//Apenas para testes
//Não user em produção
server.get(resourceName, (request, response, next) => {
    const {
        token,
        userId
    } = request.query;

    console.log(request.query);

    services.validate(token, userId)
        .then(user => {
            response.send(HttpStatus.OK, user);
        })
        .catch(err => {
            response.send(HttpStatus.UNAUTHORIZED, err);
        })

});

server.post(resourceName, (request, response, next) => {

    const {
        login,
        password
    } = request.params;

    services.authenticate(login, password)
        .then(auth => {
            response.send(HttpStatus.OK, auth);
        })
        .catch(err => {
            response.send(HttpStatus.UNAUTHORIZED, err);
        })

    next();
});

server.del(resourceName, (request, response, next) => {

    const {
        token,
        userId
    } = request.params;

    services.deactivate(token, userId)
        .then(token => {
            if (token) {
                response.send(HttpStatus.OK, token);
            } else {
                response.send(HttpStatus.NO_CONTENT);
            }
        })
        .catch(err => {
            console.error(err);
            response.send(HttpStatus.BAD_REQUEST, err);
        })

    next();
});
