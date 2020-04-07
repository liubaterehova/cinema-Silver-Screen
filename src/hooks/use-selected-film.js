import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadFilmRequest } from '../actions/film';

export const useSelectedFilm = (filmId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilmRequest({ filmId }));
  }, [dispatch, filmId]);

  return useSelector(({ film }) => film);
};
