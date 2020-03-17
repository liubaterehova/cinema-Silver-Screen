import { useSelector, useDispatch } from 'react-redux';

import {
  addNewFilter,
} from '../actions/film-filters';

export const useFilms = () => {
  const selectedFilters = useSelector(({ filters }) => filters);

  const dispatch = useDispatch();

  const dispatchAddNewFilter = (filter) => dispatch(addNewFilter({ filter }));

  return {
    dispatchAddNewFilter,
    selectedFilters,
  };
};
