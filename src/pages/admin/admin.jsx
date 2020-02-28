import React from 'react';

import {
  Col, Card, Row, CardTitle, Button,
} from 'reactstrap';

import { cards } from '../../components/cards-add-inf/cards-add-inf';

// import { ModalAddCinema } from '../modals/modal-add-cinema';
// import { useModals } from '../../hooks/use-modals';

import './admin.scss';

export const AdminPage = () => (
  <div>
    <Row>
      {cards.map(({ id, name }) => (
        <Col key={id} className="p-5">
          <Card body className="p-2">
            <CardTitle className="p-3 text-center">
              <h4>{name}</h4>
            </CardTitle>
            <Button color="info" onClick={() => alert('1')}>добавить</Button>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);
