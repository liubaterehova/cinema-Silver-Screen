import React from 'react';
import { Row, Col } from 'reactstrap';

import { useFilms } from '../../hooks/use-films';
import { CardFilm } from '../card-film/card-film';

export const Films = () => {
  const { films } = useFilms();

  return (
    <div className="list-films w-100">
      <Row>
        {films.map((film) => (
          <Col key={film.id}>
            <CardFilm
              film={film}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
