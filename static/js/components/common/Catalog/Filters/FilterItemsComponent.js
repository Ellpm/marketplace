import React from 'react';
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import Filter from './FilterComponent'
import {theme} from '../../../kit/theme'

import './filter.css'

const FilterItems = (props) => {
  const {placeholderStyle} = props
  return(
    <div style={{width: '100%'}}>
      { !props.hideTypes ? (
        <Filter
          values={props.typesValues}
          onChangeHandler={props.typesChangeHandler}
          placeholder={placeholderStyle}
          header="по типу"
          isHorisontal={props.isHorisontal || true}
          headerSize={props.headerSize}
        />
      )
        : (<></>) }
        <Filter
          defaultValue=""
          name="color"
          values={props.brandValues}
          onChangeHandler={props.brandChangeHandler}
          header="по брендам"
          placeholder="выберите бренд"
          headerSize={props.headerSize}
          className="my-react-select"
        />
      {/*<Filter
          values={props.volumeValues}
          onChangeHandler={props.volumeChangeHandler}
          header="по объему"
          placeholder="выберите объем"
          headerSize={props.headerSize}
        />*/}
        <Filter
          values={props.countryValues}
          onChangeHandler={props.countryChangeHandler}
          header="по странам"
          placeholder="выберите страну"
          headerSize={props.headerSize}
        />
    </div>
  )
}

FilterItems.propTypes = {
  placeholderStyle: PropTypes.string
}

FilterItems.defaultProps  = {
  placeholderStyle: 'выберите стиль'
}

export default FilterItems
