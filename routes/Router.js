const UserRouter = require('./UserRouter');
const AuthenticationRouter = require('./AutheticationRouter');
const EventRouter = require('./EventRouter');
const PurchaseRouter = require('./PurchaseRouter');
const staticRouter = require('./staticRouter');

const Router = [
    UserRouter,
    AuthenticationRouter,
    EventRouter,
    PurchaseRouter,
    staticRouter
];

module.exports = Router;
