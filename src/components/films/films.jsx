import React from 'react';
import { Row, Col } from 'reactstrap';

import { useFilms } from '../../hooks/use-films';
import { CardFilm } from '../card-film/card-film';
import { films } from '../../constants';
import { filterFilmByParams } from '../../utils/filmSort';

export const Films = () => {
  const { selectedFilters } = useFilms();

  const sortedFilms = selectedFilters.filters.length
    ? filterFilmByParams(films, selectedFilters)
    : films;

  debugger;

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
