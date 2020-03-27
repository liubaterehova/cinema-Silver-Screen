import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle,
} from 'reactstrap';

import './card-film.scss';

export const CardFilm = ({
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
        <Link to={`/film/${_id}`}>
          Buy
        </Link>
      </CardBody>
    </Card>
  </CardBody>
);

CardFilm.propTypes = {
  film: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    poster: PropTypes.string,
  }).isRequired,
};
