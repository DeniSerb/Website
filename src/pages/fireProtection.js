import React from 'react';
import {
  Container,
  Row,
  Col
}            from 'mdbreact';

const FireProtection = () => (
  <div className="protection-wrapper">
    <Container>
      <h1 className="h1-responsive font-weight-bold my-5 text-center">
        Безопасность
      </h1>
      <h4 className="h1-responsive font-weight-bold my-5 text-center">
        Испытания пеноизола на горючесть
      </h4>
      <Row>
        <Col md="6">
          <img src="images/41.jpg" width="100%" alt="fire"/>
        </Col>
        <Col md="6">
          <p>
            Пеноизол испытывали и на горючесть в Центре противопожарных исследований
            и тепловой защиты в строительстве и ЦНИИСК им. В.А.Кучеренко.
            Отсутствие способности к развитию стабильного процесса горения при испытании, 
            к самостоятельному горению после исчезновения источника зажигания и к образованию 
            расплава при горении – свидетельствует о пониженной пожарной опасности пеноизола, 
            в сравнении с традиционно горючими материалами (древесина, пенополистирол).
          </p>
        </Col>
      </Row>
      <h4 className="h1-responsive font-weight-bold my-5 text-center">
        Испытания пеноизола на токсичность
      </h4>
      <Row>
        <Col md="6">
          <p>
            Аккредитированным испытательным центром "КАРБЭКОТЕСТ" подтверждено, 
            что концентрация веществ, выделяющихся из пеноизола, не превышает
            норм ПДК. Суммарный показатель токсичности не превышает единицы.
            Таким образом, проведенный комплекс работ по созданию экологически
            безопасного карбомидного пенопласта нового поколения позволил
            рекомендовать его для реализации в качестве материала для тепловой
            изоляции в виде среднего слоя ограждающих конструкций в жилом и
            промышленном строительстве.
          </p>
        </Col>
        <Col md="6">
          <img src="images/42.jpg" width="100%" alt="green"/>
        </Col>
      </Row>
    </Container>
  </div>
);

export default FireProtection;
