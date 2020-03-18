import { handleActions } from 'redux-actions';

import {
  addNewFilter, removeFilter,
} from '../actions/film-filters';

const defaultState = [];

const addFilterReducer = (filters, newFilter) => {
  const existFilterIndex = filters.findIndex(filter => filter.type === newFilter.type);

  if (existFilterIndex === -1) {
    return [...filters, newFilter];
  }

  return [...filters.slice(0, existFilterIndex), newFilter, ...filters.slice(existFilterIndex + 1)];
};

const removeFilterReducer = (filters, { type }) => {
  const existFilterIndex = filters.findIndex(filter => filter.type === type);

  if (existFilterIndex === -1) {
    return [...filters];
  }

  return [...filters.slice(0, existFilterIndex), ...filters.slice(existFilterIndex + 1)];
};

export const filters = handleActions(
  {
    [addNewFilter]: (state, { payload: { filter } }) =>
      addFilterReducer(state, filter),
    [removeFilter]: (state, { payload: { filter } }) =>
      removeFilterReducer(state, filter),
  }, defaultState,
);
