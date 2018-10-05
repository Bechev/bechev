import React, { Component } from 'react';
import Letter from './Letter.js'
import EGCounter from './EGCounter.js'
// import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <EGCounter/>
        <Letter letter='b'/>
        <Letter letter='e'/>
        <Letter letter='c'/>
        <Letter letter='h'/>
        <Letter letter='e'/>
        <Letter letter='v'/>
        <Letter letter='.'/>
        <Letter letter='i'/>
        <Letter letter='o'/>
      </div>
    );
  }
}

export default Home;
