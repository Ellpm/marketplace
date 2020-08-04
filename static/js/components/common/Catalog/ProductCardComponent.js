import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {BASKET_LOCAL_STORAGE_NAME, BTN_NAME_BEFORE_PURCHASE, BTN_NAME_AFTER_PURCHASE} from '../../../constans'
import {addLocalStorageData} from '../../../helpers/localStorage'
import {theme} from '../../kit/theme'
import {Grid, Row, Col} from '../../kit/Grid'
import AddToBasketModal from '../Modals/AddToBasketModal'

const Wrapper = styled.div`
  padding: 10px;
  width: 20%;
  min-width: 230px;
  display: inline-block;
  vertical-align: top;
  min-height: 400px;
  height: 400px;
  border: 1px solid ${props => props.theme.color.gray};
  margin-right: 30px;
  margin-bottom: 30px;
  background: ${props => props.theme.color.white};
  :hover {
    box-shadow: 1px 1px 10px rgba(0,0,0, 0.25);
  }
  text-align: left;

  @media (max-width: ${theme.sizes.mobileL}) {
    width: 90%;
    min-height: 220px;
    height: 220px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

const Image = styled.div`
  height: 200px;
  width: 100%;
  background: url(${props => props.img}) no-repeat;
  background-size: contain;
  margin: 5px;
  margin-top: 20px;
  margin-bottom: 1px;
  :hover {
    background: url(${props => props.hover}) no-repeat;
    background-size: contain;
  }
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-top: 0;
    height: 150px;
  }
`

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => props.theme.color.black};
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-bottom: 9px;
  }
`

const Product = styled.p`
  font-size: 14px;
  font-weight: normal;
  height: 50px;
  @media (max-width: ${theme.sizes.mobileL}) {
    height: auto;
    margin-bottom: 5px;
  }
`

const Likes = styled.div`
  height: 18px;
  background: url('/img/common/hearth.svg') no-repeat;
  background-size: contain;
  padding-left: 30px;
  font-size: 14px;
  margin-top: 10px;
  color: ${props => props.theme.color.darkGray};
`;

const Stock = styled.p`
  color: ${props => props.theme.color.darkGray};
  margin-top: 5px;
  height: 16px;
  @media (max-width: ${theme.sizes.mobileL}) {
    font-size: 13px;
  }
`

const Link = styled.a`
  display: inline-block;
  width: 95%;
  height: 70%;
`

const Button = styled.div`
  background: ${props => props.theme.color.green};
  height: 30px;
  border-radius: 5px;
  width: 80%;
  margin-top: 15px;
  color: ${props => props.theme.color.white};
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  padding-top: 9px;
  padding-left: 9px;
  cursor: pointer;
  :hover {
    background: ${props => props.theme.color.darkGreen};
  }
  :before {
    content: " ";
    width: 20px;
    height: 20px;
    background: url('/img/common/basket.svg') no-repeat;
    background-size: contain;
    position: absolute;
    margin-left: -24px;
  }

  @media (max-width: ${theme.sizes.mobileL}) {
    width: 50%;
    margin-left: 25%;
    margin-top: 5px;
  }
`


const InButton = styled.div`
  background: ${props => props.theme.color.darkGray};
  height: 30px;
  border-radius: 5px;
  width: 80%;
  margin-top: 15px;
  color: ${props => props.theme.color.white};
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  padding-top: 9px;
  @media (max-width: ${theme.sizes.mobileL}) {
    width: 50%;
    margin-left: 25%;
    margin-top: 5px;
  }
`

const Price_by_one = styled.p`
  color: ${props => props.theme.color.darkGray};
  margin-top: -10px;
  margin-bottom: 10px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-bottom: 1px;
    margin-top: -5px;
  }
`

const Line = styled.div`
  display: block;
  @media (max-width: ${theme.sizes.mobileL}) {
    display: inline-block;
    width: ${props => props.width || '45%'};
    vertical-align: top;
  }
`

const Info = styled.div`
  padding-left: 10px;
`

const Country = styled.p`
  color: ${props => props.theme.color.darkGray};
  font-size: 13px;
`


const stockAviable = (num) => {
  // переписать на switch
  return num > 100 ? 'На складе много товара' : "На складе достаточно товара"
}

const addLike = () => {
  alert("Add like")
}


const ProductCardComponent = (props) => {
  //console.log(props.product);

  const [isShowModal, setIsShowModal] = useState(false);
  const {product} = props;


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
    }, 100)
  }

  const closeBasketModal = () => {
    setIsShowModal(!isShowModal);
    window.location.reload()
  }

  const packshootUrl = product.packshoot[0] ? product.packshoot[0].url : '/img/noimage.jpg'
  const packshootHover = product.packshoot[0] ? product.packshoot[0].hover : '/img/noimage.jpg'
  let price_by_one = (product.price_by_one * 1).toFixed(2)
  const href = '/catalog/' + product.category_id + '/' + product.subcategory_id + '/' + product.scu_id;
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Line>
          <Link href={href}>
            <Image
              img={packshootUrl}
              hover={packshootHover}>
            </Image>
          </Link>
        </Line>
        <Line width="49%">
          <Info>
          <Row>
            <Col>
              <Product>{product.scu_name}</Product>
            </Col>
          </Row>
          <Row>
            <Col size={3}>
              <Price>{product.price} ₽ </Price>
            </Col>
            <Col size={1}>
              <Likes onClick={addLike}>{product.likes}</Likes>
            </Col>
          </Row>
          <Row>
            <Price_by_one>{price_by_one} ₽ за ед.</Price_by_one>
          </Row>

          <Row>
            <Country>Страна: {product.country_name}</Country>
          </Row>

          </Info>
        </Line>
        <Row>
          <Col size={2}>
            {
              props.isInBasket ? <InButton>{BTN_NAME_AFTER_PURCHASE}</InButton> : <Button onClick={addToBasket}>{BTN_NAME_BEFORE_PURCHASE}</Button>
            }
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

export default ProductCardComponent
