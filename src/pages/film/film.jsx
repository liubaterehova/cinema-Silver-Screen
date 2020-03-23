import React from 'react';
import { Container, Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { HeaderFilm } from '../../components/header-film/header';
import { FilmDescription } from '../../components/film-description/film-description';
import { useSelectedFilm } from '../../hooks/use-selected-film';
import { useCinemas } from '../../hooks/use-cinemas';

export const Film = () => {
  const { filmId } = useParams();

  const { film, isLoading: isLoadingFilm } = useSelectedFilm(filmId);

  const { cinemas, isLoading: isLoadingCinemas } = useCinemas();

  if (isLoadingFilm || isLoadingCinemas) {
    return <Spinner color="primary" />;
  }

  const { label, address } = cinemas.find((cinema) => cinema.cinemaCode === film.cinema);

  return (
    <>
      {
      isLoadingFilm || isLoadingCinemas ? <Spinner color="primary" />
        : (
          <Container>
            <HeaderFilm name={film.name} />
            <FilmDescription
              name={film.name}
              type={film.type}
              description={film.description}
              src={film.src}
              time={film.time}
              cinemaName={label}
              address={address}
              id={film.id}
            />
          </Container>
        )
    }
    </>
  );
};
