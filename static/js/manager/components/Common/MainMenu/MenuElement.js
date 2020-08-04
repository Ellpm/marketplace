import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {theme} from '../../../kit/theme'
import { Element, Name, Link } from './styled'

/**
 * MenuElement
 */
export class MenuElement extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {elem, current} = this.props
    return (
      <Element
        background={current ? theme.colors.darkGray : theme.colors.white}
      >
        <Name
          color={current ? theme.colors.white : theme.colors.black}
        >
          {
            current ? (
              elem.name
            ) : (
              <Link href={elem.href}>{elem.name}</Link>
            )
          }
        </Name>
      </Element>
    );
  }
}

MenuElement.propTypes = {
  elem: PropTypes.object.isRequired,
  current: PropTypes.bool.isRequired
}


export default MenuElement;
