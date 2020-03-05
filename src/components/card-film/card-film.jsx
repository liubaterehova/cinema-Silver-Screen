import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button,
} from 'reactstrap';

export const CardFilm = ({
  name, type, src, id,
}) => (
  <CardBody>
    <Card>
      <CardImg
        variant="top"
        alt="img"
        src={src}
      />
      <CardBody className="text-center">
        <CardTitle className="my-5">{name}</CardTitle>
        <CardText>{type}</CardText>
        <Button>
          <Link to={`/films/${id}`}>
            Купить
          </Link>
        </Button>
      </CardBody>
    </Card>
  </CardBody>
);

CardFilm.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
