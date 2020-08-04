import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { BDiv, Col  } from 'bootstrap-4-react';

import { SERVER_ADDR } from '../../constans'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import ProductMenu from '../components/Products/ProductMenu'
import AddCountry from '../components/Countries/AddCountry'
import CountriesList from '../components/Countries/CountriesList'


import './mainAdm.css'

export class CountryAdmScreen extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    isLogin: false
  }

  componentWillMount() {
    this.checkStorage()
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
            <h1>Ассортимент</h1>
            <ProductMenu />
            <AddCountry />
            <CountriesList />
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

CountryAdmScreen.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default CountryAdmScreen;
