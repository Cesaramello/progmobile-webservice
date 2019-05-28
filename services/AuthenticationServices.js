//INSEGURO - Não usar para produção
//[TODO] Substituir por JWT ou OAuth

const crypto = require('crypto');

const users = require('../model').users;

const {
    User,
    Token
} = users;

const AuthenticationServices = {};

AuthenticationServices.authenticate = (login, password) => new Promise((resolve, reject) => {

    User.findOne({
            where: {
                login: login,
                password: password
            },
            attributes: [
                'id',
                'login',
                'email',
                'name',
                'imageFile'
            ],
        })
        .then(user => {
            if (user) {
                crypto.randomBytes(16, (err, buffer) => {
                    Token.create({
                            key: buffer.toString('hex'),
                            userId: user.id,
                            active: true
                        })
                        .then(token => {
                            resolve({
                                user: user,
                                token: token.key
                            })
                        })
                });
            } else {
                reject('Usuário e/ou senha inválidos.');
            }
        })
        .catch(err => {
            reject(err);
        })

});

AuthenticationServices.validate = (token, userId) => new Promise((resolve, reject) => {
    Token.findOne({
            where: {
                key: token,
                userId: userId
            }
        })
        .then(token => {
            if (token) {
                User.findByPk(token.userId)
                    .then(user => {
                        resolve(user);
                    })
            } else {
                reject('Token inválido');
            }
        })
        .catch(err => {
            reject(err);
        })
});

AuthenticationServices.deactivate = (token, userId) => new Promise((resolve, reject) => {

    Token.findOne({
            where: {
                key: token,
                userId: userId
            }
        })
        .then(token => {
            if (token) {
                Token.destroy({
                        where: {
                            id: token.id
                        }
                    })
                    .then(removedToken => {
                        resolve(removedToken);
                    })
            } else {
                resolve(null);
            }
        })
        .catch(err => {
            reject(err);
        })
});

module.exports = AuthenticationServices;
