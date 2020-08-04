import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {theme} from '../../kit/theme'

const Warning = styled.div`
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  background: ${props => props.theme.color.white};
  padding: 10px;
  margin-top: -50px;
  position: relative;
  z-index: 20;
  border-radius: 10px;
  box-shadow: 1px 1px 30px rgba(10, 0, 0, 0.4);
  @media (max-width: ${theme.sizes.mobileL}) {
    width: 85%;
  }
`

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`

const Header = styled.h4`
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
`

const AlcAttention = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Warning>
        <Header>Условия продажи</Header>
        <Text>В соответствии с Законодательством РФ и города Москвы мы не осуществляем доставку и дистанционную продажу алкогольной продукции. </Text>
        <Text>Весь ассортимент и цены на сайте представлены в информационных целях. Чтобы быть уверенным, что в момент посещения фирменного <a href="">магазина</a> getdrinks.ru все напитки будут в наличии, вы можете зарезервировать понравившиеся товары.</Text>
      </Warning>
    </ThemeProvider>
  )
}

export default AlcAttention
