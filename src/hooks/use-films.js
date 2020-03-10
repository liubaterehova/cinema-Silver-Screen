import { useSelector, useDispatch } from 'react-redux';

import {
  filterFilms,
} from '../actions/filters';

export const useFilms = () => {
  const filmsSelected = useSelector(state => state.filters.sortedFilms);

  const dispatch = useDispatch();

  const dispatchFilterFilms = (selectedMenu) => {
    dispatch(filterFilms({ selectedMenu }));
  };

  return ({
    dispatchFilterFilms,
    filmsSelected,
  });
};
