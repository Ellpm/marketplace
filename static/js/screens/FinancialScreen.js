import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import HeaderComponent from '../components/common/HeaderComponent'
import FooterComponent from '../components/common/FooterComponent'


import {theme} from '../components/kit/theme'
import {Grid, Row, Col, Wrapper} from '../components/kit/Grid'

const Header = styled.h3`
  margin-top: 20px;
  font-size: 24px;
`

const SubHeader = styled.h4`
  margin-top: 10px;
`

const Point = styled.p`
  margin-left: 10px;
  margin-bottom: 7px;
`

const InfoBlock = styled.div`
  height: 400px;
  margin-top: 30px;
`

const Item = styled.p`
  margin-bottom: 5px;
  margin-top: 5px;
`

export class FinancialScreen extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HeaderComponent />
          <Wrapper>
            <InfoBlock>
              <h1>Реквизиты</h1>

              <SubHeader>ООО "М ДИСТРИБЬЮШН"</SubHeader>

              <Item>ИНН:	5029189020</Item>
              <Item>КПП:	502901001</Item>
              <Item>ОГРН:	1145029010246</Item>
              <Item>ОКПО:	34855902</Item>

              <Item>Расчетный счет:	40702810140000000624</Item>
              <Item>Банк:	ПАО "СБЕРБАНК РОССИИ"</Item>
              <Item>БИК:	044525225</Item>
              <Item>Корр. счет:	30101810400000000225</Item>

              <Item>Юридический адрес:	141006, Московская обл, Мытищи г, Воронина ул, строение 15/2, помещение 5А</Item>
              <Item>Телефон:	84955029301</Item>

            </InfoBlock>
            <InfoBlock>
              <h1>Реквизиты</h1>


              <SubHeader>ООО Лит.Ра</SubHeader>
              <Item>Реквизиты</Item>

            </InfoBlock>
          </Wrapper>
        <FooterComponent />
      </ThemeProvider>
    );
  }
}

FinancialScreen.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default FinancialScreen;
