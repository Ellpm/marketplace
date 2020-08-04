import React, { Component } from 'react'

import { Wrapper, Login, Label, Input, Button, BntWrapper, ErrorForm } from './styled'

/**
 * LoginScreen
 */
class LoginScreen extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    login: '',
    password: '',
    errors: false,
    errorMessage: '',
  }

  inputChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }

  loginBtnHandler = (e) => {
    const {login, password} = this.state
    if (!login || !password) {
      this.setState({
        errors: true,
        errorMessage: 'Не заполнена форма'
      })
    } else {
      this.checkAuth(login, password)
    }
  }

  checkAuth = (login, password) => {
    if (login === 'admin' && password === 'qwerty') {
      this.setState({errors: false})
      alert("YES")
    } else {
      this.setState({
        errors: true,
        errorMessage: 'Неправильный логин/пароль'
      })
    }
  }

  showError = () => {
    const {errorMessage} = this.state
    return(
      <ErrorForm>{errorMessage}</ErrorForm>
    )
  }

  render() {
    const {login, password, errors} = this.state;
    return (
      <Wrapper>
        <Login>
          { errors ? this.showError() : (<></>) }
          <Label>Логин</Label>
          <Input
            type="text"
            name="login"
            value={login}
            onChange={this.inputChangeHandler}
          />
          <Label>Пароль</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.inputChangeHandler}
          />
          <BntWrapper>
            <Button onClick={this.loginBtnHandler}>Войти</Button>
          </BntWrapper>
        </Login>
      </Wrapper>
    );
  }
}


export default LoginScreen;
