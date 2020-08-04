import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {theme} from '../kit/theme'
import {Wrapper} from '../kit/Grid'

const BenefitsWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 80px;
  margin-left: 20px;
  height: 100%;
`

const BenefitsItem = styled.div`
  margin-right: 40px;
  position: relative;
  min-width: 200px;
  @media (max-width: ${theme.sizes.mobileL}) {
    width: 100%;
    margin-bottom: 60px;
    margin-right: 1px;
    min-width: 0;
  }
`

const Header = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-bottom: 60px;
  }
`

const ItemHeader = styled.h3`
  margin-bottom: 10px;
  height: 45px;
  z-index: 2;
  position: relative;
`

const ItemIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: -35px;
  margin-top: -20px;
  width: 60px;
  height: 60px;
  background: url(${props => props.icon}) no-repeat;
  z-index: 1;
`

const ItemText = styled.p`
  font-size: 15px;
  font-weight: bold;
  line-height: 1.4em;
  margin-top: 30px;
`

const Row = styled.div`
  display: flex;
  @media (max-width: ${theme.sizes.mobileL}) {
    min-width: 100%;
    min-height: 290px;
    display: flex;
    overflow-x: auto;
    padding-left: 50px;
    margin-left: -30px;
    padding-top: 20px;
  }
`

const Col = styled.div`
  flex: ${(props) => props.size};
  @media (max-width: ${theme.sizes.mobileL}) {
    display: inline-block;
    margin-bottom: 30px;
    margin-right: 40px;
    min-width: 230px;
    padding-right: 20px;
  }
`;

const OurBenefitsComponent = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header>Почему нам стоит доверять?</Header>
        <Row inlineBlock='xs'>
          <Col size={1} inlineBlock='xs'>
            <BenefitsItem>
              <ItemIcon icon="/img/common/smile.svg"></ItemIcon>
              <ItemHeader>ПРИВЛЕКАТЕЛЬНЫЕ ЦЕНЫ</ItemHeader>
              <ItemText>Цену на онлайн платформе определяет непосредственно производитель. Выгодные цены предоставляются за счет продажи упаковками</ItemText>
            </BenefitsItem>
          </Col>
          <Col size={1} inlineBlock='xs'>
            <BenefitsItem>
              <ItemIcon icon="/img/common/delivery.svg"></ItemIcon>
              <ItemHeader>НАЛИЧИЕ ПРОДУКЦИИ В ПУНКТАХ ВЫДАЧИ И ОПЛАТЫ</ItemHeader>
              <ItemText>Мы гарантируем готовность продукции к выдаче в выбранном вами пункте продажи в
Москве и Московской области через 24 часа при оформления резерва до 17-00 и ее
наличие в пункте продажи в течение 2-х рабочих дней (согласно графика работы
выбранного пункта продажи)</ItemText>
            </BenefitsItem>
          </Col>
          <Col size={1} inlineBlock='xs'>
            <BenefitsItem>
              <ItemIcon icon="/img/common/freshlike.svg"></ItemIcon>
              <ItemHeader>СВЕЖИЙ ПРОДУКТ</ItemHeader>
              <ItemText>У нас представлены только свежие пиво и напитки. Продукция поступает в пункты
продажи непосредственно от производителя или поставщика</ItemText>
            </BenefitsItem>
          </Col>
          <Col size={1} inlineBlock='xs'>
            <BenefitsItem>
              <ItemIcon icon="/img/common/dino.svg"></ItemIcon>
              <ItemHeader>ШИРОКИЙ АССОРТИМЕНТ</ItemHeader>
              <ItemText>Мы работаем с крупнейшими производителями и импортерами пива и напитков в Москве.
У нас большой выбор продукции со всего мира, от популярных марок воды до уникальных
сортов крафтового пива</ItemText>
            </BenefitsItem>
          </Col>
        </Row>
      </Wrapper>
    </ThemeProvider>
  )
}

export default OurBenefitsComponent
