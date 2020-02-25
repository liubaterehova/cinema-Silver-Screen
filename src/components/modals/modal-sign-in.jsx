import React from 'react';
import PropTypes from 'prop-types';

import { ModalWindow } from './modals';
import { FormSignIn } from '../forms/form-sign-in';

export const ModalSignIn = ({
  isOpen, toggle, onClickSignUp, onClose,
}) => (
  <ModalWindow
    isOpen={isOpen}
    toggleInModal={toggle}
    header="Войти"
    toggleInHeader={onClose}
    buttonLeft="Войти"
    buttonLeftHandleClick={onClose}
    buttonRight="Зарегистрироваться"
    buttonRightHandleClick={onClickSignUp}
  >
    <FormSignIn />
  </ModalWindow>
);

ModalSignIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClickSignUp: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
