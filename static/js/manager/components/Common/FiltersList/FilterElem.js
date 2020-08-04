import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FilterBlock, FilterName, Arrow } from './styled'

export class FilterElem extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {elem} = this.props
    return (
      <FilterBlock>
        <FilterName>{elem.name}</FilterName>
        <Arrow></Arrow>
      </FilterBlock>
    );
  }
}

FilterElem.propTypes = {
  elem: PropTypes.object.isRequired
}

export default FilterElem;
