import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import profile_picture_bw from '../assets/images/profile-picture-black_and_white.jpg'
import profile_picture_color from '../assets/images/profile-picture-color.jpg'
import profile_picture_alternative from '../assets/images/profile-picture-alternative.jpeg'
import './About.css'

class About extends Component {

  constructor(props){
    super(props)
    this.state = {
        canHover: true,
        isHovering: false,
        profilePicture: 'black_and_white'
    }
  }

  toggleProfilePictureImage = () => {
    if(this.state.canHover) {
      this.setState({
        profilePicture: 'alternative',
        canHover: false
      })
    } else {
      this.setState({
        profilePicture: 'black_and_white',
        canHover: true
      })
    }
  }

  handleMouseEnter = () => {
    if(this.state.canHover){
      this.setState({
          isHovering: true
      })
    }
  }

  handleMouseLeave = () => {
      this.setState({
          isHovering: false
      })
  }

  renderProfilePicture = () =>{
    switch(this.state.profilePicture) {
      case 'color':
          return profile_picture_color 
      case 'alternative':
          return profile_picture_alternative
      default:
        return profile_picture_bw
    }
  }
    render() {
    
    return (
      <div className="About">
      <Grid>
        <Row >
          <Col xs={12} md={4}>
            <img src={this.state.isHovering ? profile_picture_color : this.renderProfilePicture()} 
              alt='profile_picture' 
              className="profilePicture" 
              onClick={this.toggleProfilePictureImage} 
              onMouseEnter={this.handleMouseEnter} 
              onMouseLeave={this.handleMouseLeave}>
            </img>    
          </Col>
          <Col xs={6} md={8}>
            <h1 className='text-left'>About</h1>
            <h3 className='text-left'>Developer, Consultant, Ninja</h3>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col xs={12} md={12}>      
            <p className='text-left text-paragraph'>
              Consultant during the day, I transform into a software developer at night. I am a fast learner and passionate problem-solver.
            </p>
            <br></br>
            <ul className='text-left text-paragraph'>
              <li ><span className="li">The Developer life:</span>
                <p>
                  Long-time tech enthusiat, I decided to scale-up a hobby to a skill. I am a full-stack web-developer.
                  I graduated from the <a href='https://flatironschool.com/'>Flatironschool</a>.
                  I currently focus on exploring React as a front-end framework. I worked with <b>Ruby on Rails, C++, Java, SQL</b>. 
                  As I learn, I write about it in my blog and try to keep a learning path through <b>daily katas that I publish on twitter</b>. 
                  <span className='whisper'> 
                    (Follow me <a href='https://twitter.com/bechev' target="_blank">here</a>), say hi and public shame me when I don't post!
                  </span> 
                </p>
              </li>
              <br></br>
              <li><span className="li">The Consulting life:</span>
                <p>
                  Specialized in the financial industry, I have been working as a <b>management consultant</b> for ~7 years. I am <b>solving strategic and organizational problems</b> for my clients executing both data-driven and qualitative analysis.
                  I am leveraging those years of problem solvings to propose tailor-made and easy to execute solutions.
                </p>
              </li>
              <br></br>
              <li><span className="li">The Ninja life:</span>
                <p>
                  That's just a joke...
                </p>
              </li>
            </ul>
            <br></br>
            <br></br>
            <p className='text-left text-paragraph'>Outside of work, one would say that I spend too much time on video games, but I also love traveling and eating freshly baked croissants from my home country. FRANCE!</p>
          </Col>
        </Row>
      </Grid>;      
      </div>
    );
  }
}

export default About;
