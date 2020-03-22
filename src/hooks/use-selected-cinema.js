import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCinemas } from '../actions/cinemas';

export const useSelectedCinema = (cinemaCode) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemas());
  }, [dispatch]);

  const cinemas = useSelector(({ cinemas: { cinemas: c } }) => c);

  return cinemas.find((element) => element.cinemaCode === cinemaCode);
};
