import { handleActions } from 'redux-actions';

import { openModal, toggleModal, closeAllModals } from '../actions/modals';

const defaultState = {};

export const modals = handleActions(
  {
    [openModal]: (state, { payload: { modalId } }) => ({
      ...state,
      [modalId]: true,
    }),
    [toggleModal]: (state, { payload: { modalId } }) => ({
      ...state,
      [modalId]: !state[modalId],
    }),
    [closeAllModals]: () => defaultState,
  },
  defaultState,
);
