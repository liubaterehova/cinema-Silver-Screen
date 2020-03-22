import { useSelector } from 'react';

export const useSelectedFilm = (filmId) => {
  const films = useSelector(({ films: { films: f } }) => f);
  const {
    id, name, type, cinema, time, src, description,
  } = films.find((element) => element.id === +filmId);

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
