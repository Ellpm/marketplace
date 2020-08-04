import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import { useState } from 'react';


import {Row, Col} from '../kit/Grid'
import {theme} from '../kit/theme'

const Banner = styled.div`
  width: 100%;
  height: 280px;
  background: ${props => props.theme.color.green};
  @media (max-width: ${theme.sizes.mobileL}) {
    overflow: hidden;
    position: relative;
  }
`

const Header = styled.h2`
  font-size: 39px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.theme.color.white};
  margin-top: 40px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-top: 5px;
    position: absolute;
    bottom: 55px;
    left: -1px;
    z-index: 30;
    padding: 5px;
    background: ${props => props.theme.color.green};
    width: 100%;
    font-size: 34px;
  }
`

const Slogan = styled.h3`
  font-size: 23px;
  text-transform: uppercase;
  margin-top: 30px;
  @media (max-width: ${theme.sizes.mobileL}) {
    position: absolute;
    bottom: 0px;
    left: -1px;
    z-index: 30;
    padding: 5px;
    display: inline-block;
    background: ${props => props.theme.color.green};
    width: 100%;
    font-size: 20px;
  }
`

const Select = styled.span`
  background: ${props => props.theme.color.green};
`

const Wrapper = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 10px;
    margin-right: 10px;
  }
`

const Image = styled.div`
  background: url(${props => props.url}) no-repeat;
  height: 280px;
  width: 100%;
  background-position: right top;
  @media (max-width: ${theme.sizes.mobileL}) {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const CategoryBannerComponent = (props) => {
  const name = props.info[0] ? props.info[0].showName : ''
  const slogan = props.info[0] ? props.info[0].slogan  : ''
  const banner = props.info[0] ? props.info[0].bannerUrl : ''

  return (
    <ThemeProvider theme={theme}>
      <Banner>
        <Row>
          <Col size={2}>
            <Wrapper>
              <Header><Select>{name}</Select></Header>
              <Slogan><Select>{slogan}</Select></Slogan>
            </Wrapper>
          </Col>
          <Col size={2}>
            <Image url={banner}></Image>
          </Col>
        </Row>
      </Banner>
    </ThemeProvider>
  )
}

export default CategoryBannerComponent
