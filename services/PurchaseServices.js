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

const joinPurchaseEvent = purchase => {

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

};

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
                Promise.all(purchases.map(joinPurchaseEvent))
                    .then(plainPurchases => {
                        resolve(plainPurchases);
                    })

            } else {
                resolve(purchases);
            }

        })
        .catch(err => reject(err));

});

PurchaseServices.getPurchase = (userId, purchaseId) => new Promise((resolve, reject) => {

    console.log(userId, purchaseId);

    Purchase.findOne({
        where: {
            userId: userId,
            id: purchaseId
        },
        include: [{
            model: Ticket
        }]
    }).then(purchase => {
        

        if (purchase) {
            joinPurchaseEvent(purchase)
                .then(plainPurchase => resolve(plainPurchase));
        } else {
            resolve(purchase);
        }

    })


});

module.exports = PurchaseServices;
