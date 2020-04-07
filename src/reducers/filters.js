import { handleActions } from 'redux-actions';

import { createFilter, removeFilter } from '../actions/film-filters';

const defaultState = [];

const addFilterReducer = (filters, newFilter) => {
  const filterIndex = filters.findIndex(filter => filter.type === newFilter.type);

  if (filterIndex === -1) {
    return [...filters, newFilter];
  }

  return [...filters.slice(0, filterIndex), newFilter, ...filters.slice(filterIndex + 1)];
};

const removeFilterReducer = (filters, { type }) => {
  const filterIndex = filters.findIndex(filter => filter.type === type);

  if (filterIndex === -1) {
    return [...filters];
  }

  return [...filters.slice(0, filterIndex), ...filters.slice(filterIndex + 1)];
};

export const filters = handleActions(
  {
    [createFilter]: (state, { payload: { filter } }) =>
      addFilterReducer(state, filter),
    [removeFilter]: (state, { payload: { filter } }) =>
      removeFilterReducer(state, filter),
  }, defaultState,
);
