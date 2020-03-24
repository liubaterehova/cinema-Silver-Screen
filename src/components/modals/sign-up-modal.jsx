import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { ModalWindow } from './modals';
import { SignUpForm } from '../forms/sign-up-form';

export const SignUpModal = ({
  isOpen, onClose, toggle,
}) => {
  const {
    register, errors, handleSubmit, control, formState, watch,
  } = useForm({ mode: 'onBlur' });

  return (
    <ModalWindow
      isOpen={isOpen}
      toggleInModal={toggle}
      header="Sign up"
      toggleInHeader={onClose}
      primaryButton="Sign up"
      primaryButtonHandleClick={onClose}
      secondaryButton="Close"
      isPrimaryButtonDisable={!(formState.touched && formState.isValid)}
      secondaryButtonHandleClick={onClose}
    >
      <SignUpForm
        onSubmit={handleSubmit(() => { })}
        register={register}
        errors={errors}
        control={control}
        watch={watch}
      />
    </ModalWindow>
  );
};

SignUpModal.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
