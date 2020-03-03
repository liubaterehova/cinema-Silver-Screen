import React from 'react';

import { Row, Col } from 'reactstrap';

import { CinemasList } from '../cinemas/cinemas';

import './film-description.scss';

export const FilmDescription = () => (
  <div className="film-description">
    <Row>
      <Col xs="9">
        <Row className="align-items-center pb-5">
          <Col xs="3">
            <div className="film-img" />
          </Col>
          <Col xs="8">
            <h1>Харли Квинн</h1>
            <p>комедия</p>
          </Col>
        </Row>
        {CinemasList}
      </Col>
      <Col xs="3">
        <div className="name-film py-2">Харли квинн</div>
        <div>ляляля</div>
      </Col>
    </Row>
  </div>
);
