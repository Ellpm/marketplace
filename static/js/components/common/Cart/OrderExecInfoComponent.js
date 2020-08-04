import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {theme} from '../../kit/theme'
import PickUpForm from './PickUpFormComponent'

const Wrapper = styled.div`
  margin-left: 30px;
  margin-top: 40px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 5px;
    margin-top: 40px;
  }
`


export class OrderExecInfo extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    deliveryFormShow: true,
    pickUpFormShow: false,
  }

  componentDidMount = () => {

  }


  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
            <PickUpForm
              nameValue={this.props.nameValue}
              phoneValue={this.props.phoneValue}
              emailValue={this.props.emailValue}
              commentsValue={this.props.commentsValue}
              userInputHandler={this.props.userInputHandler}
              methodPay={this.props.methodPay}
              changeMethodPay={this.props.changeMethodPay}
              pickPointHandler={this.props.pickPointHandler}
              pickupPoint={this.props.pickupPoint}
            />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

OrderExecInfo.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default OrderExecInfo
