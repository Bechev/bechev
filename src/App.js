import React, { Component } from 'react';
import Home from './components/Home.js'
import NavigationBar from './components/NavigationBar.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <Home/>
      </div>
    );
  }
}

export default App;
