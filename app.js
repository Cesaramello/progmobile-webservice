const server = require('./config/server').server;
const port = require('./config/server').port;
const router = require('./routes/Router');

var path = require('path');
var appDir = path.dirname(require.main.filename);

server.listen(port, (router) => {
    console.log(`restify executando na porta:${port}`);
});