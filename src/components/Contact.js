import React, { Component } from 'react';
import {Grid,Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import dev from '../assets/images/logos/dev.png'
import devGrey from '../assets/images/logos/dev-grey.png'
import email from '../assets/images/logos/email.png'
import emailGrey from '../assets/images/logos/email-grey.png'
import github from '../assets/images/logos/github.png'
import githubGrey from '../assets/images/logos/github-grey.png'
import instagram from '../assets/images/logos/instagram.png'
import instagramGrey from '../assets/images/logos/instagram-grey.png'
import linkedin from '../assets/images/logos/linkedin.png'
import linkedinGrey from '../assets/images/logos/linkedin-grey.png'
import twitter from '../assets/images/logos/twitter.png'
import twitterGrey from '../assets/images/logos/twitter-grey.png'

class Contact extends Component {

  constructor(props){
    super(props)
    this.state = {
        colorsOn: false,
    }
  }

  render() {
    return (
      <div className="Contact">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <h1>Contact</h1>
              <br></br>
              <br></br>
              <br></br>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={6} md={2}>
              <a href="https://github.com/Bechev" target="_blank" rel="noopener noreferrer">
               <img src={this.props.easterEggs.lights.lightsOn ? github : githubGrey} alt='github-logo-grey' height="100"></img>
              </a>
            </Col>
            <Col xs={6} md={2}>
              <a href="https://twitter.com/bechev" target="_blank" rel="noopener noreferrer">
                <img src={this.props.easterEggs.lights.lightsOn ? twitter : twitterGrey} alt='github-logo-grey' height="100"></img>
              </a>
            </Col>
            <Col xsHidden md={2}>
              <a href="https://www.instagram.com/bechev_/" target="_blank" rel="noopener noreferrer">
                <img src={this.props.easterEggs.lights.lightsOn ? instagram : instagramGrey} alt='github-logo-grey' height="100"></img>
              </a>
            </Col>
            <Col xs={6} md={2}>
              <a href="mailto:placeholder@gmail.com">
                <img src={this.props.easterEggs.lights.lightsOn ? email : emailGrey} alt='github-logo-grey' height="100"></img>
              </a>
            </Col>
            <Col xs={6} md={2}>
              <a href="https://dev.to/bechev/" target="_blank" rel="noopener noreferrer">
                <img src={this.props.easterEggs.lights.lightsOn ? dev : devGrey} alt='github-logo-grey' height="100"></img>
              </a>
            </Col>
            <Col xsHidden md={2}>
              <a href="https://www.linkedin.com/in/bertrandchevalierdethevenard/" target="_blank" rel="noopener noreferrer">
                <img src={this.props.easterEggs.lights.lightsOn ? linkedin : linkedinGrey} alt='github-logo-grey' height="100"></img>
              </a>
            </Col>
          </Row>
        </Grid>;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    easterEggs: state.easterEggs
  }
}

export default connect(mapStateToProps)(Contact);

