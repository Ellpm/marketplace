import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SERVER_ADDR } from '../../../constans'

const getOrders = async () => {
  const url = SERVER_ADDR + "api/order/getAll"
  const resp = await fetch(url, { method: "GET" })
  const data = await resp.json()
  return data
}

const Order = styled.div`
  margin: 10px;
  padding: 10px;
  border-top: 1px solid gray;
`

const OrderDate = styled.span`
  font-weight: bold;
  padding-left: 10px;
`

const Row = styled.div`
  margin-top: 5px;
`

const ProductBlock = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
`

const DeliverySuccess = styled.div`
  background: green;
  color: white;
`

const DeliveryWait = styled.div`
  background: red;
  color: white;
`

class OrdersList extends Component {

  state = {
    orders: []
  }

  componentDidMount() {
    this.getOrders()
  }

  getOrders = async () => {
    const data = await getOrders()
    console.log(data)
    this.setState({orders: data})
  }

  deleteOrder = (id) => {
    let thisId = id.getAttribute('data-id')
    const url = SERVER_ADDR + "api/order/" + thisId

    fetch(url, {method: "DELETE"})
    .then(data => data.json())
    .then(json => {
      console.log(json)
      window.location.reload()
    })
    //console.log(url)
  }

  resendAllOrders = () => {
    const url = SERVER_ADDR + "api/order/reload"
    fetch(url, {
      method: "POST",
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify([{}])
    })
    .then(data => data.json())
    .then(json => {
      console.log(json)
      //window.location.reload()
    })
  }

  renderProductsInOrder = (arr) => {
    const result = arr.map(item => {
      return(
        <ProductBlock>
          <p>{item.scu_name}</p>
        </ProductBlock>
      )
    })
    return result
  }

  sendMailToClient = (mail, id) => {
    const url = SERVER_ADDR + "api/order/sendConfirmation"
    const orderId = id.getAttribute('data-id')
    const data = {
      userMail: mail,
      orderId: orderId * 1
    }

    fetch(url, {
      method: "POST",
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    })
    .then(resp => {
      if (resp.status == 200) {
          alert("Уведомление успешно отправлено")
          window.location.reload()
      }
    })
    .catch(err => {
      alert("ERROR SEND CONFIRMATION", err)
    })
  }

  render() {
    const {orders} = this.state

    const list = orders.map(item => {
      let date = new Date(item.createdAt)
      return(
        <Order data-id={item.id} key={item.orderId} >
          { item.is_confirm_delivery ? (
              <DeliverySuccess>Оповещение о доставке клиенту отправлено</DeliverySuccess>
          ) : (
              <DeliveryWait>Клиент не оповещен о доставке</DeliveryWait>
          )}

          <Row>
            <span>{item.orderId} |</span>
            <OrderDate>{date.toLocaleString()} | </OrderDate>
          </Row>
          <Row>
            <span>{item.userData.name} |</span>
          </Row>
          <Row>
            <span>{item.userData.email} |</span>
            <span>{item.userData.phone} |</span>
          </Row>
          <Row>
            {this.renderProductsInOrder(item.products.cart)}
          </Row>
          <Row>
            { !item.is_confirm_delivery ? (
              <button onClick={(e) => this.sendMailToClient(item.userData.email, e.target.parentElement.parentElement)}>Сообщить клиенту о доставке</button>
              ) : (<></>)
            }
          </Row>
          <Row>
            <p>{item.userData.comments} |</p>
            <button onClick={(e) => this.deleteOrder(e.target.parentElement.parentElement)}>delete</button>
          </Row>
        </Order>
      )
    })

    return (
      <div>
        <button onClick={this.resendAllOrders}>Перезалить заказы</button>
        <h2>Всего заказов - {orders.length}</h2>
        { list }
      </div>
    )
  }
}

export default OrdersList
