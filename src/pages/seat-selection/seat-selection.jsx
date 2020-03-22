import React from 'react';
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { SelectedFilmBriefInformation } from '../../components/selected-film-brief-information/selected-film-brief-information';
import { CinemaHall } from '../../components/cinema-hall/cinema-hall';
import { useSelectedFilm } from '../../hooks/use-selected-film';
import { useSelectedCinema } from '../../hooks/use-selected-cinema';

import './seat-selection.scss';

export const SeatSelection = () => {
  const { selectedFilmId } = useParams();

  const {
    id,
    name,
    type,
    time,
    src,
    cinema: cinemaCode,
  } = useSelectedFilm(selectedFilmId);

  const cinema = useSelectedCinema(cinemaCode);

  return (
    <Container>
      <div className="seat-selection py-5">
        <SelectedFilmBriefInformation
          name={name}
          type={type}
          src={src}
          time={time}
          id={id}
          cinemaName={cinema ? cinema.label : ''}
          address={cinema ? cinema.address : ''}
        />
        <CinemaHall />
      </div>
    </Container>
  );
};
