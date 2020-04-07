import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './film-header.scss';

export const FilmHeader = ({ name }) => (
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

FilmHeader.propTypes = {
  name: PropTypes.string.isRequired,
};
