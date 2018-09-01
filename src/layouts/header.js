import React, { Component } from 'react';
import PropTypes            from 'prop-types'
import {
  Navbar,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
}                            from 'mdbreact';
import {
   Link,
   withRouter
 }                           from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      scrolled: false,
    };
    this.onClick = this.onClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    if (window.scrollY > 650) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  onClick(){
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const { location } = this.props

    return (
      <Navbar dark
        className={`header
          ${location.pathname === '/' ? null : 'colored-header'}
          ${this.state.scrolled ? 'fixed colored-header' : null}`
        }
        expand="xl"
        sticky="top"
      >
        <div className="container-fluid">
          <Link to="/">
            <div className="logo" to="/" />
          </Link>
          { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } /> }
          <Collapse isOpen = { this.state.collapse } className={this.state.collapse ? 'dark' : null} navbar>
            <NavbarNav right className="items">
              <NavItem active>
                <NavLink to="/">Главная</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>Почему пеноизол</DropdownToggle>
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
        </div>
      </Navbar>
    );
  }
}

export default withRouter(Header);
