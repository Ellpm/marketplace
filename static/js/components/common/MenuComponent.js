import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FUCKING_LLEGAL_NAME_MANY } from '../../constans'

import {theme} from '../kit/theme'
import LinkComponent from './LinkComponent';

const Wrapper = styled.div`
  margin-left: 20%;
  margin-top: 20px;
  @media (max-width: ${theme.sizes.laptop}) {
    margin-left: 10%;
  }
`

const Menu = styled.ul`
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-top: 40px;
  }
`

const Item = styled.li`
  list-style-type: none;
  display: ${props => props.isHorisontal ? 'inline-block' : 'block'};
  margin-right: 30px;
  font-size: 20px;
  text-transform: uppercase;

  @media (max-width: ${theme.sizes.laptop}) {
    font-size: 18px;
    margin-right: 20px;
  }
  @media (max-width: ${theme.sizes.mobileL}) {
    font-size: 26px;
    margin-right: 20px;
    width: 100%;
    margin-bottom: 20px;
  }
`

const Lab = styled.p`
  margin-top: 15px;
  font-size: 13px;
`

const Lnk = styled.a`
  color: ${theme.color.gray} !important;
`

const generateMenuItems = (arr, orientation) => {
  const menu = arr.map(item => {
    let href = '/catalog/' + item.cat_id;
    if (item.show) {
      return (
        <Item isHorisontal = {orientation} key = {item.id}>
          <LinkComponent to={href}>{item.cat_name}</LinkComponent>
        </Item>
      );
    }

  });
  return menu;
}

const MenuComponent = (props) => {
  //console.log("MENU COMPONENT", props.items)
  return (
    <div>
      <Wrapper>
        <Menu>
          {generateMenuItems(props.items, props.isHorisontal)}
        </Menu>

          {/*<Lab><Lnk href="/points">Резерв продукции в {FUCKING_LLEGAL_NAME_MANY} в Москве и Московской области</Lnk></Lab>*/}

      </Wrapper>
    </div>
  )
}

MenuComponent.propsTypes = {
  isHorisontal: PropTypes.boolean
}

MenuComponent.defaultProps = {
  isHorisontal: true
}

export default MenuComponent
