import React, { Component } from 'react'

import {menu} from './menuData'
import { Block } from '../../../kit/styled'
import MenuElement from './MenuElement'
/**
 * MainMenu
 */
export class MainMenu extends Component { // eslint-disable-line react/prefer-stateless-function

  renderMenu = () => {
    const location = window.location.href.split('/')
    const result = menu.map(elem => {
      let isCurrent = false
      if (elem.id === location[4]) {
        isCurrent = true
      }
      return(
        <MenuElement
          key={elem.id}
          elem={elem}
          current={isCurrent}
        />
      )
    })
    return result
  }

  render() {
    const location = window.location.href.split('/')
    console.log(location[4])
    return (
      <Block padding="0">
        {this.renderMenu()}
      </Block>
    );
  }
}


export default MainMenu;
