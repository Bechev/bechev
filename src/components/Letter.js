import React, { Component } from 'react';
import './Letter.css'

class Letter extends Component {
    constructor(props){
        super(props)
        this.state = {
            letterColor: '#000000'
        }
    }

    changeColor = () => {
        var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
        this.setState({
            letterColor: randomColor
        })
    }
    
    render() {
      return (
        <div className='letter'>
          <h1 style={{color:this.state.letterColor}} onClick={this.changeColor}>{this.props.letter}</h1>
        </div>
      );
    }
  }
  
  export default Letter;
  