import React, { Component } from 'react';
import './SiteTitle';

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
        const colorStyle = this.state.isHovering ? '#F0F0F0' : '#ffffff' 
        return (
        <div>
            <h2 className='EGCounter' style={{color:colorStyle}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            {/* Easter eggs founds: TBD */}
            </h2>
        </div>
        );
    }
}

export default EGCounter;
