const model = require('../model');

const {
    User
} = model.users;

const {
    Place
} = model.events;

const sampleData = require('./sample-data');
const {
    users: sampleUsers,
    places: samplePlaces
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

samplePlaces.map(place => {

    Place.create(place)
        .then(createdPlace => {
            console.log(JSON.stringify(createdPlace, null, 4));
        })
        .catch(err => {
            console.error('Erro ao criar o Place', place, err);
        })
        
});
