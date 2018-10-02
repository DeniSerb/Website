import React from 'react';

import {
  Container,
  Row,
  Col,
  Table,
  TableHead,
  TableBody
}            from 'mdbreact';

const EnergyEfficiency = () => (
  <div className="energy-wrapper">
    <Container>
      <h1 className="h1-responsive font-weight-bold my-5 text-center">
        Економия енергии
      </h1>
      <h5 className="h1-responsive font-weight-bold my-5 text-center">
        Затраты на утепление окупаются на второй год эксплуатации дома!
      </h5>
      <Row>
      <Col md="6">
        <img src="images/21.jpg" width="100%" alt="wall" />
      </Col>
      <Col md="6">
      <p>
        Оплата коммунальных услуг в нынешние времена может ощутимо сказаться на семейном бюджете. 
        Причем большую часть этой стоимости составляют счета за отопление.
        Известно, что потеря чуть ли не половины тепла, выделяемого отопительной системой, происходит 
        по причине того, что стены и крыша частного дома не были должным образом утеплены. Жидкая пена под давлением 
        полностью заполнит все полости и пустоты. Пена обеспечит полную герметизацию; не осядет со временем; 
        не ухудшит своих теплоизолирующих свойств, как стекловолокно или целлюлозные утеплители.
        Особенность этого материала заключается в том, что он владеет очень низким коэффициентом 
        (0,035 - 0,047), что позволяет при небольшой толщине материала гарантировать высокие 
        теплоэнергетические свойства дома. Вследствие,  экономия энергии составляет от 30 до 50 и 
        более процентов, в зависимости от того, в каком состоянии было строение до утепления. 
      </p>
      </Col>
      </Row>
      <h1 className="h1-responsive font-weight-bold my-5 text-center">
        Физичиские свойства
      </h1>
      <div class="table-responsive">
        <Table striped responsive small bordered>
        <TableHead>
          <tr>
            <th>Показатели:</th>
            <th>Еденицы</th>
            <th>Значение</th>
          </tr>
        </TableHead>
        <TableBody>
          <tr>
            <td className="left">Теплопроводность пеноизола</td>
            <td>Вт/м.С</td>
            <td>0,035-0,047</td>
          </tr>
          <tr>
            <td className="left">Предел прочности при сжатии (при 10-процентной деформации)</td>
            <td>кг/см²</td>
            <td>0,07-0,05</td>
          </tr>
          <tr>
          <td className="left">Предел прочности при изгибе</td>
            <td>кг/см²</td>
            <td>0,10-0,25</td>
          </tr>
          <tr>
          <td className="left">Предел прочности при растяжении</td>
            <td>кг/см²</td>
            <td>0,05-0,08</td>
          </tr>
          <tr>
          <td className="left">Водопоглощение за 24 часа (по массе)</td>
            <td>%</td>
            <td>10,5-20,0</td>
          </tr>
          <tr>
          <td className="left">Влажность(по массе)</td>
            <td>%</td>
            <td>5,0-14,5</td>
          </tr>
          <tr>
          <td className="left">Диапазон рабочих температур</td>
            <td>℃</td>
            <td>от минус 50 до плюс 120</td>
          </tr>
          <tr>
          <td className="left">Время самостоятельного горения</td>
            <td>сек</td>
            <td>0</td>
          </tr>
          <tr>
          <td className="left">Группа горючести</td>
            <td></td>
            <td>не нижу Г2(трудногорючий)</td>
          </tr>
          <tr>
          <td className="left">Группа воспламеняемости</td>
            <td></td>
            <td>не ниже В2(умеренно воспламеняемый)</td>
          </tr>
          <tr>
          <td className="left">Группа воспламеняемости</td>
            <td></td>
            <td>не ниже Д1(с малой дымообразующей способностью 160 гк/кв.м)</td>
          </tr>
          </TableBody>
        </Table>
      </div>
    </Container>
  </div>
);

export default EnergyEfficiency;
