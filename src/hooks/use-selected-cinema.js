import { useSelector, useEffect, useDispatch } from 'react';
import { getCinemas } from '../actions/cinemas';

export const useSelectedCinema = (cinema) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getCinemas()), [dispatch]);

  const cinemas = useSelector(({ cinemas: { cinemas: c } }) => c);

  const { cinemaName, address } = cinemas[cinema];

  return {
    cinemaName,
    address,
  };
};
