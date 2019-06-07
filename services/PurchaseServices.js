//Importa a conexão Sequelize com o DB
const sequelize = require('../config/sequelize-connection');

const purchases = require('../model').purchases;
const tickets = require('../model').tickets;
const events = require('../model').events;

const checkJson = require('../util/checkJSON');

const crypto = require('crypto');

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

    if (isNaN(purchaseId)) {
        return (reject(`${eventId} não é um ID válido.`));
    }

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
        .catch(err => reject(err));

});

PurchaseServices.createPurchase = (userId, eventId, tickets) => new Promise((resolve, reject) => {

    let ticketsList;

    if (checkJson(tickets)) {
        ticketsList = JSON.parse(tickets);
        if (ticketsList.length == 0) {
            return (reject('A compra deve ter no mínimo um ingresso.'));
        }
    } else {
        return (reject('Os tickets recebidos não são um JSON bem formado.'));
    }

    if (eventId && !isNaN(eventId)) {

        Event.findOne({
                where: {
                    id: eventId
                },
                include: [{
                        model: Place,
                    },
                    {
                        model: TicketType,
                    }
                ]
            })
            .then(event => {

                if (event) {

                    const plainEvent = event.get({
                        plain: true
                    });
                    const eventTicketTypes = plainEvent.ticket_types;
                    const toCreateTickets = [];
                    let totalValue = 0;

                    ticketsList.map(currentTicket => {

                        if (currentTicket.ticketTypeId && !isNaN(currentTicket.ticketTypeId)) {

                            const ticketType = eventTicketTypes.find((ticketType) => {
                                return ticketType.id == currentTicket.ticketTypeId;
                            }) || null;

                            if (ticketType) {
                                if (currentTicket.amount && !isNaN(currentTicket.amount)) {

                                    let i = 0;

                                    while (i < currentTicket.amount) {
                                        formedTicket = {
                                            validation_hash: crypto.randomBytes(16).toString('hex'),
                                            ticketTypeId: ticketType.id
                                        }

                                        console.log(formedTicket);

                                        totalValue += ticketType.price;
                                        toCreateTickets.push(formedTicket);
                                        i++;
                                    }

                                } else {
                                    return (reject('Existe um problema na quantidade de ingressos informada. ' + JSON.stringify(currentTicket)));
                                }

                            } else {
                                return (reject('O ticketTypeId não pertence ao evento informado. ' + JSON.stringify(currentTicket)));
                            }

                        } else {
                            return (reject('Existe um problema no ticketTypeID informado. ' + JSON.stringify(currentTicket)));
                        }
                    });

                    return sequelize.transaction(t => {

                        return Purchase.create({
                                date: Date.now(),
                                total_value: totalValue,
                                payment_status: 'approved',
                                eventId: event.id,
                                userId: userId
                            }, {
                                transaction: t
                            })
                            .then(purchase => {
                                const promises = toCreateTickets.map((ticket) => {
                                    return purchase.createTicket(ticket, {
                                        transaction: t
                                    });
                                })
                                return Promise.all(promises).then(tickets => purchase);
                            });
                    }).then(purchase => {
                        Purchase.findOne({
                            where: {
                                id: purchase.id
                            },
                            include: [{
                                model: Ticket
                            }]
                        }).then(completePurchase => {
                            joinPurchaseEvent(completePurchase)
                                .then(plainPurchase => resolve(plainPurchase));
                        })
                    }).catch(err => {
                        return (reject(err));
                    });

                } else {
                    return (reject('O evento informado não foi encontrado'));
                }
            })
            .catch(err => {
                return (reject(err));
            })

    } else {
        return (reject('Um eventId válido precisa ser informado'));
    }


});

module.exports = PurchaseServices;
