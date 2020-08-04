import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import LinkComponent from '../LinkComponent';
import {theme} from '../../kit/theme'
import {BASKET_LOCAL_STORAGE_NAME} from '../../../constans'

const Basket = styled.div`
  width: 100%;
  height: 45px;
  padding-top: 20px;
  position: relative;
  @media (max-width: ${theme.sizes.mobileL}) {
    padding-top: 5px;
  }
`;

const BasketIcon = styled.div`
  background: url('/img/common/basket.svg') no-repeat;
  height: 70%;
  width: 70%;
`;

const Counter = styled.div`
  position: absolute;
  background: ${props => props.theme.color.green};
  width: 18px;
  height: 17px;
  color: ${props => props.theme.color.black};
  font-weight: bold;
  text-align: center;
  padding-top: 0px;
  top: 0;
  margin-left: 20px;
  margin-top: 15px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-top: 3px;
  }
`

const getBasketLenght = () => {
  let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
  storageData = JSON.parse(storageData)
  if (Array.isArray(storageData)) {
    return storageData.length
  } else {
    storageData = []
    return storageData.length
  }

}

const BasketComponent = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Basket>
        <LinkComponent to="/cart">
          <BasketIcon></BasketIcon>
        </LinkComponent>
        <Counter>
          { getBasketLenght() }
        </Counter>
      </Basket>
    </ThemeProvider>
  )
}

export default BasketComponent
