import React from 'react';
import {
  Container,
  Row,
  Col,
  Input
}            from 'mdbreact';

class ContactForm extends React.Component  {
  render() {
    return(
      <div className="form-wrapper">
        <Container>
          <section className="form-light">
            <Row>
              <Col md="6">
                <div className="text-center">
                  <h3 className="pink-text mb-5"><strong>Свяжитесь с нами</strong></h3>
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
          </section>
        </Container>
      </div>
    );
  }
};

export default ContactForm;
