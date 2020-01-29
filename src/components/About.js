import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import {activateEasterEgg} from '../actions/easterEggs'
import { connect } from 'react-redux'
import profile_picture_bw from '../assets/images/profile-picture-black_and_white.jpg'
import profile_picture_color from '../assets/images/profile-picture-color.jpg'
import profile_picture_alternative from '../assets/images/profile-picture-alternative.jpg'
import './AppFormating.css'

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
    this.props.activateEasterEgg('profilePictureClicked')
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
    this.props.activateEasterEgg('profilePictureHovered')
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
            <h3 className='text-left'>Software Developer, Consultant</h3>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col xs={12} md={12}>      
            <p className='text-left  text-normal'>
              I'm consultant during the day, I transform into a software developer at night. I am a fast learner and passionate problem-solver.
            </p>
            <br></br>
            <ul className='text-left text-normal'>
              <li ><span className="li">The Developer life:</span>
                <p>
                    Long-time tech enthusiast, I decided to scale-up a hobby to a skill. I am a full-stack web-developer and exploring different type of technologies:
                    <ul>
                        <br></br>
                        <li>
                            I graduated from the <a href='https://flatironschool.com/'><b>Flatiron School</b></a> in 2018.
                            Since then I built a few Web App. For example, I created a <a href='https://lightnino.herokuapp.com/'><b>BlackJack game</b></a> 
                            <i>(click on BlackJack in the NavBar to play).</i>
                            <b> I am now working now on a meal planning webapp</b>, offering recipes with local and seasonal produce only. 
                            An easy way to reduce our carbon footprint without even thinking about it! 
                            <i> If you like the idea, <a href="mailto:contact.bechev@gmail.com">please reach out!</a> 
                             I am looking for some help for the design and helping me with adding features.</i>
                        </li><br></br>
                        <li>
                            I got myself interested in <b>Cryptocurrencies</b> and attended the <b> Buidlbootcamp</b>,
                             where I went deep in the mechanics of bitcoin by rebuilding bit by bit a light version of the protcol.<br></br>
                        </li><br></br>
                        <li>
                            I got an internal Data Science certification from my day job where I took many online classes using various technologies, 
                            programing languages and libraries (R, Python, Pandas, Numpy).
                        </li>
                    </ul>
                    
                </p>
              </li>
              <br></br>
              <li><span className="li">The Consulting life:</span>
                <p>
                  With a specialization in the financial industry, I have been working as a <b>management consultant</b> for ~7 years. I <b>solve strategic and organizational problems</b> for my clients executing both data-driven and qualitative analysis.
                  I have been leveraging those years of problem solving experience to create tailor-made, and easy to execute solutions for my clients.
                </p>
              </li>
            </ul>
            <br></br>
            <br></br>
            <p className='text-left text-normal'>Outside of work, one would say that I spend too much time on video games, but I also love traveling and eating freshly baked croissants from my home country. FRANCE!</p>
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

const mapDispatchToProps = dispatch => {
      return {
        activateEasterEgg: (easterEgg) => dispatch(activateEasterEgg(easterEgg)),
      }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(About);
