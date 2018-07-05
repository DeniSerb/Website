import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
        <div className="home">

          <img src="pena.jpg" alt="Картинка не доступна =("></img>
          <div className="container-fluid penoizol">

            <h2>
              Пеноизол
            </h2>

            <h5>
              Тепло Вашего дома – это спокойствие Вашей души
            </h5>

            <p>
              Пеноизол  – универсальный теплоизоляционный материал, который  используется для утепления жилых и промышленных объектов. Достоинствами пеноизола , которые  выделяют его <br /> среди других видов теплоизоляционных материалов являются  высокие тепло и звукоизоляционные  свойства, долговечность, стойкость к температурным колебаниям<br /> и повышению влажности, пожаробезопасность.
            </p>

          </div>
        </div>
    );
  }
}

export default HomePage;
