import React from 'react';
import { Row } from 'reactstrap';

import { CardAddInf } from '../../components/card-add-inf/card-add-inf';

import './admin.scss';

export const AdminPage = () => (
  <div>
    <Row>
      { CardAddInf }
    </Row>
  </div>
);
