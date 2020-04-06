import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadCinemas } from '../actions/cinemas';

export const useCinemas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCinemas());
  }, [dispatch]);

  return useSelector(({ cinemas }) => cinemas);
};
