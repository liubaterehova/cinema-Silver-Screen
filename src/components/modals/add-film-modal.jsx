import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Input } from 'reactstrap';

import { ModalWindow } from './modals';
import { MinutesInput } from '../forms/inputs/minutes-input';
import { CommonForm } from '../forms/common-form';

const addFilmFormElements = [
  {
    id: 1,
    as: Input,
    type: 'text',
    name: 'filmName',
    label: 'Movie title',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 2,
    as: MinutesInput,
    type: 'number',
    name: 'duration',
    label: 'Movie duration',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 3,
    as: Input,
    type: 'text',
    name: 'description',
    label: 'Description',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 4,
    as: Input,
    type: 'text',
    name: 'genre',
    label: 'Film genre',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 5,
    as: Input,
    type: 'file',
    name: 'file',
    label: 'File',
  },
];

export const AddFilmModal = ({
  isOpen, toggle, onClose,
}) => {
  const {
    handleSubmit, errors, control, formState,
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
      <CommonForm
        control={control}
        onSubmit={handleSubmit(() => {})}
        errors={errors}
        elements={addFilmFormElements}
      />
    </ModalWindow>
  );
};

AddFilmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
