const model = require('../model');

const {
    Place
} = model.tickets;

PlaceServices.createPlace = place => new Promise((resolver, reject) => {

    if(place == null){
        console.error('PlaceServices.createPlace: received null');
        return(reject('O objeto recebido não é um Place válido.'));
    }

    Place.create(place)
        .then(createdPlace => {
            resolve(createdPlace);
        })
        .catch(err => {
            console.error(err);
            reject(err);
        });
        
});
