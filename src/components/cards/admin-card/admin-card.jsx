import React from 'react';

import { PropTypes } from 'prop-types';

import {
  Col, Card, CardTitle, Button,
} from 'reactstrap';

import { useModals } from '../../../hooks/use-modals';

export const AdminCard = ({
  id, name, modalId, modalComponent: ModalComponent,
}) => {
  const {
    isModalOpen,
    dispatchOpenModal,
    dispatchToggleModal,
    closeAllModalWindows,
  } = useModals(modalId);

  return (
    <Col key={id} className="p-5">
      <Card body className="p-2">
        <CardTitle className="p-3 text-center">
          <h4>{name}</h4>
        </CardTitle>
        <Button color="info" onClick={dispatchOpenModal}>add</Button>
      </Card>
      <ModalComponent
        isOpen={isModalOpen}
        toggle={dispatchToggleModal}
        onClickSignUp={dispatchOpenModal}
        onClose={closeAllModalWindows}
      />
    </Col>
  );
};

AdminCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  modalId: PropTypes.string.isRequired,
  modalComponent: PropTypes.elementType.isRequired,
};
