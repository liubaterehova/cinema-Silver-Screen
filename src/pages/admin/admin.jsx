import React from 'react';

import {
  Row, Col, Card, CardTitle, Button, CardText,
} from 'reactstrap';

import './admin.scss';

export const AdminPage = () => (
  <div>
    <Row>
      <Col>
        <Card body>
          <CardTitle><h3>КИНОТЕАТР</h3></CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="info">добавить</Button>
        </Card>
      </Col>
      <Col>
        <Card body>
          <CardTitle><h3>ФИЛЬМ</h3></CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="info">добавить</Button>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <Card body>
          <CardTitle><h3>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h3></CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="info">добавить</Button>
        </Card>
      </Col>
      <Col>
        <Card body>
          <CardTitle><h3>СЕАНС</h3></CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="info">добавить</Button>
        </Card>
      </Col>
    </Row>
  </div>
);
