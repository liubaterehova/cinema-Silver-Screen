import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { ModalWindow } from './modals';
import { FormSignUp } from '../forms/form-sign-up';

export const ModalSignUp = ({
  isOpen, onClose, toggle,
}) => {
  const {
    register, errors, handleSubmit, control, formState,
  } = useForm({ mode: 'onChange' });

  return (
    <ModalWindow
      isOpen={isOpen}
      toggleInModal={toggle}
      header="Регистация"
      toggleInHeader={onClose}
      buttonLeft="Зарегистрироваться"
      buttonLeftHandleClick={onClose}
      buttonRight="Закрыть"
      isButtonRightDisable={!(formState.touched && formState.isValid)}
      buttonRightHandleClick={onClose}
    >
      <FormSignUp onSubmit={handleSubmit(() => {})} register={register} errors={errors} control={control} />
    </ModalWindow>
  );
};

ModalSignUp.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
