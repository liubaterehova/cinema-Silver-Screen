import React from 'react';

import * as R from 'ramda';

import { Col, Button } from 'reactstrap';

import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { Seat } from '../seat/seat';
import { selectSeat } from '../../actions/seats';

const colsNumber = R.range(1, 11);

export const RowSeats = ({ rowNumber }) => {
  const dispatch = useDispatch();
  const handleClick = col => dispatch(selectSeat({ row: rowNumber, col }));

  return (colsNumber.map(col => (
    <Col key={col.toString()}>
      <Button type="button" color="link" onClick={() => handleClick(col)}>
        <Seat />
      </Button>
    </Col>
  )));
};

RowSeats.propTypes = {
  rowNumber: PropTypes.number.isRequired,
};

