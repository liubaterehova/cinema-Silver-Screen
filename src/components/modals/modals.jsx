import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

export const ModalWindow = ({
  isOpen, toggleInModal, header, toggleInHeader, primaryButton,
  secondaryButton, primaryButtonHandleClick, secondaryButtonHandleClick, children, isPrimaryButtonDisable,
}) => (
  <Modal isOpen={isOpen} toggle={toggleInModal}>
    <ModalHeader toggle={toggleInHeader}>{header}</ModalHeader>
    <ModalBody>
      {children}
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        type="submit"
        onClick={primaryButtonHandleClick}
        disabled={isPrimaryButtonDisable}
      >
        {primaryButton}
      </Button>
      <Button
        color="secondary"
        onClick={secondaryButtonHandleClick}
      >
        {secondaryButton}
      </Button>
    </ModalFooter>
  </Modal>
);

ModalWindow.propTypes = {
  isPrimaryButtonDisable: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  toggleInModal: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  toggleInHeader: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  primaryButton: PropTypes.string.isRequired,
  secondaryButton: PropTypes.string.isRequired,
  primaryButtonHandleClick: PropTypes.func.isRequired,
  secondaryButtonHandleClick: PropTypes.func.isRequired,
};

ModalWindow.defaultProps = {
  isPrimaryButtonDisable: false,
};
