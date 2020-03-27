import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './film-description.scss';

export const FilmDescription = ({
  name, type, description, poster, sessions,
}) => (
  <div className="film-description">
    <Row>
      <Col xs="9">
        <Row className="align-items-center pb-5">
          <Col xs="3">
            <div
              style={{ backgroundImage: `url(${poster})` }}
              className="film-img"
            />
          </Col>
          <Col xs="8">
            <h1>{name}</h1>
            <p>{type}</p>
          </Col>
        </Row>
        { sessions.map(({ cinema: { label, address }, time, _id }) => (
          <Row key={_id} className="cinema position-relative py-5">
            <Col>
              <h4>{label}</h4>
              {address}
            </Col>
            <Col>
              <Link to={`/select-seat/${_id}`} className="time p-3">
                {time}
              </Link>
            </Col>
          </Row>
        ))}
      </Col>
      <Col xs="3">
        <div className="name-film py-2">{name}</div>
        <div>{description}</div>
      </Col>
    </Row>
  </div>
);

FilmDescription.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  poster: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
