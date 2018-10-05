import React, { Component } from 'react';

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
        const colorStyle = this.state.isHovering ? 'black' : 'red' 
        return (
        <div>
            <h2 style={{color:colorStyle}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>0/1</h2>
        </div>
        );
    }
}

export default EGCounter;
