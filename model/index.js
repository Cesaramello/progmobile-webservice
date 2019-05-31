//Façade para todos os Models em ./model
exports.users = {
    User: require('./users/User'),
    Token: require('./users/Token'),
};

exports.events = {
    Event: require('./events/Event'),
    Place: require('./events/Place')
};

exports.tickets = {
    Ticket: require('./tickets/Ticket'),
    TicketType: require('./tickets/TicketType')
};

exports.purchases = {
    Purchase: require('./purchases/Purchase')
};