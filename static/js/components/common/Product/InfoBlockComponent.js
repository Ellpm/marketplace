import React from 'react'
//import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {Row, Col} from '../../kit/Grid'
import {theme} from '../../kit/theme'
import {BTN_NAME_BEFORE_PURCHASE, BTN_NAME_AFTER_PURCHASE} from '../../../constans'
import {getDeliveryDate} from '../../../helpers/timers'

const Info = styled.div`
  margin-left: 30px;
  min-width: 450px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 3px;
    min-width: auto;
  }
`

const Header = styled.h1`
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-top: 10px;
  }
`

const AddInfo = styled.p`
  margin-top: 10px;
  color: ${props => props.theme.color.darkGray};
  display: inline-block;
  vertical-align: middle;
`

const Likes = styled.div`
  height: 25px;
  background: url('/img/common/hearth.svg') no-repeat;
  padding-left: 30px;
  margin-top: 10px;
  color: ${props => props.theme.color.darkGray};
  display: inline-block;
  vertical-align: middle;
`

const BuyBlock = styled.div`
  margin-top: 20px;
`

const Price = styled.h2`
  color: ${props => props.theme.color.black};
  font-size: 48px;
`

const Description = styled.p`
  margin-top: 16px;
  font-weight: normal;
  line-height: 1.4em;
`

const Button = styled.div`
  background: ${props => props.theme.color.green};
  width: 30%;
  min-width: 130px;
  height: 35px;
  margin-top: 20px;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  color: ${props => props.theme.color.white};
  font-weight: bold;
  padding-top: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  @media (max-width: ${theme.sizes.mobileL}) {
    width: 98%;
  }
`

const InButton = styled.div`
  background: ${props => props.theme.color.darkGray};
  height: 30px;
  border-radius: 5px;
  width: 30%;
  min-width: 130px;
  margin-top: 15px;
  color: ${props => props.theme.color.white};
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  padding-top: 9px;
  @media (max-width: ${theme.sizes.mobileL}) {
    width: 98%;
  }
`

const Column = styled.div`
  display: inline-block;
  width: ${props => props.width};
  vertical-align: top;

`


const InfoBlock = (props) => {
  //console.log("90988877", props)
  return (
    <ThemeProvider theme={theme}>
      <Info>
        <Header>{props.scuName}</Header>
        <Row>
          <Col size={1}>
            <Likes></Likes><AddInfo>{props.likes}</AddInfo>
          </Col>
          <Col size={2}>

          </Col>
        </Row>

        <BuyBlock>
            <Column size={1} width="45%">
              <p>Цена за упаковку: </p>
              <div>
                <Price>{props.price} ₽</Price>
                <p>Цена за 1шт.: {props.pricePerUnit} ₽</p>
              </div>
            </Column>
            <Column size={4} width="45%">
              {/*<p>Самовывоз - {getDeliveryDate()}</p>*/}
              <p>Страна: {props.country}</p>
            </Column>

          <Row>
              {
                props.isInBasket ? <InButton>{BTN_NAME_AFTER_PURCHASE}</InButton> : <Button onClick={props.addToBasket}>{BTN_NAME_BEFORE_PURCHASE}</Button>
              }
          </Row>
          <Row>
            <Description>{props.description}</Description>
          </Row>
        </BuyBlock>
      </Info>
    </ThemeProvider>
  )
}

export default InfoBlock
