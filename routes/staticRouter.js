const restify = require('restify');

//Server Restify
const server = require('../config/server').server;

server.get('/images/*', restify.plugins.serveStatic({
    directory: './public',
    maxAge: 0 //desativando cache para dev
}));
