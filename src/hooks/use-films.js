/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';

import {
  filterFilms,
} from '../actions/filters';

export const useFilms = () => {
  const filmsSelected = useSelector(state => state.filters.films);

  console.log(filmsSelected);
  const dispatch = useDispatch();

  const dispatchFilterFilms = (selectedMenu) => {
    dispatch(filterFilms({ selectedMenu }));
  };

  return ({
    dispatchFilterFilms,
    filmsSelected,
  });
};
