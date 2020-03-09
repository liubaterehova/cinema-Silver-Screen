import React from 'react';
import PropTypes from 'prop-types';

import { ModalWindow } from './modals';
import { FormSignIn } from '../forms/form-sign-in';

export const ModalSignIn = ({
  isOpen, toggle, onClickSignUp, onClose, register, required, errors,
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
    <FormSignIn register={register} required={required} errors={errors} />
  </ModalWindow>
);

ModalSignIn.propTypes = {
  errors: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  register: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClickSignUp: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
