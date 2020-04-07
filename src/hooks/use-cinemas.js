import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadCinemasRequest } from '../actions/cinemas';

export const useCinemas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCinemasRequest());
  }, [dispatch]);

  return useSelector(({ cinemas }) => cinemas);
};
