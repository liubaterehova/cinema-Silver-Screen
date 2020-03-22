import React from 'react';
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { HeaderFilm } from '../../components/header-film/header';
import { FilmDescription } from '../../components/film-description/film-description';
import { useSelectedFilm } from '../../hooks/use-selected-film';
import { useSelectedCinema } from '../../hooks/use-selected-cinema';

export const Film = () => {
  const { filmId } = useParams();

  const {
    id,
    name,
    type,
    time,
    src,
    cinema: cinemaCode,
    description,
  } = useSelectedFilm(filmId);

  const cinema = useSelectedCinema(cinemaCode);

  return (
    <Container>
      <HeaderFilm name={name} />
      <FilmDescription
        name={name}
        type={type}
        description={description}
        src={src}
        time={time}
        cinemaName={cinema ? cinema.label : ''}
        address={cinema ? cinema.address : ''}
        id={id}
      />
    </Container>
  );
};
