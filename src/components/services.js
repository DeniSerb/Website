import React, { Component } from 'react';
import {
  Container,
  Row,
  Col}                      from 'mdbreact';

class HomeHeader extends Component {
  render() {
    return (
      <div className="services-wrapper">
        <Container>
          <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">Что такое пеноизол?</h2>
            <p className="lead grey-text w-responsive mx-auto mb-5">
              Пеноизол – универсальный теплоизоляционный материал, который используется для утепления жилых и промышленных объектов.
              Достоинствами пеноизола, которые выделяют его среди других видов теплоизоляционных материалов
              являются высокие тепло и звукоизоляционные свойства, долговечность, стойкость к температурным
              колебаниям и повышению влажности, пожаробезопасность.
            </p>
            <Row>
              <div className="services-item no-gutters row">
                <Col md="6">
                  <img src="./wall.jpg" width="100%" height="auto" alt="wall" />
                </Col>
                <Col md="6">
                  <h2>Утепление стен</h2>
                  <p className="grey-text mb-md-0 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores aperiam minima assumenda deleniti hic.
                  </p>
                  <hr />
                  <span className="read-more">
                    Подробнее
                  </span>
                </Col>
              </div>
              <div className="right services-item no-gutters row">
                <Col md="6">
                  <img src="./roof.jpg" width="100%" height="auto" alt="wall" />
                </Col>
                <Col md="6">
                  <h2>Утепление крыши</h2>
                  <p className="grey-text mb-md-0 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores aperiam minima assumenda deleniti hic.
                  </p>
                  <hr />
                  <span className="read-more">
                    Подробнее
                  </span>
                </Col>
              </div>
              <div className="services-item no-gutters row">
                <Col md="6">
                  <img src="./floor.jpg" width="100%" height="auto" alt="wall" />
                </Col>
                <Col md="6">
                  <h2>Утепление полов</h2>
                  <p className="grey-text mb-md-0 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores aperiam minima assumenda deleniti hic.
                  </p>
                  <hr />
                  <span className="read-more">
                    Подробнее
                  </span>
                </Col>
              </div>
              <div className="right services-item no-gutters row">
                <Col md="6">
                  <img src="./garage.jpg" width="100%" height="auto" alt="wall" />
                </Col>
                <Col md="6">
                  <h2>Утепление ангаров</h2>
                  <p className="grey-text mb-md-0 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores aperiam minima assumenda deleniti hic.
                  </p>
                  <hr />
                  <span className="read-more">
                    Подробнее
                  </span>
                </Col>
              </div>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default HomeHeader;
