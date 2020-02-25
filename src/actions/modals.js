import { createActions } from 'redux-actions';

export const {
  openModal,
  closeAllModals,
  toggleModal,
} = createActions(
  'OPEN_MODAL',
  'CLOSE_ALL_MODALS',
  'TOGGLE_MODAL',
);
