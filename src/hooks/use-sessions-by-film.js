import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadSessions } from '../actions/sessions';

export const useSessionsByFilm = (filmId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSessions({ filmId }));
  }, [dispatch, filmId]);

  return useSelector(({ sessions }) => sessions);
};
