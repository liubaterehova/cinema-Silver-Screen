import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterFilms } from '../utils/filter-films';
import { getFilms } from '../actions/films';

export const useFilmFiltering = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  const films = useSelector(({ films: { films: f } }) => f);

  const filteredFilms = useSelector(({ filters }) => filterFilms(films, filters));

  return {
    films: filteredFilms,
  };
};
