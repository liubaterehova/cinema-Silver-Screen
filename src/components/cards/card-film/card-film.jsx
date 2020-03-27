import React from 'react';

import { PropTypes } from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button,
} from 'reactstrap';

export const CardFilm = ({
  name, type, poster,
}) => (
  <CardBody>
    <Card>
      <CardImg variant="top" alt="img" src={poster} />
      <CardBody className="text-center">
        <CardTitle className="my-5">{name}</CardTitle>
        <CardText>
          {type}
        </CardText>
        <Button variant="primary">Купить</Button>
      </CardBody>
    </Card>
  </CardBody>
);

CardFilm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
