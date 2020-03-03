import React from 'react';

import { Row, Col } from 'reactstrap';

import { films } from '../../constants';
import { CardFilm } from '../card-film/card-film';

export const Films = () => (
  <div className="list-films w-100">
    <Row>
      {films.map(({
        name, type, id, src,
      }) => (
        <Col key={id}>
          <CardFilm name={name} type={type} src={src} />
        </Col>
      ))}
    </Row>
  </div>
);
