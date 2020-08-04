import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import styled, {ThemeProvider} from 'styled-components'

import {Grid, Row, Col} from '../components/kit/Grid'
import { theme } from '../components/kit/theme'
import {BASKET_LOCAL_STORAGE_NAME, ORDER_INFO_LOCAL_STORAGE, SERVER_ADDR} from '../constans'

import Header from '../components/common/HeaderComponent'
import FooterComponent from '../components/common/FooterComponent'

import OrderInfoComponent from '../components/common/Cart/OrderInfoComponent'
import CardProductItem from '../components/common/Cart/CardProductItemComponent'
import CartProductsList from '../components/common/Cart/CartProductsListComponent'
import OrderExecInfo from '../components/common/Cart/OrderExecInfoComponent'
import PlaceOrder from '../components/common/Cart/PlaceOrderComponent'
import EmployeeModal from '../components/common/Modals/EmployeeModal'

import { area } from '../fakeData/deliveryArea'
import { generateDeliveryDate } from '../helpers/timers'

const media = {
  xs: (styles) => `
    @media only screen and (max-width: ${theme.sizes.mobileL}) {
      ${styles}
    }
  `,
  lg: (styles) => `
    @media only screen and (min-width: ${theme.sizes.tablet}) {
      ${styles}
    }
  `,
}

const Wrapper = styled.div`
  margin-left: 30px;
  margin-top: 40px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 5px;
    margin-top: 40px;
  }
`

const Line = styled.div`
  display: block;
`

const Column = styled.div`
  display: block;
  vertical-align: top;
  width: ${props => props.width}
  @media (max-width: ${theme.sizes.mobileL}) {
    display: block;
  }
`

const HeaderItem = styled.h1`
  magrin-bottom: 40px;
  margin-top: 20px;
`

const makeid = (length) => {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const generateId = () => {
  let letters = makeid(4).toLowerCase()
  let date = new Date().getTime()
  let id = letters + String(date).slice(-7, String(date).length)
  return id
}

const sendOrder = async (order, url) => {
  try {
    const responce = await fetch(url, {
      method: "POST",
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(order)
    })
    const json = await responce.json();
    console.log(json);
  } catch(e) {
    console.log("Error: ", e);
  }
}

const packCartForSend = () => {
  const result = [];
  let cart = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
  cart = JSON.parse(cart)

  if (Array.isArray(cart)) {
    cart.forEach(item => {
      result.push({
        scu_id: item[0].scu_id,
        scu_name: item[0].scu_name,
        md_id: item[0].md_id,
        total_quantity: item[0].pack_quantity * item[0].quantity,
        price_by_one: item[0].price_by_one*1,
      })
    })
  }
  //console.log("CART----", result)
  return result
}

const PromoBlock = styled.div`
  border: 1px solid ${props => props.theme.color.green};
  width: 60%;
  min-width: 20px;
  display: inline-block;
  color: ${props => props.theme.color.green};
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 40px;
`

const ExecLink = styled.a`
  display: block;
  margin: 20px;
  padding: 20px;
  text-decoration: none;
  font-size: 1.4em;
  border: 1px solid ${props => props.theme.color.green};
  text-align: center;
  color: ${props => props.theme.color.green};
  width: 70%;
  margin-left: 40px;
  margin-top: 60px;
  border-radius: 3px;
`

class CartScreen extends Component {

  state = {
    totalSum: 0,
    totalProducts: 0,
    isAlcInCart: false,
    address: '',
    domofone: '',
    level: '',
    dateDelivery: "",
    timeDelivery: 'C 8:00 до 16:00',
    name: '',
    phone: '',
    email: '',
    comments: '',
    isComplete: false,
    isDelivery: true,
    isPickUp: true,
    methodPay: 'cash',
    mosbrewShowModal: false,
    pickupPoint: {
      id: false,
      address: false,
      name: false,
    }
  }

  componentDidMount() {
      this.getTotalSumm()
      this.getSumProducts()
      this.checkAlc()
      this.setExecDate()
      packCartForSend()
  }

  pickPointHandler = (id, addr, name) => {
    this.setState({ pickupPoint: { id: id, address: addr, name: name } })
  }

  showMosbrewModal = () => {
    this.setState({mosbrewShowModal: true})
  }

  hideMosbrewModal = () => {
    this.setState({mosbrewShowModal: false})
  }

  userInputHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }

  addressChangeHandler = (e) => {
    //let coords = [e.data.geo_lon, e.data.geo_lat]
    //e.preventDefault();
    console.log("!!!!!", e)
    this.setState({address: e.value})
  }

  setExecDate = () => {
    let dt = new Date()
    let date = (dt.getDate()+1) < 10 ? "0" + dt.getDate()+1 : dt.getDate()+1
    let month = (dt.getMonth()+1) < 10 ? "0" + (dt.getMonth()+1) : (dt.getMonth()+1)
    let setDate = date + "-" + month + "-" + dt.getFullYear()
    this.setState({dateDelivery: setDate})
  }

  dateDeliveryChangeHandler = (e) => {
    this.setState({dateDelivery: e.target.value})
  }

  timeDeliveryChangeHandler = (e) => {
    this.setState({timeDelivery: e.target.value})
  }

  orderMethod = () => {
    this.setState({isDelivery: !this.state.isDelivery})
  }

  changeMethodPay = (e) => {
    this.setState({methodPay: e.target.value})
  }


  isOrderCorrect = () => {
    const {address, dateDelivery, timeDelivery, name, phone, email, comments, totalProducts, pickupPoint} = this.state
    if ( !phone || !email || !pickupPoint.id || !name || totalProducts === 0) {
      //alert("Не заполнены обязательные поля: точка самовывоза, имя, телефон или e-mail")
      return false
    } else {
      return true
    }
  }

  generateOrderId = () => {
    return Date.now()
  }

  saveOrderFormToStorage = () => {
    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    let data = {...this.state, products: JSON.parse(storageData), orderId: this.generateOrderId()}

    localStorage.setItem(ORDER_INFO_LOCAL_STORAGE, JSON.stringify(data))
  }

  returnHref = () => {
    if (this.state.methodPay === 'cash') {
      return 'pickup-success'
    }
    if (this.state.methodPay === 'online') {
      return 'simulatebank'
    }
  }

  orderCartBtnHandler = () => {
    //console.log(this.state);
    if (this.state.methodPay === 'cash') {
      const {address, dateDelivery, timeDelivery, name, phone, email, comments, totalProducts, pickupPoint} = this.state
      let url =  SERVER_ADDR + "api/order"

      if ( !phone || !email || !pickupPoint.id || !name) {
        alert("Не заполнены обязательные поля: точка самовывоза, имя, телефон или e-mail")
        console.log(phone, email, pickupPoint, name)
        return false
      }

      if (totalProducts == 0) {
        alert("У Вас пустая корзина!")
      }

      const date = new Date()
      const order = {
        orderId: generateId(),                      // order_id
        orderTime: date,                            // stamp
        userData: {                                 // userInfo
          address: this.state.pickupPoint.address,     // address
          phone: phone,                             // userInfo
          email: email,                             // userInfo
          name: name,                               // userInfo
          userId: null,                             // userInfo
          comments: comments                         // userInfo
        },
        orderGetMethod: "pickup",              // delivery или pickup
        deliveryData: {                           // delivery
          isFreeDelivery: true,                   // delivery
          deliveryData: dateDelivery,             // delivery
          deliveryTime: 'secondPart'              // delivery
        },
        paimentInfo: {                            //
          purchaseSum: 2500,                      //
          sumWithDelivery: 2500,                  // purchaseSum
          method: 'cash',                         // paid_method
          status: null                            // status_delivery
        },
        products: {                               // products
          totalItems: 1,                          // products
          cart: packCartForSend()                 // products
        },
        pickpoint: this.state.pickupPoint.id
      }
      console.log("ORDER", order)

      //sendOrder(url, order)

      fetch(url, {
          method: "POST",
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify(order)
        })
        .then(response => {
          console.log(response)
          if (this.state.isAlcInCart) {
            window.location.href = '/pickup-success'
          } else {
            if (!this.state.isDelivery) {
              window.location.href = '/pickup-success'
            } else {
              window.location.href = '/delivery-success'
            }
          }

          this.saveOrderFormToStorage()
          localStorage.setItem(BASKET_LOCAL_STORAGE_NAME, JSON.stringify([]))
        })
        .catch(e => console.log(e))

    }
    if (this.state.methodPay === 'online') {
      this.saveOrderFormToStorage()
      window.location.href = '/simulatebank'
    }
  }

  getTotalSumm = () => {
    let sum = 0
    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    storageData = JSON.parse(storageData)

    if (Array.isArray(storageData)) {
      for (let i = 0; i < storageData.length; i++) {
        sum += (storageData[i][0].total * 1)
      }
    }
    this.setState({totalSum: sum.toFixed(2)})
  }

  checkAlc = () => {
    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    storageData = JSON.parse(storageData)

    if (Array.isArray(storageData)) {
      for (let i = 0; i < storageData.length; i++) {
        if (storageData[i][0].isAlc) {
          this.setState({isAlcInCart: true})
        }
      }
    }
  }

  openDelivery = () => {
    this.setState({isAlcInCart: false})
  }

  closePickUp = () => {
    this.setState({isPickUp: false})
  }

  prepareDeliveryForEmployer = () => {
    this.setState({isAlcInCart: false, isPickUp: false})
  }

  getSumProducts = () => {
    let sum = 0
    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    storageData = JSON.parse(storageData)

    if (Array.isArray(storageData)) {
      sum = 0;
      console.log("---------------------------")
      for (let i = 0; i < storageData.length; i++) {
        console.log(storageData[i][0].quantity)
        sum += storageData[i][0].quantity * 1
      }
    }
    this.setState({totalProducts: sum})
  }

  render() {

    return (
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Wrapper>

            <Line>
              <Wrapper>
                <HeaderItem>Резерв</HeaderItem>
                <Row block="xs">
                  <Col size={3}>
                    <CartProductsList
                      getTotalSumm={this.getTotalSumm}
                      getSumProducts={this.getSumProducts}
                    />
                  </Col>
                  <Col size={2}>
                    <OrderInfoComponent
                      totalSum={this.state.totalSum}
                      totalProducts={this.state.totalProducts}
                    />
                  <div style={{position: 'relative'}}>
                    <ExecLink href="#exec">Перейти к оформлению</ExecLink>
                  </div>
                  </Col>
                </Row>
              </Wrapper>
              {
                  this.state.totalProducts > 0 ? <PromoBlock onClick={this.showMosbrewModal}>Ввести промо-код</PromoBlock> : ''
              }

              <div style={{marginTop: '30px'}}>
                <a name="exec">...</a>
                <OrderExecInfo
                  totalSum={this.state.totalSum}
                  isAlcInCart={this.state.isAlcInCart}
                  addressChangeHandler={this.addressChangeHandler}
                  addressValue={this.state.address}
                  domofoneValue={this.state.domofone}
                  levelValue={this.state.level}
                  nameValue={this.state.name}
                  phoneValue={this.state.phone}
                  emailValue={this.state.email}
                  commentsValue={this.state.comments}
                  dateDeliveryChangeHandler={this.dateDeliveryChangeHandler}
                  dateDelivery={this.state.dateDelivery}
                  timeDeliveryChangeHandler={this.timeDeliveryChangeHandler}
                  timeDelivery={this.state.timeDelivery}
                  userInputHandler={this.userInputHandler}
                  orderMethod={this.orderMethod}
                  methodPay={this.state.methodPay}
                  changeMethodPay={this.changeMethodPay}
                  isPickUp={this.state.isPickUp}
                  pickPointHandler={this.pickPointHandler}
                  pickupPoint={this.state.pickupPoint}
                />
            </div>

            </Line>
            <Row>
              <Col size={1}>
                <PlaceOrder
                  orderCartBtnHandler={this.orderCartBtnHandler}
                  validate={this.isOrderCorrect}
                />

              </Col>
            </Row>

        </Wrapper>
        <FooterComponent></FooterComponent>
        <EmployeeModal
          isOpen={this.state.mosbrewShowModal}
          close={this.hideMosbrewModal}
          openDelivery={this.prepareDeliveryForEmployer}
        ></EmployeeModal>
      </ThemeProvider>
    )
  }
}

export default CartScreen
