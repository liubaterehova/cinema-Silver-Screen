import React from 'react';
import PropTypes from 'prop-types';

export const IconSeat = ({ color }) => {
  const fill = color ? '#B22222' : '#E6E3DA';

  return (
    <svg x="583" y="1300" width="37" height="45" type="standard" id="seat-7453242">
      <rect fill="transparent" stroke="none" width="69" height="82.5" />
      <g transform="rotate(0 41.25 34.5)" height="82.5" width="69">
        <svg viewBox="-1 0 24 24" width="100%" height="100%">
          <path fill={fill} d="M19,2c0.6,0,1,0.4,1,1v12c0,3.9-3.1,7-7,7H9c-3.9,0-7-3.1-7-7V3c0-0.6,0.4-1,1-1H19 M19,0H3C1.3,0,0,1.3,0,3v12 c0,5,4,9,9,9h4c5,0,9-4,9-9V3C22,1.3,20.7,0,19,0L19,0z" />
        </svg>
      </g>
    </svg>
  );
};

IconSeat.propTypes = {
  color: PropTypes.bool.isRequired,
};
