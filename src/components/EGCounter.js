import React, { Component } from 'react';
import './EGCounter.css';

class EGCounter extends Component {

    constructor(props){
        super(props)
        this.state = {
            isHovering: false
        }
    }

    handleMouseEnter = () => {
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
            Easter eggs founds: 0/2
            </h2>
        </div>
        );
    }
}

export default EGCounter;
