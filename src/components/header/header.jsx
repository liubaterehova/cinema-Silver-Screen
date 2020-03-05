import React, { useState } from 'react';
import classNames from 'classnames';
import {
  Button, Col, Form, Row, NavbarBrand,
} from 'reactstrap';

import { ModalSignIn } from '../modals/modal-sign-in';
import { ModalSignUp } from '../modals/modal-sign-up';
import { useModals } from '../../hooks/use-modals';
import { MODAL_WINDOW } from '../../constants';

import './header.scss';

export const Header = () => {
  const [inputSearch, changeVisibility] = useState(true);

  const {
    isModalOpen: isModalSignInOpen,
    dispatchOpenModal: clickSignIn,
    dispatchToggleModal: toggleSignIn,
    closeAllModalWindows,
  } = useModals(MODAL_WINDOW.SIGN_IN);

  const {
    isModalOpen: isModalSignUpOpen,
    dispatchOpenModal: clickSignUp,
    dispatchToggleModal: toggleSignUp,
  } = useModals(MODAL_WINDOW.SIGN_UP);

  const toggleshowInput = () => changeVisibility((visibleInput) => !visibleInput);

  return (
    <div className="header-main-page">
      <Row className="py-5">
        <Col xs={7}>
          <NavbarBrand href="#home" />
        </Col>
        <Col xs={1}>
          <Button color="link" onClick={clickSignIn}>Вход</Button>
          <ModalSignIn
            isOpen={isModalSignInOpen}
            toggle={toggleSignIn}
            onClickSignUp={clickSignUp}
            onClose={closeAllModalWindows}
          />
          <ModalSignUp
            isOpen={isModalSignUpOpen}
            toggle={toggleSignUp}
            onClickSignUp={clickSignUp}
            onClose={closeAllModalWindows}
          />
        </Col>
        <Col xs={2} className={classNames({ 'd-none': inputSearch })}>
          <input
            type="text"
            name="search"
            placeholder="search"
          />
        </Col>
        <Col xs={1}>
          <Form inline>
            <Button color="link" onClick={toggleshowInput}>
              <div className="search-film-header" />
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
