import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { BDiv, Col  } from 'bootstrap-4-react';

import { SERVER_ADDR } from '../../constans'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import ProductMenu from '../components/Products/ProductMenu'
import AddSubCategory from '../components/Subcategories/AddSubCategory'
import CategoriesList from '../components/Categories/CategoriesList'

import './mainAdm.css'

export class SubCategoryAdmScreen extends Component { // eslint-disable-line react/prefer-stateless-function

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
            <AddSubCategory />
            <h3>Подкатегории</h3>
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

SubCategoryAdmScreen.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default SubCategoryAdmScreen;
