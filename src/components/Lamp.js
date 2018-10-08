import React, { Component } from 'react';
import { connect } from 'react-redux'
import {turnLightsOn, turnLightsOff, activateEasterEgg } from '../actions/easterEggs'
import lampGrey from '../assets/images/logos/lamp-grey.png'
import lamp from '../assets/images/logos/lamp.png'
import './NavigationBar.css'

class Lamp extends Component {
  
  constructor(){
    super()
    this.state = {
        isLampOn: false
    }
  }

  renderLamp = () => {
    if(window.location.pathname ==='/contact'){
      if(this.state.isLampOn){
        return(
          <div>
            <img src={lamp} alt='lamp' height="25" width="25"></img>
          </div>
        )
      }else{
        return(
          <div>
            <img src={lampGrey} alt='lamp' height="25" width="25"></img>
          </div>
        )
      }
    }
  }
  
  toggleIcon = () => {
    if(this.state.isLampOn) {
      this.props.turnLightsOff()
      this.setState({
        isLampOn: false
      })
    } else {
      this.props.turnLightsOn()
      this.props.activateEasterEgg('lights')
      this.setState({
        isLampOn: true
      })
    }
  }

  render() {
    return (
      <div onClick={this.toggleIcon}>
        {this.renderLamp()}
      </div>
      )
    }
}


const mapStateToProps = state => {
  return {
    easterEggs: state.easterEggs
  }
}

const mapDispatchToProps = dispatch => {
      return {
        turnLightsOn: () => dispatch(turnLightsOn()),
        turnLightsOff: () => dispatch(turnLightsOff()),
        activateEasterEgg: (easterEgg) => dispatch(activateEasterEgg(easterEgg)),
      }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Lamp);
