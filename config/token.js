//Biblioteca de status HTTP
const HttpStatus = require('http-status-codes');

//Serviços para Genres
const services = require('../services/AuthenticationServices');

const validateToken = (request, response, next) => {

    const token = request.header('token') ? request.header('token') : null;
    const userId = request.header('userId') ? request.header('userId') : null;

    if (token && userId) {
        services.validate(token, userId)
            .then(user => {
                return next();
            })
            .catch(err => {
                response.send(HttpStatus.UNAUTHORIZED);
                return next(false);
            })
    } else {
        response.send(HttpStatus.UNAUTHORIZED);
        return next(false);
    }


};

module.exports = validateToken;
