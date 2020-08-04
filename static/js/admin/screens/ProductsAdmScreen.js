import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { BDiv, Col  } from 'bootstrap-4-react';

import { SERVER_ADDR } from '../../constans'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import ProductList from '../components/Products/ProductList'
import ProductMenu from '../components/Products/ProductMenu'
import AddProduct from '../components/Products/AddProduct'
import './mainAdm.css'

const PACKAGE_API = SERVER_ADDR + "api/packages"
const BRANDS_API = SERVER_ADDR + "api/brands"
const CATEGORY_API = SERVER_ADDR + "api/categories"
const VOLUME_API = SERVER_ADDR + "api/volumes"
const PRODUCTS_API = SERVER_ADDR + "api/products"
const COUNTRY_API = SERVER_ADDR + "api/countries"
const SUBCATEGORIES_API = SERVER_ADDR + "api/subcategories"
const TAGS_API = SERVER_ADDR + "api/tags"

 
const baseHref = '/ffhdsksdkfsh/products'

const getApiData = async (url) => {
  const resp = await fetch(url, {method: "GET"})
  const data = await resp.json()
  return data
}

export class ProductsAdmScreen extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    isLogin: false,
    products: [],
    brands: [],
    categories: [],
    volumes: [],
    packages: [],
    countries: [],
    subcategories: [],
    tags: [],
  }

  componentWillMount() {
    this.checkStorage()
    this.getCategories()
    this.getBrands()
    this.getPackages()
    this.getVolumes()
    this.getCountries()
    this.getSubcategories()
    this.getTags()
    this.getProducts('8')
  }

  getSubcategories = async () => {
    const subcategories = await getApiData(SUBCATEGORIES_API)
    this.setState({subcategories})
  }

  getTags = async () => {
    const tags = await getApiData(TAGS_API)
    this.setState({tags})
  }

  getBrands = async () => {
    const brands = await getApiData(BRANDS_API)
    this.setState({brands})
  }

  getCountries = async () => {
    const countries = await getApiData(COUNTRY_API)
    this.setState({countries})
  }

  getCategories = async () => {
    const categories = await getApiData(CATEGORY_API)
    this.setState({categories})
  }

  getPackages = async () => {
    const packages = await getApiData(PACKAGE_API)
    this.setState({packages})
  }

  getVolumes = async () => {
    const volumes = await getApiData(VOLUME_API)
    this.setState({volumes})
  }

  getProducts = async (catId) => {
    const uri = PRODUCTS_API + "/" + catId
    const products = await getApiData(uri)
    this.setState({products})
  }



  showProductByCategory = (e) => {
    const id = e.target.getAttribute('data-id')
    console.log("==========", id)
    this.getProducts(id)
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
      const {brands, products, categories, volumes, packages, countries, subcategories, tags} = this.state
      return (
        <div>
          <div className="col leftMenu">
            <LeftMenu />
          </div>
          <div className="col mainBlock">
            <h1>Ассортимент</h1>
            <ProductMenu />
            <AddProduct />
            <ProductList
              categories={categories}
              brands={brands}
              products={products}
              volumes={volumes}
              packages={packages}
              countries={countries}
              subcategories={subcategories}
              tags={tags}
              showProductByCategory={this.showProductByCategory}
            />
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

ProductsAdmScreen.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default ProductsAdmScreen;
