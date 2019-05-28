//Façade para todos os Models em ./model
exports.users = {
    User: require('./users/User'),
    Token: require('./users/Token')
}
