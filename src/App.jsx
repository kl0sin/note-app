import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';


import { Login } from './pages/Login/Login'
import { Navigation } from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="app__container">
            <Navigation />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
