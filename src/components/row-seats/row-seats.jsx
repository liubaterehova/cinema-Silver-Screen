import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';
import { Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { IconSeat } from '../icons/icon-seat';
import { selectSeat } from '../../actions/seats';

const colsNumber = R.range(1, 11);

export const RowSeats = ({ rowNumber }) => {
  const dispatch = useDispatch();

  const [seats, setSeat] = useState({});

  const handleClick = col => {
    const seat = `${rowNumber}_${col}`;

    setSeat((state) => {
      if (seat in state) {
        return { ...state, [`${rowNumber}_${col}`]: !state[`${rowNumber}_${col}`] };
      }

      return { ...state, [seat]: true };
    });
    dispatch(selectSeat({ row: rowNumber, col }));
  };

  return (colsNumber.map(col => (
    <Col key={col.toString()}>
      <Button
        type="button"
        color="link"
        onClick={() => handleClick(col)}
      >
        <IconSeat color={seats[`${rowNumber}_${col}`]} />
      </Button>
    </Col>
  )));
};

RowSeats.propTypes = {
  rowNumber: PropTypes.number.isRequired,
};

