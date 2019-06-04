//Biblioteca de status HTTP
const HttpStatus = require('http-status-codes');

//Serviços para Genres
const services = require('../services/UserServices');

//Server Restify
const server = require('../config/server').server;

//Url do Recurso
const resourceName = '/user';

server.post(resourceName, (request, response, next) => {

    const {
        login,
        email,
        name,
        password
    } = request.params;

    const user = {
        login: login || null,
        email: email || null,
        name: name || null,
        password: password || null
    };

    services.createUser(user)
        .then(user => {
            response.send(HttpStatus.OK, user);
        })
        .catch(err => {
            response.send(HttpStatus.BAD_REQUEST, err);
        })

});
