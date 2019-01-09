import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

export class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <Link className="navigation__link" to="/">Home page</Link>
        <Link className="navigation__link" to="/login">Login page</Link>
      </nav>
    )
  }
}