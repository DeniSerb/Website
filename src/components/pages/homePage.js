import React, { Component } from 'react';
import FontAwesome          from 'react-fontawesome';
import {
  Link
}                           from 'react-router-dom';



class HomePage extends Component {
  render() {
    return (

        <div className="home">
          <div className="homeImg"></div>
          <div className="container-fluid penoizol">
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

            <div className="icons">
              <div className="iconWrapper">
                <Link to="/EnergyEfficiency">
                  <FontAwesome className="fa-bolt" size='5x'></FontAwesome>
                  <h3>Экономия энергии</h3>
                </Link>
              </div>
              <div className="iconWrapper">
                <Link to="/NoiseCanseling">
                  <FontAwesome className="fa-volume-up" size='5x'></FontAwesome>
                  <h3>Шумоизоляция</h3>
                </Link>
              </div>
              <div className="iconWrapper">
                <Link to="/FireProtection">
                  <FontAwesome className="fa-fire-extinguisher" size='5x'></FontAwesome>
                  <h3>Безопасность</h3>
                </Link>
              </div>
              <div className="iconWrapper">
                <Link to="/Price">
                  <FontAwesome className="fa-dollar" size='5x'></FontAwesome>
                  <h3>Доступная цена</h3>
                </Link>
              </div>
            </div>
        </div>

    );
  }
}

export default HomePage;
