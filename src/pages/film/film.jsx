import React from 'react';
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { HeaderFilm } from '../../components/header-film/header';
import { FilmDescription } from '../../components/film-description/film-description';
import { getFilm, getCinema } from '../../utils/getItem';

export const Film = () => {
  const { filmId } = useParams();

  const {
    id,
    name,
    type,
    time,
    src,
    cinemaId,
    description,
  } = getFilm(filmId);

  const {
    cinemaName,
    address,
  } = getCinema(cinemaId);

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
