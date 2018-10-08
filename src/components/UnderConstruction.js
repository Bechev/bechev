import React, { Component } from 'react';
import {activateEasterEgg} from '../actions/easterEggs'
import { connect } from 'react-redux'
import Eiffel_1 from '../assets/images/Eiffel_tower_step1.jpg'
import Eiffel_2 from '../assets/images/Eiffel_tower_step2.jpg'
import Eiffel_3 from '../assets/images/Eiffel_tower_step3.jpg'
import Eiffel_4 from '../assets/images/Eiffel_tower_step4.jpg'

class UnderConstruction extends Component {

  constructor(props){
    super(props)
    this.state = {
      eiffel_tower: [Eiffel_1, Eiffel_2, Eiffel_3, Eiffel_4],
      construction_step: 0,
    }
  }

  incrementEiffelTowerConstruction = () => {
    this.props.activateEasterEgg('underConstruction')
    if(this.state.construction_step !== 3){
      this.setState ({
        construction_step: this.state.construction_step + 1
      })
    } else {
      this.setState ({
        construction_step: 0
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Under Construction</h2>
        <br></br>
        <img src={this.state.eiffel_tower[this.state.construction_step]} 
              alt='under_construction' 
              onClick={this.incrementEiffelTowerConstruction}>
            </img> 
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
    
export default connect(mapStateToProps, mapDispatchToProps)(UnderConstruction);
