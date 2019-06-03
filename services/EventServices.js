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
                    model: Place
                },
                {
                    model: TicketType,
                }
            ]
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
                },
                {
                    model: TicketType,
                }
            ]
        })
        .then(event => resolve(event))
        .catch(err => {
            console.error(err);
            reject(err);
        })

});

module.exports = EventServices;
