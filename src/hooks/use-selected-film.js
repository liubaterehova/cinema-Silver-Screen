import { useSelector } from 'react-redux';

export const useSelectedFilm = (filmId) => {
  const films = useSelector(({ films: { films: f } }) => f);

  return films.find((element) => element.id === +filmId);
};
