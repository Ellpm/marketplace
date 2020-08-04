import React from 'react'
//import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import { theme } from '../../components/kit/theme'
import {Grid, Row, Col} from '../../components/kit/Grid'
import PromoMenuBlock from './PromoMenuBlock'
//import OurBenefitsComponent from '../../components/common/OurBenefitsComponent'
import HowToOrderComponent from '../../components/common/HowToOrderComponent'
//import BenefitsCopy from '../../components/common/BenefitsCopy'
import OurResponsibility from '../../components/common/OurResponsibility'

export const Wrapper = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-right: 1px;
    margin-left: 20px;
  }
`

const PromoInfo = styled.div`
  margin-top: 50px;
  margin-right: 60px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-right: 1px;
    width: 95%;
  }
`;

const PromoInfoHeader = styled.h1`
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
`;

const SimpleLogo = styled.div`
  background: url('/img/logo/simpleLogo.svg') no-repeat;
  display: inline-block;
  width: 230px;
  height: 35px;
  margin-top: 6px;
  margin-right: 10px;
  background-size: contain;
  @media (max-width: ${theme.sizes.mobileL}) {
    width: 80%;
  }
`

const PromoText = styled.p`
  font-family: 'Oswald';
  font-size: 20px;
`

const MainPageContent = (props) => {
  return (
      <Wrapper>
        <Row>
          <Col size={4} collapse="xs">
          </Col>
          <Col size={8}>
            <PromoInfo>
              <PromoInfoHeader><SimpleLogo /> что выбрать?</PromoInfoHeader>
              <PromoText>Пиво и напитки от лучших российских и зарубежных производителей. Nestle Pure Life, премиальные соки PAGO, популярные энергетические напитки и многое другое.</PromoText>
            </PromoInfo>
          </Col>
        </Row>
        <PromoMenuBlock></PromoMenuBlock>
        <div style={{paddingLeft: '40px'}}>
          {/*<OurBenefitsComponent></OurBenefitsComponent>*/}
          <HowToOrderComponent />
          <OurResponsibility />
        </div>
      </Wrapper>
  )
}

export default MainPageContent
