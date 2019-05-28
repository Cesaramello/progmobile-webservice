const AuthenticationRouter = require('./AutheticationRouter');
const staticRouter = require('./staticRouter');

const Router = [
    AuthenticationRouter,
    staticRouter
];

module.exports = Router;
