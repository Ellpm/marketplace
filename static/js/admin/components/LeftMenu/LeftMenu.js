import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './leftMenu.css'

const Menu = styled.div`
  height: 100%;
  min-height: ${window.innerHeight}px;
  background: #B7B7B7;
  color: #ffffff;
`

const Wrapper = styled.div`
  padding: 10px;
  padding-left: 30px;
`

const BaseHref = '/ffhdsksdkfsh'

const LeftMenu = (props) => {
  return (
    <Menu>
      <Wrapper>
        <ul>
          <li><a href={BaseHref + '/products'}>Ассортимент</a></li>
          <li><a href={BaseHref + '/orders'}>Заказы</a></li>
          <li><a href={BaseHref + '/reports'}>Отчеты</a></li>
          <li><a href={BaseHref + '/banners'}>Баннеры</a></li>
          <li><a href={BaseHref + '/employers'}>Сотрудники</a></li>
        </ul>
      </Wrapper>
    </Menu>
  )
}

export default LeftMenu
