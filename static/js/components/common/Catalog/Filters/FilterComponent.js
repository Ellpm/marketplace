import React from 'react';
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import Select from 'react-select';
import {theme} from '../../../kit/theme'

const Wrapper = styled.div`
  display: inline-block;
  width: 19%;
  @media (max-width: ${theme.sizes.mobileL}) {
    display: block;
    width: 80%;
  }
`

const FiltersBlock = styled.div`
  height: 80px;
  border-right: 1px solid ${props => props.theme.color.gray};
  padding-left: 20px;
  padding-right: 20px;
`

const Header = styled.p`
  color: ${props => props.theme.color.darkGray};
  font-size: ${props => props.headerSize || '14px'};
`

const Filter = (props) => {
  return(
    <Wrapper isHorisontal={props.isHorisontal}>
      <FiltersBlock>
        <Header headerSize={props.headerSize}>{props.header}</Header>
        <Select
          options={props.values}
          onChange={props.onChangeHandler}
          placeholder={props.placeholder || "Выберите значение"}
          isMulti
        />
      </FiltersBlock>
    </Wrapper>
  )
}

Filter.propTypes = {
  header          : PropTypes.string,
  headerSize      : PropTypes.string,
  values          : PropTypes.array.isRequired,
  onChangeHandler : PropTypes.func.isRequired,
  isMulti         : PropTypes.bool,
  isHorisontal    : PropTypes.bool,
}

Filter.defaultProps  = {
  header      : 'Имя фильтра',
  isMulti     : true,
  isHorisontal: true,
}

export default Filter
