import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { ModalWindow } from './modals';
import { FormSignIn } from '../forms/form-sign-in';

export const ModalSignIn = ({
  isOpen, toggle, onClickSignUp, onClose,
}) => {
  const {
    register, errors, handleSubmit, control, formState,
  } = useForm({ mode: 'onChange' });

  return (
    <ModalWindow
      isOpen={isOpen}
      toggleInModal={toggle}
      header="Войти"
      toggleInHeader={onClose}
      buttonLeft="Войти"
      buttonLeftHandleClick={onClose}
      buttonRight="Зарегистрироваться"
      isButtonRightDisable={!(formState.touched && formState.isValid)}
      buttonRightHandleClick={onClickSignUp}
    >
      <FormSignIn
        onSubmit={handleSubmit(() => {})}
        register={register}
        errors={errors}
        control={control}
      />
    </ModalWindow>
  );
};

ModalSignIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClickSignUp: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
