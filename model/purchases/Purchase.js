//Importa a conexão Sequelize com o DB
const sequelize = require('../../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Depêndências para associações
const User = require('../users/User');
const Ticket = require('../tickets/Ticket');
const Event = require('../events/Event');

//Definição do Sequelize Model
const Purchase = sequelize.define('purchase', {
    date: {
        type: Sequelize.DATE
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
Purchase.belongsTo(Event);
Purchase.hasMany(Ticket);

module.exports = Purchase;
