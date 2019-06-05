const purchases = require('../model').purchases;
const tickets = require('../model').tickets;
const events = require('../model').events;

const {
    Event,
    Place
} = events;

const {
    Purchase
} = purchases;

const {
    Ticket,
    TicketType
} = tickets;

PurchaseServices = {};

PurchaseServices.getPurchases = userId => new Promise((resolve, reject) => {

    Purchase.findAll({
            where: {
                userId: userId
            },
            include: [{
                model: Ticket
            }]
        })
        .then(purchases => {

            if (purchases) {

                const promises = purchases.map(purchase => {

                    const plainPurchase = purchase.get({
                        plain: true
                    });
                    const eventId = plainPurchase.eventId;

                    return Event.findOne({
                        where: {
                            id: eventId
                        },
                        include: [{
                                model: Place
                            },
                            {
                                model: TicketType,
                            }
                        ]
                    }).then(event => {
                        plainPurchase.event = event.get({
                            plain: true
                        });
                        delete plainPurchase.eventId;
                        return plainPurchase;
                    })

                })

                Promise.all(promises).then(plainPurchases => {
                    resolve(plainPurchases);
                })

            } else {
                resolve(purchases);
            }

        })
        .catch(err => reject(err));

});

module.exports = PurchaseServices;
