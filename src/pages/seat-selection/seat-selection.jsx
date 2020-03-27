import React from 'react';
import { Container, Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { SelectedFilmBriefInformation } from '../../components/selected-film-brief-information/selected-film-brief-information';
import { CinemaHall } from '../../components/cinema-hall/cinema-hall';
import { useSession } from '../../hooks/use-session';
import './seat-selection.scss';

export const SeatSelection = () => {
  const { sessionId } = useParams();
  const { session, isLoading: isLoadingSession } = useSession(sessionId);

  if (isLoadingSession) {
    return <Spinner color="primary" />;
  }

  return (
    <Container>
      <div className="seat-selection py-5">
        <SelectedFilmBriefInformation
          session={session}
        />
        <CinemaHall />
      </div>
    </Container>
  );
};
