import React from 'react';

import {
  Col, Card, CardTitle, Button,
} from 'reactstrap';

import './card-add-inf.scss';

const cards = [
  {
    id: 1,
    name: 'КИНОТЕАТР',
  },
  {
    id: 2,
    name: 'ФИЛЬМ',
  },
  {
    id: 3,
    name: 'ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ',
  },
  {
    id: 4,
    name: 'СЕАНС',
  },
];

export const CardAddInf = cards.map(({ id, name }) => (
  <Col key={id} className="p-5">
    <Card body className="p-2">
      <CardTitle className="p-3 text-center">
        <h4>{name}</h4>
      </CardTitle>
      <Button color="info">добавить</Button>
    </Card>
  </Col>
));

