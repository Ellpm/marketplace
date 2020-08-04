import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Block, H1 } from '../../../kit/styled'
import Search from '../Search/Search'
import FilterElem from './FilterElem'

/**
 * FiltersList
 */
export class FiltersList extends Component { // eslint-disable-line react/prefer-stateless-function

  renderFilters = () => {
    const {filters} = this.props
    if (Array.isArray(filters)) {
      const result = filters.map(filter => {
        return(
            <FilterElem elem={filter} />
        )
      })
      return result
    } else {
      return false
    }
  }

  render() {
    return (
      <Block padding={this.props.noSelfPadding ? '0' : undefined}>
        <H1>Фильтры</H1>
        <Search />
        { this.renderFilters() }
      </Block>
    );
  }
}

FiltersList.propTypes = {
  filters: PropTypes.array.isRequired,
  noSelfPadding: PropTypes.bool
}

export default FiltersList;
