import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar.js'
import Home from './components/Home.js'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/portfolio" component={Portfolio} /> */}
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
