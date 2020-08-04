import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import {theme} from '../../kit/theme'

const Filter = styled.div`
  padding: 4px;
  border: 1px solid ${props => props.theme.color.green};
  color: ${props => props.theme.color.green};
  width: 70%;
  border-radius: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
`
 
const ActiveFilter = styled(Filter)`
  background: ${props => props.theme.color.green};
  color: ${props => props.theme.color.white};
  box-shadow: inset 1px 1px 3px rgba(0,0,0, 0.3);
`

const FilterItem = (props) => {
  //console.log(props)
  return (
    <ThemeProvider theme={theme}>
      {
        props.isActive ?
        (
          <ActiveFilter onClick={props.func}>
            {props.name}
          </ActiveFilter>
        )
        :
        (
          <Filter onClick={props.func}>
            {props.name}
          </Filter>
        )
      }
    </ThemeProvider>
  )
}

export default FilterItem
