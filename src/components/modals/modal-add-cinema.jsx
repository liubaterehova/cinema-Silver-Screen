import React from 'react';
import PropTypes from 'prop-types';

import { ModalWindow } from './modals';
import { FormAddCinema } from '../forms/form-add-cinema';

export const ModalAddCinema = ({
  isOpen, toggle, onClickSignUp, onClose,
}) => (
  <ModalWindow
    isOpen={isOpen}
    toggleInModal={toggle}
    header="КИНОТЕАТР"
    toggleInHeader={onClose}
    buttonLeft="закрыть"
    buttonLeftHandleClick={onClose}
    buttonRight="добавить"
    buttonRightHandleClick={onClickSignUp}
  >
    <FormAddCinema />
  </ModalWindow>
);

ModalAddCinema.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClickSignUp: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
