import React from 'react';

import {
  Col, Card, CardTitle, Button,
} from 'reactstrap';

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
  <Col key={id}>
    <Card body>
      <CardTitle>
        <h4>{name}</h4>
      </CardTitle>
      <Button color="info">добавить</Button>
    </Card>
  </Col>
));

