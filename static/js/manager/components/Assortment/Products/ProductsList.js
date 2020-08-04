import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import { getFullProductsList, getPoductsByCategory } from './AC'
import { loadAllBrands } from '../Brands/AC'
import { loadAllCountries } from '../Countries/AC'
import { loadAllPackages } from '../Packages/AC'
import { loadAllVolumes } from '../Volumes/AC'


import ProductItem from './ProductItem'
import { Wrapper } from './styled'

class ProductsList extends Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.getPoductsByCategory(1)
    this.props.loadAllBrands()
    this.props.loadAllCountries()
    this.props.loadAllPackages()
    this.props.loadAllVolumes()
  }

  render() {
    const { products, loading, loaded, errors, categories, brands, countries, packages, volumes } = this.props
    //console.log(categories)

    if (loading) return <h1>Загрузка</h1>
    if (errors) return <h1>Ошибка</h1>


    return (
      <Wrapper>
        {
          products.map(product => {
          return(
            <ProductItem
              product={product}
              key={product.id}
              categories={categories}
              brands={brands}
              countries={countries}
              packages={packages}
              volumes={volumes}
            />
          )
        }) }
      </Wrapper>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired
}

export default connect((state) => {
  return {
    products: state.adminProduct.entitys,
    loading: state.adminProduct.loading,
    loaded: state.adminProduct.loaded,
    errors: state.adminProduct.errors,
    categories: state.categories,
    brands: state.adminBrands,
    countries: state.adminCountries,
    packages: state.adminPackages,
    volumes: state.adminVolumes,
  }
}, {
    getFullProductsList,
    getPoductsByCategory,
    loadAllBrands,
    loadAllCountries,
    loadAllPackages,
    loadAllVolumes
  })(ProductsList);
