//Importa a conexão Sequelize com o DB
const sequelize = require('../../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Definição do Sequelize Model
const Place = sequelize.define('place', {
    name: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    latitude: {
        type: Sequelize.DECIMAL
    },
    longitude: {
        type: Sequelize.DECIMAL
    }
})

module.exports = Place;
