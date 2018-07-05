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
          <img className="logo" src="logo.jpg" onclick="topFunction()" alt=""></img>
        </Link>
       </div>
       <script>
        function topFunction() {
        document.documentElement.scrollTop = 0
          }   
       </script>
  
  <nav>
    <ul>
      <li>
        <Link to='/'>Главная</Link>
      </li>
       <li>
       <Link to='/AboutCompany'>О компании</Link>
      </li>
       <li>
       <Link to='/WhyPenoizol'>Почему пеноизол?</Link>
      </li>
       <li>
        <Link to='/SphereOfApplication'>Сфера применения</Link>
      </li>
       <li>
        <Link to='/Price'>Цена</Link>
      </li>
       <li>
        <Link to='/Contacts'>Контакты</Link>
      </li>
    </ul>
  </nav>

</header>
    );
  }
}

export default Header;
