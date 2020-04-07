import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { createFilter, removeFilter } from '../actions/film-filters';

export const useFilters = () => {
  const filters = useSelector(({ filters: f }) => f);

  const dispatch = useDispatch();

  const dispatchAddNewFilter = useCallback((filter) => dispatch(createFilter({ filter })), [dispatch]);
  const dispatchRemoveFilter = useCallback((filter) => dispatch(removeFilter({ filter })), [dispatch]);

  return {
    filters,
    dispatchAddNewFilter,
    dispatchRemoveFilter,
  };
};
