//Importa a conexão Sequelize com o DB
const sequelize = require('../../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Depêndências para associações
const Event = require('../events/Event');

//Definição do Sequelize Model
const TicketType = sequelize.define('ticket_type', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DECIMAL
    }
})

//Associações
TicketType.belongsTo(Event);

module.exports = TicketType;
