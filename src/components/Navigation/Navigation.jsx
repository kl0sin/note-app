import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

export class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <Link to="/login">Login page</Link>
      </nav>
    )
  }
}