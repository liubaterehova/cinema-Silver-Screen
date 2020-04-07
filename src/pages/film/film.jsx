import React from 'react';
import { Container, Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { FilmHeader } from '../../components/film-header/film-header';
import { FilmDescription } from '../../components/film-description/film-description';
import { useSelectedFilm } from '../../hooks/use-selected-film';
import { useSessionsByFilm } from '../../hooks/use-sessions-by-film';

export const Film = () => {
  const { filmId } = useParams();

  const { sessions, isLoading: isLoadingSessions } = useSessionsByFilm(filmId);
  const { film, isLoading: isLoadingFilm } = useSelectedFilm(filmId);

  if (isLoadingFilm || isLoadingSessions || film == null) {
    return <Spinner color="primary" />;
  }

  return (
    <Container>
      <FilmHeader name={film.name} />
      <FilmDescription
        name={film.name}
        type={film.type}
        description={film.description}
        poster={film.poster}
        time={film.time}
        sessions={sessions}
      />
    </Container>
  );
};
