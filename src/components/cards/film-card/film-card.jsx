import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle,
} from 'reactstrap';

import './film-card.scss';

export const FilmCard = ({
  film: {
    name, type, src, id,
  },
}) => (
  <CardBody>
    <Card>
      <CardImg
        variant="top"
        alt="img"
        src={src}
        className="m-auto"
      />
      <CardBody className="text-center">
        <CardTitle className="my-5">{name}</CardTitle>
        <CardText>{type}</CardText>
        <Link to={`/films/${id}`}>
          Buy
        </Link>
      </CardBody>
    </Card>
  </CardBody>
);

FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    type: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
};
