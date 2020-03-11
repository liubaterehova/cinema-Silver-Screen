import React from 'react';
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { SelectedFilmBriefInformation } from '../../components/selected-film-brief-information/selected-film-brief-information';
import { CinemaHall } from '../../components/cinema-hall/cinema-hall';
import { getFilm, getCinema } from '../../utils/getItem';

import './seat-selection.scss';

export const SeatSelection = () => {
  const { selectedFilmId } = useParams();

  const {
    id,
    name,
    type,
    time,
    src,
    cinemaId,
  } = getFilm(selectedFilmId);

  const {
    cinemaName,
    address,
  } = getCinema(cinemaId);

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
