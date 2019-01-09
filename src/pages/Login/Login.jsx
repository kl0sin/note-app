import React, { Component } from 'react'
import './Login.scss';

export  class Login extends Component {
  render() {
    return (
      <form className="login">
        <h2 className="login__title">Login into your account!</h2>
        <label htmlFor="" className="login__label">
          User name or e-mail
          <input type="text" className="login__input"/>
        </label>
        <label htmlFor="" className="login__label">
          Password
          <input type="password" className="login__input"/>
        </label>
        <div className="login__actions">
          <button className="login__button login__button--secondary">
            Create Account
          </button>
          <button className="login__button">
            Login
          </button>
        </div>
      </form>
    )
  }
}
