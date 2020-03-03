import React from 'react';

import { Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';

import './selected-film-brief-inf.scss';

export const SelectedFilmBriefInf = () => {
  const { filmId } = useParams();

  return (
    <div className="position-relative">
      <Row>
        <Col xs="1">
          <div className="icon-film-img" />
        </Col>
        <Col xs="6">
          <Row>
            <h1>{filmId}</h1>
          </Row>
          <Row>Silver Screen</Row>
        </Col>
        <Col xs="5">
          сегодня 3.02 / 14:00
        </Col>
      </Row>
    </div>
  );
};

