import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import {connect} from 'react-redux'
import {BASKET_LOCAL_STORAGE_NAME} from '../../../constans'

import {getCartFromLocalStorage} from '../../../AC'


import CardProductItem from './CardProductItemComponent'

class CartProductsList extends Component {

  state = {
    basket: []
  }

  componentDidMount() {
    this.getDataFromBasket()
    this.props.getCartFromLocalStorage()
  }

  getDataFromBasket = () => {
    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    storageData = JSON.parse(storageData)
    this.setState({basket: storageData})
  }

  increaseQuantity = (e, id) => {
    //console.log(id);
    const {basket} = this.state
    let result = basket.map(item => {
      if (id === item[0].scu_id) {
        //console.log(item[0])
        item[0].quantity = Number(item[0].quantity) + 1
        item[0].total = (Number(item[0].total) + Number(item[0].price)).toFixed(2)
        return item
      } else {
        return item
      }
    })
    localStorage.setItem(BASKET_LOCAL_STORAGE_NAME, JSON.stringify(result))
    this.props.getTotalSumm()
    this.props.getSumProducts()
    this.setState({basket: result})
  }

  decreaseQuantity = (e, id) => {
    const {basket} = this.state
    let result = basket.map(item => {
      if (id === item[0].scu_id && item[0].quantity > 1) {
        //console.log(item[0])
        item[0].quantity--
        item[0].total -= item[0].price
        return item
      } else {
        return item
      }
    })
    localStorage.setItem(BASKET_LOCAL_STORAGE_NAME, JSON.stringify(result))
    this.props.getTotalSumm()
    this.props.getSumProducts()
    this.setState({basket: result})
  }

  changeQuantity = (e, id) => {
    const {basket} = this.state
    let result = basket.map(item => {
      if (id === item[0].scu_id && item[0].quantity > 1) {
        //console.log(item[0])
        item[0].quantity = e.target.value
        item[0].total = item[0].price * item[0].quantity
        return item
      } else {
        return item
      }
    })
    localStorage.setItem(BASKET_LOCAL_STORAGE_NAME, JSON.stringify(result))
    this.props.getTotalSumm()
    this.props.getSumProducts()
    this.setState({basket: result})
  }

  deleteItem = (id) => {
    //alert("Delete");
    const {basket} = this.state;
    let result = basket.filter(item => {
      if (item[0].scu_id !== id) {
        return item;
      }
    });
    localStorage.setItem(BASKET_LOCAL_STORAGE_NAME, JSON.stringify(result))
    this.props.getTotalSumm()
    this.props.getSumProducts()
    this.setState({basket: result})
    //window.location.reload()
  }

  generateItems = () => {
    const basket = this.state.basket
    console.log("basket", basket)
    if (Array.isArray(basket)) {
    const result = basket.map(item => {
      let packshoot = item[0].packshoot.url ? item[0].packshoot[0] : '/img/noimage.jpg'
      const price = (item[0].price * 1).toFixed(2)
      return(
        <CardProductItem
          scuName={item[0].scu_name}
          scuId={item[0].scu_id}
          packshoot={packshoot.url}
          price={price}
          pricePerUnit={item[0].price_by_one}
          sale={item[0].sale}
          discountPrice={item[0].discount_price}
          stock={item[0].stock}
          mdId={item[0].md_id}
          quantity={item[0].quantity}
          increase={this.increaseQuantity}
          decrease={this.decreaseQuantity}
          changeQuantity={this.changeQuantity}
          deleteItem={this.deleteItem}
          total={item[0].total}
          frozenQuantity={item[0].frozenQuantity || false}
        />
      )
    })
    return result;
  } else {
    const result = <h1>В резерве нет продуктов</h1>
    return result;
  }

  }

  render() {
    console.log(this.props)
    return (
      <>
        {this.generateItems()}
      </>
    )
  }
}



export default connect((state) => {
  return {
    cart: state.cart.entitys
  }
}, {getCartFromLocalStorage})(CartProductsList)
