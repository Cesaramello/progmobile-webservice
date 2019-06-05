//Importa a conexão Sequelize com o DB
const sequelize = require('../../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Depêndências para associações
const TicketType = require('./TicketType');

//Definição do Sequelize Model
const Ticket = sequelize.define('ticket', {
    validation_hash: {
        type: Sequelize.STRING
    },
    validated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    validation_date: {
        type: Sequelize.DATE
    }
});

//Associações
Ticket.belongsTo(TicketType);

module.exports = Ticket;
