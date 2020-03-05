import React from 'react';
import { Table, Row, Col } from 'reactstrap';

import { IconArrow } from '../icons/icon-arrow';
import { filters } from '../../constants';

export const FilterFilms = () => (
  <div className="filter-films">
    <h1 className="my-5">Афиша кино</h1>
    <Table
      responsive="sm"
      className="w-100"
      bordered
    >
      <tbody>
        <tr>
          {filters.map(({ id, filter }) => (
            <td key={id}>
              <Row className="justify-content-md-center">
                <Col md={8} className="w-25">
                  {filter}
                </Col>
                <Col md={4}>
                  <IconArrow />
                </Col>
              </Row>
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  </div>
);

