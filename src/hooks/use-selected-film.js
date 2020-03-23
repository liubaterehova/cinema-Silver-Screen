import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilm } from '../actions/film';

export const useSelectedFilm = (filmId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilm({ filmId }));
  }, [dispatch, filmId]);

  return useSelector(({ film }) => film);
};
