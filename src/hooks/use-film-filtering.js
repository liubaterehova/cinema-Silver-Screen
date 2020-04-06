import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterFilms } from '../utils/filter-films';
import { loadFilms } from '../actions/films';

export const useFilmFiltering = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilms());
  }, [dispatch]);

  const filteredFilms = useSelector(({ films: { list }, filters }) => filterFilms(list, filters));

  return {
    films: filteredFilms,
  };
};
