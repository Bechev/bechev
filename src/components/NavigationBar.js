import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import SiteTitle from './SiteTitle'
import EGCounter from './EGCounter'
import Lamp from './Lamp'
import github from '../assets/images/logos/github-grey.png'
import twitter from '../assets/images/logos/twitter-grey.png'
import instagram from '../assets/images/logos/instagram-grey.png'
import dev from '../assets/images/logos/dev-grey.png'
import './NavigationBar.css'

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
          <NavItem eventKey={1} href="/">
            Home
          </NavItem>
          <NavItem eventKey={1} href="portfolio">
            Portfolio
          </NavItem>
          {/* <NavItem eventKey={2} href="blog">
            Blog
          </NavItem> */}
          <NavItem eventKey={3} href="contact">
            Contact
          </NavItem>
          <NavItem eventKey={4} href="about">
            About
          </NavItem>
          {/* <NavItem eventKey={4} href="under_construction">
            Under Construction
          </NavItem> */}
        </Nav>
        
        <Nav className='social-networks'>
          <NavItem href="https://github.com/Bechev" target="_blank" rel="noopener noreferrer">
            <img src={github} alt='github-logo-grey' height="25" width="25"></img>
          </NavItem>
          <NavItem href="https://twitter.com/bct_here" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt='twitter-logo-grey' height="25" width="25"></img>
          </NavItem>
          <NavItem href="https://www.instagram.com/bechev_/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt='instagram-logo-grey' height="25" width="25"></img>
          </NavItem>
          <NavItem href="https://dev.to/bechev/" target="_blank" rel="noopener noreferrer">
            <img src={dev} alt='dev-logo-grey' height="25" width="42.5"></img>
          </NavItem>
          <NavItem>
            <Lamp/>
          </NavItem>
        </Nav>
        <EGCounter/>
      </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
