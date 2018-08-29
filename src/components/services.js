import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
}                           from 'mdbreact';
import { CARDS }            from '../models/cardsData'

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
              {CARDS.map((card, index) => (
                <div className={`services-item no-gutters row ${index === 1 || index === 3? 'right' : null}`}>
                  <Col md="6">
                    <img src={card.imgUrl} width="100%" height="auto" alt="wall" />
                  </Col>
                  <Col md="6">
                    <h2>{card.title}</h2>
                    <p className="grey-text mb-md-0 mb-5">
                      {card.desc}
                    </p>
                    <hr />
                    <span className="read-more">
                      Подробнее
                    </span>
                  </Col>
                </div>
              ))
            }
          </section>
        </Container>
      </div>
    );
  }
}

export default HomeHeader;
