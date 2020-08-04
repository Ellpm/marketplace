import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {BASKET_LOCAL_STORAGE_NAME} from '../../../constans'
import {addLocalStorageData} from '../../../helpers/localStorage'
import {theme} from '../../kit/theme'
import {Grid, Row, Col} from '../../kit/Grid'
import AddToBasketModal from '../Modals/AddToBasketModal'

const Wrapper = styled.div`
  padding: 10px;
  width: 21%;
  min-width: 250px;
  display: inline-block;
  min-height: 400px;
  height: 430px;
  border: 1px solid ${props => props.theme.color.gray};
  margin-right: 20px;
  vertical-align: top;
  margin-bottom: 20px;
  background: ${props => props.theme.color.white};
  position: relative;
  :hover {
    box-shadow: 1px 1px 10px rgba(0,0,0, 0.25);
  }
`
 
const Image = styled.div`
  height: 220px;
  width: 95%;
  background: url(${props => props.img}) no-repeat;
  background-size: contain;
  margin-top: 45px;
  margin-left: 5px;
  margin-bottom: 1px;
  :hover {
    background: url(${props => props.hover}) no-repeat;
    background-size: contain;
  }
`

const Price = styled.span`
  font-size: 24px;
  display: inline-block;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${props => props.theme.color.red};
`

const OldPrice = styled.span`
  position: relative;
  display: inline-block;
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.color.darkGray};
  :before {
    border-bottom: 3px solid ${props => props.theme.color.red};
    position: absolute;
    content: "";
    width: 100%;
    height: 50%;
    transform: rotate(-12deg);
  }
`

const Product = styled.p`
  font-size: 15px;
  font-weight: bold;
`

const Likes = styled.div`
  height: 25px;
  background: url('/img/common/hearth.svg') no-repeat;
  padding-left: 30px;
  margin-top: 10px;
  color: ${props => props.theme.color.darkGray};
`;

const Stock = styled.p`
  color: ${props => props.theme.color.darkGray};
  margin-top: 5px;
`

const Link = styled.a`
  display: inline-block;
  width: 100%;
  height: 70%;
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
  font-size: 18px;
  padding-top: 9px;
  cursor: pointer;
`

const Sale = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 10px;
  width: 70px;
  height: 23px;
  padding-left: 15px;
  padding-top: 5px;
  background: ${props => props.theme.color.gray};
  color: ${props => props.theme.color.red};
  font-weight: bold;
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
  font-size: 18px;
  padding-top: 9px;
`

const stockAviable = (num) => {
  return num > 100 ? 'На складе много товара' : "На складе достаточно товара"
}

const SaleProductCard = (props) => {
  //console.log(props.product);

  const [isShowModal, setIsShowModal] = useState(false);

  const addToBasket = () => {
    setIsShowModal(!isShowModal);

    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    storageData = JSON.parse(storageData)
    product.quantity = 1
    product.total = product.price
    let arr = new Array(product);
    addLocalStorageData(BASKET_LOCAL_STORAGE_NAME, arr)
    setTimeout(() => {
        closeBasketModal()
    }, 3000)
  }

  const closeBasketModal = () => {
    setIsShowModal(!isShowModal);
    window.location.reload()
  }

  const {product} = props;
  const href = '/catalog/' + product.category_id + '/' + product.subcategory_id + "/" + product.scu_id;
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Row>
          <Sale>Акция</Sale>
          <Link href={href}><Image img={product.packshoot[0].url} hover={product.packshoot[0].hover}></Image></Link>
        </Row>
        <Row>
          <Col>
            <Price>{product.price} ₽</Price>
            <OldPrice>{product.old_price} ₽</OldPrice>
            <Product>{product.scu_name}</Product>
          </Col>
        </Row>
        <Row>
          <Stock>{stockAviable(product.stock)}</Stock>
        </Row>
        <Row>
          <Col size={2}>
            {
              props.isInBasket ? <InButton>В корзине</InButton> : <Button onClick={addToBasket}>В корзину</Button>
            }
          </Col>
          <Col size={1}>
            <Likes>{product.likes}</Likes>
          </Col>
        </Row>
        <AddToBasketModal
          close={closeBasketModal}
          isOpen={isShowModal}
          product={product}
        />
      </Wrapper>
    </ThemeProvider>
  )
}

export default SaleProductCard
