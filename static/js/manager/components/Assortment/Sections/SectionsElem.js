import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SectionItem, SectionItemSelect } from './styled'

export class SectionElem extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {elem, isSelect} = this.props
    return (
      <>
      {
        isSelect ? (
          <SectionItemSelect>{elem.name}</SectionItemSelect>
        ) : (
          <SectionItem>{elem.name}</SectionItem>
        )
      }
      </>
    );
  }
}

SectionElem.propTypes = {
  elem: PropTypes.object.isRequired,
  isSelect: PropTypes.bool.isRequired
}

export default SectionElem;
