const UserRouter = require('./UserRouter');
const AuthenticationRouter = require('./AutheticationRouter');
const EventRouter = require('./EventRouter');
const staticRouter = require('./staticRouter');

const Router = [
    UserRouter,
    AuthenticationRouter,
    EventRouter,
    staticRouter
];

module.exports = Router;
