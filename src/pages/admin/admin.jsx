import React from 'react';

import { Row } from 'reactstrap';

import { cards } from '../../components/cards-add-inf/cards-add-inf';

import './admin.scss';
import { CardAdmin } from '../../components/card-admin/card-admin';

export const AdminPage = () => (
  <Row>
    {cards.map(({
      id, name, modalId, modalComponent,
    }) => (
      <CardAdmin key={id} id={id} name={name} modalId={modalId} modalComponent={modalComponent} />
    ))}
  </Row>
);

