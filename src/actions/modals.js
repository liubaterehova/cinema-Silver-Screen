import { createActions } from 'redux-actions';

export const {
  openModal,
  closeAllModals,
  toggleModal,
  addCinema,
  addFilm,
} = createActions(
  'OPEN_MODAL',
  'CLOSE_ALL_MODALS',
  'TOGGLE_MODAL',
  'ADD_CINEMA',
  'ADD_FILM',
);
