import React from 'react';
import { Row, Col } from 'reactstrap';

import { useFilmFiltering } from '../../hooks/use-film-filtering';
import { FilmCard } from '../cards/film-card/film-card';

export const Films = () => {
  const { films } = useFilmFiltering();

  return (
    <div className="list-films w-100">
      <Row>
        {films.map((film) => (
          <Col key={film.id}>
            <FilmCard film={film} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
