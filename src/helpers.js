import {
  films, cinemas, CITY_CODE, CINEMA_CODE, DATE_CODE,
} from './constants';

export const getFilm = (filmId) => {
  const {
    id, name, type, cinemaId, time, src, description,
  } = films.find((element) => element.id === Number(filmId));

  return {
    id,
    description,
    name,
    type,
    time,
    src,
    cinemaId,
  };
};

export const getCinema = (cinemaId) => {
  const { cinemaName, address } = cinemas[cinemaId];

  return {
    cinemaName,
    address,
  };
};

export const sortFilmsByDate = (filmsArr, date) =>
  (!date || date.code === DATE_CODE.ALL)
    ? filmsArr
    : filmsArr.filter(film =>
      film.dateCode === date.code);

export const sortFilmsByCity = (filmsArr, city) =>
  (!city || city.code === CITY_CODE.ALL)
    ? filmsArr
    : filmsArr.filter(film =>
      film.cityCode === city.code);

export const sortFilmsByCinema = (filmsArr, cinema) =>
  (!cinema || cinema.code === CINEMA_CODE.ALL)
    ? filmsArr
    : filmsArr.filter(film =>
      cinemas[film.cinemaId].cinemaCode === cinema.code);

export const sortFilmsByTime = (filmsArr, selectedTime) =>
  (!selectedTime)
    ? filmsArr
    : filmsArr.filter(film =>
      (film.hour > selectedTime.from) && (film.hour <= selectedTime.to));

export const sortFilmsBySeats = (filmsArr, seats) =>
  (!seats)
    ? filmsArr
    : filmsArr.filter(film =>
      (film.emptySeats >= seats.number));

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
