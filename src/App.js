import React, { Component } from 'react';
import Letter from './components/Letter.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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

export default App;
