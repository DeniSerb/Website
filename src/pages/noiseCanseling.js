import React from 'react';
import {
  Container,
  Row,
  Col,
  Table,
  TableHead,
  TableBody
}            from 'mdbreact';

const NoiseCanseling = () => (
  <div className="noise-wrapper">
    <Container>
       <h1 className="h1-responsive font-weight-bold my-5 text-center one">Шумоизоляция</h1>
       <Row>
         <Col md="6">
         <img src="images/31.jpg" alt="noise" />
         </Col>
         <Col md="6">
          <p>Пеноизол также является эффективным звукоизоляционным материалом и отлично подходит для звукоизоляции дома. Практическое поглощение звуковых волн в высоком и среднем диапазоне частот обеспечивается мелкими открытыми пеноизольными ячейками. Это акустическое качество всецело отвечает требованиям современной строительной концепции «полной тишины».</p>
          <p>Слой  толщиной 50 мм поглощает до 85% звуковых колебаний. Наиболее интенсивное поглощение звука наблюдается при 800-3200 Гц, максимальное при 1000 Гц, что объясняется явлением резонанса в ячейках и капиллярах материала. Именно поэтому  материал идеально подходит для звуко- и теплоизоляции  межкомнатных перегородок, потолков, крыш.</p>
          </Col>
       </Row>
      <h4 className="h1-responsive font-weight-bold my-5 text-center">
        Звукоизоляционные испытания материала Пеноизол
      </h4>
        <Table striped responsive small bordered>
        <TableHead>
          <tr>
            <th>Частота,Гц</th>
            <th>Толщина = 95мм</th>
            <th>Толщина = 44мм</th>
            <th>Толщина = 24мм</th>
          </tr>
        </TableHead>
        <TableBody>
          <tr>
            <td>200</td>
            <td>26</td>
            <td>12</td>
            <td>8</td>
          </tr>
          <tr>
            <td>300</td>
            <td>40</td>
            <td>27</td>
            <td>25</td>
          </tr>
          <tr>
            <td>400</td>
            <td>43</td>
            <td>27</td>
            <td>26</td>
          </tr>
          <tr>
            <td>500</td>
            <td>41</td>
            <td>25</td>
            <td>20</td>
          </tr>
          <tr>
            <td>600</td>
            <td>36</td>
            <td>27</td>
            <td>18</td>
          </tr>
          <tr>
            <td>800</td>
            <td>42</td>
            <td>27</td>
            <td>26</td>
          </tr>
          <tr>
            <td>1000</td>
            <td>68</td>
            <td>38</td>
            <td>36</td>
          </tr>
          <tr>
            <td>1200</td>
            <td>70</td>
            <td>36</td>
            <td>28</td>
          </tr>
          <tr>
            <td>1400</td>
            <td>68</td>
            <td>48</td>
            <td>50</td>
          </tr>
          <tr>
            <td>1600</td>
            <td>52</td>
            <td>58</td>
            <td>68</td>
          </tr>
          <tr>
            <td>1800</td>
            <td>50</td>
            <td>66</td>
            <td>57</td>
          </tr>
          <tr>
            <td>2000</td>
            <td>62</td>
            <td>68</td>
            <td>57</td>
          </tr>
          <tr>
            <td>2200</td>
            <td>54</td>
            <td>50</td>
            <td>60</td>
          </tr>
          </TableBody>
        </Table>
    </Container>
  </div>
);

export default NoiseCanseling;
