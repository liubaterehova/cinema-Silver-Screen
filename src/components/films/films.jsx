import React from 'react';
import { Row, Col } from 'reactstrap';

import { useFilms } from '../../hooks/use-films';
import { CardFilm } from '../card-film/card-film';
import { films } from '../../constants';

export const Films = () => {
  const { selectedFilms } = useFilms();
  const sortedFilms = selectedFilms.length || films;

  return (
    <div className="list-films w-100">
      <Row>
        {sortedFilms.map(({
          name, type, id, src, cinemaId,
        }) => (
          <Col key={id}>
            <CardFilm
              name={name}
              type={type}
              src={src}
              id={id}
              cinemaId={cinemaId}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
