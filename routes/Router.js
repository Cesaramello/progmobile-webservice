const AuthenticationRouter = require('./AutheticationRouter');
const EventRouter = require('./EventRouter');
const staticRouter = require('./staticRouter');

const Router = [
    AuthenticationRouter,
    EventRouter,
    staticRouter
];

module.exports = Router;
