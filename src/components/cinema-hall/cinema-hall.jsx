import React from 'react';
import * as R from 'ramda';

import { Row } from 'reactstrap';

import { RowSeats } from '../row-seats/row-seats';

import './cinema-hall.scss';

const rowsNumber = R.range(1, 5);

export const CinemaHall = () => (
  <div className="hall p-3 m-5">
    {rowsNumber.map(item => (
      <div key={item.toString()}>
        <Row className="py-3">
          <span className="number-row">{item}</span>
          <RowSeats rowNumber={item} />
        </Row>
      </div>
    ))}
  </div>
);
