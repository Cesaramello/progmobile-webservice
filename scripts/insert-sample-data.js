const model = require('../model');

//Models
const {
    User
} = model.users;

const {
    Place,
    Event
} = model.events;

//Sampel Data
const sampleData = require('./sample-data');
const {
    users: sampleUsers,
    places: samplePlaces,
    events: sampleEvents
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

sampleEvents.map(event => {

    Event.create(event)
        .then(createdEvent => {
            console.log(JSON.stringify(createdEvent, null, 4));
        })
        .catch(err => {
            console.error('Erro ao criar o Event', event, err);
        })

})
