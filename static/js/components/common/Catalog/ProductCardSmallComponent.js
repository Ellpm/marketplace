import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {theme} from '../../kit/theme'

import {Row, Col} from '../../kit/Grid'

import {BASKET_LOCAL_STORAGE_NAME, BTN_NAME_BEFORE_PURCHASE, BTN_NAME_AFTER_PURCHASE} from '../../../constans'
import {addLocalStorageData} from '../../../helpers/localStorage'
import AddToBasketModal from '../Modals/AddToBasketModal'

const Wrapper = styled.div`
  width: 10%;
  min-width: 180px;
  height: 330px;
  border: 1px solid ${props => props.theme.color.gray};
  padding: 10px;
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
  text-align: left;
`


const Name = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 47px;
`

const Packshoot = styled.div`
  width: 100%;
  height: 100px;
  background: url(${props => props.img}) no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 15px;
  margin-bottom: 15px;
`


const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 10px;
`

const Button = styled.div`
  background: ${props => props.theme.color.green};
  height: 30px;
  border-radius: 5px;
  width: 75%;
  margin-top: 15px;
  color: ${props => props.theme.color.white};
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  padding-top: 9px;
  cursor: pointer;
`

const InButton = styled.div`
  background: ${props => props.theme.color.darkGray};
  height: 30px;
  border-radius: 5px;
  width: 75%;
  margin-top: 15px;
  color: ${props => props.theme.color.white};
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  padding-top: 9px;
  cursor: pointer;
`

const Link = styled.a`
  color:  ${props => props.theme.color.black};
  text-decoration: none;
`

const PriceByOne = styled.p`
  color: ${props => props.theme.color.darkGray};
  margin-top: -5px;
  margin-bottom: 7px;
`

const ProductCardSmall = (props) => {
  const {product} = props
  const [isShowModal, setIsShowModal] = useState(false)

  const addToBasket = () => {
    setIsShowModal(!isShowModal);

    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    storageData = JSON.parse(storageData)
    product.price = +product.price_by_one * product.pack_quantity
    product.quantity = 1
    product.total = product.price
    let arr = new Array(product);
    addLocalStorageData(BASKET_LOCAL_STORAGE_NAME, arr)
    setTimeout(() => {
        closeBasketModal()
    }, 100)
  }

  const closeBasketModal = () => {
    setIsShowModal(!isShowModal);
    window.location.reload()
  }
  //console.log("1234567", product)
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Row>
          <Col size={1}>
            <a href={props.href}><Packshoot
              img={props.packshoot}
            /></a>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Price>{props.price} ₽</Price>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <PriceByOne>{props.priceByOne}₽ за шт.</PriceByOne>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Name><Link href={props.href}>{props.skuName}</Link></Name>
          </Col>
        </Row>
        <Row>
          <p>Страна: {props.country}</p>
        </Row>
        <Row>
          {
            props.isInBasket ? <InButton>{BTN_NAME_AFTER_PURCHASE}</InButton> : <Button onClick={addToBasket}> {BTN_NAME_BEFORE_PURCHASE} </Button>
          }
        </Row>
      </Wrapper>
      <AddToBasketModal
        close={closeBasketModal}
        isOpen={isShowModal}
        product={product}
      />
    </ThemeProvider>
  )
}

export default ProductCardSmall
