import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {mapToArr} from '../../../helpers/converters'
import {BASKET_LOCAL_STORAGE_NAME} from '../../../constans'
import {getProductsBySubCategory} from '../../../AC'
import {filtrateProductsSelector} from '../../../selectors'

import {Grid, Row, Col} from '../../kit/Grid'
import ProductCardComponent from './ProductCardComponent'
import SaleProductCard from './SaleProductCardComponent'

import {fakeProducts} from '../../../fakeData/fakeProducts'
import {newProducts} from '../../../fakeData/newFakeProducts'

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`

class ProductListSubCategory extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    this.props.getProductsBySubCategory(this.props.categoryName)
  }

  isInBasket = (product) => {
    let result = false;
    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    storageData = JSON.parse(storageData)

    if (Array.isArray(storageData)) {
      for (let i = 0; i < storageData.length; i++) {
        if (storageData[i][0].scu_id == product.scu_id) {
          result = true
        }
      }
    }
    return result
  }

  render() {
    const products = this.props.productsList.map(item => {
      item.price = item.price_by_one * item.pack_quantity
      if (item.sale) {
        return(
          <SaleProductCard
            product={item}
            isInBasket={this.isInBasket(item)}
            key={item.scu_id}
          ></SaleProductCard>
        )
      } else {
        return(
          <ProductCardComponent
            product={item}
            isInBasket={this.isInBasket(item)}
            key={item.scu_id}
          ></ProductCardComponent>
        )
      }
    })

    return (
      <Wrapper>
        <h1></h1>
        <div>
        { products ? products : <h1>В этой категории нет продуктов</h1> }
        </div>
      </Wrapper>
    )
  }
}

export default connect((state) => {
  return {
    //productsList: state.products
    productsList: filtrateProductsSelector(state)
  }
}, { getProductsBySubCategory })(ProductListSubCategory)
