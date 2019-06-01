const moment = require('moment');

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

const events = [{
        id: 1,
        name: 'Muse',
        date: moment('2019-10-09').toDate(),
        description: 'Um dos ícones do rock, multi platinados e vencedores do Grammy Awards, Muse terá mais uma parada no Brasil, dessa vez em São Paulo, como parte de sua turnê Simulation Theory World Tour 2019, no Allianz Parque, dia 09 de outubro.',
        imageUrl: '/images/event-banner_muse.jpg',
        placeId: 2 //Allianz Parque
    },
    {
        id: 2,
        name: 'Arctic Monkeys',
        date: moment('2019-08-20').toDate(),
        description: 'Em 2018 a banda lançou o seu sexto disco de estúdio, Tranquility Base Hotel & Casino, e mostrou uma sonoridade bem diferente do que costumava fazer até então. Repleto de referências aos Anos 60 e 70, o álbum tem um clima retrô que vai pescar tanto as influências musicais da época quanto as cinematográficas de nomes como Stanley Kubrick. É com esse show, mesclando canções do disco com clássicos do passado, que a banda vem ao Brasil e promete dar o que falar.',
        imageUrl: '/images/event-banner_arctic-monkeys.jpg',
        placeId: 3 //Parque Olímpico do Rio de Janeiro
    },
    {
        id: 3,
        name: 'Two Door Cinema Club',
        date: moment('2019-07-16').toDate(),
        description: 'Two Door Cinema Club é uma banda norte-irlandesa de rock. Formada em 2007, a banda é composta por Sam Halliday, Alex Trimble e Kevin Baird. Após lançarem a canção "Something Good Can Work" na internet, em 2009, a banda assinou com a gravadora francesa Kitsuné Music.',
        imageUrl: '/images/event-banner_two-door-cinema-club.jpg',
        placeId: 1 //Queen Elizabeth Olympic Park
    },
    {
        id: 4,
        name: 'Letrux',
        date: moment('2019-06-29').toDate(),
        description: 'Letícia Pinheiro de Novaes, cujo nome artístico é Letrux, é uma atriz, escritora, cantora, compositora e instrumentista brasileira. Nos anos 2000, juntamente com o multi-instrumentista e compositor Lucas Vasconcellos, formava a banda Letuce. Em 2016, o grupo encerrou suas atividades. Em 2017, ela lançou seu primeiro álbum solo, intitulado Letrux em Noite de Climão, que foi eleito o 10º melhor disco brasileiro de 2017 pela revista Rolling Stone Brasil.',
        imageUrl: '/images/event-banner_letrux.jpg',
        placeId: 4 //Centro de Convenções Rubens Gil de Camillo
    }  
];

module.exports = {
    users,
    places,
    events
};
