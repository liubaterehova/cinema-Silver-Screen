import React from 'react';
import { Row, Col } from 'reactstrap';

import { useFilmFiltering } from '../../hooks/use-film-filtering';
import { CardFilm } from '../card-film/card-film';

export const Films = () => {
  const { films } = useFilmFiltering();

  return (
    <div className="list-films w-100">
      <Row>
        {films.map((film) => (
          <Col key={film.id}>
            <CardFilm film={film} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
