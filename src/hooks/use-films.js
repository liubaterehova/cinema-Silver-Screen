import { useSelector, useDispatch } from 'react-redux';

import {
  filterFilms,
} from '../actions/filters';

export const useFilms = (selectedMenu) => {
  const filmsSelected = useSelector(state => state.filters.films);

  const dispatch = useDispatch();

  const dispatchFilterFilms = () => {
    dispatch(filterFilms({ selectedMenu }));
  };

  return ({
    dispatchFilterFilms,
    filmsSelected,
  });
};
