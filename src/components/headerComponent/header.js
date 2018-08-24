import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import {
   Link
 }                           from 'react-router-dom';


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
        <Navbar light color="blue-grey lighten-5" className="header" expand="xl" sticky="top">
          <NavbarBrand className="logo-wrapper">
            <Link to="/">
              <img className="col-md-6 logo" src="logo.jpg" onclick="topFunction()" alt="" width="60%"></img>
            </Link>
          </NavbarBrand>
          <script>
            function topFunction() {
              window.scrollTo(0,0)
            }
          </script>
          { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav right className="items">
              <NavItem active>
                <NavLink to="/">Главная</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>Почему пеноизол?</DropdownToggle>
                    <DropdownMenu>
                      <Link to="/EnergyEfficiency">
                        <DropdownItem className="drop-down">Экономия энергии</DropdownItem>
                      </Link>
                      <Link to="/NoiseCanseling">
                        <DropdownItem className="drop-down">Шумоизоляция</DropdownItem>
                      </Link>
                      <Link to="/FireProtection">
                        <DropdownItem className="drop-down">Безопасность</DropdownItem>
                      </Link>
                    </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink to="/SphereOfApplication">Сфера применения</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Contacts">Контакты</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="Price">Цена</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
    );
    }
}

export default Header;
