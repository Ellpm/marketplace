import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {theme} from '../kit/theme'
import {Grid, Wrapper} from '../kit/Grid'

import { FUCKING_LLEGAL_NAME_ONE, FUCKING_LLEGAL_NAME_ONE2 } from '../../constans'

const HowToWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
`


const Block = styled.div`
  margin-right: 50px;
  padding: 15px;
  width: 80%;
  min-width: 150px;
  background: ${props => props.theme.color.white};
  height: 220px;
  position: relative;
  z-index: 10;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-bottom: 30px;
  }
`

const Row = styled.div`
  display: flex;
  @media (max-width: ${theme.sizes.mobileL}) {
    min-width: 100%;
    min-height: 290px;
    display: flex;
    overflow-x: auto;
    padding-left: 50px;
    margin-left: -30px;
    padding-top: 20px;
  }
`

const Col = styled.div`
  flex: ${(props) => props.size};
  @media (max-width: ${theme.sizes.mobileL}) {
    display: inline-block;
    margin-bottom: 30px;
    margin-right: 40px;
    min-width: 230px;
    padding-right: 20px;
  }
`;

const Header = styled.h1`
  font-size: 21px;
  text-transform: uppercase;
  line-height: 32px;
`

const Point = styled.p`
    font-size: 18px;
    line-height: 26px;
    position: relative;
    z-index: 100;
    font-weight: 400;
`

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  margin-left: -10px;
  margin-top: -6px;
  background: url('${props => props.background || 'green'}') no-repeat;
  z-index: 1;
`

const OurResponsibility = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <HowToWrapper>
        <Row inlineBlock="xs">
          <Col size={4} inlineBlock="xs">
            <Block>
              <Header>Getdrinks работает в полном соответствии с законами Российской Федерации:</Header>
            </Block>
          </Col>
          <Col size={3}  inlineBlock="xs">
            <Block>
              <Icon background="/img/common/resp/yes.svg" />
              <Point>Мы не осуществляем дистанционную продажу алкоголя</Point>
            </Block>
          </Col>
          <Col size={3} inlineBlock="xs">
            <Block>
              <Icon background="/img/common/resp/18plus.svg" />
              <Point>Мы не продаем и не доставляем алкоголь несовершеннолетним</Point>
            </Block>
          </Col>
          <Col size={3} inlineBlock="xs">
            <Block>
              <Icon background="/img/common/resp/23.svg" />
              <Point>Мы не продаем и не доставляем алкоголь в ночное время</Point>
            </Block>
          </Col>
        </Row>
      </HowToWrapper>
    </ThemeProvider>
  )
}

export default OurResponsibility
