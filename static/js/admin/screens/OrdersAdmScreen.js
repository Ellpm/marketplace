import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { BDiv, Col  } from 'bootstrap-4-react';

import { SERVER_ADDR } from '../../constans'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import OrdersList from '../components/Orders/OrdersList'

import './mainAdm.css'
/**
 * LoginScreen
 */
export class OrdersAdmScreen extends Component { // eslint-disable-line react/prefer-stateless-function

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
          <div className="col" style={{width: '60%'}}>
            <h1>Заказы</h1>
            <OrdersList />
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

OrdersAdmScreen.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default OrdersAdmScreen;
