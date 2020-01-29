import React, { Component } from 'react';
import Letter from './Letter'
import './SiteTitle.css'

class SiteTitle extends Component {
    constructor(props){
        super(props)
        this.state = {
            siteTitle: ['b','e','r','t','r','a','n','d','.','c','h','e','v','a','l','i','e','r','.','c','o','m']
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
  