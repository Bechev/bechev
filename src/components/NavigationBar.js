import React, { Component } from 'react';
import SiteTitle from './SiteTitle'
import EGCounter from './EGCounter'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class NavigationBar extends Component {
  render() {
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <SiteTitle/>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="Portfolio">
            Portfolio
          </NavItem>
          <NavItem eventKey={2} href="Blog">
            Blog
          </NavItem>
          <NavItem eventKey={3} href="Contact">
            Contact
          </NavItem>
          <NavItem eventKey={4} href="About">
            About
          </NavItem>
        </Nav>
        <EGCounter/>
      </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
