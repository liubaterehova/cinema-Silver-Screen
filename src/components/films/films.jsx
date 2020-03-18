import React from 'react';
import { Row, Col } from 'reactstrap';

import { useFilms } from '../../hooks/use-films';
import { CardFilm } from '../card-film/card-film';

export const Films = () => {
  const { films } = useFilms();

  return (
    <div className="list-films w-100">
      <Row>
        {films.map(({
          name, type, id, src, cinema,
        }) => (
          <Col key={id}>
            <CardFilm
              name={name}
              type={type}
              src={src}
              id={id}
              cinema={cinema}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
