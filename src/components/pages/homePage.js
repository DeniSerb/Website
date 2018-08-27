import React, { Component } from 'react';
import FontAwesome          from 'react-fontawesome';
import ScrollUpButton       from "react-scroll-up-button";
import {
  Link
}                           from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (

        <div className="home">
          <ScrollUpButton
          style={{width: 40}}
          AnimationDuration={1000}
           />
          <div className="homeImg"></div>
          <div className="container penoizol">
            <h2>
              Пеноизол
            </h2>
            <h5>
              Тепло Вашего дома – это спокойствие Вашей души
            </h5>
            <p>
              Пеноизол  – универсальный теплоизоляционный материал, который  используется для утепления жилых и промышленных объектов. Достоинствами пеноизола, которые  выделяют его  среди других видов теплоизоляционных материалов являются  высокие тепло и звукоизоляционные  свойства, долговечность, стойкость к температурным колебаниям и повышению влажности, пожаробезопасность.
            </p>
          </div>

            <div className="container icons">
              <div className="col-lg-3 col-md-6 col-sm-12 iconWrapper">
                <Link to="/EnergyEfficiency">
                  <FontAwesome className="fa-bolt" size='5x'></FontAwesome>
                  <h3>Экономия</h3>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 iconWrapper">
                <Link to="/NoiseCanseling">
                  <FontAwesome className="fa-volume-up" size='5x'></FontAwesome>
                  <h3>Шумоизоляция</h3>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 iconWrapper">
                <Link to="/FireProtection">
                  <FontAwesome className="fa-fire-extinguisher" size='5x'></FontAwesome>
                  <h3>Безопасность</h3>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 iconWrapper">
                <Link to="/Price">
                  <FontAwesome className="fa-dollar" size='5x'></FontAwesome>
                  <h3>Выгодная цена</h3>
                </Link>
              </div>
            </div>
        </div>

    );
  }
}

export default HomePage;
