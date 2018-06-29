import React, { Component } from 'react';
import {
  Link
}                           from 'react-router-dom';

class Header extends Component {
  render() {
    return (
<header>
  
       <div className="logotype">
            <Link to="/">
              <img className="logo" src="logo.jpg" alt="Картинка не доступна =(" ></img>
            </Link>
          </div>

  <nav>
    <ul>
      <li className="first">
        <Link to='/'>Главная</Link>
      </li>
       <li>
       <Link to='/Products'>О компании</Link>
      </li>
       <li>
       <Link to='/'>Почему пеноизол?</Link>
      </li>
       <li>
        <Link to='/'>Сфера применения</Link>
      </li>
       <li>
        <Link to='/'>Цена</Link>
      </li>
       <li className="last">
        <Link to='/'>Контакты</Link>
      </li>
    </ul>
  </nav>

</header>
    );
  }
}

export default Header;
