import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SERVER_ADDR } from '../../../constans'
const baseHref = '/ffhdsksdkfsh/products'

const List = styled.ul`
  margin: 10px;
  margin-bottom: 15px;
`

const Item = styled.li`
  list-style-type: none;
  display: inline-block;
  margin-right: 15px;
`

class ProductMenu extends Component {

  render() {
    return (
      <List>
        <Item><a href={baseHref}>Продукты</a></Item>
        <Item><a href={baseHref + "/brands"}>Бренды</a></Item>
        <Item><a href={baseHref + "/volumes"}>Объёмы</a></Item>
        <Item><a href={baseHref + "/packages"}>Типы упаковки</a></Item>
        <Item><a href={baseHref + "/categories"}>Категории</a></Item>
        <Item><a href={baseHref + "/subcategories"}>Подкатегории</a></Item>
        <Item><a href={baseHref + "/collections"}>Коллекции</a></Item>
        <Item><a href={baseHref + "/countries"}>Страны</a></Item>
      </List>
    )
  }
}

export default ProductMenu
