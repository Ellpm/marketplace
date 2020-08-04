import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import LinkComponent from './LinkComponent'

const Button = styled.div`
  width: ${props => props.width};
  text-align: center;
  vertical-align: middle;
  background: ${props => props.width || props.theme.color.green};
  cursor: pointer;
  color: ${props => props.theme.color.white};
  display: inline-block;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 3px;
`

const ButtonComponent = (props) => {

  return (
    <Button
      width={props.width}
      onClick={props.func}
      border={props.border}
      background={props.background}
      color={props.color}
      height={props.height}
    >
      {props.children}
    </Button>
  )
}

ButtonComponent.propTypes = {
  isLink: PropTypes.bool,
  href: PropTypes.string,
  width: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  func: PropTypes.func,
  height: PropTypes.string
}

ButtonComponent.defaultProps = {
  isLink: true
}

export default ButtonComponent
