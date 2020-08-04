import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import { connect } from 'react-redux'
import { getProductsByRecomendation } from '../../AC'

import ProductCardSmall from './Catalog/ProductCardSmallComponent'

import { theme } from '../kit/theme'
import {isInBasket} from '../../helpers/localStorage'
//import { BTN_NAME_BEFORE_PURCHASE, BTN_NAME_AFTER_PURCHASE } from '../../constans'

const Wrapper = styled.div`
  min-height: 320px;
  margin-top: 20px;
  text-aligh: center;
  width: 100%;
  margin-left: 30px;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 0px;
  }
`

const Header = styled.h2`
  text-align: center;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 45px;
`

class SameProducts extends Component {

  componentDidMount() {
    const {categoryName, subcategoryName} = this.props
    this.props.getProductsByRecomendation(categoryName, subcategoryName)
  }

  render() {
    const {categoryName, subcategoryName, productId, loading, loaded, errors} = this.props

    let products = this.props.products || []
    console.log("RECOMENDATIONS 123", this.props)

    return (
      <Wrapper>
        <Header>Также рекомендуем</Header>
        { loaded ? (
          <>
            {
              errors ? (' ') :
              products.map(item => {
                const href = '/catalog/' + item.category_id + '/' + item.subcategory_id + '/' + item.scu_id
                let packshoot = '/img/noimage.jpg'
                try {
                    packshoot = item.packshoot[0].url
                } catch(e) {}
                return(
                  <ProductCardSmall
                    skuId={item.scu_id}
                    skuName={item.scu_name}
                    packshoot={packshoot}
                    price={(item.price_by_one * item.pack_quantity).toFixed(2)}
                    priceByOne={(+item.price_by_one).toFixed(2)}
                    likes={item.likes}
                    country={item.country_name}
                    href={href}
                    product={item}
                    isInBasket={isInBasket(item)}
                  />
                )
              })
            }
          </>
        ) : (<></>) }

      </Wrapper>
    )
  }

}

export default connect((state) => {
  return {
    products: state.recomendations.entitys,
    loading: state.recomendations.loading,
    loaded: state.recomendations.loaded,
    errors: state.recomendations.errors,
  }
}, { getProductsByRecomendation })(SameProducts)
