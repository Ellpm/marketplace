import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';
//import { BDiv, Col  } from 'bootstrap-4-react';

import { SERVER_ADDR } from '../../constans'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import ProductList from '../components/Products/ProductList'
import OrdersList from '../components/Orders/OrdersList'

import './mainAdm.css'
/**
 * LoginScreen
 */
export class MainAdmScreen extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    isLogin: false
  }

  componentWillMount() {
    this.checkStorage()
  }

  userInputHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }

  checkStorage = () => {
    let isAuth = localStorage.getItem("GD_IS_AUTH")
    isAuth = JSON.parse(isAuth)

    if (Array.isArray(isAuth)) {
      this.setState({isLogin: true})
    } else {
      window.location.href = '/ffhdsksdkfsh'
    }
  }


  render() {
    if (this.state.isLogin) {
      return (
        <div>
          <div className="col">
            <LeftMenu />
          </div>
          <div className="col">
            <p>1</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Перенаправление</h1>
        </div>
      );
    }

  }
}

MainAdmScreen.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default MainAdmScreen;
