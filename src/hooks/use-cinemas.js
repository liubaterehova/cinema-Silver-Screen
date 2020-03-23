import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCinemas } from '../actions/cinemas';

export const useCinemas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemas());
  }, [dispatch]);

  return useSelector(({ cinemas }) => cinemas);
};
