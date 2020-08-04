import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {ORDER_INFO_LOCAL_STORAGE} from '../constans'
import HeaderComponent from '../components/common/HeaderComponent'
import FooterComponent from '../components/common/FooterComponent'
import SameProducts from '../components/common/SameProductsCmoponent'
import OrderInfoComponent from '../components/common/Cart/OrderInfoComponent'

import QRCode from 'qrcode.react'

import {theme} from '../components/kit/theme'
import {Grid, Row, Col, Wrapper} from '../components/kit/Grid'

const Info = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`

export class PickUpOrderFinal extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {

  }

  componentDidMount() {
    this.getOrderInfo()
  }

  getOrderInfo = () => {
    let order = localStorage.getItem(ORDER_INFO_LOCAL_STORAGE)
    this.setState({...JSON.parse(order)})
    //console.log(JSON.parse(order))
  }

  render() {
    console.log(this.state)
    return (
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <Wrapper>
          <Info>
            <h1>Спасибо за заказ!</h1>
            <h4>Заказ № {this.state.orderId} успешно оформлен</h4>
            <div>
              <div>
                <p>Статус заказа вы получите на почтовый ящик {this.state.email} </p>
              </div>
            </div>
          </Info>
          <div>
            <h2></h2>
            { /*<SameProducts />*/}
          </div>
        </Wrapper>
        <FooterComponent />
      </ThemeProvider>
    );
  }
}

PickUpOrderFinal.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default PickUpOrderFinal;
