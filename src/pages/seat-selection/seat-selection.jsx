import React from 'react';
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { SelectedFilmBriefInformation } from '../../components/selected-film-brief-information/selected-film-brief-information';
import { CinemaHall } from '../../components/cinema-hall/cinema-hall';
import { getFilm, getCinema } from '../../utils/get-item';

import './seat-selection.scss';

export const SeatSelection = () => {
  const { selectedFilmId } = useParams();

  const {
    id,
    name,
    type,
    time,
    src,
    cinema,
  } = getFilm(selectedFilmId);

  const {
    cinemaName,
    address,
  } = getCinema(cinema);

  return (
    <Container>
      <div className="seat-selection py-5">
        <SelectedFilmBriefInformation
          name={name}
          type={type}
          src={src}
          time={time}
          id={id}
          cinemaName={cinemaName}
          address={address}
        />
        <CinemaHall />
      </div>
    </Container>
  );
};
