import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSessions } from '../actions/sessions';

export const useSessionsByFilm = (filmId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessions({ filmId }));
  }, [dispatch, filmId]);

  return useSelector(({ sessions }) => sessions);
};
