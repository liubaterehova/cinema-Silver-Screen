import { useSelector, useDispatch } from 'react-redux';

import {
  addNewFilter, removeFilter,
} from '../actions/film-filters';
import { films } from '../constants';
import { filterFilms } from '../utils/filmSort';

export const useFilms = () => {
  const filteredFilms = useSelector(({ filters }) => filterFilms(films, filters));

  const dispatch = useDispatch();

  const dispatchAddNewFilter = (filter) => dispatch(addNewFilter({ filter }));
  const dispatchRemoveFilter = (filter) => dispatch(removeFilter({ filter }));

  return {
    dispatchAddNewFilter,
    dispatchRemoveFilter,
    films: filteredFilms,
  };
};
