import { ModalAddCinema } from '../modals/modal-add-cinema';
import { ModalAddFilm } from '../modals/modal-add-film';
import { ModalAddServices } from '../modals/modal-add-services';
import { ModalAddSession } from '../modals/modal-add-session';

export const cards = [
  {
    id: 1,
    name: 'КИНОТЕАТР',
    modalId: 'addCinema',
    modalComponent: ModalAddCinema,
  },
  {
    id: 2,
    name: 'ФИЛЬМ',
    modalId: 'addFilm',
    modalComponent: ModalAddFilm,
  },
  {
    id: 3,
    name: 'ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ',
    modalId: 'addServices',
    modalComponent: ModalAddServices,
  },
  {
    id: 4,
    name: 'СЕАНС',
    modalId: 'addSession',
    modalComponent: ModalAddSession,
  },
];
