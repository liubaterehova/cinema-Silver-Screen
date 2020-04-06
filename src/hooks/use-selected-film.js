import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadFilm } from '../actions/film';

export const useSelectedFilm = (filmId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilm({ filmId }));
  }, [dispatch, filmId]);

  return useSelector(({ film }) => film);
};
