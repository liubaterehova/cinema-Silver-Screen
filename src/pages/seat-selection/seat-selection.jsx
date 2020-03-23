import React from 'react';
import { Container, Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { SelectedFilmBriefInformation } from '../../components/selected-film-brief-information/selected-film-brief-information';
import { CinemaHall } from '../../components/cinema-hall/cinema-hall';
import { useSelectedFilm } from '../../hooks/use-selected-film';
import { useCinemas } from '../../hooks/use-cinemas';
import './seat-selection.scss';

export const SeatSelection = () => {
  const { selectedFilmId } = useParams();
  const { film, isLoading: isLoadingFilm } = useSelectedFilm(selectedFilmId);

  const { cinemas, isLoading: isLoadingCinemas } = useCinemas();

  if (isLoadingFilm || isLoadingCinemas) {
    return <Spinner color="primary" />;
  }

  const { label, address } = cinemas.find((cinema) => cinema.cinemaCode === film.cinema);

  return (
    <Container>
      <div className="seat-selection py-5">
        <SelectedFilmBriefInformation
          name={film.name}
          type={film.type}
          src={film.src}
          time={film.time}
          id={film.id}
          cinemaName={label}
          address={address}
        />
        <CinemaHall />
      </div>
    </Container>
  );
};
