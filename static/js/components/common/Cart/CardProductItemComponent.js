import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {theme} from '../../kit/theme'



const Card = styled.div`
  border-top: 1px solid ${props => props.theme.color.green};
  border-bottom: 1px solid ${props => props.theme.color.green};
  height: 100px;
  width: 100%;
  min-width: 680px;
  position: relative;
  @media (max-width: ${theme.sizes.mobileL}) {
    min-width: auto;
    height: auto;
  }
  @media (max-width: ${theme.sizes.laptop}) {
    min-width: auto;
    height: auto;
  }
`

const PackShoot = styled.div`
  background: url(${props => props.img}) no-repeat;
  width: 100%;
  height: 100px;
  background-size: contain;
  background-position: center;
  @media (max-width: ${theme.sizes.mobileL}) {
    background-position: left;
  }
`

const Info = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  margin-right: 10px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 0;
  }
`

const InfoName = styled.p`
  font-size: 14px;
  font-weight: bold;
`


const CounterBlock = styled.div`
  margin-top: 20px;
  vertical-aligh: middle;
  display: inline-block;
  width: 45%;
`

const CounterButton = styled.div`
  display: inline-block;
  width: 20%;
  height: 30px;
  text-align: center;
  background: ${props => props.theme.color.green};
  vertical-align: middle;
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.theme.color.white};
  cursor: pointer;
`

const CounterButtonUnActive = styled.div`
  display: inline-block;
  width: 20%;
  height: 30px;
  text-align: center;
  background: ${props => props.theme.color.darkGray};
  vertical-align: middle;
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.theme.color.white};
`

const Counter = styled.input`
  display: inline-block;
  width: 40%;
  height: 30px;
  border: 0;
  background: ${props => props.theme.color.gray};
  text-align: center;
  font-weight: bold;
`

const CostPerUnit = styled.p`
  color: ${props => props.theme.color.darkGray};
  font-size: 14px;
  margin-top: 5px;
`

const MoneyBlock = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: inline-block;
  width: 50%;
  vertical-align: top;
`

const Delete = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url('/img/common/close.svg') no-repeat;
  margin-top: 15px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
`


const ImgBlock = styled.div`
  display: inline-block;
  width: 15%;
  @media (max-width: ${theme.sizes.mobileL}) {
    width: 49%;
  }
`

const InfoBlock = styled.div`
  display: inline-block;
  width: 37%;
  vertical-align: top;
  @media (max-width: ${theme.sizes.mobileL}) {
    width: 49%;
  }
`

const CounterDiv = styled.div`
  display: inline-block;
  width: 40%;
  vertical-align: top;
  @media (max-width: ${theme.sizes.mobileL}) {
    display: block;
    width: 99%;
  }
`

const CardProductItem = (props) => {
  //console.log("PROPS", props);

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <ImgBlock>
          <PackShoot img={props.packshoot}/>
        </ImgBlock>

        <InfoBlock>
          <Info>
            <InfoName>{props.scuName}</InfoName>
          </Info>
        </InfoBlock>

        <CounterDiv>
          { !props.frozenQuantity ? (
            <CounterBlock>
              <CounterButton onClick={(e) => props.decrease(e, props.scuId)}>-</CounterButton>
              <Counter type="text" value={props.quantity} onChange={(e) => props.changeQuantity(e, props.scuId)}></Counter>
              <CounterButton onClick={(e) => props.increase(e, props.scuId)}>+</CounterButton>
              <CostPerUnit>{props.pricePerUnit} ₽ за 1 упаковку</CostPerUnit>
            </CounterBlock>
          ) : (
            <CounterBlock>
              <CounterButtonUnActive>-</CounterButtonUnActive>
              <Counter type="text" value={props.quantity}></Counter>
              <CounterButtonUnActive>+</CounterButtonUnActive>
              <CostPerUnit>{props.pricePerUnit} ₽ за 1 упаковку</CostPerUnit>
            </CounterBlock>
          ) }
          <MoneyBlock>
            <p>Общая сумма</p>
            <h2>{(props.total * 1).toFixed(2) || 0} ₽</h2>
          </MoneyBlock>
        </CounterDiv>

        <Delete onClick={() => props.deleteItem(props.scuId)}></Delete>
      </Card>
    </ThemeProvider>
  )
}

CardProductItem.propTypes = {
  scuName: PropTypes.string,
  scuId: PropTypes.string,
  packshoot: PropTypes.string
  //Описать типы до конца, добавить default
}

export default CardProductItem
