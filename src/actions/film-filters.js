import { createActions } from 'redux-actions';

export const {
  createFilter,
  removeFilter,
} = createActions(
  'CREATE_FILTER',
  'REMOVE_FILTER',
);
