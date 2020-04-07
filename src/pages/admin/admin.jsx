import React from 'react';
import { Row } from 'reactstrap';

import { AddCinemaModal } from '../../components/modals/add-cinema-modal';
import { AddFilmModal } from '../../components/modals/add-film-modal';
import { AddSessionModal } from '../../components/modals/add-session-modal';
import { AdminCard } from '../../components/cards/admin-card/admin-card';

import './admin.scss';

const cards = [
  {
    id: 1,
    name: 'CINEMA',
    modalId: 'addCinema',
    modalComponent: AddCinemaModal,
  },
  {
    id: 2,
    name: 'FILM',
    modalId: 'addFilm',
    modalComponent: AddFilmModal,
  },
  {
    id: 4,
    name: 'SESSION',
    modalId: 'addSession',
    modalComponent: AddSessionModal,
  },
];

export const Admin = () => (
  <Row className="row">
    {cards.map(({
      id, name, modalId, modalComponent,
    }) => (
      <AdminCard
        key={id}
        id={id}
        name={name}
        modalId={modalId}
        modalComponent={modalComponent}
      />
    ))}
  </Row>
);
