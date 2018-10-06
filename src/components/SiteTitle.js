import React, { Component } from 'react';
import Letter from './Letter'
import './SiteTitle.css'

class SiteTitle extends Component {
    constructor(props){
        super(props)
        this.state = {
            siteTitle: ['b','e','c','h','e','v','.','i','o']
        }
    }

    renderTitle = () => {
        return (
            <div>
                {this.state.siteTitle.map((letter) => {
                    return (
                        <div className='floatLeft siteTitle'>
                            <Letter letter={letter}/>
                        </div>
                    )
                })}
            </div>
        )  
    }

    render() {
      return (
        <div className='siteTitle'>
            {this.renderTitle()}
        </div>
      );
    }

  }
  
  export default SiteTitle;
  