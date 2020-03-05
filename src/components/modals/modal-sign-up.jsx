import React from 'react';
import PropTypes from 'prop-types';

import { ModalWindow } from './modals';
import { FormSignUp } from '../forms/form-sign-up';

export const ModalSignUp = ({
  isOpen, onClose, toggle,
}) => (
  <ModalWindow
    isOpen={isOpen}
    toggleInModal={toggle}
    header="Регистация"
    toggleInHeader={onClose}
    buttonLeft="Закрыть"
    buttonLeftHandleClick={onClose}
    buttonRight="Зарегистрироваться"
    buttonRightHandleClick={onClose}
  >
    <FormSignUp />
  </ModalWindow>
);

ModalSignUp.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
