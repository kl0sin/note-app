import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';


import { Login } from './pages/Login/Login'
import { Navigation } from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Navigation />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Login />
      </div>
    );
  }
}

export default App;
