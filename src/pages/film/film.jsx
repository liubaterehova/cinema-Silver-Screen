import React from 'react';
import { Container, Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { HeaderFilm } from '../../components/header-film/header';
import { FilmDescription } from '../../components/film-description/film-description';
import { useSelectedFilm } from '../../hooks/use-selected-film';
import { useSessionsByFilm } from '../../hooks/use-sessions-by-film';

export const Film = () => {
  const { filmId } = useParams();

  const { film, isLoading: isLoadingFilm } = useSelectedFilm(filmId);

  const { sessions, isLoading: isLoadingSessions } = useSessionsByFilm(filmId);

  if (isLoadingFilm || isLoadingSessions) {
    return <Spinner color="primary" />;
  }

  return (
    <>
      {
        isLoadingFilm || isLoadingSessions ? <Spinner color="primary" />
          : (
            <Container>
              <HeaderFilm name={film.name} />
              <FilmDescription
                name={film.name}
                type={film.type}
                description={film.description}
                poster={film.poster}
                time={film.time}
                sessions={sessions}
              />
            </Container>
          )
      }
    </>
  );
};
