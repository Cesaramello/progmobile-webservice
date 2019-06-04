const users = require('../model').users;

const {
    User
} = users;

const UserServices = {};

UserServices.createUser = user => new Promise((resolve, reject) => {

    User.create(user)
        .then(user => resolve(user))
        .catch(err => {
            if (err) {
                if (err.errors) {
                    const errorsMessages = {}
                    errorsMessages.errors = err.errors.map(error => error.message);
                    return (reject(errorsMessages));
                }
            }
            reject(err);
        });

});

module.exports = UserServices;
