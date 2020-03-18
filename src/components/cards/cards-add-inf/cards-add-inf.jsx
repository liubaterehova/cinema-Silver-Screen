import { ModalAddCinema } from '../../modals/modal-add-cinema';
import { ModalAddFilm } from '../../modals/modal-add-film';
import { ModalAddSession } from '../../modals/modal-add-session';

export const cards = [
  {
    id: 1,
    name: 'CINEMA',
    modalId: 'addCinema',
    modalComponent: ModalAddCinema,
  },
  {
    id: 2,
    name: 'FILM',
    modalId: 'addFilm',
    modalComponent: ModalAddFilm,
  },
  {
    id: 4,
    name: 'SESSION',
    modalId: 'addSession',
    modalComponent: ModalAddSession,
  },
];
