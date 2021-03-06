import React from 'react';
import { Container, Table, TableBody, TableHead  } from 'mdbreact';


const Price = () => (
  <div className="price-wrapper" id="price">
    <Container>
      <h2 className="h1-responsive font-weight-bold my-5 text-center">
        Выбрав утеплитель пеноизол именно у нас – вы сможете быстро, дешево и эффективно утеплить свой дом.
      </h2>
        <Table striped small bordered>
        <TableHead>
          <tr>
            <th colSpan="2">Основные работы:</th>
          </tr>
        </TableHead>
        <TableBody>
          <tr>
            <td>Заливка пеноизола от 60м³</td>
            <td>699 грн.</td>
          </tr>
          <tr>
            <td>Заливка пеноизола от 30 до 60м³</td>
            <td>729 грн.</td>
          </tr>
          <tr>
            <td>Заливка пеноизола от 5 до 30м³</td>
            <td>749 грн.</td>
          </tr>
          <tr>
            <td>Заливка пеноизола толщиной до 10 сантиметров</td>
            <td>70 грн/м.кв.</td>
          </tr>
          <tr>
            <td>Стоимость каждого добавочного сантиметра при толщине свыше 10 см.</td>
            <td>7 грн/м.кв.</td>
          </tr>
          <tr>
            <td>Транспортный расход (за пределы г. Киев), 1 км</td>
            <td>3 грн.</td>
          </tr>
          <tr>
            <td>Доставка пеноизола по городу Киев</td>
            <td>150 грн.</td>
          </tr>
          <tr>
            <td colSpan="2" className="table-subheading">Дополнительно:</td>
          </tr>
          <tr>
            <td>Сверление отверстий </td>
            <td>5 - 7 грн.</td>
          </tr>
          <tr>
            <td>Выезд и консультации специалиста по Киеву</td>
            <td>199 грн.</td>
          </tr>
          <tr>
            <td colSpan="2" className="table-subheading">Компоненты для производителей пеноизола:</td>
          </tr>
          <tr>
            <td>Смола  КФ-ТИ (1л)</td>
            <td>28.00 грн</td>
          </tr>
          <tr>
            <td>Пенообразователь АБСК (1л)</td>
            <td>80.00 грн.</td>
          </tr>
          <tr>
            <td>Ортофосфорная кислота 85% (1л)</td>
            <td>99.00 грн.</td>
          </tr>
          </TableBody>
        </Table>
    </Container>
  </div>
)

export default Price;
