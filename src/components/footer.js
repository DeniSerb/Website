import React from 'react';
import {
  Container,
  Row,
  Col,
  Input
}            from 'mdbreact';
import axios from 'axios';

class Footer extends React.Component  {
  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    axios({
        method: "POST",
        url:"http://localhost:5000/send",
        data: {
            name: name,
            email: email,
            message: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent.");
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
  }

  resetForm(){
    document.getElementById('contact-form').reset();
  }

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
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <Input
                label="Введите ваше имя"
                name="name"
                id="name"
                group
                type="text"
                validate
              />
              <Input
                label="Введите ваш email"
                name="email"
                id="email"
                group
                type="text"
                validate
              />
              <Input
                type="textarea"
                label="Сообщение"
                name="message"
                id="message"
                group
                validate
              />
              <div className="md-form pb-3">
              </div>
              <Row className="d-flex align-items-center mb-4">
                <Col md="12" className="text-center">
                  <button type="submit" className="btn green-btn">
                    Отправить
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
};

export default Footer;
