import React, { Component } from 'react';
import {activateEasterEgg} from '../actions/easterEggs'
import { connect } from 'react-redux'
import './SiteTitle.css'

class Letter extends Component {
    constructor(props){
        super(props)
        this.state = {
            letterColor: '#808080'
        }
    }

    changeColor = () => {
        this.props.activateEasterEgg('titleColors')
        var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        this.setState({
            letterColor: randomColor
        })
    }
    
    render() {
      return (
        <div>
          <h1 className='letter' style={{color:this.state.letterColor}} onClick={this.changeColor}>{this.props.letter}</h1>
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
      
  export default connect(mapStateToProps, mapDispatchToProps)(Letter);
  