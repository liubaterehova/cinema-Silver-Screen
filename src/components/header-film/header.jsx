import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './header.scss';

export const HeaderFilm = ({ name }) => (
  <div className="d-flex justify-content-around align-items-center py-5">
    <div className="center-block">
      <Button color="link">
        <Link to="/">
          <div className="icon-left-arrow" />
        </Link>
      </Button>
    </div>
    <div>
      <h3 className="header text-center">{name}</h3>
    </div>
    <div>
      <Button color="link">
        <Link to="/">
          <div className="icon-close" />
        </Link>
      </Button>
    </div>
  </div>
);

HeaderFilm.propTypes = {
  name: PropTypes.string.isRequired,
};

