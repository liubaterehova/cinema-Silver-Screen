import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadSessionsRequest } from '../actions/sessions';

export const useSessionsByFilm = (filmId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSessionsRequest({ filmId }));
  }, [dispatch, filmId]);

  return useSelector(({ sessions }) => sessions);
};
