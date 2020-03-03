import React from 'react';

import { Container } from 'reactstrap';

import { SelectedFilmBriefInf } from '../../components/selected-film-brief-inf/selected-film-brief-inf';
import { CinemaHall } from '../../components/cinema-hall/cinema-hall';

import './seat-selection.scss';

export const SeatSelection = () => (
  <Container>
    <div className="seat-selection py-5">
      <SelectedFilmBriefInf />
      <CinemaHall />
    </div>
  </Container>
);
