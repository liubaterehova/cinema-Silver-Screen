import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { ModalWindow } from './modals';
import { FormAddFilm } from '../forms/form-add-film';

export const ModalAddFilm = ({
  isOpen, toggle, onClose,
}) => {
  const {
    register, handleSubmit, watch, errors, control, rules, formState,
  } = useForm({ mode: 'onBlur' });

  return (
    <ModalWindow
      isOpen={isOpen}
      toggleInModal={toggle}
      header="FILM"
      toggleInHeader={onClose}
      primaryButton="add"
      primaryButtonHandleClick={onClose}
      isPrimaryButtonDisable={!(formState.touched && formState.isValid)}
      secondaryButton="close"
      secondaryButtonHandleClick={onClose}
    >
      <FormAddFilm
        rules={rules}
        control={control}
        register={register}
        handleSubmit={handleSubmit}
        watch={watch}
        errors={errors}
      />
    </ModalWindow>
  );
};

ModalAddFilm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
