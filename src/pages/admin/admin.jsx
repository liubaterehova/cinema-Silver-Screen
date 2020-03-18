import React from 'react';
import { Row } from 'reactstrap';

import { cards } from '../../components/cards/cards-add-inf/cards-add-inf';
import { CardAdmin } from '../../components/cards/card-admin/card-admin';

import './admin.scss';

export const AdminPage = () => (
  <Row className="row">
    {cards.map(({
      id, name, modalId, modalComponent,
    }) => (
      <CardAdmin key={id} id={id} name={name} modalId={modalId} modalComponent={modalComponent} />
    ))}
  </Row>
);

