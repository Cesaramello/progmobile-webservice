//Importa a conexão com o Sequelize DB
const sequelize = require('../../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

const Token = sequelize.define('token',{
    key: {
        type: Sequelize.STRING
    },
    created: {
        type: Sequelize.DATE
    },
    expire: {
        type: Sequelize.DATE
    },
    browser_hash: {
        type: Sequelize.DATE
    },
    active: {
        type: Sequelize.BOOLEAN
    }
})

module.exports = Token;
