import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useSelector, shallowEqual } from 'react-redux'
import styled, {ThemeProvider} from 'styled-components'

import {theme} from '../kit/theme';
import {size} from '../settings/devices';
import {Grid, Row, Col} from '../kit/Grid';

import LogoComponent from './LogoComponent';
import MenuComponent from './MenuComponent';
import BasketComponent from './Header/BasketComponent';
import BurgerMenu from './Modals/BurgerMenuModal';


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

const Header = styled.div`
  height: 145px;
  width: 100%;
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};
  position: relative;
  @media (max-width: ${theme.sizes.mobileL}) {
    width: 100%;
    height: 160px;
  }
`

const Column = styled.div`
  flex: ${(props) => props.size};

  ${(props) => props.hide && media[props.hide](`
    display: none;
  `)};
`

const Wrapper = styled.div`
  padding-left: 60px;
  padding-top: 30px;

  @media (max-width: ${theme.sizes.mobileL}) {
    padding-left: 20px;
  }
`;

const DeliveryInfo = styled.p`
  margin-left: 20%;
  color: ${props => props.theme.color.darkGray};

  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 0;
    font-size: 14px;
  }
`;

const BurgerIcon = styled.span`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 1.2em;
  margin-right: 0.6em;
  border-top: 0.2em solid #fff;
  border-bottom: 0.2em solid #fff;
  :before {
    content: "";
    position: absolute;
    top: 0.5em;
    left: 0px;
    width: 100%;
    border-top: 0.2em solid #fff;
  }
`


const HeaderComponent = (props) => {

  const [isMenuOpen, toogleMenu] = useState(false)
  const categories = useSelector(state => state.categories, shallowEqual)
  //console.log("HEADER CATS", categories)

  const onClickBurgerIconHandler = () => {
    toogleMenu(!isMenuOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Wrapper>
            <Row>
              <Column size={1} hide="lg">
                <BurgerIcon onClick={onClickBurgerIconHandler} />
              </Column>
              <Column size={4}>
                <LogoComponent />
              </Column>
              <Column size={9} hide="xs">
                { categories.loaded ? (
                  <MenuComponent items={categories.entitys} />
                ) : (
                  <p>Загрузка</p>
                ) }
              </Column>
              <Col size={1}>
                {/*<BasketComponent />*/}
              </Col>
            </Row>
        </Wrapper>
        <div
          style={{
            textAlign: 'center',
            marginTop: '10px',
            background: '#EEEEEE',
            color: 'black',
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            fontWeight: 'bold',
            padding: '5px'
          }}
        >
          <p>Онлайн-платформа Getdrinks.ru откроется уже скоро!</p>
        </div>
      </Header>
      { categories.loaded ? (
        <BurgerMenu isOpen={isMenuOpen} close={onClickBurgerIconHandler} items={categories.entitys} />
      ) : (<></>) }
    </ThemeProvider>
  )
}

HeaderComponent.propsTypes = {
  isMenuShow: PropTypes.boolean,
  isBasketShow: PropTypes.boolean
}

HeaderComponent.defaultProps = {
  isMenuShow: true,
  isBasketShow: true
}

export default HeaderComponent
