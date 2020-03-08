import React from 'react';
import { Row, Col } from 'reactstrap';

import { useFilms } from '../../hooks/use-films';
import { CardFilm } from '../card-film/card-film';

export const Films = () => {
  const { filmsSelected } = useFilms();

  return (
    <div className="list-films w-100">
      <Row>
        {filmsSelected.map(({
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
