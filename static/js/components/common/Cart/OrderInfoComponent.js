import React from 'react'
import PropTypes from 'prop-types'

import styled, {ThemeProvider} from 'styled-components'

import {theme} from '../../kit/theme'

const Wrapper = styled.div`
  margin-left: 35px;
  margin-right: 55px;
`

const CommonPrice = styled.h1`
  font-weight: normal;
  font-size: 30px;
  margin-bottom: 5px;
`

const ProductCounter = styled.h3`
  font-weight: normal;
`

const GreenSelection = styled.span`
  color: ${props => props.theme.color.green}
`

const OrderInfoComponent = (props) => {

  const declinationProduct = (num) => {
    console.log("props.totalProducts", props.totalProducts)
    if (num === 0) {
      return ( <span>нет продуктов</span> )
    } else if (num === 1) {
      return ( <span>1 упаковку</span> )
    } else if (num > 1 || num < 5) {
      return ( <span>{num} упаковки</span> )
    } else if (num > 5) {
      return ( <span>{num} упаковок</span> )
    }

  }

  const phrase = declinationProduct(props.totalProducts)

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <CommonPrice>Общая стоимость резерва  - <nobr><GreenSelection>{props.totalSum} ₽</GreenSelection></nobr></CommonPrice>
        <ProductCounter>Вы зарезервировали {phrase}</ProductCounter>
      </Wrapper>
    </ThemeProvider>
  )
}

export default OrderInfoComponent
