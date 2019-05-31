//Importa a conexão Sequelize com o DB
const sequelize = require('../../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Depêndências para associações
const Place = require('./Place');

//Definição do Sequelize Model
const Event = sequelize.define('event', {
    name: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    description: {
        type: Sequelize.TEXT
    },
    imageUrl: {
        type: Sequelize.STRING
    }
})

//Associações
Event.belongsTo(Place);

module.exports = Event;
