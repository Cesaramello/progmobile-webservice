const model = require('../model');
const {
    User
} = model.users;

const sampleData = require('./sample-data');
const {
    users: sampleUsers
} = sampleData;

sampleUsers.map(user => {

    User.create(user)
        .then(createdUser => {
            console.log(JSON.stringify(createdUser, null, 4));
        })
        .catch(err => {
            console.error('Erro ao criar o usuário', user, err);
        })

});
