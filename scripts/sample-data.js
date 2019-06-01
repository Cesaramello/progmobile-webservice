const users = [{
        id: 1,
        login: 'elmo',
        email: 'elmo@provedor.com ',
        name: 'Elmo Junior Ficagna',
        password: 'teste'
    },
    {
        id: 2,
        login: 'felipe',
        email: 'felipe@provedor.com ',
        name: 'Felipe Caggi',
        password: 'teste'
    },
    {
        id: 3,
        login: 'hueligton',
        email: 'hueligton@provedor.com ',
        name: 'Hueligton Pereira de Melo',
        password: 'teste'
    }
];

const places = [{
        id: 1,
        name: 'Queen Elizabeth Olympic Park',
        city: 'London',
        state: 'GL',
        country: 'UK',
        address: 'Olympic Park, London E20 2ZQ',
        latitude: 51.543363,
        longitude: -0.016533
    },
    {
        id: 2,
        name: 'Allianz Parque',
        city: 'São Paulo',
        state: 'SP',
        country: 'BR',
        address: 'Av. Francisco Matarazzo, 1705 - Água Branca, 05001-200',
        latitude: -23.527406,
        longitude: -46.678542
    },
    {
        id: 3,
        name: 'Parque Olímpico do Rio de Janeiro',
        city: 'Rio de Janeiro',
        state: 'RJ',
        country: 'BR',
        address: 'Av. Embaixador Abelardo Bueno, 3401 - Barra da Tijuca, 22775-039',
        latitude: -22.976709,
        longitude: -43.394566
    },
    {
        id: 4,
        name: 'Centro de Convenções Rubens Gil de Camillo',
        city: 'Campo Grande',
        state: 'MS',
        country: 'BR',
        address: 'Av. Waldir dos Santos Pereira, s/n - Parque dos Poderes, 79031-330',
        latitude: -20.449364,
        longitude: -54.555582
    }
];

module.exports = {
    users,
    places
};
