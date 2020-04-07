import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody, CardTitle,
} from 'reactstrap';

import './film-card.scss';

export const FilmCard = ({
  film: {
    name, type, poster, _id,
  },
}) => (
  <CardBody>
    <Card>
      <CardImg
        variant="top"
        alt="img"
        src={poster}
        className="m-auto"
      />
      <CardBody className="text-center">
        <CardTitle className="my-5">{name}</CardTitle>
        <CardText>{type}</CardText>
        <Link to={`/films/${_id}`}>
          Buy
        </Link>
      </CardBody>
    </Card>
  </CardBody>
);

FilmCard.propTypes = {
  film: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    poster: PropTypes.string,
  }).isRequired,
};
