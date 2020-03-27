import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';
import { Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { SeatIcon } from '../icons/seat-icon';
import { postSeats } from '../../actions/seats';

const colsNumber = R.range(1, 11);

export const RowSeats = ({ rowNumber }) => {
  const dispatch = useDispatch();

  const [seats, setSeat] = useState({ '2_5': 'locked' });

  const handleClick = col => {
    const seatId = `${rowNumber}_${col}`;

    setSeat((state) => {
      if (seatId in state) {
        if (state[seatId] === 'locked') return { ...state };

        return { ...state, [seatId]: (state[seatId] === 'selected') ? '' : 'selected' };
      }

      return { ...state, [seatId]: 'selected' };
    });
    if (seats[seatId] === 'locked') return;
    dispatch(postSeats({ row: rowNumber, col }));
  };

  return (colsNumber.map(col => (
    <Col key={col.toString()}>
      <Button
        type="button"
        color="link"
        onClick={() => handleClick(col)}
      >
        <SeatIcon color={seats[`${rowNumber}_${col}`]} />
      </Button>
    </Col>
  )));
};

RowSeats.propTypes = {
  rowNumber: PropTypes.number.isRequired,
};
