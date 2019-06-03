//Importa a conexão Sequelize com o DB
const sequelize = require('../../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Definição do Sequelize Model
const TicketType = sequelize.define('ticket_type', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DECIMAL
    }
})

module.exports = TicketType;
