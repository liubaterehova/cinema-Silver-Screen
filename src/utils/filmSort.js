
const films = [
  {
    id: 1,
    name: 'Форест Гамп',
    type: 'Драма',
    city: 'Минск',
    date: 'завтра',
    cinemaId: 1,
    cinema: 'Galileo',
    time: '19:00',
    hour: 19,
    emptySeats: 10,
  },
  {
    id: 2,
    name: 'Харли Квинн',
    type: 'Комедия',
    city: 'Минск',
    date: 'завтра',
    cinemaId: 2,
    cinema: 'Voka',
    time: '12:00',
    hour: 12,
    emptySeats: 10,

  },
  {
    id: 3,
    name: 'Офицер и шпион',
    type: 'Драма',
    city: 'Минск',
    date: 'послезавтра',
    cinemaId: 1,
    time: '17:00',
    hour: 17,
    emptySeats: 2,

  },
  {
    id: 4,
    name: 'Паразиты',
    type: 'Драма',
    city: 'Витебск',
    date: 'завтра',
    cinemaId: 2,
    time: '15:00',
    hour: 15,
    emptySeats: 1,
  },
];
const sortValues = [
  { sortType: 'city', value: 'Мнск' },
  { sortType: 'cinema', value: 'Voka' },
];

const sorted = [];

const tes = R.forEach((item) => {
  const result = sortValues.every(({ sortType, value }) => {
    const val = R.where({ [sortType]: R.equals(value) }, item);

    console.log({ [sortType]: value }, '');
    console.log(item, 'item');
    console.log(val, 'val');
  });

  if (result) {
    sorted.push(item);
  }
}, films);
