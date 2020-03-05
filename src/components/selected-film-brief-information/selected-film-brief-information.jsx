import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import './selected-film-brief-information.scss';

export const SelectedFilmBriefInformation = ({
  name, src, address, cinemaName, time,
}) => (
  <div className="selected-film position-relative">
    <Row>
      <Col xs="1">
        <div
          style={{ backgroundImage: `url(${src})` }}
          className="icon-film-img"
        />
      </Col>
      <Col xs="6">
        <Row>
          <h1>{name}</h1>
        </Row>
        <Row>{cinemaName} {address}</Row>
      </Col>
      <Col xs="5">
        {time}
      </Col>
    </Row>
  </div>
);

SelectedFilmBriefInformation.propTypes = {
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cinemaName: PropTypes.string.isRequired,
};
