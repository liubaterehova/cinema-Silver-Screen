import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './film-description.scss';

export const FilmDescription = ({
  name, type, description, src, cinemaName, address, time, id,
}) => (
  <div className="film-description">
    <Row>
      <Col xs="9">
        <Row className="align-items-center pb-5">
          <Col xs="3">
            <div
              style={{ backgroundImage: `url(${src})` }}
              className="film-img"
            />
          </Col>
          <Col xs="8">
            <h1>{name}</h1>
            <p>{type}</p>
          </Col>
        </Row>
        <Row className="cinema position-relative py-5">
          <Col>
            <h4>{cinemaName}</h4>
            {address}
          </Col>
          <Col>
            <Button className="time p-3">
              <Link to={`/select-seat/${id}`}>
                {time}
              </Link>
            </Button>
          </Col>
        </Row>
      </Col>
      <Col xs="3">
        <div className="name-film py-2">{name}</div>
        <div>{description}</div>
      </Col>
    </Row>
  </div>
);

FilmDescription.propTypes = {
  id: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  cinemaName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
