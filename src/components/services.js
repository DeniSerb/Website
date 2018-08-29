import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
      }                     from 'mdbreact';

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
              <Col md="6">
                <div className="services-item">
                  <img src="./wall.jpg" width="100%" alt="wall" />
                  <h2>Утепление стен</h2>
                  <p className="grey-text mb-md-0 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores aperiam minima assumenda deleniti hic.
                  </p>
                  <span className="read-more">
                    Подробнее
                  </span>
                </div>
              </Col>
              <Col md="6">
                <div className="services-item">
                  <img src="./roof.jpg" width="100%" alt="roof" />
                  <h2>Утепление крыши</h2>
                  <p className="grey-text mb-md-0 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores aperiam minima assumenda deleniti hic.
                  </p>
                  <span className="read-more">
                    Подробнее
                  </span>
                </div>
              </Col>
              <Col md="6">
                <div className="services-item">
                  <img src="./floor.jpg" width="100%" alt="floor" />
                  <h2>Утепление полов</h2>
                  <p className="grey-text mb-md-0 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores aperiam minima assumenda deleniti hic.
                  </p>
                  <span className="read-more">
                    Подробнее
                  </span>
                </div>
              </Col>
              <Col md="6">
                <div className="services-item">
                  <img src="./garage.jpg" width="100%" alt="garage" />
                  <h2>Утепление ангаров</h2>
                  <p className="grey-text mb-md-0 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores aperiam minima assumenda deleniti hic.
                  </p>
                  <span className="read-more">
                    Подробнее
                  </span>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default HomeHeader;