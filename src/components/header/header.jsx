import React, { useState } from 'react';
import classNames from 'classnames';
import {
  Button, Col, Form, Row, NavbarBrand,
} from 'reactstrap';

import { SignInModal } from '../modals/sign-in-modal';
import { SignUpModal } from '../modals/sign-up-modal';
import { useModals } from '../../hooks/use-modals';
import { MODAL_WINDOW } from '../../constants';
import { useUser } from '../../hooks/use-user';

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

  const { user: { user }, dispatchLogOff, dispatchCreateUser } = useUser();
  const toggleshowInput = () => changeVisibility((visibleInput) => !visibleInput);

  const onClickEnterButton = (user)
    ? dispatchLogOff
    : clickSignIn;

  const onSignUp = (informationRegistration) => {
    dispatchCreateUser(informationRegistration);
  };

  const enterButtonText = user
    ? 'Exit'
    : 'Enter';

  return (
    <div className="header-main-page">
      <Row className="py-5">
        <Col xs={7}>
          <NavbarBrand href="#home" />
        </Col>
        <Col>{user ? `Hallo ${user.name}` : null}</Col>
        <Col xs={1}>
          <Button color="link" onClick={onClickEnterButton}>{enterButtonText}</Button>
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
