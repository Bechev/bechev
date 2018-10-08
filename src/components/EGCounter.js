import React, { Component } from 'react';
import {connect} from 'react-redux'
import {activateEasterEgg} from '../actions/easterEggs'

class EGCounter extends Component {

    constructor(props){
        super(props)
        this.state = {
            isHovering: false
        }
    }

    handleMouseEnter = () => {
        this.props.activateEasterEgg('easterEggCounter')
        this.setState({
            isHovering: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            isHovering: false
        })
    }

    render() {
        const colorStyle = this.state.isHovering ? '#808080' : '#ffffff' 
        return (
        <div>
            <h2 className='EGCounter' style={{color:colorStyle}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            Easter eggs found: TBD
            </h2>
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
      
  export default connect(mapStateToProps, mapDispatchToProps)(EGCounter);
  
