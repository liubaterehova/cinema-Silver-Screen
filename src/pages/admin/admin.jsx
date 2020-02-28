/* eslint-disable no-console */
import React from 'react';

import {
  Col, Card, Row, CardTitle, Button,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { cards } from '../../components/cards-add-inf/cards-add-inf';
import { openModal } from '../../actions/modals';
import { ModalAddCinema } from '../../components/modals/modal-add-cinema';
import { ModalAddFilm } from '../../components/modals/modal-add-film';
import { useModals } from '../../hooks/use-modals';
import { MODAL_WINDOW } from '../../constants';
import './admin.scss';

export const AdminPage = () => {
  const dispatch = useDispatch();

  const {
    isModalOpen: isModalAddCinemaOpen,
    dispatchOpenModal: clickAddCinema,
    dispatchToggleModal: toggleAddCinema,
    closeAllModalWindows,
  } = useModals(MODAL_WINDOW.ADD_CINEMA);

  const {
    isModalOpen: isModalAddFilmOpen,
    dispatchOpenModal: clickAddFilm,
    dispatchToggleModal: toggleAddFilm,
  } = useModals(MODAL_WINDOW.ADD_FILM);

  const click = (modalId) => {
    console.log(modalId);
    dispatch({ type: modalId });
  };

  return (
    <div>
      <Row>
        {cards.map(({ id, name, modalId }) => (
          <Col key={id} className="p-5">
            <Card body className="p-2">
              <CardTitle className="p-3 text-center">
                <h4>{name}</h4>
              </CardTitle>
              <Button color="info" onClick={click(modalId)}>добавить</Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <ModalAddCinema
          isOpen={isModalAddCinemaOpen}
          toggle={toggleAddCinema}
          onClickSignUp={clickAddCinema}
          onClose={closeAllModalWindows}
        />
        <ModalAddFilm
          isOpen={isModalAddFilmOpen}
          toggle={toggleAddFilm}
          onClickSignUp={clickAddFilm}
          onClose={closeAllModalWindows}
        />
      </Row>

    </div>
  );
};
