import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { ModalWindow } from './modals';
import { SignUpForm } from '../forms/sign-up-form';
import { useUser } from '../../hooks/use-user';

export const SignUpModal = ({
  isOpen, onClose, toggle, onSignUp,
}) => {
  const {
    register, errors, control, formState, watch,
  } = useForm({ mode: 'onBlur' });
  const { dispatchCleanError } = useUser();

  useEffect(() => function cleanError() {
    dispatchCleanError();
  }, [dispatchCleanError]);

  return (
    <ModalWindow
      isOpen={isOpen}
      toggleInModal={toggle}
      header="Sign up"
      toggleInHeader={onClose}
      primaryButton="Sign up"
      primaryButtonHandleClick={() => onSignUp(watch())}
      secondaryButton="Close"
      isPrimaryButtonDisable={!(formState.touched && formState.isValid)}
      secondaryButtonHandleClick={onClose}
    >
      <SignUpForm
        register={register}
        errors={errors}
        control={control}
        watch={watch}
      />
    </ModalWindow>
  );
};

SignUpModal.propTypes = {
  onSignUp: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
