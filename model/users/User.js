//Importa a conexão Sequelize com o DB
const sequelize = require('../../config/sequelize-connection');

//Biblioteca de Data types do Sequelize
const Sequelize = sequelize.Sequelize;

//Depêndências para associações
const Token = require('./Token');

//Definição do Sequelize Model
const User = sequelize.define('user',{
    login: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    imageFile: {
        type: Sequelize.STRING
    }
})

//Associações
User.hasMany(Token);

module.exports = User;
