import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {Wrapper, Input, Selection, Label, NameBlock} from './styled-components'


import {theme} from '../../kit/theme'
import {Row, Col} from '../../kit/Grid'

/**
 * PayTypeChoose <p><input type="radio" value="online" name="pay" checked={this.props.methodPay === 'online'} onChange={this.props.changeMethodPay} /> Оплата картой</p>
 */
export class PayTypeChoose extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Row>
        <Col size={1}>

        </Col>
        <Col size={1}>
          <p>
            <input
              type="radio"
              value="cash"
              name="pay"
              checked={this.props.methodPay === 'cash'}
              onChange={this.props.changeMethodPay} style={{display: 'none'}} />
            Оплата производится в пункте выдачи и оплаты резерва после непосредственного ознакомления с покупателя с товаром
          </p>
          <p></p>
        </Col>
      </Row>
    );
  }
}

PayTypeChoose.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default PayTypeChoose;
