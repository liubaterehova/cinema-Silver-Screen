import { useSelector } from 'react-redux';

import { FILMS } from '../constants';
import { filterFilms } from '../utils/filter-films';

export const useFilmFiltering = () => {
  const filteredFilms = useSelector(({ filters }) => filterFilms(FILMS, filters));

  return {
    films: filteredFilms,
  };
};
