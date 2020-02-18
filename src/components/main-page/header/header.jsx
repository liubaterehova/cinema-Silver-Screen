import React from 'react';

import {
  Button, Col, Form, Row, NavbarBrand,
} from 'reactstrap';

import './header.scss';

export const Header = () => (
  <div className="header-main-page">
    <Row className="py-5">
      <Col xs={9}>
        <NavbarBrand href="#home" />
      </Col>
      <Col xs={1}>
        <Button color="link">Вход</Button>
      </Col>
      <Col xs={1}>
        <Form inline>
          <Button color="link">
            <div className="search-film-header" />
          </Button>
        </Form>
      </Col>
    </Row>
  </div>
);
