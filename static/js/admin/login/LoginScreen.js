import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { BDiv } from 'bootstrap-4-react';

import { SERVER_ADDR } from '../../constans'


export class LoginAdmScreen extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    login: '',
    password: '',
  }

  userInputHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }

  btnHandler = () => {
    const url = SERVER_ADDR + 'api/auth'
    const data = { login: this.state.login, password: this.state.password }
    fetch(url, {
      method: "POST",
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    }).then(resp => {
      return resp.json()
    }).then(data => {
      if (data.isAuth) {
        localStorage.setItem("GD_IS_AUTH", JSON.stringify([data]))
        window.location.href="/ffhdsksdkfsh/main"
      } else {
        alert("Неправильные логин или пароль")
      }
    })
  }

  render() {
    return (
      <div>
        <div>
          <label>Логин</label>
          <input type="text" name="login" value={this.state.login} onChange={this.userInputHandler} />
        </div>
        <div>
          <label>Пароль</label>
          <input type="password" name="password" value={this.state.password} onChange={this.userInputHandler} />
        </div>
        <div>
          <button onClick={this.btnHandler}>Войти</button>
        </div>
      </div>
    );
  }
}

LoginAdmScreen.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default LoginAdmScreen;
