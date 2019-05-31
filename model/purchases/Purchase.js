//Importa a conexão Sequelize com o DB
const sequelize = require('../../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Depêndências para associações
const User = require('../users/User');
const Ticket = require('../tickets/Ticket');

//Definição do Sequelize Model
const Purchase = sequelize.define('purchase', {
    date: {
        type: Sequelize.DATE
    },
    number_of_tickets: {
        type: Sequelize.INTEGER
    },
    total_value: {
        type: Sequelize.DECIMAL
    },
    payment_status: {
        type: Sequelize.ENUM,
        values: ['approved', 'pending', 'denied', 'canceled']
    }
});

//Associações
Purchase.belongsTo(User);
Purchase.hasMany(Ticket);

module.exports = Purchase;
