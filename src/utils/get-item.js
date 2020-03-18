import { films, cinemas } from '../constants';

export const getFilm = (filmId) => {
  const {
    id, name, type, cinema, time, src, description,
  } = films.find((element) => element.id === Number(filmId));

  return {
    id,
    description,
    name,
    type,
    time,
    src,
    cinema,
  };
};

export const getCinema = (cinema) => {
  const { cinemaName, address } = cinemas[cinema];

  return {
    cinemaName,
    address,
  };
};
