import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { BDiv, Col  } from 'bootstrap-4-react';

import { SERVER_ADDR } from '../../constans'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import ProductMenu from '../components/Products/ProductMenu'
import AddBrand from '../components/Brands/AddBrand'
import BrandList from '../components/Brands/BrandList'

import './mainAdm.css'

export class BrandsAdmScreen extends Component { // eslint-disable-line react/prefer-stateless-function

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
          <div className="col leftMenu">
            <LeftMenu />
          </div>
          <div className="col mainBlock">
            <h1>Ассортимент</h1>
            <ProductMenu />
            <AddBrand />
            <BrandList />
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

BrandsAdmScreen.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default BrandsAdmScreen;
