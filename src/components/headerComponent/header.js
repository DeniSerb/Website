// import React, { Component } from 'react';
// import {
//   Link
// }                           from 'react-router-dom';
// import ResponsiveMenu       from 'react-responsive-navbar';
// import { FaBars, FaClose }  from 'react-icons/lib/fa';


// class Header extends Component {
//   render() {
//     return (
// <header>
//        <div className="logotype">
//         <Link to="/">
//           <img className="logo" src="logo.jpg" onclick="topFunction()" alt=""></img>
//         </Link>
//        </div>
//        <script>
//         function topFunction() {
//         document.documentElement.scrollTop = 0
//           }   
//        </script>

//   <nav>
//   <ResponsiveMenu
//         menuOpenButton={<FaBars size={30} color="Gray" />}
//         menuCloseButton={<FaClose size={30} color="Gray" />}
//         changeMenuOn="1150px"
//         largeMenuClassName="large-menu"
//         smallMenuClassName="small-menu"
//         menu={
//     <ul className="nav__menu">
//       <li>
//         <Link to='/'>Главная</Link>
//       </li>
//        <li>
//        <Link to='/AboutCompany'>О компании</Link>
//       </li>
//        <li className="nav__menu-item">
//        <Link to='/WhyPenoizol'>Почему пеноизол?</Link>
//        <Submenu />
//       </li>
//        <li>
//         <Link to='/SphereOfApplication'>Сфера применения</Link>
//       </li>
//        <li>
//         <Link to='/Price'>Цена</Link>
//       </li>
//        <li>
//         <Link to='/Contacts'>Контакты</Link>
//       </li>
//     </ul>
//         }
//       />
//   </nav>

// </header>
//     );
//   }
// }

// class Submenu extends React.Component {
//   render() {
//     return (
//       <ul className="nav__submenu">
//         <Link to='/EnergyEfficiency'>
//          <li className="nav__submenu-item-1 ">
//           Экономия энергии
//          </li>
//         </Link>
//         <Link to='/NoiseCanseling'>
//           <li className="nav__submenu-item ">
//             Шумоизоляция
//           </li>
//         </Link>
//         <Link to='/FireProtection'>
//           <li className="nav__submenu-item ">
//             Безопасность
//           </li>
//         </Link>
//       </ul>
//     )
//   }
// }



// export default Header;

// Navbar

// Search

import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
      return (
        <Router>
          <Navbar className="header" dark expand="md" scrolling>
              <NavbarBrand href="/" className="logo-wrapper">
                <img className="logo" src="logo.jpg" onclick="topFunction()" alt="" width="60%"></img>
              </NavbarBrand>
              { !this.state.isWideEnough && <NavbarToggler color="red" onClick = { this.onClick } />}
              <Collapse isOpen = { this.state.collapse } navbar>
                  <NavbarNav left className="items">
                    <NavItem active>
                        <NavLink to="#">Главная</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">О компании</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">Сфера применения</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">Контакты</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">Цена</NavLink>
                    </NavItem>
                    <NavItem>
                      <Dropdown>
                        <DropdownToggle nav caret>Почему пеноизол?</DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem href="#">Экономия энергии</DropdownItem>
                            <DropdownItem href="#">Шуиоизоляция</DropdownItem>
                            <DropdownItem href="#">Безопасность</DropdownItem>
                          </DropdownMenu>
                      </Dropdown>
                    </NavItem>
                  </NavbarNav>
              </Collapse>
          </Navbar>
      </Router>
    );
    }
}

export default Header;