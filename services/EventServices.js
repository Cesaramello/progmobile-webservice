const events = require('../model').events;
const tickets = require('../model').tickets;

const {
    Event,
    Place
} = events;

const {
    TicketType
} = tickets;

const EventServices = {};

EventServices.getEvents = () => new Promise((resolve, reject) => {

    Event.findAll({
            attributes: [
                'id',
                'name',
                'date',
                'description',
                'imageUrl'
            ],
            include: [{
                model: Place,
                as: 'place'
            }]
        })
        .then(events => resolve(events))
        .catch(err => {
            console.error(err);
            reject(err);
        })

});

EventServices.getEvent = eventId => new Promise((resolve, reject) => {

    if (isNaN(eventId)) {
        return (reject(`${eventId} não é um ID válido.`));
    }

    Event.findByPk(eventId, {
            attributes: [
                'id',
                'name',
                'date',
                'description',
                'imageUrl'
            ],
            include: [{
                model: Place,
                as: 'place'
            }]
        })
        .then(event => resolve(event))
        .catch(err => {
            console.error(err);
            reject(err);
        })

});

EventServices.getTicketTypes = eventId => new Promise((resolve, reject) => {

    EventServices.getEvent(eventId)
        .then(event => {
            if (event) {
                TicketType.findAll({
                        where: {
                            eventId: eventId
                        }
                    })
                    .then(ticketTypes => resolve(ticketTypes))
                    .catch(err => reject(err));
            } else {
                reject('Evento não encontrado.');
            }
        })
        .catch(err => {
            console.error(err);
            reject(err);
        })

});

module.exports = EventServices;
