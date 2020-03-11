import { films, cinemas } from '../constants';

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

