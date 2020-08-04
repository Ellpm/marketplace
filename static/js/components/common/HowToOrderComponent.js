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

const Header = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
`

const Block = styled.div`
  margin-right: 50px;
  padding: 15px;
  width: 80%;
  min-width: 200px;
  background: ${props => props.theme.color.gray};
  height: 220px;
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

const ItemHeader = styled.h3`
  font-size: 60px;
  margin-bottom: 30px;
  height: 90px;
`

const HowToOrderComponent = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <HowToWrapper>
        <Header>Резерв оформить просто</Header>
        <Row inlineBlock="xs">
          <Col size={4} inlineBlock="xs">
            <Block>
              <ItemHeader>01</ItemHeader>
              <p>Добавьте интересующий вас товар в Корзину, выберите ближайший к вам
                {FUCKING_LLEGAL_NAME_ONE2} и оформите резерв</p>
            </Block>
          </Col>
          <Col size={4}  inlineBlock="xs">
            <Block>
              <ItemHeader>02</ItemHeader>
              <p>Дождитесь уведомления о готовности товара. Уведомление придет в течение 24 часов при оформлении резерва до 17.00 и наличии товара в пункте продажи</p>
            </Block>
          </Col>
          <Col size={4} inlineBlock="xs">
            <Block>
              <ItemHeader>03</ItemHeader>
              <p>В пункте продажи ознакомьтесь с товаром, оплатите и получите не позднее 2 рабочих дней с момента получения уведомления в период работы пункте продажи</p>
            </Block>
          </Col>
        </Row>
      </HowToWrapper>
    </ThemeProvider>
  )
}

export default HowToOrderComponent
