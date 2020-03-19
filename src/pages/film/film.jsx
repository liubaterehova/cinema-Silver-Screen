import React from 'react';
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { HeaderFilm } from '../../components/header-film/header';
import { FilmDescription } from '../../components/film-description/film-description';
import { getFilm, getCinema } from '../../utils/get-item';

export const Film = () => {
  const { filmId } = useParams();

  const {
    id,
    name,
    type,
    time,
    src,
    cinema,
    description,
  } = getFilm(filmId);

  const {
    cinemaName,
    address,
  } = getCinema(cinema);

  return (
    <Container>
      <HeaderFilm name={name} />
      <FilmDescription
        name={name}
        type={type}
        description={description}
        src={src}
        time={time}
        cinemaName={cinemaName}
        address={address}
        id={id}
      />
    </Container>
  );
};
