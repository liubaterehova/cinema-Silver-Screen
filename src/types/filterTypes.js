import PropTypes from 'prop-types';
import { CITY_CODE, CINEMA_CODE, DATE_CODE } from '../constants';

export const cityFilterType = PropTypes.exact({
  id: PropTypes.number,
  name: PropTypes.string,
  code: PropTypes.oneOf(Object.values(CITY_CODE)),
});

export const cinemaFilterType = PropTypes.exact({
  id: PropTypes.number,
  name: PropTypes.string,
  code: PropTypes.oneOf(Object.values(CINEMA_CODE)),
});

export const dateFilterType = PropTypes.exact({
  id: PropTypes.number,
  name: PropTypes.string,
  code: PropTypes.oneOf(Object.values(DATE_CODE)),
});

export const timeFilterType = PropTypes.exact({
  id: PropTypes.number,
  name: PropTypes.string,
  from: PropTypes.number,
  to: PropTypes.number,
});

export const seatsFilterType = PropTypes.exact({
  id: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.number,
});

export const anyFilterType = PropTypes.oneOfType([
  cityFilterType,
  cinemaFilterType,
  dateFilterType,
  timeFilterType,
  seatsFilterType,
]);
