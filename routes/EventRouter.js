//Biblioteca de status HTTP
const HttpStatus = require('http-status-codes');

//Serviços para Genres
const services = require('../services/EventServices');

//Server Restify
const server = require('../config/server').server;

//Url do Recurso
const resourceName = '/events';

server.get(resourceName, (request, response, next) => {

    services.getEvents()
        .then(events => {
            console.log(events);
            response.send(HttpStatus.OK, events ? events : []);
        })
        .catch(err => {
            console.error(err);
            response.send(HttpStatus.SERVICE_UNAVAILABLE, errr);
        })

    next();

});

server.get(resourceName + '/:eventId', (request, response, next) => {

    const {
        eventId
    } = request.params;

    services.getEvent(eventId)
        .then(event => {
            console.log(event);
            event ? response.send(HttpStatus.OK, event) : response.send(HttpStatus.NOT_FOUND, {});
        })
        .catch(err => {
            console.error(err);
            response.send(HttpStatus.SERVICE_UNAVAILABLE, err);
        })

    next();

});
