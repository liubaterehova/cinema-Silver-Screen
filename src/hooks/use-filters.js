import { useSelector, useDispatch } from 'react-redux';

import {
  addNewFilter, removeFilter,
} from '../actions/film-filters';

export const useFilters = () => {
  const filters = useSelector(({ filters: f }) => f);

  const dispatch = useDispatch();

  const dispatchAddNewFilter = (filter) => dispatch(addNewFilter({ filter }));
  const dispatchRemoveFilter = (filter) => dispatch(removeFilter({ filter }));

  return {
    filters,
    dispatchAddNewFilter,
    dispatchRemoveFilter,
  };
};
