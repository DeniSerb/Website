import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Fa
}                           from 'mdbreact';

class Features extends Component {
  render() {
    return (
      <div className="features-wrapper">
        <Container>
          <div className="items-wrapper">
            <h2 className="h1-responsive font-weight-bold my-5 text-center">
              Почему пеноизол?
            </h2>
            <Row>
            <Col xs="12" md="3" className="text-center feature-item">
              <Fa icon="bolt fa-4x"/>
              <h3>Экономия</h3>
            </Col>
            <Col xs="12" md="3" className="text-center feature-item">
              <Fa icon="volume-up fa-4x"/>
              <h3>Шумоизоляция</h3>
            </Col>
            <Col xs="12" md="3" className="text-center feature-item">
              <Fa icon="fire-extinguisher fa-4x"/>
              <h3>Безопасность</h3>
            </Col>
            <Col xs="12" md="3" className="text-center feature-item">
              <Fa icon="dollar fa-4x" />
              <h3>Выгодная цена</h3>
            </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Features;
