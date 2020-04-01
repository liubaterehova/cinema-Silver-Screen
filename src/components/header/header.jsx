import React, { useState } from 'react';
import classNames from 'classnames';
import {
  Button, Col, Form, Row, NavbarBrand,
} from 'reactstrap';

import { SignInModal } from '../modals/sign-in-modal';
import { SignUpModal } from '../modals/sign-up-modal';
import { useModals } from '../../hooks/use-modals';
import { useRegistration } from '../../hooks/use-registration';
import { MODAL_WINDOW } from '../../constants';

import './header.scss';

export const Header = () => {
  const [inputSearch, changeVisibility] = useState(true);

  const {
    isModalOpen: isSignInModalOpen,
    dispatchOpenModal: clickSignIn,
    dispatchToggleModal: toggleSignIn,
    closeAllModalWindows,
  } = useModals(MODAL_WINDOW.SIGN_IN);

  const {
    isModalOpen: isSignUpModalOpen,
    dispatchOpenModal: clickSignUp,
    dispatchToggleModal: toggleSignUp,
  } = useModals(MODAL_WINDOW.SIGN_UP);

  const { dispatchCreateUser } = useRegistration();

  const toggleshowInput = () => changeVisibility((visibleInput) => !visibleInput);

  const onSignUp = (informationRegistration) => {
    dispatchCreateUser(informationRegistration);
  };

  return (
    <div className="header-main-page">
      <Row className="py-5">
        <Col xs={7}>
          <NavbarBrand href="#home" />
        </Col>
        <Col xs={1}>
          <Button color="link" onClick={clickSignIn}>Enter</Button>
          <SignInModal
            isOpen={isSignInModalOpen}
            toggle={toggleSignIn}
            onClickSignUp={clickSignUp}
            onClose={closeAllModalWindows}
          />
          <SignUpModal
            isOpen={isSignUpModalOpen}
            toggle={toggleSignUp}
            onClickSignUp={clickSignUp}
            onClose={closeAllModalWindows}
            onSignUp={onSignUp}
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
