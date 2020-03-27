import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Input } from 'reactstrap';

import { ModalWindow } from './modals';
import { DollarInput } from '../forms/inputs/dollar-input';
import { CommonForm } from '../forms/common-form';
import { CINEMAS, FILMS } from '../../constants';

const addSessionFormElements = [
  {
    id: 1,
    as: Input,
    type: 'select',
    name: 'selectCinema',
    label: 'Cinema',
    rules: { required: true },
    errorMessage: 'This field is required',
    children: Object.values(CINEMAS).map((cinema) => <option key={cinema.id}>{cinema.cinemaName}</option>),
  },
  {
    id: 2,
    as: Input,
    type: 'select',
    name: 'selectFilm',
    label: 'Film',
    rules: { required: true },
    errorMessage: 'This field is required',
    children: FILMS.map(film => <option key={film.id}>{film.name}</option>),
  },
  {
    id: 3,
    as: Input,
    type: 'time',
    name: 'time',
    label: 'Time',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
  {
    id: 4,
    as: DollarInput,
    type: 'number',
    name: 'price',
    label: 'Price',
    rules: { required: true },
    errorMessage: 'This field is required',
  },
];

export const AddSessionModal = ({
  isOpen, toggle, onClose,
}) => {
  const {
    handleSubmit, errors, control, formState,
  } = useForm({ mode: 'onBlur' });

  return (
    <ModalWindow
      isOpen={isOpen}
      toggleInModal={toggle}
      header="SESSION"
      toggleInHeader={onClose}
      primaryButton="add"
      primaryButtonHandleClick={onClose}
      secondaryButton="close"
      isPrimaryButtonDisable={!(formState.touched && formState.isValid)}
      secondaryButtonHandleClick={onClose}
    >
      <CommonForm
        control={control}
        onSubmit={handleSubmit(() => {})}
        errors={errors}
        elements={addSessionFormElements}
      />
    </ModalWindow>
  );
};

AddSessionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
