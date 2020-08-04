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

export class AboutUsScreen extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HeaderComponent />
          <Wrapper>
            <InfoBlock>
              <h1>О компании</h1>
            </InfoBlock>
          </Wrapper>
        <FooterComponent />
      </ThemeProvider>
    );
  }
}

AboutUsScreen.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default AboutUsScreen;
