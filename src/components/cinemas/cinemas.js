import React from 'react';

import { Row, Col } from 'reactstrap';

const cinemas = [
  {
    id: 1,
    name: 'Silver Screen cinemas в ТРЦ "Galileo',
    address: 'г.Минск, ул. Бобруйская, 6',
    time: '19:25',
  },
  {
    id: 2,
    name: 'VOKA CINEMA by SilverScreen в ТРЦ Dana Mall',
    address: 'г.Минск, ул. Петра Мстиславца, 11',
    time: '19:25',
  },
];

export const CinemasList = cinemas.map(({
  id, name, address, time,
}) => (
  <Row className="cinema py-5" key={id}>
    <Col>
      <h4>{name}</h4>
      {address}
    </Col>
    <Col>
      <div className="time p-3">{time}</div>
    </Col>
  </Row>
));
