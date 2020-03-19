import { FILMS, CINEMAS } from '../constants';

export const getFilm = (filmId) => {
  const {
    id, name, type, cinema, time, src, description,
  } = FILMS.find((element) => element.id === +filmId);

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
  const { cinemaName, address } = CINEMAS[cinema];

  return {
    cinemaName,
    address,
  };
};
