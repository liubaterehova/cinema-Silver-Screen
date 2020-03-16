import { useSelector, useDispatch } from 'react-redux';

import {
  filterFilms,
} from '../actions/film-filters';

export const useFilms = () => {
  const selectedFilms = useSelector(({ filters: { sortedFilms } }) => sortedFilms);

  const dispatch = useDispatch();

  const dispatchFilterFilms = (selectedMenu) => {
    dispatch(filterFilms({ selectedMenu }));
  };

  return {
    dispatchFilterFilms,
    selectedFilms,
  };
};
