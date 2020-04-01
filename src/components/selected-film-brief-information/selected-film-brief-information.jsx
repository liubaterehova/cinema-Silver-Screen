import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import './selected-film-brief-information.scss';

export const SelectedFilmBriefInformation = ({ session }) => {
  const { film, cinema, time } = session;
  const { name, poster } = film;
  const { label, address } = cinema;

  return (
    <div className="selected-film position-relative">
      <Row>
        <Col xs="1">
          <div
            style={{ backgroundImage: `url(${poster})` }}
            className="icon-film-img"
          />
        </Col>
        <Col xs="6">
          <Row>
            <h1>{name}</h1>
          </Row>
          <Row>{label} {address}</Row>
        </Col>
        <Col xs="5">
          {time}
        </Col>
      </Row>
    </div>
  );
};

SelectedFilmBriefInformation.propTypes = {
  session: PropTypes.shape({
    cinema: PropTypes.shape({
      label: PropTypes.string,
      address: PropTypes.string,
    }),
    film: PropTypes.shape({
      poster: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    time: PropTypes.string,
  }).isRequired,
};
