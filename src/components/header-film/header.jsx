import React from 'react';

import { Button } from 'reactstrap';

import './header.scss';

export const HeaderFilm = () => (
  <div className="d-flex justify-content-around align-items-center py-5">
    <div className="center-block">
      <Button color="link">
        <div className="icon-left-arrow" />
      </Button>
    </div>
    <div>
      <h3 className="header text-center">Зов предков</h3>
    </div>
    <div>
      <Button color="link">
        <div className="icon-close" />
      </Button>
    </div>
  </div>
);
