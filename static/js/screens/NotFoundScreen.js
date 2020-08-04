import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import Header from '../components/common/HeaderComponent'
import FooterComponent from '../components/common/FooterComponent'
import OurBenefitsComponent from '../components/common/OurBenefitsComponent'
import HowToOrderComponent from '../components/common/HowToOrderComponent'

import {theme} from '../components/kit/theme'

export const Wrapper = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  height: 200px;
  padding-top: 20px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const NotFoundScreen = (props) => {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <h1>Такой страницы не найдено </h1>
      </Wrapper>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default NotFoundScreen
