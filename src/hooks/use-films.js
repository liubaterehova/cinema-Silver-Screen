import { useSelector } from 'react-redux';

import { films } from '../constants';
import { filterFilms } from '../utils/filter-films';

export const useFilms = () => {
  const filteredFilms = useSelector(({ filters }) => filterFilms(films, filters));

  return {
    films: filteredFilms,
  };
};
