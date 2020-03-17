/* eslint-disable no-console */
import { handleActions } from 'redux-actions';

import {
  addNewFilter,
} from '../actions/film-filters';

const defaultState = {
  filters: [],
};

const addFilter = (filters, newFilter) => {
  const existFilterIndex = filters.findIndex(filter => filter.type === newFilter.type);

  if (existFilterIndex === -1) {
    return [...filters, newFilter];
  }

  return [...filters.slice(0, existFilterIndex), newFilter, ...filters.slice(existFilterIndex + 1)];
};

export const filters = handleActions(
  {
    [addNewFilter]: (state, { payload: { filter } }) => ({
      ...state, filters: addFilter([...state.filters], filter),
    })
    ,
  }, defaultState,
);
