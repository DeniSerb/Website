import React from 'react';
import {
  Container,
  Row,
  Col,
  Input
}            from 'mdbreact';

class Footer extends React.Component  {
  render() {
    return(
      <div className="footer-wrapper">
        <Container>
          <Row>
            <Col md="6" className="numbers">
               <h3 className="text-uppercase font-weight-bold"><strong>Оформить заказ</strong></h3>
               <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
               <h4><i className="fa fa-envelope mr-3 info"></i> example@mail.com</h4>
               <h4><i className="fa fa-phone mr-3 info"></i> + 380 123 456 78 90</h4>
               <h4><i className="fa fa-phone mr-3 info"></i> + 380 123 456 78 90</h4>
             </Col>
            <Col md="6"className="form">
              <div className="text-center">
                <h3 className="pink-text mb-5"><strong>Cвяжитесь с нами</strong></h3>
              </div>
              <Input
                label="Введите ваше имя"
                group
                type="text"
                validate
              />
              <Input
                label="Введите ваш email"
                group
                type="text"
                validate
              />
              <Input
                type="textarea"
                label="Сообщение"
                group
                validate
              />
              <div className="md-form pb-3">
              </div>
              <Row className="d-flex align-items-center mb-4">
                <Col md="12" className="text-center">
                  <button type="button" className="btn green-btn">
                    Отправить
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Footer;
