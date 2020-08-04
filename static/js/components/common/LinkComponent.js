import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {theme} from '../kit/theme';

const Link = styled.a`
  color: ${props => props.color || props.theme.color.white};
  text-decoration: none;

  :hover {
    color: ${props => props.theme.color.green};
  }
`

const LinkComponent = (props) => {
  return (
    <Link
      color={props.color}
      href={props.to}
    >
      {props.children}
    </Link>
  )
}

LinkComponent.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string
}

LinkComponent.defaultProps = {
  color: theme.color.white,
}

export default LinkComponent
