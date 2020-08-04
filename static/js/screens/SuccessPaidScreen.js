import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import HeaderComponent from '../components/common/HeaderComponent'
import FooterComponent from '../components/common/FooterComponent'
import SameProducts from '../components/common/SameProductsCmoponent'


import {theme} from '../components/kit/theme'
import {Grid, Row, Col, Wrapper} from '../components/kit/Grid'

const Info = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`

export class SuccessPaid extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <Wrapper>
          <Info>
            <h1>Спасибо за покупку!</h1>
            <h2>Заказ № 2345432345654 успешно оплачен</h2>
            <div>
              <p>Заказ находится на комплектации, статус заказа вы получите на e-mail: sergey.pisarevskiy@yande.ru </p>
            </div>
          </Info>
          <div>
            <h2></h2>
            <SameProducts />
          </div>
        </Wrapper>
        <FooterComponent />
      </ThemeProvider>
    );
  }
}

SuccessPaid.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default SuccessPaid;
